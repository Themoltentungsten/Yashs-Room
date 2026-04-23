import * as THREE from 'three'

export function animate(func) {
    let previousTime = new Date().getTime()
    
    const onAnimationFrame = () => {
        let currentTime = new Date().getTime()
        let delta = (currentTime - previousTime) / 1000
        previousTime = currentTime

        func(delta)

        animId = requestAnimationFrame(onAnimationFrame)
    }

    let animId = requestAnimationFrame(onAnimationFrame)

    return () => {
        cancelAnimationFrame(animId)
    }
}

export function getElementPosition(element) {
    const boundingRect = element.getBoundingClientRect()

    return new THREE.Vector2(
        boundingRect.left + boundingRect.width * 0.5, 
        boundingRect.top + boundingRect.height * 0.5, 
    )
}

export function normalizePointerCoordinates(coordinates) {
    return new THREE.Vector2(
        2 * (coordinates.x / window.innerWidth - 0.5),
        -2 * (coordinates.y / window.innerHeight - 0.5)
    )
}

export function lerp(x1, x2, t) {
    return (1 - t) * x1 + t * x2
}

export const fixTexture = (texture) => {
    texture.flipY = false 
    texture.encoding = THREE.sRGBEncoding
    texture.needsUpdate = true
}

export const createVideoMaterial = (src) => {
    const video = document.createElement('video')
    video.loop = true
    video.muted = true
    video.playsInline = true
    video.crossOrigin = 'anonymous'
    video.preload = 'metadata'
    video.src = src

    const videoTexture = new THREE.VideoTexture(video)
    videoTexture.minFilter = THREE.LinearFilter
    videoTexture.magFilter = THREE.LinearFilter
    videoTexture.generateMipmaps = false
    videoTexture.anisotropy = 16
    fixTexture(videoTexture)

    const videoMaterial = new THREE.MeshBasicMaterial({ map: videoTexture })

    const start = () => {
        const p = video.play()
        if (p && typeof p.catch === 'function') p.catch(() => {})
    }

    if (video.readyState >= 2) start()
    else video.addEventListener('loadeddata', start, { once: true })

    const resumeOnInteract = () => start()
    window.addEventListener('pointerdown', resumeOnInteract, { once: true })
    window.addEventListener('touchstart', resumeOnInteract, { once: true })

    return videoMaterial
}

export const getDistanceSquared = (x1, y1, x2, y2) => {
    return (x1 - x2) ** 2 + (y1 - y2) ** 2
}