import { useNavigate } from 'react-router-dom'

function Welcome() {
  const navigate = useNavigate()

  return (
    <div className="welcome-page">
      <div className="welcome-hero"></div>

      <div className="welcome-content">
        <h1>Welcome to PopX</h1>
        <p>Lorem ipsum dolor sit amet,<br />consectetur adipiscing elit,</p>

        <button
          id="create-account-btn"
          className="btn btn-primary"
          onClick={() => navigate('/create-account')}
        >
          Create Account
        </button>

        <button
          id="login-btn"
          className="btn btn-secondary"
          onClick={() => navigate('/login')}
        >
          Already Registered? Login
        </button>
      </div>
    </div>
  )
}

export default Welcome
