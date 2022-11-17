import { Collapse } from "antd";
import React, { useState } from "react";
import DropDown from "../shared/DropDown";
import ImageUpload from "../shared/ImageUpload";
import { sectionsList, sectionTypes } from "../../constants";
import Sections from "../shared/Sections";

import { Select } from "antd";

const getSectionsItems = (items) => {
  return items.map((item, index) => {
    return {
      label: `${item} sections`,
      value: item,
    };
  });
};
const { Panel } = Collapse;

const LeftMenu = ({ updateConfig, updateSection, changeSectionCount }) => {
  const [sections, setSections] = useState();

  const handleChange = (value) => {
    setSections(value);
    changeSectionCount(value);
  };

  return (
    <div className="w-[70%] p-4 mt-[50px]">
      <Select
        className="w-[30%]"
        placeholder="Select number of sections"
        style={{ width: 120 }}
        onChange={handleChange}
        options={getSectionsItems(sectionsList)}
      />
      <Collapse defaultActiveKey={["0"]} className="mt-5">
        {sections &&
          [...Array(sections)].map((section, index) => (
            <Panel header={`Section ${index + 1}`} key={index}>
              <Sections
                updateConfig={updateConfig}
                sectionKey={index}
                updateSection={updateSection}
              />
            </Panel>
          ))}
      </Collapse>
    </div>
  );
};

export default LeftMenu;
