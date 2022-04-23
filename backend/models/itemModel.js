const mongoose = require('mongoose')

const itemSchema = mongoose.Schema({
    title: {
        type: String,
        required: [true, "Please add a value for title"] 
    },
    notes: {
        type: String,
        required: [true, "Please add a value for notes"],  
        unique: true  
    },
    status: {
        type: String,

    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User',
    },
},
{
    timestamps: true
})

module.exports = mongoose.model('Item', itemSchema)   