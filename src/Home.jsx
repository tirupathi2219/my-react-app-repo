 import {useState} from 'react'
export default function Home() {
    const [data,setData]=useState({gender:''})
    const handleSubmit =(e)=>{
        e.preventDefault()
    }
    const regxnum=/[0-9]/
    const handleMobile=(e) =>{
        console.log("6==", regxnum.test(e.key));
        if(regxnum.test(e.key))
        {
           console.log("10=="); 
        }
        else{
            e.preventDefault()
        }
    }
    const handleGender =(e) => {

        console.log('19==',e.target.checked);
        if(e.target.checked)
        {

        }
    }
    return (
        <div>
            <form action="#">
            <div><label>Name</label> <input type='text' required placeholder='Enter your Name '/> </div>
            <div><label>Email</label> <input type='email' placeholder='email1' /> </div>
            <div><label>Number</label> <input type='text' onKeyDown={(e)=>{handleMobile(e)}} /> </div>
            <div><label>Gender</label> <input type='radio' name='gender' onChange={(e)=>{handleGender(e)}} /> <label>Male</label> <input type='radio' name='gender' onChange={(e)=>{handleGender(e)}}/> <label>Female</label> <input type='radio' name='gender' onChange={(e)=>{handleGender(e)}}/> <label>Not to Specify</label> </div>
            <div><button type='submit' onClick={(e)=> handleSubmit(e)}>Submit</button></div>
            </form>
        </div>
    )
}