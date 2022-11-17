import React, { useState, useEffect } from "react";
import { Select } from "antd";
import ImageUpload from "../ImageUpload";
import HorizontalScroll from "../HorizontalScroll";
import CtaConfig from "../../CtaConfig";
import { sectionTypes } from "../../../constants";

const Sections = ({ updateConfig, updateSection, sectionKey, config }) => {
  console.log("defaultValue",config)
  const [sectionType, setSectionType] = useState();

  const changeSectionType = (value) => {
    setSectionType(value);
    updateSection(value, sectionKey)
  };
  
  useEffect(() => {
    setSectionType(config.type);
   }, [config])

  return (
    <>
      <Select
        className="w-[30%] block mb-4"
        placeholder="Select type"
        style={{ width: 120 }}
        onChange={changeSectionType}
        options={sectionTypes}
        value={sectionType}
      />
      {(sectionType === "image-1:1" || sectionType === "image-3:2") && (
        <ImageUpload updateConfig={updateConfig} type={sectionType} sectionKey={sectionKey} className="mt-5" config={config} />
      )}
      {sectionType === "cta" && <CtaConfig config={config} updateConfig={updateConfig} sectionKey={sectionKey} />}

      {sectionType === "horizontalScroll-2:1" && (
        <HorizontalScroll updateConfig={updateConfig} type={sectionType} sectionKey={sectionKey} config={config}/>
      )}
    </>
  );
};

export default Sections;
