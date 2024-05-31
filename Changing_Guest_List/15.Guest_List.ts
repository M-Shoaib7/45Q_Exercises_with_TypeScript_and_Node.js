let Guest_List :string[] = ['Yasir','Abid','Ali'];

for(let i=0; i<Guest_List.length; i++){

    console.log('Dear Mr. ' + Guest_List[i] + ',\n\nit is our pleasure to invite you in our party.\n\nThank You!\n\n ')
}

let absent_Guest :string = 'Abid';

let new_Guest :string = 'Sajid';

Guest_List[1]= new_Guest;

for(let i=0; i<Guest_List.length; i++){

    console.log('Dear Mr. ' + Guest_List[i] + ',\n\nit is our pleasure to invite you in our party.\n\nThank You!\n\n ')
}

console.log(`Mr. ${absent_Guest} is not coming to the party.`)

