import React from "react";
import Typical from "react-typical";
import logo_hiss4g3s from "../../assets/img/Hiss4g3s_log.png";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import { MdOutlineEmojiEmotions } from "react-icons/md";
import { FaFingerprint } from "react-icons/fa";
import { BsImages } from "react-icons/bs";
import { IoIosSend } from "react-icons/io";

import "./Menu.css";

const Menu = () => {
  return (
    <div className="container_render">
      <div className="container_menu">
        <div className="finish_layout">
          <Header />

          <div className="first_grid">
            <div className="new_section usuarios">
              <p>Holasss</p>
            </div>
            <div className="new_section chat">
              <p>Holasss</p>
              <div class="input-groupp mb-3">
                <span class="input-group-text" id="basic-addon1">
                  <MdOutlineEmojiEmotions className="emoji_icon" />
                </span>
                <input
                  type="text"
                  class="form-control"
                  placeholder="Username"
                  aria-label="Username"
                  aria-describedby="basic-addon1"
                />
                <div
                  className="new_send"
                  onClick={() => alert("se envio el mensaje")}
                >
                  <IoIosSend />
                </div>

                <div
                  className="new_encription"
                  onClick={() => alert("Quieres cifrar tu mensaje")}
                >
                  <FaFingerprint />
                </div>
                <div
                  className="new_file"
                  onClick={() => alert("Agrega una imagen")}
                >
                  <BsImages />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menu;
