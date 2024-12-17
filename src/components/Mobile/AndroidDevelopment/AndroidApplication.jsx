import React,{useEffect} from 'react'
import Androidhome from './androidhome'
import Capabilities from './Capabilities'
import Ourprovenmethodology from './Ourprovenmethodology'
import CallToAction from '../../CallToAction'
import Footer from '../../Footer'


function AndroidApplication() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
        <Androidhome />
        <Capabilities />
        <Ourprovenmethodology />
        <CallToAction />
        <Footer />
    </div>
  )
}

export default AndroidApplication