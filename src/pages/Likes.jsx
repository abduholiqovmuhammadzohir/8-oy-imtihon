import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
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
import rekk from "../assets/rekk.png";
import lik from "../assets/lik.png";
import ims from "../assets/ims.png";
import mix from "../assets/mix.png";
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';

function Likes() {
  const [likedTracks, setLikedTracks] = useState(() => {
    const savedLikes = localStorage.getItem('likedTracks');
    return savedLikes ? JSON.parse(savedLikes) : [];
  });

  const navigate = useNavigate();

  function handleLeft() {
    navigate("/");
  }

  return (
    <div>
      <div className={styled.header_wrapper}>
        <div className={styled.navs}>
          <img onClick={handleLeft} src={left} alt="" />
          <img src={right} alt="" />
        </div>
        <div className={styled.header}>
          <img src={lik} alt="" />
          <div className={styled.header_text}>
            <h3 style={{color:"white"}}>PUBLIC <br /> PLAYLIST</h3>
            <h2>Liked Songs</h2>
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
                  <div>
                    <div className={styled.table_music}>
                      <div className={styled.play_music}>
                        <h2 className={styled.id}>1</h2>
                        <img src={rek} alt="" width={52} />
                        <div className={styled.safe}>
                          <p>Play It Safe</p>
                          <h5>Julia Wolf</h5>
                        </div>
                      </div>
                      <div style={{ marginRight: "auto" }} className={styled.names}>
                        <h2>Play It Safe</h2>
                      </div>
                      <div className={styled.watch}>
                        <h2 ><img src={ims} alt="" /></h2>
                        <h4>00 : 29</h4>
                      </div>
                    </div>
                    <div className={styled.table_music}>
                      <div className={styled.play_music}>
                        <h2 className={styled.id}>2</h2>
                        <img src={rekk} alt="" width={52} />
                        <div className={styled.safe}>
                          <p>Ocean Front Apt.</p>
                          <h5>Julia Wolf</h5>
                        </div>
                      </div>
                      <div style={{ marginRight: "auto" }} className={styled.names}>
                        <h2>In the Shape of a Dream</h2>
                      </div>
                      <div className={styled.watch}>
                        <h2 ><img src={ims} alt="" /></h2>
                        <h4>00 : 29</h4>
                      </div>
                    </div>
                    <div className={styled.table_music}>
                      <div className={styled.play_music}>
                        <h2 className={styled.id}>3</h2>
                        <img src={mix} alt="" width={52} />
                        <div className={styled.safe}>
                          <p>Free Spirit</p>
                          <h5>Julia Wolf</h5>
                        </div>
                      </div>
                      <div style={{ marginRight: "auto" }} className={styled.names}>
                        <h2>Free Spirit</h2>
                      </div>
                      <div className={styled.watch}>
                        <h2 ><img src={ims} alt="" /></h2>
                        <h4>00 : 29</h4>
                      </div>
                    </div>
                    <div className={styled.table_music}>
                      <div className={styled.play_music}>
                        <h2 className={styled.id}>4</h2>
                        <img src={rek} alt="" width={52} />
                        <div className={styled.safe}>
                          <p>Play It Safe</p>
                          <h5>Julia Wolf</h5>
                        </div>
                      </div>
                      <div style={{ marginRight: "auto" }} className={styled.names}>
                        <h2>Play It Safe</h2>
                      </div>
                      <div className={styled.watch}>
                        <h2 ><img src={ims} alt="" /></h2>
                        <h4>00 : 29</h4>
                      </div>
                    </div>
                    <div className={styled.table_music}>
                      <div className={styled.play_music}>
                        <h2 className={styled.id}>5</h2>
                        <img src={rekk} alt="" width={52} />
                        <div className={styled.safe}>
                          <p>Ocean Front Apt.</p>
                          <h5>Julia Wolf</h5>
                        </div>
                      </div>
                      <div style={{ marginRight: "auto" }} className={styled.names}>
                        <h2>In the Shape of a Dream</h2>
                      </div>
                      <div className={styled.watch}>
                        <h2 ><img src={ims} alt="" /></h2>
                        <h4>00 : 29</h4>
                      </div>
                    </div>
                    <div className={styled.table_music}>
                      <div className={styled.play_music}>
                        <h2 className={styled.id}>6</h2>
                        <img src={mix} alt="" width={52} />
                        <div className={styled.safe}>
                          <p>Free Spirit</p>
                          <h5>Julia Wolf</h5>
                        </div>
                      </div>
                      <div style={{ marginRight: "auto" }} className={styled.names}>
                        <h2>Free Spirit</h2>
                      </div>
                      <div className={styled.watch}>
                        <h2 ><img src={ims} alt="" /></h2>
                        <h4>00 : 29</h4>
                      </div>
                    </div>
                    <div className={styled.table_music}>
                      <div className={styled.play_music}>
                        <h2 className={styled.id}>7</h2>
                        <img src={rek} alt="" width={52} />
                        <div className={styled.safe}>
                          <p>Play It Safe</p>
                          <h5>Julia Wolf</h5>
                        </div>
                      </div>
                      <div style={{ marginRight: "auto" }} className={styled.names}>
                        <h2>Play It Safe</h2>
                      </div>
                      <div className={styled.watch}>
                        <h2 ><img src={ims} alt="" /></h2>
                        <h4>00 : 29</h4>
                      </div>
                    </div>
                    <div className={styled.table_music}>
                      <div className={styled.play_music}>
                        <h2 className={styled.id}>8</h2>
                        <img src={rekk} alt="" width={52} />
                        <div className={styled.safe}>
                          <p>Ocean Front Apt.</p>
                          <h5>Julia Wolf</h5>
                        </div>
                      </div>
                      <div style={{ marginRight: "auto" }} className={styled.names}>
                        <h2>In the Shape of a Dream</h2>
                      </div>
                      <div className={styled.watch}>
                        <h2 ><img src={ims} alt="" /></h2>
                        <h4>00 : 29</h4>
                      </div>
                    </div>
                    <div className={styled.table_music}>
                      <div className={styled.play_music}>
                        <h2 className={styled.id}>9</h2>
                        <img src={mix} alt="" width={52} />
                        <div className={styled.safe}>
                          <p>Free Spirit</p>
                          <h5>Julia Wolf</h5>
                        </div>
                      </div>
                      <div style={{ marginRight: "auto" }} className={styled.names}>
                        <h2>Free Spirit</h2>
                      </div>
                      <div className={styled.watch}>
                        <h2 ><img src={ims} alt="" /></h2>
                        <h4>00 : 29</h4>
                      </div>
                    </div>
                    <div className={styled.table_music}>
                      <div className={styled.play_music}>
                        <h2 className={styled.id}>10</h2>
                        <img src={rek} alt="" width={52} />
                        <div className={styled.safe}>
                          <p>Play It Safe</p>
                          <h5>Julia Wolf</h5>
                        </div>
                      </div>
                      <div style={{ marginRight: "auto" }} className={styled.names}>
                        <h2>Play It Safe</h2>
                      </div>
                      <div className={styled.watch}>
                        <h2 ><img src={ims} alt="" /></h2>
                        <h4>00 : 29</h4>
                      </div>
                    </div>
                    <div className={styled.table_music}>
                      <div className={styled.play_music}>
                        <h2 className={styled.id}>11</h2>
                        <img src={rekk} alt="" width={52} />
                        <div className={styled.safe}>
                          <p>Ocean Front Apt.</p>
                          <h5>Julia Wolf</h5>
                        </div>
                      </div>
                      <div style={{ marginRight: "auto" }} className={styled.names}>
                        <h2>In the Shape of a Dream</h2>
                      </div>
                      <div className={styled.watch}>
                        <h2 ><img src={ims} alt="" /></h2>
                        <h4>00 : 29</h4>
                      </div>
                    </div>
                    <div className={styled.table_music}>
                      <div className={styled.play_music}>
                        <h2 className={styled.id}>12</h2>
                        <img src={mix} alt="" width={52} />
                        <div className={styled.safe}>
                          <p>Free Spirit</p>
                          <h5>Julia Wolf</h5>
                        </div>
                      </div>
                      <div style={{ marginRight: "auto" }} className={styled.names}>
                        <h2>Free Spirit</h2>
                      </div>
                      <div className={styled.watch}>
                        <h2 ><img src={ims} alt="" /></h2>
                        <h4>00 : 29</h4>
                      </div>
                    </div>
                  </div>
            </div>
          </div>
          <img style={{ position: "absolute", left: "0px", top: "400px", position: "fixed" }} width={255} src={rek} alt="" />
        </div>
        <div className={styled.audio}>
          <AudioPlayer
            className={styled.audioplayer}
            autoPlay
            src="https://p.scdn.co/mp3-preview/718a2eb032524494a01f73d80af2bcf176c9f3e2?cid=8bbf900a51db4980959ca00d1330eb06"
            onPlay={e => console.log("onPlay")}
          />
        </div>
      </div>
    </div>
  )
}

export default Likes;
