import React, {useState} from "react";
import Category from "../components/Category";
import Value from "../components/Value";

const Handler = ({passValue, parent}) => {
    const [thisValue, setThisValue] = useState(0)
    const [total, setTotal] = useState(0)
    const [mem, setMem] = useState(0)

    const submitHandler = (e, bool) => {
        console.log(bool)
        {bool === true ? setThisValue(e) : ''}
        {parent ? '' : passValue(e - mem + total)}
        setMem(e+total)
    }

    return (
        <div>
            {total === 0 ? ('') : (
            <React.Fragment> Total: {total} </React.Fragment>
                 )}
            {thisValue === 0 ? <React.Fragment><Value returnValue={(e, bool) => submitHandler(e, bool)}/> <Category passValue={e => {submitHandler(e - mem), setTotal(e)}}/> </React.Fragment> :
            <React.Fragment><Value returnValue={(e, bool) => submitHandler(e, bool)} /> Value: {thisValue}</React.Fragment>}
         </div>
    )
}

export default Handler