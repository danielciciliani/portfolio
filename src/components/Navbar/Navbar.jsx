import { FaHome, FaEnvelope} from "react-icons/fa";


const options = [
    {name: <FaHome size={20}></FaHome>, link: "#home" },
    {name: "Experience", link: "#experience" },
    {name: "Projects", link: "#projects" },
    {name: "About", link: "#about" },
    // {name: <FaEnvelope size={20}></FaEnvelope>, link: "" },
    {name: "Contact", link: "" },
];


function Navbar() {
    return (
        <>
        <div className="flex justify-center w-full">
            <nav className="flex border-gradient w-11/12 mx-auto sm:w-9/12 lg:w-7/12 py-2 px-4 mt-10 rounded-4xl gap-5 justify-around items-center">
                {
                    options.map((option, i) => (
                        <div key={i} className="text-sm md:text-xl">
                            <a href={option.link}>{option.name}</a>
                        </div>
                    ))
                }
            </nav>
        </div>
        </>
    );
}

export default Navbar;