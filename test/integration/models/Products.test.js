var util = require('util');
// const Products = require('../../../api/controllers/ProductsController');
describe('Products (model)', () => {

  describe('#getListProduct()', () => {
    it('should return array products', (done) => {
      Products.find({})
        .then((products) => {
          if (!products) {
            return done(new Error(
              'Should return exactly 5 students -- the students ' +
              'from our test fixtures who are considered the "best".  ' +
              'But instead, got: ' + util.inspect(products, { depth: null }) + ''
            ));
          }
          // if (bestStudents.length !== 5) {
          //   return done(new Error(
          //     'Should return exactly 5 students -- the students '+
          //     'from our test fixtures who are considered the "best".  '+
          //     'But instead, got: '+util.inspect(bestStudents, {depth:null})+''
          //   ));
          // }//-•

          return done();

        })
        .catch(done);
    });
  });

});
