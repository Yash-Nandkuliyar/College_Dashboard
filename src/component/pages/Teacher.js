import React, { useState } from 'react'

const Teacher = () => {

    const [userList, setUserList] = useState([]);
    const [loading, setLoading] = useState(false);

    const getUserList = () => {
        setLoading(true);
        fetch('https://reqres.in/api/users')
            .then(res => res.json())
            .then(res => {
                setUserList(res.data);
                setLoading(false);
            });
    }




    return <>
        <div>
            <button className='btn btn-primary' onClick={getUserList} disabled={loading}>
                {loading ? 'Loading....' : 'Get use List'}
            </button>
        </div>
        <div>
            <table className='table table-dark'>
                <tr>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Email</th>
                    <th>Avatar</th>
                </tr>
                {
                    userList.map((x)=>(
                        <tr>
                            <td>{x.first_name}</td>
                            <td>{x.last_name}</td>
                            <td>{x.email}</td>
                            <td>
                                <img src={x.avatar} width="50" height="50"></img>
                            </td>
                        </tr>
                    ))
                }
            </table>
        </div>
    </>
}

export default Teacher
