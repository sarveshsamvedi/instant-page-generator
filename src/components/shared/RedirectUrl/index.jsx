import { UploadOutlined } from "@ant-design/icons";
import { Button, Upload, Input, message } from "antd";
import { host } from "../../../utils/serviceHelper";

const RedirectUrl = ({ updateConfig, type, sectionKey, assetKey = 0 }) => {
  const onChange = (e) => {
    const curValue = e.target.value;
    if (!curValue) return;
    console.log({ type, sectionKey, curValue, assetKey });
    updateConfig(type, sectionKey, assetKey, "redirectUrls", curValue);
  };

  return (
    <div className="mb-2 ml-4">
      <Input
        className="w-auto"
        placeholder="Enter redirection link"
        id="redirectionUrl"
        onChange={onChange}
        // defaultValue={redirectionUrl}
      />
    </div>
  );
};

export default RedirectUrl;
