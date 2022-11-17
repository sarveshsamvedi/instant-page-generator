import React from 'react'

const Image = ({ width = 360, height = 360, payload }) => {
    const imgSrc = payload?.assets?.length ? payload?.assets?.[0] : payload?.default?.[0]
    const redirectHandler = (redirectUrl) => {
        if (redirectUrl && redirectUrl !== "") window.open(redirectUrl, '_blank')
    }
    return <img src={imgSrc} alt='' style={{ width: `${width}px`, height: `${height}px` }} onClick={() => redirectHandler(payload?.redirectUrls?.[0])} />
}

export default Image