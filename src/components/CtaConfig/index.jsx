import { Input } from 'antd';
import React from 'react';
import RedirectUrl from '../shared/RedirectUrl';

const CtaConfig = ({config = {}, updateConfig, sectionKey}) => {
    console.log(config)
    const ctaText = config?.default || "", redirectionUrl = config?.redirectUrls[0] || "", ctaColor = config?.config?.color || "";

    const ctaTextOnChange = (e) => {
        const curValue = e.target.value;
        if(!curValue)
            return;

        console.log({ctaText, redirectionUrl, ctaColor});

        updateConfig("cta", sectionKey , null, "ctaText", curValue);
    };

    const ctaColorOnChange = (e) => {
        const curValue = e.target.value;
        if(!curValue)
            return;
        
        console.log({ctaText, redirectionUrl, ctaColor});
        updateConfig("cta", sectionKey , null, "color", curValue); 
    };

    return (
        <div className=''>
            <div style={{padding: "1vw", width: "auto"}}>
                <label>CTA Text: </label>
                <Input id="ctaText" placeholder="CTA text" onChange={ctaTextOnChange} defaultValue={ctaText}/>
            </div>
            
            <div style={{padding: "1vw", width: "auto"}}>
                <label>CTA Color: </label>
                <input type="color" id="favcolor" name="favcolor" onChange={ctaColorOnChange} defaultValue={ctaColor}/>
            </div>
            <RedirectUrl updateConfig={updateConfig} type="cta" sectionKey={sectionKey} assetKey={0}/>
        </div>                    
    );
}
export default CtaConfig;
