/**
 * Route Mappings
 * (sails.config.routes)
 *
 * Your routes tell Sails what to do each time it receives a request.
 *
 * For more information on configuring custom routes, check out:
 * https://sailsjs.com/anatomy/config/routes-js
 */

module.exports.routes = {
  'get /products': 'ProductsController.getListProduct',
  'post /products/csv': 'ProductsController.importCSV',
  'get /recommendators/:product_id': 'RecommendatorsController.getProductAndRecommends',
  'post /recommendators/csv': 'RecommendatorsController.importCSV',
};
