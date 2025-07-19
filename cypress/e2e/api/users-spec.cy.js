import { faker } from '@faker-js/faker';

describe('Authentication API', {tags: ['@api']}, () => {
    const apiBaseUrl = Cypress.env('apiBaseUrl');
    const firstName = faker.person.firstName();
    const lastName = faker.person.lastName();
    const age = faker.number.int({ min: 18, max: 65 });
    const invalidId = faker.number.int({ min: 1000, max: 2000 });

    // Happy Path
    it('Create a new user', {tags: ['@happyPath']}, () => {
        cy.request({
            method: 'POST',
            url: `${apiBaseUrl}/users/add`,
            body: {
                firstName: firstName,
                lastName: lastName,
                age: age
            }
        }).then((response) => {
            expect(response.status).to.eq(201);
            expect(response.body.firstName).to.eq(firstName);
            expect(response.body.lastName).to.eq(lastName);
            expect(response.body.age).to.eq(age);
        });
    });

    it('Get User by ID', {tags: ['@happyPath']}, () => {
        cy.GetAllUsers().then((users) => {
            const randomUser = users.users[Math.floor(Math.random() * users.users.length)];
            cy.request({
                method: 'GET',
                url: `${apiBaseUrl}/users/${randomUser.id}`
            }).then((response) => {
                expect(response.status).to.eq(200);
                expect(response.body.firstName).to.eq(randomUser.firstName);
                expect(response.body.lastName).to.eq(randomUser.lastName);
                expect(response.body.age).to.eq(randomUser.age);
            });

        });
    });

    it('Delete User by ID', {tags: ['@happyPath']}, () => {
        cy.GetAllUsers().then((users) => {
            const randomUser = users.users[Math.floor(Math.random() * users.users.length)];
            cy.request({
                method: 'DELETE',
                url: `${apiBaseUrl}/users/${randomUser.id}`
            }).then((response) => {
                expect(response.status).to.eq(200);
                expect(response.body.isDeleted).to.eq(true);
            });
        });
    });

    it('Login user and get token', {tags: ['@happyPath']}, () => {
        cy.request({
            method: 'POST',
            url: `${apiBaseUrl}/auth/login`,
            body: {

                username: Cypress.env('testUserUsername'),
                password: Cypress.env('testUserPassword')
            },
            credentials: 'include'
        }).then((response) => {
            debugger
            expect(response.status).to.eq(200);
            expect(response.body.accessToken, 'accessToken do Exists').to.not.be.null;
        });
    });

    // Negative Path
    it('Login user with invalid credentials', {tags: ['@negativePath']}, () => {
        cy.request({
            method: 'POST',
            url: `${apiBaseUrl}/auth/login`,
            failOnStatusCode: false,
            body: {
                username: faker.internet.username(),
                password: faker.internet.password()
            },
        }).then((response) => {
            expect(response.status).to.eq(400);
            expect(response.body.message).to.eq('Invalid credentials');
        });
    })

    it('Get user by invalid id', {tags: ['@negativePath']}, () => {
        cy.request({
            method: 'GET',
            url: `${apiBaseUrl}/users/${invalidId}`,
            failOnStatusCode: false,
        }).then((response) => {
            expect(response.status).to.eq(404);
            expect(response.body.message).to.eq(`User with id '${invalidId}' not found`);
        });
    });

    it('Delete user by invalid id', {tags: ['@negativePath']}, () => {
        cy.request({
            method: 'DELETE',
            url: `${apiBaseUrl}/users/${invalidId}`,
            failOnStatusCode: false,
        }).then((response) => {
            expect(response.status).to.eq(404);
            expect(response.body.message).to.eq(`User with id '${invalidId}' not found`);
        });
    });

    it('Update user by invalid id', {tags: ['@negativePath']}, () => {
        cy.request({
            method: 'PUT',
            url: `${apiBaseUrl}/users/${invalidId}`,
            failOnStatusCode: false,
        }).then((response) => {
            expect(response.status).to.eq(404);
            expect(response.body.message).to.eq(`User with id '${invalidId}' not found`);
        }); 
    });
});
