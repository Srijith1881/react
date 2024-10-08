import { CircleX, Plus } from 'lucide-react'
import React, { useRef, useState } from 'react'
import { addProject } from '../services/Api'
import { Toaster, toast } from 'sonner'

const AddComponent = () =>{

    const titleref=useRef(null)
    const descref=useRef(null)
    const coverref=useRef(null)
    const linkref=useRef(null)

    const HandleAdd = async(e) =>{
        
        e.preventDefault()
        const ProjectData = {
            title:titleref.current.value,
            desc:descref.current.value,
            img:imgref.current.value,
            link:linkref.current.value,

        }
        try {
            const response = await addProject(ProjectData)
            console.log(response.status)
            if (response.status === 201) {
                console.log("added")

            }
            
        } catch (error) {
            toast.error(error)
        }
        setvisible(false)
    }
    const [visible, setvisible] = useState(false)
return(
    <>
        <button onClick={() => setvisible(true)} className='flex justify-center items-center text-white bg-[#0A1828] px-2 py-1 rounded-sm'>
                Add
                <Plus className='h-6 w-6 ml-2' />
            </button>
            {
                visible && (
                    <>
                        {/* <div className="h-screen w-screen absolute top-0 left-0 bg-black/20 flex justify-center items-center z-50">
                            <div className=" h-[50%] w-[30%] bg-red z-50 flex flex-col  bg-[#0A1828]  shadow-lg rounded-md">
                                <div className="w-full h-[15%] flex flex-row justify-start px-10 items-center border-2 text-[#BFA181] bg-black text-xl font-bold ">
                                    <div className="w-1/2">
                                        Add Certificate
                                    </div>
                                    <div className="w-1/2 flex justify-end">
                                        <label className="relative inline-flex items-center cursor-pointer" onClick={() => setvisible(!visible)} >
                                            <input type="checkbox" value="" className="sr-only peer" />
                                            <div className="peer ring-0 bg-rose-400  rounded-full outline-none duration-300 after:duration-500 w-8 h-8  shadow-md peer-checked:bg-emerald-500  peer-focus:outline-none  after:rounded-full after:absolute after:outline-none after:h-6 after:w-6 after:bg-white after:top-1 after:left-1 after:flex after:justify-center after:items-center  peer-hover:after:scale-75 peer-checked:after:content-['✔️'] after:-rotate-180 peer-checked:after:rotate-0">
                                            </div>
                                        </label>
                                    </div>
                                </div>
                                <div className="w-full h-[85%] flex flex-row justify-center items-center">
                                    <form className="w-[80%] h-[80%] flex flex-col justify-center items-center gap-4" onSubmit={HandleAdd}>
                                        <input type="text" ref={titleref} name="" id="title" placeholder="Title" className="p-3 bg-[#f8f8f8] w-full font-bold outline-none active:outline-none focus:border-b-2 hover:border-purple-500 rounded-md" required />
                                        <input type="text" ref={descref} name="" id="desc" placeholder="Desc" className="p-3 bg-[#f8f8f8] w-full font-bold outline-none active:outline-none focus:border-b-2  hover:border-b-2 hover:border-purple-200 focus:border-purple-600 mb-3" required />
                                        <input type="text" ref={linkref} name="" id="Link" placeholder="Project Link" className="p-3 bg-[#f8f8f8] w-full font-bold outline-none active:outline-none focus:border-b-2  hover:border-b-2 hover:border-purple-200 focus:border-purple-600 mb-3" required />
                                        <input type="text" ref={coverref} name="" id="cover" placeholder="Cover URL" className="p-3 bg-[#f8f8f8] w-full font-bold outline-none active:outline-none focus:border-b-2  hover:border-b-2 hover:border-purple-200 focus:border-purple-600 mb-3" required />
                                        <button type="submit" className="text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 shadow-lg shadow-purple-500/50 dark:shadow-lg dark:shadow-purple-800/80 font-medium rounded-sm text-md px-5 py-2.5 text-center w-full h-[15%] mt-4">Add Project</button>
                                    </form>
                                </div>
                            </div>
                        </div> */}

                        <div className="h-screen w-screen absolute top-0 left-0 bg-black/25 flex justify-center items-center z-50">
                            <div className=" h-[50%] w-[30%] bg-red z-50 flex flex-col  bg-[#0A1828]  shadow-lg rounded-md">
                                <div className="w-full h-[15%] flex flex-row justify-start px-10 items-center border-2 text-[#BFA181] bg-black text-xl font-bold ">
                                    <div className="w-1/2">
                                        Add certificate...!
                                    </div>
                                    <div className="w-1/2 flex justify-end ">
                                        <CircleX onClick={() => setvisible(!visible)}/>
                                    </div>
                                </div>
                                <div className="w-full h-[85%] flex flex-row justify-center items-center">
                                    <form className="w-[80%] h-[80%] flex flex-col justify-center items-center gap-4" >
                                        <input type="text" ref={titleref} name="" id="title" placeholder="Title" className="p-3 bg-[#f8f8f8] w-full font-bold outline-none active:outline-none focus:border-b-2 hover:border-purple-500 rounded-md" required />
                                        <input type="text" ref={descref} name="" id="desc" placeholder="Desc" className="p-3 bg-[#f8f8f8] w-full font-bold outline-none active:outline-none focus:border-b-2 hover:border-purple-500 rounded-md" required />
                                        <input type="text" ref={linkref} name="" id="Link" placeholder="Project Link"  className="p-3 bg-[#f8f8f8] w-full font-bold outline-none active:outline-none focus:border-b-2 hover:border-purple-500 rounded-md" required />
                                        <input type="text" ref={coverref} name="" id="cover" placeholder="Cover URL" className="p-3 bg-[#f8f8f8] w-full font-bold outline-none active:outline-none focus:border-b-2 hover:border-purple-500 rounded-md" required />
                                        <button type="submit" className="bg-black p-3 text-[#BFA181] w-full rounded-md text-lg font-bold" >   Add Certificate</button>
                                    </form>
                                </div>
                                
                            </div>
                        </div>
                        <Toaster richColors />
                    </>
                )
            }
    </>
)


}
export default AddComponent;
