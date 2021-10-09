import React, {useState} from "react";
import Category from "../components/Category";
import Value from "../components/Value";

const Handler = ({passValue, parent, passTotal}) => {
    const [thisValue, setThisValue] = useState(0)
    const [total, setTotal] = useState(0)
    const [mem, setMem] = useState(0)

    const submitHandler = (e) => {
        setThisValue(e)
        {parent ? '' : passValue(e-mem+total)}
        setMem(e+total)
    }

    const changeHandler = (e) => {passTotal(e) 
    console.log(e)}

    return (
        <div>
            {total === 0 ? ('') : (
            <React.Fragment> Total: {total}
            <input onChange={changeHandler} type='hidden'  value={total}/>
            </React.Fragment>
                 )}
            {thisValue === 0 ? <React.Fragment><Value returnValue={e => submitHandler(e)}/> <Category passValue={setTotal}/> </React.Fragment> :
            <React.Fragment><Value returnValue={e => submitHandler(e)} /> Value: {thisValue}</React.Fragment>}
         </div>
    )
}

export default Handler