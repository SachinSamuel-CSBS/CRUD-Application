import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

function EditItemForm() {
    const {id} = useParams()
   
    const [name, setName] = useState()
    const [description, setDescription] = useState()
    
    useEffect(()=> {
        axios.get('http://localhost:3001/getItem/'+id)
        .then(result=>{console.log(result)
            setName(result.data.name)
            setDescription(result.data.description)
        })
        .catch(err=>console.log(err))
    }, [])

    const navigate = useNavigate()

    const handleEdit = (e) => {
        e.preventDefault()
        axios.put('http://localhost:3001/editItem/'+id, {name, description})
        .then(res => {
            navigate('/')
        })
        .catch(err => console.log(err))
    }

    return (
        <div className="flex justify-center items-center h-screen bg-[#42c9ff]">
            <div className="w-96 p-6 shadow-lg bg-white rounded-md">
                <form onSubmit={handleEdit}>
                    <h2 className="text-3xl block text-center font-semibold">Edit Item</h2>
                    <div className="mt-3">
                        <label htmlFor="" className="block text-lg font-medium mb-2">Name</label>
                        <input type="text" placeholder="Enter Name" value={name} className="border w-full text-base px-2 py-1 focus:outline-none focus:ring-0 focus:border-gray-600"
                        onChange={(e) => setName(e.target.value)}/>
                    </div>
                    <div className="mt-3">
                        <label htmlFor="" className="block text-lg font-medium mb-2">Description</label>
                        <textarea cols="30" rows="5" placeholder="Enter Description" value={description} className="border w-full text-base px-2 py-1 focus:outline-none focus:ring-0 focus:border-gray-600"
                        onChange={(e) => setDescription(e.target.value)}></textarea>
                    </div>
                    <div className="mt-5">
                        <button className="border-2  bg-black text-white py-1 w-full rounded-md font-semibold">Edit</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default EditItemForm;