import { Avatar } from '@mui/material'
import React from 'react'
import "./Sidebar.css"
import ProfileImage from '../images/img-crop.jpg'

const Sidebar = () => {

    const recentItem = (topic) => (
        <div className="sidebar__recentItems">
            <span className="sidebar__hash">#</span>
            <p>{topic}</p>
        </div>
    )

  return (
    <div className='sidebar'>
        <div className="sidebar__top">
            <img src="https://images.unsplash.com/photo-1579546929518-9e396f3cc809?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" alt="" />
            <Avatar className='sidebar__avatar' src={ProfileImage} />
            <h2>Rahul Kumar</h2>
            <h4>iamrahulkumar.dev@gmail.com</h4>
        </div>
        <div className="sidebar__stats">
            <div className="sidebar__stat">
                <p>Who viewed you</p>
                <p className='sidebar__statNumber'>2,526</p>
            </div>
            <div className="sidebar__stat">
                <p>Views on post</p>
                <p className='sidebar__statNumber'>1,516</p>
            </div>
        </div>
        <div className="sidebar__bottom">
            <p>Recent</p>
            {recentItem("reactjs")}
            {recentItem("programming")}
            {recentItem("software")}
            {recentItem("developer")}
            {recentItem("design")}
        </div>
    </div>
  )
}

export default Sidebar