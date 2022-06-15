import { useEffect, useState } from 'react';

import obj from './object.json'
import { objValues, findKey, formatInputValue} from './utils/pathFinder'

import './App.css';

function App() {
  const [query, setQuery] = useState('')
  const [pathFound, setPathFound] = useState('')

  const handleQuery = (e) => {
    setQuery(e.target.value)
  }

  const findPath = () => {
    let newValue = formatInputValue(query);
    let result = findKey(obj, newValue);
    setPathFound(result)
  };


useEffect(() => {
  findPath()
}, [query])

  return (
    <div>
      <h1 className='title'>Search Engine</h1>
      <p>Guess My Path Game</p>

      <input type="search"  className='input' onChange={handleQuery}/>
      <div className='card-list'>
      {objValues.map((value, index) => {
        return (
          <p>{value}</p>
        )
      })}
    </div>
    </div>

    
  );
}

export default App;
