import React, {useState} from "react";
import Category from "../components/Category";
import Value from "../components/Value";

const Handler = ({passValue}) => {
    const [thisValue, setThisValue] = useState(0)
    const [memValue, setMemValue] = useState(0)
    const [total, setTotal] = useState(0)

    const submitHandler = (e) => {
        setThisValue(e)
        passValue(e - memValue + total)
        {thisValue >= e ? setMemValue(e) : setMemValue(thisValue)}
    }

    return (
        <div>
            Total: {total}
            {thisValue === 0 ? <React.Fragment><Value returnValue={submitHandler}/> <Category passValue={setTotal}/> </React.Fragment> :
            <React.Fragment><Value returnValue={submitHandler} /> Value: {thisValue}</React.Fragment>}
         </div>
    )
}

export default Handler