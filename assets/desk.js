import GenerateRandom from './random-number.js'
import Block from './block.js'

/**
 * @returns{[{}]}
 */
export default class Desk {
    #randomNumbers
    #desk = []
    #index = 0
    constructor(start = 1, end = 15) {
        this.#randomNumbers = new GenerateRandom(start, end)
        this.#createDesk()
        return this.#desk
    }

    #createDesk() {
        for (let i = 1; i <= 4; i++) {
            for (let j = 1; j <= 4; j++) {
                this.#desk.push(
                    new Block({
                        isActive: false,
                        name: this.#randomNumbers[this.#index],
                        currentPosition: [i, j],
                        canMove:
                            (i === 3 && j === 4) || (i === 4 && j === 3)
                                ? true
                                : false
                    })
                )

                this.#index++
            }
        }
    }
}
