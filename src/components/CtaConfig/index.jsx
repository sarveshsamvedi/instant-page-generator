import { Input } from 'antd';
import React from 'react';
import RedirectUrl from '../shared/RedirectUrl';

const CtaConfig = ({config = {}, updateConfig, sectionKey}) => {
    const ctaText = config?.ctaText || "", ctaColor = config?.config?.color || "";

    const ctaTextOnChange = (e) => {
        const curValue = e.target.value;
        if(!curValue)
            return;
        updateConfig("cta", sectionKey , null, "ctaText", curValue);
    };

    const ctaColorOnChange = (e) => {
        const curValue = e.target.value;
        if(!curValue)
            return;
        updateConfig("cta", sectionKey , null, "color", curValue); 
    };

    return (
        <div className='w-[30%] block mb-4'>
            <div className="mb-4 w-auto">
                <label className="text-gray-500">CTA Text: </label>
                <Input id="ctaText" placeholder="CTA text" onChange={ctaTextOnChange} defaultValue={ctaText}/>
            </div>
            
            <div className="mb-4 w-auto">
                <label className="text-gray-500 block">CTA Color: </label>
                <input type="color" id="favcolor" name="favcolor" onChange={ctaColorOnChange} defaultValue={ctaColor}/>
            </div>
            <div>
                <label className="text-gray-500">Enter redirection link:</label>
                <RedirectUrl updateConfig={updateConfig} type="cta" sectionKey={sectionKey} config={config}/>
            </div>
        </div>                    
    );
}
export default CtaConfig;
