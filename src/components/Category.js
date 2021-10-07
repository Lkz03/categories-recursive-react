import React, {useState, useEffect} from "react";
import {v1 as uuid} from 'uuid'
import Handler from "../features/Handler";
import Value from "./Value";

const Category = ({value, totalValue}) => {
    const [categories, setCategories] = useState([])
    const [title, setTitle] = useState('')
    const [thisValue, setThisValue] = useState('')
    const [tValue, setTValue] = useState()

    const addCategory = (e) => {
        setCategories([...categories, {id: uuid(), title: e}])
    }

    const submitHandler = (e) => {
        e.preventDefault()
        addCategory(title)
        setTitle('')
    }

    useEffect(() => {
        setThisValue(Number(value))
    }, [value])

    useEffect(() => {
        totalValue={tValue}
    }, [tValue])

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
                            {thisValue === 0 ? (
                                <div>
                                    <Category value={thisValue}/>
                                    <Value thisValue={(e) => setThisValue(Number(e))}/>
                                </div>) : ( 
                                <Handler value={thisValue} totalValue={setTValue}/>)}
                        </div>
                    )
                })}
            </ul>
            
        </div>
    )
}

export default Category