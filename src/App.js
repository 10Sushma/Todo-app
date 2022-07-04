import {useEffect,useState} from 'react';
import './App.css';
import axios from 'axios'

function App() {
  const[item, setItem]=useState([])
  
  useEffect(()=>{
    // const res=axios.get('https://jsonplaceholder.typicode.com/todos/')
    // console.log(res)
    // const Data=res.data
    fetch('https://jsonplaceholder.typicode.com/todos/')
    .then(res=>res.json())
    .then(result=>{
      setItem(result)
    })
    
    

  },[]);
  console.log(item)


  return (
    <div className="App">
      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Status</th>
          </tr>
        </thead>
      {item.map((newItem,i)=>(
      //  <p>{newItem.id}</p>
        <tr key={i}>

          <td>{newItem.title}</td>
          <td>{newItem.completed? 'True':'False'}</td>
        </tr>
       
      ))}
     </table>
    </div>
  );
}

export default App;
