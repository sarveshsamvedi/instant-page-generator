import React, { useEffect } from 'react'
import Image from './Image'
import Carousel from './Carousel'
import HorizontalScroll from './HorizontalScroll'
import Cta from './Cta'



const PreviewSection = ({ defaultConfig }) => {

    const getSelection = (payload, key) => {
        switch (payload.type) {
            case 'image-1:1':
                return <Image payload={payload} width={360} height={360} key={key} />
            case 'image-3:2':
                return <Image payload={payload} width={360} height={240} key={key} />
            case 'carousel-1:1':
                return <Carousel payload={payload} width={360} height={360} key={key} />
            case 'carousel-1:2':
                return <Carousel payload={payload} width={360} height={480} key={key} />
            case 'horizontalScroll-2:1':
                return <HorizontalScroll payload={payload} width={240} height={240} key={key} />
            case 'cta':
                return <Cta payload={payload} />
            default:
                return null
        }
    }    

    return (
        <div className='w-[362px] h-[700px] border-solid border border-gray-400 rounded-lg m-[50px]' id="html-preview">
            <div id='instant-page' className='w-full h-full overflow-y-auto overflow-x-hidden'>
                {
                    defaultConfig.map((section, index) => {
                        return (
                            <div className='mb-8'>{getSelection(section, index)}</div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default PreviewSection