chrome.runtime.onMessage.addListener(
    function (request, sender, sendResponse) {
        if (request.action == 'increaseVolume') {
            increaseVolume();
        } else if (request.action == 'decreaseVolume') {
            decreaseVolume();
        }
    }
);

const isWathsapp = window.location.href.includes('web.whatsapp.com')
const isTwitch = window.location.href.includes('twitch.tv')
let volumeInput = document.getElementById("currentVolume")

// const video = document.querySelector("Layout-sc-1xcs6mc-0 video-ref")

function increaseVolume() {
    const script = document.createElement('script');
    script.type = 'text/javascript';

    if (isWathsapp) {
        console.log('whats')
    }

    if (isTwitch) {
        var volumeInput = document.querySelector(".ScRangeInput-sc-q01wc3-0")
        const currentVolumeTwitch = parseFloat(volumeInput.value) * 100

        console.log('twitch', currentVolumeTwitch)

    }

    script.innerText = '(function(){' +
        'const video = document.querySelector(".html5-video-player");if (document.querySelector(".html5-video-player").isMuted()) {video.unMute(video.setVolume(2))};video.setVolume(video.getVolume() + 2);})()';
    document.head.appendChild(script);

}

function decreaseVolume() {

    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.innerText = '(function(){const video = document.querySelector(".html5-video-player");video.unMute();video.setVolume(video.getVolume() - 2);})()';
    document.head.appendChild(script);
}
