import {faker} from '@faker-js/faker';
import pet from '../fixtures/pet.json';

pet.id = faker.random.numeric(5)
pet.name = faker.animal.crocodilia()
pet.category.id = faker.random.numeric(3)
pet.category.name = faker.animal.type()

it('passes', () => {
  cy.request('POST', '/pet', pet).then(response => {
    expect(response.status).to.be.eq(200);
    expect(response.body.id).to.be.eq(pet.id);
    // expect(response.status).to.be.eq(200);
    // expect(response.status).to.be.eq(200);
    // expect(response.status).to.be.eq(200);
    // expect(response.status).to.be.eq(200);
    // expect(response.status).to.be.eq(200);
  })
})