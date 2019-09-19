/**
 * Users.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {

    createdAt: false,
    updatedAt: false,
    usercode: {
      type: 'string',
    },
    product_id: {
      model: 'products'
    },
    count: {
      type: 'number',
      defaultsTo: 1
    }

  },

};

