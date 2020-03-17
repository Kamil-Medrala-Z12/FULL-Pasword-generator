     /*pobranie danych do wyboru typu danych*/
     var zabranie = document.getElementById("Wybur");
     var wynik = document.getElementById("Wynik");

     var Zebranie_1 = document.getElementById("creed");
     var Zebranie_2 = document.getElementById("creed_1");
     var Zebranie_3 = document.getElementById("creed_2");

     var P_Length=document.getElementById("Numer");









     var cyfry = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
     var litery = ["A", "B", "C", "D", "E", "F", "G", "H", "i", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "L", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
     var znaki_specjalne = ["!", "@", "#", "$", "%", "&", ")", "*", "(", ",", "?", "/", "\",", ";", "<", ">"];
     var six = ["4", "A", "1", "B", "2", "C", "3", "D", "5", "E", "6", "7", "F", "8", "9"];

     /*pobranie danych do losowania cz 2*/
     var pobrane = document.getElementById("Wynik");
     var pobrane_2 = document.getElementById("Numer");

     var I_L = document.getElementById("I_L");
     var I_C = document.getElementById("I_C");
     var I_ZS = document.getElementById("I_ZS");

     /*usuniecie pola legnth*/
     var Delete = document.getElementById("B_aside");

     function klik() {
         if (zabranie.options[4].selected == true) {
             Zebranie_1.style.display = "block";
             Zebranie_2.style.display = "block";
             Zebranie_3.style.display = "block";
             Delete.style.display = "none";
             P_Length.style.display="none";

         } else if (zabranie.options[4].selected == false) {
             Zebranie_1.style.display = "none";
             Zebranie_2.style.display = "none";
             Zebranie_3.style.display = "none";
             Delete.style.display = "block";
             P_Length.style.display="block";
         }


     };




     //losowanie liczb//
     function klik_2() {






         var los = "";


         if (zabranie.options[1].selected == true && pobrane_2.value > 4 && pobrane_2.value < 21) {






             for (var i = 1; i <= pobrane_2.value; i++) {



                 los += Math.floor(Math.random() * cyfry.length);
                 pobrane_2.style = "border-color:black";

             }
             pobrane.innerHTML = los;
         } else if (zabranie.options[1].selected == true && pobrane_2.value <= 4) {
             alert("Podana wartość jest za niska");
             pobrane_2.style = "border-color:red";
         } else if (zabranie.options[1].selected == true && pobrane_2.value == "-0") {
             alert("Podana wartość jest za niska");
             pobrane_2.style = "border-color:red";
         } else if (zabranie.options[1].selected == true && pobrane_2.value >= 21) {
             alert("Podana wartość jest za wysoka");
             pobrane_2.style = "border-color:red";
         } else if (zabranie.options[2].selected == true && pobrane_2.value > 4 && pobrane_2.value < 21) {
             for (var i = 1; i <= pobrane_2.value; i++) {

                 var konwersja = Math.floor(Math.random() * litery.length);

                 los += litery[konwersja];
                 pobrane_2.style = "border-color:black";

             }
             pobrane.innerHTML = los;
         } else if (zabranie.options[2].selected == true && pobrane_2.value <= 4) {
             alert("Podana wartość jest za niska");
             pobrane_2.style = "border-color:red";
         } else if (zabranie.options[2].selected == true && pobrane_2.value >= 21) {
             alert("Podana wartość jest za wysoka");
             pobrane_2.style = "border-color:red";
         } else if (zabranie.options[3].selected == true && pobrane_2.value > 4 && pobrane_2.value < 21) {
             for (var i = 1; i <= pobrane_2.value; i++) {

                 var konwersja_2 = Math.floor(Math.random() * six.length);

                 var wys = six[konwersja_2];

                 pobrane_2.style = "border-color:black";

                 los += wys;

             }
             pobrane.innerHTML = los;
         } else if (zabranie.options[3].selected == true && pobrane_2.value <= 4) {
             alert("Podana wartość jest za niska (Podaj coś z zakresu od 5 do 20");
             pobrane_2.style = "border-color:red";
         } else if (zabranie.options[3].selected == true && pobrane_2.value >= 21) {
             alert("Podana wartość jest za wysoka (Podaj z zakresu od 5 do 20)");
             pobrane_2.style = "border-color:red";
         }








     }



     function opcja_4() {
         var los_2 = "";




         if (zabranie.options[4].selected == true && I_L.value >= 0 && I_L.value <= 20 && I_C.value >= 0 && I_C.value <= 20 && I_ZS.value >= 0 && I_ZS.value <= 20 && I_L.value != "-0" && I_C.value != "-0" && I_ZS.value != "-0") {





             for (var A = 0; A < I_L.value; A++) {

                 var los_I_L = Math.floor(Math.random() * litery.length);

                 var wylosowanie = litery[los_I_L];
                 los_2 += wylosowanie;


                 I_L.style = "border-color:black";


             }

             for (var A = 0; A < I_C.value; A++) {


                 var los_I_C = Math.floor(Math.random() * cyfry.length);

                 var wylosowanie = cyfry[los_I_C];
                 los_2 += wylosowanie;


                 I_C.style = "border-color:black";


             }

             for (var A = 0; A < I_ZS.value; A++) {

                 var los_I_ZS = Math.floor(Math.random() * znaki_specjalne.length);

                 var wylosowanie = znaki_specjalne[los_I_ZS];
                 los_2 += wylosowanie;

                 I_ZS.style = "border-color:black";
             }




         }






         pobrane.innerHTML = los_2;

         if (zabranie.options[4].selected == true && I_L.value > 20) {
             alert("Argument z ilością liter przkroczył wartość 20.Zmniejsz wartość");
             I_L.style = "border-color:red";
         } else if (zabranie.options[4].selected == true && I_C.value > 20) {
             alert("Argument z ilością cyfer przkroczył wartość 20.Zmniejsz wartość");
             I_C.style = "border-color:red";
         } else if (zabranie.options[4].selected == true && I_ZS.value > 20) {
             alert("Argument z ilością znaków specjalnych przkroczył wartość 20.Zmniejsz wartość");
             I_ZS.style = "border-color:red";
         } else if (zabranie.options[4].selected == true && I_L.value < 0) {
             alert("Zwiększ Długość liter");
             I_L.style = "border-color:red";
         } else if (zabranie.options[4].selected == true && I_L.value == '-0') {
             alert("Nieprawidłowa wartość pola długości liter");
             I_L.style = "border-color:red";
         } else if (zabranie.options[4].selected == true && I_C.value == '-0') {
             alert("Nieprawidłowa wartość pola długości cyfer");
             I_C.style = "border-color:red";
         } else if (zabranie.options[4].selected == true && I_ZS.value == '-0') {
             alert("Nieprawidłowa wartość pola długości znaków specjalnych");
             I_ZS.style = "border-color:red";
         } else if (zabranie.options[4].selected == true && I_C.value < 0) {
             alert("Zwiększ Długość cyfer");
             I_C.style = "border-color:red";
         } else if (zabranie.options[4].selected == true && I_ZS.value < 0) {
             alert("Zwiększ Długość znaków specjalnych");
             I_ZS.style = "border-color:red";
         }

     }

     document.getElementById("end").addEventListener("keypress", function() {
         opcja_4();
         klik_2();
     })


     document.getElementById("end").addEventListener("click", function() {
         opcja_4();
         klik_2();
     })