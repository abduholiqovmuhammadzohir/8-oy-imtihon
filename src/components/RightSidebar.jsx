import React from 'react'
import styled from "./index.module.css"
import user from "../assets/user.png"
import close from "../assets/close.png"
import people from "../assets/pepole.png"

function RightSidebar() {
    return (
        <div className={styled.right}>
            <div className={styled.right_header}>
                <h3>Friend Activity</h3>
                <div style={{ display: "flex", alignItems: "center" }}>
                    <img src={user} alt="" /><br />
                    <img src={close} alt="" />
                </div>
            </div>
            <p>Let friends and followers on Spotify see what you’re listening to.</p>
            <img style={{ marginBottom: "20px" }} src={people} alt="" />
            <img style={{ marginBottom: "20px" }} src={people} alt="" />
            <img src={people} alt="" />
            <h2>Go to Settings Social and enable “Share my listening activity on Spotify.’ You can turn this off at any time.</h2>
            <button>SETTINGS</button>
        </div>
    )
}

export default RightSidebar