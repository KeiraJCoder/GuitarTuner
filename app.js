// Wyłowałanie dziwięku od wcisnięcia klawisza
document.addEventListener("keydown", function(event) {
    console.log(event.key);
    makeSound(event.key);
    animate(event.key);
  });
  
  //Pobranie przycisku
  let button = document.getElementsByClassName("string");
  
  // Funkcja wywołująca dziwiek po kliknięciu myszką
  for (let i = 0; i <= button.length; i++) {
    button[i].addEventListener("click", function() {
      let buttonInnerHTML = this.innerHTML;
      makeSound(buttonInnerHTML);
      animate(buttonInnerHTML);
    });
  }


function makeSound(key) {
    switch (key) {
      case "e":
        let eString = new Audio("https://github.com/KeiraJCoder/GuitarTuner/blob/main/E.mp3?raw=true");
        eString.play();
        break;
      case "a":
        let aString = new Audio("https://github.com/KeiraJCoder/GuitarTuner/blob/main/A.mp3?raw=true");
        aString.play();
        break;
      case "d":
        let dString = new Audio("https://github.com/KeiraJCoder/GuitarTuner/blob/main/D.mp3?raw=true");
        dString.play();
        break;
      case "g":
        let gString = new Audio("https://github.com/KeiraJCoder/GuitarTuner/blob/main/G.mp3?raw=true");
        gString.play();
        break;
      case "b":
        let bString = new Audio("https://github.com/KeiraJCoder/GuitarTuner/blob/main/B.mp3?raw=true");
        bString.play();
        break;
      case "2":
        let e2String = new Audio("https://github.com/KeiraJCoder/GuitarTuner/blob/main/E2.mp3?raw=true");
        e2String.play();
        break;
      default:
        alert("Attention, wrong button clicked!");
        break;
    }
  }

  function animate(key) {
    let activeButton = document.querySelector("." + key);
    activeButton.classList.toggle("pressed");
  
    setTimeout(function(){activeButton.classList.toggle("pressed");}, 200);
  }
  