import {useState} from 'react'

import Login from '../Login'

import './index.css'

function Registration() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [phone, setPhone] = useState('')
  const [profession, setProfession] = useState('')

  const [flag, setFlag] = useState(false)
  const [login, setLogin] = useState(true)
  const [info, setInfo] = useState(true)

  function handleFormSubmit(e) {
    e.preventDefault()

    if (!name || !email || !password || !phone || !profession) {
      setFlag(true)
    } else {
      setFlag(false)
      localStorage.setItem('harishEmail', JSON.stringify(name))
      localStorage.setItem('harishPassword', JSON.stringify(password))
      console.log('Saved in Local Storage')

      setLogin(!login)
    }
  }

  function handleClick() {
    setLogin(!login)
  }

  function infoClick() {
    setInfo(!info)
  }

  return (
    <>
      <nav className="navbar navbar-light">
        <img
          src="https://res.cloudinary.com/dek2rtfcc/image/upload/v1690608978/960w_4d950c4f2781ae54fdabf92a7482af72_ff8mpt.jpg"
          className="login-website-logo-desktop-img"
          alt="website logo"
        />
        <h1 className="main-heading">Geeksynergy Technologies Pvt Ltd</h1>
        <button className="button-nav" type="button" onClick={infoClick}>
          Personal Info
        </button>
      </nav>
      {info ? (
        <div>
          {' '}
          {login ? (
            <form className="form" onSubmit={handleFormSubmit}>
              <h3 className="website-heading">Register Form</h3>

              <div className="form-group">
                <label htmlFor="name" className="input-label">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  className="form-control"
                  placeholder="Enter Full Name"
                  onChange={event => setName(event.target.value)}
                />
              </div>

              <div className="form-group">
                <label htmlFor="email" className="input-label">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  className="form-control"
                  placeholder="Enter email"
                  onChange={event => setEmail(event.target.value)}
                />
              </div>

              <div className="form-group">
                <label htmlFor="password" className="input-label">
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  className="form-control"
                  placeholder="Enter password"
                  onChange={event => setPassword(event.target.value)}
                />
              </div>

              <div className="form-group">
                <label htmlFor="number" className="input-label">
                  Phone No.
                </label>
                <input
                  type="Phone"
                  name="number"
                  className="form-control"
                  placeholder="Enter contact no"
                  onChange={event => setPhone(event.target.value)}
                />
              </div>

              <div className="form-group">
                <label htmlFor="profession" className="input-label">
                  Choose your Profession
                </label>
                <select
                  name="profession"
                  className="form-control"
                  onChange={event => setProfession(event.target.value)}
                >
                  <option>Developer</option>
                  <option>Frontend Developer</option>
                  <option>Backend Developer</option>
                  <option>Team Player</option>
                  <option>Full Stack</option>
                </select>
              </div>

              <button type="submit" className="select-button">
                Register
              </button>
              <p className="forgot-password">
                Already registered{' '}
                <button
                  className="login-button"
                  type="button"
                  onClick={handleClick}
                >
                  log in?
                </button>
              </p>
              {flag && (
                <p className="paragraph">
                  I got it you are in hurry! But every Field is important!
                </p>
              )}
            </form>
          ) : (
            <Login />
          )}
        </div>
      ) : (
        <div>
          <p>
            <strong>Company:</strong> Geeksynergy Technologies Pvt Ltd
          </p>
          <p>
            <strong>Address:</strong> Sanjayanagar, Bengaluru-56
          </p>
          <p>
            <strong>Phone:</strong> XXXXXXXXX09
          </p>
          <p>
            <strong>Email:</strong> XXXXXXXX@gmail.com
          </p>
        </div>
      )}
    </>
  )
}

export default Registration
