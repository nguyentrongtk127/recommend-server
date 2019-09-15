// test/integration/controllers/UserController.test.js
var supertest = require('supertest');
describe('ProductsController.getListProduct', () => {

  describe('#getListProduct()', () => {
    it('should redirect to /products',  (done) => {
      supertest(sails.hooks.http.app)
      .get('/products')
      .send({ name: 'test', password: 'test' })
      .expect(200,done);
    });
  });

});
