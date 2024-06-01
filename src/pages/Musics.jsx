import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import styled from "../pages/index.module.css";
import left from "../assets/left.png";
import right from "../assets/right.png";
import media from "../assets/media.png";
import like1 from "../assets/like1.png";
import expor from "../assets/export.png";
import nuhta from "../assets/nuhta.png";
import search from "../assets/search.png";
import soat from "../assets/soat.png";
import rek from "../assets/reks.png";
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
import { CiHeart } from "react-icons/ci";

function Musics() {
  const params = useParams();
  const token = useSelector((state) => state.auth.token);
  const [featured, setFeatured] = useState([]);
  const [featuredImg, setFeaturedImg] = useState('');
  const [musics, setMusics] = useState([]);
  const [currentTrackUrl, setCurrentTrackUrl] = useState('');

  useEffect(() => {
    if (params.id) {
      fetch(`${import.meta.env.VITE_API_MUSIC}playlists/${params.id}?claim=true`, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
        .then(res => res.json())
        .then(data => {
          console.log(data);
          setFeaturedImg(data.images[0].url);
          setFeatured(data);
          setMusics(data.tracks.items);

        })
        .catch(err => {
          console.log(err);
        });
    }
  }, [params.id, token]);

  const navigate = useNavigate();

  function handleLeft() {
    navigate("/");
  }

  function handleTrackClick(trackUrl) {
    setCurrentTrackUrl(trackUrl);
  }



  return (
    <div>
      <div className={styled.header_wrapper}>
        <div className={styled.nav}>
          <img onClick={handleLeft} src={left} alt="" />
          <img src={right} alt="" />
        </div>
        <div className={styled.headers}>
          <img src={featuredImg} alt="" />
          <div className={styled.header_text}>
            <p>{featured.name}</p>
            <h2>Chill Mix</h2>
            <h4>Julia Wolf, ayokay, Khalid and more</h4>
            <h4>Made for davedirect3 <span>34 songs, 2hr 01 min</span></h4>
          </div>
        </div>
        <div className={styled.footer}>
          <div className={styled.footer_header}>
            <div className={styled.img}>
              <img src={media} alt="" />
              <img src={like1} alt="" />
              <img src={expor} alt="" />
              <img src={nuhta} alt="" />
            </div>
            <div className={styled.search}>
              <img src={search} />
              <select>
                <option>Custom order</option>
                <option>Custom order</option>
                <option>Custom order</option>
              </select>
            </div>
          </div>
          <div className={styled.tablewrapper}>
            <div className={styled.table}>
              <h3 style={{ marginRight: "290px" }}> <span>#</span> TITLE</h3>
              <h3 style={{ marginRight: "130px" }}>ALBUM</h3>
              <h3 style={{ marginRight: "130px" }}>DATE ADDED</h3>
              <img src={soat} alt="" />
            </div>
            <hr />
            <div>
              {musics.length > 0 && musics.map((el, index) => {
                return (
                  <div key={el.id} onClick={() => handleTrackClick(el.track.preview_url)}>
                    <div className={styled.table_music}>
                      <div className={styled.play_music}>
                        <h2 className={styled.id}>{index + 1}</h2>
                        <img src={el?.track?.album?.images[0].url} alt="" width={52} />
                        <div className={styled.safe}>
                          <p>{el.track.artists[0].name}</p>
                          <h5>Julia Wolf</h5>
                        </div>
                      </div>
                      <div style={{ marginRight: "auto" }} className={styled.names}>
                        <h2>{el.track.name.length > 20 ? el.track.name.substring(0, 20) + "..." : el.track.name}</h2>
                      </div>
                      <div className={styled.watch}>
                        <h2 ><CiHeart /></h2>
                        <h4>00 : 29</h4>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
          <img style={{ position: "absolute", left: "0px", top: "400px", position: "fixed" }} width={255} src={rek} alt="" />
        </div>
        <div className={styled.audio}>
          <AudioPlayer
            className={styled.audioplayer}
            autoPlay
            src={currentTrackUrl}
            onPlay={e => console.log("onPlay")}
          />
        </div>
      </div>
    </div>
  )
}

export default Musics;
