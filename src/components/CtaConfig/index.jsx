import { Input } from 'antd';
import React from 'react';

const CtaConfig = ({defaultConfig = {}, updateConfig, position}) => {

    const ctaText = defaultConfig?.default || "", redirectionUrl = defaultConfig.redirectUrls[0] || "", ctaColor = defaultConfig?.config?.color || "";

    console.log({ctaText});

    const ctaTextOnChange = (e) => {
        const curValue = e.target.value;
        if(!curValue)
            return;

        console.log({ctaText, redirectionUrl, ctaColor});

        updateConfig("cta", position , null, "ctaText", curValue);
    };

    const redirectionUrlOnChange = (e) => {
        const curValue = e.target.value;
        if(!curValue)
            return;
        
        console.log({ctaText, redirectionUrl, ctaColor});
        updateConfig("cta", position , 0, "redirectUrls", curValue);
    };

    const ctaColorOnChange = (e) => {
        const curValue = e.target.value;
        if(!curValue)
            return;
        
        console.log({ctaText, redirectionUrl, ctaColor});
        updateConfig("cta", position , null, "color", curValue); 
    };

    return (
        <div className=''>
            <div style={{padding: "1vw", width: "auto"}}>
                <label for="ctaText">CTA Text: </label>
                <Input id="ctaText" placeholder="CTA text" onChange={ctaTextOnChange} defaultValue={ctaText}/>
            </div>
            
            <div style={{padding: "1vw", width: "auto"}}>
                <label for="favcolor">CTA Color: </label>
                <input type="color" id="favcolor" name="favcolor" onChange={ctaColorOnChange} defaultValue={ctaColor}/>
            </div>
            <div style={{margin: "1vw", width: "auto"}}>
                <label for="redirectionUrl">Redirection Url: </label>
                <Input style={{margin: "1vw", width: "auto"}} id="redirectionUrl" placeholder="Redirection URL" onChange={redirectionUrlOnChange} defaultValue={redirectionUrl}/>
            </div>

        </div>                    
    );
}
export default CtaConfig;