import { useUser } from '../context/UserContext'

function AccountSettings() {
  const { user } = useUser()

  return (
    <div className="account-settings-page">
      <div className="account-header">
        <h1>Account Settings</h1>
      </div>

      <div className="profile-section">
        <div className="profile-info">
          <div className="profile-avatar">
            <img src="/profile.png" alt={`${user.fullName} profile`} />
            <div className="camera-icon">
              <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 15.2C13.7673 15.2 15.2 13.7673 15.2 12C15.2 10.2327 13.7673 8.8 12 8.8C10.2327 8.8 8.8 10.2327 8.8 12C8.8 13.7673 10.2327 15.2 12 15.2Z" />
                <path d="M9 2L7.17 4H4C2.9 4 2 4.9 2 6V18C2 19.1 2.9 20 4 20H20C21.1 20 22 19.1 22 18V6C22 4.9 21.1 4 20 4H16.83L15 2H9ZM12 17C9.24 17 7 14.76 7 12C7 9.24 9.24 7 12 7C14.76 7 17 9.24 17 12C17 14.76 14.76 17 12 17Z" />
              </svg>
            </div>
          </div>
          <div className="profile-details">
            <h2>{user.fullName}</h2>
            <p>{user.email}</p>
          </div>
        </div>

        <p className="profile-bio">
          Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam
          Nonumy Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquyam
          Erat, Sed Diam
        </p>
      </div>

      <div className="dashed-border"></div>
    </div>
  )
}

export default AccountSettings
