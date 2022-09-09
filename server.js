import express from 'express'
const app = express()
const port = 3000

/**
 * Test
 */
import mobileFriendlyTest from './index.js'

const apiKey = ''
const url = 'https://www.spacejam.com/1996/'

mobileFriendlyTest(url, apiKey)

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get('/', async (req, res) => {
  res.send('test')
})

app.listen(port, () => console.log(`Server: http://localhost:3000/`))
