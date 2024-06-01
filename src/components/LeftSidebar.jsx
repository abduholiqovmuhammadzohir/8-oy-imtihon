import React from 'react'
import styled from "./index.module.css"
import home from "../assets/home.png"
import serch from "../assets/serch.png"
import your from "../assets/your.png"
import create from "../assets/create.png"
import likes from "../assets/likes.png"
import { useNavigate } from 'react-router-dom'

function LeftSidebar() {

    const navigate =  useNavigate()

    function handleLike() {
        navigate("/likes")
    }
    function handleClick() {
        navigate("/")
    }

  return (
    <div className={styled.left}>
        <div className={styled.left_header}>
            <div className={styled.home} onClick={handleClick}>
                <img src={home} alt="" />
                <h3 style={{color:"white"}}>Home</h3>
            </div>
            <div  className={styled.home}>
                <img src={serch} alt="" />
                <h3>Search</h3>
            </div>
            <div  className={styled.home}>
                <img src={your} alt="" />
                <h3>Your Library</h3>
            </div>
            <div style={{marginTop:"50px"}}  className={styled.home}>
                <img src={create} alt="" />
                <h3 style={{color:"white"}}>Create Playlist</h3>
            </div>
            <div onClick={handleLike} style={{borderBottom:"1px solid gray",paddingBottom:"20px",marginRight:"25px"}} className={styled.home}>
                <img src={likes} alt="" />
                <h3>Liked Songs</h3>
            </div>
        </div>
        <div className={styled.text}>
            <p>Chill Mix</p>
            <p>Insta Hits</p>
            <p>Your Top Songs 2021</p>
            <p>Mellow Songs</p>
            <p>Anime Lofi & Chillhop Music</p>
            <p>BG Afro “Select” Vibes</p>
            <p>Afro “Select” Vibes</p>
            <p>Happy Hits!</p>
            <p>Deep Focus</p>
            <p>Instrumental Study</p>
            <p>OST Compilations</p>
            <p>Nostalgia for old souled mill...</p>
            <p>Mixed Feelings</p>
        </div>
    </div>
  )
}

export default LeftSidebar