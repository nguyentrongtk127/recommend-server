/**
 * Products.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {
  attributes: {
    createdAt: false,
    updatedAt: false,
    id: {
      type: 'number',
      required: true,
      columnName: 'product_id',
    },
    name: {
      type: 'string',
      columnName: 'Name'
    },
    category1: {
      type: 'string',
      columnName: 'c1'
    },
    category2: {
      type: 'string',
      columnName: 'c2'
    },
    category3: {
      type: 'string',
      columnName: 'c3'
    },
    categoryName1: {
      type: 'string',
      columnName: 'cn1'
    },
    categoryName2: {
      type: 'string',
      columnName: 'cn2'
    },
    categoryName3: {
      type: 'string',
      columnName: 'cn3'
    },
    href: {
      type: 'string'
    },
    recommends: {
      collection: 'recommendators',
      via: 'product_id'
    }
  },

};

