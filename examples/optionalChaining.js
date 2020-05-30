const person = {
  name: "George",
  family: {
    totalMembers: 9,
    cars: "YEAH",
  },
};

//when not sure if property available usually const {propertyName} = do
// would normally be large to make multiple queries if person.family !==undefined && person.cars !==undefined;
//then do this final thing

//this
console.log(person?.family?.cars);
