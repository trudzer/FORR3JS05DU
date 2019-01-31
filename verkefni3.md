```javascript
--------------------------------------------------------------------------------
1. Útskýrðu hvernig objectar tengjast í JavaScript.



--------------------------------------------------------------------------------
2. Útskýrðu kóðann línu fyrir línu.
    function Book(isbn) { //býr til function Book sem hefur paremeter isbn
        this.isbn = isbn; // skilgreinir að þessi parameter er fyrir þennan hlut
    }
    Book.prototype.getIsbn = function () { //fer og breytir kjarnanum á þessu function
        return "Isbn is " + this.isbn; //segir honum að skila frá sér þetta líka með hinu
                                        //sem var skilgreint í object-inu
    };
    let bookObject = new Book(12345); //býr til bookObject sem verður clone af function book
                                      //og gefur því gildi 12345

    

--------------------------------------------------------------------------------

3. Búðu til þrjár geimflaugar með "function" smið sem hafa mismunandi heiti

    function spaceship(speed, life, name) {
        let obj = {};
        obj.speed = 1;
        obj.life = 10;
        obj.name = "name";
        };

    let f1 = new spaceship();
    let f2 = new spaceship();
    let f3 = new spaceship();

    f1.speed = 2;
    f2.speed = 3;
    f3.speed = 4;

    f1.name = "ship 1";
    f2.name = "ship 2";
    f3.name = "ship 3";

    spaceship.prototype.fly = function() {
        return this.speed += 1;
    }

    f1.setLife = function() {
        return this.life += 1;
    }

--------------------------------------------------------------------------------

4. Gerðu það sama (sambærilegt) og síðasta lið en með notkun class. Notaðu
eftir þörfum; constructor, get, set, static, extends, super, mix-ins.
    
    class spaceship {
        
        constructor(speed, life, name) {
            this.speed = 1;
            this.life = 10;
            this.name = "name";
        }
    
        get fly() {
            return this.speed += 1;
        }
                     
        get setLife() {
            if(this.name == "ship 1") {
                return f1.life += 1;
            }
            
            else {
                return undefined;
            }
        }
    }

    let f1 = new spaceship();
    let f2 = new spaceship();
    let f3 = new spaceship();

    f1.speed = 2;
    f2.speed = 3;
    f3.speed = 4;

    f1.name = "ship 1";
    f2.name = "ship 2";
    f3.name = "ship 3";

    console.log("the space fleet consists of:\nname: ", f1.name, " ",f2.name," ",f3.name,"\nspeed:",f1.speed,"      ",f2.speed,"      ",f3.speed,"\nlife: ",f1.life,"     ",f2.life,"     ",f3.life)

--------------------------------------------------------------------------------
    
5. Hver er munurinn á Class og Prototype?
    
    