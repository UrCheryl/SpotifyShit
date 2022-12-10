import styles from "./../styles/Playlist.module.css";
import { AiFillLeftCircle } from "react-icons/ai";
import { AiFillRightCircle } from "react-icons/ai";
import pic from "../assets/9d5bd05956d175dc3e4ff993e2bface9.jpeg";
import { useState, useEffect } from "react";
import axios from "axios";
import { AiFillPlayCircle } from "react-icons/ai";
import { PlaylistTitle } from "./PlaylistTitle";
import { BiHeart } from "react-icons/bi";
import { MdDownloadForOffline } from "react-icons/md";
import { BsThreeDots } from "react-icons/bs";
import img1 from "../assets/20.jpeg";


const baseUrl =
  "https://6375fb74b5f0e1eb85fed196.mockapi.io/api/v1/users/10/playlists";

export const Playlist = () => {
  const [data, setData] = useState();

  useEffect(() => {
    axios
      .get(baseUrl)
      .then((res) => {
        setData(res.data);
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  // const addPlaylist = async () => {
  //   const res = await axios.post(
  //     `https://6375fb74b5f0e1eb85fed196.mockapi.io/api/v1/users/10/playlists`,
  //     [...data, { id: "0", songs: [], totalVote: 110, listName: "Erdemee" }]
  //   );
  //   console.log(res);
  // };
  // const updatePlaylist = async () => {
  //   const res = await axios.put(
  //     `https://6375fb74b5f0e1eb85fed196.mockapi.io/api/v1/users/10/playlists/1`,
  //     { songs: [{ name: "erdem" }] }
  //   );
  //   console.log(res);
  // };
  // const handleUpdate = async () => {
  //   const response = await instance
  //   .post(`products/${id}`, newProducts)
  //   .then((res) => {
  //   console.log("UPDATED SUCCESS", res.data);
  //   })
  //   .catch((error) => {
  //   console.log(error);
  //   });
  //   };

  return (
    <>
      <div className={styles.container}>
        <div className={styles.header}>
          <div className={styles.top}>
            <div>
              <AiFillLeftCircle
                style={{ width: 30, height: 30 }}
              ></AiFillLeftCircle>
              <AiFillRightCircle
                style={{ width: 30, height: 30 }}
              ></AiFillRightCircle>
            </div>
            <div className={styles.buttonTop}>
              <button className={styles.upgrade}>Upgrade</button>
              <p className={styles.account}>Your account</p>
            </div>
          </div>
          <div className={styles.picture}>
            <img src={pic} className={styles.pic}></img>
            <div>
              <p className={styles.public}>Public playlist</p>
              <p className={styles.playlistName}>
                We have the same music taste.
              </p>
              <div className={styles.tag}>
                <p style={{ color: "#eee" }}>Mayonnaise.</p>
                <p style={{ color: "#eee" }}>• 20 Songs,</p>
                <p style={{ color: "gray" }}>1 hr 30 </p>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.footer}>
          <div className={styles.play}>
            <AiFillPlayCircle className={styles.play1}></AiFillPlayCircle>
            <BiHeart style={{ width: 30, height: 30, color: "gray" }}></BiHeart>
            <MdDownloadForOffline
              style={{ width: 30, height: 30, color: "gray" }}
            ></MdDownloadForOffline>
            <BsThreeDots
              style={{ width: 30, height: 30, color: "gray" }}
            ></BsThreeDots>
          </div>
          <div className={styles.songs}>
            <div className={styles.vote}>
              <p>#</p>
              <p>TITLE</p>
              <p>VOTES</p>
              <p>DATE ADDED</p>
            </div>
            <hr className={styles.hr}></hr>
            <div className={styles.allsongs}>
              <div>
                <p>{1}</p>
                <img src={img1} className={styles.pics}></img>
              </div>
              <div className={styles.id}></div>
              <div className={styles.pics}></div>
              <div className={styles.listName}></div>
              <div className={styles.votes}></div>
              {/* <button
              onClick={addPlaylist}
              style={{ background: "#FFFFFF", borderRadius: "40px" }}
            >
              Update Playlist
            </button> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
