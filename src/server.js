const express = require('express')

let PORT = process.env.PORT || 4000

const app = express()

app.listen(PORT, () => console.log(`Server running on ${PORT}`))
