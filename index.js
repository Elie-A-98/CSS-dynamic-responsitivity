const responsiveEqualContainer = document.querySelector('[data-js="responsiveEqual"]')
const responsiveUnequalContainer = document.querySelector('[data-js="responsiveUnequal"]')
const responsiveDisplayHideContainer = document.querySelector('[data-js="responsiveDisplayHide"]')

const getElementSize = (elmt) => {
	return [elmt.offsetWidth, elmt.offsetHeight]
}

const responsiveContainersArray = [
  responsiveEqualContainer,
  responsiveUnequalContainer,
  responsiveDisplayHideContainer,
];

responsiveContainersArray.forEach(responsiveContainer => {
	const sizeDisplay = responsiveContainer.querySelector('.container-size')
	const container = responsiveContainer.querySelector('.container')
	const containerItems = responsiveContainer.querySelectorAll('.container .item')

	
	new ResizeObserver(()=>{
		const containerWrapperSize = getElementSize(container)
		sizeDisplay.innerText = `${containerWrapperSize[0]} x ${containerWrapperSize[1]}`
		
	}).observe(container)

	const thresholdInput = responsiveContainer.querySelector('input');
	thresholdInput.addEventListener('input', (event)=>{
		const value = event.target.value
		container.style.setProperty('--threshold', `${value}px`)
	})
})