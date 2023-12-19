
import './App.css'
import Home from './pages/homePage/Home'
import Header from './components/header/Header'
import { Route, Routes } from 'react-router-dom'
import Footer from './components/footer/Footer'
import About from './pages/aboutPage/About'
import Contact from './pages/contactPage/Contact'
import Cart from './pages/cartPage/Cart'
import Wishling from './pages/wishlingPage/Wishling'
import Checkout from './pages/checkoutPage/Checkout'
import Ordertracking from './pages/orderTrackingPage/Ordertracking'
import ProductDetail from './pages/productDetailPage/ProductDetail'
import Blog from './pages/blogTwoCloumnsPage/Blog'
import BlogDetail from './pages/blogDetailPage/BlogDetail'

function App() {

    return (
        <div>
            <Header />
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='about-us' element={<About />} />
                <Route path='contack-us' element={<Contact />} />
                <Route path='blog' element={<Blog />} />
                <Route path='blog-detail/:slug' element={<BlogDetail />} />
                <Route path='cart' element={<Cart />} />
                <Route path='wishling' element={<Wishling />} />
                <Route path='checkout' element={<Checkout />} />
                <Route path='order-tracking' element={<Ordertracking />} />
                <Route path='product-detail/:slug' element={<ProductDetail />} />
            </Routes>
            <Footer />
        </div>
    )
}

export default App
