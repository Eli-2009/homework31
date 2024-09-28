let arr = [1,3,7,13,86];
let yes = arr.filter(a => a % 2 == 0)

let no = arr.filter(a => a % 2 !== 0)

if (yes.length > 0) {
    console.log(yes.length + ' dene cut eded var');
}
if(no.length > 0){
    console.log(no.length + ' dene tek eded var');
}
if(yes.length === 0){
    console.log('cut eded yoxdur');
}
if(no.length === 0){
    console.log('tek eded yoxdur');
}