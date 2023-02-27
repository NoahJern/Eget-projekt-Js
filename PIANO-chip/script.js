const pianoKeys = document.querySelectorAll(".piano-keys .key"),
volumeSlider = document.querySelector(".volume-slider input"),
keysCheckbox = document.querySelector(".keys-checkbox input");

let allKeys = [],
audio = new Audio("tunes/a.wav");

const playtune = (key) => {
    audio.src = `tunes/${key}.wav`;
    audio.play();


    const clickedKey = document.querySelector(`[data-key="${key}"]`)
    clickedKey.classList.add("active");
    setTimeout(() => {
        clickedKey.classList.remove("active");
    }, 1050)
}

pianoKeys.forEach(key => {
    allKeys.push(key.dataset.key);
    key.addEventListener("click", () => playtune(key.dataset.key));
});

const handleVolume = (e) => {
    audio.volume = e.target.value;
}

const showHideKeys = () => {
    pianoKeys.forEach(key => key.classList.toggle("hide"));
}

const pressedkey = (e) => {
    if(allKeys.includes(e.key)) playtune(e.key);
}

keysCheckbox.addEventListener("click", showHideKeys)
volumeSlider.addEventListener("input", handleVolume);
document.addEventListener("keydown", pressedkey);