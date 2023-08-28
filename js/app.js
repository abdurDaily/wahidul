let test = document.querySelector('input');
let button = document.querySelector('button');
let nameOutput = document.querySelector('.nameOuput');
let lengthOuput = document.querySelector('.lengthOuput')


button.addEventListener('click', function(e){
    let testValue = test.value ; 
    nameOutput.innerHTML = 'Name :' +  testValue.split(" ").join("");
    lengthOuput.innerHTML = 'Total Lenghth of chr :' + testValue.length;
    
    e.preventDefault();
});