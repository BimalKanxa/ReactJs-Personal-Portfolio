import React from 'react'
import './footer.css'
import {CiLinkedin} from 'react-icons/ci'
import {FaGithubSquare} from 'react-icons/fa'
import {SiLeetcode} from 'react-icons/si'

export default function Footer() {
  return (
    <footer>
      <a href="/" className='footer_logo'>Bimal Sharma</a>
      <ul className='permalinks'>
        <li><a href="/">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experiance">Experience</a></li>
        <li><a href="#project">Projects</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="footer_socials">
      <a href="https://www.linkedin.com/in/bimal-sharma-994489236/" target="_blank" rel="noreferrer"><CiLinkedin/></a>
      <a href="https://github.com/BimalKanxa" target="_blank" rel="noreferrer"><FaGithubSquare/></a>
      <a href="https://leetcode.com/sharmabimal2003/" target="_blank" rel="noreferrer"><SiLeetcode/></a>
      </div>

      <div className='footer_copyright'>
        <small>&copy; Bimal Sharma. All rights reserved.</small>
      </div>
    </footer>
  )
}
