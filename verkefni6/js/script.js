(function() { //pure JS, slider virkar en niðurstöður vilja ekki birtast almennilega

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

    let rows = [];
    let min = document.getElementById('value-min');
    let max = document.getElementById('value-max');
    let list = document.getElementById('highscore');

    function makeRows() {
        highscore.forEach(function(highscore) {
            let row = document.createElement('li');
            row.append( document.createElement('li').innerHTML = (highscore.nafn) + " - ");
            row.append( document.createElement('li').innerHTML = (highscore.score));
            rows.push({
                highscore: highscore,
                style: row
            });
        });
    }

    function appendRows() {
        let libody = document.createElement('li');
        rows.forEach(function(row) {
            libody.append(row.style);
        });
        list.append(libody);
    }

    function update(min, max) {
        rows.forEach(function(row) {
            if (row.highscore.score >= min.value && row.highscore.score <= max.value) {
                row.style.display = "block";
                console.log("hi");
            } else {
                row.style.display = "none";
                console.log("bye");
            }
        });
    }

    function init() {
        makeRows();
        appendRows();
        update(min, max);
    }

    let slider = document.getElementById('slider');

        noUiSlider.create(slider, {
            start: [125, 280],
            connect: true,
            margin: 250,
            range: {
                'min': 0,
                'max': 500
            }
        });

        
        slider.noUiSlider.on('update', function (values, handle) {
        update(min.value, max.value);
        let value = values[handle];

        if(handle) {
            max.value = value;
        } else {
            min.value = value;
        }
        });

        min.addEventListener('change', function () {
            slider.noUiSlider.set[this.value, null];
        })

        max.addEventListener('change', function () {
            slider.noUiSlider.set[null, this.value];
        });

    init();
}());
