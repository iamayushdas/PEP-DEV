import React , {useState, useEffect} from 'react'
import {motion} from 'framer-motion'

import {images} from '../../constants'
import './About.scss'
import { urlFor, client } from '../../client'

import { AppWrap } from '../../wrapper'
// const abouts = [
//   // {title: 'Open Source Contributor', description: 'I have contributed my codes in Facebook , Apache APISIX, CNCF etc', imgUrl: images.about01, url: 'https://github.com/iamayushdas'},
//   // {title: 'Web Development', description: 'I am a good web developer.', imgUrl: images.about02, url: ''},
//   // {title: 'UI/UX', description: 'I am goog UI/UX designing.', imgUrl: images.about03, url: ''},
//   // {title: 'App development', description: 'I am a beginner in App development.', imgUrl: images.about04, url: ''},
//   // {title: 'DevOps ', description: '.', imgUrl: images.about01, url: ''}
// ]
const About = () => {
  const [abouts, setAbouts] = useState([]);

  useEffect(() => {
    const query = '*[_type == "abouts"]';
    client.fetch(query).then((data) => {
      setAbouts(data)
    })
  }, []);
  return (
    <>
      <h2 className='head-text'>
        I know that
        <span> Good Design </span>
        <br />
        means
        <span> Good Business </span>
        </h2>


        <div className='app__profiles'>
            {abouts.map((about, index) => (
              <motion.div
                whileInView={{opacity: 1}}
                whileHover={{scale : 1.1 }}
                transition={{duration: 0.5, type: 'tween'}}
                className="app__profile-item"
                key={about.title + index}
              >
                <a href={about.url}>                <img src={urlFor(about.imgUrl)} alt={about.title} /></a>
                <h2 className='bold-text' style={{marginTop: 20, textAlign: 'center'}}>{about.title}</h2>
                <p className='p-text' style={{marginTop: 10, textAlign: 'center'}}>{about.description}</p>
              </motion.div>
            ))}
        </div>
    </>
  )
}

export default AppWrap(About, 'about')