

function getLocalStream() {
    navigator.mediaDevices.getUserMedia({video: false, audio: true}).then( stream => {
        window.localStream = stream; // A
        window.localAudio.srcObject = stream; // B
        window.localAudio.autoplay = true; // C
    }).catch( err => {
        console.log("u got an error:" + err)
    });
}

getLocalStream();


/* Test */

var SoundDetection = require('node_modules/sound-detection');

var options = {
    url: 'http://babymonitorcam/audio.cgi',
    format: {
        bitDepth: 16,
        numberOfChannels: 1,
        signed: true
    },
    triggerLevel: 30
}

var detector = new SoundDetection(options, function(dB) {
    console.log('Noise Detected at %sdB', dB);
});

detector.start();

