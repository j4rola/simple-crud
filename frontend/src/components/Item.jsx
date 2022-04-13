import React from 'react'
import itemService from '../services/itemService'

function Item({userId}) {
    console.log(userId)
    const getItems = (userId) => {
        itemService.getItems(userId)
    }

    const items = getItems(userId)
    console.log(items)

  return (
    <div>Item
        


    </div>
)}

export default Item