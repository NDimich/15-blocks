export default class Block {
    constructor({ isActive = false, name, currentPosition, canMove = false }) {
        this.isActive = isActive
        this.name = name === undefined ? '' : name
        this.currentPosition = currentPosition
        this.canMove = canMove
        this.class = name === undefined ? 'empty-block' : 'block'
    }
}
