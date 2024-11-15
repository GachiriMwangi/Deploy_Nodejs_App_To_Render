const express = require('express')
require('dotenv').config()
const app = express()
app.get("/api", (req, res) => {
    res.status(200).json({
        success: true, 
        message: "Api Working Perfect!", 
        data: {
            id: 1, 
            firstname: 'Henry', 
            lastname: 'Desagu', 
            phone: '+25414837483', 
            residence: {
                 street: 'Black', 
                city: 'City Walk'
            }
        }
    })
})

app.listen(() => console.log(`App listening on port ${process.env.PORT}`))