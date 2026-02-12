import { useState, useEffect } from "react"
import { useDispatch, useSelector } from "react-redux";
import {updateUser} from '../redux/UserReducer'
import { useNavigate, useParams } from "react-router-dom";
import type { RootState } from "../Store/Store";

interface FormData {
    name: string;
    email: string;
}

const Update = () => {

    const { id } = useParams();
    const users=useSelector((state:RootState)=>state.users)
    const dispatch=useDispatch()
    const navigate=useNavigate()
    
    const[formData, setFormData]=useState<FormData>({
        name:"",
        email:""
    })


    // Find selected user
    const existingUser = users.find(
        (user) => user.id === Number(id)
    );
    
    // Load user data in form
    useEffect(() => {
    if (!existingUser) return;

    // eslint-disable-next-line react-hooks/set-state-in-effect
    setFormData(prev => ({
        ...prev,
        name: existingUser.name,
        email: existingUser.email,
    }));
}, [existingUser]);

    const handleSubmit=(e:React.SubmitEvent<HTMLFormElement>)=>{
        e.preventDefault()
        dispatch(
        updateUser({
            id: Number(id),
            name: formData.name,
            email: formData.email,
        })
);
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

export default Update