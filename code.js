const checkbox1 = document.getElementById('Men');
const saleman = document.getElementById('Man');
const checkbox2 = document.getElementById('Women');
const salewoman = document.getElementById('Woman');
const checkbox3 = document.getElementById('Children');
const salechildren = document.getElementById('Сhildrenn');
const checkbox4 = document.getElementById('Accessories');
const saleaccessories = document.getElementById('Accessoriess');

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
    {
        checkbox: checkbox4,
        elementToDisplay: saleaccessories
    },
];
for (let i of checkboxes) {
    i.checkbox.addEventListener('change', (event) => {
        toggle(i);
    });
}

const button1 = document.getElementById('content__button');
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