(function() {

    let highscore = [
        {
            nafn: "bob",
            score: 250
        },
        {
            nafn: "bubb",
            score: 150
        },
        {
            nafn: "arb",
            score: 470
        },
        {
            nafn: "boo",
            score: 176
        },
        {
            nafn: "aaa",
            score: 100
        }
    ];



    let slider = document.getElementById('slider');

    noUiSlider.create(slider, {
        start: [125, 280],
        connect: true,
        range: {
            'min': 0,
            'max': 500
        }
    });

}());