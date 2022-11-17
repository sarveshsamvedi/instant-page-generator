import { Collapse } from "antd";
import React, { useEffect, useState } from "react";
import { sectionsList } from "../../constants";
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

const LeftMenu = ({ updateConfig, updateSection, changeSectionCount, config, existingInstantPageId }) => {
  console.log("config panel", config)
  console.log("uuid", existingInstantPageId)
  const [sections, setSections] = useState();

  const handleChange = (value) => {
    setSections(value);
    changeSectionCount(value);
  };

  useEffect(() => {
   if(existingInstantPageId) {
    setSections(config.length)
    console.log("editFlow", existingInstantPageId)
   }
  }, [existingInstantPageId])

  return (
    <div className="w-[70%] p-4 mt-[50px]">
      <Select
        className="w-[30%]"
        placeholder="Select number of sections"
        style={{ width: 120 }}
        onChange={handleChange}
        value={sections}
        options={getSectionsItems(sectionsList)}
      />
      <Collapse defaultActiveKey={["0"]} className="mt-5 overflow-y-auto overflow-x-hidden" style={{height: "calc(100vh - 200px)"}}>
        {sections &&
          [...Array(sections)].map((section, index) => (
            <Panel header={`Section ${index + 1}`} key={index}>
              <Sections
                updateConfig={updateConfig}
                sectionKey={index}
                updateSection={updateSection}
                // config={config}
                config={existingInstantPageId ? config[index] : null}
              />
            </Panel>
          ))}
      </Collapse>
    </div>
  );
};

export default LeftMenu;
