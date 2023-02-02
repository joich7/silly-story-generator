// 1. COMPLETE VARIABLE AND FUNCTION DEFINITIONS

 const customName = document.getElementById('customname');
const randomize = document.querySelector('.randomize');
const story = document.querySelector('.story');


function randomValueFromArray(array){
  const random = Math.floor(Math.random()*array.length);
  return array[random];
}

// 2. RAW TEXT STRINGS
const storyText = "It was 94 fahrenheit outside, so :insertx: went for a walk. When they got to :inserty:, they stared in horror for a few moments, then :insertz:. Bob saw the whole thing, but was not surprised — :insertx: weighs 300 pounds, and it was a hot day.";

const insertx = ["Michael Jackson", "Betty White", "Father Christmas"];

const inserty = ["the soup kitchen","Wakanda","the void"];

const insertz = ["spontaneously combusted", "melted into a puddle on the sidewalk" ,"turned into a slug and crawled away"];



// 3. EVENT LISTENER AND PARTIAL FUNCTION DEFINITION 

randomize.addEventListener('click', result);


    

function result() {

  let newStory = storyText;
  let xItem = randomValueFromArray(insertx); 
  let yItem = randomValueFromArray(inserty);
  let zItem = randomValueFromArray(insertz);
    
  if(customName.value !== '') {
    const name = customName.value;
    newStory = newStory.replaceAll("insertx", name)

  }
  else{
    newStory = newStory.replaceAll("insertx", xItem)
  }

  if(document.getElementById("uk").checked) {
    const weight = Math.round(300/14)+" "+"stones" ;
    const temperature =  Math.round(94/2.205)+" "+"centigrade";
    newStory = newStory.replace("94 fahrenheit", temperature)
    newStory = newStory.replace("300 pounds", weight)
  }
  newStory = newStory.replace("inserty",yItem)
  newStory = newStory.replace("insertz",zItem)

  story.textContent = newStory;
  story.style.visibility = 'visible';
}
