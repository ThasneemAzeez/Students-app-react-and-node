import React, { useState } from 'react'
import Navigation from './Navigation'
import axios from 'axios'

const Form = () => {
    const[data,setData]=useState({
        "name":"",
        "rollno":"",
         "admnNo":"",
        "college":"",
        
    })
    const inputHandler=(event)=>{
        setData({...data,[event.target.name]:event.target.value})
    }
    const readValue=()=>{
        console.log(data)
        axios.post("http://localhost:8080/add",data).then(
            (response)=>{
                console.log((response.data))
            }
        )
    }
    return (
        <div>
            <Navigation/>
            <div className="container">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <div className="row">
                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                <div class="card">
                                    <div class="card-body">
                                       <h1><center>Admission Form</center></h1> 
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row g-3">
                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                            <label htmlFor="" className="form-label">Name </label>
                            <input type="text" className="form-control" name='name' value={data.name} onChange={inputHandler}/>
                            </div>
                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                               
                                <label htmlFor="" className="form-label">Roll NO</label>
                                <input type="text" className="form-control" name='rollno' value={data.rollno} onChange={inputHandler}/>
                            </div>
                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                <label htmlFor="" className="form-label">Admission Number</label>
                                <input type="text" className="form-control" name='admnNo' value={data.admnNo} onChange={inputHandler}/>
                            </div>
                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                <label htmlFor="" className="form-label">College</label>
                                <textarea  id="" className="form-control" name='college' value={data.college} onChange={inputHandler}></textarea>
                            </div>
                            
                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                <button className="btn btn-success" onClick={readValue}>Submit</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Form