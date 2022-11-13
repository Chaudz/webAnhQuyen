var a = 2;
var b = 2;
// chú ý a++ và a-- thì c vẫn = 2 vì lúc này sẽ là 3
// var c = a++; // khác với ++a và --a
// a%b lấy dư
// giống với java
if(a < b){
    alert('ads')
    console.log("day la 1 dong log");
}
// console.log('c ' + c);
console.log('a ' + a);

// vi dụ
var number = 2 +  a++ *9 //20
console.log('number ' + number)

var h = 2;
 h**=2;
console.log('gan ' + h);

// phép === so sánh luôn giá trị kiểu dữ liệu
var one = 2;
console.log(one--);
console.log(one);