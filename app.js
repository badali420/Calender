const currentDate = document.querySelector(".current-date");
const daysTag = document.querySelector(".Days"); 
const prevNext = document.querySelectorAll(".icons span");

// to get new date, current year and month
	let date = new Date,
	currYear = date.getFullYear(),
	currMonth = date.getMonth();

	const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

	const renderCalender = () => {
		let firstDayofMonth = new Date(currYear, currMonth, 1).getDay(), // getting first day of month
		lastDateofMonth = new Date(currYear, currMonth + 1, 0).getDate(), //getting last date of month
		lastDateofLastMonth = new Date(currYear, currMonth, 0).getDate(); //getting last date of last month
		lastDayofMonth = new Date(currYear, currMonth, lastDateofMonth).getDay(), //getting last day of month
		liTag = "";
		
		for (let i = firstDayofMonth; i > 0; i--) {
			liTag += `<li class="inactive">${lastDateofLastMonth - i + 1}</li>`;		
		}

		for (let i = 1; i <= lastDateofMonth; i++) {
			//for current date
			let isToday = i === date.getDate() && currMonth === new Date().getMonth()
				&& currYear === date.getFullYear() ? "active" : "";
			liTag += `<li class="${isToday}">${i}</li>`;
		}
		for (let i = lastDayofMonth; i < 6; i++){
			liTag += `<li class="inactive">${ i - lastDayofMonth + 1}</li>`;
		}


		currentDate.innerText = `${months[currMonth]} ${currYear}`;
		daysTag.innerHTML = liTag;
	}
	renderCalender();
	prevNext.forEach(icon =>{
		icon.addEventListener("click", () =>{
			// console.log(icon);
			// prev button is pressed then month decrement by 1 else increment by 1
			currMonth = icon.id === "prev" ? currMonth - 1 : currMonth + 1;
			// for increment or decrement in year
			if (currMonth < 0 || currMonth >11) {
				date = new Date(currYear, currMonth)
				currYear = date.getFullYear();
				currMonth = date.getMonth()
			}else{
				date = new Date();
			}
			renderCalender();
		});
	});

