/**
 * UsersProductsController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
  getRecommends: async (req, res) => {
    const {usercode} = req.body;
    const result = await UsersProducts.find({ usercode });
    res.send(result);
  }
};

