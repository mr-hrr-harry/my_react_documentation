import { BrowserRouter, Routes, Route } from 'react-router-dom'
import About from './About'
import Contact from './Contact'
import Login from '../../user/components/Login'
import Register from '../../user/components/Register'
import PageNotFound from './PageNotFound'

let HomePage = () => {
    return (
        <BrowserRouter basename='/'>
            <Routes>
                <Route path="/" element={<HomePage />} />
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