import {useState} from 'react'
import MyComponent from "./MyComponent"
import './RegisterVehicle.scss'
const RegisterVehicle = () => {
    const [data,setData]=useState({ownerName:'',vehicleNumber:'',vehicleName:'',Rc:''})
    const handleRegister = (e) => {
        e.preventDefault()
        if(/^[A-Z]{2}[ -][0-9]{1,2}(?: [A-Z])?(?: [A-Z]*)? [0-9]{4}$/.test(data.vehicleNumber))
        {
            console.log('testpass');
        }
        else{
            console.log('testfail');
        }

    }
    const handleChange =(e) =>{
        setData({...data, [e.target.name] : e.target.value})
    }
    const style={
        flex_container : {
            display : 'flex'

        }
    }
    return (
        <div className='register_container'>
            <form >
                <div style={style.flex_container}><label>VehicleOwnerName</label> <input type='text' name='ownerName' placeholder="Enter  Vehicle Owner Name" value={data.ownerName}  onChange = {(e)=> handleChange(e)} /></div>
                <div> <label>Vehicle Number</label> <input type='text' name='vehicleNumber' placeholder="Enter  Vehicle Number" value={data.vehicleNumber} onChange = {(e)=> handleChange(e)} /></div>
                <div> <label>Vehicle Name</label> <input type='text' name='vehicleName' placeholder="Enter  Vehicle Name"  value={data.vehicleName} onChange = {(e)=> handleChange(e)}/></div>
                <div>  <label> RC Number</label> <input type='text' name='Rc' placeholder="Enter  Vehicle RC Number" value={data.Rc} onChange = {(e)=> handleChange(e)} /></div>
                <div><input type='file' name='picture'/></div>
                <div> <input type='submit' name='ownerName' placeholder="SUBMIT" onClick={(e)=>handleRegister(e)}/></div>
            </form>

            <div><MyComponent/></div>
        </div>
        
    )
}
export default RegisterVehicle