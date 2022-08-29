
//🆘🆘🆘🆘🆘🆘🆘🆘🆘🆘🆘ŞƏRTLƏR VƏ QAYDALAR🆘🆘🆘🆘🆘🆘🆘🆘🆘🆘🆘🆘🆘 */
// !HECKES BIRBIRINDEN TASKIN KONKRET HELLINI SORUSHMUR VE KOPYALAMIR
// !ANLAMADIGINIZI BIRBASHA MENDEN SORUSHMURSUZ WHATSAPP QRUPUNDA MUZAKIRE EDIRSIZ TASKLAR BAREDE HECKESIN MESAJINI SHEXSIDE CAVABLAMAYACAM :D
// !BUTUN NETICELER console.log() VASITESIYLE GOSTERILMELIDIR
// !DERSDE KECMEDIYIMIZ MOVZULARA AID KODLARDAN MAXIMUM UZAG DURMAGA CALISHIN
// !BUTUN TASKLARI 1 1 OXUYUN HAMSINA EYNI VAXTDA BAXMAYIN
// !HER BIR TASKIN HELLI TASKIN OZUNUN ALTINDA YAZILMALI NOVBETI TASKA KECENDE BITIRILEN TASK COMMENTE ALINMALIDIR.
// !DEADLINE 1 HEFTEDIR
// !MUREKKEB OLDUGUNU DUSHUNDUYUNUZ TASKLAR AYRI FAYLDA YAZILMALIDIR. (FAYL ADI TASKA UYGUN QOYULMALIDIR)
// !SONDA BUTUN KODLAR GITHUBA YUKLENILMELIDIR




// SWITCH CASE ///////////////// SWITCH CASE ///////////////// SWITCH CASE ///////////////// SWITCH CASE ///////////////
// BU BASHLIQ ALTINDAKI HELLER YALNIZ SWITCH CASE ILE QEBUL EDILECEKDIR. 


// 1)  SWITCH CASE ILE ASHAGIDAKI TELEBLERI ODEYEN FUNCTION YAZIN 

// let SET = 'SET_DATA';
// let GET = 'GET_DATA'
// let DELETE = 'DELETE_DATA'

// 1.1 Yuxarida gosterilmish type lara uygun case ler yazin 
//     ve yazdgniz functionda parametr olaraq type gonderin ve birinci merhelede sadece 'case' in adini consola verin

// 1.2  2ci merhelede functiondan kenarda array yaradin ve 
//         Case 'SET' oldugu halda arraya 1-10 arasi bir reqem elave edin

// 1.3 Case -  'DELETE'  olarsa arraydan 1 item silin 
//     ARRAY BOW OLDUGU HALDA ERROR CIXMALIDIR - 'SILINECEK DATA TAPILMADI'
//     ve sonda arrayi consola cixardin.

// 1.4 Case - 'GET' oldugu halda ise sadece array consolda gorunsun


// solution
// 1.1

// data("get");

// function data(type = "set") {

//     switch (type) {
//         case "set":
//             console.log(type);
//         break;
//         case "get":
//             console.log(type);
//         break;
//         case "remove":
//             console.log(type);
//         break;
//     }

// }

// 1.2
// let myArray = [];

// data("set", myArray);

// function data(type = "set", arr) {

//     const set = () => arr.push(Math.floor((Math.random() * 10) + 1));

//     switch (type) {
//         case "set":
//            set();
//         break;
//         case "get":
//             console.log(type);
//         break;
//         case "remove":
//             console.log(type);
//         break;
//     }

//     console.log(arr);

// }

// 1.3
// let myArray = [];

// data("remove", myArray);

// function data(type = "set", arr) {

//     let err;
//     const set = () => arr.push(Math.floor((Math.random() * 10) + 1));
//     const remove = () => arr.length ? arr.pop() : err = true;
    
//     switch (type) {
//         case "set":
//            set();
//         break;
//         case "get":
//             console.log(type);
//         break;
//         case "remove":
//             remove();
//             if (err) console.log("Silinəcək data tapılmadı");
//         break;
//     }

//     console.log(arr);

// }

// 1.4 - final version
// let myArray = ["BMW","Mercedes","Volkswagen"];

// data("get", myArray);

// function data(type = "get", arr) {

//     let err;
//     const set = () => arr.push(Math.floor((Math.random() * 10) + 1));
//     const remove = () => arr.length ? arr.pop() : err = true;
    
//     switch (type) {
//         case "set":
//            set();
//         break;
//         case "get":
//             console.log(arr);
//         break;
//         case "remove":
//             remove();
//             err ? console.log("Silinəcək data tapılmadı") : console.log(arr);
//         break;
//     } 

// }

///////////////////////////////////////////////////////////////////////////////////////////

let mL = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];


// 2) AY-lar dan ibaret arrayi loopa salin ve her ayda nece gun oldugunu switch case ile Ayin adi + gun sayi  ni consola verin  
// Example  'December - 31 days'
// QEYD - FEVRAL OLANDA 28-29 gorunmelidir. mL arrayindan istifade edilmelidir.

// solution
// 2

// getMonthLength();

// function getMonthLength() {

//     const getLength = (val) => {
 
