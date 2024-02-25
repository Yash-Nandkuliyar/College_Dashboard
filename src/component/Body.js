import React from 'react'
import './css/Body.css';

const Body = () => {

  const data=[
    {
      "id":1,
      "name":"Apurva Kumar",
      "team": "India",
      "rank":1,
      "location": "Bihar"
    },
    {
      "id":2,
      "name":"Yash",
      "team": "India",
      "rank":1,
      "location": "Jharkhand"
    },
    {
      "id":3,
      "name":"Priti Sarkar",
      "team": "India",
      "rank":1,
      "location": "West Bengal"
    },
    
  ]

  return <>
     <table className='table table-dark'>
      <tr>
        <th>name</th>
        <th>team</th>
        <th>rank</th>
        <th>location</th>
      </tr>

    {
      data.map((x)=>{
        return <tr>
          <td>{x.name}</td>
          <td>{x.team}</td>
          <td>{x.rank}</td>
          <td>{x.location}</td>
        </tr>
      })
    }


      </table>
  </>
}

export default Body
