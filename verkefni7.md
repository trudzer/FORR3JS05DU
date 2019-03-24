```javascript
//01 - JavaScript Drum Kit
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>JS Drum Kit</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>


  <div class="keys">
    <div data-key="65" class="key">
      <kbd>A</kbd>
      <span class="sound">clap</span>
    </div>
    <div data-key="83" class="key">
      <kbd>S</kbd>
      <span class="sound">hihat</span>
    </div>
    <div data-key="68" class="key">
      <kbd>D</kbd>
      <span class="sound">kick</span>
    </div>
    <div data-key="70" class="key">
      <kbd>F</kbd>
      <span class="sound">openhat</span>
    </div>
    <div data-key="71" class="key">
      <kbd>G</kbd>
      <span class="sound">boom</span>
    </div>
    <div data-key="72" class="key">
      <kbd>H</kbd>
      <span class="sound">ride</span>
    </div>
    <div data-key="74" class="key">
      <kbd>J</kbd>
      <span class="sound">snare</span>
    </div>
    <div data-key="75" class="key">
      <kbd>K</kbd>
      <span class="sound">tom</span>
    </div>
    <div data-key="76" class="key">
      <kbd>L</kbd>
      <span class="sound">tink</span>
    </div>
  </div>

  <audio data-key="65" src="sounds/clap.wav"></audio>
  <audio data-key="83" src="sounds/hihat.wav"></audio>
  <audio data-key="68" src="sounds/kick.wav"></audio>
  <audio data-key="70" src="sounds/openhat.wav"></audio>
  <audio data-key="71" src="sounds/boom.wav"></audio>
  <audio data-key="72" src="sounds/ride.wav"></audio>
  <audio data-key="74" src="sounds/snare.wav"></audio>
  <audio data-key="75" src="sounds/tom.wav"></audio>
  <audio data-key="76" src="sounds/tink.wav"></audio>

<script>
  function removeTransition(e) { // býr til function removeTransition með event
    if (e.propertyName !== 'transform') return; //ef propertyName er transform, hunsa þessu
    e.target.classList.remove('playing'); //eftir þú ýtir á lykilinn tekur þetta transition af lykilinum
  }
  function playSound(e) { //býr til function playSound með event function
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`); //nær í keyCode fyrir lykilinn sem er valinn og spilar rétta hljóð
    const key = document.querySelector(`div[data-key="${e.keyCode}"]`); //nær í keyCode fyrir div-ið
    if (!audio) return; //stoppar function-ið frá að spila
    key.classList.add('playing'); //bætir key við í class lista playing
    audio.currentTime = 0; //spóla til baka svo það þarf ekki að bíða eftir hljóða að enda
    audio.play(); //spilar audio
  }
  const keys = Array.from(document.querySelectorAll('.key')); //nær í alla lyklanna sem hafa .key
  keys.forEach(key => key.addEventListener('transitionend', removeTransition)); //þegar ýtt er af lykli stoppar það transition-ið á lyklinum
  window.addEventListener('keydown', playSound); //þegar ýtt er niður á lykilinn spilar það hljóð
</script>


</body>
</html>

---------------------------------------------------------------------------------------------------------------------------------------------------

//CSS + JS Clock
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>JS + CSS Clock</title>
</head>
<body>


    <div class="clock">
      <div class="clock-face">
        <div class="hand hour-hand"></div>
        <div class="hand min-hand"></div>
        <div class="hand second-hand"></div>
      </div>
    </div>


  <style>
    html {
      background: #018DED url(http://unsplash.it/1500/1000?image=881&blur=50);
      background-size: cover;
      font-family: 'helvetica neue';
      text-align: center;
      font-size: 10px;
    }
    body {
      margin: 0;
      font-size: 2rem;
      display: flex;
      flex: 1;
      min-height: 100vh;
      align-items: center;
    }
    .clock {
      width: 30rem;
      height: 30rem;
      border: 20px solid white;
      border-radius: 50%;
      margin: 50px auto;
      position: relative;
      padding: 2rem;
      box-shadow:
        0 0 0 4px rgba(0,0,0,0.1),
        inset 0 0 0 3px #EFEFEF,
        inset 0 0 10px black,
        0 0 10px rgba(0,0,0,0.2);
    }
    .clock-face {
      position: relative;
      width: 100%;
      height: 100%;
      transform: translateY(-3px); /* account for the height of the clock hands */
    }
    .hand {
      width: 50%;
      height: 6px;
      background: black;
      position: absolute;
      top: 50%;
      transform-origin: 100%;
      transform: rotate(90deg);
      transition: all 0.05s;
      transition-timing-function: cubic-bezier(0.1, 2.7, 0.58, 1);
    }
