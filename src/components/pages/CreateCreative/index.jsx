import React, { useEffect, useState } from "react";
import { Button, Modal } from 'antd';
import { Link } from "react-router-dom";
import cloneDeep from 'lodash/cloneDeep';
import { v4 as uuidv4 } from 'uuid';
import PreviewSection from "../../PreviewSection";
import LeftMenu from "../../LeftMenu";
import { defaultConfig, getDefaultSectionConfig } from "../../../constants";
import { getEncodedBase64String } from "../../../utils/helpers";
import { serviceHelper } from "../../../utils/serviceHelper";

const CreateCreative = (props) => {
	const [config, setConfig] = useState(cloneDeep(defaultConfig))
	const [existingInstantPageId, setInstantPageId] = useState(null);

	useEffect(() => {
		if (localStorage.getItem('payload')) setConfig(JSON.parse(localStorage.getItem('payload')))
		if (localStorage.getItem('instantPageId')) setInstantPageId(localStorage.getItem('instantPageId'))
	}, [])

	const getAllElmsIds = () => {
		const allIds = []
		config.forEach((elm, index) => {
			if (elm.type === 'horizontalScroll-2:1') {
				elm.assets.forEach((e, ind) => {
					allIds.push(`${ind}${index}_${elm.type}`)
				})
			} else {
				allIds.push(`${index}_${elm.type}`)
			}
		})
		return allIds
	}

	const getEncodedCreativeHtml = (instantPageId) => {
		const allElmsIds = JSON.stringify(getAllElmsIds())
		const instantId = JSON.stringify(instantPageId)
		const domainNAme = 'https://8dfc-2405-201-300b-4aee-bd27-2aec-45f0-d739.in.ngrok.io'
		const apiUrl = JSON.stringify(`${domainNAme}/api/event/${instantPageId}`)
		const htmlStr = document.getElementById("instant-page").outerHTML;
		const outputHtml = `
		<html><head><meta http-equiv="content-type" content="text/html; charset=utf-8">
		<meta name="viewport" content="width=device-width, initial-scale=1.0">
		<script src="https://cdn.tailwindcss.com"></script>
		</head>
		<body>
		${htmlStr}
		<script>
        const listOfIds = ["0_image-1:1","01_horizontalScroll-2:1","11_horizontalScroll-2:1","21_horizontalScroll-2:1","2_image-3:2","3_cta"]
		const instantPageId = "b1aa4d96-7981-45d6-82f8-60a52a74f8e1"
		const apiUrl = "https://8dfc-2405-201-300b-4aee-bd27-2aec-45f0-d739.in.ngrok.io/api/event/b1aa4d96-7981-45d6-82f8-60a52a74f8e1"
        function sendEvent(eventName, data) {
            const payload = {
                eventName,
                data
            }
            fetch(apiUrl, {
                headers: {
                    "Content-Type": "application/json",
                },
                method: "POST",
                body: JSON.stringify(payload),
            })
        }

        function attachEventListners() {
            listOfIds.forEach(id => {
                const elm = document.getElementById(id)
                if (elm.dataset.lp && elm.dataset.lp !== "" && elm.dataset.lp !== "undefined") {
                    elm.addEventListener('click', function () {
                        sendEvent("CLICK_EVENT", instantPageId)
                        sendEvent("LP_URL", elm.dataset.lp)
                        window.open(elm.dataset.lp, '_blank')
                    })
                }
            })
        }

        document.addEventListener('DOMContentLoaded', function () {
            sendEvent("INSTANT_PAGE_VIEW", instantPageId)
            attachEventListners()
        });

        function convert(){
        	convertToVwByType('div');
			
			//img
			convertToVwByType('img');
			
			//button
			convertToVwByType('button');
			
			//li
			convertToVwByType('li');
			
			
			function convertToVwByType(type){
				//type -> div, button, img
				const allElem = document.querySelectorAll(type);
	
				if(!allElem || allElem.length==0)
						return;
			
				allElem.forEach((curElem)=>{
					convertPxStylesToVw(curElem);
				});
			}
			
			
			function convertPxStylesToVw(element){
				const computedStyles = getComputedStyle(element);
			
				Object.keys(computedStyles).forEach((cur)=>{
					const curValue = computedStyles[cur];
					if(curValue.slice(-2) === 'px'){
						const pxValue = (Number)(curValue.substring(0, curValue.length-2));
						const vwValue = convertPXToVW(pxValue);
			
						element.style[cur] = vwValue+"vw";
			
					}
				});
			
			}
			
			function convertPXToVW(px) {
				// return px/3.6;
					return px * (100 / document.documentElement.clientWidth);

			}
        }

        setTimeout(()=> {
        	convert();
        }, 1000);        
        </script>
        </body>
       	</html>
		`;
		console.log('outputHtml: ', outputHtml);
		return getEncodedBase64String(outputHtml);
	};

	const uploadHtml = () => {
		const instantPageId = existingInstantPageId || uuidv4()
		const html = getEncodedCreativeHtml(instantPageId);
		serviceHelper
			.post("api/upload-html", { data: html })
			.then((data) => {
				console.log('CDN URL', data.data.cdnUrl)
				if (data.status) {
					serviceHelper
						.post(`api/payload/${instantPageId}`, { payload: JSON.stringify(config) })
						.then(res => {
							Modal.success({
								title: 'Woohoo! 🥳 Your Instant Page Has Been Created',
								content: data?.data?.cdnUrl ? `CDN URL: ${data?.data?.cdnUrl}` : 'Expore the Home Section to View Your Instant Pages!',
							});
							if (res.status && !existingInstantPageId) {
								const currentIds = JSON.parse(localStorage.getItem('instant-page-ids'))
								const updatedIds = currentIds?.length ? [...currentIds, instantPageId] : [instantPageId]
								localStorage.setItem('instant-page-ids', JSON.stringify(updatedIds))
							}
						})
						.catch(err => {
							Modal.error({
								title: '☠️ Something Went Wrong ☠️',
								content: 'Please Try Again!',
							});
						})
				}
			})
			.catch(err => {
				Modal.error({
					title: '☠️ Something Went Wrong ☠️',
					content: 'Please Try Again!',
				});
			})
	};

	const updateConfig = (type, position = 0, assetPosition = 0, key, value) => {

		let newConfig = cloneDeep(config)
		// key can be 'assets', 'redirectUrls', 'color', 'ctaText'
		switch (type) {
			case 'image-1:1':
			case 'image-3:2':
				newConfig[position][key][0] = value
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
		console.log("newConfig", newConfig);
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
			<div className="leftPanel w-[70%]">
				<Link to="/" className="ml-4 !mt-4"><Button>Home</Button></Link>
				<LeftMenu
					updateConfig={updateConfig}
					updateSection={updateSection}
					changeSectionCount={changeSectionCount}
					config={config}
					existingInstantPageId={existingInstantPageId}
				/>
			</div>
			<div className="rightPanel flex" style={{margin: "0 4vw"}}>
				<PreviewSection defaultConfig={config} />
				<Button className="mt-[50px]" onClick={uploadHtml}>
					UPLOAD
				</Button>
			</div>
		</div>
	);
};

export default CreateCreative;
