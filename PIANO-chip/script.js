const pianoKeys = document.querySelectorAll(".piano-keys .key"),
volumeSlider = document.querySelector(".volume-slider input"),
keysCheckbox = document.querySelector(".keys-checkbox input");

let allKeys = [],
audio = new Audio("tunes/a.wav");

const playtune = (key) => {
    console.log/(key)
    const audioCtx = new AudioContext();
    const osc = audioCtx.createOscillator();
    const gainNode = audioCtx.createGain();
    const finish = audioCtx.destination;

    osc.connect(audioCtx.destination);
    osc.frequency.value = key;
    osc.start(0);


    const clickedKey = document.querySelector(`[data-key="${key}"]`)
    clickedKey.classList.add("active");
    setTimeout(() => {
        clickedKey.classList.remove("active");
        osc.stop(0);

    }, 1050)
}




pianoKeys.forEach(key => {
    allKeys.push(key.dataset.key);
    console.log(key.dataset.key);
    key.addEventListener("click", () => playtune(key.dataset.key));
});

const fhz = {a: 440, w:550}

const handleVolume = (e) => {
    audio.volume = e.target.value;
}

const showHideKeys = () => {
    pianoKeys.forEach(key => key.classList.toggle("hide"));
}

const pressedkey = (e) => {
    playtune(fhz[e.key]);
    if(allKeys.includes(e.key)) playtune(fhz[e.key]);

}

keysCheckbox.addEventListener("click", showHideKeys)
volumeSlider.addEventListener("input", handleVolume);
document.addEventListener("keydown", pressedkey);