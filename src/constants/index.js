export const defaultConfig = [
    {
        type: 'image-1:1',
        default: ['https://gamewall-pwa.sharechat.com/network/assets/speaker.PNG'],
        assets: [],
        redirectUrls: ['https://stackoverflow.com/questions/17711146/how-to-open-link-in-a-new-tab-in-html']
    },
    {
        type: 'horizontalScroll-2:1',
        default: [
            'https://gamewall-pwa.sharechat.com/network/assets/speaker.PNG',
            'https://gamewall-pwa.sharechat.com/network/assets/speaker.PNG',
            'https://gamewall-pwa.sharechat.com/network/assets/speaker.PNG',
        ],
        assets: [],
        redirectUrls: []
    },
    {
        type: 'image-3:2',
        default: ['https://gamewall-pwa.sharechat.com/network/assets/speaker.PNG'],
        assets: [],
        redirectUrls: []
    },
    {
        type: 'cta',
        config: {
            color: ""
        },
        default: "Go to Website",
        redirectUrls: [],
        ctaText: ""
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
]

export const getDefaultSectionConfig = {
    'image-1:1': {
        type: 'image-1:1',
        default: ['https://gamewall-pwa.sharechat.com/network/assets/speaker.PNG'],
        assets: [],
        redirectUrls: ['https://stackoverflow.com/questions/17711146/how-to-open-link-in-a-new-tab-in-html']
    },
    'horizontalScroll-2:1': {
        type: 'horizontalScroll-2:1',
        default: [
            'https://gamewall-pwa.sharechat.com/network/assets/speaker.PNG',
            'https://gamewall-pwa.sharechat.com/network/assets/speaker.PNG',
            'https://gamewall-pwa.sharechat.com/network/assets/speaker.PNG',
        ],
        assets: [],
        redirectUrls: []
    },
    'cta': {
        type: 'cta',
        config: {
            color: ""
        },
        default: "Go to Website",
        redirectUrls: [],
        value: ""
    },
    'image-3:2': {
        type: 'image-3:2',
        default: ['https://gamewall-pwa.sharechat.com/network/assets/speaker.PNG'],
        assets: [],
        redirectUrls: []
    },
}

