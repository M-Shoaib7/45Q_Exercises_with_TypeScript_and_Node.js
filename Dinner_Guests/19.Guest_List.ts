let Guest_List :string[] = ['Yasir','Abid','Ali'];

 //for(let i=0; i<Guest_List.length; i++){

    //console.log('Dear Mr. ' + Guest_List[i] + ',\n\nit is our pleasure to invite you in our party.\n\nThank You!\n\n ')
//}
//yaha pr mn ny 1 new guest add kia.
let absent_Guest :string = 'Abid';
let new_Guest :string = 'Sajid';
Guest_List[1]= new_Guest;
// ye for lop mn ny new person k liy bnaya.
// for(let i=0; i<Guest_List.length; i++){

//     console.log('Dear Mr. ' + Guest_List[i] + ',\n\nit is our pleasure to invite you in our party.\n\nThank You!\n\n ')
// }

// console.log(`Mr. ${absent_Guest} is not coming to the party.`);
// console.log('Good News! We find big table so we are inviting 3 more guist.')
// array mn 3 guest add kiy hn.
Guest_List.unshift('Babar Khan');
Guest_List.splice(2 , 0,'Majid');
Guest_List.push('Khalid Khan');
// yaha pr mn ny 6 person k array ko print kia.
// for(let i=0; i<Guest_List.length; i++){

//     console.log('Dear Mr. ' + Guest_List[i] + ',\n\nit is our pleasure to invite you in our party.\n\nThank You!\n\n ')
// }
// sorry message for not invited person.
// console.log('\nSorry we can not arrange big table ,onely two peoples will be invited.');
// yahan pr mn ny guest remove kiy.
while(Guest_List.length >2){
    let remove_Guest= Guest_List.pop();
    // console.log(`\nSorry Mr. ${remove_Guest}, You are not invited for dinner.`);
}
// hamary remaning 2 guist.
// for(let i=0; i<Guest_List.length; i++){

//     console.log('Dear Mr. ' + Guest_List[i] + ',\n\nYou are still invited.\n\nThank You!\n\n ')
// }
// main ny array sy sarry guest remove kr liy is neachy waly splice sy .
Guest_List.splice(0,2);
console.log(Guest_List);

// excersice no:19
// print a message indicating the number of people you are inviting to dinner.
console.log(`Total number of Guest are: ${Guest_List.length}`);

