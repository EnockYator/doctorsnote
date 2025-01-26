
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
import AccountRequests from './pages/admin-view/AccountRequests'
import AdminNotifications from './pages/admin-view/Notifications'
import AdminSettings from './pages/admin-view/Settings';
import AnalyticsAndReports from './pages/admin-view/AnalyticsAndReports'
import ContentManagement from './pages/admin-view/ContentManagement'
import SystemMonitoring from './pages/admin-view/SystemMonitoring'
import RoleAndPermissions from './pages/admin-view/RoleAndPermissions'
import DataAndBackup from './pages/admin-view/DataAndBackup'
import Integrations from './pages/admin-view/Integrations'
import AdminFeedback from './pages/admin-view/Feedback'
import SupportTickets from './pages/admin-view/SupportTickets'
import PaymentAndTransactions from './pages/admin-view/PaymentAndTransactions'
import AdminProfile from './pages/admin-view/Profile'
import AdminSecurity from './pages/admin-view/Security'
import AdminSupport from './pages/admin-view/SupportTickets'





import NotFound from './pages/not-found'

// doctor
import DoctorDashboard from './pages/doctor-view/Dashboard'
import DoctorLayout from './components/doctor-view/layout'
import DoctorProfile from './pages/doctor-view/Profile'
import DoctorRequests from './pages/doctor-view/Requests'
import PatientsHistory from './pages/doctor-view/PatientsHistory'
import DoctorAppointments from './pages/doctor-view/Appointments'
import DoctorAnalytics from './pages/doctor-view/Analytics'
import DoctorCertifications from './pages/doctor-view/Certifications'
import DoctorFeedback from './pages/doctor-view/Feedback'
import DoctorSettings from './pages/doctor-view/Settings'
import DoctorEarnings from './pages/doctor-view/Earnings'
import DoctorHelp from './pages/doctor-view/Help'
import DoctorSecurity from './pages/doctor-view/Security'
import DoctorChat from './pages/doctor-view/Chat'
import DoctorSavedNotes from './pages/doctor-view/SavedNotes'
import DoctorCustomization from './pages/doctor-view/Customization'
import DoctorSupport from './pages/customer-view/support'
import DoctorAvailability from './pages/doctor-view/Availability'
import DoctorNotifications from './pages/doctor-view/Notifications'

// Customer
import CustomerCheckout from './pages/customer-view/checkout'
import CustomerLayout from './components/customer-view/Layout'
import CustomerDashboard from './pages/customer-view/dashboard'
import CustomerProfile from "./pages/customer-view/profile";
import NotesRequests from "./pages/customer-view/requestNote"; 
import NotesHistory from "./pages/customer-view/notesHistory";
import CustomerSupport from "./pages/customer-view/support";
import CustomerNotifications from './pages/customer-view/notifications'
import CustomerSettings from "./pages/customer-view/Settings";
import CustomerTransaction from './pages/customer-view/Transaction'
import CustomerChat from './pages/customer-view/Chat'
import CustomerDocuments from './pages/customer-view/Documents'
import CustomerCustomization from './pages/customer-view/Customization'
import CustomerAnalytics from './pages/customer-view/Analytics'
import CustomerHelp from './pages/customer-view/Help'
import CustomerSecurity from './pages/customer-view/Security'

// utils
import CheckAuth from './components/common/check-auth'
import { Toaster } from './components/ui/toaster'

// guest pages
import ContactUs from './pages/guest-view/contact'
import About from './pages/guest-view/about'
import TermsOfService from './pages/guest-view/terms-of-service'
import PrivacyPolicy from './pages/guest-view/privacy-policy'
import IndexPage from './pages/guest-view'

// auth pages
import AdminSignUp from './pages/auth/AdminSignup'
import DoctorSignUp from './pages/auth/DoctorSignup'
import AuthRegister from './pages/auth/CustomerSignup'
import AuthLogin from './pages/auth/LoginPage'
import LogoutPage from './pages/auth/LogoutPage'

//contexts
// import { useAppLoadingContext } from './contexts'
// import Loader from './components/common/Loader'
import { useLoading } from './contexts/LoadingContext'
import Loader from './components/common/Loader'
import { useAuth } from './contexts/AuthContext'
//import { useEffect } from 'react'




