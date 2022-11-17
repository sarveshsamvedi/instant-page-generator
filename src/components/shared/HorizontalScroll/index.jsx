import { useState } from "react";
import { Select } from "antd";
import { horizontalScrollPictureCounts } from "../../../constants";
import ImageUpload from "../ImageUpload";

const HorizontalScroll = ({ updateConfig, type, sectionKey }) => {
  const [imageCount, setImageCount] = useState();

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
      />

      {[...Array(imageCount)].map((section, index) => (
        <ImageUpload />
      ))}
    </>
  );
};

export default HorizontalScroll;
