import React, { useEffect, useState } from 'react'
import PlaylistCard from '../components/PlaylistCard'
import styled from "./index.module.css"
import { useDispatch, useSelector } from "react-redux"
import { getToken } from '../components/utils'
import { create } from '../redux/authSlice'

function Made() {
    const [featured, setFeatured] = useState([]);
    const [showAll, setShowAll] = useState(false);
    const token = useSelector((state) => state.auth.token);
    const dispatch = useDispatch();

    useEffect(() => {
        if (token) {
            console.log(token);
            fetch(`${import.meta.env.VITE_API_MUSIC}browse/categories/0JQ5DAqbMKFHOzuVTgTizF/playlists`, {
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

    return (
        <div className={styled.home}>
            <div className={styled.texts}>
                <h1>Made for you</h1>
                <h3 onClick={() => setShowAll(!showAll)}>SEE ALL</h3>
            </div>
            <div className={styled.play}>
                {
                    featured.length > 0 && featured.slice(0, showAll ? featured.length : 4).map((el, index) => {
                        return (
                            <PlaylistCard key={index} data={el}></PlaylistCard>
                        );
                    })
                }
            </div>
        </div>
    );
}

export default Made;
