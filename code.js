const checkbox1 = document.getElementById('Men');
const saleman = document.getElementById('Man');
const checkbox2 = document.getElementById('Women');
const salewoman = document.getElementById('Woman');
const checkbox3 = document.getElementById('Children');
const salechildren = document.getElementById('Сhildrenn');
const toggle = function(param) {
        if (param.elementToDisplay !== null) {
            if (param.checkbox && param.checkbox.checked) {
                param.elementToDisplay.style.display = 'block';
            } else {
                param.elementToDisplay.style.display = 'none';
            }
        }

}
const checkboxes = [{
        checkbox: checkbox1,
        elementToDisplay: saleman
    },
    {
        checkbox: checkbox2,
        elementToDisplay: salewoman
    },
    {
        checkbox: checkbox3,
        elementToDisplay: salechildren
    },
];
checkbox1.addEventListener('change', (event) => {
    toggle(checkboxes[0]);
});
checkbox2.addEventListener('change', (event) => {
    toggle(checkboxes[1]);
});
checkbox3.addEventListener('change', (event) => {
    toggle(checkboxes[2]);
});
const button1 = document.getElementById('button1');
button1.addEventListener('click', () => {
    let isToggleOn = false;
    for (let i in checkboxes) {
        if (!checkboxes[i].checkbox.checked) {
            isToggleOn = true;
            break;
        }
    }
    for (let i in checkboxes) {
        checkboxes[i].checkbox.checked = isToggleOn;
    }

    toggleAll();
});

const toggleAll = function () {
    for (let i in checkboxes) {
        toggle(checkboxes[i]);
    }
}

toggleAll();