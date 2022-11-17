import { useState, useEffect } from "react";
import { Select } from "antd";
import { horizontalScrollPictureCounts } from "../../../constants";
import ImageUpload from "../ImageUpload";

const HorizontalScroll = ({ updateConfig, type, sectionKey, config }) => {
  const [imageCount, setImageCount] = useState(config?.assets?.length || 0);

  const changeImageCount = (value) => {
    setImageCount(value);
  };

  const getItems = (items) => {
    return items.map((item, index) => {
      return {
        label: `${item} images`,
        value: item,
      };
    });
  };

  return (
    <>
      <Select
        className="w-[30%] block mb-4"
        placeholder="Select number of images"
        style={{ width: 120 }}
        onChange={changeImageCount}
        options={getItems(horizontalScrollPictureCounts)}
        value={imageCount}
      />

      {imageCount > 0 && [...Array(imageCount)].map((element, index) => (
        <ImageUpload updateConfig={updateConfig} type={type} sectionKey={sectionKey} assetKey={index} config={config} className="mt-5" />
      ))}
    </>
  );
};

export default HorizontalScroll;
