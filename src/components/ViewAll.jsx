import React, { useEffect, useState } from 'react'
import Navigation from './Navigation'
import axios from 'axios'

const ViewAll = () => {
    const[data,setData]=useState([
       
    ])
    const fetchData=
        ()=>{
            axios.get("http://localhost:8080/view",data).then(
                (response)=>{
                        console.log(response.data)
                        setData(response.data)
                }
            ).catch().finally()
        }
    useEffect(()=>{fetchData()},[])
    return (
        <div>
            <Navigation/>
            <div className="container">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <table class="table">
                            <thead>
                                <tr>
                                    
                                    <th scope="col">Name</th>
                                    <th scope="col">Roll NO</th>
                                    <th scope="col">Admission Number</th>
                                    <th scope="col">College</th>
                                    
                                </tr>
                            </thead>
                            <tbody>
                               {
                                data.map(
                                    (value,index)=>{
                                      return  <tr>
                                        
                                        <td>{value.name}</td>
                                        <td>{value.rollno}</td>
                                      
                                        <td>{value.admnNo}</td>
                                        <td>{value.college}</td>
                                       
                                    </tr>
                                    }
                                )
                               }
                                
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ViewAll