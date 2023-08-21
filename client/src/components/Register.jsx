import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import avatar from '../assets/profile.png';
import { Toaster } from 'react-hot-toast';
import { useFormik } from 'formik';
import { passwordValidate, registerValidate } from '../helper/validate.js'
import { convertToBase64 } from '../helper/convert';
import ocean from '../assets/dark-blue-ocean-big.svg';
import styles from '../styles/Username.module.css';

export default function Register() {
    const [file, setFile] = useState('');

  const formik = useFormik({
    initialValues : {
      username: '',
      email: '',
      password : ''
    },
    validate : registerValidate,
    validateOnBlur: false,
    validateOnChange: false,
    onSubmit : async values => {
      values = Object.assign(values, { profile: file || ''})
      console.log(values);
    }
  })

  // *! Formik doesn't support file upload, so we need to create this handler.
  const onUpload = async e => {
    const base64 = await convertToBase64(e.target.files[0]);
    setFile(base64);
  }

  return (
    <div className="container mx-auto">

      <Toaster position='top-center' reverseOrder={false}></Toaster>

      <div className='flex justify-center items-center h-screen'>
        <div className={styles.glassRegister}>

          <div className="title flex flex-col items-center">
            <h4 className='text-5xl font-bold'>Register</h4>
            <span className='py-4 text-xl w-2/3 text-center text-gray-500'>
              Explore more by joining our community. 
            </span>
          </div>

          <form className='py-1' onSubmit={formik.handleSubmit}>
              <div className='profile flex justify-center py-4 mb-8'>
                <label htmlFor="profile">
                  <img src={file || avatar} className={styles.profile_img} alt="avatar" />
                </label>
                <input onChange={onUpload} type="file" name="profile" id="profile" />
              </div>

              <div className="textbox flex flex-col items-center gap-6">
                  <input {...formik.getFieldProps('username')} className={styles.textbox} type="text" placeholder='Enter Username' />
                  <input {...formik.getFieldProps('email')} className={styles.textbox} type="email" placeholder='Enter Email' />
                  <input {...formik.getFieldProps('password')} className={styles.textbox} type="password" placeholder='Enter password' />
                  <button className={styles.btn} type='submit'>Register</button>
              </div>

              <div className="text-center py-4">
                <span className='text-gray-500'>Already register? <Link className='text-cyan-600 hover:text-cyan-500' to="/">login</Link></span>
              </div>

          </form>
        </div>
        <div className={styles.oceanRegister}>
            <img src={ocean} className="object-cover rounded-r-lg" />
        </div>
      </div>
    </div>
  )
}