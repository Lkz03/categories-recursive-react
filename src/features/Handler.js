import React, {useState} from "react";
import Category from "../components/Category";
import Value from "../components/Value";

const TotalValue = React.createContext(null)

const Handler = () => {
    const [thisValue, setThisValue] = useState(0)
    return(
        <TotalValue.Provider value={{total:thisValue}}>
            <div>
                {thisValue === 0 ? <React.Fragment><Value returnValue={setThisValue}/> <Category/> </React.Fragment> :
                <React.Fragment><Value returnValue={setThisValue} /> Value: {thisValue}</React.Fragment>}
            </div>
        </TotalValue.Provider>
    )
}

export default Handler