import React, { useState } from "react";
import { Button } from 'antd';
import PreviewSection from "../../PreviewSection";
import LeftMenu from "../../LeftMenu";
import { defaultConfig, getDefaultSectionConfig } from "../../../constants"
import cloneDeep from 'lodash/cloneDeep';

const CreateCreative = () => {

	const [config, setConfig] = useState(cloneDeep(defaultConfig))

	const updateConfig = (type, position = 0, assetPosition = 0, key, value) => {
		let newConfig = cloneDeep(config)

		// key can be 'assets', 'redirectUrls', 'color', 'ctaText'
		switch (type) {
			case 'image-1:1':
			case 'image-3:2':
				newConfig[position].assets[0] = value
				break
			case 'horizontalScroll-2:1':
				newConfig[position][key][assetPosition] = value
				break
			case 'cta':
				if (key === 'color') {
					newConfig[position].config[key] = value
				} else if (key === 'ctaText') {
					newConfig[position][key] = value
				} else if (key === 'redirectUrls') {
					newConfig[position][key][assetPosition] = value
				}
				break
			default:
				break
		}

		setConfig(newConfig)
	}

	const updateSection = (newType, position = 0) => {
		let newConfig = cloneDeep(config)
		newConfig[position] = getDefaultSectionConfig[newType]
		setConfig(newConfig)
	}

	const changeSectionCount = (newCount) => {
		const oldCount = config.length
		let newConfig = cloneDeep(config)
		if (newCount === oldCount) return
		if (newCount < oldCount) {
			setConfig(newConfig.slice(0, newCount))
		} else {
			for (let i = 0; i < newCount - oldCount; i++) {
				newConfig.push(getDefaultSectionConfig['image-1:1'])
			}
			setConfig(newConfig.slice(0, newCount))
		}
	}

	return (
		<div className="flex">
			<div className="leftPanel">
				<LeftMenu
					updateSection={updateSection}
					updateConfig={updateConfig}
					changeSectionCount={changeSectionCount}
				/>
			</div>
			<div className="rightPanel flex">
				<PreviewSection defaultConfig={config} />
				<Button className="mt-[50px]">UPLOAD</Button>
			</div>
		</div>
	);
};

export default CreateCreative;
