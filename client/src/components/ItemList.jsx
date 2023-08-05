import React, { useEffect, useState} from "react";
import { Link } from "react-router-dom";
import axios from "axios";

function ItemList () {

    const [items, setItems] = useState([])

    useEffect(()=> {
        axios.get('http://localhost:3001')
        .then(result => setItems(result.data))
        .catch(err => console.log(err))
    })

    const handleDelete = (id) => {
        axios.delete('http://localhost:3001/deleteItem/'+id)
        .then(res => console.log(res))
        .catch(err => console.log(err))
    }

    return (
        <div className="flex flex-col justify-center items-center min-h-screen max-h-full bg-[#42c9ff]">
            <h1 className="md:text-3xl sm:text-2xl text-2xl font-bold py-2">CURD Application</h1>
            {
                items.map((item) => {
                    return <div className='w-3/6 bg-white py-4 px-4 m-5 rounded-md'>
                        <div className='max-w-[1240px] mx-auto '>
                            <div className='flex flex-col justify-center'>
                                <h2 className='md:text-3xl sm:text-2xl text-2xl font-bold py-2'>{item.name}</h2>
                                <p>{item.description}</p>
                                <div className="flex space-x-3">
                                    <Link to={`/edit/${item._id}`} className="bg-black text-white w-[75px] h-[50px] rounded-md font-medium my-6 mx-auto md:mx-0 py-3 text-center">Edit</Link>
                                    <button className='bg-black text-white w-[75px] h-[50px] rounded-md font-medium my-6 mx-auto md:mx-0 py-3 text-center' onClick={(e) => handleDelete(item._id)}>Delete</button>
                                </div>
                            </div>
                        </div>
                    </div>
                })
            }
            <Link to="/add" className="bg-black text-white w-[200px] rounded-md font-medium my-6 mx-auto md:mx-0 py-3 text-center">Add</Link>
        </div>
    )
}

export default ItemList;