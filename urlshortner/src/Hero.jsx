function Hero(){
    return (
        <div className="flex flex-col justify-center items-center mt-40 space-y-3">
        <label htmlFor="text" className="text-lg font-semibold text-gray-700">
            Shorten Your URL
        </label>
        <input 
            type="text" 
            placeholder="Enter URL..." 
            className="border-2 text-center rounded-xl border-red-300 w-64 h-10 focus:ring-2 focus:ring-red-400 focus:outline-none transition-all duration-300 shadow-sm hover:shadow-md"
        />
    </div>
    
    );
}
export default Hero