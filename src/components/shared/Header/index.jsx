import { Layout } from "antd";

const { Header } = Layout;

const HeaderComp = () => {
  return (
    <Header
      style={{ background: "lightgrey", padding: 0, height: 50, fontSize: "2.2vw", padding: "2vw", marginBottom: "2vw" }}
      className="border-b border-gray-200 flex flex-row justify-between items-center pr-6 pl-8"
    >
      <div className="leftBlock">
        Instant Page Generator 🎑
      </div>
    </Header>
  );
};

export default HeaderComp;
