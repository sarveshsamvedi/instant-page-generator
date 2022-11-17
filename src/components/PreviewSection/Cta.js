import React from 'react'

const Image = ({ width = 340, height = 50, payload }) => {
    console.log(payload)
    const bgColor = payload?.config?.color !== "" ? payload?.config?.color : 'black'

    const redirectHandler = (redirectUrl) => {
        if (redirectUrl && redirectUrl !== "") window.open(redirectUrl, '_blank')
    }

    return (
        <div style={{ display: 'flex', justifyContent: 'center' }} onClick={() => redirectHandler(payload?.redirectUrls?.[0])}>
            <div style={{
                width: `${width}px`,
                height: `${height}px`,
                color: 'white',
                backgroundColor: `${bgColor}`,
                fontWeight: 'bold',
                fontSize: '24px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: '6px'
            }}>
                {payload.ctaText !== "" ? payload.ctaText : payload.default}
            </div>
        </div>
    )
}

export default Image