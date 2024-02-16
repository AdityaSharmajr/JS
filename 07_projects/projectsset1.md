# Projects related to DOM

## project link
[Click here](https://stackblitz.com/edit/dom-project-chaiaurcode?file=index.html)

# Solution code

## project 1

```javascript
console.log("Aditya)
const buttons = document.querySelectorAll('.button');
const body = document.querySelector('body')

buttons.forEach(function (button) {
  console.log(button);
  button.addEventListener('click', function(e){
    console.log(e);
    console.log(e.target);
    if (e.target.id === 'grey') {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === 'white') {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === 'yellow') {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === 'blue') {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === 'purple') { 
      body.style.backgroundColor = e.target.id;
    }
  });
});


```

##project 2 soln
```javascript
const form = document.querySelector('form');

form.addEventListener('submit', function(e) {
  e.preventDefault();

  const height = parseInt(document.querySelector('#height').value);
  const weight = parseInt(document.querySelector('#weight').value);
  const results = document.querySelector('#results');

  if(height === '' || height < 0 || isNaN(height)){
    result.innerHTML = `Please give a valid height ${height}`;
  }else if(weight === '' || weight < 0 || isNaN(weight)){
    result.innerHTML = `Please give a valid height ${weight}`;
  } else{
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);
    //shows the result
    results.innerHTML = `<span>${bmi}</span>`
    if (bmi < 18.5) {
      results.innerHTML += `<div>Underweight</div>`;
    } else if (bmi >= 18.5 && bmi <= 24.9) {
      results.innerHTML += `<div>Normal Range</div>`;
    } else {
      results.innerHTML += `<div>Overweight</div>`;
    }
  }
});

```

##project 3 soln
```javascript
const clock = document.getElementById('clock');

setInterval(function () {
  let date = new Date();
  // console.log(date.toLocaleDateString());
  clock.innerHTML = date.toLocaleTimeString();
});


```