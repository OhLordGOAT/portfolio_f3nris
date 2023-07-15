import React from 'react'
import {FiLinkedin} from "react-icons/fi"
import {FiDribbble} from "react-icons/fi"
import {FiGithub} from "react-icons/fi"
import "./headersocial.css"

const HeaderSocials = () => {
  return (
    <div className='header_socials'>
        <a href="https://www.linkedin.com/in/guillaume-helg/"><FiLinkedin/></a>
        <a href="https://dribbble.com/Lorddragon"><FiDribbble/></a>
        <a href="https://github.com/GuillaumeHelg"><FiGithub/></a>
    </div>
  )
}

export default HeaderSocials