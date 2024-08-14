//! 1-misol \\\

// function reversArray(arr) {
//     return arr.sort((a, b) => b.length - a.length);
// }

// let arr = ['salom', 'nima gap', 'qalaysiz', 'ishlar zormi']
// let sortedArray = reversArray(arr);
// console.log(sortedArray);

//! 2-misol \\\

// let str = 'salom ishlar qalay'
// let resArray = str.split(' ')

// let res = resArray.map(function(v){
//     return v[0].toUpperCase() + v.slice(1);
// })

// console.log(res.join(' '));

//! 3-misol \\\

// let str = 'salom23 hayr'

// function numberDel(arg) {
//     let res = []
//     for (const i of arg) {
//         if (i > 0) {}
//         else{
//             res.push(i)
//         }
//     }
//     return res.join('')
// }

// console.log(numberDel(str));

//! 4-misol \\\

// let arr = ['salom', 123, null, BigInt, Number, 'hayr']

// function arrayStr(arg) {
//     let res = arg.filter(function(v){
//         return typeof v === 'string'
//     })
//     return res.join(' ')
// }

// console.log(arrayStr(arr));

//! 5-misol \\\

// let str = 'salom ishlar qalay'

// function string(arg) {
//     let res = arg.split(' ')
//     let count = 0
//     for (const i of res) {
//         count += 1
//     }
//     return count
// }

// console.log(string(str));

//! 6-misol \\\

// let arr = ['salom', 'nima gap', 'qalaysiz', 'ishlar zormi']
// function reversArray(arr) {
//     return arr.sort((a, b) => b.length - a.length);
// }

// let sortedArray = reversArray(arr);
// console.log(sortedArray);

//! 7-misol \\\

// let str = "Hello World";
// function removeUnliharf(str) {
//     let unlilar = "aeiouAEIOU";
//     let res = "";
//     let i = 0;

//     while (i < str.length) {
//         if (!unlilar.includes(str[i])) {
//             res += str[i];
//         }
//         i++;
//     }

//     return res;
// }

// let res = removeUnliharf(str);
// console.log(res);

//! 8-misol \\\

// let arr = ['salom', 'qalaysan', 'ishlaryaxshimi']

// function maxLengthStr(arr) {
//     let leng = ''
//     for (const i of arr) {
//         if (i.length > leng.length) {
//             leng = i
//         }
//     }
//     return leng
// }
// console.log(maxLengthStr(arr));

//! 9-misol \\\

// let str = 'salom ishlar qalay'

// function teskariSoz(arg) {
//     let res = arg.split(' ');

//     let res2 = res.map(e => e.split('').reverse().join(''));

//     return res2.join(' ');
// }

// console.log(teskariSoz(str));

//! 10-misol \\\

// function count(arr, soz) {
//     let count = 0;

//     if (soz.length == 1) {
//         arr.forEach(str => {
//             for (let i of str) {
//                 if (i === soz) {
//                     count++;
//                 }
//             }
//         });
//     } else {
//         arr.forEach(i => {
//             if (i == soz) {
//                 count++;
//             }
//         });
//     }

//     return count;
// }

// let arr = ["apple", "banana", "apple", "cherry", "apple", "kiwi"];
// let soz = "p";
// let res = count(arr, soz);
// console.log(`"${soz}" so'zining soni: ${res}`);