import React, { useRef, useState } from 'react'
import login from '../Assets/Login.jpeg'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import {fa-window-close} from '@fortawesome/free-regular-svg-icons'

import { Link } from 'react-router-dom';

export const Signup = () => {
     const [password,setPassword]= useState('')
     const [conformpassword,setConformpassword]= useState('')
     const [error,setErrormessage] = useState('')

    const Usernameref = useRef(null)
    const Emailref = useRef(null)
    const phoneNumberref = useRef(null)
    const Passwordref = useRef(null)
    const conformPasswordref = useRef(null)

    const handleSubmit = (e) => {
        e.preventDefault()
        const body = {
            Username: Usernameref.current.value,
            Email: Emailref.current.value,
            phoneNumber: phoneNumberref.current.value,
            Password: Passwordref.current.value,
            // conformPassword: conformPasswordref.current.value
        }
        if(password==conformpassword){
            setErrormessage('password Match')
        }
        else{
            alert("password Doesnot match")
        }
        console.log(body);
        Usernameref.current.value = ''
        Emailref.current.value = ''
        phoneNumberref.current.value = ''
        Passwordref.current.value = ''
        // conformPasswordref.current.value = ''

    }

    return (
        <div>
            <div className=" items-center justify-center flex">
                <div className="relative p-4 w-full max-w-md h-full md:h-auto">

                    <div className="relative bg-white rounded-lg shadow grid grid-rows-2 grid-flow-col  max-w-4xl h-[500px] w-[650px] ">
                        <button type="button"
                            className="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-600 hover:text-gray-200 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center popup-close">
                            <span className="sr-only text-white">Close popup</span>
                        </button>


                        <div className=" grid row-span-2">
                            <img src={login} className=' h-[500px] w-[300px] rounded-sm' alt='login_img' />
                        </div>

                        <div className="  grid row-span-3 p-5">
                            <h3 className="text-2xl mb-0.5 font-medium"></h3>
                            <p className="mb-4 text-sm font-normal text-gray-800"></p>

                            <div className="text-center">
                                <p className="mb-3 text-2xl font-semibold leading-5 text-slate-900">
                                    Register to your account
                                </p>
                                <p className="mt-2 text-sm leading-4 text-slate-600">
                                    You must be logged in to perform this action.
                                </p>
                            </div>

                            <div className="mt-7 flex flex-col gap-2">

                                <form className="w-full" onSubmit={handleSubmit}>


                                    <input name="email" type="text" required
                                        className="block w-full rounded-lg border border-gray-300 px-3 py-2  my-2 shadow-sm outline-none placeholder:text-gray-400 focus:ring-2 focus:ring-black focus:ring-offset-1"
                                        placeholder="UserName" ref={Usernameref} />

                                    <input name="email" type="email"
                                        required
                                        className="block w-full rounded-lg border border-gray-300 px-3 py-2 shadow-sm outline-none placeholder:text-gray-400 focus:ring-2 focus:ring-black focus:ring-offset-1"
                                        placeholder="Email Address" ref={Emailref} />

                                    <input name="number" type="number" required
                                        className="mt-2 block w-full rounded-lg border border-gray-300 px-3 py-2 shadow-sm outline-none placeholder:text-gray-400 focus:ring-2 focus:ring-black focus:ring-offset-1"
                                        placeholder="Phone Number" ref={phoneNumberref} />

                                    <input name="password" type="password" required
                                        className="mt-2 block w-full rounded-lg border border-gray-300 px-3 py-2 shadow-sm outline-none placeholder:text-gray-400 focus:ring-2 focus:ring-black focus:ring-offset-1"
                                        placeholder="Password" ref={Passwordref} value={password} onChange={(e)=>setPassword(e.target.value)} />

                                    <input name="password" type="text" required
                                        className="mt-2 block w-full rounded-lg border border-gray-300 px-3 py-2 shadow-sm outline-none placeholder:text-gray-400 focus:ring-2 focus:ring-black focus:ring-offset-1"
                                        placeholder=" confirm Password" ref={conformPasswordref} value={conformpassword} onChange={(e)=>setConformpassword(e.target.value)} />

                                    <p className="mb-3 mt-2 text-sm text-gray-500">
                                        <a href="/forgot-password" className="text-blue-800 hover:text-blue-600">Reset your password?</a>
                                    </p>

                                    <button type="submit"
                                        className="inline-flex w-full items-center justify-center rounded-lg bg-black p-2 py-3 text-sm font-medium text-white outline-none focus:ring-2 focus:ring-black focus:ring-offset-1 disabled:bg-gray-400">
                                        Continue
                                    </button>

                                </form>

                                <div className="mt-3 text-center text-sm text-slate-600">
                                    Don't have an account?
                                    {/* <a href="/signup" className="font-medium text-[#4285f4]">Sign up</a> */}
<Link className="font-medium text-[#4285f4]" to={'/signin'}>Sign in</Link>
                                </div>
                            </div>
                        </div>






















                    </div>
                </div>
            </div>
        </div>

    )
}



