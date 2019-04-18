// lab1.js
// George Ledbury
function reverseString(str) {
    return str.split("").reverse().join("");
}

function listSkills(){
    let skills = ['Web Development','Gardening','Drumming','Volunteering'];// added the missing bracket
    let output = "<h2>Bruce's Skills</h2>";// added the missing / to the closing h2 tag
    output += '<ul>';
    for (let i = 0; i < skills.length; i++) {
        output += '<li>' + skills[i] + '</li>';
    }
    output += '</ul>';
    document.getElementById('skills').innerHTML = '<p>' + output + '</p>';
}

function getStarted(){
    let firstName = 'Bruce'; // added the missing = and the missing ;
    let lastName = 'Elgort';
    let collegeName = 'Clark College'; // added the missing ;
    let city = 'Vancouver, Washington';
    let gpa = 3.2;
    let output = `${firstName} ${lastName} is currently attending ${collegeName}, located in ${city} and has a grade point average of ${gpa}`;// added the missing comma and $'s so string template will work

    document.getElementById('place1').innerHTML = '<p>' + output + '</p>';// changed the " to '
    document.getElementById('place2').innerHTML = '<p>' + reverseString(output) + '</p>';
}

window.onload = function(){
    getStarted();
    listSkills();
}