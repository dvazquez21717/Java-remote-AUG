// function outer(){
  
//     function inner() {
     
//     }
  
//     inner();
//   }
  
// outer();

// //map
// let students = [
//   {firstName: 'Cam', lastName: 'Newton'},
//   {firstName: 'Ted', lastName: 'Ginn'},
//   {firstName: 'Greg', lastName: 'Olsen'}
// ]

// let fullNames = students.map(function(student){
//   return `${student.firstName} ${student.lastName}`;
// })

// fullNames === ["Cam Newton", "Ted Ginn", "Greg Olsen"]

// //filter
// let students = [
// 	{name: 'John Lennon', average: 90},
// 	{name: 'Ringo Starr', average: 58},
// 	{name: 'Paul McCartney', average: 82}
// ];

// let passingStudents = students.filter(function(student){
// 	return student.average > 60;
// });

// passingStudents === [
// 	{name: 'John Lennon', average: 90},
// 	{name: 'Paul McCartney', average: 82}
// ];

// //reduce
// let students = [
// 	{name: 'Cam Newton', assignmentsCompleted: 6},
// 	{name: 'Ted Ginn', assignmentsCompleted: 10},
// 	{name: 'Greg Olsen', assignmentsCompleted: 8}
// ]

// let totalAssignments = students.reduce(function(sum,current){
// 	return sum + current.assignmentsCompleted;
// }, 0);
// //   or arrow verision
// //  let totalAssignments = students.reduce((sum,current)=>{
// // 	return sum + current.assignmentsCompleted;
// // }, 0);
// totalAssignments === 24;

// let superHeroes = [
//   ["Batman", "Bruce Wayne"],
//   ["Spiderman", "Peter Parker"],
//   ["The Flash", "Barry Allen"]
// ]

// let secretIdentity = superHeroes.map(function(revealArray){
//   return revealArray.join(' is ')  ;
// })

// console.log(secretIdentity.join("\n"));

let players = [
	{firstName: 'Cam', lastName: 'Newton', position: 'QB', touchdowns: 32},
	{firstName: 'Derek', lastName: 'Anderson', position: 'QB', touchdowns: 0},
	{firstName: 'Jonathan', lastName: 'Stewart', position: 'RB', touchdowns: 12},
	{firstName: 'Mike', lastName: 'Tolbert', position: 'RB', touchdowns: 8},
	{firstName: 'Fozzy', lastName: 'Whittaker', position: 'RB', touchdowns: 3},
	{firstName: 'Ted', lastName: 'Ginn', position: 'WR', touchdowns: 9},
	{firstName: 'Devin', lastName: 'Funchess', position: 'WR', touchdowns: 2}
];


let found = players.find(function(player){
	return (player.firstName === "Mike");
});

// console.log(found);

let rb = players.filter(function(player){
  return player.position == "RB";
});

// console.log(rb);

let lname = players.map(function(player){
  return `${player.lastName}`;
});

// console.log(lname);

let fullname = players.filter((player)=>{
  return ((player.touchdowns > 5) && (player.position === "RB"));
}).map((player)=>{return `${player.firstName} ${player.lastName}`});

console.log(fullname);

let td = rb.reduce((sum, current)=>{
  return sum += current.touchdowns;
}, 0);

console.log(td);