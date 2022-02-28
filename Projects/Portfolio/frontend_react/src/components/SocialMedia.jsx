import React from 'react'
import { BsTwitter, BsInstagram, BsGithub, BsLinkedin, BsTelegram, BsWhatsapp } from 'react-icons/bs';
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
          <a href="tg://resolve?domain=iamayushdas"><BsTelegram /></a>           
        </div>
        <div>
          <a href="https://wa.me/+919599103808?text=Hello! How can i help you?"><BsWhatsapp /></a>           
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