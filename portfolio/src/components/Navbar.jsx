// import { User2 } from 'lucide-react'
// import React from 'react'
// import { Link, NavLink } from 'react-router-dom'

// const Navbar = () => {
//     return (
//         <>
//             <div className="w-full h-[4rem] flex justify-center items-center bg-purple-500 shadow-md shadow-purple-700 rounded-sm">
//                 <div className="w-[80%] h-full flex justify-center items-center flex-row">
//                     <div className='w-1/2 flex h-full justify-start items-center font-bold text-xl text-white'>Srijith vy</div>
//                     <div className='w-1/2 flex  h-full justify-end items-center'>
//                         <ul className='w-full list-none flex flex-row justify-center gap-6'>
//                         <Link to={'/'}>
//                                 <li className='font-bold text-xl text-white'>Profile</li>
//                             </Link>
//                             <Link to={'/projects'}>
//                                 <li className='font-bold text-xl text-white'>Projects</li>
//                             </Link>
//                             <Link to={'/contact'}>
//                                 <li className='font-bold text-xl text-white'>Contact</li>
//                             </Link> 
//                         </ul>
//                         <User2 className='h-9 w-9 text-white rounded-full border-2 border-white hover:border-purple-500 hover:text-purple-500 hover:bg-white' />

//                     </div>
//                 </div>

//             </div>
//         </>
//     )
// }

// export default Navbar


import { CircleX, User2 } from 'lucide-react'
import React, { useRef, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'

const Navbar = () => {
    const NavLinks = [{
        title: "Profile",
        path: "/"
    },
    {
        title: "Projects",
        path: "/projects"
    },
    
    ]
    const emailref = useRef(null)
    const passwordref = useRef(null)
    const handleLogin = (e) => {
        e.preventDefault()
        console.log(emailref.current.value , passwordref.current.value)
    }

    const [visible, setvisible] = useState(false)
    return (
        <>
            <div className="w-full h-[4rem] flex justify-center items-center bg-black shadow-sm shadow-white rounded-sm">
                <div className="w-[80%] h-full flex justify-center items-center flex-row">
                    <div className='w-1/2 flex h-full justify-start items-center font-bold text-xl text-[#BFA181]'>Srijith vy</div>
                    <div className='pl- w-1/2 flex  h-full justify-end items-center'>
                        <ul className='w-full list-none flex flex-row justify-center gap-6'>
                            {
                                NavLinks.map((navdata, index) => (
                                    <NavLink key={index} to={navdata.path}>
                                        <li className='font-bold text-xl text-[#BFA181] hover:text-white p-2 rounded-sm'>{navdata.title}</li>
                                    </NavLink>
                                ))
                            }
                        </ul>
                        <User2 className='h-9 w-10 text-[#BFA181] rounded-full border-2 border-[#BFA181]   hover:border-white hover:text-white' onClick={() => setvisible(true)} />
                    </div>
                </div>

            </div>
            {
                visible && (
                    <>
                        <div className="h-screen w-screen absolute top-0 left-0 bg-black/25 flex justify-center items-center z-50">
                            <div className=" h-[50%] w-[30%] bg-red z-50 flex flex-col  bg-white  shadow-lg ">
                                <div className="w-full h-[15%] flex flex-row justify-start px-10 items-center border-2 text-white bg-black text-xl font-bold ">
                                    <div className="w-1/2">
                                        Login
                                    </div>
                                    <div className="w-1/2 flex justify-end ">
                                        <CircleX onClick={() => setvisible(!visible)}/>
                                    </div>
                                </div>
                                <div className="w-full h-[85%] flex flex-row justify-center items-center">
                                    <form className="w-[80%] h-[80%] flex flex-col justify-center items-center gap-4" onSubmit={handleLogin}>
                                        <input type="email" ref={emailref} name="" id="email" placeholder="email" className="p-3 bg-[#f8f8f8] w-full font-bold outline-none active:outline-none focus:border-b-2 hover:border-purple-500 rounded-md" required />
                                        <input type="password" ref={passwordref} name="" id="password" placeholder="password" className="p-3 bg-[#f8f8f8] w-full font-bold outline-none active:outline-none focus:border-b-2 hover:border-purple-500 rounded-md" required />
                                        <button type="submit" className="bg-black p-3 text-white w-full rounded-md text-lg font-bold">   Login</button>
                                    </form>
                                </div>
                                
                            </div>
                        </div>

                    </>
                )
            }
        </>
    )
}

export default Navbar