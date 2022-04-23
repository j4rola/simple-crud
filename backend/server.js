require('dotenv').config()
const User = require('./models/userModel.js')
const Item = require('./models/itemModel.js')
const express = require('express') 
const app = express() 
const asyncHandler = require('express-async-handler')
const jwt = require('jsonwebtoken')
const connectDB = require('./config/db.js') 
var cors = require('cors')  
const {guard} = require('./middleware/Guard')
const { findById, update } = require('./models/userModel.js')


app.use(cors())


connectDB()      

app.use(express.json())
app.use(express.urlencoded({extended: false}))    
app.use(express.raw())    

app.get('/', function (req, res) {       
  res.send('Hello World!')              
}) 

app.post('/register', asyncHandler( async function(req, res) {        

    console.log(req.body)       
    //console.log(req.body)          

    const user = await User.create({

        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
         
        
    }) 


    res.json({

        "name": user.name, 
        "email": user.email,
        "token": getJWT(4),
        "id": user.id

    }) 
    
    
}))   

app.post('/login', asyncHandler( async function(req, res, next) {      
    
    console.log('test')  
    const email = req.body.email  
    const password = req.body.password       
    console.log(email)  

    const user = await User.findOne({ email })       

    if(user && password === user.password) {

        res.json({

            "name": user.name, 
            "email": user.email, 
            "token": getJWT(user.id), 
            "_id": user.id  

        }) 

    } else {
        
    try { throw new Error('The username and password combination you have entered is invalid')}
    catch (err){ next(err)} }

})) 

app.put('/put-item:id', asyncHandler(async function(req, res) { 

    console.log(req.params.id)   
    const updatedItem = await Item.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
    })
    
    res.json(updatedItem)

}))

app.post('/create-item',  asyncHandler( async function(req, res) {        

    console.log(req.body)       
    //console.log(req.body)          

    const item = await Item.create({   

        title: req.body.title,
        notes: req.body.notes,
        user: req.body.id,
        completed: 'lightgray'
        
    }) 


    // res.json({

    //     "name": user.name, 
    //     "email": user.email,
    //     "token": getJWT(4),
    //     "id": user.id

    // }) 
    
    
}))   

//Get all Items

app.get('/get-items', guard, asyncHandler( async function(req, res) {               
    
    const user = req.user.id 
    console.log(user) 
    const items = await Item.find({user: user })   

    //console.log(...items)   
     
    console.log(items)  
    res.json(items) 
    
}))   

//Delete item 

app.delete('/delete-item-:id', guard, asyncHandler(
    
    async function(req, res) {
        const id = req.params.id
        const item = await Item.findById(id)
        await Item.remove(item) 
    }
    
))
    

    
 

//Generate a JWT 
const getJWT = (id) => {
    return jwt.sign({id}, process.env.JWT_SECRET, {  
        expiresIn: '10d'   
    })    
}   

//app.use(errorHandler())

app.listen(8000) 