const formSearch = document.querySelector('.form-search'),
      inputCitiesFrom = document.querySelector('.input__cities-from'),
      dropDownCitiesFrom = document.querySelector('.dropdown__cities-from'),
      inputCitiesto = document.querySelector('.input__cities-to'),
      dropDownCitiesTo = document.querySelector('.dropdown__cities-to'),
      inputDateDepart = document.querySelector('.input__date-depart');

const city = ['Москва', 'Санкт-Петербург', 'Минск', 'Каpaганда','Калининград','Bроцлав',
 'Челябинск', 'Керч', 'Волгоград', 'Самара', 'Новосибирск', 'Омск','Екатеринбугр'];
   


const showCity = (input, list) => {
	list.textContent = '';

	if (inputCitiesFrom.value !== ''){

		  const filterCity = city.filter((item) =>{
		  	const fixItem = item.toLowerCase();

		  	return fixItem.includes(inputCitiesFrom.value.toLowerCase());

		});

		  filterCity.forEach((item) => {
		  	const li = document.createElement('li');
		  	li.classList.add('dropdown__city');
		  	li.nextContent = item;
		  	dropDownCitiesFrom.append(li)

		  });
	  }


};
 
    
inputCitiesFrom.addEventListener('input', () => {
	showCity(inputCitiesFrom, dropDownCitiesFrom)
});

dropDownCitiesFrom.addEventListener('click', (event) =>{
 const target = event.target;
 if(target.tagName.toLowerCase() === 'li') {
 	inputCitiesFrom.value = target.textContent;
 	dropDownCitiesFrom.textContent = '';
 }
 console.log('test');
});	