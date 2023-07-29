import {useState} from 'react'

import Home from '../Home'

function Login() {
  const [emaillog, setEmaillog] = useState(' ')
  const [passwordlog, setPasswordlog] = useState(' ')

  const [flag, setFlag] = useState(false)

  const [home, setHome] = useState(true)

  function handleLogin(e) {
    e.preventDefault()
    const pass = localStorage.getItem('harishPassword').replace(/"/g, '')
    const mail = localStorage.getItem('harishEmail').replace(/"/g, '')

    if (!emaillog || !passwordlog) {
      setFlag(true)
      console.log('EMPTY')
    } else if (passwordlog !== pass || emaillog !== mail) {
      setFlag(true)
    } else {
      setHome(!home)
      setFlag(false)
    }
  }

  return (
    <div>
      {home ? (
        <form className="form" onSubmit={handleLogin}>
          <h3 className="website-heading">LogIn</h3>
          <div className="form-group">
            <label htmlFor="name" className="input-label">
              Name
            </label>
            <input
              type="email"
              name="name"
              className="form-control"
              placeholder="Enter email"
              onChange={event => setEmaillog(event.target.value)}
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
              onChange={event => setPasswordlog(event.target.value)}
            />
          </div>

          <button type="submit" className="login-button">
            Login
          </button>

          {flag && (
            <p className="paragraph">Fill correct Info else keep trying.</p>
          )}
        </form>
      ) : (
        <Home />
      )}
    </div>
  )
}

export default Login