//         switch(val) {
//             case "January":
//                 console.log(val + " - 31 days");
//             break;
//             case "February":
//                 console.log(val + " - 28 days");
//             break;
//             case "March":
//                 console.log(val + " - 31 days");
//             break;
//             case "April":
//                 console.log(val + " - 30 days");
//             break;
//             case "May":
//                 console.log(val + " - 31 days");
//             break;
//             case "June":
//                 console.log(val + " - 30 days");
//             break;
//             case "July":
//                 console.log(val + " - 31 days");
//             break;
//             case "August":
//                 console.log(val + " - 31 days");
//             break;
//             case "September":
//                 console.log(val + " - 30 days");
//             break;
//             case "October":
//                 console.log(val + " - 31 days");
//             break;
//             case "November":
//                 console.log(val + " - 30 days");
//             break;
//             case "December":
//                 console.log(val + " - 31 days");
//             break;
//         }

//     }

//     mL.forEach(getLength);

// }


// 3) Task 2 - deki mentiqi Date() objecti uzerinde ishledin. Hazirda oldugumuz ayi tapin ve gunlerinin sayini gosterin

// solution
// 3

// getMonthLength();

// function getMonthLength() {

//     const dt = new Date();
//     const month = dt.getMonth();
//     const year = dt.getFullYear();

//     const getDays = i => " - " + new Date(year, ++i, 0).getDate() + " days";

//     const getLength = (val, i) => {
 
//         switch(val) {
//             case "January":
//                 console.log(val + getDays(i));
//             break;
//             case "February":
//                 console.log(val + getDays(i));
//             break;
//             case "March":
//                 console.log(val + getDays(i));
//             break;
//             case "April":
//                 console.log(val + getDays(i));
//             break;
//             case "May":
//                 console.log(val + getDays(i));
//             break;
//             case "June":
//                 console.log(val + getDays(i));
//             break;
//             case "July":
//                 console.log(val + getDays(i));
//             break;
//             case "August":
//                 console.log(val + getDays(i));
//             break;
//             case "September":
//                 console.log(val + getDays(i));
//             break;
//             case "October":
//                 console.log(val + getDays(i));
//             break;
//             case "November":
//                 console.log(val + getDays(i));
//             break;
//             case "December":
//                 console.log(val + getDays(i));
//             break;
//         }

//     }

//     mL.forEach(getLength);

// }

// 4) Codu-yazdiginiz tarixi date ile tapin ve hazirki ayin ilin 1 ci yarisina yoxsa 2 ci yarisina aid olub olmamasini switch case ile tapin
// QEYD case - ayin ozu olmalidir.

// solution 
// 4

// findDate();

// function findDate() {

//     let date = new Date();
//     date.setFullYear('2022');
//     date.setMonth('7');
//     date.setDate('28');
//     const firstTxt = " - İlin ilk yarısına aiddir";
//     const secTxt = " - İlin ikinci yarısına aiddir";

//     switch (date.getMonth()) {
//         case 0:
//             console.log(mL[0] + firstTxt);
//         break;
//         case 1:
//             console.log(mL[1] + firstTxt);
//         break;
//         case 2:
//             console.log(mL[2] + firstTxt);
//         break;
//         case 3:
//             console.log(mL[3] + firstTxt);
//         break;
//         case 4:
//             console.log(mL[4] + firstTxt);
//         break;
//         case 5:
//             console.log(mL[5] + firstTxt);
//         break;
//         case 6:
//             console.log(mL[6] + secTxt);
//         break;
//         case 7:
//             console.log(mL[7] + secTxt);
//         break;
//         case 8:
//             console.log(mL[8] + secTxt);
//         break;
//         case 9:
//             console.log(mL[9] + secTxt);
//         break;
//         case 10:
//             console.log(mL[10] + secTxt);
//         break;
//         case 11:
//             console.log(mL[11] + secTxt);
//         break;
//     }

// }


// 5) 4 cu taski heftenin gunleri ile yoxlayin


// solution 
// 5

// findWeekday();

// function findWeekday() {

//     let date = new Date();
//     date.setFullYear('2022');
//     date.setMonth('7');
//     date.setDate('28');
//     const firstTxt = " - Həftə içinə məxsusdur";
//     const secTxt = " - Həftə sonuna məxsusdur";
//     const days = ["Bazar","Bazar ertəsi","Çərşənbə axşamı","Çərşənbə","Cümə axşamı","Cümə","Şənbə"];
//     const day = date.getDay();

//     switch (day) {
//         case 0:
//             console.log(days[day] + secTxt);
//         break;
//         case 1:
//             console.log(days[day] + firstTxt);
//         break;
//         case 2:
//             console.log(days[day] + firstTxt);
//         break;
//         case 3:
//             console.log(days[day] + firstTxt);
//         break;
//         case 4:
//             console.log(days[day] + firstTxt);
//         break;
//         case 5:
//             console.log(days[day] + firstTxt);
//         break;
//         case 6:
//             console.log(days[day] + secTxt);
//         break;
//     }

// }


// 6) hazirki tarixi taparaq ayin necenci heftesinde ola bileceymizi tapin
// QEYD cixan netice realliga uygun olmaya biler bu problem deyil
// her 7 gunu 1 hefte kimi goturun ve ayin 1 nin heftenin 1 ci gununden oldugunu dushunun

// solution
// 6

// findWeek();

// function findWeek() {

