import {useState } from 'react'
import Profileimg from '../assets/img/profile.jpg'
import Navbar from '../components/Navbar'
import { CircleX } from 'lucide-react'
import { Navigate } from 'react-router-dom'

const Profile = () => {
    
    const [name,setName] = useState("");
    
    const handelinput = (e) =>{
        setName(e.target.value)
    }
    const handlesubmit=(e)=>{
        e.preventDefault();
        localStorage.setItem("name", name);
        window.location.reload()
    };
    
    const [visible,setvisible] = useState(false)
    return (
        <>
            {/* <div className="h-screen w-full bg-gradient-to-r from-[#1e1e23] via-[#1f1f3e] to-[#21214f] relative flex items-center justify-between px-6 py-8"> */}
            <div className="h-screen w-full bg1 text-white relative flex items-center justify-between px-6 py-8">
                <div className="bg-[#0A1828] shadow-xl rounded-lg p-8 md:w-2/5 w-full/2 transition transform hover:scale-105 hover:shadow-2xl duration-300">
                    <h1 className="text-4xl font-bold text-[#BFA181] mb-4">Srijith vy</h1>
                    <p className="text-lg text-white mb-4">
                    A dedicated B.Tech student specializing in Artificial Inteligence and Machine Learning, with a fervent passion for machine learning, deep leaming, and data structures. 
                    Renowned for excellent communication skills, effective teamwork, and a keen ability to grasp new concepts swiftly. As a curious and focused learner, 
                    I continuously seek opportunities to expand my knowledge and contribute meaningfully to collaborative projects.
                    </p>
                    <ul className="text-lg text-gray-600 mb-4">
                        <li><strong>Location:</strong> Coimbatore , Tamilnadu</li>
                        <li><strong>Email:</strong> srijithviswanathan@gmail.com</li>
                    </ul>
                        <button className='w-18 h-13 p-3 bg-black text-[#BFA181] font-bold rounded-lg hover:text-white' onClick={() => setvisible(true)}>Yourself..?</button>
                </div> 
                
                {/* Right portion */}
                <div className="rounded-lg p-8 md:w-2/5 w-full flex flex-col items-center justify-center mr-36 ">
                    {/* Profile Image */}
                    <img src={Profileimg} alt="profile" className="h-52 w-52 md:h-60 md:w-60 rounded-full shadow-lg border-4 border-[#BFA181] mb-6 hover:border-[#b78958]" />
                    
                    {/* Social Media Icons */}
                    <div className="flex justify-center items-center py-4 px-2 rounded-full gap-2">
                        <a href="https://github.com/Srijith1881"
                            className="flex justify-center items-center w-16 h-16 rounded-full mx-2 bg-black shadow-md hover:shadow-lg transition duration-300">
                                <svg className="w-8 h-8 fill-[#BFA181] hover:fill-white" xmlns="http://www.w3.org/2000/svg" viewBox="-2.5 0 19 19">
                                    <path d="M9.464 17.178a4.506 4.506 0 0 1-2.013.317 4.29 4.29 0 0 1-2.007-.317.746.746 0 0 1-.277-.587c0-.22-.008-.798-.012-1.567-2.564.557-3.105-1.236-3.105-1.236a2.44 2.44 0 0 0-1.024-1.348c-.836-.572.063-.56.063-.56a1.937 1.937 0 0 1 1.412.95 1.962 1.962 0 0 0 2.682.765 1.971 1.971 0 0 1 .586-1.233c-2.046-.232-4.198-1.023-4.198-4.554a3.566 3.566 0 0 1 .948-2.474 3.313 3.313 0 0 1 .091-2.438s.773-.248 2.534.945a8.727 8.727 0 0 1 4.615 0c1.76-1.193 2.532-.945 2.532-.945a3.31 3.31 0 0 1 .092 2.438 3.562 3.562 0 0 1 .947 2.474c0 3.54-2.155 4.32-4.208 4.548a2.195 2.195 0 0 1 .625 1.706c0 1.232-.011 2.227-.011 2.529a.694.694 0 0 1-.272.587z"></path>
                                </svg>
                        </a>

                        <a
                    href="https://www.linkedin.com/in/srijith-vy-792498276/"
                    className="flex justify-center items-center w-16 h-16 rounded-full mx-2 bg-black shadow-md  hover:shadow-lg transition duration-300"
                    >
                    <svg
                        className="w-8 h-8 fill-[#BFA181] hover:fill-white"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 448 512"
                    >
                        <path d="M100.3 448H7.4V148.9h92.9zM53.8 108.1C24.1 108.1 0 83.5 0 53.8a53.8 53.8 0 0 1 107.6 0c0 29.7-24.1 54.3-53.8 54.3zM447.9 448h-92.7V302.4c0-34.7-.7-79.2-48.3-79.2-48.3 0-55.7 37.7-55.7 76.7V448h-92.8V148.9h89.1v40.8h1.3c12.4-23.5 42.7-48.3 87.9-48.3 94 0 111.3 61.9 111.3 142.3V448z" />
                        </svg>
                    </a>



                        <a
                            href="#"
                            className="flex justify-center items-center w-16 h-16 rounded-full mx-2 bg-black shadow-md hover:shadow-lg transition duration-300"
                        >
                            <svg
                            className="w-8 h-8 fill-[#BFA181] hover:fill-white"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 310 310"
                            >
                            <path d="M81.703,165.106h33.981V305c0,2.762,2.238,5,5,5h57.616c2.762,0,5-2.238,5-5V165.765h39.064c2.54,0,4.677-1.906,4.967-4.429l5.933-51.502c0.163-1.417-0.286-2.836-1.234-3.899c-0.949-1.064-2.307-1.673-3.732-1.673h-44.996V71.978c0-9.732,5.24-14.667,15.576-14.667c1.473,0,29.42,0,29.42,0c2.762,0,5-2.239,5-5V5.037c0-2.762-2.238-5-5-5h-40.545C187.467,0.023,186.832,0,185.896,0c-7.035,0-31.488,1.381-50.804,19.151c-21.402,19.692-18.427,43.27-17.716,47.358v37.752H81.703c-2.762,0-5,2.238-5,5v50.844C76.703,162.867,78.941,165.106,81.703,165.106z"></path>
                            </svg>
                        </a>

                        <a
                    href="#"
                    className="flex justify-center items-center w-16 h-16 rounded-full mx-2 bg-black shadow-md hover:shadow-lg transition duration-300"
                    >
                    <svg
                        className="w-8 h-8 fill-[#BFA181] hover:fill-white"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 448 512"
                    >
                        <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" />
                        </svg>
                    </a>
                    </div>
                </div>
            </div>
            {
                visible && (
                    <>
                        <div className="h-screen w-screen absolute top-0 left-0 bg-black/25 flex justify-center items-center z-50">
                            <div className=" h-[50%] w-[30%] bg-red z-50 flex flex-col  bg-white  shadow-lg rounded-md">
                                <div className="w-full h-[15%] flex flex-row justify-start px-10 items-center border-2 text-white bg-black text-xl font-bold ">
                                    <div className="w-1/2">
                                        Enter your name...!
                                    </div>
                                    <div className="w-1/2 flex justify-end ">
                                        <CircleX onClick={() => setvisible(!visible)}/>
                                    </div>
                                </div>
                                <div className="w-full h-[85%] flex flex-row justify-center items-center">
                                    <form className="w-[80%] h-[80%] flex flex-col justify-center items-center gap-4" >
                                        <input type="text" name="" id="name" placeholder="Name" value={name} onChange={handelinput} className="p-3 bg-[#f8f8f8] w-full font-bold outline-none active:outline-none focus:border-b-2 hover:border-purple-500 rounded-md" required />
                                        <button type="submit" className="bg-black p-3 text-white w-full rounded-md text-lg font-bold" onClick={handlesubmit}>   submit</button>
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

export default Profile
