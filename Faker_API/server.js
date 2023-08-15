//express is fpr creating the server and routes & faker is for making fake data that usr to populate my API feedback
const express = require('express');  //importing the Express.js library into your code.
const { faker } = require('@faker-js/faker');  //mporting the faker module from the @faker-js/faker library into your code.

const app = express();  //declares a variable named port and assigns the value 8000
const port = 3000;

// app.use(express.json());  // adds middleware functions that can handle 


//New User amking a fake user
const createUser = () => {
    const newUser = {
        password: faker.internet.password(),  //making a fake password
        email: faker.internet.email(),  //making a fake email
        phoneNumber: faker.phone.number(),  //making a fake phone number
        lastName: faker.name.lastName(),  //making a fake last name
        firstName: faker.name.firstName(),  //making a fake first name
        _id: faker.datatype.uuid(), //making a fake UUID unique Identifier for id

    };
    return newUser   // i have to call newUser to access the user object when i call the creatUser function
}

//Now im making a new company fuction that will use the faker library like above
const createCompany = () => {
    const newCompany = {
        _id: faker.random.uuid(), //making a fake UUID unique Identifier for id
        name: faker.company.companyName(),  //making a fake company name
        address: faker.address.streetAddress(), //making a fake street address
        street: faker.address.streetName(),  //making a fake street name
        city: faker.address.city(),  //making a fake city
        state: faker.address.state(),  //making a fake city
        zipCode: faker.address.zipCode(), //making a fake zipcode
        country: faker.address.country(), //making a fake country
    };
    return newCompany;
};

//Create an api route "/api/users/new" that returns a new user****

app.get('/api/user/new', (req, res) => {
    const newUser = createUser();  //this is making a newUser object randomly
    res.json(newUser);  // now sending this user object as a json response???
});

//Create an api route "/api/companies/new" that returns a new company

app.get('/api/companies/new', (req, res) => {
    const newCompany = createCompany(); // making a newCompany object randomly
    res.json(newCompany); // Send the company object as a JSON response
});


//Create an api route "/api/user/company" that returns both a new user and a new company

app.get('/api/user/company', (req, res) => {
    const newUser = createUser(); // making a new user
    const newCompany = createCompany(); // making a new company
    res.json({ user: newUser, company: newCompany }); // Send both objects as a JSON response
});


//Always goes at the end
app.listen(port, () => {  //telling express app to start listening the new incomong req 
    console.log(`Server is running Lets see the results: ${port}`); // This is the port it will be showing on from line 6
});

// run my file using "nodemon server.js" in the terminal