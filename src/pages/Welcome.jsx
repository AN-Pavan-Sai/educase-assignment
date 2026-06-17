import { useNavigate } from 'react-router-dom'

// Circle positions matching the diagonal scatter pattern from the design
const circles = [
  { id: 1, top: '22%', left: '42%' },
  { id: 2, top: '30%', left: '46%' },
  { id: 3, top: '38%', left: '53%' },
  { id: 4, top: '45%', left: '60%' },
  { id: 5, top: '50%', left: '68%' },
  { id: 6, top: '14%', left: '30%' },
  { id: 7, top: '17%', left: '40%' },
  { id: 8, top: '6%', left: '72%' },
  { id: 9, top: '0%', left: '0%' },   // hidden placeholder
  { id: 10, top: '0%', left: '0%' },  // hidden placeholder
  { id: 11, top: '0%', left: '0%' },  // hidden placeholder
  { id: 12, top: '4%', left: '12%' },
  { id: 13, top: '70%', left: '28%' },
  { id: 14, top: '0%', left: '0%' },  // hidden placeholder
  { id: 15, top: '68%', left: '60%' },
  { id: 16, top: '56%', left: '44%' },
  { id: 17, top: '68%', left: '46%' },
  { id: 18, top: '0%', left: '0%' },  // hidden placeholder
]

// Only render the visible circles from the design
const visibleCircles = [1, 2, 3, 4, 5, 6, 7, 8, 12, 13, 15, 16, 17]

function Welcome() {
  const navigate = useNavigate()

  return (
    <div className="welcome-page">
      <div className="welcome-hero">
        {circles.map((circle) =>
          visibleCircles.includes(circle.id) ? (
            <div
              key={circle.id}
              className="circle-dot"
              style={{ top: circle.top, left: circle.left }}
            >
              {circle.id}
            </div>
          ) : null
        )}
      </div>

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
