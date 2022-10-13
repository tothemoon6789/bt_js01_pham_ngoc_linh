//  * Mô hình 3 khối
//  * ======Input=======
//  * ======End Input===
//  * ======Handle======
//  * ======End Handle==
//  * ======Output======
//  * ======End Ouput===
/**
 * BÀI 01:TÍNH TIỀN LƯƠNG NHÂN VIÊN
 * Viết chương trính tính tiền lương nhân viên.
 * Lương 1 ngày :100.000 vnd
 * Cho người dùng nhập vào số ngày làm.
 * Công thức tính lương: Lương 1 ngày * số ngày làm.
 */
//  * Mô hình 3 khối
//  * ======Input=======
const salaryPerDay = 100000;// Salary per day
var dayWorked = 6; // how may days did the worker do ?
var income; // income of the worker by the days they worked.
//  * ======End Input===
//  * ======Handle======
income = salaryPerDay * dayWorked
//  * ======End Handle==
//  * ======Output======
console.log("Section 1: The income is " + income);
//  * ======End Ouput===
/**
 * BÀI 2: TÍNH GIÁ TRỊ TRUNG BÌNH
 * Viết chương trình nhập vào 5 số thực ,
 * Tính giá trị trung bình của 5 số này và xuất ra màn hình
 */
//  * Mô hình 3 khối
//  * ======Input=======
var numFirst = 4;
var numSecond = 10.2;
var numThird = 244.5;
var numFourth = 12.4;
var numFifth = 33;
var numTotal;
var numAverage;
const numCount = 5;
//  * ======End Input===
//  * ======Handle======
numTotal = numFirst + numSecond + numThird + numFourth + numFifth;
numAverage = numTotal / 5;
//  * ======End Handle==
//  * ======Output======
console.log("Section 2: The Average " + numAverage);
//  * ======End Ouput===
/**
 * BÀI 3: QUY ĐỔI TIỀN
 */
//  * Mô hình 3 khối
//  * ======Input=======
var ratioUsdVnd = 23500; //the ratio between USD per VND
var usd = 11; //11 dolars
var vndExchange; // VND after exchange
//  * ======End Input===
//  * ======Handle======
vndExchange = ratioUsdVnd * usd;
//  * ======End Handle==
//  * ======Output======
console.log("Section 3: VND Before Exchange: " + vndExchange);
//  * ======End Ouput===
/**
 * BÀI 4: Tính diện tích, chu vi hình chữ nhật.
 * --Yêu cầu: Viết chương trình nhập vào 2 chiều dài và chiều rộng
 * của hình chữ nhật . Tính và xuất ra diện tích, chu vi của hình chữ
 * nhật đó.
 */
//  * Mô hình 3 khối
//  * ======Input=======
var rectWidth = 12; //the width of the rectangle
var rectHeight = 25; // the height of the rectangle
var rectSquare; // square of the rectangle
var rectPerimeter; // the perimeter of the rectangle
//  * ======End Input===
//  * ======Handle======
rectSquare = rectWidth * rectHeight;
rectPerimeter = (rectWidth + rectHeight) * 2;
//  * ======End Handle==
//  * ======Output======
console.log("Section 4: Square " + rectSquare);
console.log("Section 4: Perimeter " + rectPerimeter);
//  * ======End Ouput===
/**
 * BAI 5: TINH TONG 2 KY SO
 */
//  * Mô hình 3 khối
//  * ======Input=======
var myNumber = 98;
var myTens;
var myUnits;
var myTotal;
//  * ======End Input===
myTens = Math.floor(myNumber / 10);
myUnits = myNumber % 10;
myTotal = myTens + myUnits;
//  * ======Handle======
//  * ======End Handle==
//  * ======Output======
console.log("Section 5: Total:" + myTotal);
//  * ======End Ouput===
