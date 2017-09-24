var curString = '';
var bracketsHandle = true;
var solution;
function reactionSelect(target){
  if(target.match('btnC'))curString = '0';//check later!!!!!!!!!
  else if(target.match('btnBckspc'))curString = curString.slice(0,curString.length-2);//also check!!!!
  else if(target.match('btnBrackets')){
    if(bracketsHandle){curString+='('; bracketsHandle = false;} 
    else {curString+=')'; bracketsHandle = true;}
  }
  else if(target.match('btnPoint'))curString+='.';
  else if(target.match('btnDivide'))curString+='/';
  else if(target.match('btnMultiply'))curString+='*';
  else if(target.match('btnAdd'))curString+='+';
  else if(target.match('btnSubtract'))curString+='-';
  else if(target.match('btn1'))curString+='1';
  else if(target.match('btn2'))curString+='2';
  else if(target.match('btn3'))curString+='3';
  else if(target.match('btn4'))curString+='4';
  else if(target.match('btn5'))curString+='5';
  else if(target.match('btn6'))curString+='6';
  else if(target.match('btn7'))curString+='7';
  else if(target.match('btn8'))curString+='8';
  else if(target.match('btn9'))curString+='9';
  else if(target.match('btn0'))curString+='0';
  else if(target.match('btnEqual'))updateScrean();
}
function updateScrean(){
  $('h6').remove();
  $('#lowerScrean').append('<h6>'+curString+'</h6>');
  debugger;
  if (!isNaN(parseInt(curString.substring(curString.length-1), 10)) /*&& curString.substring(curString.length - 1).match(")")*/) 
  solution = Math.round(eval(curString)*10000)/10000;
  var solutionStr = String(solution);
  if(solutionStr.length > 10 || curString.length > 22){
    $('h1').remove();
    $('#upperScrean').append('<h1>'+0+'</h1>');//this is also questionable!!!
    $('h6').remove();
    $('#lowerScrean').append('<h6>Digit Limit Met</h6>');
    return;
  }
  $('h1').remove();
  $('#upperScrean').append('<h1>'+solution+'</h1>');//this is also questionable!!!
}
$(document).ready(function(){
  $('button').on('click',function(event){
    var target = event.target.id;
    reactionSelect(target);
    updateScrean();
  });
})