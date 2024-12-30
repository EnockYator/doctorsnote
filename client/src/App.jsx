
import { Routes, Route,  } from 'react-router-dom'
import './App.css'
import GuestLayout from './components/guest-view/layout'
import AuthLayout from './components/auth/layout'
// admin
import AdminLayout from './components/admin-view/layout'
import DashboardOverview from './pages/admin-view/DashboardOverview';
import UserTable from './pages/admin-view/UserTable';
import MedicalNotes from './pages/admin-view/MedicalNotes'
import DoctorCertification from './pages/admin-view/DoctorCertification'
import ActivityLogs from './pages/admin-view/ActivityLogs'


import NotFound from './pages/not-found'

// doctor
import DoctorDashboard from './pages/doctor-view/Dashboard'
import DoctorLayout from './components/doctor-view.jsx/layout'
import DoctorProfile from './pages/doctor-view/Profile'
import DoctorRequests from './pages/doctor-view/Requests'
import PatientsHistory from './pages/doctor-view/PatientsHistory'
import Appointments from './pages/doctor-view/Appointments'
import Analytics from './pages/doctor-view/Analytics'
import Certifications from './pages/doctor-view/Certifications'
import Feedback from './pages/doctor-view/Feedback'


import CustomerAccount from './pages/customer-view/account'
import CustomerCheckout from './pages/customer-view/checkout'
import CustomerLayout from './components/customer-view.jsx/layout'
import CustomerListing from './pages/customer-view/listing'
import CheckAuth from './components/common/check-auth'
import { Toaster } from './components/ui/toaster'
import { useSelector } from 'react-redux';
import ContactUs from './pages/guest-view/contact'
import About from './pages/guest-view/about'
import TermsOfService from './pages/guest-view/terms-of-service'
import PrivacyPolicy from './pages/guest-view/privacy-policy'
import IndexPage from './pages/guest-view'
import CustomerHome from './pages/customer-view/home'
// auth pages
import AdminSignUp from './pages/auth/AdminSignup'
import DoctorSignUp from './pages/auth/DoctorSignup'
import AuthRegister from './pages/auth/CustomerSignup'
import AuthLogin from './pages/auth/LoginPage'
import { useLoading } from './contexts/LoadingContext'
import Loader from './components/common/Loader'


//contexts
// import { useAppLoadingContext } from './contexts'
// import Loader from './components/common/Loader'




function App() {
  // Access Redux state to get isAuthenticated and user data
  const isAuthenticated = true;
  //const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const user = useSelector((state) => state.auth.user);

  //const {loading} = useAppLoadingContext();
  const {loading} = useLoading();
    
    if (loading) {
        return <Loader />
    }
  
  console.log(`isAuthenticated: ${isAuthenticated}`);
  console.log(`user role: ${JSON.stringify(user?.role)}`);
  console.log(`token: ${JSON.stringify(user?.token)}`);
  console.log(`username: ${JSON.stringify(user?.username)}`);

  return (
      //loading ? <Loader /> :
      <div className="flex flex-col overflow-hidden bg-white">
      <Toaster />
      <Routes>
      
      {/* public route for guest visitors*/}
      <Route path='/' element={
          <GuestLayout/>
      }>
        <Route path='/' element={<IndexPage />}></Route>
        <Route path='contact-us' element={<ContactUs />}></Route>
        <Route path='about' element={<About />}></Route>
        <Route path="terms-of-service" element={<TermsOfService />}></Route>
        <Route path="privacy-policy" element={<PrivacyPolicy />}></Route>
      </Route>
        
      {/* auth route */}
      <Route path='/auth' element={
        <CheckAuth isAuthenticated={isAuthenticated} user={user}><AuthLayout /></CheckAuth>
      }>
        <Route path='login' element={<AuthLogin />}></Route>
        <Route path='register' element={<AuthRegister />}></Route>
        <Route path="register/doctor" element={<DoctorSignUp />} />
        <Route path="register/admin" element={<AdminSignUp />} />
      </Route>

      {/* admin route */}
      <Route path='/admin' element={
        <CheckAuth isAuthenticated={isAuthenticated} user={user}><AdminLayout /></CheckAuth>
      }>
        <Route path='notes' element={<MedicalNotes />}></Route>
        <Route path='users' element={<UserTable />}></Route>
        <Route path='dashboard' element={<DashboardOverview />}></Route>
        <Route path='doctor-certification' element={<DoctorCertification />}></Route>
        <Route path='activity-logs' element={<ActivityLogs />}></Route>
      </Route>

      {/* doctor route */}
      <Route path='/doctor' element={
        <CheckAuth isAuthenticated={isAuthenticated} user={user}><DoctorLayout /></CheckAuth>
      }>
        <Route path='dashboard' element={<DoctorDashboard />}></Route>
        <Route path='profile' element={<DoctorProfile />}></Route>
        <Route path='requests' element={<DoctorRequests />}></Route>
        <Route path="appointments" element={<Appointments />} />
        <Route path="history" element={<PatientsHistory />} />
        <Route path="analytics" element={<Analytics />} />
        <Route path="certifications" element={<Certifications />} />
        <Route path="feedback" element={<Feedback />} />
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
