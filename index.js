const express = require('express')
const path = require('path')

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, 'public')))


app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'root.html'))
})

app.get('/temp', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'temp.html'))
})

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`)
})