//     const date = new Date();
//     const day = date.getDate();

//     const find = () => console.log("Həftə - " + Math.ceil(day / 7));

//     find();

// }




///////////////////////////////////////////////////////////////////////////////////////////



// LOOPS //////  LOOPS ////// LOOPS /////////// LOOPS ////////// LOOPS //////////////////////////////////////////////////////////
// Bu hisseye aid olan tapshiriqlar while for for In for Of istifade edilmekle hell edilmelidir.


// 1 Looplar-dan istifade ederek 'Verilen array' - dan 'Almali oldugunuz' arrayi alin 
// Aid olan tasklar 1.1, 1.2, 1.3, 1.4, 1.5


// 1.1 // Verilen array
// let mL = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

//  Almali oldugunuz
// let mL = [
//     ['January'], 
//     ['February'],
//     ['March'],
//     ['April'],
//     ['May'],
//     ['June'],
//     ['July'], 
//     ['August'], 
//     ['September'],
//     ['October'],
//     ['November'], 
//     ['December']
// ];

// solution
// 1.1

// separateMonth();

// function separateMonth() {
//     let seperated = [];
//     for (let i = 0; i < mL.length; i++) { seperated[i] = []; seperated[i][0] = mL[i] }
//     console.log(seperated);
// }

///////////////////////////////////////////////////////////////////////////////////////////


// 1.2 // Verilen array
// let mL = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

//  Almali oldugunuz
// let mL = [
//     ['January','February','March','April'], 
//     ['May','June','July','August'], 
//     ['September' , 'October', 'November', 'December']
// ];

// solution
// 1.2

// groupMonth();

// function groupMonth() {

//     let group = [[],[],[]];

//     for (let i = 0, y = 0; i < mL.length; i++) {  
//         if (i > 3 && i < 8) y = 1;
//         else if (i >= 8) y = 2;
//         group[y].push(mL[i]);  
//     }

//     console.log(group);

// }


///////////////////////////////////////////////////////////////////////////////////////////


// 1.3 // Verilen array
// let mL = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

//  Almali oldugunuz
// let mL = [
//     ['January','February',['March','April']], 
//     ['May','June',['July','August']], 
//     ['September' , ['October', 'November', 'December']]
// ];

// solution
// 1.3

// groupMonth();

// function groupMonth() {

//     let group = [[[]],[[]],[[]]];
//     const pat = /[23679]/i;
//     const pat2 = /(10|11)/i;

//     for (let i = 0, y = 0; i < mL.length; i++) {  
//         if (i > 3 && i < 8) y = 1;
//         else if (i >= 8) y = 2;
//         pat.test(i) || pat2.test(i) ? group[y][0].push(mL[i]) : group[y].push(mL[i]);    
//     }

//     for (let i = 0; i < group.length; i++) { 
//         let innerArr = group[i].shift();
//         group[i].push(innerArr);
//     }    

//     console.log(group);

// }


///////////////////////////////////////////////////////////////////////////////////////////

// 1.4 // Verilen array
// let mL = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

//  Almali oldugunuz
// let mL = [
//     ['January','February',['March',['April']]], 
//     ['May','June',['July',['August']]], 
//     ['September' , ['October', 'November', ['December']]]
// ];

// solution
// 1.4

// groupMonth();

// function groupMonth() {

//     let group = [[[[]]],[[[]]],[[[]]]];
//     const pat = /(2|6|9|10)/i;
//     const pat2 = /(3|7|11)/i;

//     for (let i = 0, y = 0; i < mL.length; i++) {  
//         if (i > 3 && i < 8) y = 1;
//         else if (i >= 8) y = 2;

//         if (pat.test(i)) group[y][0].unshift(mL[i])
//         else if (pat2.test(i)) group[y][0][group[y][0].length - 1].push(mL[i])
//         else group[y].push(mL[i]);
       
//     }

//     for (let i = 0; i < group.length; i++) { 
//         let innerArr = group[i].shift();
//         group[i].push(innerArr);
//     } 

//     console.log(group);

// }


///////////////////////////////////////////////////////////////////////////////////////////


// 1.5 // Verilen array

// let mL = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

//  Almali oldugunuz
// let mL = [
//     ['January','February',['March','April']], 
//     ['September' , ['October', 'November', 'December']]
//     ['May','June',['July','August']], 
// ];

// solution
// 1.5

// groupMonth();

// function groupMonth() {

//     let group = [[[]],[[]],[[]]];
//     const pat = /(2|3|5|6|7|10|11)/i;

//     for (let i = 0, y = 0; i < mL.length; i++) {  
//         if (i > 3 && i < 8) y = 1;
//         else if (i >= 8) y = 2;
//         pat.test(i) ? group[y][0].push(mL[i]): group[y].push(mL[i]);    
//     }

//     for (let i = 0; i < group.length; i++) { 
//         let innerArr = group[i].shift();
//         group[i].push(innerArr);
//     } 

//     console.log(group);

// }

///////////////////////////////////////////////////////////////////////////////////////////



// 2) ad ve soyadinizi yazin ve onlari ashagidaki struktura getirin
// let fullName = 'Murad Nerimanli'

