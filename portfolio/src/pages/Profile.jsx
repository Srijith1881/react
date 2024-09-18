import Profileimg from '../assets/img/profile.jpg'
import Navbar from '../components/Navbar'
const Profile = () => {
    return (
        <>
            <div className="h-full w-full flex justify-center items-center">
                <img src={Profileimg} alt="profile" className=" h-40 w-40 rounded-md" />
            </div>
        </>
    )
}

export default Profile