const textArray = [
  "“Not only are we in the Universe, the Universe is in us. I don’t know of any deeper spiritual feeling than what that brings upon me.” — Neil deGrasse Tyson",
  "“Learn how to see. Realize that everything connects to everything else.” — Leonardo DaVinci",
  "“The world is full of magical things patiently waiting for our wits to grow sharper.” — Eden Phillpotts",
  "“We are the scientists, trying to make sense of the stars inside us.” — Christopher Poindexter",
  "“To the mind that is still, the whole universe surrenders.” — Lao Tzu",
  "“The Universe is saying: ‘Allow me to flow through you unrestricted, and you will see the greatest magic you have ever seen.’” — Klaus Joehle",
  "“Everything amazing about the universe is inside of you, and the two are inseparable.” — Carl Sagan",
  "“The universe took its time on you / crafted you precisely so you could offer the world / something distinct from everyone else / so when you doubt how you were created / you doubt an energy greater than us both.” — Rupi Kaur",
  "“Everything you’ll ever need to know is within you; the secrets of the universe are imprinted on the cells of your body.” — Dan Millman",
  "“Do not feel lonely, the entire universe is inside of you.” — Rumi",
  "“There are as many atoms in a single molecule of your DNA as there are stars in the typical galaxy. We are, each of us, a little universe.” — Neil deGrasse Tyson",
  "“She was half human… half universe.” — A.R. Lucas",
  "“You are not IN the universe, you ARE the universe, an intrinsic part of it. Ultimately, you are not a person, but a focal point where the universe is becoming conscious of itself. What an amazing miracle.” — Eckhart Tolle",
  "“The universe buries strange jewels deep within us all, and then stands back to see if we can find them.” — Elizabeth Gilbert",
  "“We are not figuratively, but literally stardust.” — Neil deGrasse Tyson",
  "“Everything in the universe has a rhythm, everything dances.” — Maya Angelou"
]

function changeText(){
  var textToChange = document.getElementById("p1").innerHTML = textArray[Math.floor(Math.random() * textArray.length)];
}