// let result = [
//     ['M' , 'N']
//     ['U' , 'E']
//     ['R' , 'R']
//     ['A' , 'I']
//     ['D' , 'M']
//     ['X' , 'A']
//     ['X' , 'N']
//     ['X' , 'L']
//     ['X' , 'I']
// ]

// solution
// 2

// const fullName = "ILHAM GURBANLY";

// nameLetters();

// function nameLetters() {

//     const name = fullName.split(' ')[0];
//     const surname = fullName.split(' ')[1];
//     const length = Math.max(name.length, surname.length);
//     let letters = [];
//     let arr = [];

//     for (let i = 0; i < length; i++) {
//         arr[i] = [];
//         name[i] ? arr[i].push(name[i]) : arr[i].push("X"); 
//         surname[i] ? arr[i].push(surname[i]) : arr[i].push("X");    
//     }

//     letters.push(arr);
//     console.log(letters);

// }

// Gorunduyu kimi ad ve soyadinizin eyni indexli herflerini bir arraya yigib (Meselen 0ci index-de M ve N var) 
// sonra onlari umumi arraya elave etmelisiz


///////////////////////////////////////////////////////////////////////////////////////////



// 3) 'Ey babeK kebaB ye!' cumlesini loop istifade ederek nida boyuk ve kicik herfler de daxil olmaqla tersine cevirin
// gozlenilen netice  '!ey Babek Kebab yE' - olmalidir

// solution
// 3

// reverseSentence();

// function reverseSentence() {

//     const sen = "Ey babeK kebaB ye!";
//     let reversedSen = "";

//     for (let i = sen.length - 1; i >= 0; i--) { reversedSen += sen[i]; }
//     console.log(reversedSen);

// }


let arr = [3,2,21,12,4,12,4,23,3,23,5,34,35,3,4,234,2,105,24,2,342,34,140,34,23,175,342312,1,2,1,70,21,24,23,24,23,24,2,24,34]

// 4) Looplardan istifade ederek yuxaridaki arrayda hem 5-e hem 7-e eyni zamanda bolunen reqemlerin cemini tapin

// solution
// 4
// Həm 5, həm də 7-yə bölünə bilməlidir.

// findTotal();

// function findTotal() {

//     const filterNumbers = (val) => {
//         const num1 = val / 5;
//         const num2 = val / 7;
//         return !num1.toString().includes('.') && !num2.toString().includes('.');
//     }

//     const sum = (tot, val) => tot + val;

//     let filteredNumbers = arr.filter(filterNumbers);
//     let total = filteredNumbers.reduce(sum);

//     console.log(filteredNumbers);
//     console.log(total);
    
// }

// Həm 5-ə, həm də 7-yə bölünə bilər.Birinə bölünüb, digərinə bölünməsə bir problemi olmaz

// findTotal();

// function findTotal() {

//     const filterNumbers = (val) => {
//         const num1 = val / 5;
//         const num2 = val / 7;
//         return !num1.toString().includes('.') || !num2.toString().includes('.');
//     }

//     const sum = (tot, val) => tot + val;

//     let filteredNumbers = arr.filter(filterNumbers);
//     let total = filteredNumbers.reduce(sum);

//     console.log(filteredNumbers);
//     console.log(total);
    
// }

// 5) Looplardan istifade ederek yuxaridaki arrayda en boyuk 3 reqemli cut ededi tapin (biraz cetindir tapmasaniz biryerde baxarg)

// findBiggest();

// function findBiggest() {

//     const filterNumbers = (val) => val.toString().length == 3 && val % 2 == 0;

//     let filteredNumbers = arr.filter(filterNumbers);
//     let max = Math.max(...filteredNumbers);

//     console.log(filteredNumbers);
//     console.log(max);

// }

// 6) Looplardan istifade ederek yuxaridaki arrayda ozunden bashqa (3 ozu olmasin yenii) 3 e bolune bilen en kicik reqemi tapin

// solution
// 6

// findSmallest();

// function findSmallest() {

//     const filterNumbers = (val) => {
//         const num = val / 3;
//         return !num.toString().includes('.') && val != 3;
//     }

//     const filteredNumbers = arr.filter(filterNumbers);
//     const min = Math.min(...filteredNumbers);

//     console.log(filteredNumbers);
//     console.log(min);

// }

// 7 verilmish obyektde keylerin son reqemi ile value-leri eyni olan valueleri tapin

let obj = {
    key1: 0,
    key2: 3,
    key3:2,
    key4:4,
    key5:53,
    key7:7,
    key8:8,
    key9:91,
}

// solution 7

// filterObject();

// function filterObject() {
//     let filteredObject = {};
//     for (const key in obj) { if (obj[key] == key[key.length - 1]) filteredObject[key] = obj[key]; }
//     console.log(filteredObject);
// }


////////////////////////////////////////////////////////////////////////////////////////////////



// WINDOW & DOCUMENT//////// WINDOW & DOCUMENT //////// WINDOW & DOCUMENT //////// WINDOW & DOCUMENT //////// WINDOW & DOCUMENT //////// WINDOW & DOCUMENT //////// WINDOW & DOCUMENT //////// WINDOW & DOCUMENT //////// WINDOW & DOCUMENT //////// WINDOW & DOCUMENT //////// WINDOW & DOCUMENT //////

