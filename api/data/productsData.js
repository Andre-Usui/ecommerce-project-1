const productsData = [
  {
    _user_id: "6759b9018d40c580c216fde5",
    name: "Men's Casual Shirt",
    image: [
      "https://images.unsplash.com/photo-1617223247189-194a2710a72a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
      "https://images.unsplash.com/photo-1612346614828-8101186deada?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400"
    ],
    description: "A comfortable and stylish casual shirt for everyday wear.",
    price: 29.99,
    contInStock: 50,
    rating: 4.2,
    numReviews: 25,
    type: "clothes",
    variables: ["S", "M", "L", "XL"]
  },
  {
    _user_id: "6759b9018d40c580c216fde6",
    name: "Wireless Bluetooth Headphones",
    image: [
      "https://images.unsplash.com/photo-1593642532973-d31b6557fa68?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
      "https://images.unsplash.com/photo-1593642634371-8b5b0fa7f76e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400"
    ],
    description: "Noise-canceling over-ear headphones with premium sound quality.",
    price: 89.99,
    contInStock: 30,
    rating: 4.7,
    numReviews: 120,
    type: "electronics",
    variables: ["Color: Black", "Color: White"]
  },
  {
    _user_id: "6759b9018d40c580c216fde6",
    name: "Classic Novel Collection",
    image: [
      "https://images.unsplash.com/photo-1512820790803-83ca734da794?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400"
    ],
    description: "A collection of timeless literary classics.",
    price: 49.99,
    contInStock: 20,
    rating: 4.8,
    numReviews: 40,
    type: "books",
    variables: ["Languages: English", "Languages: Spanish"]
  },
  {
    _user_id: "6759b9018d40c580c216fde6",
    name: "Yoga Mat",
    image: [
      "https://images.unsplash.com/photo-1582719478472-c52d55c70747?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400"
    ],
    description: "Non-slip yoga mat for fitness and exercise routines.",
    price: 19.99,
    contInStock: 100,
    rating: 4.5,
    numReviews: 55,
    type: "sports",
    variables: ["Color: Green", "Color: Pink", "Color: Purple"]
  },
  {
    _user_id: "6759b9018d40c580c216fde6",
    name: "Smartphone",
    image: [
      "https://images.unsplash.com/photo-1512499617640-c2f999d6d07e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
      "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400"
    ],
    description: "High-performance smartphone with an advanced camera.",
    price: 699.99,
    contInStock: 15,
    rating: 4.9,
    numReviews: 300,
    type: "electronics",
    variables: ["Color: Black", "Color: Silver"]
  },
  {
    _user_id: "6759b9018d40c580c216fde7",
    name: "Cookware Set",
    image: [
      "https://images.unsplash.com/photo-1511690743698-d9d85f2fbf38?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400"
    ],
    description: "Durable and stylish non-stick cookware set for your kitchen.",
    price: 129.99,
    contInStock: 25,
    rating: 4.6,
    numReviews: 75,
    type: "home",
    variables: ["Set Includes: Pots", "Set Includes: Pans", "Set Includes: Lids"]
  },
  {
    _user_id: "6759b9018d40c580c216fde8",
    name: "Men's Running Shoes",
    image: [
      "https://images.unsplash.com/photo-1596507276840-15bcb94e6d2a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400"
    ],
    description: "Lightweight running shoes for maximum comfort and performance.",
    price: 59.99,
    contInStock: 40,
    rating: 4.3,
    numReviews: 90,
    type: "clothes",
    variables: ["Sizes: 8", "Sizes: 9", "Sizes: 10", "Sizes: 11", "Colors: Black", "Colors: Red"]
  },
  {
    _user_id: "6759b9018d40c580c216fde8",
    name: "Gaming Keyboard",
    image: [
      "https://images.unsplash.com/photo-1587202372775-75d042a9fa9f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400"
    ],
    description: "Mechanical RGB gaming keyboard with customizable lighting.",
    price: 79.99,
    contInStock: 35,
    rating: 4.8,
    numReviews: 60,
    type: "electronics",
    variables: ["Red", "Blue", "RGB"]
  },
  {
    _user_id: "6759b9018d40c580c216fde9",
    name: "Waterproof Jacket",
    image: [
      "https://images.unsplash.com/photo-1533000729004-7a8d176e5204?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400"
    ],
    description: "All-weather waterproof jacket for outdoor adventures.",
    price: 99.99,
    contInStock: 45,
    rating: 4.4,
    numReviews: 80,
    type: "clothes",
    variables: ["S", "M", "L", "XL"]
  },
  {
    _user_id: "6759b9018d40c580c216fdeb",
    name: "Smartwatch",
    image: [
      "https://images.unsplash.com/photo-1517430816045-df4b7de5e6c4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400"
    ],
    description: "Stylish smartwatch with fitness tracking and notifications.",
    price: 199.99,
    contInStock: 20,
    rating: 4.6,
    numReviews: 100,
    type: "electronics",
    variables: ["Band Options: Leather", "Band Options: Silicone", "Colors: Black", "Colors: Rose Gold"]
  }
]

module.exports = productsData;