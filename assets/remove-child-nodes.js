/**
 * Remove all child nodes of parent element and return this parent element
 * @param {string} id - of parent node
 * @returns {any} - parent element without child nodes
 */
export default function removeChildNodes(id) {
    const parent = document.getElementById(id)
    const children = Array.from(parent.childNodes)

    for (let child of children) {
        child.remove()
    }

    return parent
}
