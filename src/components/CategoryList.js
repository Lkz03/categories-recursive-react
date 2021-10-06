import React, {useState} from "react";
import {v1 as uuid} from 'uuid';
import Input from "./Input";

const CategoryList = () => {

    const [category, setCategory] = useState([
    ]);

    const addCategory = (title) => {
        setCategory([...category, {title, id: uuid(), int: val }])
    };

    const [val, setVal] = useState('');

    const addValue = (id) => {
        setVal(val)
    };

    return (
        <div>
            <Input addCategory={addCategory}/>
            <ul>
                {category.map(cat => {
                    return ( 
                        <div>
                            <li key={cat.id}>{cat.title}</li>
                            <div>
                               Add a value: {val}
                                <Input addCategory={addValue}/>
                            </div>
                        </div>
                        );
                })}
            </ul>
        </div>
    )
}

export default CategoryList