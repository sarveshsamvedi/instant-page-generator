import { UploadOutlined } from "@ant-design/icons";
import { Button, Upload, message } from "antd";
import { host } from "../../../utils/serviceHelper";
import RedirectUrl from "../RedirectUrl";

const ImageUpload = ({ updateConfig, type, sectionKey, assetKey = 0, config }) => {
  const props = {
    name: "image",
    action: `${host}api/upload-image`,
    onChange(info) {
      if (info.file.status !== "uploading") {
      }
      if (info.file.status === "done") {
        if (type === "horizontalScroll-2:1") {
          updateConfig(
            type,
            sectionKey,
            assetKey,
            "assets",
            info?.file?.response?.cdnUrl
          );
        } else
          updateConfig(type, sectionKey, 0, "assets", info?.file?.response?.cdnUrl);
        message.success(`${info.file.name} file uploaded successfully`);
      } else if (info.file.status === "error") {
        message.error(`${info.file.name} file upload failed.`);
      }
    },
  };

  return (
    <div className="flex flex-row">
      <Upload {...props} maxCount={1} className="mr-4">
        <Button icon={<UploadOutlined />}>Click to Upload</Button>
      </Upload>
      <RedirectUrl updateConfig={updateConfig} type={type} sectionKey={sectionKey} assetKey={assetKey} config={config}/>
    </div>
  );
};

export default ImageUpload;
