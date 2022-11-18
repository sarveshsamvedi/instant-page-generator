export const defaultConfig = [
  {
    type: "image-1:1",
    assets: ["https://gamewall-pwa.sharechat.com/network/assets/speaker.PNG"],
    // assets: [],
    redirectUrls: [
      "https://stackoverflow.com/questions/17711146/how-to-open-link-in-a-new-tab-in-html",
    ],
  },
  {
    type: "horizontalScroll-2:1",
    assets: [
      "https://gamewall-pwa.sharechat.com/network/assets/speaker.PNG",
      "https://gamewall-pwa.sharechat.com/network/assets/speaker.PNG",
      "https://gamewall-pwa.sharechat.com/network/assets/speaker.PNG",
    ],
    redirectUrls: [],
  },
  {
    type: "image-3:2",
    assets: ["https://gamewall-pwa.sharechat.com/network/assets/speaker.PNG"],
    redirectUrls: [],
  },
  {
    type: "cta",
    config: {
      color: "",
    },
    redirectUrls: [""],
    ctaText: "",
  },
  // {
  //     type: 'carousel-1:2',
  //     config: {
  //         autoPlay: false
  //     },
  //     default: [
  //         'https://gamewall-pwa.sharechat.com/network/assets/speaker.PNG',
  //         'https://gamewall-pwa.sharechat.com/network/assets/speaker.PNG',
  //         'https://gamewall-pwa.sharechat.com/network/assets/speaker.PNG',
  //     ],
  //     redirectUrls: [],
  //     assets: []
  // },
  // {
  //     type: 'carousel-1:1',
  //     config: {
  //         autoPlay: true
  //     },
  //     default: [
  //         'https://gamewall-pwa.sharechat.com/network/assets/speaker.PNG',
  //         'https://gamewall-pwa.sharechat.com/network/assets/speaker.PNG',
  //         'https://gamewall-pwa.sharechat.com/network/assets/speaker.PNG',
  //     ],
  //     redirectUrls: [],
  //     assets: []
  // },
];

export const getDefaultSectionConfig = {
  "image-1:1": {
    type: "image-1:1",
    assets: ["https://gamewall-pwa.sharechat.com/network/assets/speaker.PNG"],
    redirectUrls: [
      "https://stackoverflow.com/questions/17711146/how-to-open-link-in-a-new-tab-in-html",
    ],
  },
  "horizontalScroll-2:1": {
    type: "horizontalScroll-2:1",
    assets: [
      "https://gamewall-pwa.sharechat.com/network/assets/speaker.PNG",
      "https://gamewall-pwa.sharechat.com/network/assets/speaker.PNG",
      "https://gamewall-pwa.sharechat.com/network/assets/speaker.PNG",
    ],
    redirectUrls: [],
  },
  cta: {
    type: "cta",
    config: {
      color: "",
    },
    redirectUrls: [],
    ctaText: "",
  },
  "image-3:2": {
    type: "image-3:2",
    assets: ["https://gamewall-pwa.sharechat.com/network/assets/speaker.PNG"],
    redirectUrls: [],
  },
};

export const sectionsList = [3, 4, 5];

export const sectionTypes = [
  {
    label: "1:1 Image",
    value: "image-1:1",
  },
  {
    label: "3:2 Image",
    value: "image-3:2",
  },
  {
    label: "2:1 Horizontal Scroll",
    value: "horizontalScroll-2:1",
  },
  {
    label: "Call to Action",
    value: "cta",
  },
  //   {
  //     label: "Carousel",
  //     value: "carousel",
  //   },
];

export const horizontalScrollPictureCounts = [3, 4, 5];