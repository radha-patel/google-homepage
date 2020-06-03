shuff = document.getElementById("shuffle");
shuff.addEventListener("mouseover", shuffleIt);
shuff.addEventListener("mouseout", shuffleStop);
feelings = ["Hungry", "Happy", "Excited", "Doodley", "Animated", "Energetic", "Ecstatic"]
choice = "";

function shuffleIt() {
    choice = Math.floor(Math.random()*7);
    shuff.innerHTML = "I'm Feeling " + feelings[choice]
}

function shuffleStop() {}
