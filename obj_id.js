//Object id => 6276e8ca976fc098440a9a9a
//1 2 3 4 5 6 7 8 9 101112
//6276e8ca976fc098440a9a9a
//12 bytes (24 hex)
// eerste 4 bytes (1 - 4)= Timestamp 6276e8ca
// volgende 3 bytes (5 - 7)= Machine Id (computer) 976fc0
// Volgende 2 bytes (8-9) = process Id 9844
// Laatste 3 byets (10 - 12) = counter 0a9a9a


//Zelf Id genereren
const mongoose = require('mongoose');
const id = new mongoose.Types.ObjectId();
console.log(id);

//Timestamp uit Id halen
console.log(id.getTimestamp());

//Id valideren
const isValid = mongoose.Types.ObjectId.isValid(id);
console.log(isValid);