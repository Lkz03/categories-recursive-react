import React, {useState} from "react";
import Category from "../components/Category";
import Value from "../components/Value";
import {v1 as uuid} from 'uuid'

const Handler = ({passValue, parent}) => {
    const [thisValue, setThisValue] = useState(0)
    const [total, setTotal] = useState(0)
    const id = uuid()
    const submitHandler = (e) => {
        setThisValue(e)
        {parent ? '' : passValue({id: id, value: e})}
    }

    

    return (
        <div>
            {total === 0 ? '' : <React.Fragment> Total: {total}</React.Fragment>}
            {thisValue === 0 ? <React.Fragment><Value returnValue={submitHandler}/> <Category passValue={setTotal}/> </React.Fragment> :
            <React.Fragment><Value returnValue={submitHandler} /> Value: {thisValue}</React.Fragment>}
         </div>
    )
}

export default Handler