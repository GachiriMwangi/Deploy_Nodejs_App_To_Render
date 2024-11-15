import Router from 'express'
import fs from 'fs'
const router = Router()

const fetchData = async() => {

}

router.get("/", (req, res) => {
    res.send("<h1>Welcome Home.</h1>")
})

router.get("/api", (req, res) => {
    res.status(200).json({
        success: true, 
        message: "Api Working Perfect!", 
        data: {
           
        }
    })
})

router.get('/api/data', (req, res) => {
    fs.readFile('./data.json', 'utf8', (err, data) => {
        if (err) {
            return res.status(500).json({ message: 'Error reading data' });
        }
        res.json(JSON.parse(data));
    });
});
export default router