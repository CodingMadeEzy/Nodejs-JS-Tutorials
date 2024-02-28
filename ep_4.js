// var ram = 20;
// var mohan = 30;

// if (ram > mohan) {
//     //comes inside this bracket only if statement is true;
//     console.log("Mohan is elder");
// } else {
//     //comes inside this bracket if all the above conditions failed.
//     console.log("ram is younger");
// }



// var shampooPrice = 100;

// if (shampooPrice > 150) {
//     console.log("DO not buy it");
// } else {
//     console.log("Buy it");
// }


// var tataSharesPrice = 324.121;
// if (tataSharesPrice > 200) {
//     console.log("Sell it");
// } else {
//     console.log("Buy More");
// }


// var tata = 500;
// //and operator (&&) , or operator (||)
// if (tata > 100 && tata < 150) {
//     console.log("Sell");
// } else if (tata > 500 || tata == 500) {
//     console.log("Tata pagal ho gya");
// } else if (tata >= 150) {
//     console.log("Buy More");
// } else {
//     console.log("Do not touch")
// }

// //////////////////////// TRY CATCH //////////////////

try {
    console.log("Calling try");
    throw new Error("I am error");
    console.log("calling try 2");
}
catch (error) {
    // console.log(error);
    console.log("Calling catch");
} finally {
    console.log("I am done");
}

