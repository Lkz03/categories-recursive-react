import React, {useState} from 'react';
import Category from './components/Category';
 

function App() {
  const [totalValue, setTotalValue] = useState(0)
  return (
    <div>
      <h1>Heyoo</h1>
      total sum: {totalValue}
      <Category value={0} totalValue={setTotalValue}/>
    </div>
  );
}

export default App;
