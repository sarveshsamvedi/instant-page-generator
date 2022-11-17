import React from "react";
import { Button } from 'antd';
import PreviewSection from "../../PreviewSection";
import { defaultConfig } from "../../../constants"

const CreateCreative = () => {

	return (
		<div className="flex">
			<div className="leftPanel">Config</div>
			<div className="rightPanel flex">
				<PreviewSection defaultConfig={defaultConfig} />
				<Button className="mt-[50px]">UPLOAD</Button>
			</div>
		</div>
	);
};

export default CreateCreative;
