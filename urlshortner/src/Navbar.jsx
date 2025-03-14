import { useState } from "react";
import {Menu,X} from "lucide-react";
import {motion, AnimatePresence} from "framer-motion";
function Navbar() {
    const [openDrop, setOpenDrop] = useState(false);
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <nav className="flex justify-between items-center p-4">
                <div className="font-bold text-xl">
                    <a href="#">Logo</a>
                </div>
                <motion.button 
                className="md:hidden p-2 focus-outline-none" 
                initial={{route:0}}
                animate={{rotate:isOpen?180:0}}
                transition={{type:"spring",striffness:200,damping:10}}
                onClick={() => setIsOpen(!isOpen)}>
                    {isOpen ? <X size={28}/> : <Menu size={28}/> }
                </motion.button>
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
                    <AnimatePresence>
                    {openDrop && (
                        <motion.div 
                        initial={{ opacity: 0, y: -20, scale: 0.8 }}
                                animate={{ opacity: 1, y: 0, scale: 1 }}
                                exit={{ opacity: 0, y: -20, scale: 0.8 }}
                                transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="absolute right-0 mt-2 w-40 bg-white shadow-lg rounded-lg">
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
                        </motion.div>

                    )}
                    </AnimatePresence>
                </div>
                
            </nav>
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.5, rotateY: 90 }}
                        animate={{ opacity: 1, scale: 1, rotateY: 0 }}
                        exit={{ opacity: 0, scale: 0.5, rotateY: -90 }}
                        transition={{ type: "spring", stiffness: 120, damping: 12 }}
                        className="fixed top-0 left-0 w-full h-full bg-gray-200 flex flex-col text-3xl justify-center items-center space-y-4 py-4 md:hidden"
                    >
                        {/* Animated Close Button */}
                        <motion.button
                            className="absolute top-8 right-5 font-bold text-3xl md:hidden"
                            onClick={() => setIsOpen(false)}
                            whileTap={{ scale: 0.8 }}
                        >
                            <X size={28} />
                        </motion.button>

                        {/* Crazy Animations for Menu Items */}
                        <motion.a
                            href="#"
                            initial={{ x: -100, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ delay: 0.2, type: "spring", stiffness: 80 }}
                        >
                            Home
                        </motion.a>

                        <motion.a
                            href="#"
                            initial={{ x: -100, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ delay: 0.3, type: "spring", stiffness: 80 }}
                        >
                            About
                        </motion.a>

                        <motion.a
                            href="#"
                            initial={{ x: -100, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ delay: 0.4, type: "spring", stiffness: 80 }}
                        >
                            Portfolio
                        </motion.a>

                        <motion.a
                            href="#"
                            initial={{ x: -100, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ delay: 0.5, type: "spring", stiffness: 80 }}
                        >
                            Contact
                        </motion.a>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}

export default Navbar;
