document.addEventListener("DOMContentLoaded", () => {
    let audio = new Audio("./audio/0.mp3")
    let count =0
    let gifIndex =0
    let soundIndex=0
    let gifs =[
        "0.gif",
        "1.gif",
        "2.gif",
        "3.gif",
        "4.gif",
        "5.gif"
    ]
    let sounds=[
        "0.mp3",
        "1.mp3",
        "2.mp3",
        "3.mp3",
        "4.mp3",
        "5.mp3",

    ]
    const mighty =document.getElementById("mighty")
    mighty.addEventListener("click", () => {
            if(count==0){
            audio.play()
            audio.loop = true;
            count=1;
            }else{
            audio.pause()
            count=0;

            }
        });
        mighty.addEventListener("dblclick", () => {
            audio.pause()
            gifIndex=(gifIndex+1)%gifs.length
            soundIndex=(soundIndex+1)%sounds.length
            let currentAudio = sounds[soundIndex]
            let currentGif = gifs[gifIndex]
            mighty.src=`./gifs/${currentGif}`
            audio= new Audio(`./audio/${currentAudio}`)
        });
});