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