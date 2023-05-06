const gamebox = document.querySelector("#gamebox")
const infodisplay = document.querySelector("#info")

const startcells =[
    '','','','','','','','',''
]
let go = "circle"
infodisplay.textContent = 'its circle turn'
function createGameboard(){
    startcells.forEach((_cell,index)=>{
        const cellElement = document.createElement('div')
        cellElement.classList.add('square')
        cellElement.id = index
        cellElement.addEventListener('click',handleCellClick)
        gamebox.appendChild(cellElement)
    })

    }
    createGameboard()

    function handleCellClick(e)
    {
        const display = document.createElement("div")
        display.classList.add(go)
        e.target.append(display)
        go = go === "circle" ? "cross" : "circle"
        infodisplay.textContent = 'its now '+ go + ' turn'
        e.target.removeEventListener('click',handleCellClick)
        check()
    }
    function check()
    {
       const allsquare = document.querySelectorAll('.square')
       console.log(allsquare)
        const winning = [ 
            [0,1,2],[ 3,4,5],[6,7,8],
            [0,3,6],[1,4,7],[2,5,8],
            [0,4,8],[2,4,6]
        ]
        console.log(allsquare[4])
        winning.forEach(array=>{
           const circlewins = array.every(cell=>
                allsquare[cell].firstChild?.classList.contains('circle'))

        if(circlewins)
        {
            infodisplay.textContent = 'circle wins'
            allsquare.forEach(square=>square.replaceWith(square.cloneNode(true)))
            return
        }
        })
        winning.forEach(array=>{
           const crosswins = array.every(cell=>
                allsquare[cell].firstChild?.classList.contains('cross'))

        if(crosswins)
        {
            infodisplay.textContent = 'cross wins'
            allsquare.forEach(square=>square.replaceWith(square.cloneNode(true)))
            return
        }
        })

    }
    //on click reset restart the game
    const reset = document.querySelector("#reset")
    reset.addEventListener('click',()=>{
        window.location.reload()
    }
    )