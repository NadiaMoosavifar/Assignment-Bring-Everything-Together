
var btn = document.querySelector('.btn');
btn.style.background = 'blue';
btn.addEventListener('click' , (e)=> {
    document.querySelector('.btn').style.background = 'red';
});

var image = document.querySelector('img');
image.addEventListener('mouseover' , function(){
    document.getElementById('des').innerHTML = 'This is the flag of Netherlands'
    
})


var MyForm = document.querySelector('#my_form');
var nameInput = document.querySelector('#first_name');
var lastNameInput = document.querySelector('#last_name');
var emailInput = document.querySelector('#email');
var passwordInput = document.querySelector('#password');
var message = document.querySelector('.message');
var success = document.querySelector('#success');

MyForm.addEventListener('submit', onSubmit);
function onSubmit(e) {
    e.preventDefault();
    
    if(nameInput.value === '' || lastNameInput.value === '' || emailInput.value === '' || passwordInput.value === '') {
        
        message.innerHTML = 'Please fill all information'
        message.classList.add('error')
        setTimeout(() => message.remove(), 3000)
    } else {
        success.classList.add('success')
        success.innerHTML = 'You are success'
    }
}
var btn = document.getElementById('btn1')
btn.addEventListener('click', function(){
    var firstName = document.getElementById('firstName').value
    var lastName = document.getElementById('lastName').value
    var city = document.getElementById('city').value
    var table_body = document.getElementById('table_body')
    var click = document.querySelector('#click');
    var new_raw = document.createElement('tr')
    table_body.append(new_raw)

    var res = [firstName,lastName,city]
    for(var i=0; i<res.length; i++){
        var new_td = document.createElement('td')
        new_td.innerHTML = res[i]
        new_raw.append(new_td)
    }
    if(firstName === '' || lastName === '' || city === ''){
        // document.querySelector('#click').style.background = 'red';
        var myVar = setInterval(setColor, 300);
        function setColor() {
        var x = document.querySelector('.highlight');
        x.style.backgroundColor = x.style.backgroundColor == "yellow" ? "coral" : "yellow" ;
        }
        function stopColor() {
        clearInterval(myVar);
        }
        // message.classList.add('empty_row')
        // message.innerHTML = 'One of the value is empty' 
    }
})












// var btn = document.getElementById('btn')

// btn.addEventListener('click', function(){
//     var firstName = document.getElementById('firstName').value
//     var lastName = document.getElementById('lastName').value
//     var city = document.getElementById('city').value
//     var table_body = document.getElementById('table_body')
//     var new_raw = document.createElement('tr')
//     table_body.append(new_raw)

//     var res = [firstName,lastName,city]
//     for(var i=0; i<res.length; i++){
//         var new_td = document.createElement('td')
//         new_td.innerHTML = res[i]
//         new_raw.append(new_td)
//     }
// })