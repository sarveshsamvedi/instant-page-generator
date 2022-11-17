import React from 'react'

const HorizontalScroll = ({ width = 360, height = 360, payload }) => {
    const imgUrls = payload?.assets?.length ? payload?.assets : payload?.default

    const redirectHandler = (redirectUrl) => {
        if (redirectUrl && redirectUrl !== "") window.open(redirectUrl, '_blank')
    }

    return (
        <div style={{ width: `${360}px`, height: `${height}px`, overflowX: 'scroll' }} className="flex">
            {
                imgUrls.map((url, index) => {
                    return <img src={url} alt='' style={{ width: `${width}px`, height: `${height}px` }} className="mr-12" key={index} onClick={() => redirectHandler(payload?.redirectUrls?.[index])} />
                })
            }
        </div>
    )
}

export default HorizontalScroll