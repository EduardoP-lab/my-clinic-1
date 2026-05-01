import { useEffect, useRef } from 'react'

const contactVertexShader = `
  attribute vec2 aPosition;
  varying vec2 vUv;

  void main() {
    vUv = aPosition * 0.5 + 0.5;
    gl_Position = vec4(aPosition, 0.0, 1.0);
  }
`

const contactFragmentShader = `
  precision highp float;

  uniform float uTime;
  uniform vec2 uResolution;

  varying vec2 vUv;

  float hash(vec2 p) {
    p = fract(p * vec2(123.34, 456.21));
    p += dot(p, p + 45.32);
    return fract(p.x * p.y);
  }

  float noise(vec2 p) {
    vec2 i = floor(p);
    vec2 f = fract(p);
    vec2 u = f * f * (3.0 - 2.0 * f);

    return mix(
      mix(hash(i), hash(i + vec2(1.0, 0.0)), u.x),
      mix(hash(i + vec2(0.0, 1.0)), hash(i + vec2(1.0, 1.0)), u.x),
      u.y
    );
  }

  float fbm(vec2 p) {
    float value = 0.0;
    float amplitude = 0.5;

    for (int i = 0; i < 5; i++) {
      value += amplitude * noise(p);
      p = p * 2.02 + vec2(17.4, 9.2);
      amplitude *= 0.5;
    }

    return value;
  }

  float gridLine(vec2 p, float scale, float width) {
    vec2 grid = abs(fract(p * scale - 0.5) - 0.5);
    float line = min(grid.x, grid.y);
    return 1.0 - smoothstep(0.0, width, line);
  }

  float starField(vec2 uv, float time) {
    vec2 cells = uv * vec2(28.0, 18.0);
    vec2 id = floor(cells);
    vec2 local = fract(cells) - 0.5;
    float rnd = hash(id);
    float size = mix(0.014, 0.04, hash(id + 4.7));
    float dotShape = smoothstep(size, 0.0, length(local));
    float twinkle = 0.58 + 0.42 * sin(time * 2.3 + rnd * 6.2831);

    return dotShape * step(0.76, rnd) * twinkle;
  }

  void main() {
    vec2 uv = vUv;
    vec2 aspectUv = uv;
    aspectUv.x *= uResolution.x / max(uResolution.y, 1.0);

    vec2 center = vec2(0.5 * uResolution.x / max(uResolution.y, 1.0), 0.52);
    float distanceFromCenter = length(aspectUv - center);
    float vignette = smoothstep(0.98, 0.18, distanceFromCenter);

    vec3 deep = vec3(0.006, 0.027, 0.046);
    vec3 blue = vec3(0.02, 0.32, 0.58);
    vec3 cyan = vec3(0.48, 0.86, 1.0);
    vec3 mint = vec3(0.08, 0.72, 0.62);

    float field = fbm(aspectUv * 2.0 + vec2(uTime * 0.055, -uTime * 0.025));
    float aurora = smoothstep(0.38, 0.86, field + uv.y * 0.32);
    float ribbon = smoothstep(
      0.08,
      0.0,
      abs(uv.y - 0.52 - sin(uv.x * 6.0 + uTime * 0.52) * 0.075)
    );

    vec3 color = mix(deep, blue, vignette * 0.42);
    color += cyan * aurora * 0.18;
    color += mint * ribbon * 0.24;

    vec2 gridUv = vec2((uv.x - 0.5) / max(1.0 - uv.y * 0.58, 0.24), uv.y + uTime * 0.055);
    float horizon = smoothstep(0.28, 0.84, uv.y);
    float grid = gridLine(gridUv, 16.0, 0.018) * horizon * smoothstep(1.0, 0.24, uv.y);
    color += cyan * grid * 0.18;

    float scan = smoothstep(0.018, 0.0, abs(uv.y - fract(uTime * 0.12) - sin(uv.x * 5.4) * 0.018));
    color += cyan * scan * 0.18;

    float stars = starField(uv + vec2(0.0, -uTime * 0.018), uTime);
    color += vec3(0.82, 0.98, 1.0) * stars * 0.52;

    float glowLeft = smoothstep(0.62, 0.0, length(aspectUv - vec2(0.22, 0.3)));
    float glowRight = smoothstep(0.58, 0.0, length(aspectUv - vec2(uResolution.x / max(uResolution.y, 1.0) - 0.2, 0.72)));
    color += cyan * glowLeft * 0.14;
    color += mint * glowRight * 0.13;

    color *= 0.82 + vignette * 0.22;
    gl_FragColor = vec4(color, 0.94);
  }
`

const contactFields = [
  {
    id: 'name',
    label: 'Nombre',
    type: 'text',
    autoComplete: 'name',
    placeholder: 'Tu nombre',
  },
  {
    id: 'email',
    label: 'Correo electronico',
    type: 'email',
    autoComplete: 'email',
    placeholder: 'correo@ejemplo.com',
  },
  {
    id: 'phone',
    label: 'Numero de celular',
    type: 'tel',
    autoComplete: 'tel',
    placeholder: '+52 000 000 0000',
  },
]

