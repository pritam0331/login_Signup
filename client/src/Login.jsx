import React from 'react'
import './app.css';
import { Link } from 'react-router-dom'
import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function Login() {
  const [email, setEmail] = useState()
  const [password, setPassword] = useState()
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()
    axios.post('http://localhost:3001/login',{email, password})
    .then(result => {
      console.log(result)
      if(result.data === "Success") {
        navigate('/home')
    }
  })
  .catch(err => console.log(err))
  }

  return (
    <html className='bg-black'>
    <div>
    <>
    <div className="flex min-h-screen flex-1 flex-col justify-center px-6 py-12 lg:px-13 bg-black">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <h2 className="text-center text-4xl font-bold leading-9 tracking-tight text-white">
          Log-in To Your Account
          </h2>
          <img
            className="mx-auto h-20 w-auto mt-12"
            src="https://th.bing.com/th/id/R.906dfe44e5d57a5d9775a9911b123c7c?rik=sREDxvtyLucvYw&riu=http%3a%2f%2fpluspng.com%2fimg-png%2ffcb-hd-png-fc-barcelona-png-logo-1600.png&ehk=diGe3RuTVn6mXMU%2bLBr%2bJAVD6DaOAmhBYHuOcDJHgY4%3d&risl=&pid=ImgRaw&r=0"
            alt="Your Company"
          />
        </div>

        <div className="mt-6 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="email" className="block text-xl font-medium leading-6 text-white">
                Email address
              </label>
              <div className="mt-3">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label htmlFor="password" className="block text-xl font-medium leading-6 text-white">
                  Password
                </label>
           
              </div>
              <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  onChange={(e) => setPassword(e.target.value)}                
                />
              </div>
            </div>
            
            <div className='p-4'>
              <button
                type="submit" href="#"
                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Login
              </button>
            </div>
            </form>
            <div className='p-2'>
              <Link to="/signup" className="flex w-full justify-center rounded-md bg-teal-500 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                Signup
              </Link>
            </div>

          <Link to="/" className="text-lg py-4">
                  <a href="#" className="font-semibold text-pink-600 hover:text-indigo-500">
                    Forgot password?
                  </a>
                </Link>
        </div>
      </div>
    </>

  </div>
  </html>
  )
}

