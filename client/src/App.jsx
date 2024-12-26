
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
import NotFound from './pages/not-found'
import DoctorDashboard from './pages/doctor-view/dashboard'
import DoctorLayout from './components/doctor-view.jsx/layout'
import DoctorListing from './pages/doctor-view/listing'
import DoctorCheckout from './pages/doctor-view/checkout'
import DoctorAccount from './pages/doctor-view/account'
import CustomerAccount from './pages/customer-view/account'
import CustomerCheckout from './pages/customer-view/checkout'
import CustomerLayout from './components/customer-view.jsx/layout'
import CustomerListing from './pages/customer-view/listing'
import CheckAuth from './components/common/check-auth'
import { Toaster } from './components/ui/toaster'
import { useSelector } from 'react-redux';
import Contact from './pages/guest-view/contact'
import About from './pages/guest-view/about'
import TermsOfService from './pages/guest-view/terms-of-service'
import Index from './pages/guest-view/index'
import CustomerHome from './pages/customer-view/home'


function App() {
  // Access Redux state to get isAuthenticated and user data
  //const isAuthenticated = true;
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const user = useSelector((state) => state.auth.user);

  return (
    <div className="flex flex-col overflow-hidden bg-white">
      <Toaster />
      <Routes>
      
      {/* public route for guest visitors*/}
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

      {/* doctor route */}
      <Route path='/doctor' element={
        <CheckAuth isAuthenticated={isAuthenticated} user={user}><DoctorLayout /></CheckAuth>
      }>
        <Route path='dashboard' element={<DoctorDashboard />}></Route>
        <Route path='listing' element={<DoctorListing />}></Route>
        <Route path='checkout' element={<DoctorCheckout />}></Route>
        <Route path='account' element={<DoctorAccount />}></Route>
      </Route>

      {/* customer route */}
      <Route path='/shop' element={
        <CheckAuth isAuthenticated={isAuthenticated} user={user}><CustomerLayout /></CheckAuth>
      }>
        <Route path='home' element={<CustomerHome />}></Route>
        <Route path='listing' element={<CustomerListing />}></Route>
        <Route path='checkout' element={<CustomerCheckout />}></Route>
        <Route path='account' element={<CustomerAccount />}></Route>
      </Route>

        <Route path='*' element={<NotFound />}></Route>
      </Routes>
    </div>
  )
}

export default App
