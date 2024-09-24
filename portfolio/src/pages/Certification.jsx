import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import ProjectCard from "../components/ProjectCard"
import { getProjects } from "../services/Api"
import AddComponent from "../components/AddComponent"

const Certification = () => {
  const [projectdata, setProjectdata] = useState(null)
  const fetchprojects = async () => {
    try {
      const { data } = await getProjects()
      setProjectdata(data)
    } catch (error) {
      console.warn(error);

    }
  }
  console.log(projectdata)
  useEffect(() => {
    fetchprojects()
  }, [])
  if (!projectdata) {
    return "No data available";
  }
  
  return (
  <>
    <div className="h-screen w-full bg2 text-white relative flex items-center justify-between px-6 py-8">
    <div className="w-full h-full flex flex-row flex-wrap gap-8 justify-center items-center">
        <div className="w-full h-[10%] flex justify-center items-center">
          <AddComponent />
        </div>

        {
          projectdata.map((data, index) => (
            <ProjectCard title={data.title} desc={data.desc} key={index} pid={index} cover={data.coverimg} id={data.id} />
          ))
        }
      </div>
    </div>
  </>
  );
};

export default Certification;
