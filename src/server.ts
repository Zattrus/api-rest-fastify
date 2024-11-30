import fastify from 'fastify'

const app = fastify()

app.get('/', () => {
  return 'Hello Node Js!!!'
})

app
  .listen({
    port: 3000,
  })
  .then(() => {
    console.log('Server is running on http://localhost:3000')
  })