// BURADA SIZDEN YARATMAGINIZ ISTENILEN DIV-LER HER BIRI AYRI OLUB TASK HELL EDILDIKDEN SONRA KOMMENTE ATILMALI
// VE HANSI DIVIN HANSI TAKSA AID OLDUGU KOMMENT SHEKLINDE QEYD EDILMELIDIR!
// VE YA HER BIRINI AYRI FAYLLARDA EDE BILERSINIZ.


// 1) Bir div yaradin pencerenin solunda normal yerinde dayansin. 2 saniyeden bir 20px sola hereket etsin ve 20 saniyeden sonra dayansin.

// solution
// 1

// leftDivision();

// function leftDivision() {

//     let div;
//     let seconds = 0;
    
//     const createDiv = () => {
//         div = document.createElement('div');
//         div.innerHTML = "Hallo Leute";
//         div.style.setProperty('background-color','red');
//         div.style.setProperty('color','white');
//         div.style.setProperty('position','fixed');
//         div.style.setProperty('top','0');
//         div.style.setProperty('left','0px');
//         div.style.setProperty('transition','all .5s');
//         div.style.setProperty('padding','4rem 3rem');
//         document.body.append(div);
//     }

//     const moving = () => {

//         let interval = setInterval(function() {
//             div.style.left = getNewSize();
//             seconds += 2;
//             if (seconds == 20) clearInterval(interval);
//         }, 2000)
//     } 

//     const getNewSize = () => Number(div.style.left.slice(0, div.style.left.length - 2)) + 20 + "px";
    
//     createDiv();
//     moving();

// }

// 2) Bir div yaradin olcusu 100-100px kvadrat olsun 1 saniyeden bir 10px ashagi 10px saga transitionla hereket etsin.

// solution
// 2

// leftDivision();

// function leftDivision() {

//     let div;
    
//     const createDiv = () => {
//         div = document.createElement('div');
//         div.innerHTML = "Hola";
//         div.style.setProperty('background-color','blue');
//         div.style.setProperty('color','white');
//         div.style.setProperty('position','fixed');
//         div.style.setProperty('top','0');
//         div.style.setProperty('left','0px');
//         div.style.setProperty('transition','all .5s');
//         div.style.setProperty('width','100px');
//         div.style.setProperty('height','100px');
//         div.style.setProperty('line-height','100px');
//         div.style.setProperty('text-align','center');
//         document.body.append(div);
//     }

//     const moving = () => {
//         setInterval(function() {
//             div.style.top = getTop();
//             div.style.left = getLeft();
//         }, 1000)
//     } 

//     const getLeft = () => Number(div.style.left.slice(0, div.style.left.length - 2)) + 10 + "px";
//     const getTop = () => Number(div.style.top.slice(0, div.style.top.length - 2)) + 10 + "px";
    
//     createDiv();
//     moving();

// }

// 3) Bir div yaradin onu sehifede centerleyin. Olculeri 200-200px
//  kvadrat olsun 1 saniyeden bir boyuyerek 400px-400px sonra yeniden oz olculerine qayitsin
// Transitonla etmeyiniz gozlenilendir.

// solution
// 3

// growingDiv();

// function growingDiv() {

//     let div;
//     let growed = false;
//     document.body.style.setProperty('display', 'flex');
//     document.body.style.setProperty('justify-content', 'center');
//     document.body.style.setProperty('align-items', 'center');
//     document.body.style.setProperty('align-content', 'center');
//     document.body.style.setProperty('min-height', '100vh');
    
//     const createDiv = () => {
//         div = document.createElement('div');
//         div.innerHTML = "Hola";
//         div.style.setProperty('background-color','blue');
//         div.style.setProperty('color','white');
//         div.style.setProperty('transition','all .5s');
//         div.style.setProperty('width','200px');
//         div.style.setProperty('height','200px');
//         div.style.setProperty('line-height','200px');
//         div.style.setProperty('text-align','center');
//         document.body.append(div);
//     }

//     const growing = () => setInterval(function() { !growed ? grow() : normal(); }, 1000);

//     const grow = () => { div.style.width = "400px"; div.style.height = "400px"; div.style.lineHeight = "400px"; growed = true; }
//     const normal = () => { div.style.width = "200px"; div.style.height = "200px"; div.style.lineHeight = "200px"; growed = false; }
    
//     createDiv();
//     growing();

// }


// 4) Bir div (200px x 200px olcude kvadrat)  ve iki button (Start ve stop) yaradin onlari alt alta centerleyin
// Start buttona basandan 1 saniye sonra ve her 2 saniyeden bir div 90 derece firlansin
// Stop buttona basanda 'Stop' sozunun yaninda 3 2 1 saysin ve firlanma dayansin.

// solution
// 4

// rotateDiv();

// function rotateDiv() {

//     let div;
//     let interval;
//     let deg = 0;
//     let txt;
//     let txtInterval;
//     let rotating = false;
//     document.body.style.setProperty('display', 'flex');
//     document.body.style.setProperty('justify-content', 'center');
//     document.body.style.setProperty('align-items', 'center');
//     document.body.style.setProperty('align-content', 'center');
//     document.body.style.setProperty('min-height', '100vh');
    
