import React, {useState} from "react";
import axios from 'axios'
import { useNavigate } from "react-router-dom";

function AddItemForm () {

    const [name, setName] = useState()
    const [description, setDescription] = useState()
    const navigate = useNavigate()

    const Submit = (e) => {
        e.preventDefault();
        axios.post("http://localhost:3001/addItem", {name, description})
        .then(result => {
            console.log(result)
            navigate('/')
        })
        .catch(err => console.log(err))
    }

    return (
        <div className="flex justify-center items-center h-screen bg-[#42c9ff]">
            <div className="w-96 p-6 shadow-lg bg-white rounded-md">
                <form onSubmit={Submit}>
                    <h2 className="text-3xl block text-center font-semibold">Add Item</h2>
                    <div className="mt-3">
                        <label htmlFor="" className="block text-lg font-medium mb-2">Name</label>
                        <input type="text" placeholder="Enter Name" className="border w-full text-base px-2 py-1 focus:outline-none focus:ring-0 focus:border-gray-600"
                        onChange={(e) => setName(e.target.value)}/>
                    </div>
                    <div className="mt-3">
                        <label htmlFor="" className="block text-lg font-medium mb-2">Description</label>
                        <textarea cols="30" rows="5" placeholder="Enter Description" className="border w-full text-base px-2 py-1 focus:outline-none focus:ring-0 focus:border-gray-600"
                        onChange={(e) => setDescription(e.target.value)}></textarea>
                    </div>
                    <div className="mt-5">
                        <button className="border-2 bg-black text-white py-1 w-full rounded-md font-semibold">Add</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default AddItemForm;