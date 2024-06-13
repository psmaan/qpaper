import React from 'react'
import {useForm} from 'react-hook-form'
import { useMutation,useQueryClient} from 'react-query'
import * as apiClient from '../api-client.ts'
import {useAppContext} from '../context/Appcontext.tsx'
import {Link,useNavigate} from 'react-router-dom'

export type RegisterFormdata={
    firstname:string,
    lastname:string,
    phone:number,
    email:string,
    password:string,
}

export default function Register({ toggleView }) {
    const {showToast}= useAppContext()
    const queryClient=useQueryClient()
    const Navigate=useNavigate()
    const {handleSubmit} =useForm<RegisterFormdata>();
    const mutation = useMutation(apiClient.SignIn,{
      onSuccess: async ()=>{
        showToast({message:"Sign in Sucessful",type:"SUCESS"})
        await queryClient.invalidateQueries("validateToken")
        Navigate("/dashboard")
        
      },
      onError:(error:Error)=>{
        //show the toast
        showToast({message:error.message,type:"ERROR"})

        
  
      }
    })
    const onSubmit = (data:RegisterFormdata) => {
      mutation.mutate(data);
    };
    return (
        <div>
            <div  className="registration-landing">
                <form onSubmit={handleSubmit(onSubmit)} className="registration-main">
                    <h1>Create a Parent Account</h1>
                    <h3>This is a sample subheading for login.</h3>
                    <div className="registration-form">
                        <div className="registration-form-name">
                            <div className='label-input'>
                                <label>First Name</label>
                                <input id="fname" type="text" />
                            </div>
                            <div className='label-input'>
                                <label>Last Name</label>
                                <input id="fname" type="text" />
                            </div>
                        </div>
                        <div className='label-input'>
                            <label>Phone</label>
                            <input id="fname" type="text" />
                        </div>
                        <div className='label-input'>
                            <label>Email</label>
                            <input id="fname" type="email" />
                        </div>
                        <div className='label-input'>
                            <label>Password</label>
                            <input id="fname" type="text" />
                        </div>
                        <Link to="/dashboard"><button className='register-button'>Submit</button></Link>
                    </div>
                </form>
            </div>
        </div>
    );
}
