import { Routes, Route } from 'react-router-dom'
import MainLayout from './layouts/MainLayout'
import LoginPage from '../src/pages/loginpage'
import RegistrationForm from '../src/pages/RegistrationPage'
import Rent from '../src/pages/Rent'
import Inventory from '../src/pages/Inventory'
import Reports from '../src/pages/Reports'
import Notifications from '../src/components/Notification'

function App() {
  return (
    <Routes>
      <Route path='/' element={<LoginPage />} />
      <Route element={<MainLayout />}>
        <Route path="/rental-master" element={<Rent />} />
        <Route path="/requisition" element={<RegistrationForm />} />
        <Route path="/inventory" element={<Inventory />} />
        <Route path="/reports" element={<Reports />} />
        <Route path='/notifications' element={<Notifications />} />
      </Route>
    </Routes>
  )
}

export default App
