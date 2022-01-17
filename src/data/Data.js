const shoeList = [
  {
    brand: 'nike',
    category: 'Men',
    name: 'Air Max Plus III',
    imageURL:
      'https://www.footlocker.ae/sites/g/files/bndsjb891/files/styles/product_listing/public/media/als-ecom-pimsfl-prod-s3/assets/FootLocker/314206809304_01.1554456.jpg?itok=Uk8Op1jX',
    details:
      'Secure lace closure for a snug fit Woven upper for optimal flexibility Nike logo branding Midsole cushioning provides ultra support Rubber outsole for traction and durability',
    itemCode: 'LF314206809304',
    price: '909.00',
  },
  {
    brand: 'nike',
    category: 'Men',
    name: 'Air Max Plus',
    imageURL:
      'https://www.footlocker.ae/sites/g/files/bndsjb891/files/styles/product_listing/public/media/als-ecom-pimsfl-prod-s3/assets/FootLocker/314207866204_01.1560462.jpg?itok=IwCA1ZO5',
    details:
      'Here is what you need to know about the Nike Air Max Plus! Retaining pretty much the same design since it made its debut over twenty years ago, it just goes to show how timeless the design is!',
    itemCode: 'LF314207866204',
    price: '909.00',
  },
  {
    brand: 'nike',
    category: 'Men',
    name: 'Air Max 97',
    imageURL:
      'https://www.footlocker.ae/sites/g/files/bndsjb891/files/styles/product_listing/public/media/als-ecom-pimsfl-prod-s3/assets/FootLocker/314213889604_01.1040380.jpg?itok=DZdSzVXP',
    details:
      'What can we say to describe the design of the Nike Air Max 97? Athletic. Sleek. Fast. You just have to look at it and just feel like running! The wavy lines, a hidden lacing and the visible air sole form the overall package of the Air Max 97. So you are guaranteed a cool, casual and athletic look. Of course, the Air 97 also has excellent comfort due to the cushioning air sole. Because of it you can wear the sneaker all day long - it is so comfortable!',
    itemCode: 'LF314213889604',
    price: '475.00',
  },
  {
    brand: 'nike',
    category: 'Men',
    name: 'Air Max 270',
    imageURL:
      'https://www.footlocker.ae/sites/g/files/bndsjb891/files/styles/product_listing/public/media/als-ecom-pimsfl-prod-s3/assets/FootLocker/316701935104_01.1342286.jpg?itok=_AwjmeFw',
    details:
      'An innovation that you absolutely need Nike has simply combined two of the most ingenious shoes. Inspired by the Air Max 180 and Air Max 93, the 270 gets the biggest visible air sole ever in a Nike sneaker. Exactly 270 degrees. No question Nike named it Air Max 270. In it you get so much cushioning and comfortable running comfort that you do not even want to take it off anymore. ',
    itemCode: 'LF316701935104',
    price: '426.30',
  },
  {
    brand: 'adidas',
    category: 'women',
    name: 'NMD R2',
    imageURL:
      'https://www.footlocker.ae/sites/g/files/bndsjb891/files/styles/product_listing/public/media/als-ecom-pimsfl-prod-s3/assets/FootLocker/315245293402_01.1449134.jpg?itok=rxw9N5VD',
    details:
      'An innovation that you absolutely need Nike has simply combined two of the most ingenious shoes. Inspired by the Air Max 180 and Air Max 93, the 270 gets the biggest visible air sole ever in a Nike sneaker. Exactly 270 degrees. No question Nike named it Air Max 270. In it you get so much cushioning and comfortable running comfort that you do not even want to take it off anymore. ',
    itemCode: 'LF315245293402',
    price: '440.00',
  },
  {
    brand: 'adidas',
    category: 'women',
    name: 'NMD R1',
    imageURL:
      'https://www.footlocker.ae/sites/g/files/bndsjb891/files/styles/product_listing/public/media/als-ecom-pimsfl-prod-s3/assets/FootLocker/315246557102_01.1045384.jpg?itok=2DPNYQPf',
    details:
      'Taking style cues from premium technical outerwear, these shoes blend adidas archive heritage with modern comfort. Their streamlined shape reinterprets 1980s racer style. A knit upper shows off embossed 3-Stripes. The Boost midsole returns energy with every stride. EVA accent plugs add colour pops.',
    itemCode: 'LF315246557102',
    price: '475.00',
  },
  {
    brand: 'puma',
    category: 'men',
    name: 'Court Rider',
    imageURL:
      'https://www.footlocker.ae/sites/g/files/bndsjb891/files/styles/product_listing/public/media/als-ecom-pimsfl-prod-s3/assets/FootLocker/314103146404_01.1363832.jpg?itok=8iCemk7x',
    details:
      'Secure lace closure for a snug fit Mesh upper for optimal breathability Puma logo branding Midsole cushioning provides ultra support Rubber outsole for traction and durability',
    itemCode: 'LF314103146404',
    price: '356.00',
  },
  {
    brand: 'puma',
    category: 'men',
    name: 'Court Rider',
    imageURL:
      'https://www.footlocker.ae/sites/g/files/bndsjb891/files/styles/product_listing/public/media/als-ecom-pimsfl-prod-s3/assets/FootLocker/314103138104_01.1363598.jpg?itok=UB4Mjgg9',
    details:
      'Secure lace closure for a snug fit Mesh upper for optimal breathability Puma logo branding Midsole cushioning provides ultra support Rubber outsole for traction and durability',
    itemCode: 'LF314103138104',
    price: '356.00',
  },
  {
    brand: 'air jordan',
    category: 'Kids',
    name: '11 CMFT',
    imageURL:
      'https://www.footlocker.ae/sites/g/files/bndsjb891/files/styles/product_listing/public/media/als-ecom-pimsfl-prod-s3/assets/FootLocker/316702190204_01.1359815.jpg?itok=P3fTZaEZ',
    details:
      'Details Lightweight and breathable mesh upper Eyelets with lace up closure for secure fit Midfoot webbing secures your foot over the footbed 2 stacked Air Zoom units in the forefoot deliver the ultimate responsiveness and cushioning Rubber outsole is split into sections to help reduce weight by using less rubber underfoot Nike signature branding detail',
    itemCode: 'LF316702190204',
    price: '479.00',
  },
  {
    brand: 'air jordan',
    category: 'Infant',
    name: 'Air Jordan 1',
    imageURL:
      'https://www.footlocker.ae/sites/g/files/bndsjb891/files/styles/product_listing/public/media/als-ecom-pimsfl-prod-s3/assets/FootLocker/316160963704_01.1361846.jpg?itok=806FqIu1',
    details:
      'Single touch and close fastening straps Perforated Detail for optimal breathability. Jordan logo branding Rubber outsole for traction and durability Heel pull tab for easy on/off',
    itemCode: 'LF316160963704',
    price: '259.00',
  },
  {
    brand: 'air jordan',
    category: 'Infant',
    name: 'Air Jordan 1',
    imageURL:
      'https://www.footlocker.ae/sites/g/files/bndsjb891/files/styles/product_listing/public/media/als-ecom-pimsfl-prod-s3/assets/FootLocker/316160944704_01.1358273.jpg?itok=sXfuAbIs',
    details:
      'Single touch and close fastening straps Perforated Detail for optimal breathability. Jordan logo branding Rubber outsole for traction and durability Heel pull tab for easy on/off',
    itemCode: 'LF316160944704',
    price: '259.00',
  },
  {
    brand: 'adidas',
    category: 'women',
    name: 'Ultraboost 22',
    imageURL:
      'https://www.footlocker.ae/sites/g/files/bndsjb891/files/styles/product_listing/public/media/als-ecom-pimsfl-prod-s3/assets/FootLocker/315240684902_01.1551150.jpg?itok=2fPOTWt0',
    details:
      'Sock-like fit Lace closure Stretchy Primeknit upper for more breathabilty and support',
    itemCode: 'LF315240684902',
    price: '909.00',
  },
  {
    brand: 'nike',
    category: 'women',
    name: 'Nike Free',
    imageURL:
      'https://www.footlocker.ae/sites/g/files/bndsjb891/files/styles/product_listing/public/media/als-ecom-pimsfl-prod-s3/assets/FootLocker/315244551602_01.930472.jpg?itok=PkusnX3S',
    details:
      'Secure lace closure for a snug fit. Mesh Layer for optimal breathability. Nike logo branding. Midsole cushioning provides ultra support. Rubber outsole for traction and durability.',
    itemCode: 'LF315244551602',
    price: '475.00',
  },
  {
    brand: 'nike',
    category: 'kids',
    name: 'Dunk High',
    imageURL:
      'https://www.footlocker.ae/sites/g/files/bndsjb891/files/styles/product_listing/public/media/als-ecom-pimsfl-prod-s3/assets/FootLocker/316702489804_01.1551492.jpg?itok=5dW2t774',
    details:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores debitis sapiente quos vitae ad harum, est reiciendis, aspernatur id dicta fugit autem ipsa amet ducimus tempore tenetur doloremque in facilis.',
    itemCode: 'LF316702489804',
    price: '559.00',
  },
  {
    brand: 'nike',
    category: 'kids',
    name: 'Blazer Mid Sisterhood',
    imageURL:
      'https://www.footlocker.ae/sites/g/files/bndsjb891/files/styles/product_listing/public/media/als-ecom-pimsfl-prod-s3/assets/FootLocker/316702476504_01.1539663.jpg?itok=1KZvmEp_',
    details:
      'Classic laces Soft linings inside the shoe The collar is designed with extra padding The rubber overlay on the toe tip is made longer for extra durability',
    itemCode: 'LF316702476504',
    price: '459.00',
  },
]

export function getProducts(brand) {
  if (brand) {
    return shoeList.find((shoe) => shoe.brand === brand)
  }
  return shoeList
}

export const ShoeDetails = (productId) => {
  return shoeList.find((shoe) => shoe.itemCode === productId)
}

export const getBrands = () => {
  let brands = [...new Set(shoeList.map((shoe) => shoe.brand))]
  return brands
}

export const getBrandList = (brandName) => {
  let brandList = shoeList.filter((brand) => brand.brand === brandName)
  return brandList
}
