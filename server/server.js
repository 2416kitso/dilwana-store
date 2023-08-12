const express = require('express')
const app = express()
const port = process.env.PORT || 5000

app.get('/', (req, res) => {
    res.json({"users": ['Maitumelo', 'Kitso', 'Tsogang']})
})


app.listen(port, () => console.log(`Example app listening on http://localhost:${port}`))