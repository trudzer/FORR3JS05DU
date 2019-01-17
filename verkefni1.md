-----------------------------------------------------------------------------------------------------------------------------------------------------
```javascript
1. Hvað er null og undefined?
    þannig séð er null og undefined það "sama" en null er tómt og þarf að vera skilgreint sem eithvað, undefined þýðir að hlutuinn er bara óskilgreindur og hefur ekki verið settur sem neitt

-----------------------------------------------------------------------------------------------------------------------------------------------------

2. Hvað gerir 'use strict' í JavaScript kóða?
    "use strict" er nýr hlutur sem kom í ECMAScript version 5 og segir browser-inum að keyra í "strict mode" þar sem þú matt ekki hafa óskilgreindar breytur og málfræðin sem þú notar skiptir máli

-----------------------------------------------------------------------------------------------------------------------------------------------------

3. Hver er munurinn á let, var og const?
    "var" var það sem var notaðir í gamladaga fyrir breytur en vandamálið með "var" er að það var ekki hægt að gera local breytu svo þú þurftir að fara i gegnum langt process til að gera local breytur í gamladaga, "let" kom í staðinn fyrir "var" og "let" leyfir þér að búa til local breytur ánþess að smitast yfir í eithvað annað eins og "var" gæti, "const" þýðir að breytan getur ekki verið breytt, og er "constant"

-----------------------------------------------------------------------------------------------------------------------------------------------------

4. Endurskrifaðu eftirfarandi kóða með for lykkjunni.
    let x = 9;
    while (x >= 1) {
     console.log("hello " + x);
     x = x - 1;
    }

    for(x = 9; x >= 1; x--) {
        console.log("hello " + x);
    }

-----------------------------------------------------------------------------------------------------------------------------------------------------

5. Skilgreindu sama fallið á þrjá mismunandi vegu.
    function einn (a,b) {
        return (a+b);
    }
    einn(1,2) //3

    let einn = function(a,b) {
        return (a+b);
    };
    einn(1,2) //3

    let einn = (a,b) => a + b;
    alert(einn(1,2)); //3

-----------------------------------------------------------------------------------------------------------------------------------------------------

6. Útskýrðu hvað eftirfarandi kóði gerir, hvað gera svigarnir?
    (function() { alert('Hello World'); })(); 

    eftirfarandi kóði býr til nafnlaust function sem keyrir strax, sendir alert með textann "Hello World" í gegnum alert. svigarnir gera kleift fyrir þetta function til að keyra strax

-----------------------------------------------------------------------------------------------------------------------------------------------------

7.  Af hverju birtist 1 en ekki 10?
    Í hvaða röð er kóðinn keyrður í raun eftir að JS þýðandinn (e. interpreter) er búinn að fá
    hann til sín? Raðaðu kóðanum rétt fyrir JS þýðandann.
    "use strict";
    let a = 1;
    function b() {
     a = 10;
     return;
     function a() {}
    }
    b();
    console.log(a);

    þessi kóði er virkilega að vera keyrður svona

    "use strict";
    function b() {
     a = 10;
     return;
     function a() {}
    }
    let a = 1;
    b();
    console.log(a);

    út af því við erum að nota "use strict" þa fellur niður "a = 10;" og ef það væri "let a = 10;" inní "function"-inu myndi koma upp SyntaxError

-----------------------------------------------------------------------------------------------------------------------------------------------------

8. Leystu lið 20 í Lesson 6 (Arrays) á Udacity https://classroom.udacity.com/courses/ud803
    
    
    var test = [12, 929, 11, 3, 199, 1000, 7, 1, 24, 37, 4,
        19, 300, 3775, 299, 36, 209, 148, 169, 299,
        6, 109, 20, 58, 139, 59, 3, 1, 139
    ];

    // Write your code here
    test.forEach(function(t){
       if(t % 3 === 0 ) {
           t = t + 100
           console.log(t);
       }
    });

-----------------------------------------------------------------------------------------------------------------------------------------------------

9. Leystu lið 22 í Lesson 6 (Arrays) á Udacity https://classroom.udacity.com/courses/ud803
    
    var bills = [50.23, 19.12, 34.01,
    100.11, 12.15, 9.90, 29.11, 12.99,
    10.00, 99.22, 102.20, 100.10, 6.77, 2.22
    ];

    let totals = bills.map(x => (x * 1.15).toFixed(2));

    console.log(totals);

-----------------------------------------------------------------------------------------------------------------------------------------------------

10. Skrifaðu forrit í JavaScript sem sprengir staflan (stack overflow).

    function a() {
	   b();
    }

    function b() {
        a();
    }
    a(); //Uncaught RangeError: Maximum call stack size exceeded
-----------------------------------------------------------------------------------------------------------------------------------------------------