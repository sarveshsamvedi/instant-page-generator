import React, { useEffect } from 'react'
import Image from './Image'
import Carousel from './Carousel'
import HorizontalScroll from './HorizontalScroll'
import Cta from './Cta'

const PreviewSection = ({ defaultConfig }) => {
    const getSelection = (payload, key) => {
        switch (payload.type) {
            case 'image-1:1':
                return <Image payload={payload} width={360} height={360} key={key} id={`${key}_image-1:1`} />
            case 'image-3:2':
                return <Image payload={payload} width={360} height={240} key={key} id={`${key}_image-3:2`} />
            case 'carousel-1:1':
                return <Carousel payload={payload} width={360} height={360} key={key} />
            case 'carousel-1:2':
                return <Carousel payload={payload} width={360} height={480} key={key} />
            case 'horizontalScroll-2:1':
                return <HorizontalScroll payload={payload} width={240} height={240} key={key} id={`${key}_horizontalScroll-2:1`} />
            case 'cta':
                return <Cta payload={payload} id={`${key}_cta`} />
            default:
                return null
        }
    }

    return (
        <div className='w-[362px] h-[750px] border-solid border border-gray-400 rounded-lg my-[25px] mx-[50px]' id="html-preview">
            <div id='instant-page' className='w-full h-full overflow-y-auto overflow-x-hidden'>
                {
                    defaultConfig && defaultConfig.map((section, index) => {
                        return (
                            <div className='mb-8' key={index}>{getSelection(section, index)}</div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default PreviewSection