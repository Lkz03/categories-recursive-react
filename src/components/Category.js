import React, {useState} from "react";
import {v1 as uuid} from 'uuid'
import Handler from "../features/Handler";

function Category({passValue}) {
    const [categories, setCategories] = useState([])
    const [title, setTitle] = useState('')
    const [cat, setCat] = useState([])

    const addCategory = (e) => {
        setCategories([...categories, {id: uuid(), title: e}])
    }

    const submitHandler = (e) => {
        e.preventDefault()
        addCategory(title)
        setTitle('')
    }

    const reducer = (a, b) => a+b

    const addTotal = (e) => {
        setCat([...cat, e])
        passValue(cat.value.reduce(reducer))
    }

    return(
        <div>
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
                                    <Handler parent={false} passValue={addTotal}/>
                                </div>
                        </div>
                    )
                })}
            </ul>
        </div>
     )
}

export default Category