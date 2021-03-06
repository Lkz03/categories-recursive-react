import React, {useState} from "react";

const Value = ({returnValue}) => {
    const [temp, setTemp] = useState()

    const submitHandler = (e) => {
        e.preventDefault()
        returnValue(temp, true)
        setTemp('')
    }

    return(
        <div>
            <form onSubmit={submitHandler}>
                <input type='text' value={temp} required onChange={(e) => {setTemp(Number(e.target.value))}} />
                <input type='submit' value='add value' />
            </form>
        </div>
    )
}

export default Value