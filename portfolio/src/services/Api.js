import axios from 'axios'


const API = "https://66e526de5cc7f9b6273c6b41.mockapi.io"

const getProjects = () => axios.get(`${API}/users`)
const getProjectbyID = (id) => axios.get(`${API}/users/${id}`)
const addProject = (projectdata) => axios.post(`${API}/users`, projectdata)
const editProject = (id, projectdata) => axios.put(`${API}/users/${id}`, projectdata)
const deleteProject = (id) => axios.delete(`${API}/users/${id}`)
export { getProjects, getProjectbyID, addProject, editProject, deleteProject }