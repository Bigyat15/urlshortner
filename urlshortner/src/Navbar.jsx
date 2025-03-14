import { useState } from "react";
import {Menu,X} from "lucide-react";
function Navbar() {
    const [openDrop, setOpenDrop] = useState(false);
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <nav className="flex justify-between items-center p-4">
                <div className="font-bold text-xl">
                    <a href="#">Logo</a>
                </div>
                <button className="md:hidden p-2 focus-outline-none" onClick={() => setIsOpen(!isOpen)}>
                    {isOpen ? <X size={28}/> : <Menu size={28}/> }
                </button>
                <div className="space-x-5 hidden md:flex">
                    <a href="#">Home</a>
                    <a href="#">About</a>
                    <a href="#">Portfolio</a>
                    <a href="#">Contact</a>
                </div>
                <div className="relative md:flex hidden">
                    {/* Profile Image */}
                    <div
                        onClick={() => setOpenDrop(!openDrop)}
                        className="rounded-full border-2 overflow-hidden h-10 w-10 cursor-pointer"
                    >
                        <img
                            className="object-cover w-full h-full"
                            src="#"
                            alt="Profile"
                        />
                    </div>

                    {/* Dropdown Menu */}
                    {openDrop && (
                        <div className="absolute right-0 mt-2 w-40 bg-white shadow-lg rounded-lg">
                            <a
                                href="/profile"
                                className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                            >
                                Profile
                            </a>
                            <a
                                href="/logout"
                                className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                            >
                                Logout
                            </a>
                        </div>
                    )}
                </div>
                
            </nav>
            <div className={`fixed top-0 left-0 w-full h-full bg-gray-200 flex flex-col text-3xl justify-center items-center space-y-4 py-4 transition-transform duration-300 ${isOpen ? "block" :"hidden" } md:hidden `}>
                    <a href="#" className="absolute top-8 left-8">Logo</a>
                    <button className="absolute top-8 right-5 font-bold text-3xl md:hidden" onClick={() => setIsOpen(!isOpen)}>
                        {isOpen ? <X size={28}/> : <Menu size={28}/>}
                    </button>
                    <a href="#">Home</a>
                    <a href="#">About</a>
                    <a href="#">Portfolio</a>
                    <a href="#">Contact</a>
            </div>
            
        </>
    );
}

export default Navbar;