//     const createDiv = () => {
//         div = document.createElement('div');
//         div.innerHTML = "Me siento mareado";
//         div.style.setProperty('background-color','red');
//         div.style.setProperty('color','white');
//         div.style.setProperty('transition','all .5s');
//         div.style.setProperty('width','180px');
//         div.style.setProperty('height','180px');
//         div.style.setProperty('padding','20px');
//         div.style.setProperty('text-align','center');
//         div.style.setProperty('display', 'flex');
//         div.style.setProperty('flex-direction', 'column');
//         div.style.setProperty('justify-content', 'center');
//         div.style.setProperty('align-items', 'center');
//         div.style.setProperty('align-content', 'center');
//         div.style.setProperty('transform', 'rotate(0deg)');
//         div.append(createStartBtn());
//         div.append(createStopBtn());
//         div.append(createText());
//         document.body.append(div);
//     }

//     const createText = () => {
//         txt = document.createElement('p');
//         txt.style.setProperty('margin',"10px 0 0");
//         return txt;
//     }    

//     const createStartBtn = () => {
//         let startBtn = document.createElement('button');
//         startBtn.innerHTML = "Start";
//         startBtn.setAttribute('type','button');
//         startBtn.addEventListener('click', function() {
//             setTimeout(function() { rotate(); started = true; }, 1000)
//         });
//         setBtnStyle(startBtn);
//         return startBtn;
//     }

//     const createStopBtn = () => {
//         let stopBtn = document.createElement('button');
//         stopBtn.innerHTML = "Stop";
//         stopBtn.setAttribute('type','button');
//         stopBtn.addEventListener('click', stop);
//         setBtnStyle(stopBtn);
//         return stopBtn;
//     }

//     const setBtnStyle = (btn) => {
//         btn.style.setProperty('width',"80%");
//         btn.style.setProperty('padding',"1rem");
//         btn.style.setProperty('border-radius',"7px");
//         btn.style.setProperty('text-align',"center");
//         btn.style.setProperty('background-color',"white");
//         btn.style.setProperty('color',"black");
//         btn.style.setProperty('border',"0");
//         btn.style.setProperty('display',"block");
//         btn.style.setProperty('margin',"1rem auto 0");
//         btn.style.setProperty('cursor',"pointer");
//     }

    
//     const rotate = () => { 
//         if (rotating) return;
//         interval = setInterval(function() {
//             div.style.transform = getRotate();
//         }, 2000);
//         rotating = true;
//     }

//     const getRotate = () => {

//         switch (deg) {
//             case 0:
//                 deg = 90; 
//             break;
//             case 90:
//                 deg = 180; 
//             break;
//             case 180:
//                 deg = 270; 
//             break;       
//             case 270:
//                 deg = 360; 
//             break;
//             case 360:
//                 deg = 0; 
//             break;
//         }

//         return "rotate("+deg+"deg)";
//     }

//     function stop() { 
//         if (!rotating) return;
//         let i = 1;
//         rotating = false;
//         txtInterval = setInterval(function() {
//             i < 4 ? txt.innerHTML = i : endCounting(); i++;
//         },1000)
//     }

//     const endCounting = () => {
//         txt.innerHTML = "";
//         clearInterval(txtInterval);
//         clearInterval(interval);
//         deg = 0;
//         div.style.setProperty('transform', 'rotate(0deg)');
//     }

//     createDiv();

// }


// 5) Bir div yaradin pencerenin sol yuxari kuncunde dayansin. Ustune clickledikde Ilk olaraq en sag kunce  
// 2ci defe clickledikde ashagi kunce 3 cu de  sol ashagi kunce ve sonda ilk bashldigi yere qayitsin

// solution
// 5

// moveDiv();

// function moveDiv() {

//     let div;
//     let pos = "left";
    
//     const createDiv = () => {
//         div = document.createElement('div');
//         div.innerHTML = "Yo puedo moverme";
//         div.style.setProperty('background-color','red');
//         div.style.setProperty('color','white');
//         div.style.setProperty('position','fixed');
//         div.style.setProperty('top','0');
//         div.style.setProperty('left','0px');
//         div.style.setProperty('transition','all .5s');
//         div.style.setProperty('cursor','pointer');
//         div.style.setProperty('width','180px');
//         div.style.setProperty('height','180px');
//         div.style.setProperty('line-height','180px');
//         div.style.setProperty('padding','10px');
//         div.style.setProperty('text-align','center');
//         div.addEventListener('click',move);
//         document.body.append(div);
//     }

//     const move = () => {

//         switch(pos) {
//             case "left":
//                 right();
//             break;  
//             case "up":
//                 down();
//             break;
//             case "right":
//                 left();
//             break;
//             case "down":
//                 up();
//             break;  
//         }
        
//     } 

//     const right = () => {
//         div.style.setProperty('left','calc(100% - 200px)');
//         pos = "up";
//     }

//     const down = () => {
//         div.style.setProperty('top','calc(100% - 200px)');
//         pos = "right";
//     }

//     const left = () => {
//         div.style.setProperty('left','0');
//         pos = "down";
//     }

//     const up = () => {
//         div.style.setProperty('top','0');
//         pos = "left";
//     }

//     createDiv();

// }

// 6) 5 ci task hell edildiyi teqdirde eyni fayllar uzerinden davam edin ve klaviaturada kursor ashagi yuxari sag sol duymelerine basdiqda div-i hereket etdirmeye calishin. 
// Hem 5 ci tapshiriqdaki hem de bu tapshiriq ishlek veziyyetde olmalidir.

