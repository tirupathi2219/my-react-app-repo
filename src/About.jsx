import { useEffect, useState } from "react";

import p1 from './assets/flower.jpg'
import p2 from './assets/paint.jpg'
import p3 from './assets/6.jpg'
import { useEffect } from 'react'
export default function About() {
    const [tdata, setTdata] = useState([])
    const [mName, setmName] = useState('')
    const [mExp, setmExp] = useState('')
    const [isEdit, setisEdit] = useState(tdata && tdata.map(()=> false ))
    useEffect(() => {
        fetch("mockdata.json")
            .then(resp => resp.json())
            .then(data => { setTdata(data.data) })
    }, [])
    const handleEdit = (index, evt) => {
        console.log('14==',isEdit);

    }
    console.log('11==', tdata);
    return (
        <div>
            <table>
                <thead>
                    <tr><th>name</th><th>Experience</th></tr>
                </thead>
                <tbody>
                    {tdata.map((val, index) => <tr key={index} ><td>{isEdit[index] === true ? <input value={mName} onChange={(e)=> {setmName(e.target.value)}} /> : val.name}</td><td>{isEdit[index] === true ? <input value={mExp} onChange={(e) =>{setmExp(e.target.value)}} /> : val.experience}</td><td onClick={(e) => { handleEdit(index, e) }}>Edit</td></tr>)}
                </tbody>
            </table>
        </div>
    )
}