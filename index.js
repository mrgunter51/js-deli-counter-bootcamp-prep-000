var katzDeli = [];

function takeANumber(katzDeliLine,name) {
  katzDeliLine.push(name)
  return `Welcome, ${name}. You are number ${katzDeliLine.length} in line.`
}

function nowServing(array) {
  if(array.length === 0){
    return "There is nobody waiting to be served!"
  }
  else{
    return `Currently serving ${array.shift()}`
  }
}

// function currentLine(array){
//   if(array.length === 0){
//     return "The line is currently empty."
//   }
//   else{
//     for(let i = 0;i < array.length;i++){
//
//     }
//   }
// }
