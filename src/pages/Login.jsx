import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useUser } from '../context/UserContext'

function Login() {
  const navigate = useNavigate()
  const { setUser } = useUser()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleLogin = (e) => {
    e.preventDefault()
    // Use email prefix as display name for login
    const name = email.split('@')[0]
    setUser({ fullName: name, email: email })
    navigate('/account-settings')
  }

  return (
    <div className="login-page">
      <h1>Signin to your<br />PopX account</h1>
      <p className="subtitle">
        Lorem ipsum dolor sit amet,<br />
        consectetur adipiscing elit,
      </p>

      <form className="login-form" onSubmit={handleLogin}>
        <div className="form-group">
          <label htmlFor="login-email">Email Address</label>
          <input
            id="login-email"
            type="email"
            placeholder="Enter email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="login-password">Password</label>
          <input
            id="login-password"
            type="password"
            placeholder="Enter password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>

        <button id="login-submit-btn" type="submit" className="btn btn-gray">
          Login
        </button>
      </form>
    </div>
  )
}

export default Login
