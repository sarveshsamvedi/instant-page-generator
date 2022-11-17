import React, { useState } from "react";
import { Select } from "antd";
import ImageUpload from "../ImageUpload";
import HorizontalScroll from "../HorizontalScroll";
import { sectionTypes } from "../../../constants";

const Sections = ({ updateConfig, updateSection, sectionKey }) => {
  const [sectionType, setSectionType] = useState();

  const changeSectionType = (value) => {
    setSectionType(value);
    console.log(sectionKey - 1)
    updateSection(value, sectionKey)
  };

  return (
    <>
      <Select
        className="w-[30%] block mb-4"
        placeholder="Select type"
        style={{ width: 120 }}
        onChange={changeSectionType}
        options={sectionTypes}
      />
      {(sectionType === "image-1:1" || sectionType === "image-3:2") && (
        <ImageUpload updateConfig={updateConfig} type={sectionType} sectionKey={sectionKey} className="mt-5" />
      )}
      {sectionType === "cta" && <div>CTA Component</div>}

      {sectionType === "horizontalScroll-2:1" && (
        <HorizontalScroll />
      )}
    </>
  );
};

export default Sections;
