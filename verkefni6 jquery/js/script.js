(function() {

    let highscore = [
        {
            nafn: "arb",
            score: 470
        },
        {
            nafn: "bob",
            score: 250
        },
        
        
        {
            nafn: "boo",
            score: 176
        },
        {
            nafn: "bubb",
            score: 150
        },
        {
            nafn: "aaa",
            score: 100
        }
    ];
    
    let rows = [],                   
    $min = $('#value-min'),       
    $max = $('#value-max'),          
    $list = $('#highscore');

    function makeRows() {                 
        highscore.forEach(function(highscore) {  
          let $row = $('<li></li>');       
          $row.append( $('<li></li>').text(highscore.nafn)); 
          $row.append( $('<li></li>').text(highscore.score));
          $row.append( $('<li></li>'));
           rows.push({                       
            highscore: highscore,                
            $element: $row                  
          });
        });
    }

    function appendRows() {             
        let $libody = $('<li></li>');  
        rows.forEach(function(row) {        
          $libody.append(row.$element);      
        });
        $list.append($libody);             
    }

    function update(min, max) {           
        rows.forEach(function(row) {        
          if (row.highscore.score >= min && row.highscore.score <= max) { 
            row.$element.show();            
          } else {                         
            row.$element.hide();            
          }
        });
    }

  function init() {
    // Set up the slide control                     
    $('#slider').noUiSlider({           
      range: [0, 500], start: [125, 280], handles: 2, margin: 50, connect: true,
      serialization: {to: [$min, $max],resolution: 1}
    }).change(function() { update($min.val(), $max.val()); });      

    makeRows();                          
    

    appendRows();                     
    update($min.val(), $max.val());      
  }

  $(init);                                
}());