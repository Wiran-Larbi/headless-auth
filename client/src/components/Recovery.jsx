import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import avatar from '../assets/profile.png';
import toast, { Toaster } from 'react-hot-toast';
import { useFormik } from 'formik';
import { otpValidate, passwordValidate } from '../helper/validate.js'
import ocean from '../assets/login-side.svg';
import styles from '../styles/Username.module.css';
import OtpInput from 'react-otp-input';

export default function Password() {
    const [otp, setOtp] = useState('');

    function handleOtpInput(otp) {
        console.log(otp)
        const numericValue = otp.replace(/\D/g,'');
        if (otp.match(/^\d+$/) && numericValue !== ''){
            setOtp(numericValue);
        } 
    }

    async function handleOtpSubmit(e) {
        e.preventDefault();
        otpValidate(otp);
       
    }


//   const formik = useFormik({
//     initialValues : {
//       otp
//     },
//     validate : otpValidate,
//     validateOnBlur: false,
//     validateOnChange: false,
//     onSubmit : async values => {
//       console.log(values.otp)
//     }
//   })

  return (
    <div className="container mx-auto">

      <Toaster position='top-center' reverseOrder={false}></Toaster>

      <div className='flex justify-center items-center h-screen'>
        <div className={styles.glassOutro}>

          <div className="title flex flex-col items-center">
            <h4 className='text-5xl font-bold'>Recover Password</h4>
            <span className='py-4 text-xl w-2/3 text-center text-gray-500'>
              Enter OTP to recover your password.
            </span>
          </div>

          <form className='py-1' onSubmit={handleOtpSubmit}>
              <div className="textbox flex flex-col items-center gap-12">
                  {/* <input {...formik.getFieldProps('password')} className={styles.textbox} type="password" placeholder='Password' /> */}
                  <span className="mt-8"></span>
                  <OtpInput
                        value={otp}
                        onChange={handleOtpInput}
                        numInputs={4}
                        inputStyle={styles.otpInput}
                        renderSeparator={<span>-</span>}
                        renderInput={(props) => <input {...props} />}
                        shouldAutoFocus={true}
                    />
                  <button className={styles.btn} type='submit'>Recovery</button>
              </div>

              <div className="text-center py-4">
                <span className='text-gray-500'>Can't get OTP? <Link className='text-cyan-600 hover:text-cyan-500' to="/recovery">Resend OTP</Link></span>
              </div>

          </form>
        </div>
      </div>
    </div>
  )
}