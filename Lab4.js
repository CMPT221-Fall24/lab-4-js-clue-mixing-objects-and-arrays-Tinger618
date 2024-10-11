let suspectsArray = new Array("Kevin Weinman", "Evan Tinger", "Awais Razaque", "Joe Biden", "Kamala Harris", "20th President of the United States James Garfield");
let roomsArray = new Array("the Dining Hall", "Hancock", "Midrise", "Dyson", "Donnelly","51 Fulton","Lowell Thomas","Marian Residence Hall", "Steel Plant", "Leo Residence Hall");
let weaponsArray = new Array('an Average Dining Hall Meal', "the Marist Brand Crowbar", "Tuition Prices", "a Pop Quiz", "Lab 4", "Joe Biden (as a weapon)", "the Marist Brand Gun", "the Marist Brand Automobile");
        
document.getElementById("CreateGame").addEventListener("click", () => {
    /* When the html "Create Mystery" button is clicked, the function pickMystery() is called and an object is assigned to the Mystery variable. Then each property of object is assigned a random element from the related array using pickRandom().
    Finally the mystery is revealed, as revealMystery() is called with object as the parameter to alert the world of the situation regarding Frankie's death */
    let Mystery  = pickMystery();
    Mystery.Obj_suspect = pickRandom(suspectsArray);
    Mystery.Obj_room = pickRandom(roomsArray);
    Mystery.Obj_weapon = pickRandom(weaponsArray);
    revealMystery(Mystery);
});

function pickRandom(p_array) {
    /* This function takes a random value between 0 and 1, mulitplies it by the length of the array, and then floors it, creating a random index of the array
    If for some reason it gets a perfect 1, then it will just return index length-1, as array[length] is not an element on any array */
    let temp_random = Math.random() * p_array.length;
    if (temp_random === p_array.length) {
        return  p_array[(p_array.length - 1)];
    } else {
        return p_array[Math.floor(temp_random)]; 
    }
}
        
function pickMystery() {
/* Creates the object newMystery with all the neccessary Clue properties, eaching containing a placeholder value for later */
let newMystery = {
    Obj_suspect: 'temp' ,
    Obj_room: 'temp',
    Obj_weapon: 'temp', };
return newMystery;}

function revealMystery(p_Mystery) {
alert(p_Mystery.Obj_suspect + ' killed Frankie the Fox using ' + p_Mystery.Obj_weapon + ' in ' + p_Mystery.Obj_room + '!');
}