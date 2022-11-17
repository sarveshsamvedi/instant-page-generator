import { UploadOutlined } from "@ant-design/icons";
import { Button, Upload, message } from "antd";
import { host } from "../../../utils/serviceHelper";

const ImageUpload = ({updateConfig}) => {
  const props = {
    name: 'image',
    action: `${host}api/upload-image`,
    onChange(info) {
      if (info.file.status !== 'uploading') {
        console.log(info.file, info.fileList);
      }
      if (info.file.status === 'done') {
        updateConfig('image-1:1', 0, 0, "", info?.file?.response?.cdnUrl)
        message.success(`${info.file.name} file uploaded successfully`);
      } else if (info.file.status === 'error') {
        message.error(`${info.file.name} file upload failed.`);
      }
    },
  };

  return (
    <Upload {...props}>
      <Button icon={<UploadOutlined />}>Click to Upload</Button>
    </Upload>
  );
};

export default ImageUpload;
