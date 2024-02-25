import React, {useState} from 'react'

const Dashboard = (props) => {
    const [state, setState]= useState(0);
    const increase= ()=>{
        setState(state+1);
    }
    const decrease= ()=>{
        if(state===0){
            alert("Counter cannot go below zero...");
            return;
        }
        setState(state-1);
    }
    const reset= ()=>{
        setState(0);
    }

  return <>
    <div>
        <h1>Name: {props.name}</h1>
        <br></br>
        <h1>Email: {props.email}</h1>
    </div>
    <div>
        <p>{state}</p>
    </div>
    <div>
        <button className='btn btn-danger' onClick={increase}>Add</button>
        <button className='btn btn-warning' onClick={decrease}>Add</button>
        <button className='btn btn-success' onClick={reset}>Add</button>
    </div>
  </>
}

export default Dashboard;