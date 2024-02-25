import React,{useState} from 'react'

const Attendance = () => {
    const dataList = [
        {
            "id":1,
            "name":"kolkata",
            "room":"mbt1",
            "price":2000,
            "state":"wb"
        },
        {
            "id":2,
            "name":"howrah",
            "room":"nb2",
            "price":3000,
            "state":"delhi"
        },
        {
            "id":3,
            "name":"chennai",
            "room":"vbt12",
            "price":5000,
            "state":"chennai"
        },
        {
            "id":4,
            "name":"kalyani",
            "room":"cvb1",
            "price":1000,
            "state":"kalyani"
        },
        {
            "id":5,
            "name":"bihar",
            "room":"bihar1",
            "price":5000,
            "state":"bihar"
        },
        {
            "id":6,
            "name":"south kolkata",
            "room":"south1",
            "price":8000,
            "state":"south"
        },
        {
            "id":7,
            "name":"north kolkata",
            "room":"north12",
            "price":200,
            "state":"north"
        },
        {
            "id":8,
            "name":"liluah",
            "room":"liluah1",
            "price":21000,
            "state":"liluah"
        },
        {
            "id":9,
            "name":"bally",
            "room":"bally1",
            "price":2000,
            "state":"wb"
        },
        {
            "id":10,
            "name":"kolkata3",
            "room":"mbt123",
            "price":5000,
            "state":"wb12"
        },

    ];
    const [searchText,setSearchText] = useState("");
    const [data,setData] = useState(dataList);
    //exculde column list from filter

    const exculdeColumns = ["id"];
    //change event of search input
    const hc = value => {
        setSearchText(value);
        filterData(value);
    }
    //filter recorde by search text
    const filterData = (value) =>{
        const lowercaseValue = value.toLowerCase().trim();
        if(lowercaseValue === "") setData(dataList);
        else {
            const filtereddata = dataList.filter(item => {
                return Object.keys(item).some(key =>
                    exculdeColumns.includes(key) ? false : item[key].toString().toLowerCase().includes(lowercaseValue));
            });
            setData(filtereddata);
        }
    }
    return <>
        <div>
            Search: <input type='text' placeholder='type to search here...' value={searchText}
                    onChange={e => hc(e.target.value)}/>

                    <div className='box-container'>
                        {
                            data.map((x)=>(
                            <div>
                            <b>Name</b>: {x.name} <br/>
                            <b>Price</b>: {x.price} <br/>
                            <b>Room</b>: {x.room} <br/>
                            <b>State</b>: {x.state} <br/>

                            </div>
                            ))
                        }
                    </div>
        </div>
    </>
}

export default Attendance