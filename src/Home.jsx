 import {useState} from 'react'
 import './Home.css'
 
export default function Home() {
    const [data,setData]=useState({gender:''})
    const handleSubmit =(e)=>{
        e.preventDefault()
    }
    const regxnum=/[0-9]/
    const handleMobile=(e) =>{
        if(regxnum.test(e.key))
        {
           console.log("10=="); 
        }
        else{
            e.preventDefault()
        }
    }
    const handleGender =(e) => {
        if(e.target.checked)
        {

        }
    }
    return (
        <div className='container'>
            <form action="#">
            <div className='name'><label>Name</label> <input type='text' required placeholder='Enter your Name '/> </div>
            <div><label className='email'>Email</label> <input type='email' placeholder='email' /> </div>
            <div><label>Number</label> <input type='text' onKeyDown={(e)=>{handleMobile(e)}} /> </div>
            <div><label>Gender</label> <input type='radio' name='gender' onChange={(e)=>{handleGender(e)}} /> <label>Male</label> <input type='radio' name='gender' onChange={(e)=>{handleGender(e)}}/> <label>Female</label> <input type='radio' name='gender' onChange={(e)=>{handleGender(e)}}/> <label>Not to Specify</label> </div>
            <div><button className='submit-button' type='submit' onClick={(e)=> handleSubmit(e)}>Submit</button></div>
            </form>
        </div>
    )
}