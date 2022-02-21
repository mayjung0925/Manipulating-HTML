$(document).ready(function () {
  //1.
  $('body').append('<div id="div1">1. </div>');
  $('#div1').append('<button id="firstBtn">Button 1</button>');


  $('#firstBtn').on('click', function () {
    alert('Happiness is not by chance, but by choice!');
  })

  //2.
  $('body').append('<div id="div2">2. </div>');
  let textBox =  $('input[type="text"]')
  let button = $('input[type="button"]')

  textBox.appendTo('#div2');
  button.appendTo('#div2');

  button.click(function () {
    alert(textBox.val())
  })

  //3.

  $('body').append('<div id="div3">3. </div>');


  $('#div3').mouseover(function () {

    $('#div3').css("background-color", "pink")

  })
  $('#div3').mouseleave(function () {

    $('#div3').css("background-color", "")

  })

  //4.
  $('body').append('<div id="div4">4. </div>');
  let para1 = $('#para1')
 
  para1.appendTo('#div4')

  para1.click(function () {

    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);
    let rgbCol = `rgb(${r},${g},${b})`
    para1.css('color', rgbCol);
  })

  //5.
  $('body').append('<div id="div5">5. </div>');
  let secondBtn = $('<button id="secondBtn">Button 2</button>')

  $('#div5').append(secondBtn);
  
  secondBtn.click(function () {
    $('#div5').append('<span> Eunjin Jeong </span>');
    
  })

  //6.
  $('body').append('<div id="div6">6. </div>');
  let thirdBtn = $('<button id="thirdBtn">Button 3</button>')
 
  $('#div6').append(thirdBtn);
  $('#div6').append('<ul></ul>');

const nameArr = [
  "Carol",
   "Mandy", 
   "Jenna",
   "Lannie",
   "Ella",
   "Mason",
   "Kim",
   "Sam",
   "Boe",
   "Jim"
];

let count = 0

thirdBtn.click(function(){

  if( count < 10){
    let $newLi =$('<li>'+nameArr[count]+'</li>');
    $('ul').append($newLi);
    
  }
  count++;
})

 
})
