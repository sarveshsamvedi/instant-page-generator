import React from "react";
import { Button } from 'antd';
import PreviewSection from "../../PreviewSection";
import LeftMenu from "../../LeftMenu";
import { defaultConfig } from "../../../constants"
import ReactDOMServer from "react-dom/server";

const CreateCreative = () => {	
	return (
		<div className="flex">
			<div className="leftPanel">
			<LeftMenu />
			</div>
			<div className="rightPanel flex">
				<PreviewSection defaultConfig={defaultConfig} />
				<Button className="mt-[50px]">UPLOAD</Button>
			</div>
		</div>
	);
};

export default CreateCreative;
