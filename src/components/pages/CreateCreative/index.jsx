import React, { useState } from "react";
import { Button } from 'antd';
import cloneDeep from 'lodash/cloneDeep';
import { v4 as uuidv4 } from 'uuid';
import PreviewSection from "../../PreviewSection";
import LeftMenu from "../../LeftMenu";
import { defaultConfig, getDefaultSectionConfig } from "../../../constants";
import { getEncodedBase64String } from "../../../utils/helpers";
import { serviceHelper } from "../../../utils/serviceHelper";

const CreateCreative = () => {
	const [config, setConfig] = useState(cloneDeep(defaultConfig))

	const getEncodedCreativeHtml = () => {
		const htmlStr = document.getElementById("instant-page").outerHTML;
		const outputHtml = `
				 <html><head><meta http-equiv="content-type" content="text/html; charset=utf-8">
				 <meta name="viewport" content="width=device-width, initial-scale=1.0">
				 <script src="https://cdn.tailwindcss.com"></script>
				 </head>
				 <body>
					 ${htmlStr}
				 </body>
				 </html>`;
        return getEncodedBase64String(outputHtml);
  };

	const uploadHtml = () => {
		const html = getEncodedCreativeHtml();
		serviceHelper
			.post("api/upload-html", { data: html })
			.then((data) => {
				console.log('CDN URL', data.data.cdnUrl)
				if (data.status) {
					const instantPageId = uuidv4()
					serviceHelper
						.post(`api/payload/${instantPageId}`, { payload: JSON.stringify(config) })
						.then(data => {
							if (data.status) {
								const currentIds = JSON.parse(localStorage.getItem('instant-page-ids'))
								const updatedIds = currentIds?.length ? [...currentIds, instantPageId] : [instantPageId]
								localStorage.setItem('instant-page-ids', JSON.stringify(updatedIds))
							}
						})
				}
			});
	};

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
    console.log(newConfig);
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
					updateConfig={updateConfig}
					updateSection={updateSection}
					changeSectionCount={changeSectionCount}
				/>
			</div>
			<div className="rightPanel flex">
				<PreviewSection defaultConfig={config} />
				<Button className="mt-[50px]" onClick={uploadHtml}>
					UPLOAD
				</Button>
			</div>
		</div>
	);
};

export default CreateCreative;
