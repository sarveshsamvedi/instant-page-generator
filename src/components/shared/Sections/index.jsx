import React, { useState } from "react";
import { Select } from "antd";
import ImageUpload from "../ImageUpload";
import HorizontalScroll from "../HorizontalScroll";
import CtaConfig from "../../CtaConfig";
import { sectionTypes } from "../../../constants";

const Sections = ({ updateConfig, updateSection, sectionKey, config }) => {
  const [sectionType, setSectionType] = useState(config?.type || "");

  const changeSectionType = (value) => {
    setSectionType(value);
    updateSection(value, sectionKey);
  };

  return (
    <>
      <label className="text-gray-500">Select segment type:</label>
      <Select
        className="w-[30%] block mb-4"
        placeholder="Select type"
        style={{ width: 120 }}
        onChange={changeSectionType}
        options={sectionTypes}
        value={sectionType}
      />
      {(sectionType === "image-1:1" || sectionType === "image-3:2") && (
        <ImageUpload
          updateConfig={updateConfig}
          type={sectionType}
          sectionKey={sectionKey}
          className="mt-5"
          config={config}
        />
      )}
      {sectionType === "cta" && (
        <CtaConfig
          config={config}
          updateConfig={updateConfig}
          sectionKey={sectionKey}
        />
      )}

      {sectionType === "horizontalScroll-2:1" && (
        <HorizontalScroll
          updateConfig={updateConfig}
          type={sectionType}
          sectionKey={sectionKey}
          config={config}
        />
      )}
    </>
  );
};

export default Sections;
