import React, { useState } from 'react'
/////////

import { FaLinkedin } from 'react-icons/fa'
import { FaFacebook } from 'react-icons/fa'
import { FaInstagram } from 'react-icons/fa'

////////////
import './card.css'

import space from './2.jpg'

function Card(props) {

    return (
        <div className="card">
            <div className="upcontainer">
                <img src={space} />
                <div className="imgcontainer">
                    <img src={props.img} alt="" height="100px" width="100px" />
                </div>
            </div>
            <div className="lowcontainer">
                <h2>{props.name}</h2>
                <p> {props.about} </p>
                <br />

                <div className="icon">


                    <a href={props.tlink} >
                        <FaLinkedin />
                    </a>
                    <a href={props.flink} >
                        <FaFacebook />
                    </a>
                    <a href={props.ilink} >
                        <FaInstagram />
                    </a>
                </div>

            </div>
        </div>
    )


}
export default Card