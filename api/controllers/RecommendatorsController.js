/**
 * RecommendatorsController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
  getProductAndRecommends: (req, res) => {
    Recommendators.find({
      where: { product_id: req.params.product_id },
      limit: 1,
    }).populate(['product_id', 'p1', 'p2', 'p3', 'p4', 'p5', 'p6', 'p7', 'p8', 'p9', 'p10'])
      .then(product => {
        res.send(product[0]);
      });
  }
};

