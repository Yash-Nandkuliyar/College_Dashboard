import React from 'react'
import Sidebar from './Sidebar'
import { NavLink } from 'react-router-dom'
import Body from './Body'
import Home from './pages/Home'

const Main = () => {
  return <>
    <div>
      <div className='container-fluid'>
          <div className='row'>
            <div className='row-12 col-md-2 m-0 p-0'>
              <Sidebar/>
            </div>

            <div className='col-12 col-md-10 m-0 p-0'>
              <div className='top-header'>
                <form>
                  <i className='fas fa-bars'></i>
                  <NavLink to="/login" className="top-nav">Home</NavLink>
                  <NavLink to="/" className="top-nav">Contact</NavLink>
                  <i className='fas fa-user float-right' ></i>
                  <i className='fas fa-bell float-right'></i>
                  <i className='fas fa-envelope float-right'></i>
                </form>
              </div>
              <div>
                <Body/>
              </div>
            </div>

          </div>
      </div>
    </div>
  </>
}

export default Main
