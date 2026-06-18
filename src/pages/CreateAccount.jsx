import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useUser } from '../context/UserContext'

function CreateAccount() {
  const navigate = useNavigate()
  const { setUser } = useUser()
  const [formData, setFormData] = useState({
    fullName: '',
    phoneNumber: '',
    email: '',
    password: '',
    companyName: '',
    isAgency: 'yes',
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setUser({ fullName: formData.fullName, email: formData.email })
    navigate('/account-settings')
  }

  return (
    <div className="create-account-page">
      <h1>Create your<br />PopX account</h1>

      <form className="create-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="fullName">
            Full Name<span className="required">*</span>
          </label>
          <input
            id="fullName"
            name="fullName"
            type="text"
            placeholder="Marry Doe"
            value={formData.fullName}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="phoneNumber">
            Phone number<span className="required">*</span>
          </label>
          <input
            id="phoneNumber"
            name="phoneNumber"
            type="tel"
            placeholder="Marry Doe"
            value={formData.phoneNumber}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="email">
            Email address<span className="required">*</span>
          </label>
          <input
            id="email"
            name="email"
            type="email"
            placeholder="Marry Doe"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="password">
            Password <span className="required">*</span>
          </label>
          <input
            id="password"
            name="password"
            type="password"
            placeholder="Marry Doe"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="companyName">Company name</label>
          <input
            id="companyName"
            name="companyName"
            type="text"
            placeholder="Marry Doe"
            value={formData.companyName}
            onChange={handleChange}
          />
        </div>

        <div className="agency-group">
          <span className="agency-label">
            Are you an Agency?<span className="required">*</span>
          </span>
          <div className="radio-group">
            <label className="radio-option">
              <input
                type="radio"
                name="isAgency"
                value="yes"
                checked={formData.isAgency === 'yes'}
                onChange={handleChange}
              />
              <span>Yes</span>
            </label>
            <label className="radio-option">
              <input
                type="radio"
                name="isAgency"
                value="no"
                checked={formData.isAgency === 'no'}
                onChange={handleChange}
              />
              <span>No</span>
            </label>
          </div>
        </div>

        <button id="create-submit-btn" type="submit" className="btn btn-primary">
          Create Account
        </button>
      </form>
    </div>
  )
}

export default CreateAccount
