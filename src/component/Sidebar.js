
import React from 'react'
import { NavLink } from 'react-router-dom';
import logo from "./images/logo.png";
import './css/Sidebar.css'

const Sidebar = () => {

    const show = () =>{
        if (document.getElementById('submenu').style.display === 'block') {
            document.getElementById('submenu').style.display = 'none';
        }
        else {
            document.getElementById('submenu').style.display = 'block';
        }
    }


    return <>
        <div>
            <div className='container-fluid'>
                <div className='row'>
                    <div className='col-12 m-0 p-0'>
                        <div className='sidebar'>
                            <div className='sidebar-top'>
                                <img className='logo' src={logo} alt='images' height="100px" width="100px"></img>
                            </div>
                            <div className='sidebar-bottom'>
                                <nav>
                                    <NavLink to="/dash" className="nav">Dashborad</NavLink>
                                    <NavLink to="" className="nav" onClick={show}>Student</NavLink>

                                    <div id='submenu'>

                                        <NavLink to="" className="nav">Add New Student</NavLink>
                                        <NavLink to="" className="nav">View Student Details</NavLink>
                                    </div>

                                    <NavLink to="/t" className="nav">Teacher</NavLink>
                                    <NavLink to="/s" className="nav">Staff</NavLink>
                                    <NavLink to="/tr" className="nav">Transport</NavLink>
                                    <NavLink to="/bk" className="nav">Book</NavLink>
                                    <NavLink to="" className="nav">Attendance</NavLink>

                                    <div className='title'>
                                        <span>ADMINISTRATOR</span>
                                    </div>

                                    <NavLink to="" className="nav">Add User</NavLink>

                                    <div className='title'>
                                        <span>Report</span>
                                    </div>

                                    <NavLink to="" className="nav">Admission Report</NavLink>
                                    <NavLink to="" className="nav">Book Report</NavLink>
                                    <NavLink to="" className="nav">Staff Report</NavLink>



                                </nav>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
}

export default Sidebar