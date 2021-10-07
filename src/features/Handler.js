import React, {useState, useEffect} from "react";
import Category from "../components/Category";
import Value from "../components/Value";

const Handler = ({value, totalValue}) => {
    const [total, setTotal] = useState(0)
    const addToTotal = (e) => {
        setTotal(total + Number(e))
        totalValue={total}
    }

    useEffect(() => {
        addToTotal(value)
    }, [value])
    return(
        <div>
            Total: {total}
            {total > 0 ? (<Value thisValue={addToTotal}/>) : (
            <Category/>
            )}
        </div>
    )
}

export default Handler