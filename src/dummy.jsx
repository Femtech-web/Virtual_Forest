/* eslint-disable react-refresh/only-export-components */

import homeIcon from './assets/homeIcon.svg';
import messageIcon from './assets/messageIcon.svg';
import postIcon from './assets/postIcon.svg';
import settings from './assets/settingsIcon.svg';
import userIcon from './assets/userIcon.svg';

export const navLinks = ['About', 'FAQ', 'Contact', 'Blog'];

export const AdData = [
    {
        title: 'Seed Bag',
        subInfo: 'Refill EveryDay',
        imgPath: './images/bag.png',
        color: '#E6DA4D',
        total: 'Total: 1'
    },
    {
        title: 'Water',
        subInfo: 'Unlimited',
        imgPath: './images/water.png',
        color: '#387E9D75',
        total: 'Needed Everyday'
    }, 
    {
        title: 'Manure',
        subInfo: 'Speeds up growth',
        imgPath: './images/fertilizer.png',
        color: '#D0995187',
        total: 'Total: 0'
    }
];

export const stages = [
    {
     imgPath: './images/seed.png',
     name: 'Seed (Day 0 - 4)'
    },
    {
     imgPath: './images/sprout.png',
     name: 'Sapling (Day 5 - 14)'
    },
    {
     imgPath: './images/tree.png',
     name: 'Tree (Day 15)'
    }
];

export const tools = [
    {
     imgPath: './images/water.png',
     name: 'Water: Needed everyday'
    },
    {
     imgPath: './images/compost.png',
     name: 'Manure: Speeds up by 2 days'
    },
];

export const faq = [
    {
        question: 'What is the Virtual Forest?',
        answer: 'Virtual forest is a web-based game that enables users to plant trees in the real world, while sitting on couch or work-desk! '
    },
    {
        question: 'What is the USP of Virtual Forest?',
        answer: 'Virtual forest is a web-based game that enables users to plant trees in the real world, while sitting on couch or work-desk! '
    },
    {
        question: 'How does Virtual Forest plants trees in real life?',
        answer: 'Virtual forest is a web-based game that enables users to plant trees in the real world, while sitting on couch or work-desk! '
    },
    {
        question: 'How much do I need to spend to plant a tree?',
        answer: 'Virtual forest is a web-based game that enables users to plant trees in the real world, while sitting on couch or work-desk! '
    },
    {
        question: 'How many trees can a user plant in Virtual Forest?',
        answer: 'Virtual forest is a web-based game that enables users to plant trees in the real world, while sitting on couch or work-desk! '
    },
    {
        question: 'What connection does Virtual Forest have with Zuraverse?',
        answer: 'Virtual forest is a web-based game that enables users to plant trees in the real world, while sitting on couch or work-desk! '
    }
]

export const contacts = [
    {
        header: 'Email',
        children: [
            'sagar@zuraverse.xyz'
        ]
    },
    {
        header: 'Socials',
        children: [
            'Instagram',
            'Twitter',
            'Facebook'
        ]
    }
]

export const inputs = [
    {
        name: 'Name',
        type: 'text',
    },
    {
        name: 'Email',
        type: 'email',
    },
    {
        name: 'What topic are you interested in',
        type: 'text',
        placeholder: 'Select project type'
    },
]

export const topBar = [
    {
        Header: 'Total Trees',
        subHeader: '137',
        bgColor: '#CEE963'
    },
    {
        Header: 'Current Stage',
        subHeader: 'Garden',
        bgColor: '#A7F3D0'
    },
    {
        Header: 'Next Stage',
        subHeader: 'Orchard',
        bgColor: '#AAED81',
        text: '263 to go'
    }
]

export const iconPath = [
    homeIcon, messageIcon, postIcon, settings, userIcon
]

export const stats = [
    {
        text: '5',
        subText: 'level'
    },
    {
        text: '137',
        subText: 'trees'
    },
    {
        text: '26',
        subText: 'friends'
    }
]