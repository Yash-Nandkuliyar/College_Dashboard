import React, { useState } from 'react'
import axios from "axios";
import {ToastContainer, toast} from 'react-toastify'
const Transport = () => {
    const [name, setName] = useState('');
    const [job, setJob] = useState('');
    const [loading, setLoading] = useState(false);
    const [isError, setIsError] = useState(false);
    const [data, setData] = useState(null);
    const sb = () => {
        setLoading(true);
        setIsError(false);
        const data = {
            name: name,
            job: job
        }
        axios.post('https://reqres.in/api/users', data).then(res => {
            setData(res.data);
            setName('');
            setJob('');
            setLoading(false);
            setIsError(true);
        });

    }
    const toastInfo = ()=> toast.info('information');
    const toastSuccess = ()=> toast.success('success');
    const toastWarn = ()=> toast.warn('warning');
    const toastError = ()=> toast.error('error');

    return <>
        <div>
            <label>Name</label>
            <input type='text' id='name' placeholder='enter name' value={name} onChange={e => setName(e.target.value)} />
            <label>Job</label>
            <input type='text' id='job' placeholder='enter job' value={job} onChange={e => setJob(e.target.value)} />
        </div>
        {isError && <p>Error try again</p>}
        <button type='submit' className='btn btn-danger' onClick={sb} disabled={loading}>
            {loading ? 'loading...' : 'submit'}
        </button>
        {data && <div>
            <pre>{JSON.stringify(data,null,2)}</pre>
        </div>}

        <div>
            <button className='btn btn-dark' onClick={toastInfo}>INFO</button>
            <button className='btn btn-dark' onClick={toastSuccess}>success</button>
            <button className='btn btn-dark' onClick={toastWarn}>warning</button>
            <button className='btn btn-dark' onClick={toastError}>error</button>

            <ToastContainer position='bottom-right'autoClose={5000} closeButton/>
        </div>
    </>

}

export default Transport