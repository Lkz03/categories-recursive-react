import React, {useState} from 'react';

const Input = ({addCategory}) =>{
    const [object, setObject] = useState('');

    const submitHandler = (e) => {
        e.preventDefault();
        addCategory(object);
        setObject('');
    }

    return (
        <form onSubmit={submitHandler} >
            <input
                type='text'
                value={object}
                onChange={(e) => setObject(e.target.value)}
            />
            <input type='submit' value='add' />
        </form>
    )
}

export default Input
