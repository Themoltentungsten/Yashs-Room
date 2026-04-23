import * as THREE from 'three'
import resumePdf from './resume/Yash_Kumar_Raut_resume.pdf?url'

const { VITE_GITHUB_LINK, VITE_TWITTER_LINK, VITE_YOUTUBE_LINK, VITE_LINKEDIN_LINK } = import.meta.env

export const names = {
    'me': 'me',
    'Github': 'github',
    'Twitter': 'twitter',
    'Youtube': 'youtube',
    'Linkedin': 'linkedin',
    'Monitor_Screen': 'weebly',
    'Drawing_Pad_Screen': 'supplex',
    'Laptop_Screen': 'gdoc',
    'Resume': 'resume'
}

export const normals = {
    'me': new THREE.Vector3(-1, 0, 0.2).normalize().multiplyScalar(0.6),
    'Monitor_Screen': new THREE.Vector3(0, 0, 1).multiplyScalar(1.75),
    'Drawing_Pad_Screen': new THREE.Vector3(-0.1, 0.15, 0.2).normalize().multiplyScalar(0.6),
    'Laptop_Screen': new THREE.Vector3(-0.35, 0.1, 0.2).normalize().multiplyScalar(0.6)
}

export const infos = {
    'Monitor_Screen': {
        title: 'Weebly',
        description: 'Full-stack anime catalog with React + Vite, Express + PostgreSQL — auth, watchlists, AniList extras, admin CRUD, and a mood-based AI recommender.',
        github: 'https://github.com/Themoltentungsten/Weebly'
    },

    'Drawing_Pad_Screen': {
        title: 'Supplex',
        description: 'AI-powered supply chain optimization agent for demand forecasting, inventory management, and intelligent decision-making.',
        github: 'https://github.com/Themoltentungsten/Supplex'
    },

    'Laptop_Screen': {
        title: 'GDoc',
        description: 'Generates professional README.md files for GitHub repos — complete with badges, tech stack, sections, and one-click commit back to GitHub.',
        github: 'https://github.com/Themoltentungsten/GDOC'
    },

    'me': {
        title: 'Yash',
        description: 'Hey! I am Yash Kumar Raut, a computer science student passionate about web, AI, and 3D development.',
        github: VITE_GITHUB_LINK,
        twitter: VITE_TWITTER_LINK,
        youtube: VITE_YOUTUBE_LINK,
        linkedin: VITE_LINKEDIN_LINK,
        resume: resumePdf
    }
}