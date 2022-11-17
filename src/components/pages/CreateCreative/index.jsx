import React from "react";
import { Button } from "antd";
import PreviewSection from "../../PreviewSection";
import LeftMenu from "../../LeftMenu";
import { defaultConfig } from "../../../constants";
import { serviceHelper } from "../../../utils/serviceHelper";
import { getEncodedBase64String } from "../../../utils/helpers";

const CreateCreative = () => {
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
      .then((data) => console.log(data));
  };
  return (
    <div className="flex">
      <div className="leftPanel">
        <LeftMenu />
      </div>
      <div className="rightPanel flex">
        <PreviewSection defaultConfig={defaultConfig} />
        <Button className="mt-[50px]" onClick={uploadHtml}>
          UPLOAD
        </Button>
      </div>
    </div>
  );
};

export default CreateCreative;
