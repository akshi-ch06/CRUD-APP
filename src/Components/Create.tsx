import { useState } from "react"
import { useDispatch, useSelector } from "react-redux";
import {addUser} from '../redux/UserReducer'
import { useNavigate } from "react-router-dom";
import type { RootState } from "../Store/Store";

const Create = () => {

    const[formData, setFormData]=useState({
        name:"",
        email:""
    })
    const users=useSelector((state:RootState)=>state.users)
    const dispatch=useDispatch()
    const navigate=useNavigate()

    const handleSubmit=(e:React.SubmitEvent<HTMLFormElement>)=>{
        e.preventDefault()
        const newUser = {
            id: users.length + 1,
            name: formData.name,
            email: formData.email,
        };

        dispatch(addUser(newUser))
        navigate('/')
        setFormData({
            name:"",
            email:""
        })
        }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>)=>{
    const {name, value} = e.target;
    setFormData(prevData=>({
        ...prevData,
        [name]:value
    }))
}

    return (
        <div>
            <form
            onSubmit={handleSubmit}
            className="
            rounded-md
            flex
            flex-col
            justify-center
            items-center
            bg-white
            gap-6
            w-100
            shadow-xl/30
            ">
                <h2
                className="
                mt-5
                text-2xl
                font-bold
                ">Add New User</h2>
                <div className=" flex flex-col justify-center items-center gap-2">
                    <label htmlFor="name" className="font-bold">Name:</label>
                    <input
                    name='name'
                    id="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter your name"
                    className="
                    border-2 rounded-md font-bold
                    "/>
                </div>
                <div className=" flex flex-col justify-center items-center gap-2">
                    <label htmlFor="email" className="font-bold">Email:</label>
                    <input
                    name="email"
                    id="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Enter your email"
                    className="border-2 rounded-md font-bold"
                    />
                </div>
                <button
                type="submit"
                className="
                rounded-md
                bg-indigo-600
                px-3
                py-2
                text-sm
                font-semibold
                text-white
                shadow-xs
                hover:bg-indigo-500
                focus-visible:outline-2
                focus-visible:outline-offset-2
                focus-visible:outline-indigo-600
                w-20
                ml-5
                mb-5"
                >Submit</button>
            </form>
        </div>
    )
}

export default Create