import { Routes, Route, Navigate } from 'react-router-dom'
import { UserProvider } from './context/UserContext'
import Welcome from './pages/Welcome'
import Login from './pages/Login'
import CreateAccount from './pages/CreateAccount'
import AccountSettings from './pages/AccountSettings'

function App() {
  return (
    <UserProvider>
      <div className="mobile-frame">
        <Routes>
          <Route path="/" element={<Welcome />} />
          <Route path="/login" element={<Login />} />
          <Route path="/create-account" element={<CreateAccount />} />
          <Route path="/account-settings" element={<AccountSettings />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </div>
    </UserProvider>
  )
}

export default App
