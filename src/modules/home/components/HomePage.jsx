import { BrowserRouter, Routes, Route } from 'react-router-dom'

import NavBar from '../../NavBar'
import About from './About'
import Contact from './Contact'
import Login from '../../user/components/Login'
import Register from '../../user/components/Register'
import PageNotFound from './PageNotFound'
import EmployeeData from '../../employee/components/EmployeeData'

let HomePage = () => {
    return (
            <BrowserRouter >
                <NavBar />
                <Routes>
                    <Route path="/" element={<EmployeeData />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/users/login" element={<Login />} />
                    <Route path="/users/register" element={<Register />} />
                    <Route path="*" element={<PageNotFound />} />
                </Routes>
            </BrowserRouter>
    )
}

export default HomePage