</style>

<script>
  const secondHand = document.querySelector('.second-hand'); //býr til constant secondHand og nær í það
  const minsHand = document.querySelector('.min-hand'); //býr til constant minsHand og nær í það
  const hourHand = document.querySelector('.hour-hand'); //býr til constant hourHand og nær í það
  function setDate() { //býr til function setDate
    const now = new Date(); // býr til constant now sem verður new Date
    const seconds = now.getSeconds(); // býr til constant seconds sem nær í sekúndu function
    const secondsDegrees = ((seconds / 60) * 360) + 90; // býr til constant secondsDegrees og lætur klukkuna byrja á réttum stað og hafa 60 stopp
    secondHand.style.transform = `rotate(${secondsDegrees}deg)`; //lætur secondHand fara í hring
    const mins = now.getMinutes(); //býr til constant mins og gerir það að mínutu
    const minsDegrees = ((mins / 60) * 360) + ((seconds/60)*6) + 90; // lætur það byrja á réttum stað og hafa 60 stopp
    minsHand.style.transform = `rotate(${minsDegrees}deg)`; // lætur minsHand snúast í hring
    const hour = now.getHours(); // býr til constant hour og gerir það að klukkutíma
    const hourDegrees = ((hour / 12) * 360) + ((mins/60)*30) + 90; // lætur hourDegrees byrja á réttum stað og hafa 12 stopp
    hourHand.style.transform = `rotate(${hourDegrees}deg)`; // lætur hourHand fara í hring
  }
  setInterval(setDate, 1000); //lætur function-ið keyra hverja sekúndu
  setDate(); //keyrir function-ið
</script>
</body>
</html>

---------------------------------------------------------------------------------------------------------------------------------------------------

//Playing with CSS Variables and JS
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Scoped CSS Variables and JS</title>
</head>
<body>
  <h2>Update CSS Variables with <span class='hl'>JS</span></h2>

  <div class="controls">
    <label for="spacing">Spacing:</label>
    <input id="spacing" type="range" name="spacing" min="10" max="200" value="10" data-sizing="px">

    <label for="blur">Blur:</label>
    <input id="blur" type="range" name="blur" min="0" max="25" value="10" data-sizing="px">

    <label for="base">Base Color</label>
    <input id="base" type="color" name="base" value="#ffc600">
  </div>

  <img src="https://source.unsplash.com/7bwQXzbF6KE/800x500">

  <style>
    :root {
      --base: #ffc600;
      --spacing: 10px;
      --blur: 10px;
    }
    img {
      padding: var(--spacing);
      background: var(--base);
      filter: blur(var(--blur));
    }
    .hl {
      color: var(--base);
    }
    /*
      misc styles, nothing to do with CSS variables
    */
    body {
      text-align: center;
      background: #193549;
      color: white;
      font-family: 'helvetica neue', sans-serif;
      font-weight: 100;
      font-size: 50px;
    }
    .controls {
      margin-bottom: 50px;
    }
    input {
      width: 100px;
    }
  </style>

  <script>
    const inputs = document.querySelectorAll('.controls input'); //býr til constant inputs og nær í öll input-in á skjánum
    function handleUpdate() { // býr til function handleUpdate
      const suffix = this.dataset.sizing || ''; //býr til constant suffix og tengir sizing eða ekkert við þetta dataset
      document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix); //tekur inn input frá síðunni og update-ar myndina og setur value frá suffix fyrir það
    }
    inputs.forEach(input => input.addEventListener('change', handleUpdate)); //ef gildi á input breytist, update function
    inputs.forEach(input => input.addEventListener('mousemove', handleUpdate)); //þegar þu slide-ar input með músinni, update function
  </script>


</body>
</html>
