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
    <div className='contain'>
      <h1 className='title'>Search Engine</h1>
      <p>Guess My Path Game</p>

      <input type="search"  className='input' onChange={handleQuery}/>
      <div className='card-list'>
      {objValues.map((value, index) => {
        return (
          <div className='card-container' key={index}>
          <p className='game space'>Guess my Path? 🤔</p>
          <small className='space'><i>I am not case sensitive</i></small>
          My object value is: <span><b>{value}</b></span>
          
          </div>
        )
      })}
    </div>
    <div className='card-container path-card'>
      <h3 className='space'>Answer:{pathFound ? `obj.${pathFound}`: '🤔'}</h3>
      {pathFound ? <p>You found the path 🤝! Congrats</p> : <p>You haven't found a path 😢</p>}
    </div>
    </div>

    
  );
}

export default App;
