import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Profile from './pages/Profile'
import Projects from './pages/Projects'
import WebLayout from '../layouts/WebLayout'


const App = () => {
  return (
      <>
          <BrowserRouter>
              <Routes>
                  <Route element={<WebLayout />}>
                      <Route path="/" element={<Profile />} />
                      <Route path="/projects" element={<Projects />} />

                  </Route>
              </Routes>

          </BrowserRouter>
      </>
  )
}

export default App