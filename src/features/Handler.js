import React, {useState} from "react";
import Category from "../components/Category";
import Value from "../components/Value";

const Handler = ({passValue, parent}) => {
    const [thisValue, setThisValue] = useState(0)
    const [total, setTotal] = useState(0)

    const submitHandler = (e, bool) => {
        {(bool === true) ? (
            setThisValue(e)
        ) : (
            setTotal(e)
        )}
        { parent ? '' : passValue(e - thisValue - total)}
    }

    return (
        <div>
            {total === 0 ? ('') : (
            <React.Fragment> Total: {total} </React.Fragment>
                 )}
            {thisValue === 0 ? <React.Fragment><Value returnValue={(e, bool) => submitHandler(e, bool)}/> <Category passValue={e =>submitHandler(e, false)}/> </React.Fragment> :
            <React.Fragment><Value returnValue={(e, bool) => submitHandler(e, bool)} /> Value: {thisValue}</React.Fragment>}
         </div>
    )
}

export default Handler