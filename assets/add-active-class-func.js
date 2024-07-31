// export default function addClassActive(e, desk, activeObject) {
//     const clickedBlock = e.target.closest('div')
//     const atrDataValue = clickedBlock.getAttribute('data')
//     const activeAttributes = JSON.parse(atrDataValue)

//     const previousHTMLActiveBlock = document.querySelector('.active')

//     if (activeAttributes['canMove'] === 'true') {
//         clickedBlock.classList.add('active')
//         activeObject = desk.find((el) => el.name === +activeAttributes['name'])
//         activeObject['isActive'] = true

//         if (previousHTMLActiveBlock) {
//             previousHTMLActiveBlock.classList.remove('active')
//         }
//     }
// }
