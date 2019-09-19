/**
 * ProductsController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */
const sails = require('sails');
const csvtojson = require('csvtojson');

module.exports = {
  getListProduct: async (req, res) => {
    const { page = 1, size = 10 } = req.query;
    const [data, count] = await Promise.all([
      Products.find({ limit: size, skip: (page - 1) * size }),
      Products.count({})
    ]);
    const result = await sails.helpers.paging(Number(page), Number(size), Number(count), data);
    res.send(result);
  },
  importCSV: (req, res) => {
    req.file('products').upload({
      saveAs: 'products.csv',
      dirname: require('path').resolve(sails.config.appPath, 'assets/csv')
    }, (err, uploadedFiles) => {
      if (err) {
        return res.serverError(err);
      }
      csvtojson().fromFile('assets/csv/products.csv')
        .then((jsonObj) => {
          return Products.createEach(jsonObj);
        })
        .then(() => {
          return res.ok();
        });
    });
  }
};


