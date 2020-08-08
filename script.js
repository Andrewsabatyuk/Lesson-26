
function showData (data, isDisplayed){
    if (isDisplayed){
        console.log(data);
    }
}

function Car (brandName, model, productionYear){
    this.brandName = brandName;
    this.model = model;
    this.productionYear = productionYear;
}

const showMouseCoords = (event) => {
    document.getElementById('coords').innerHTML = `x:${event.x}; y:${event.y}`;
    document.getElementById('coords').style = `left:${event.x}px; top:${event.y}px`;
} 

document.addEventListener('mousemove', (e) => showMouseCoords(e));

let createObj = _.create(Car.prototype, {
    brandName:'Mercedes-Benz',
    model:'C220',
    productionYear: 2014
})
showData(createObj, true);

let invertObj = _.invert(createObj);
showData(invertObj, true);

let pickObj = _.pick(createObj, 'brandName');
showData(pickObj, true);

let omitObj = _.omit(createObj, 'model');
showData(omitObj, true);
//also first commit