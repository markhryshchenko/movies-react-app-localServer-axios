import React from 'react'
import '../styles/main.css'
import Item from './Item'

export default function Items({items, deleteItem,  }) {
  
  
  return (
    <main>
      
        {items.map(el => (
           <Item  deleteItem={deleteItem}  key={el.id} item={el} />
        )) }
    </main>
  )
}
