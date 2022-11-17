import { Input } from "antd";

const RedirectUrl = ({ updateConfig, type, sectionKey, assetKey = 0, config }) => {
  console.log("config",config)
  const onChange = (e) => {
    const curValue = e.target.value;
    if (!curValue) return;
    updateConfig(type, sectionKey, assetKey, "redirectUrls", curValue);
  };

  return (
    <div className="mb-2 ml-4">
      <Input
        className="w-auto"
        placeholder="Enter redirection link"
        id="redirectionUrl"
        onChange={onChange}
        defaultValue={config.redirectUrls[0]}
      />
    </div>
  );
};

export default RedirectUrl;
