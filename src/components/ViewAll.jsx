import React, { useState } from 'react'

const ViewAll = () => {
    const[data,setData]=useState([
        {
            "studentId":"12",
            "name":"thasni",
            "admsn":"123",
            "college":"fisat",
            "course":"mca"
        }
    ])
    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <table class="table">
                            <thead>
                                <tr>
                                    <th scope="col">Student Id</th>
                                    <th scope="col">Name</th>
                                    <th scope="col">Admission Number</th>
                                    <th scope="col">College</th>
                                    <th scope="col">Course</th>
                                </tr>
                            </thead>
                            <tbody>
                               {
                                data.map(
                                    (value,index)=>{
                                      return  <tr>
                                        <th scope="row">1</th>
                                        <td>{value.studentId}</td>
                                        <td>{value.name}</td>
                                        <td>{value.admsn}</td>
                                        <td>{value.college}</td>
                                        <td>{value.course}</td>
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