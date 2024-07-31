export default class GenerateRandom {
    #start
    #end

    constructor(start = 1, end = 15) {
        this.#start = start
        this.#end = end

        this.numbers = this.#generateRandomNumbers(this.#start, this.#end)

        return this.numbers
    }
    /**
     * Use the Fisher-Yates shuffle algorithm to randomize the order of elements in an array.
     * @param {[number | any]} array
     * @returns {[number | any]}
     */
    #shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1))
            ;[array[i], array[j]] = [array[j], array[i]]
        }
        return array
    }

    /**
     * Returns shuffled array of numbers from start to end inclusively. Numbers in array not repeated.
     * @param {number} start
     * @param {number} end
     * @returns {[number]}
     */
    #generateRandomNumbers(start, end) {
        const range = end - start + 1
        const numbers = Array.from({ length: range }, (v, k) => k + start)

        return this.#shuffleArray(numbers)
    }
}
