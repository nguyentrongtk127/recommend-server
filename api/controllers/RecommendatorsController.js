/**
 * RecommendatorsController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */
const sails = require('sails');
const csvtojson = require('csvtojson');

module.exports = {
  getProductAndRecommends: async (req, res) => {
    const { usercode } = req.query;
    const product_id = req.params.product_id;
    const product = await Recommendators.find({
      where: { product_id },
      limit: 1,
    }).populate(['product_id', 'p1', 'p2', 'p3', 'p4', 'p5', 'p6', 'p7', 'p8', 'p9', 'p10']);
    let result = {
      product: product[0].product_id,
      recommends: []
    };
    Object.keys(product[0]).map((key, index) => {
      if (index > 1 && product[0][key] !== null) {
        result.recommends.push(product[0][key]);
      }
    });
    const categorys = [product[0].product_id.category1, product[0].product_id.category2, product[0].product_id.category3]
    const products = await Products.find({
      or: [
        { category1: categorys },
        { category2: categorys },
        { category3: categorys }
      ]
    });
    result.recommends = [...result.recommends, ...products].filter(e => {
      return e.image && e.price && e.fullName;
    });
    res.send(result);
    if (usercode) {
      console.log(usercode,product_id)
      UsersProducts.findOrCreate({usercode,product_id}, {usercode,product_id})
        .exec((err, newOrExistingRecord, wasCreated) => {
          if (err) {
            console.log(err);
          } else if(!wasCreated) {
            console.log(newOrExistingRecord);
            UsersProducts.updateOne({ usercode,product_id })
            .set({
              count: newOrExistingRecord.count +1
            }).exec((err, res1, res2) =>{
              console.log(err, res1, res2);
            })
          }
        });
    }
  },


  importCSV: (req, res) => {
    req.file('recommendators').upload({
      saveAs: 'recommendators.csv',
      dirname: require('path').resolve(sails.config.appPath, 'assets/csv')
    }, (err, uploadedFiles) => {
      if (err) {
        return res.serverError(err);
      }
      csvtojson().fromFile('assets/csv/recommendators.csv')
        .then((jsonObj) => {
          jsonObj = jsonObj.map(e => {
            Object.entries(e).forEach(([key, value], index) => {
              if (index > 1 && value === 'null') {
                e[key] = null;
              }
            });
            return e;
          });
          console.log(jsonObj);
          return Recommendators.createEach(jsonObj);
        })
        .then(() => {
          return res.ok();
        });
    });
  }
};

