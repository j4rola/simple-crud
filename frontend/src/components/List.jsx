import {useState} from 'react'

const List = () => {
    const [items, setItems] = useState([1, 2, 3, 4, 5, 6])
    console.log(typeof(items))
    console.log(items)
    const filterEvenResults = () => setItems(items => items.filter(x => x % 2))
    return (
        <div>
            {
                items.map(item => <p key={item}>{item}</p>)
            }
            <button onClick={filterEvenResults}>Filter</button>
        </div>
    )
}

export default List