import React, {useState} from "react";
import {v1 as uuid} from 'uuid'
import Handler from "../features/Handler";

const TotalValue = React.createContext(null)

const Category = () => {
    const [categories, setCategories] = useState([])
    const [title, setTitle] = useState('')

    const addCategory = (e) => {
        setCategories([...categories, {id: uuid(), title: e}])
    }

    const submitHandler = (e) => {
        e.preventDefault()
        addCategory(title)
        setTitle('')
    }
    return(
        <div>
            <TotalValue.Consumer>
                {({value}) => <div>Total: {value}</div>}
            </TotalValue.Consumer>
            <form onSubmit={submitHandler}>
                <input type='text' value={title} onChange={e => setTitle(e.target.value)}/>
                <input type='submit' value='add category'/>
            </form>
            <ul>
                {categories.map((e) => {
                    return(
                        <div>
                            <li key={e.id}>{e.title}</li>
                                <div>
                                    <Handler />
                                </div>
                        </div>
                    )
                })}
            </ul>
            
        </div>
    )
}

export default Category