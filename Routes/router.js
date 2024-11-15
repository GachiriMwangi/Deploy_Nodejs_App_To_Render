import Router from 'express'

const router = Router()


router.get("/", (req, res) => {
    res.send("<h1>Welcome Home.</h1>")
})

router.get("/api", (req, res) => {
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

export default router