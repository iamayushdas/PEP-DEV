import React from 'react'
import { BsTwitter, BsInstagram, BsGithub, BsLinkedin } from 'react-icons/bs';
import { FaFacebookF, FaLinkedin } from 'react-icons/fa';

const SocialMedia = () => {
  return (
    <div className='app__social'>
        <div>
          <a href="https://github.com/iamayushdas"><BsGithub /></a>           
        </div>
        <div>
          <a href="https://www.linkedin.com/in/iamayushdas"><BsLinkedin /></a>           
        </div>
        <div>
          <a href="https://twitter.com/imayushdas"><BsTwitter /></a>           
        </div>
        <div>
        <a href="https://instagram.com/iamayushdas"><BsInstagram /></a>
        </div>
        <div>
        <a href="https://facebook.com/iamayushdas"><FaFacebookF /></a>
        </div>
    </div>
  )
}

export default SocialMedia