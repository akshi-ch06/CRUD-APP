import { Link, useNavigate } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux";
import { deleteUser } from "../redux/UserReducer";
import type { RootState } from "../Store/Store";

const Home = () => {
    const users = useSelector((state:RootState)=>state.users)
    console.log(users)
    const navigate = useNavigate();
    const dispatch = useDispatch()

    const handleDelete=(id: number)=>{
        console.log(id)
        dispatch(deleteUser(id))
        navigate(0)
    }
    return (
        <div>
            <div className="rounded-md bg-white gap-6 flex flex-col text-black w-250 shadow-xl/30">
                <h1 className="ml-5 mt-10 font-bold text-2xl">Simple Crud App With Redux</h1>
                <Link
                to="/create"
                onClick={() => navigate("/create")}
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
                ml-5"
                >Create +</Link>
                <table className="mb-5 ml-5 mr-5 border-collapse">
                    <thead className="border-b border-gray-300">
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody className="">
                        {
                            users.map((user, index:number)=>(
                            <tr key={index} className="border-b border-gray-300">
                                <td className="p-2 text-center">{user.id}</td>
                                <td className="p-2 text-center">{user.name}</td>
                                <td className="p-2 text-center">{user.email}</td>
                                <td className="p-2 text-center">
                                    <div className="flex justify-center gap-3">
                                        <Link to={`/edit/${user.id}`} className='ring-2 ring-blue-500 px-3 py-1 rounded'>Edit</Link>
                                    
                                        <button onClick={()=>handleDelete(user.id)} className="ring-2 ring-red-500 px-3 py-1 rounded">
                                            Delete
                                        </button>
                                    </div>
                                </td>
                            </tr>
                        ))
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Home
