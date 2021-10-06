import React from "react";

const List = () => {

    const [category, setCategory] = useState([
    ]);

    const addCategory = (title) => {
        setCategory([...category, {title, id: uuid(), int: val }])
    };

    return (
        <div>
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

export default List