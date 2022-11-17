import { UploadOutlined } from "@ant-design/icons";
import { Button, Upload, message } from "antd";
import { host } from "../../../utils/serviceHelper";
import RedirectUrl from "../RedirectUrl";

const ImageUpload = ({ updateConfig, type, sectionKey, assetKey = 0 }) => {
  const props = {
    name: "image",
    action: `${host}api/upload-image`,
    onChange(info) {
      if (info.file.status !== "uploading") {
        console.log(info.file, info.fileList);
      }
      if (info.file.status === "done") {
        if (type === "horizontalScroll-2:1") {
          console.log(assetKey);
          updateConfig(
            type,
            sectionKey,
            assetKey,
            "assets",
            info?.file?.response?.cdnUrl
          );
        } else
          updateConfig(type, sectionKey, 0, "", info?.file?.response?.cdnUrl);
        message.success(`${info.file.name} file uploaded successfully`);
      } else if (info.file.status === "error") {
        message.error(`${info.file.name} file upload failed.`);
      }
    },
  };

  return (
    <div className="flex flex-row">
      <Upload {...props}>
        <Button icon={<UploadOutlined />}>Click to Upload</Button>
      </Upload>
      <RedirectUrl updateConfig={updateConfig} type={type} sectionKey={sectionKey} assetKey={assetKey}/>
    </div>
  );
};

export default ImageUpload;