function Contact() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)')
    const gl = canvas.getContext('webgl', {
      alpha: true,
      antialias: true,
      powerPreference: 'high-performance',
      premultipliedAlpha: false,
    })

    if (!gl) return undefined

    const compileShader = (type, source) => {
      const shader = gl.createShader(type)

      if (!shader) return null

      gl.shaderSource(shader, source)
      gl.compileShader(shader)

      if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
        gl.deleteShader(shader)
        return null
      }

      return shader
    }

    const vertexShader = compileShader(gl.VERTEX_SHADER, contactVertexShader)
    const fragmentShader = compileShader(gl.FRAGMENT_SHADER, contactFragmentShader)

    if (!vertexShader || !fragmentShader) return undefined

    const program = gl.createProgram()

    if (!program) {
      gl.deleteShader(vertexShader)
      gl.deleteShader(fragmentShader)
      return undefined
    }

    gl.attachShader(program, vertexShader)
    gl.attachShader(program, fragmentShader)
    gl.linkProgram(program)

    if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
      gl.deleteProgram(program)
      gl.deleteShader(vertexShader)
      gl.deleteShader(fragmentShader)
      return undefined
    }

    const positions = new Float32Array([
      -1, -1, 1, -1, -1, 1,
      -1, 1, 1, -1, 1, 1,
    ])
    const positionBuffer = gl.createBuffer()

    if (!positionBuffer) {
      gl.deleteProgram(program)
      gl.deleteShader(vertexShader)
      gl.deleteShader(fragmentShader)
      return undefined
    }

    const positionLocation = gl.getAttribLocation(program, 'aPosition')
    const timeLocation = gl.getUniformLocation(program, 'uTime')
    const resolutionLocation = gl.getUniformLocation(program, 'uResolution')

    gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer)
    gl.bufferData(gl.ARRAY_BUFFER, positions, gl.STATIC_DRAW)
    gl.useProgram(program)
    gl.enableVertexAttribArray(positionLocation)
    gl.vertexAttribPointer(positionLocation, 2, gl.FLOAT, false, 0, 0)
    gl.disable(gl.DEPTH_TEST)
    gl.disable(gl.CULL_FACE)

    let frameId = 0
    let isVisible = false
    let isReducedMotion = mediaQuery.matches
    let startedAt = performance.now()

    const resizeCanvas = () => {
      const rect = canvas.getBoundingClientRect()
      const width = Math.max(Math.floor(rect.width), 1)
      const height = Math.max(Math.floor(rect.height), 1)
      const pixelRatio = Math.min(window.devicePixelRatio || 1, 2.2)
      const canvasWidth = Math.floor(width * pixelRatio)
      const canvasHeight = Math.floor(height * pixelRatio)

      if (canvas.width !== canvasWidth || canvas.height !== canvasHeight) {
        canvas.width = canvasWidth
        canvas.height = canvasHeight
      }

      gl.viewport(0, 0, canvasWidth, canvasHeight)
      gl.uniform2f(resolutionLocation, canvasWidth, canvasHeight)
    }

    const renderFrame = () => {
      const time = isReducedMotion
        ? 0
        : (performance.now() - startedAt) / 1000

      gl.useProgram(program)
      gl.uniform1f(timeLocation, time)
      gl.drawArrays(gl.TRIANGLES, 0, 6)
    }

    const animate = () => {
      if (!isVisible || isReducedMotion) return

      renderFrame()
      frameId = window.requestAnimationFrame(animate)
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        isVisible = entry.isIntersecting

        if (isVisible) {
          window.cancelAnimationFrame(frameId)
          renderFrame()
          frameId = window.requestAnimationFrame(animate)
        } else {
          window.cancelAnimationFrame(frameId)
        }
      },
      { threshold: 0.04 },
    )

    const handleMotionChange = (event) => {
      isReducedMotion = event.matches

      if (isReducedMotion) {
        window.cancelAnimationFrame(frameId)
        renderFrame()
      } else if (isVisible) {
        window.cancelAnimationFrame(frameId)
        startedAt = performance.now()
        frameId = window.requestAnimationFrame(animate)
      }
    }

    resizeCanvas()
    renderFrame()
    observer.observe(canvas)
    mediaQuery.addEventListener('change', handleMotionChange)

    const resizeObserver = new ResizeObserver(resizeCanvas)
    resizeObserver.observe(canvas)

    return () => {
      observer.disconnect()
      resizeObserver.disconnect()
      window.cancelAnimationFrame(frameId)
      mediaQuery.removeEventListener('change', handleMotionChange)
      gl.deleteBuffer(positionBuffer)
      gl.deleteProgram(program)
      gl.deleteShader(vertexShader)
      gl.deleteShader(fragmentShader)
    }
  }, [])

  const handleSubmit = (event) => {
    event.preventDefault()
  }

  return (
    <section
      id="contacto"
      className="contact-section relative grid min-h-screen place-items-center overflow-hidden px-4 py-24 sm:px-6 lg:px-10"
    >
      <canvas ref={canvasRef} className="contact-canvas" aria-hidden="true" />

      <form
        className="contact-form"
        aria-label="Formulario de contacto"
        onSubmit={handleSubmit}
      >
        <div className="contact-form-header">
          <p>Contacto</p>
          <h2>Agenda tu valoracion</h2>
        </div>

        <div className="contact-fields">
          {contactFields.map((field) => (
            <label className="contact-field" htmlFor={field.id} key={field.id}>
              <span>{field.label}</span>
              <input
                id={field.id}
                type={field.type}
                name={field.id}
                autoComplete={field.autoComplete}
                placeholder={field.placeholder}
                required
              />
            </label>
          ))}

          <label className="contact-field contact-field-message" htmlFor="message">
            <span>Mensaje</span>
            <textarea
              id="message"
              name="message"
              placeholder="Cuentanos que necesitas"
              rows="5"
              required
              className='!resize-none'
            />
          </label>
        </div>

        <button className="contact-submit" type="submit">
          Enviar mensaje
        </button>
      </form>
    </section>
  )
}

export default Contact
