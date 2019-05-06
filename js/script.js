function createNode(element) {
  return document.createElement(element);
}

function append(parent, el) {
return parent.appendChild(el);
}
const ul = document.getElementById('concerts');
const url = 'https://apis.is/concerts';
fetch(url)
.then((resp) => resp.json())
.then(function(data) {
let concerts = data.results;
	return concerts.map(function(concert) {
	  let li = createNode('li'),
	  	  img = createNode('img'),
	      span = createNode('span');
	  img.src = concert.imageSource;
	  moment.locale('is');
	  let date = moment(concert.dateOfShow).format('LLL');
	  concert.dateOfShow = date;
	  span.innerHTML = `${concert.eventDateName} ${concert.name} <br /> ${concert.dateOfShow} <br /> ${concert.userGroupName} ${concert.eventHallName}`;
	  append(li, img);
	  append(li, span);
	  append(ul, li);
	})
})
.catch(function(error) {
console.log(JSON.stringify(error));
});

function searchFunction() {
	let input, filter, ul, li, a, i, txtValue;

	input = document.getElementById('search');
	filter = input.value.toUpperCase();
	ul = document.getElementById('concerts');
	li = document.getElementsByTagName('li');
	
	for (i = 0; i < li.length; i++) {
		a = li[i].getElementsByTagName('span')[0];
		txtValue = a.textContent || a.innerText;
		if (txtValue.toUpperCase().indexOf(filter) > -1) {
			li[i].style.display = "";
		} else {
			li[i].style.display = "none";
		}
  	}
};

$('input[name="dates"]').daterangepicker();
$(function() {
  $('input[name="daterange"]').daterangepicker({
    opens: 'left'
  }, function(start, end, label) {
    console.log("A new date selection was made: " + start.format('YYYY-MM-DD') + ' to ' + end.format('YYYY-MM-DD'));
  });
});