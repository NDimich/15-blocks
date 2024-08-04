import Desk from './assets/desk.js'
import canMoveCheck from './assets/can-move-func.js'
import drawGameField from './assets/draw-game-field.js'
import sortDesk from './assets/sort-helper-func.js'
import changeTheme from './assets/change-theme.js'
import counter from './assets/counter-of-moves.js'

const deskOfBlocks = new Desk() // create new desk
let activeObject = {} // store current active object
drawGameField(deskOfBlocks) //draw start game field position

/**
 * Checking click on block. If block can make move, add class 'active' to it.
 * And delete class 'active' from previous block, if once was added
 * @param {object} e - event object
 */
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
/**
 * Check and make move of block, refresh game field and blocks indexes of position and properties.
 * Redraw game field.
 * Increase counter of moves.
 * @param {object} e - event object
 */
function makeMove(e) {
    let clicked = e.target.closest('div')

    if (clicked.classList.contains('empty-block')) {
        let empty = deskOfBlocks.find((el) => el.name === '')
        let { currentPosition: emptyCurr } = empty
        let { currentPosition: activeCurr } = activeObject

        empty.currentPosition = activeCurr
        activeObject.currentPosition = emptyCurr

        deskOfBlocks.sort(sortDesk)

        movesNumber.textContent = numberOfMOves() + 1

        drawGameField(deskOfBlocks)
        canMoveCheck(deskOfBlocks)
        drawGameField(deskOfBlocks)
    }
}

const desk = document.getElementById('desk')

const movesNumber = document.querySelector('.moves__count')
let numberOfMOves = counter()
movesNumber.textContent = 0

desk.addEventListener('click', (e) => {
    addClassActive(e)
    makeMove(e)
})

const btn = document.getElementById('change')

btn.addEventListener('click', (e) => {
    let color = document.getElementById('color').value
    changeTheme('--color-primary', color)
})

// TODO: Check if the game is over
