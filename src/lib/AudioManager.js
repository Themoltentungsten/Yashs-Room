import { useAppStore } from '../stores/AppStore' 
import highestMp3 from '../assets/audio/Travis Scott - HIGHEST IN THE ROOM.mp3'
import drugsMp3 from '../assets/audio/Travis Scott - Drugs You Should Try It.mp3'
import knifeMp3 from '../assets/audio/Travis Scott - KNIFE.mp3'
import timelessMp3 from '../assets/audio/Timeless.mp3'
import clickWav from '../assets/audio/click.wav'

class AudioManager {
    constructor() {
        if (AudioManager.instance) {
            return AudioManager.instance
        }

        AudioManager.instance = this 
        
        this.audios = {}
        this.audioUrls = { click: clickWav }

        this.playlist = [
            { name: 'Travis Scott - HIGHEST IN THE ROOM',     src: highestMp3 },
            { name: 'Travis Scott - Drugs You Should Try It', src: drugsMp3 },
            { name: 'Travis Scott - KNIFE',                   src: knifeMp3 },
            { name: 'Timeless - The Weeknd & Playboi Carti',  src: timelessMp3 },
        ]
        this.currentIndex = 0
    }

    // Returns (and caches) the Audio element for a playlist index
    getTrack(index) {
        const key = `track_${index}`
        if (!this.audios[key]) {
            this.audios[key] = new Audio(this.playlist[index].src)
            this.audios[key].volume = 0.2
        }
        return this.audios[key]
    }

    // 'music' resolves to the current track; anything else uses audioUrls map
    get(name) {
        if (name === 'music') return this.getTrack(this.currentIndex)
        if (!this.audios[name]) {
            this.audios[name] = new Audio(this.audioUrls[name])
            this.audios[name].volume = 0.2
        }
        return this.audios[name]
    }

    play(name) {
        const audio = this.get(name)
        if (useAppStore.getState().audioEnabled) {
            audio.play()
        }
    }

    pause(name) {
        const audio = name === 'music'
            ? this.audios[`track_${this.currentIndex}`]
            : this.audios[name]
        if (audio) audio.pause()
    }

    getProgress(name) {
        const audio = name === 'music'
            ? this.audios[`track_${this.currentIndex}`]
            : this.audios[name]
        if (!audio) return 0
        return audio.currentTime / audio.duration
    }

    getCurrentTrackName() {
        return this.playlist[this.currentIndex].name
    }

    // Pause & reset current track, advance index, return new track info
    nextTrack() {
        const current = this.audios[`track_${this.currentIndex}`]
        if (current) {
            current.pause()
            current.currentTime = 0
        }
        this.currentIndex = (this.currentIndex + 1) % this.playlist.length
        return this.playlist[this.currentIndex]
    }
}

export default AudioManager
