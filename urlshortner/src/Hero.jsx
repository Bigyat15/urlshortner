import { useEffect, useState } from "react";

function Hero(){
    const [longUrl,setLongUrl] = useState("");
    useEffect(() =>{

    },[]);
    const addUrl = async () => {
        const addData = {
            long_url:longUrl,
        };
        try{
            const response = await fetch("http://127.0.0.1:8000/api/create/shorturl/",{
                method:"POST",
                headers:{
                    "Content-Type":"application/json",
                },
                body:JSON.stringify(addData),
            });
            const data = await response.json();
            setLongUrl("");
        }catch(err){

        }
    }
    return (
        <div className="flex flex-col justify-center items-center mt-40 space-y-3">
        <label htmlFor="text" className="text-lg font-semibold text-gray-700">
            Shorten Your URL
        </label>
        <input 
            type="text" 
            placeholder="Enter URL..." 
            value={longUrl}
            onChange={(e) => setLongUrl(e.target.value)}
            className="border-2 text-center rounded-xl border-red-300 w-64 h-10 focus:ring-2 focus:ring-red-400 focus:outline-none transition-all duration-300 shadow-sm hover:shadow-md"
        />
        <button className="p-4 bg-red-300 h-10 text-center items-center flex rounded-xl" onClick={addUrl}>Submit</button>
    </div>
    
    );
}
export default Hero