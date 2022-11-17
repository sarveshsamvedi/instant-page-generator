import React from 'react'
import Image from './Image'

const PreviewSection = ({ defaultConfig }) => {
    console.log('defaultConfig: ', defaultConfig);

    const getSelection = (payload) => {
        let elm;
        switch (payload.type) {
            case 'image-1:1':
                return <Image payload={payload} width={360} height={360} />
            case 'image-3:4':
                return <Image payload={payload} width={360} height={480} />
            case 'carousel-1:1':
                elm = 'hi3'
                break
            case 'carousel-1:2':
                elm = 'hi4'
                break
            case 'horizontalScroll-2:1':
                elm = 'hi5'
                break
            default:
                elm = null
        }
        return elm
    }

    return (
        <div className='w-[360px] h-[700px] border-solid border border-gray-400 rounded-lg m-[50px]'>
            <div id='instant-page' className='w-full h-full overflow-auto'>
                {
                    defaultConfig.map((section, index) => {
                        return getSelection(section)
                    })
                }
            </div>
        </div>
    )
}

export default PreviewSection