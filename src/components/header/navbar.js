import React from 'react'

const NavBar = () => {
  return (
    <div className="navbar bg-base-100 absolute">
      <div className="flex-1">
        <a href="/" className="btn btn-ghost normal-case text-xl">Homeland Artists</a>
      </div>
      <div className="flex-none gap-2">
        <div className="form-control">
          <input type="text" placeholder="Search" className="input input-bordered" />
        </div>
        <div className="dropdown dropdown-end">
          <label tabIndex="0" className="btn btn-ghost capitalize">
            <a>
              Account
            </a>
          </label>
          <ul tabIndex="0" className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52">
            <li><a>Login</a></li>
            <li><a>Create Account</a></li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default NavBar