// solution
// 6

// moveDiv();

// function moveDiv() {

//     let div;
//     let pos = "left";
    
//     const createDiv = () => {
//         div = document.createElement('div');
//         div.innerHTML = "Yo puedo moverme";
//         div.style.setProperty('background-color','red');
//         div.style.setProperty('color','white');
//         div.style.setProperty('position','fixed');
//         div.style.setProperty('top','0');
//         div.style.setProperty('left','0px');
//         div.style.setProperty('transition','all .5s');
//         div.style.setProperty('cursor','pointer');
//         div.style.setProperty('width','180px');
//         div.style.setProperty('height','180px');
//         div.style.setProperty('line-height','180px');
//         div.style.setProperty('padding','10px');
//         div.style.setProperty('text-align','center');
//         div.addEventListener('click',move);
//         document.body.append(div);
//     }

//     const move = () => {

//         switch(pos) {
//             case "left":
//                 right();
//             break;  
//             case "up":
//                 down();
//             break;
//             case "right":
//                 left();
//             break;
//             case "down":
//                 up();
//             break;  
//         }
        
//     } 

//     const moveByArows = (e) => {

//         switch(e.key) {
//             case "ArrowRight":
//                 right();
//             break;  
//             case "ArrowDown":
//                 down();
//             break;
//             case "ArrowLeft":
//                 left();
//             break;
//             case "ArrowUp":
//                 up();
//             break;  
//         }
        
//     }

//     const right = () => {
//         div.style.setProperty('left','calc(100% - 200px)');
//         pos = "up";
//     }

//     const down = () => {
//         div.style.setProperty('top','calc(100% - 200px)');
//         pos = "right";
//     }

//     const left = () => {
//         div.style.setProperty('left','0');
//         pos = "down";
//     }

//     const up = () => {
//         div.style.setProperty('top','0');
//         pos = "left";
//     }

//     createDiv();
//     document.addEventListener('keyup', moveByArows);

// }

// 7) 5 ve 6 ci tasklar ugurla hell edilerse budefe hemin box-un yerini yadda saxlayin. 
// Sehifeni yenilesem bele axirinci hansi veziyyetde qalmishdisa o veziyyetde gorunsun
// Ipucu localstorage ve ya session storage istifade edin. 

// solution
// 7

// moveDiv();

// function moveDiv() {

//     if (!sessionStorage.getItem('pos')) sessionStorage.setItem('pos', "left");
//     if (!sessionStorage.getItem('top')) sessionStorage.setItem('top', "0");
//     if (!sessionStorage.getItem('left')) sessionStorage.setItem('left', "0");
    
//     let div;
//     let pos = sessionStorage.getItem('pos');
    
//     const createDiv = () => {
//         div = document.createElement('div');
//         div.innerHTML = "Yo puedo moverme";
//         div.style.setProperty('background-color','red');
//         div.style.setProperty('color','white');
//         div.style.setProperty('position','fixed');
//         div.style.setProperty('top','0');
//         div.style.setProperty('left','0px');
//         div.style.setProperty('transition','all .5s');
//         div.style.setProperty('cursor','pointer');
//         div.style.setProperty('width','180px');
//         div.style.setProperty('height','180px');
//         div.style.setProperty('line-height','180px');
//         div.style.setProperty('padding','10px');
//         div.style.setProperty('text-align','center');
//         div.addEventListener('click',move);
//         document.body.append(div);
//     }

//     const move = () => {

//         switch(pos) {
//             case "left":
//                 right();
//             break;  
//             case "up":
//                 down();
//             break;
//             case "right":
//                 left();
//             break;
//             case "down":
//                 up();
//             break;  
//         }
        
//     } 

//     const moveByArows = (e) => {

//         switch(e.key) {
//             case "ArrowRight":
//                 right();
//             break;  
//             case "ArrowDown":
//                 down();
//             break;
//             case "ArrowLeft":
//                 left();
//             break;
//             case "ArrowUp":
//                 up();
//             break;  
//         }
        
//     }

//     const set = () => {
//         div.style.setProperty('left',''+sessionStorage.getItem("left")+'');
//         div.style.setProperty('top',''+sessionStorage.getItem("top")+'');     
//     } 

//     const right = () => {
//         div.style.setProperty('left','calc(100% - 200px)');
//         pos = "up";
//         sessionStorage.setItem('pos', pos);
//         sessionStorage.setItem('left', 'calc(100% - 200px)');
//     }

//     const down = () => {
//         div.style.setProperty('top','calc(100% - 200px)');
//         pos = "right";
//         sessionStorage.setItem('pos', pos);
//         sessionStorage.setItem('top', 'calc(100% - 200px)');
//     }

//     const left = () => {
//         div.style.setProperty('left','0');
//         pos = "down";
//         sessionStorage.setItem('pos', pos);
//         sessionStorage.setItem('left', '0');
        
//     }

//     const up = () => {
//         div.style.setProperty('top','0');
//         pos = "left";
//         sessionStorage.setItem('pos', pos);
//         sessionStorage.setItem('top', '0');
//     }

//     createDiv();
//     set();
//     document.addEventListener('keyup', moveByArows);

// }

