let checkbox1 = document.getElementById('Men');
let saleman = document.getElementById('Man');


toggleFunc = function() {
	if (!checkbox1.checked) {
		saleman.style.display = 'none';
	} else {
		saleman.style.display = 'block';
	}
}

checkbox1.addEventListener('change', (event) => {
	toggleFunc();

});

toggleFunc();

let checkbox2 = document.getElementById('Women');
let salewoman = document.getElementById('Woman');

toggleFun = function() {
	if (!checkbox2.checked) {
		salewoman.style.display = 'none';
	} else {
		salewoman.style.display = 'block';
	}
}

checkbox2.addEventListener('change', (event) => {
	toggleFun();
});

toggleFun();

let checkbox3 = document.getElementById('Children');
let salechildren = document.getElementById('childrenn');

toggleFu = function() {
	if (!checkbox3.checked) {
		salechildren.style.display = 'none';
	} else {
		salechildren.style.display = 'block';
	}
}

checkbox3.addEventListener('change', (event) => {
	toggleFu();
});

toggleFu();


// checkbox = {
// 	name : 'men',
// 	element : checkbox1,
// 	toggleFunction : toggleFun,
// };


let button1 = document.getElementById('button1');
button1.addEventListener('click', () => {

	// let checkboxesToToggle = [checkbox1, checkbox2];
	// let checkboxesToToggleFunctions = [toggleFunc, toggleFun];
	// let isEnableCheckboxes = false;

	// for (let i in checkboxesToToggle) {
	// 	if (!checkboxesToToggle[i].checked) {
	// 		isEnableCheckboxes = true;
	// 		break;
	// 	}
	// }

	// for (let i in checkboxesToToggle) {
	// 	checkboxesToToggle[i].checked = isEnableCheckboxes;
	// 	checkboxesToToggleFunctions[i]();
	// }



	if (checkbox1.checked && checkbox2.checked && checkbox3.checked) {
		checkbox1.checked = false;
		checkbox2.checked = false;
		checkbox3.checked = false;

		toggleFunc();
		toggleFun();
		toggleFu();
	} else {
		checkbox1.checked = true;
		checkbox2.checked = true;
		checkbox3.checked = true;

		toggleFunc();
		toggleFun();
		toggleFu();
	}

});
$(document).ready(function() {
    $('.down').click(function(){
        $(this).addClass('active');
       $('html, body').animate({scrollTop:$('#1').position().top - 0}, 1000);
    });
});