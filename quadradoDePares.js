let lines = gets().split('\n');
var n = parseInt(lines.shift());

function vezes (valor){
   return valor * valor;
}
 
let i = 2;
  
while (i <= n){  
  if(i%2==0){ 
    vezes(i);
    console.log(`${i}` + '^2 = ' + `${vezes(i)}`)
 }
 i+=2;
} 
