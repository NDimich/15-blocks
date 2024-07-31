import Desk from './assets/desk.js'
import canMoveCheck from './assets/can-move-func.js'
import drawGameField from './assets/draw-game-field.js'
import sortDesk from './assets/sort-helper-func.js'
import changeTheme from './assets/change-theme.js'

const deskOfBlocks = new Desk() // create new desk
let activeObject = {} // store current active object
drawGameField(deskOfBlocks) //draw start game field position

function addClassActive(e) {
    const clickedBlock = e.target.closest('div')
    const atrDataValue = clickedBlock.getAttribute('data').trim()
    const activeAttributes = JSON.parse(atrDataValue)

    const previousHTMLActiveBlock = document.querySelector('.active')

    if (activeAttributes['canMove'] === 'true') {
        clickedBlock.classList.add('active')
        activeObject = deskOfBlocks.find(
            (el) => el.name === +activeAttributes['name']
        )
        activeObject['isActive'] = true

        if (previousHTMLActiveBlock) {
            previousHTMLActiveBlock.classList.remove('active')
        }
    }
}

function makeMove(e) {
    let clicked = e.target.closest('div')

    if (clicked.classList.contains('empty-block')) {
        let empty = deskOfBlocks.find((el) => el.name === '')
        let { currentPosition: emptyCurr } = empty
        let { currentPosition: activeCurr } = activeObject

        empty.currentPosition = activeCurr
        activeObject.currentPosition = emptyCurr

        deskOfBlocks.sort(sortDesk)

        drawGameField(deskOfBlocks)
        canMoveCheck(deskOfBlocks)
        drawGameField(deskOfBlocks)
    }
}

const desk = document.getElementById('desk')
desk.addEventListener('click', (e) => {
    addClassActive(e)
    makeMove(e)
})

const btn = document.getElementById('change')
btn.addEventListener('click', (e) => {
    let color = document.getElementById('color').value
    changeTheme('--color-primary', color)
})

// TODO: Count moves
// TODO: Check if the game is over
