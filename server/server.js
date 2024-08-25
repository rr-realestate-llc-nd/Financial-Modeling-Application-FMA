const express = require('express')
const app = express()

app.get("/api", (req, res) => {
    res.json({ "users": ["userOne", "userTwo", "userThree"] })
})

// Server Port: 5001
const serverPort = process.env.serverPort || 5001;
// Client Port: 3000
app.listen(serverPort, () => { console.log(`Server started on port ${serverPort}`) })