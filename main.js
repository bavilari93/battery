$(()=>{
	console.log('connected');
	const button = document.querySelectorAll('button');
	console.log(button);
	button.forEach(e=>{
		console.log(e.className);
	})
})