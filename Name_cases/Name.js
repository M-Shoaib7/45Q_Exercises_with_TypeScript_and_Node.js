"use strict";
let personName = '';
personName = prompt('what is your name?') || '';
let lowercase = personName.toLowerCase();
let uppercase = personName.toUpperCase();
let titlecase = personName.split('').map(world => world.charAt(0).toUpperCase() + world.slice(1).
    toLowerCase()).join('');
if (personName !== null && personName !== '') {
    alert(`Hello ${personName},Here are your name in:
    LowerCase: ${lowercase}
    UpperCase: ${uppercase}
    TitleCase: ${titlecase}
    `);
}
else {
    alert('please fill your nme !');
}
