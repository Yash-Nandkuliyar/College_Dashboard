import React, {useState, useEffect} from 'react'

const Staff = () => {

    const [inputId, setInputId]=useState('');
    const [id, setId]=useState('');
    const [posts, setPosts]=useState([]);

    useEffect (()=>{
        let url = 'https://jsonplaceholder.typicode.com/posts';
        if(id){
            url +=`/${id}`;
        }
        fetch(url)
        .then(res => res.json())
        .then(res => {
            setPosts(Array.isArray(res) ? res : [res]);
        });
    },[id]);
    const bl= ()=>{
        setId(inputId);
    }

  return <>
    <div>
        <input type='text' value={inputId} onChange={e => setInputId(e.target.value)}/>
        <input type='button' value={inputId ? 'Fetch': 'Fetch all'} onClick={bl}/>
    </div>

    <div>
        <ul>
            {
                posts.map(x => (
                    <li>{`Id: ${x.id} | Title: ${x.title}`}</li>
                ))
            }
        </ul>
    </div>

  </>
}

export default Staff
