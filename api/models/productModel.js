const mongoose = require('mongoose');

/*
type: [
"Clothes",
"Men Clothes",
"Tops",
"Hoodies & Sweatshirts",
"Jackets, Coats & Vests",
"Pants",
"Jeans",
"Shorts",
"Innerwear & Underwear",
"Sweaters & Cardigans",
"Socks",
"Suits",
"Costumes & Cosplay",
"Women Clothes",
"Dresses",
"Tops",
"Skirts",
"Leggings",
"Maternity Wear",
"Wedding Dresses",
"Sleepwear & Pajamas"
"Electronics"
"Notebooks",
"Computers",
"Games",
"Home",
"Decoration",
"Kitchenware",
"Bedding",
"Bathrooms",
"Dinnerware",
"Gadering",
"Home Organizers",
"Tools",
"Safety & Security"


],

variables can be a object, a array or a string;
exp: 
tshirt.variables = {size: ['PP', 'P', 'M', 'G', 'GG'], colors: ['red', 'blue']}
notebook.variables = ['110V', '220V']
mouse.variables = 'Main'

!!! Remember : to change a Mixed value you need to call 
!!! doc.markModified(path)
!!! In this case:
!!! product.variables = ['any', 'thing'];
!!! product.markModified('variables');
!!! product.save();
*/

const productSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    image: { type: [String], required: true },
    description: { type: String, required: true },
    impulse: { type: Boolean, required: true, default: false},
    price: { type: Number, required: true, default: 0 },
    countInStock: { type: Number, required: true, default: 0 },
    numSells: { type: Number, required: true, default: 0},
    rating: { type: Number, required: true, default: 0 },
    numReviews: { type: Number, required: true, default: 0 },
    _user_id: { type: mongoose.Schema.Types.ObjectId, required: true, ref: 'User'},
    type: {type: [String], default:['Other']},
    variables: {type: mongoose.Mixed, default:'Main'}
  }, { timestamps: true }
);

module.exports = mongoose.model("Product", productSchema);