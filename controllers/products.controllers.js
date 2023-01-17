const prodSchema = require("../models/products.model");

const getAllProducts = async (req, res) => {
  const { company, name, featured, sort, select } = req.query;
  const newObj = {};
  if (company) newObj.company = company;
  if (name) newObj.name = { $regex: name, $options: "i" };
  if (featured) newObj.featured = featured;

  let apiData = prodSchema.find(newObj);

  if (sort) {
    let newQuery = sort.split(",").join(" ");
    apiData = apiData.sort(newQuery);
  }
  if (select) {
    let newQuery = select.split(",").join(" ");
    apiData = apiData.select(newQuery);
  }
  // console.log(newObj);
  let page = +req.query.page || 1;
  let limit = +req.query.limit || 10;

  let skip = (page - 1) * limit;

  const myProducts = await apiData.skip(skip).limit(limit);

  res.status(200).json({ myProducts, nbHits: myProducts.length });
};
module.exports = { getAllProducts };
