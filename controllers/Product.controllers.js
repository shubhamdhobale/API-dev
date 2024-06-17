import { Product } from "../models/Product.models.js"

const ProductAPI = async (req,res) => {

  const {company , name , featured , sort ,select} = req.query;
  const queryObject = {}

  if(company){
    queryObject.company = company;
  }

  if(name){
    queryObject.name = {$regex : name , $options: "i"};
  }

  if(featured){
    queryObject.featured = featured;
  }

  let apiData = Product.find(queryObject)

  if(sort){
    let sortFix = sort.split(",").join(" ");
    await apiData.sort(sortFix);
  }

  if(select){
    let selectFix = select.split(",").join(" ");
    await apiData.sort(selectFix);
  }

  let page = req.query.page || 1;
  let limit = req.query.limit || 3;
  let skip = (page - 1) * limit;

  apiData = apiData.skip(skip).limit(limit);

  console.log(queryObject);

  const myData = await apiData;
  res.status(200).json({myData , nbHits: myData.length})
}

export  {ProductAPI}