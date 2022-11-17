import React from 'react'

const Image = ({ width = 360, height = 360, payload }) => {
    const imgSrc = payload?.assets?.length ? payload?.assets?.[0] : payload?.default?.[0]
    return <img src={imgSrc} alt='' className={`w-[${width}px] h-[${height}px]`} />
}

export default Image