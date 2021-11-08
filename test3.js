

// bai 1
let a = 3;
let b = 5;
let c = 7;
let denta = b ** 2 - 4*a*c
if(a == 0 && b ==0) {
    console.log(`Phuong trinh vo nghiem`);
} else if (a === 0) {
    console.log(`phuong trinh co 1 nghiem la: ${-c/b}`);
} else if (denta > 0) {
    console.log(`phuong trinh co 2 nghiem : x1 la  ${(-b + Math.sqrt(denta))/2*a} va  x2 la ${(-b - Math.sqrt(denta)) / 2*a}`);
       }       else if ( denta < 0 ) {
        console.log(`phuong trinh vo nghiem`);
}


// bai 2

let number = 21;
let count = 1;
for (let index = 0; index < 10; index++) {
    console.log(` 21 * ${count} = ${number * count}`)
    count++;    
}

// bai 3

let array = [];
let arr = [6,6,7,7,8,9,9];
    for (let index = 0; index < arr.length; index++) {
        if (arr[index] !== arr[index + 1] ) {
        array.push(arr[index]);
    }   
} console.log(array);
