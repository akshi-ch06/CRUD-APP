const Create = () => {
    return (
        <div>
            <div
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
            </div>
        </div>
    )
}

export default Create