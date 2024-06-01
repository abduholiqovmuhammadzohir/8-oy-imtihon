import React, { useEffect, useState } from 'react'
import left from "../assets/left.png"
import right from "../assets/right.png"
import { useNavigate } from 'react-router-dom'
import styled from "./index.module.css"
import { useDispatch, useSelector } from "react-redux"
import { getToken } from '../components/utils'
import { create } from '../redux/authSlice'

function HomeHero() {

    const navigate = useNavigate()
    const navigates = useNavigate()

    function handleLeft() {
        navigate("/likes")
    }

    const [featured, setFeatured] = useState([]);
    const token = useSelector((state) => state.auth.token);
    const dispatch = useDispatch();

    useEffect(() => {
        if (token) {
            console.log(token);
            fetch(`${import.meta.env.VITE_API_MUSIC}browse/featured-playlists`, {
                method: "GET",
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    setFeatured(data.playlists.items);
                })
                .catch(err => {
                    console.log(err);
                });
        } else {
            getToken()
                .then((res) => {
                    dispatch(create(res));
                })
                .catch((err) => {
                    console.log(err);
                });
        }
    }, [token, dispatch]);


    function handleRedirect() {
        navigates(`/playlist/${props.data.id}`)
    }


    return (
        <div>
            <div className={styled.hero_header}>
                <div className={styled.nav}>
                    <img onClick={handleLeft} src={left} alt="" />
                    <img onClick={handleLeft} src={right} alt="" />
                </div>
                <h1>Good afternoon</h1>
                <div style={{ marginBottom: "16px",cursor:"pointer" }} className={styled.card}  onClick={handleRedirect}>
                    {
                        featured.length > 0 && featured.slice(0,6).map((el, index) => {
                            return (
                                <div key={index} data={el} className={styled.mix}>
                                    <img width={82} src={el.images[0].url} alt="" />
                                    <h3>{el.name}</h3>
                                </div>
                            );
                        })
                    }

                </div>

            </div>
        </div>
    )
}

export default HomeHero