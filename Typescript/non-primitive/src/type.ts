// types

// Very similar to interfaces , types let you aggregate data together.

// defined an types
type User = {
	firstName: string;
	lastName: string;
	age: number
}

// But they let you do a few other things.

// 1) unions (may be string or number)
// Let’s say you want to print the id of a user, which can be a number or a string.

// this thing cannot be done by interfaces
type StringOrNumber = string | number

function printId(id : StringOrNumber){
	console.log(`ID : ${id}`);
}

printId(100);
printId("121");


// 2) intersection (so like combining two other type and should be in one(compulsory))
// it will be combine and will be there no may be there should be present 
// What if you want to create a type that has every property of multiple types/ interfaces

type emp = {
	name : string,
	startDate: Date
}

type Manager = {
	name: string,
	department : string
}

type teamLead = emp & Manager

const TeamLead : teamLead = {
	name:"shivam",
	startDate : new Date(),
	department : "tech"
}