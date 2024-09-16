import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="h-screen w-screen flex justify-center items-center bg-red-500">
        <div className="h-2/4 w-1/4 bg-[#f2aeae] rounded-md shadow-2xl flex justify-center items-center ">
          <form className='w-[80%] h-[80%] flex flex-col justify-center items-center gap-4'>
            <input type="text" placeholder='name' id='' className='p-3 bg-[#f8f8f8] w-full rounded-md font-bold outline-none active:outline-none focus:border-b-2 hover:border-black' />
            <input type="email" placeholder='email' id='' className='p-3 bg-[#f8f8f8] w-full rounded-md font-bold outline-none active:outline-none focus:border-b-2 hover:border-black'/>
            <input type="tel" placeholder='phone number' id='' className='p-3 bg-[#f8f8f8] w-full rounded-md font-bold outline-none active:outline-none focus:border-b-2 hover:border-black'/>

            <button type='submit' className='w-full bg-black text-white p-3 rounded-[8px] font-bold transition-colors duration-300 hover:border-[#f2aeae] hover:rounded-[10px] focus:outline focus:outline-2 focus:outline-webkit-focus-ring-color'>SUBMIT</button>

          </form>
        </div>
      </div>
      
    </>
  )
}
export default App