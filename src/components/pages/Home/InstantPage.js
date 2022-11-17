import React, { useEffect, useState } from 'react'
import PreviewSection from '../../PreviewSection'
import { serviceHelper } from "../../../utils/serviceHelper";

const InstantPage = ({ instantPageId }) => {
    const [config, setConfig] = useState(null)

    useEffect(() => {
        serviceHelper
            .get(`api/payload/${instantPageId}`)
            .then((data) => {
                console.log('data: ', data.data);
                setConfig(JSON.parse(data?.data))
            }, [])
    })

    return (
        <div>
            {
                config && <PreviewSection defaultConfig={config} />
            }
        </div>
    )
}

export default InstantPage