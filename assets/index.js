import MediaPlayer from './MediaPlayer.js';
import AutoPlay from './plugins/AutoPlay.js';
import AutoPause from './plugins/AutoPause.js';

const video = document.querySelector('video');
const player = new MediaPlayer({ 
    el: video, 
    plugins: [
        new AutoPlay(),
        new AutoPause()
    ], 
});

const buttonPlay = document.getElementById('btnPlay');
const buttonUnMute = document.getElementById('btnUnMute');
buttonPlay.onclick = () => player.togglePlay();

buttonUnMute.onclick = () => player.unmute();

if('serviceWorker' in navigator){
    navigator.serviceWorker.register('/sw.js').catch(error => {
        console.log(error.message);
    })
}