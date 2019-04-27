const express = require('express')
const bodyParser = require('body-parser')

const app = express()
const port = 5000
app.use(bodyParser.json())

app.post('/', (req, res) => {
  console.log(req.body)


  res.send({
    replies: [{
      type: 'text',
      content: 'Warte einen Moment, dein Vorschlag wird erstellt...',
    }],
    conversation: {
      memory: { key: 'value' }
    }
  })
})

app.get('/', (req, res) => res.send('Hello world!'))

app.post('/errors', (req, res) => {
  console.log(req.body)
  res.send()
})

app.listen(port, () => {
  console.log('Server is running on port 5000')
})
