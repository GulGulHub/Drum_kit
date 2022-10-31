


/*



/////////////////////////////////////////////////////////

//Finally for one sound:

//get first audio
/*let grabSound = document.querySelector("audio");

console.log(grabSound);

document.addEventListener('keydown', function (e) {
    if (e.code == "KeyA") {
     grabSound.play(); 
     console.log("yes");
    }

})*/

//////////////////////////////////////////////////////////////
//if I want options with switch

/*let theSound = document.querySelectorAll("audio");
console.log(theSound);

let findKey = theSound[0]
console.log(findKey)

let sKey = theSound[1]
console.log(sKey)

let dKey = theSound[2]
console.log(dKey)

let fKey = theSound[3]
console.log(fKey)

let gKey = theSound[4]
console.log(gKey)

let hKey = theSound[5]
console.log(hKey)

let jKey = theSound[6]
console.log(jKey)

let kKey = theSound[7]
console.log(kKey)

let lKey = theSound[8]
console.log(lKey)



document.addEventListener('keydown', function (e){

let input = e.code
switch (input) {
  case "KeyA":
  findKey.play();
  break;
  case "KeyS":
  sKey.play();
  break;
  case "KeyD":
  dKey.play();
  break;
  case "KeyF":
  fKey.play();
  case "KeyG":
  gKey.play();
  case "KeyH":
  hKey.play();
  case "KeyJ":
  jKey.play();
  case "KeyK":
  kKey.play();
  case "KeyL":
  lKey.play();
}
})*/

//////////////////////////////////////////////////////////////////////////////////






// trying to make a fast function... 

let theSound = document.querySelectorAll("audio");
console.log(theSound)
let theValue = theSound[0].attributes[0].value;
let newArray =[]

document.addEventListener('keydown',function (e) {

for (let i=0; i < theSound.length; i++) {

  let allValues = theSound[i].attributes[0].value;
  newArray.push(allValues);
  console.log(newArray)

  if (newArray.includes(`${e.keyCode}`)){
         console.log("yeeeeeassss");
         console.log(newArray.includes(`${e.keyCode}`))
         let newIndex = newArray.indexOf(`${e.keyCode}`)
         theSound[newIndex].play()
         
  }
    else {console.log("nope")}
}
}
)



