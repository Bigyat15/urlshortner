function Hero(){
    return (
    <div className="flex flex-col justify-center items-center mt-40 space-y-3">
        <label htmlFor="text">Link for Shorting the Url.</label>
        <input type="text" placeholder="Enter Url" className="border-2 text-center rounded-xl border-red-200 w-64 h-10"/>
    </div>
    );
}
export default Hero