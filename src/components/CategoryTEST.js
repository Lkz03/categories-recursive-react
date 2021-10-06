import React, {useState} from "react";
import {v1 as uuid} from 'uuid';
import Input from "./Input";

const CategoryList = () => {

    const [category, setCategory] = useState([
    ]);

    const addCategory = (title) => {
        setCategory([...category, {title, id: uuid(), int: val }])
    };

    return (
        <div>
            <Input addCategory={addCategory}/>
            <ul>
                {category.map(cat => {
                    return ( 
                         <li key={cat.id}>{cat.title}</li>
                        );
                })}
            </ul>
        </div>
    )
}

export default CategoryList