const checkbox1 = document.getElementById('Men');
const saleman = document.getElementById('Man');
const checkbox2 = document.getElementById('Women');
const salewoman = document.getElementById('Woman');
const checkbox3 = document.getElementById('Children');
const salechildren = document.getElementById('Сhildrenn');

toggleFunс = function() {
	if (!checkbox1.checked) {
		saleman.style.display = 'none';
	} else {
		saleman.style.display = 'block';
	}
	if (!checkbox2.checked) {
		salewoman.style.display = 'none';
	} else {
		salewoman.style.display = 'block';
	}
}
checkbox1.addEventListener('change', (event) => {toggleFunс();});
checkbox2.addEventListener('change', (event) => {toggleFunс();});
checkbox3.addEventListener('change', (event) => {toggleFunс();});
toggleFunс();
const button1 = document.getElementById('button1');
button1.addEventListener('click', () => {

	if (checkbox1.checked && checkbox2.checked && checkbox3.checked) {
		checkbox1.checked = false;
		checkbox2.checked = false;
		checkbox3.checked = false;
		toggleFunс();
		
	} else {
		checkbox1.checked = true;
		checkbox2.checked = true;
		checkbox3.checked = true;
		toggleFunс();
	}
});
$(document).ready(function() {
    $('.down').click(function(){
        $(this).addClass('active');
       $('html, body').animate({scrollTop:$('#1').position().top - 0}, 1000);
    });
});