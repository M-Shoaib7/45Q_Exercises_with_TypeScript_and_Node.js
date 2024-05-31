"use strict";
let Guest_List = ['Yasir', 'Abid', 'Ali'];
//for(let i=0; i<Guest_List.length; i++){
//console.log('Dear Mr. ' + Guest_List[i] + ',\n\nit is our pleasure to invite you in our party.\n\nThank You!\n\n ')
//}
let absent_Guest = 'Abid';
let new_Guest = 'Sajid';
Guest_List[1] = new_Guest;
for (let i = 0; i < Guest_List.length; i++) {
    console.log('Dear Mr. ' + Guest_List[i] + ',\n\nit is our pleasure to invite you in our party.\n\nThank You!\n\n ');
}
console.log(`Mr. ${absent_Guest} is not coming to the party.`);
console.log('Good News! We find big table so we are inviting 3 more guist.');
Guest_List.unshift('Babar Khan');
Guest_List.splice(2, 0, 'Majid');
Guest_List.push('Khalid Khan');
for (let i = 0; i < Guest_List.length; i++) {
    console.log('Dear Mr. ' + Guest_List[i] + ',\n\nit is our pleasure to invite you in our party.\n\nThank You!\n\n ');
}
console.log('\nSorry we can not arrange big table ,onely two peoples will be invited.');
while (Guest_List.length > 2) {
    let remove_Guest = Guest_List.pop();
    console.log(`\nSorry Mr. ${remove_Guest}, You are not invited for dinner.`);
}
for (let i = 0; i < Guest_List.length; i++) {
    console.log('Dear Mr. ' + Guest_List[i] + ',\n\nYou are still invited.\n\nThank You!\n\n ');
}
Guest_List.splice(0, 2);
console.log(Guest_List);
