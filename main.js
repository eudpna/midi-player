const fileInput0 = document.getElementById('midiFile');
fileInput0.addEventListener('click', () => {
    fileInput.value = ''
})
const visualizer0 = document.getElementById('visualizer0')
const wrapper = document.getElementById('main')
const player = document.getElementById('player')

let setted = false
let globalsvg = null

// midi-visualizerの横幅調節
function widthSetter() {

    const vis = visualizer0
    vis.config.noteHeight = 8

    const setWidth = () => {
        const els = Array.from(document.getElementsByTagName('svg'))
        if (!els.length) return
        const svg0 = els[0]
        svg0.style.transformOrigin = 'left'
        const svgWidth = svg0.getBBox().width
        const per = wrapper.offsetWidth / svgWidth

        if (svgWidth <= wrapper.offsetWidth) {
            if (per > 1) {
                svg0.style.transform = `scale(${per}, 1)`
            }
        } else {
            svg0.style.transform = `scale(1, 1)`
        }
    }

    setWidth()
    
    if (setted) return
    window.addEventListener('resize', () => {
        setWidth()
    })
    setted = true
}

window.addEventListener('mousemove', widthSetter)
window.addEventListener('click', setWidthForce)
window.addEventListener('touchstart', setWidthForce)


window.addEventListener('DOMContentLoaded', () => {
    setWidthForce()  
})

function setWidthForce() {
    widthSetter();
    [0, 50, 100, 200, 300, 500, 1000, 1500, 2000, 2500, 3000].map((time) => {
        window.setTimeout(() => {
            widthSetter()
        }, time);
    })
}

widthSetter()

function midiFileLoader() {
    
    const vis = document.getElementById('visualizer0')
    const reader = new FileReader()


    reader.onload = (e) => {
        vis.src = e.target.result
            player.src = e.target.result;
        
        [50, 100, 200, 300, 500, 1000, 1500, 2000, 2500, 3000].map((time) => {
            window.setTimeout(() => {
                widthSetter()
            }, time);
        })

        widthSetter()
    }    

    if (fileInput0) {
        
        fileInput0.addEventListener('change', (e) => {
            

            const file = e.target.files[0]

            reader.readAsDataURL(file)
        });
    }
}

midiFileLoader()




// file input

const jsUploadFile = document.getElementsByClassName('js-upload-file')[0]
const fileName = document.getElementsByClassName('js-upload-filename')[0]

jsUploadFile.addEventListener('change', (e) => {
    const file = e.target.files[0]
    fileName.innerHTML = file.name
})