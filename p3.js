// // alert("Halo ini merupakan alert yang saya buat dengan javascript");
// let name = "Eldoni Mosul";
// console.log(name);

// const phi = 3.14;
// const greet = "Good Morning";
// console.log("Nilai phi adalah "+ phi);
// console.log(greet+" "+name);

// let ipk = 3.90;
// let price = 15000;
// let celcius = -15;
// console.log(ipk);
// console.log(price);
// console.log(celcius)

// let activity;
// activity = 'Hello FASILKOM';
// console.log(activity);
// activity = "I'm learning javascript";
// console.log(activity);
// activity = "2021";
// console.log(activity)

// let isSuccess = true;
// let isFailed = false;
// console.log(isSuccess);
// console.log(isFailed);

let fakultas = [
    "Fakultas Ilmu Komputer",
    "Fakultas Hukum",
    "Fakultas Teknik",
    "Fakultas Ilmu Sosial dan Ilmu Politik",
    "Fakultas Agama Islam"
   ];
// console.log(fakultas[0]);
// console.log(fakultas[1]);
// console.log(fakultas[2]);
// console.log(fakultas[3]);
// console.log(fakultas[4]);

// // fakultas[1] = "Fakultas Ekonomi dan Bisnis";
// // console.log(fakultas);
// // fakultas[4] = 50;
// // console.log(fakultas);

// const [fakul1, fakul2, fakul3, fakul4, fakul5] = fakultas;
// console.log("mosul di" +fakul5);

let coordinate = [
    [0,3],
    [6,2],
    [9,8]
    ];
// // console.log(coordinate[0][0]);
// // console.log(coordinate[0][1]);
// // console.log(coordinate[1][0]);
// // console.log(coordinate[1][1]);
// // console.log(coordinate[2][0]);
// // console.log(coordinate[2][1]);

// let result = 9+7;
// console.log(result);

// fakultas.push("Fakultas Kedokteran");
// console.log(fakultas);
// // fakultas.pop();
// // console.log(fakultas);
// // fakultas.shift();
// // console.log(fakultas);
// // fakultas.unshift();
// // console.log(fakultas);

// let result2 = 9<7;
// console.log(result2);

// let namadepan, namabelakang,namalengkap;
// namadepan = "Eldoni";
// namabelakang="Mosul";
// namalengkap=namadepan+" "+namabelakang;
// console.log(namalengkap);
// console.log("hallo nama saya "+namalengkap);

// let student = ["eldoni mosul", "toto wrsita", "raival maulidn", "pandapotan"];
// let dosen = ["bu ultach", "bu yuyun", " pak hao", "pak jajam"]
// console.log(student[0]+ " dan "+student[1]+" dan "+student[2]+"  dan "+student[3])
// console.log(...student,...dosen)

// let orang = {
//     "nama": "mosul",
//     "kelas": 6,
//     "npm": 2210631170065
// }
// // console.log(orang)
// // console.log(orang.nama)
// console.log(orang["npm"])

// let nilai = "100";
// nilai =+nilai
// console.log(typeof(nilai))
// if(nilai===100){
//     console.log("sempurna")
// }
// for(let i of fakultas){
//     console.log(i)
// }
// const nama = fakultas.forEach()
// console.log(nama)

// function nama (){
//     console.log("mosul ganteng")
// }
// nama();

// const hallo = () =>{
//     console.log("Hallo World")
// }
// hallo();

// function rata(...index){
//     let sum = index.length;
//     let result = 0;
//     for(const i of index){
//         result +=i
//     }
//     return result/sum
// }
// let x = rata(1,2,3,4,5,6,7,8,9,10);
// console.log(x)

const rata = (...index) =>{
    let sum = index.length;
    let result = 0;
    for(const i of index){
        result +=i
    }
    return result/sum
}
let x = rata(1,2,3,4,5,6,7,8,9,10);
console.log(x)

const iyah = () =>{
    return "iyahdong";
}
let makanya = iyah ()
console.log(makanya)

const penambahan = (x,y) =>{
    return x+y;
}
const pengurangan = (x,y) => x-y;

let hasil =  penambahan(20,10)
let hasil2 =  pengurangan(20,10)
console.log(hasil)
console.log(hasil2)

