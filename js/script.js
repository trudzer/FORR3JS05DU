function createNode(element) {
  return document.createElement(element);
}

function append(parent, el) {
return parent.appendChild(el);
}
const ul = document.getElementById('concerts'); //nær í concerts id úr html skjalinu
const url = 'https://apis.is/concerts'; //nær í api dótið af netinu
fetch(url) //segir því að ná í url-inn
.then((resp) => resp.json()) //leyfa okkur að vinna með gögnin
.then(function(data) { //búa til fall fyrir allt þetta
let concerts = data.results; //búa til breytu til að ná í gögnum
	return concerts.map(function(concert) { //gerir array function fyrir concerts
	  let li = createNode('li'), //býr til li tag
	  	  img = createNode('img'), //býr til image tag
	      span = createNode('span'); //býr til span tag
	  img.src = concert.imageSource; //segir að image source er concert image source úr api
	  moment.locale('is'); //setur íslenska dagsetningu
	  let date = moment(concert.dateOfShow).format('LLL'); //setur upp dagsetninguna í þæginlegt format
	  concert.dateOfShow = date; //tengir concert date of api við moment date
	  span.innerHTML = `${concert.eventDateName} ${concert.name} <br /> ${concert.dateOfShow} <br /> ${concert.userGroupName} ${concert.eventHallName}`; //býr til allt á vefsíðunni
	  append(li, img); //setur upp image í lista
	  append(li, span); //setur upp span í lista
	  append(ul, li); //setur upp lista inní ul
	})
})
.catch(function(error) { //ef error
console.log(JSON.stringify(error)); //skrifa út error
});

function searchFunction() { //býr til fall fyrir search bar
	let input, filter, ul, li, a, i, txtValue; //býr til gildi

	input = document.getElementById('search'); //tengir input við search bar
	filter = input.value.toUpperCase(); //nær í value úr search bar
	ul = document.getElementById('concerts'); //nær í ul úr concerts id
	li = document.getElementsByTagName('li'); //nær í li tag
	
	for (i = 0; i < li.length; i++) { //for loop fyrir að skrifa út search
		a = li[i].getElementsByTagName('span')[0]; //tengir breytuna a við span nafn á tónleikum 
		txtValue = a.textContent || a.innerText; //gerir txtValue að textanum í span
		if (txtValue.toUpperCase().indexOf(filter) > -1) { //ef filter textContent er það sama
			li[i].style.display = ""; //sýna það sem passar
		} else { 
			li[i].style.display = "none"; //fela allt annað
		}
  	}
};

$('input[name="dates"]').daterangepicker(); //Jquery fyrir date picker sem leitar af id dates
$(function() { //býr til function
  $('input[name="daterange"]').daterangepicker({ //nær í input daterange fyrir daterangepicker
    opens: 'left' //opnar á vinstri
  }, function(start, end, label) { //býr til fall fyrir byrjunar stað, enda stað og label
    console.log("A new date selection was made: " + start.format('YYYY-MM-DD') + ' to ' + end.format('YYYY-MM-DD')); //loggar að ný dagsetning var valin
  });
});
