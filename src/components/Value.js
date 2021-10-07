import React, {useState} from "react";

const Value = ({thisValue}) => {
    const [temp, setTemp] = useState('')

    const submitHandler = (e) => {
        e.preventDefault()
        thisValue(temp)
        setTemp('')
    }

    return(
        <div>
            <form onSubmit={submitHandler}>
                <input type='text' value={temp} onChange={(e) => {setTemp(Number(e.target.value))}} />
                <input type='submit' value='add value' />
            </form>
        </div>
    )
}

export default Value