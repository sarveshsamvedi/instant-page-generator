import React, { useEffect, useState } from 'react'
import { Link } from "react-router-dom";
import { Button } from "antd";
import PreviewSection from '../../PreviewSection'
import { serviceHelper } from "../../../utils/serviceHelper";

const InstantPage = ({ instantPageId, editVisible }) => {
    const [config, setConfig] = useState(null)

    useEffect(() => {
        serviceHelper
            .get(`api/payload/${instantPageId}`)
            .then((data) => {
                console.log('data: ', data.data);
                setConfig(JSON.parse(data?.data))
            })
    }, [])

    const editHandler = () => {
        localStorage.setItem('payload', JSON.stringify(config))
        localStorage.setItem('instantPageId', instantPageId)
    }

    return (
        <div>
            {
                config && <PreviewSection defaultConfig={config} />
            }
            {
                config && editVisible && <Link to="create-creative" className="mt-12 ml-12"><Button onClick={editHandler}>EDIT</Button></Link>
            }
        </div>
    )
}

export default InstantPage