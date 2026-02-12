import { useNavigate } from "react-router-dom"

const Home = () => {

    const navigate=useNavigate();
    return (
        <div>
            <div className="rounded-md bg-white gap-6 flex flex-col text-black w-250 shadow-xl/30">
                <h1 className="ml-5 mt-10 font-bold text-2xl">Simple Crud App With Redux</h1>
                <button
                type="submit"
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
                >Create +</button>
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
                        <tr className="border-b border-gray-300">
                            <td className="p-2 text-center">01</td>
                            <td className="p-2 text-center">Akshita</td>
                            <td className="p-2 text-center">akshita@gmail.com</td>
                            <td className="p-2 text-center">
                                <div className="flex justify-center gap-3">
                                    <button className="ring-2 ring-blue-500 px-3 py-1 rounded">
                                        Edit
                                    </button>
                                
                                    <button className="ring-2 ring-red-500 px-3 py-1 rounded">
                                        Delete
                                    </button>
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Home