// 8) Chrome dinozavr oyununu gormush olarsiz Space basdiqca Dinozavr tullanib dushur. 
// oradaki kimi oyun yazmaginizi yox sadece istediyiniz bir heyvanin png sheklini ekranda cixarib 'Space' duymesini basdiqda 200px tullanib sora yerine qayitmagini yazin. :D Maragli olacaq

// solution
// 8

// TRex();

// function TRex() {

//     let img;
//     let speed = 100;
//     let interval;
//     let arrowPressed = false;

//     const createImg = () => {
//         img = document.createElement('img');
//         img.src = "images/tyrannosaurus-rex.png";
//         img.style.width = "200px";
//         img.style.height = "auto";
//         img.style.position = "relative";
//         img.style.paddingRight = "500px";
//         img.style.transition = "all .5s";
//         img.style.marginTop = "300px";
//         document.body.append(img);
//     }

//     const faster = (e) => { 
//         if (e.key == "ArrowRight" && !arrowPressed) { 
//             speed = 20; 
//             clearInterval(interval);
//             move();
//             arrowPressed = true;
//         }
//     } 

//     const normal = (e) => { 
//         if (e.key == "ArrowRight") { 
//             speed = 100; 
//             arrowPressed = false;
//             clearInterval(interval);
//             move(); 
//         } 
//     }

//     const move = () => {
//         interval = setInterval(function() {
//             img.style.left = getLeft();
//             document.documentElement.scrollLeft = getLeft(false);
//         },speed)
//     }

//     const getLeft = (px = true) => { 
//         let size = Number(img.style.left.slice(0, img.style.left.length - 2)) + 15;
//         if (px) size += "px";
//         return size; 
//     }     

//     const jump = (e) => {
//         if (e.keyCode != 32) return;
//         img.style.top = "-200px";
//         setTimeout(function() {
//             img.style.top = "0px";
//         }, 500)
//     }

//     createImg();
//     move();

//     document.addEventListener('keyup',jump);
//     document.addEventListener('keydown',faster);
//     document.addEventListener('keyup',normal);
// }

// 9) Random reng generate eden functionu internetden tapib ekrana her clickde body-e yeni generate edilmish ve yeni reng-le renglenmish 100px - kvadrat box elave edin. 

// solution
// 9

// generateDiv();

// function generateDiv() {

//     document.body.style.setProperty('margin', '0');
//     document.body.style.setProperty('display', 'flex');
//     document.body.style.setProperty('flex-flow', 'row wrap');
//     document.body.style.setProperty('justify-content', 'flex-start');
//     document.body.style.setProperty('align-items', 'flex-start');
//     document.body.style.setProperty('align-content', 'flex-start');
//     document.body.style.setProperty('min-height', '100vh');
    
//     const createDiv = () => {
//         div = document.createElement('div');
//         div.style.setProperty('background-color',generateRandomColor());
//         div.style.setProperty('color','white');
//         div.style.setProperty('transition','all .5s');
//         div.style.setProperty('width','25%');
//         div.style.setProperty('height','100px');
//         document.body.append(div);
//     }

//     function generateRandomColor() {
//         let maxVal = 0xFFFFFF; // 16777215
//         let randomNumber = Math.random() * maxVal; 
//         randomNumber = Math.floor(randomNumber);
//         randomNumber = randomNumber.toString(16);
//         let randColor = randomNumber.padStart(6, 0);   
//         return `#${randColor.toUpperCase()}`
//     }

//     createDiv();
//     document.body.addEventListener('click', createDiv);

// }

// 10) Input (Type number) ve box (div 10px kvadrat) elave edin. Inputun icerisine reqem yazdiginiz qeder olculer boyusun ve ya kicilsin.
// Meselen 10px dir inputa 100yazdim olcusu 110px kvadrat olsun 


// solution 
// 10

// growDivByInput();

// function growDivByInput() {

//     document.body.style.setProperty('display', 'flex');
//     document.body.style.setProperty('flex-direction', 'column');
//     document.body.style.setProperty('justify-content', 'center');
//     document.body.style.setProperty('align-items', 'center');
//     document.body.style.setProperty('align-content', 'center');
//     document.body.style.setProperty('min-height', '100vh');
    
//     const createDiv = () => {
//         div = document.createElement('div');
//         div.style.setProperty('background-color','red');
//         div.style.setProperty('color','white');
//         div.style.setProperty('transition','all .5s');
//         div.style.setProperty('width','10px');
//         div.style.setProperty('height','10px');
//         document.body.append(div);
//     }

//     const createInput = () => {
//         input = document.createElement('input');
//         input.setAttribute('type','number');
//         input.addEventListener('keyup',grow);
//         input.style.setProperty('background-color','white');
//         input.style.setProperty('color','black');
//         input.style.setProperty('padding','1rem');
//         input.style.setProperty('display','block');
//         input.style.setProperty('border','1px solid red');
//         input.style.setProperty('margin-top','2rem');
//         input.style.setProperty('border-radius','10px');
//         document.body.append(input);
//     }    

//     function grow() {
//         let size =  Number(this.value);
//         let oldSize = Number(div.style.width.slice(0, div.style.width.length - 2));
//         div.style.width = size + oldSize + "px";
//         div.style.height = size + oldSize + "px";
//     }

//     createDiv();
//     createInput();

// }

