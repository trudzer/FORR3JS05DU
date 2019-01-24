--------------------------------------------------------------------------------------------
```javascript
1. Búðu til object með upplýsingar um þig; nafn, kennitala, heimilsfang, heimasími og gsm.
	
	let User = {
		name: "john smith",
		kt: "1234567890",
		homeAd: "street 123",
		homePhone: "1234567",
		cellPhone: "7654321"
	}

--------------------------------------------------------------------------------------------

2. Notaðu for…in lykkjuna til að birta öll eigindin (e. property) ásamt gildum í objectinu í lið 1.
	
	Object.keys(User).forEach(function(key) {
    console.log(key, User[key]);
	});

--------------------------------------------------------------------------------------------

3. Bættu við aðferð í objectið sem þú gerðir í lið 1. Aðferðin á að skila streng sem inniheldur
   nafn og aldur.

    User.age = 20;
	User.nameAge = function () {
		return "name: " + this.name + " \nage: " + this.age;
	};
	User.nameAge();

--------------------------------------------------------------------------------------------

4. Prentaðu út með console.log() Nonni.
	let family = {
		"parents":
			{
				"fathers": [{"name":"Jakob"},{"name":"Nonni"}],
				"mothers":[{"name":"Rakel"},{"name":"Sara"}]
			}
		 };

	console.log(family.parents.fathers[1]);

--------------------------------------------------------------------------------------------

5. Leystu lið 8 í lesson 7 - Objects á Udacity 

	var breakfast = {
	    name: "The Lumberjack",
	    price: "$9.95",
	    ingredience : ["eggs", "sausage", "toast", "hashbrowns", "pancakes"]
	};

--------------------------------------------------------------------------------------------

6. Leystu lið 9 í lesson 7 - Objects á Udacity

	var savingsAccount = {
	    balance: 1000,
	    interestRatePercent: 1,
	    deposit: function addMoney(amount) {
	        if (amount > 0) {
	            savingsAccount.balance += amount;
	        }
	    },
	    withdraw: function removeMoney(amount) {
	        var verifyBalance = savingsAccount.balance - amount;
	        if (amount > 0 && verifyBalance >= 0) {
	            savingsAccount.balance -= amount;
	        }
	    },
	    // your code goes here
	    printAccountSummary: function(){
	        return "Welcome!\nYour balance is currently $" + savingsAccount.balance + " and your interest rate is " + savingsAccount.interestRatePercent +"%.";
	    }
	};

	console.log(savingsAccount.printAccountSummary());

--------------------------------------------------------------------------------------------

7. Leystu lið 12 í lesson 7 - Objects á Udacity 
	
	var donuts = [
	    { type: "Jelly", cost: 1.22 },
	    { type: "Chocolate", cost: 2.45 },
	    { type: "Cider", cost: 1.59 },
	    { type: "Boston Cream", cost: 5.99 }
	];

	// your code goes here
	donuts.forEach(function(donut) {
	    console.log(donut.type + " donuts cost $" + donut.cost + " each"); 
	});

--------------------------------------------------------------------------------------------

8. Eru öll eigindi (e. properties) í sömu röð og þeim var bætt í object, rökstuddu?

	//já því þeim er ekki raðað upp á nýtt, object er partur af týpunni Object sem er óraðað safn af eigindum sem
	hefur primitive value, object eða function.

--------------------------------------------------------------------------------------------

9. Útskýrðu hvað eftirfarandi kóði gerir.
	
	let user = { name: "John" };
	let admin = user;

	//býr til Object "user" með property (name: "John") og síðan býr til "admin" sem verður clone af Object-inu "user"

--------------------------------------------------------------------------------------------

10. Afhverju virkar eftirfarandi?
	
	const user = {
		 name: "John"
		};
	user.age = 25;
	alert(user.age); // 25

	//kóðinn bætir við annað property við Object-ið "user" sem heitir "age" og skilgreinir það sem 25
