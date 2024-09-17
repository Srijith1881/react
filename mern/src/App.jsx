const App = () => {

    return(
        <>
       {/* <div className="w-screen h-screen flex justify-center items-center bg-green-200">
            <div className="w-1/4 h-2/4 bg-slate-800 flex justify-center items-center rounded-md shadow-2xl">
                <form className="w-[80%] h-[80%] flex flex-col justify-center items-center gap-4">
                    <input type="text" placeholder="Name" id='' className="p-3 w-full h-[15%] font-bold bg-[#f8f8f8] rounded-md outline-none " />
                    <input type="email" placeholder="E-mail" className=" p-3 w-full h-[15%] font-bold bg-[#f8f8f8] rounded-md outline-none " />
                    <input type="tel" placeholder="Phone number" className="p-3 w-full h-[15%] font-bold bg-[#f8f8f8] rounded-md outline-none " />
                    <button type="submit" className="p-3 w-[80%] bg-green-200 text-slate-800 font-bold rounded-md hover:border-slate-800 hover:rounded-lg ">SUBMIT</button>
                </form>
            </div>
        </div>  */}
        <div className="h-screen w-screen flex justify-center items-center bg-red-500">
        <div className="h-2/4 w-1/4 bg-[#f2aeae] rounded-md shadow-xl flex justify-center items-center">
          <form className='w-[80%] h-[80%] flex flex-col justify-center items-center gap-4'>
            <input type="text" placeholder='name' id='' className='p-3 bg-[#f8f8f8] w-full rounded-md font-bold outline-none hover:border-b-2 active:border-b-2 hover:border-black' />
            <input type="email" placeholder='email' id='' className='p-3 bg-[#f8f8f8] w-full rounded-md font-bold outline-none hover:border-b-2 active:border-b-2 hover:border-black'/>
            <input type="tel" placeholder='phone number' id='' className='p-3 bg-[#f8f8f8] w-full rounded-md font-bold outline-none hover:border-b-2 active:border-b-2 hover:border-black'/>

            <button type='submit' className='w-full bg-black text-white p-3 rounded-[8px] font-bold transition-colors duration-300 hover:border-[#f2aeae] hover:rounded-[10px] focus:outline focus:outline-2 focus:outline-webkit-focus-ring-color'>SUBMIT</button>

          </form>
        </div>
      </div>
    

        </>
    )
}
export default App;



