document.addEventListener('DOMContentLoaded', () => {
    const title = document.getElementById('title')
    const inputVolume = document.getElementById('currentVolume')
    title.textContent = `Tab Mixer`
})

document.getElementById('increaseVolume').addEventListener('click', function () {
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
        chrome.tabs.sendMessage(tabs[0].id, { action: 'increaseVolume' });
    });
});

document.getElementById('decreaseVolume').addEventListener('click', function () {
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
        chrome.tabs.sendMessage(tabs[0].id, { action: 'decreaseVolume' });
    });
});

