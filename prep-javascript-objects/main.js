var person = { firstName: 'Sally', lastName: 'Nguyen', hobby: 'working out' };
console.log(person);
var fullName = 'Sally' + ' ' + 'Nguyen';
console.log("The person's name is:", fullName);
person.job = 'Operations Coordinator';
console.log("The person's current job is:", person.job);
person.previousJob = 'Personal Trainer';
console.log("The person's previous job is:", person.previousJob);
console.log('The complete person object:', person);
var myCar = { make: 'Honda', model: 'Civic', year: '2008' };
console.log('Car information', myCar);
myCar['owner'] = fullName;
var description = myCar['year'] + ' ' + myCar['make'] + ' ' + myCar['model'];
console.log('My name is', myCar['owner'], 'and I drive a', description, '.');
myCar['color'] = 'black';
console.log('My full car info:', myCar);
