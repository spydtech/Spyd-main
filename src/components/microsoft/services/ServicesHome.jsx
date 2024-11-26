import React from 'react'

import Card from './card'
import Sections from './sections'

function ServicesHome() {
    return (
        <div >
            <div className="w-full min-h-full p-2">
                <img 
                    src="https://s3-alpha-sig.figma.com/img/8cc9/f070/fb4d0315b4d0e4a7533d3f91bd668820?Expires=1733702400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=k9NAnuRf5unCJnbd1DzYmnp1qvKl9VQYLIU2EZjYGs6BUxELjxK2WoSlTpXg~UkQdNsliKnz-W~UEV8FNcp-mCc27S87F3~a0iJ6GXMBM~2jTuom~ppml0NQpXzY7ckJc-RDSm9vm1qnA-YseYyjpnPOe5Y1bzaMhn9Y5G4-nOLrQWpN0Vb2oZTTcfztoCAfli7D7Pnz9RyvjIPVWBzlLVGWmL7pxpXDN8L63Xhmz8cznZpmed0LH454qqh~g9l-TvrmoJXpIRDVCFsY~Dea5hYvKI8vSbCwEZZBwCTQS9q28iX2pvfE6QuAZNF4UyiNvMmklhYXc1rMP3mnKNwVHg__" 
                    alt="Homepage" 
                    className="w-full h-auto rounded-lg shadow-lg"
                />

            </div>
            <div className='text-[25px] px-4'>
                <p>Where innovation meets expertise in Microsoft technology solutions. With our comprehensive suite of services, we empower businesses to unlock their full potential and thrive in today's digital landscape. Explore how SpY D Technology can transform your business with Microsoft technology:</p>
            </div> 
            <div>
            <h1 className='text-[#00CEFF] text-center text-[25px]'>Empower Your Business with Cutting-Edge Microsoft Solutions:</h1>
            <p className='text-[#141414]  text-center text-[25px] mt-5'>Transformative Technologies for Seamless Success</p>
            </div>
            <div>
             <Card/>
             <Sections/>
             {/* <Footer/> */}
            </div>
        </div>
    )
}

export default ServicesHome
