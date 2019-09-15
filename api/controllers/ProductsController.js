/**
 * ProductsController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */
var sails = require('sails');

module.exports = {
  getListProduct: async (req, res) => {
    const { page = 1, size = 10 } = req.query;
    const [data, count] = await Promise.all([
      Products.find({ limit: size, skip: (page - 1) * size }),
      Products.count({})
    ]);
    const result = await sails.helpers.paging(Number(page), Number(size),Number(count),data);
    res.send(result);
  }
};


