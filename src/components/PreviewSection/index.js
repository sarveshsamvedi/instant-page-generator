import React from 'react'
import Image from './Image'
import Carousel from './Carousel'
import HorizontalScroll from './HorizontalScroll'

const PreviewSection = ({ defaultConfig }) => {
    console.log('defaultConfig: ', defaultConfig);

    const getSelection = (payload, key) => {
        let elm;
        switch (payload.type) {
            case 'image-1:1':
                return <Image payload={payload} width={360} height={360} key={key} />
            case 'image-3:4':
                return <Image payload={payload} width={360} height={480} key={key} />
            case 'carousel-1:1':
                return <Carousel payload={payload} width={360} height={360} key={key} />
            case 'carousel-1:2':
                return <Carousel payload={payload} width={360} height={480} key={key} />
            case 'horizontalScroll-2:1':
                return <HorizontalScroll payload={payload} width={240} height={240} key={key} />
            default:
                elm = null
        }
        return elm
    }

    return (
        <div className='w-[362px] h-[700px] border-solid border border-gray-400 rounded-lg m-[50px]'>
            <div id='instant-page' className='w-full h-full overflow-y-auto overflow-x-hidden'>
                {
                    defaultConfig.map((section, index) => {
                        return getSelection(section, index)
                    })
                }
            </div>
        </div>
    )
}

export default PreviewSection