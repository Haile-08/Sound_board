const sounds = ['cat','film','glass']

sounds.forEach(sound=> {
    const btn = document.createElement('button')
    btn.classList.add('btn')
    btn.innerText = sound
    btn.addEventListener('click',()=>{
        stopsongs()
        document.getElementById(sound).onplay()
    })
    document.getElementById('buttons').appendChild(btn)
})

function stopsongs(){
    sounds.forEach(sound=>{
        const song =document.getElementById(sound)
        song.onpause()
        song.currentTime = 0
    })
}