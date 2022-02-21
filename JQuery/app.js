$(document).ready(function () {
  //1.
  $('body').append('<div id="div1"></div>');
  $('#div1').text('1.')

  $('#div1').append('<button id="firstBtn"></button>');
  $('#firstBtn').text('Button 1')

  $('#firstBtn').on('click', function () {
    alert('Happiness is not by chance, but by choice!');
  })

  //2.
  $('body').append('<div id="div2"></div>');
  $('#div2').text('2.')

  $('input[type="text"]').appendTo('#div2');
  $('input[type="button"]').appendTo('#div2');

  $('input[type="button"]').click(function () {
    alert($('input[type="text"]').val())
  })

  //3.

  $('body').append('<div id="div3"></div>');
  $('#div3').text('3.')

  $('#div3').mouseover(function () {

    $('#div3').css("background-color", "pink")

  })
  $('#div3').mouseleave(function () {

    $('#div3').css("background-color", "")

  })

  //4.
  $('body').append('<div id="div4"></div>');
  $('#div4').text('4.')
  $('#para1').appendTo('#div4')

  $('#para1').click(function () {

    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);
    let rgbCol = `rgb(${r},${g},${b})`
    $('#para1').css('color', rgbCol);
  })

  //5.
  $('body').append('<div id="div5"></div>');
  $('#div5').text('5.')
  $('#div5').append('<button id="secondBtn"></button>');
  $('#secondBtn').text('Button 2');


  $('#secondBtn').click(function () {
    $('#div5').append('<span></span>');
    $('span').text(' Eunjin Jeong ');
  })

  //6.
  $('body').append('<div id="div6"></div>');
  $('#div6').text('6.')
  $('#div6').append('<button id="thirdBtn"></button>');
  $('#div6').append('<ul></ul>');

  $('#thirdBtn').text('Button 3');



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

$('#thirdBtn').click(function(){

  if( count < 10){
    let $newLi =$('<li></li>');
    $newLi.text(nameArr[count]);
    $('ul').append($newLi);
    
  }
  count++;
})

 
})
