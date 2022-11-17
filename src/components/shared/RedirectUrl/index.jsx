import { Input } from "antd";

const RedirectUrl = ({ updateConfig, type, sectionKey, assetKey = 0, config }) => {
  const onChange = (e) => {
    const curValue = e.target.value;
    if (!curValue) return;
    updateConfig(type, sectionKey, assetKey, "redirectUrls", curValue);
  };

  return (
    <div className="mb-2">
      <Input
        className="w-auto"
        placeholder="Enter redirection link"
        id="redirectionUrl"
        onChange={onChange}
        defaultValue={config?.redirectUrls[assetKey]}
      />
    </div>
  );
};

export default RedirectUrl;
