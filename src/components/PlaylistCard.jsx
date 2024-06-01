import React from 'react'
import { useNavigate } from 'react-router-dom'
import styled from "./index.module.css"

function PlaylistCard(props) {

    const navigate = useNavigate();
    function handleRedirect() {
        navigate(`/playlist/${props.data.id}`)
    }

    return (
        <>
            <div className={styled.play_card} style={{width:200}} onClick={handleRedirect}>
                <div className="image">
                    <img src={props.data.images[0].url} alt="" />
                </div>
                <div className="info">
                    <h3>{props.data.name}</h3>
                    <p>{props.data.description}</p>
                </div>
            </div>
        </>
    )
}

export default PlaylistCard