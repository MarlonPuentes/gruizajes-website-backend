import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'

dotenv.config()

const app = express()
const PORT = process.env.PORT || 4000
const CLIENT_ORIGIN = process.env.CLIENT_ORIGIN || 'http://localhost:5173'

app.use(cors({
  origin: CLIENT_ORIGIN
}))
app.use(express.json())

app.get('/', (req, res) => {
  res.json({ status: 'ok', message: 'Backend de gruizajes funcionando' })
})

app.post('/api/contact', (req, res) => {
  const { nombre, telefono, email, mensaje } = req.body || {}

  if (!nombre || !telefono || !mensaje) {
    return res.status(400).json({
      error: 'Faltan datos obligatorios (nombre, telefono, mensaje)'
    })
  }
 

  console.log('Nueva solicitud de contacto:', {
    nombre,
    telefono,
    email,
    mensaje,
    fecha: new Date().toISOString()
  })

  return res.status(201).json({
    message: 'Solicitud recibida. Nos contactaremos contigo pronto.'
  })
})

app.listen(PORT, () => {
  console.log(`Backend escuchando en http://localhost:${PORT}`)
  console.log(`Aceptando peticiones desde: ${CLIENT_ORIGIN}`)
})
