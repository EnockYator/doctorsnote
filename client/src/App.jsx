
import { Routes, Route,  } from 'react-router-dom'
import './App.css'
import GuestLayout from './components/guest-view/layout'
import AuthLayout from './components/auth/layout'
import AuthLogin from './pages/auth/login'
import AuthRegister from './pages/auth/register'
import AdminLayout from './components/admin-view/layout'
import AdminProducts from './pages/admin-view/products'
import AdminOrders from './pages/admin-view/orders'
import AdminFeatures from './pages/admin-view/features'
import AdminDashboard from './pages/admin-view/dashboard'
import ShoppingLayout from './components/shopping-view/layout'
import NotFound from './pages/not-found'
import ShoppingHome from './pages/shopping-view/home'
import ShoppingListing from './pages/shopping-view/listing'
import ShoppingCheckout from './pages/shopping-view/checkout'
import ShoppingAccount from './pages/shopping-view/account'
import CheckAuth from './components/common/check-auth'
import { Toaster } from './components/ui/toaster'
import { useSelector } from 'react-redux';
import Contact from './pages/guest-view/contact'
import About from './pages/guest-view/about'
import TermsOfService from './pages/guest-view/terms-of-service'
import Index from './pages/guest-view/index'


function App() {
  // Access Redux state to get isAuthenticated and user data
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const user = useSelector((state) => state.auth.user);

  return (
    <div className="flex flex-col overflow-hidden bg-white">
      <Toaster />
      <Routes>
      
      {/* public route */}
      <Route path='/' element={
          <GuestLayout/>
      }>
        <Route path='/' element={<Index />}></Route>
        <Route path='contact' element={<Contact />}></Route>
        <Route path='about' element={<About />}></Route>
        <Route path="terms-of-service" element={<TermsOfService />}></Route>
      </Route>
        
      {/* auth route */}
      <Route path='/auth' element={
        <CheckAuth isAuthenticated={isAuthenticated} user={user}><AuthLayout /></CheckAuth>
      }>
        <Route path='login' element={<AuthLogin />}></Route>
        <Route path='register' element={<AuthRegister />}></Route>
      </Route>

      {/* admin route */}
      <Route path='/admin' element={
        <CheckAuth isAuthenticated={isAuthenticated} user={user}><AdminLayout /></CheckAuth>
      }>
        <Route path='products' element={<AdminProducts />}></Route>
        <Route path='orders' element={<AdminOrders />}></Route>
        <Route path='features' element={<AdminFeatures />}></Route>
        <Route path='dashboard' element={<AdminDashboard />}></Route>
      </Route>

      {/* shopping route */}
      <Route path='/shop' element={
        <CheckAuth isAuthenticated={isAuthenticated} user={user}><ShoppingLayout /></CheckAuth>
      }>
        <Route path='home' element={<ShoppingHome />}></Route>
        <Route path='listing' element={<ShoppingListing />}></Route>
        <Route path='checkout' element={<ShoppingCheckout />}></Route>
        <Route path='account' element={<ShoppingAccount />}></Route>
      </Route>
        <Route path='*' element={<NotFound />}></Route>
      </Routes>
    </div>
  )
}

export default App
