import React from 'react'
import { Link } from 'react-router-dom'
import avatar from '../assets/profile.png';
import ocean from '../assets/login-side.svg';
import { Toaster } from 'react-hot-toast';
import { useFormik } from 'formik';
import { usernameValidate } from '../helper/validate'

import styles from '../styles/Username.module.css';

export default function Username() {

  const formik = useFormik({
    initialValues : {
      username : ''
    },
    validate : usernameValidate,
    validateOnBlur: false,
    validateOnChange: false,
    onSubmit : async values => {
      console.log(values)
    }
  })

  return (
    <div className="container mx-auto">

      <Toaster position='top-center' reverseOrder={false}></Toaster>

      <div className='flex flex-row justify-center items-center h-screen'>
        <div className={styles.glass}>

          <div className="title flex flex-col items-center">
            <h4 className='text-5xl font-bold'>Hello again</h4>
            <span className='py-4 text-xl w-2/3 text-center text-gray-500'>
              Explore More by connecting with us.
            </span>
          </div>
          {/* onSubmit={formik.handleSubmit} */}
          <form className='py-1' onSubmit={formik.handleSubmit} >
              <div className='profile flex justify-center py-4 mb-8'>
                  <img src={avatar} className={styles.profile_img} alt="avatar" />
              </div>

              <div className="textbox flex flex-col items-center gap-6">
              {/* {...formik.getFieldProps('username')} */}
                  <input {...formik.getFieldProps('username')} className={styles.textbox} type="text" placeholder='Username' />
                  <button
                type="submit"
                className="flex w-3/4 justify-center rounded-md bg-cyan-700 px-3 py-3 text-lg font-semibold leading-6 text-white shadow-sm hover:bg-cyan-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
              >
                Let's go
              </button>
              </div>

              <div className="text-center py-4">
                <p className="mt-6 text-center text-sm text-gray-500">
                        Not a member?{' '}
                    <Link to="/register" className="font-semibold leading-6 text-cyan-600 hover:text-cyan-500">
                        Register Now
                    </Link>
                </p>

              </div>

          </form>

        </div>
        <div className={styles.ocean}>
            <img src={ocean} className="h-full w-full object-cover rounded-r-lg" />
        </div>
      </div>
    </div>
  )
}
