const mainCircle = document.createElement('div');
mainCircle.classList.add('circle-main');
document.body.appendChild(mainCircle);

const secondCircle = document.createElement('div');
secondCircle.classList.add('second-circle');
document.body.appendChild(secondCircle);


document.addEventListener('mousemove', function(e){
	const x = e.clientX + window.scrollX;
	const y = e.clientY + window.scrollY;

	secondCircle.style.transform = `translate(${x}px, ${y}px)`;
	mainCircle.style.transform = `translate(${x}px, ${y}px)`;

});

const hoverables = document.querySelectorAll('.hoverable');

	Array.from(hoverables).forEach((hoverEl) => {
		hoverEl.addEventListener('mouseover', (e) => {
			mainCircle.classList.add('circle-hide');
			secondCircle.classList.add('circle-scale');
		})
	})

	Array.from(hoverables).forEach((hoverEl) => {
		hoverEl.addEventListener('mouseout', (e) => {
			mainCircle.classList.remove('circle-hide');
			secondCircle.classList.remove('circle-scale');
		})
	});


