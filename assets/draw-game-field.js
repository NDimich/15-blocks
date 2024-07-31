import removeChildNodes from './remove-child-nodes.js'

const parentElementId = 'desk'

export default function drawGameField(desk) {
    const gameField = removeChildNodes(parentElementId)

    let index = 0

    for (let i = 1; i <= 4; i++) {
        let row = document.createElement('div')
        row.className = 'row'

        for (let j = 1; j <= 4; j++) {
            let block = document.createElement('div')
            block.className = `${desk[index]['class']}`
            block.setAttribute(
                'data',
                `{"position": "${desk[index]['currentPosition']}", "name": "${desk[index]['name']}", "isActive": "${desk[index]['isActive']}", "canMove": "${desk[index]['canMove']}"}`
            )

            let p = document.createElement('p')
            p.className = 'name'
            p.innerText = `${desk[index]['name']}`

            block.appendChild(p)
            row.appendChild(block)
            index++
        }
        gameField.appendChild(row)
    }
}
