// SOLUTION OF EXERCISE FROM EP-3 


// let ram_apples = 0;
// let sohan_apples = 0;
// let ramesh_apples = 0;


// //ram purchase 10 apples
// ram_apples += 10;

// //ram multiplies apple by 3
// ram_apples *= 3;


// //ram gives half of his apple to sohan
// sohan_apples += ram_apples / 2;
// ram_apples /= 2;

// //sohan gives his half apple to ramesh
// ramesh_apples += sohan_apples / 2;
// sohan_apples /= 2;

// //ramesh gives his half to ram
// ram_apples += ramesh_apples / 2;
// ramesh_apples /= 2;

// console.log("Ram has ", ram_apples, " Apples");
// console.log("Sohan has ", sohan_apples, " Apples");
// console.log("Ramesh has ", ramesh_apples, " Apples");



//////////////  LOOOPS ///////////////////

/////// FOR LOOP //////////


// for (let bucketCount = 3; bucketCount > 0; bucketCount--) {
//     console.log("Buckets left ", bucketCount - 1);
// }


/////// WHILE LOOP //////
// let bucketCount = 3;
// while (bucketCount > 0) {
//     console.log("Buckets left ", bucketCount - 1);
//     bucketCount--;
// }

////// DO WHIle
let bucketCount = 0;
do { 
    console.log("Buckets left ", bucketCount - 1);
    bucketCount--;
} while (bucketCount > 0);