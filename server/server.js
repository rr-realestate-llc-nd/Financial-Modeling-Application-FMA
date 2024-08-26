const express = require('express')
const app = express()

app.get("/api", (req, res) => {
    res.json({
        "users": [
            {
                "id": 1,
                "name": "Ryan Olson",
                "email": "ryanpolson3@gmail.com",
                "age": 34
            },
            {
                "id": 2,
                "name": "Robert Gelin",
                "email": "robertdgelin@hotmail.com",
                "age": 33
            },
            {
                "id": 3,
                "name": "John Doe",
                "email": "johndoe@yahoo.com",
                "age": 65
            }
        ]
    })
})

// Server Port: 5001
const serverPort = process.env.serverPort || 5001;
// Client Port: 3000
app.listen(serverPort, () => { console.log(`Server started on port ${serverPort}`) })