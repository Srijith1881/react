import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Profile from './pages/Profile'
import Projects from './pages/Projects'
import Certification from './pages/Certification'
import WebLayout from '../layouts/WebLayout'


const App = () => {
  return (
      <>
          <BrowserRouter>
              <Routes>
                  <Route element={<WebLayout />}>
                      <Route path="/" element={<Profile />} />
                      <Route path="/projects" element={<Projects />} />
                      <Route path="/Certification" element={<Certification />} />

                  </Route>
              </Routes>

          </BrowserRouter>
      </>
  )
}

export default App