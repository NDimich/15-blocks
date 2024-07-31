export default function canMoveCheck(desk) {
    let empty = desk.find((el) => el.name === '')
    let r = empty.currentPosition[0]
    let c = empty.currentPosition[1]

    let possibleMoves = {
        up: false, // r-1
        right: false, // c+1
        down: false, // r+1
        left: false // c-1
    }

    if (r === 4) possibleMoves.up = true
    if (r === 1) possibleMoves.down = true

    if (r > 1 && r < 4) {
        possibleMoves.up = true
        possibleMoves.down = true
    }
    if (c === 1) possibleMoves.right = true
    if (c === 4) possibleMoves.left = true
    if (c > 1 && c < 4) {
        possibleMoves.left = true
        possibleMoves.right = true
    }

    desk.forEach((element) => {
        element['canMove'] = false
        element['isActive'] = false
    })

    if (possibleMoves.down) {
        let element = desk.find(
            (el) =>
                el.currentPosition[0] === r + 1 && el.currentPosition[1] === c
        )
        element['canMove'] = true
    }
    if (possibleMoves.up) {
        let element = desk.find(
            (el) =>
                el.currentPosition[0] === r - 1 && el.currentPosition[1] === c
        )
        element['canMove'] = true
    }
    if (possibleMoves.right) {
        let element = desk.find(
            (el) =>
                el.currentPosition[0] === r && el.currentPosition[1] === c + 1
        )
        element['canMove'] = true
    }
    if (possibleMoves.left) {
        let element = desk.find(
            (el) =>
                el.currentPosition[0] === r && el.currentPosition[1] === c - 1
        )
        element['canMove'] = true
    }
}
