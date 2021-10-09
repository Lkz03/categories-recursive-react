import React, {useState} from "react";
import {v1 as uuid} from 'uuid'
import Handler from "../features/Handler";

function Category({passValue}) {
    const [categories, setCategories] = useState([])
    const [title, setTitle] = useState('')

    //const [temp, setTemp] = useState(0)

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
                                    <Handler passValue={passValue}/>
                                </div>
                        </div>
                    )
                })}
            </ul>
        </div>
     )
}

export default Category