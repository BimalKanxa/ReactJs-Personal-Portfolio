import React from 'react'
import {CiLinkedin} from 'react-icons/ci'
import {FaGithubSquare} from 'react-icons/fa'
import {SiLeetcode} from 'react-icons/si'

export default function HeaderSocial() {
  return (
    <div className='header_socials'>
      <a href="https://www.linkedin.com/in/bimal-sharma-994489236/" target="_blank" rel="noreferrer"><CiLinkedin/></a>
      <a href="https://github.com/BimalKanxa" target="_blank" rel="noreferrer"><FaGithubSquare/></a>
      <a href="https://leetcode.com/sharmabimal2003/" target="_blank" rel="noreferrer"><SiLeetcode/></a>
    </div>
  )
}
