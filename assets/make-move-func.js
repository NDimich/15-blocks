// import canMoveCheck from './can-move-func.js'
// import drawGameField from './draw-game-field.js'
// import sortDesk from './sort-helper-func.js'

// export default function makeMove(e, desk, activeObject) {
//     let clicked = e.target.closest('div')

//     if (clicked.classList.contains('empty-block')) {
//         let empty = desk.find((el) => el.name === '')
//         let { currentPosition: emptyCurr } = empty
//         let { currentPosition: activeCurr } = activeObject

//         empty.currentPosition = activeCurr
//         activeObject.currentPosition = emptyCurr

//         desk.sort(sortDesk)

//         drawGameField(desk)
//         canMoveCheck(desk)
//         drawGameField(desk)
//     }
// }