function App() {
  const { user, isAuthenticated } = useAuth();
  // Access Redux state to get isAuthenticated and user data

  // useEffect(() => {
  //   console.log("user: " + user);
  //   console.log("isAuthenticated: " + isAuthenticated);
  // }, [user, isAuthenticated])
  

  //const {loading} = useAppLoadingContext();
  const {loading} = useLoading();
    
    if (loading) {
        return <Loader />
    }
  
  

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
        <Route path="register-doctor" element={<DoctorSignUp />} />
        <Route path="register-admin" element={<AdminSignUp />} />
        <Route path="logout" element={<LogoutPage />} />
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
        <Route path='requests' element={<AccountRequests />}></Route>
        <Route path='notifications' element={<AdminNotifications />}></Route>
        <Route path='settings' element={<AdminSettings />}></Route>
        <Route path='analytics' element={<AnalyticsAndReports />}></Route>
        <Route path='content-management' element={<ContentManagement />}></Route>
        <Route path='system-monitoring' element={<SystemMonitoring />}></Route>
        <Route path='role-and-permissions' element={<RoleAndPermissions />}></Route>
        <Route path='data-and-backup' element={<DataAndBackup />}></Route>
        <Route path='integrations' element={<Integrations />}></Route>
        <Route path='feedback' element={<AdminFeedback />}></Route>
        <Route path='support-tickets' element={<SupportTickets />}></Route>
        <Route path='payment-and-transactions' element={<PaymentAndTransactions />}></Route>
        <Route path='security' element={<AdminSecurity />}></Route>
        <Route path='support' element={<AdminSupport />}></Route>
        <Route path='profile' element={<AdminProfile />}></Route>

      </Route>

      {/* doctor route */}
      <Route path='/doctor' element={
        <CheckAuth isAuthenticated={isAuthenticated} user={user}><DoctorLayout /></CheckAuth>
      }>
        <Route path='dashboard' element={<DoctorDashboard />}></Route>
        <Route path='profile' element={<DoctorProfile />}></Route>
        <Route path='requests' element={<DoctorRequests />}></Route>
        <Route path="appointments" element={<DoctorAppointments />} />
        <Route path="history" element={<PatientsHistory />} />
        <Route path="analytics" element={<DoctorAnalytics />} />
        <Route path="certifications" element={<DoctorCertification />} />
        <Route path="feedback" element={<DoctorFeedback />} />
        <Route path="settings" element={<DoctorSettings />} />
        <Route path="earnings" element={<DoctorEarnings />} />
        <Route path="help" element={<DoctorHelp />} />
        <Route path="security" element={<DoctorSecurity />} />
        <Route path="customization" element={<DoctorCustomization />} />
        <Route path="chat" element={<DoctorChat />} />
        <Route path="saved-notes" element={<DoctorSavedNotes />} />
        <Route path="notifications" element={<DoctorNotifications />} />
        <Route path="availability" element={<DoctorAvailability />} />
        <Route path="support" element={<DoctorSupport />} />
        <Route path="cerifications" element={<DoctorCertifications />} />
        <Route path="availability" element={<DoctorAvailability />} />

      </Route>

      {/* customer route */}
      <Route path='/customer' element={
        <CheckAuth isAuthenticated={isAuthenticated} user={user}><CustomerLayout /></CheckAuth>
      }>
        <Route path="dashboard" element={<CustomerDashboard />} />
        <Route path="profile" element={<CustomerProfile />} />
        <Route path="requests" element={<NotesRequests />} />
        <Route path="notifications" element={<CustomerNotifications />} />
        <Route path="history" element={<NotesHistory />} />
        <Route path="checkout" element={<CustomerCheckout />} />
        <Route path="support" element={<CustomerSupport />} />
        <Route path="settings" element={<CustomerSettings />} />
        <Route path="transaction" element={<CustomerTransaction/>} />
        <Route path="chat" element={<CustomerChat />} />
        <Route path="documents" element={<CustomerDocuments />} />
        <Route path="analytics" element={<CustomerAnalytics />} />
        <Route path="help" element={<CustomerHelp />} />
        <Route path="security" element={<CustomerSecurity />} />
        <Route path="customization" element={<CustomerCustomization />} />


      </Route>
      <Route path='*' element={<NotFound />}></Route>
        
      </Routes>
    </div>
  )
}

export default App
