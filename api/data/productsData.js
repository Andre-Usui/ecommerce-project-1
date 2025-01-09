const productsData = [
  {
    name: "Men's Casual Denim Jacket",
    image: [
      "https://images.pexels.com/photos/428340/pexels-photo-428340.jpeg",
      "https://images.pexels.com/photos/428341/pexels-photo-428341.jpeg",
      "https://images.pexels.com/photos/428342/pexels-photo-428342.jpeg",
      "https://images.pexels.com/photos/428343/pexels-photo-428343.jpeg",
      "https://images.pexels.com/photos/428344/pexels-photo-428344.jpeg"
    ],
    description: "Stylish men's denim jacket, perfect for casual outings.",
    impulse: false,
    price: 59.99,
    countInStock: 50,
    numSells: 120,
    rating: 4.2,
    numReviews: 30,
    _user_id: "6759b9018d40c580c216fde5",
    type: ["Clothes", "Men Clothes", "Jackets, Coats & Vests"],
    variables: {
      size: ["S", "M", "L", "XL"],
      colors: ["blue", "black"]
    }
  },
  {
    name: "Men's Black Hoodie",
    image: [
      "https://images.pexels.com/photos/631160/pexels-photo-631160.jpeg",
      "https://images.pexels.com/photos/631161/pexels-photo-631161.jpeg",
      "https://images.pexels.com/photos/631162/pexels-photo-631162.jpeg",
      "https://images.pexels.com/photos/631163/pexels-photo-631163.jpeg",
      "https://images.pexels.com/photos/631164/pexels-photo-631164.jpeg"
    ],
    description: "Comfortable black hoodie for men, suitable for all seasons.",
    impulse: true,
    price: 39.99,
    countInStock: 75,
    numSells: 200,
    rating: 4.5,
    numReviews: 50,
    _user_id: "6759b9018d40c580c216fde5",
    type: ["Clothes", "Men Clothes", "Hoodies & Sweatshirts"],
    variables: {
      size: ["M", "L", "XL", "XXL"],
      colors: ["black", "gray"]
    }
  },
  {
    name: "Men's Slim Fit Jeans",
    image: [
      "https://images.pexels.com/photos/2983464/pexels-photo-2983464.jpeg",
      "https://images.pexels.com/photos/2983465/pexels-photo-2983465.jpeg",
      "https://images.pexels.com/photos/2983466/pexels-photo-2983466.jpeg",
      "https://images.pexels.com/photos/2983467/pexels-photo-2983467.jpeg",
      "https://images.pexels.com/photos/2983468/pexels-photo-2983468.jpeg"
    ],
    description: "Men's slim fit jeans, perfect for a modern look.",
    impulse: false,
    price: 49.99,
    countInStock: 100,
    numSells: 150,
    rating: 4.3,
    numReviews: 40,
    _user_id: "6759b9018d40c580c216fde5",
    type: ["Clothes", "Men Clothes", "Jeans"],
    variables: {
      size: ["30", "32", "34", "36"],
      colors: ["dark blue", "light blue"]
    }
  },
  {
    name: "Men's White T-Shirt",
    image: [
      "https://images.pexels.com/photos/1006227/pexels-photo-1006227.jpeg",
      "https://images.pexels.com/photos/1006228/pexels-photo-1006228.jpeg",
      "https://images.pexels.com/photos/1006229/pexels-photo-1006229.jpeg",
      "https://images.pexels.com/photos/1006230/pexels-photo-1006230.jpeg",
      "https://images.pexels.com/photos/1006231/pexels-photo-1006231.jpeg"
    ],
    description: "Classic white t-shirt for men, a wardrobe essential.",
    impulse: true,
    price: 19.99,
    countInStock: 200,
    numSells: 300,
    rating: 4.7,
    numReviews: 60,
    _user_id: "6759b9018d40c580c216fde5",
    type: ["Clothes", "Men Clothes", "Tops"],
    variables: {
      size: ["S", "M", "L", "XL", "XXL"],
      colors: ["white"]
    }
  },
  {
    name: "Men's Formal Suit",
    image: [
      "https://images.pexels.com/photos/428339/pexels-photo-428339.jpeg",
      "https://images.pexels.com/photos/428340/pexels-photo-428340.jpeg",
      "https://images.pexels.com/photos/428341/pexels-photo-428341.jpeg",
      "https://images.pexels.com/photos/428342/pexels-photo-428342.jpeg",
      "https://images.pexels.com/photos/428343/pexels-photo-428343.jpeg"
    ],
    description: "Elegant formal suit for men, ideal for business meetings.",
    impulse: false,
    price: 199.99,
    countInStock: 30,
    numSells: 80,
    rating: 4.6,
    numReviews: 25,
    _user_id: "6759b9018d40c580c216fde5",
    type: ["Clothes", "Men Clothes", "Suits"],
    variables: {
      size: ["M", "L", "XL"],
      colors: ["navy", "charcoal"]
    }
  },
  {
    name: "Men's Casual Denim Jacket",
    image: [
      "https://images.pexels.com/photos/428340/pexels-photo-428340.jpeg",
      "https://images.pexels.com/photos/428341/pexels-photo-428341.jpeg",
      "https://images.pexels.com/photos/428342/pexels-photo-428342.jpeg",
      "https://images.pexels.com/photos/428343/pexels-photo-428343.jpeg",
      "https://images.pexels.com/photos/428344/pexels-photo-428344.jpeg"
    ],
    description: "Stylish men's denim jacket, perfect for casual outings.",
    impulse: false,
    price: 59.99,
    countInStock: 50,
    numSells: 120,
    rating: 4.2,
    numReviews: 30,
    _user_id: "6759b9018d40c580c216fde5",
    type: ["Clothes", "Men Clothes", "Jackets, Coats & Vests"],
    variables: {
      size: ["S", "M", "L", "XL"],
      colors: ["blue", "black"]
    }
  },
  {
    name: "Men's Black Hoodie",
    image: [
      "https://images.pexels.com/photos/631160/pexels-photo-631160.jpeg",
      "https://images.pexels.com/photos/631161/pexels-photo-631161.jpeg",
      "https://images.pexels.com/photos/631162/pexels-photo-631162.jpeg",
      "https://images.pexels.com/photos/631163/pexels-photo-631163.jpeg",
      "https://images.pexels.com/photos/631164/pexels-photo-631164.jpeg"
    ],
    description: "Comfortable black hoodie for men, suitable for all seasons.",
    impulse: true,
    price: 39.99,
    countInStock: 75,
    numSells: 200,
    rating: 4.5,
    numReviews: 50,
    _user_id: "6759b9018d40c580c216fde5",
    type: ["Clothes", "Men Clothes", "Hoodies & Sweatshirts"],
    variables: {
      size: ["M", "L", "XL", "XXL"],
      colors: ["black", "gray"]
    }
  },
  {
    name: "Men's Slim Fit Jeans",
    image: [
      "https://images.pexels.com/photos/2983464/pexels-photo-2983464.jpeg",
      "https://images.pexels.com/photos/2983465/pexels-photo-2983465.jpeg",
      "https://images.pexels.com/photos/2983466/pexels-photo-2983466.jpeg",
      "https://images.pexels.com/photos/2983467/pexels-photo-2983467.jpeg",
      "https://images.pexels.com/photos/2983468/pexels-photo-2983468.jpeg"
    ],
    description: "Men's slim fit jeans, perfect for a modern look.",
    impulse: false,
    price: 49.99,
    countInStock: 100,
    numSells: 150,
    rating: 4.3,
    numReviews: 40,
    _user_id: "6759b9018d40c580c216fde5",
    type: ["Clothes", "Men Clothes", "Jeans"],
    variables: {
      size: ["30", "32", "34", "36"],
      colors: ["dark blue", "light blue"]
    }
  },
  {
    name: "Men's White T-Shirt",
    image: [
      "https://images.pexels.com/photos/1006227/pexels-photo-1006227.jpeg",
      "https://images.pexels.com/photos/1006228/pexels-photo-1006228.jpeg",
      "https://images.pexels.com/photos/1006229/pexels-photo-1006229.jpeg",
      "https://images.pexels.com/photos/1006230/pexels-photo-1006230.jpeg",
      "https://images.pexels.com/photos/1006231/pexels-photo-1006231.jpeg"
    ],
    description: "Classic white t-shirt for men, a wardrobe essential.",
    impulse: true,
    price: 19.99,
    countInStock: 200,
    numSells: 300,
    rating: 4.7,
    numReviews: 60,
    _user_id: "6759b9018d40c580c216fde5",
    type: ["Clothes", "Men Clothes", "Tops"],
    variables: {
      size: ["S", "M", "L", "XL", "XXL"],
      colors: ["white"]
    }
  },
  {
    name: "Men's Formal Suit",
    image: [
      "https://images.pexels.com/photos/428339/pexels-photo-428339.jpeg",
      "https://images.pexels.com/photos/428340/pexels-photo-428340.jpeg",
      "https://images.pexels.com/photos/428341/pexels-photo-428341.jpeg",
      "https://images.pexels.com/photos/428342/pexels-photo-428342.jpeg",
      "https://images.pexels.com/photos/428343/pexels-photo-428343.jpeg"
    ],
    description: "Elegant formal suit for men, ideal for business meetings.",
    impulse: false,
    price: 199.99,
    countInStock: 30,
    numSells: 80,
    rating: 4.6,
    numReviews: 25,
    _user_id: "6759b9018d40c580c216fde5",
    type: ["Clothes", "Men Clothes", "Suits"],
    variables: {
      size: ["M", "L", "XL"],
      colors: ["navy", "charcoal"]
    }
  },
  {
    name: "Men's Casual Denim Jacket",
    image: [
      "https://images.pexels.com/photos/428340/pexels-photo-428340.jpeg",
      "https://images.pexels.com/photos/428341/pexels-photo-428341.jpeg",
      "https://images.pexels.com/photos/428342/pexels-photo-428342.jpeg",
      "https://images.pexels.com/photos/428343/pexels-photo-428343.jpeg",
      "https://images.pexels.com/photos/428344/pexels-photo-428344.jpeg"
    ],
    description: "Stylish men's denim jacket, perfect for casual outings.",
    impulse: false,
    price: 59.99,
    countInStock: 50,
    numSells: 120,
    rating: 4.2,
    numReviews: 30,
    _user_id: "6759b9018d40c580c216fde5",
    type: ["Clothes", "Men Clothes", "Jackets, Coats & Vests"],
    variables: {
      size: ["S", "M", "L", "XL"],
      colors: ["blue", "black"]
    }
  },
  {
    name: "Men's Black Hoodie",
    image: [
      "https://images.pexels.com/photos/631160/pexels-photo-631160.jpeg",
      "https://images.pexels.com/photos/631161/pexels-photo-631161.jpeg",
      "https://images.pexels.com/photos/631162/pexels-photo-631162.jpeg",
      "https://images.pexels.com/photos/631163/pexels-photo-631163.jpeg",
      "https://images.pexels.com/photos/631164/pexels-photo-631164.jpeg"
    ],
    description: "Comfortable black hoodie for men, suitable for all seasons.",
    impulse: true,
    price: 39.99,
    countInStock: 75,
    numSells: 200,
    rating: 4.5,
    numReviews: 50,
    _user_id: "6759b9018d40c580c216fde5",
    type: ["Clothes", "Men Clothes", "Hoodies & Sweatshirts"],
    variables: {
      size: ["M", "L", "XL", "XXL"],
      colors: ["black", "gray"]
    }
  },
  {
    name: "Men's Slim Fit Jeans",
    image: [
      "https://images.pexels.com/photos/2983464/pexels-photo-2983464.jpeg",
      "https://images.pexels.com/photos/2983465/pexels-photo-2983465.jpeg",
      "https://images.pexels.com/photos/2983466/pexels-photo-2983466.jpeg",
      "https://images.pexels.com/photos/2983467/pexels-photo-2983467.jpeg",
      "https://images.pexels.com/photos/2983468/pexels-photo-2983468.jpeg"
    ],
    description: "Men's slim fit jeans, perfect for a modern look.",
    impulse: false,
    price: 49.99,
    countInStock: 100,
    numSells: 150,
    rating: 4.3,
    numReviews: 40,
    _user_id: "6759b9018d40c580c216fde5",
    type: ["Clothes", "Men Clothes", "Jeans"],
    variables: {
      size: ["30", "32", "34", "36"],
      colors: ["dark blue", "light blue"]
    }
  },
  {
    name: "Men's White T-Shirt",
    image: [
      "https://images.pexels.com/photos/1006227/pexels-photo-1006227.jpeg",
      "https://images.pexels.com/photos/1006228/pexels-photo-1006228.jpeg",
      "https://images.pexels.com/photos/1006229/pexels-photo-1006229.jpeg",
      "https://images.pexels.com/photos/1006230/pexels-photo-1006230.jpeg",
      "https://images.pexels.com/photos/1006231/pexels-photo-1006231.jpeg"
    ],
    description: "Classic white t-shirt for men, a wardrobe essential.",
    impulse: true,
    price: 19.99,
    countInStock: 200,
    numSells: 300,
    rating: 4.7,
    numReviews: 60,
    _user_id: "6759b9018d40c580c216fde5",
    type: ["Clothes", "Men Clothes", "Tops"],
    variables: {
      size: ["S", "M", "L", "XL", "XXL"],
      colors: ["white"]
    }
  },
  {
    name: "Men's Formal Suit",
    image: [
      "https://images.pexels.com/photos/428339/pexels-photo-428339.jpeg",
      "https://images.pexels.com/photos/428340/pexels-photo-428340.jpeg",
      "https://images.pexels.com/photos/428341/pexels-photo-428341.jpeg",
      "https://images.pexels.com/photos/428342/pexels-photo-428342.jpeg",
      "https://images.pexels.com/photos/428343/pexels-photo-428343.jpeg"
    ],
    description: "Elegant formal suit for men, ideal for business meetings.",
    impulse: false,
    price: 199.99,
    countInStock: 30,
    numSells: 80,
    rating: 4.6,
    numReviews: 25,
    _user_id: "6759b9018d40c580c216fde5",
    type: ["Clothes", "Men Clothes", "Suits"],
    variables: {
      size: ["M", "L", "XL"],
      colors: ["navy", "charcoal"]
    }
  },{
    name: "Men's Casual Denim Jacket",
    image: [
      "https://images.pexels.com/photos/428340/pexels-photo-428340.jpeg",
      "https://images.pexels.com/photos/428341/pexels-photo-428341.jpeg",
      "https://images.pexels.com/photos/428342/pexels-photo-428342.jpeg",
      "https://images.pexels.com/photos/428343/pexels-photo-428343.jpeg",
      "https://images.pexels.com/photos/428344/pexels-photo-428344.jpeg"
    ],
    description: "Stylish men's denim jacket, perfect for casual outings.",
    impulse: false,
    price: 59.99,
    countInStock: 50,
    numSells: 120,
    rating: 4.2,
    numReviews: 30,
    _user_id: "6759b9018d40c580c216fde5",
    type: ["Clothes", "Men Clothes", "Jackets, Coats & Vests"],
    variables: {
      size: ["S", "M", "L", "XL"],
      colors: ["blue", "black"]
    }
  },
  {
    name: "Men's Black Hoodie",
    image: [
      "https://images.pexels.com/photos/631160/pexels-photo-631160.jpeg",
      "https://images.pexels.com/photos/631161/pexels-photo-631161.jpeg",
      "https://images.pexels.com/photos/631162/pexels-photo-631162.jpeg",
      "https://images.pexels.com/photos/631163/pexels-photo-631163.jpeg",
      "https://images.pexels.com/photos/631164/pexels-photo-631164.jpeg"
    ],
    description: "Comfortable black hoodie for men, suitable for all seasons.",
    impulse: true,
    price: 39.99,
    countInStock: 75,
    numSells: 200,
    rating: 4.5,
    numReviews: 50,
    _user_id: "6759b9018d40c580c216fde5",
    type: ["Clothes", "Men Clothes", "Hoodies & Sweatshirts"],
    variables: {
      size: ["M", "L", "XL", "XXL"],
      colors: ["black", "gray"]
    }
  },
  {
    name: "Men's Slim Fit Jeans",
    image: [
      "https://images.pexels.com/photos/2983464/pexels-photo-2983464.jpeg",
      "https://images.pexels.com/photos/2983465/pexels-photo-2983465.jpeg",
      "https://images.pexels.com/photos/2983466/pexels-photo-2983466.jpeg",
      "https://images.pexels.com/photos/2983467/pexels-photo-2983467.jpeg",
      "https://images.pexels.com/photos/2983468/pexels-photo-2983468.jpeg"
    ],
    description: "Men's slim fit jeans, perfect for a modern look.",
    impulse: false,
    price: 49.99,
    countInStock: 100,
    numSells: 150,
    rating: 4.3,
    numReviews: 40,
    _user_id: "6759b9018d40c580c216fde5",
    type: ["Clothes", "Men Clothes", "Jeans"],
    variables: {
      size: ["30", "32", "34", "36"],
      colors: ["dark blue", "light blue"]
    }
  },
  {
    name: "Men's White T-Shirt",
    image: [
      "https://images.pexels.com/photos/1006227/pexels-photo-1006227.jpeg",
      "https://images.pexels.com/photos/1006228/pexels-photo-1006228.jpeg",
      "https://images.pexels.com/photos/1006229/pexels-photo-1006229.jpeg",
      "https://images.pexels.com/photos/1006230/pexels-photo-1006230.jpeg",
      "https://images.pexels.com/photos/1006231/pexels-photo-1006231.jpeg"
    ],
    description: "Classic white t-shirt for men, a wardrobe essential.",
    impulse: true,
    price: 19.99,
    countInStock: 200,
    numSells: 300,
    rating: 4.7,
    numReviews: 60,
    _user_id: "6759b9018d40c580c216fde5",
    type: ["Clothes", "Men Clothes", "Tops"],
    variables: {
      size: ["S", "M", "L", "XL", "XXL"],
      colors: ["white"]
    }
  },
  {
    name: "Men's Formal Suit",
    image: [
      "https://images.pexels.com/photos/428339/pexels-photo-428339.jpeg",
      "https://images.pexels.com/photos/428340/pexels-photo-428340.jpeg",
      "https://images.pexels.com/photos/428341/pexels-photo-428341.jpeg",
      "https://images.pexels.com/photos/428342/pexels-photo-428342.jpeg",
      "https://images.pexels.com/photos/428343/pexels-photo-428343.jpeg"
    ],
    description: "Elegant formal suit for men, ideal for business meetings.",
    impulse: false,
    price: 199.99,
    countInStock: 30,
    numSells: 80,
    rating: 4.6,
    numReviews: 25,
    _user_id: "6759b9018d40c580c216fde5",
    type: ["Clothes", "Men Clothes", "Suits"],
    variables: {
      size: ["M", "L", "XL"],
      colors: ["navy", "charcoal"]
    }
  },
  {
    name: "Men's Casual Denim Jacket",
    image: [
      "https://images.pexels.com/photos/428340/pexels-photo-428340.jpeg",
      "https://images.pexels.com/photos/428341/pexels-photo-428341.jpeg",
      "https://images.pexels.com/photos/428342/pexels-photo-428342.jpeg",
      "https://images.pexels.com/photos/428343/pexels-photo-428343.jpeg",
      "https://images.pexels.com/photos/428344/pexels-photo-428344.jpeg"
    ],
    description: "Stylish men's denim jacket, perfect for casual outings.",
    impulse: false,
    price: 59.99,
    countInStock: 50,
    numSells: 120,
    rating: 4.2,
    numReviews: 30,
    _user_id: "6759b9018d40c580c216fde5",
    type: ["Clothes", "Men Clothes", "Jackets, Coats & Vests"],
    variables: {
      size: ["S", "M", "L", "XL"],
      colors: ["blue", "black"]
    }
  },
  {
    name: "Men's Black Hoodie",
    image: [
      "https://images.pexels.com/photos/631160/pexels-photo-631160.jpeg",
      "https://images.pexels.com/photos/631161/pexels-photo-631161.jpeg",
      "https://images.pexels.com/photos/631162/pexels-photo-631162.jpeg",
      "https://images.pexels.com/photos/631163/pexels-photo-631163.jpeg",
      "https://images.pexels.com/photos/631164/pexels-photo-631164.jpeg"
    ],
    description: "Comfortable black hoodie for men, suitable for all seasons.",
    impulse: true,
    price: 39.99,
    countInStock: 75,
    numSells: 200,
    rating: 4.5,
    numReviews: 50,
    _user_id: "6759b9018d40c580c216fde5",
    type: ["Clothes", "Men Clothes", "Hoodies & Sweatshirts"],
    variables: {
      size: ["M", "L", "XL", "XXL"],
      colors: ["black", "gray"]
    }
  },
  {
    name: "Men's Slim Fit Jeans",
    image: [
      "https://images.pexels.com/photos/2983464/pexels-photo-2983464.jpeg",
      "https://images.pexels.com/photos/2983465/pexels-photo-2983465.jpeg",
      "https://images.pexels.com/photos/2983466/pexels-photo-2983466.jpeg",
      "https://images.pexels.com/photos/2983467/pexels-photo-2983467.jpeg",
      "https://images.pexels.com/photos/2983468/pexels-photo-2983468.jpeg"
    ],
    description: "Men's slim fit jeans, perfect for a modern look.",
    impulse: false,
    price: 49.99,
    countInStock: 100,
    numSells: 150,
    rating: 4.3,
    numReviews: 40,
    _user_id: "6759b9018d40c580c216fde5",
    type: ["Clothes", "Men Clothes", "Jeans"],
    variables: {
      size: ["30", "32", "34", "36"],
      colors: ["dark blue", "light blue"]
    }
  },
  {
    name: "Men's White T-Shirt",
    image: [
      "https://images.pexels.com/photos/1006227/pexels-photo-1006227.jpeg",
      "https://images.pexels.com/photos/1006228/pexels-photo-1006228.jpeg",
      "https://images.pexels.com/photos/1006229/pexels-photo-1006229.jpeg",
      "https://images.pexels.com/photos/1006230/pexels-photo-1006230.jpeg",
      "https://images.pexels.com/photos/1006231/pexels-photo-1006231.jpeg"
    ],
    description: "Classic white t-shirt for men, a wardrobe essential.",
    impulse: true,
    price: 19.99,
    countInStock: 200,
    numSells: 300,
    rating: 4.7,
    numReviews: 60,
    _user_id: "6759b9018d40c580c216fde5",
    type: ["Clothes", "Men Clothes", "Tops"],
    variables: {
      size: ["S", "M", "L", "XL", "XXL"],
      colors: ["white"]
    }
  },
  {
    name: "Men's Formal Suit",
    image: [
      "https://images.pexels.com/photos/428339/pexels-photo-428339.jpeg",
      "https://images.pexels.com/photos/428340/pexels-photo-428340.jpeg",
      "https://images.pexels.com/photos/428341/pexels-photo-428341.jpeg",
      "https://images.pexels.com/photos/428342/pexels-photo-428342.jpeg",
      "https://images.pexels.com/photos/428343/pexels-photo-428343.jpeg"
    ],
    description: "Elegant formal suit for men, ideal for business meetings.",
    impulse: false,
    price: 199.99,
    countInStock: 30,
    numSells: 80,
    rating: 4.6,
    numReviews: 25,
    _user_id: "6759b9018d40c580c216fde5",
    type: ["Clothes", "Men Clothes", "Suits"],
    variables: {
      size: ["M", "L", "XL"],
      colors: ["navy", "charcoal"]
    }
  },
  {
    name: "Women's Summer Maxi Dress",
    image: [
      "https://images.pexels.com/photos/428232/pexels-photo-428232.jpeg",
      "https://images.pexels.com/photos/428233/pexels-photo-428233.jpeg",
      "https://images.pexels.com/photos/428234/pexels-photo-428234.jpeg",
      "https://images.pexels.com/photos/428235/pexels-photo-428235.jpeg",
      "https://images.pexels.com/photos/428236/pexels-photo-428236.jpeg"
    ],
    description: "Elegant summer maxi dress with floral patterns.",
    impulse: true,
    price: 49.99,
    countInStock: 80,
    numSells: 200,
    rating: 4.8,
    numReviews: 60,
    _user_id: "6759b9018d40c580c216fde5",
    type: ["Clothes", "Women Clothes", "Dresses"],
    variables: {
      size: ["S", "M", "L", "XL"],
      colors: ["red", "blue", "white"]
    }
  },
  {
    name: "Women's Pleated Skirt",
    image: [
      "https://images.pexels.com/photos/1240894/pexels-photo-1240894.jpeg",
      "https://images.pexels.com/photos/1240895/pexels-photo-1240895.jpeg",
      "https://images.pexels.com/photos/1240896/pexels-photo-1240896.jpeg",
      "https://images.pexels.com/photos/1240897/pexels-photo-1240897.jpeg",
      "https://images.pexels.com/photos/1240898/pexels-photo-1240898.jpeg"
    ],
    description: "Chic pleated skirt for casual and office wear.",
    impulse: false,
    price: 29.99,
    countInStock: 100,
    numSells: 180,
    rating: 4.5,
    numReviews: 50,
    _user_id: "6759b9018d40c580c216fde5",
    type: ["Clothes", "Women Clothes", "Skirts"],
    variables: {
      size: ["XS", "S", "M", "L", "XL"],
      colors: ["black", "gray", "pink"]
    }
  },
  {
    name: "Women's Cozy Pajama Set",
    image: [
      "https://images.pexels.com/photos/3644877/pexels-photo-3644877.jpeg",
      "https://images.pexels.com/photos/3644878/pexels-photo-3644878.jpeg",
      "https://images.pexels.com/photos/3644879/pexels-photo-3644879.jpeg",
      "https://images.pexels.com/photos/3644880/pexels-photo-3644880.jpeg",
      "https://images.pexels.com/photos/3644881/pexels-photo-3644881.jpeg"
    ],
    description: "Soft and breathable pajama set for restful nights.",
    impulse: false,
    price: 19.99,
    countInStock: 200,
    numSells: 300,
    rating: 4.6,
    numReviews: 70,
    _user_id: "6759b9018d40c580c216fde5",
    type: ["Clothes", "Women Clothes", "Sleepwear & Pajamas"],
    variables: {
      size: ["S", "M", "L", "XL"],
      colors: ["blue", "pink", "gray"]
    }
  },
  {
    name: "Women's High-Waisted Leggings",
    image: [
      "https://images.pexels.com/photos/4498152/pexels-photo-4498152.jpeg",
      "https://images.pexels.com/photos/4498153/pexels-photo-4498153.jpeg",
      "https://images.pexels.com/photos/4498154/pexels-photo-4498154.jpeg",
      "https://images.pexels.com/photos/4498155/pexels-photo-4498155.jpeg",
      "https://images.pexels.com/photos/4498156/pexels-photo-4498156.jpeg"
    ],
    description: "Comfortable leggings for workouts and casual wear.",
    impulse: false,
    price: 25.99,
    countInStock: 150,
    numSells: 400,
    rating: 4.7,
    numReviews: 90,
    _user_id: "6759b9018d40c580c216fde5",
    type: ["Clothes", "Women Clothes", "Leggings"],
    variables: {
      size: ["S", "M", "L", "XL"],
      colors: ["black", "navy", "gray"]
    }
  },
  {
    name: "Women's Maternity T-Shirt",
    image: [
      "https://images.pexels.com/photos/4861358/pexels-photo-4861358.jpeg",
      "https://images.pexels.com/photos/4861359/pexels-photo-4861359.jpeg",
      "https://images.pexels.com/photos/4861360/pexels-photo-4861360.jpeg",
      "https://images.pexels.com/photos/4861361/pexels-photo-4861361.jpeg",
      "https://images.pexels.com/photos/4861362/pexels-photo-4861362.jpeg"
    ],
    description: "Soft and stretchy maternity t-shirt for comfort during pregnancy.",
    impulse: false,
    price: 19.99,
    countInStock: 70,
    numSells: 150,
    rating: 4.4,
    numReviews: 40,
    _user_id: "6759b9018d40c580c216fde5",
    type: ["Clothes", "Women Clothes", "Maternity Wear", "Tops"],
    variables: {
      size: ["M", "L", "XL", "XXL"],
      colors: ["white", "gray", "blue"]
    }
  },
  {
    name: "Women's Formal Wedding Dress",
    image: [
      "https://images.pexels.com/photos/1239487/pexels-photo-1239487.jpeg",
      "https://images.pexels.com/photos/1239488/pexels-photo-1239488.jpeg",
      "https://images.pexels.com/photos/1239489/pexels-photo-1239489.jpeg",
      "https://images.pexels.com/photos/1239490/pexels-photo-1239490.jpeg",
      "https://images.pexels.com/photos/1239491/pexels-photo-1239491.jpeg"
    ],
    description: "Exquisite formal wedding dress for special occasions.",
    impulse: true,
    price: 299.99,
    countInStock: 30,
    numSells: 50,
    rating: 4.9,
    numReviews: 25,
    _user_id: "6759b9018d40c580c216fde5",
    type: ["Clothes", "Women Clothes", "Wedding Dresses"],
    variables: {
      size: ["S", "M", "L", "XL"],
      colors: ["white", "ivory"]
    }
  },
  {
    name: "Women's Striped Crop Top",
    image: [
      "https://images.pexels.com/photos/2648538/pexels-photo-2648538.jpeg",
      "https://images.pexels.com/photos/2648539/pexels-photo-2648539.jpeg",
      "https://images.pexels.com/photos/2648540/pexels-photo-2648540.jpeg",
      "https://images.pexels.com/photos/2648541/pexels-photo-2648541.jpeg",
      "https://images.pexels.com/photos/2648542/pexels-photo-2648542.jpeg"
    ],
    description: "Trendy striped crop top for casual outings.",
    impulse: false,
    price: 14.99,
    countInStock: 120,
    numSells: 320,
    rating: 4.3,
    numReviews: 55,
    _user_id: "6759b9018d40c580c216fde5",
    type: ["Clothes", "Women Clothes", "Tops"],
    variables: {
      size: ["XS", "S", "M", "L"],
      colors: ["red", "blue", "black"]
    }
  },
  {
    name: "Women's Summer Maxi Dress",
    image: [
      "https://images.pexels.com/photos/428232/pexels-photo-428232.jpeg",
      "https://images.pexels.com/photos/428233/pexels-photo-428233.jpeg",
      "https://images.pexels.com/photos/428234/pexels-photo-428234.jpeg",
      "https://images.pexels.com/photos/428235/pexels-photo-428235.jpeg",
      "https://images.pexels.com/photos/428236/pexels-photo-428236.jpeg"
    ],
    description: "Elegant summer maxi dress with floral patterns.",
    impulse: true,
    price: 49.99,
    countInStock: 80,
    numSells: 200,
    rating: 4.8,
    numReviews: 60,
    _user_id: "6759b9018d40c580c216fde5",
    type: ["Clothes", "Women Clothes", "Dresses"],
    variables: {
      size: ["S", "M", "L", "XL"],
      colors: ["red", "blue", "white"]
    }
  },
  {
    name: "Women's Pleated Skirt",
    image: [
      "https://images.pexels.com/photos/1240894/pexels-photo-1240894.jpeg",
      "https://images.pexels.com/photos/1240895/pexels-photo-1240895.jpeg",
      "https://images.pexels.com/photos/1240896/pexels-photo-1240896.jpeg",
      "https://images.pexels.com/photos/1240897/pexels-photo-1240897.jpeg",
      "https://images.pexels.com/photos/1240898/pexels-photo-1240898.jpeg"
    ],
    description: "Chic pleated skirt for casual and office wear.",
    impulse: false,
    price: 29.99,
    countInStock: 100,
    numSells: 180,
    rating: 4.5,
    numReviews: 50,
    _user_id: "6759b9018d40c580c216fde5",
    type: ["Clothes", "Women Clothes", "Skirts"],
    variables: {
      size: ["XS", "S", "M", "L", "XL"],
      colors: ["black", "gray", "pink"]
    }
  },
  {
    name: "Women's Cozy Pajama Set",
    image: [
      "https://images.pexels.com/photos/3644877/pexels-photo-3644877.jpeg",
      "https://images.pexels.com/photos/3644878/pexels-photo-3644878.jpeg",
      "https://images.pexels.com/photos/3644879/pexels-photo-3644879.jpeg",
      "https://images.pexels.com/photos/3644880/pexels-photo-3644880.jpeg",
      "https://images.pexels.com/photos/3644881/pexels-photo-3644881.jpeg"
    ],
    description: "Soft and breathable pajama set for restful nights.",
    impulse: false,
    price: 19.99,
    countInStock: 200,
    numSells: 300,
    rating: 4.6,
    numReviews: 70,
    _user_id: "6759b9018d40c580c216fde5",
    type: ["Clothes", "Women Clothes", "Sleepwear & Pajamas"],
    variables: {
      size: ["S", "M", "L", "XL"],
      colors: ["blue", "pink", "gray"]
    }
  },
  {
    name: "Women's High-Waisted Leggings",
    image: [
      "https://images.pexels.com/photos/4498152/pexels-photo-4498152.jpeg",
      "https://images.pexels.com/photos/4498153/pexels-photo-4498153.jpeg",
      "https://images.pexels.com/photos/4498154/pexels-photo-4498154.jpeg",
      "https://images.pexels.com/photos/4498155/pexels-photo-4498155.jpeg",
      "https://images.pexels.com/photos/4498156/pexels-photo-4498156.jpeg"
    ],
    description: "Comfortable leggings for workouts and casual wear.",
    impulse: false,
    price: 25.99,
    countInStock: 150,
    numSells: 400,
    rating: 4.7,
    numReviews: 90,
    _user_id: "6759b9018d40c580c216fde5",
    type: ["Clothes", "Women Clothes", "Leggings"],
    variables: {
      size: ["S", "M", "L", "XL"],
      colors: ["black", "navy", "gray"]
    }
  },
  {
    name: "Women's Maternity T-Shirt",
    image: [
      "https://images.pexels.com/photos/4861358/pexels-photo-4861358.jpeg",
      "https://images.pexels.com/photos/4861359/pexels-photo-4861359.jpeg",
      "https://images.pexels.com/photos/4861360/pexels-photo-4861360.jpeg",
      "https://images.pexels.com/photos/4861361/pexels-photo-4861361.jpeg",
      "https://images.pexels.com/photos/4861362/pexels-photo-4861362.jpeg"
    ],
    description: "Soft and stretchy maternity t-shirt for comfort during pregnancy.",
    impulse: false,
    price: 19.99,
    countInStock: 70,
    numSells: 150,
    rating: 4.4,
    numReviews: 40,
    _user_id: "6759b9018d40c580c216fde5",
    type: ["Clothes", "Women Clothes", "Maternity Wear", "Tops"],
    variables: {
      size: ["M", "L", "XL", "XXL"],
      colors: ["white", "gray", "blue"]
    }
  },
  {
    name: "Women's Formal Wedding Dress",
    image: [
      "https://images.pexels.com/photos/1239487/pexels-photo-1239487.jpeg",
      "https://images.pexels.com/photos/1239488/pexels-photo-1239488.jpeg",
      "https://images.pexels.com/photos/1239489/pexels-photo-1239489.jpeg",
      "https://images.pexels.com/photos/1239490/pexels-photo-1239490.jpeg",
      "https://images.pexels.com/photos/1239491/pexels-photo-1239491.jpeg"
    ],
    description: "Exquisite formal wedding dress for special occasions.",
    impulse: true,
    price: 299.99,
    countInStock: 30,
    numSells: 50,
    rating: 4.9,
    numReviews: 25,
    _user_id: "6759b9018d40c580c216fde5",
    type: ["Clothes", "Women Clothes", "Wedding Dresses"],
    variables: {
      size: ["S", "M", "L", "XL"],
      colors: ["white", "ivory"]
    }
  },
  {
    name: "Women's Striped Crop Top",
    image: [
      "https://images.pexels.com/photos/2648538/pexels-photo-2648538.jpeg",
      "https://images.pexels.com/photos/2648539/pexels-photo-2648539.jpeg",
      "https://images.pexels.com/photos/2648540/pexels-photo-2648540.jpeg",
      "https://images.pexels.com/photos/2648541/pexels-photo-2648541.jpeg",
      "https://images.pexels.com/photos/2648542/pexels-photo-2648542.jpeg"
    ],
    description: "Trendy striped crop top for casual outings.",
    impulse: false,
    price: 14.99,
    countInStock: 120,
    numSells: 320,
    rating: 4.3,
    numReviews: 55,
    _user_id: "6759b9018d40c580c216fde5",
    type: ["Clothes", "Women Clothes", "Tops"],
    variables: {
      size: ["XS", "S", "M", "L"],
      colors: ["red", "blue", "black"]
    }
  },
  {
    name: "Women's Summer Maxi Dress",
    image: [
      "https://images.pexels.com/photos/428232/pexels-photo-428232.jpeg",
      "https://images.pexels.com/photos/428233/pexels-photo-428233.jpeg",
      "https://images.pexels.com/photos/428234/pexels-photo-428234.jpeg",
      "https://images.pexels.com/photos/428235/pexels-photo-428235.jpeg",
      "https://images.pexels.com/photos/428236/pexels-photo-428236.jpeg"
    ],
    description: "Elegant summer maxi dress with floral patterns.",
    impulse: true,
    price: 49.99,
    countInStock: 80,
    numSells: 200,
    rating: 4.8,
    numReviews: 60,
    _user_id: "6759b9018d40c580c216fde5",
    type: ["Clothes", "Women Clothes", "Dresses"],
    variables: {
      size: ["S", "M", "L", "XL"],
      colors: ["red", "blue", "white"]
    }
  },
  {
    name: "Women's Pleated Skirt",
    image: [
      "https://images.pexels.com/photos/1240894/pexels-photo-1240894.jpeg",
      "https://images.pexels.com/photos/1240895/pexels-photo-1240895.jpeg",
      "https://images.pexels.com/photos/1240896/pexels-photo-1240896.jpeg",
      "https://images.pexels.com/photos/1240897/pexels-photo-1240897.jpeg",
      "https://images.pexels.com/photos/1240898/pexels-photo-1240898.jpeg"
    ],
    description: "Chic pleated skirt for casual and office wear.",
    impulse: false,
    price: 29.99,
    countInStock: 100,
    numSells: 180,
    rating: 4.5,
    numReviews: 50,
    _user_id: "6759b9018d40c580c216fde5",
    type: ["Clothes", "Women Clothes", "Skirts"],
    variables: {
      size: ["XS", "S", "M", "L", "XL"],
      colors: ["black", "gray", "pink"]
    }
  },
  {
    name: "Women's Cozy Pajama Set",
    image: [
      "https://images.pexels.com/photos/3644877/pexels-photo-3644877.jpeg",
      "https://images.pexels.com/photos/3644878/pexels-photo-3644878.jpeg",
      "https://images.pexels.com/photos/3644879/pexels-photo-3644879.jpeg",
      "https://images.pexels.com/photos/3644880/pexels-photo-3644880.jpeg",
      "https://images.pexels.com/photos/3644881/pexels-photo-3644881.jpeg"
    ],
    description: "Soft and breathable pajama set for restful nights.",
    impulse: false,
    price: 19.99,
    countInStock: 200,
    numSells: 300,
    rating: 4.6,
    numReviews: 70,
    _user_id: "6759b9018d40c580c216fde5",
    type: ["Clothes", "Women Clothes", "Sleepwear & Pajamas"],
    variables: {
      size: ["S", "M", "L", "XL"],
      colors: ["blue", "pink", "gray"]
    }
  },
  {
    name: "Women's High-Waisted Leggings",
    image: [
      "https://images.pexels.com/photos/4498152/pexels-photo-4498152.jpeg",
      "https://images.pexels.com/photos/4498153/pexels-photo-4498153.jpeg",
      "https://images.pexels.com/photos/4498154/pexels-photo-4498154.jpeg",
      "https://images.pexels.com/photos/4498155/pexels-photo-4498155.jpeg",
      "https://images.pexels.com/photos/4498156/pexels-photo-4498156.jpeg"
    ],
    description: "Comfortable leggings for workouts and casual wear.",
    impulse: false,
    price: 25.99,
    countInStock: 150,
    numSells: 400,
    rating: 4.7,
    numReviews: 90,
    _user_id: "6759b9018d40c580c216fde5",
    type: ["Clothes", "Women Clothes", "Leggings"],
    variables: {
      size: ["S", "M", "L", "XL"],
      colors: ["black", "navy", "gray"]
    }
  },
  {
    name: "Women's Maternity T-Shirt",
    image: [
      "https://images.pexels.com/photos/4861358/pexels-photo-4861358.jpeg",
      "https://images.pexels.com/photos/4861359/pexels-photo-4861359.jpeg",
      "https://images.pexels.com/photos/4861360/pexels-photo-4861360.jpeg",
      "https://images.pexels.com/photos/4861361/pexels-photo-4861361.jpeg",
      "https://images.pexels.com/photos/4861362/pexels-photo-4861362.jpeg"
    ],
    description: "Soft and stretchy maternity t-shirt for comfort during pregnancy.",
    impulse: false,
    price: 19.99,
    countInStock: 70,
    numSells: 150,
    rating: 4.4,
    numReviews: 40,
    _user_id: "6759b9018d40c580c216fde9",
    type: ["Clothes", "Women Clothes", "Maternity Wear", "Tops"],
    variables: {
      size: ["M", "L", "XL", "XXL"],
      colors: ["white", "gray", "blue"]
    }
  },
  {
    name: "Women's Formal Wedding Dress",
    image: [
      "https://images.pexels.com/photos/1239487/pexels-photo-1239487.jpeg",
      "https://images.pexels.com/photos/1239488/pexels-photo-1239488.jpeg",
      "https://images.pexels.com/photos/1239489/pexels-photo-1239489.jpeg",
      "https://images.pexels.com/photos/1239490/pexels-photo-1239490.jpeg",
      "https://images.pexels.com/photos/1239491/pexels-photo-1239491.jpeg"
    ],
    description: "Exquisite formal wedding dress for special occasions.",
    impulse: true,
    price: 299.99,
    countInStock: 30,
    numSells: 50,
    rating: 4.9,
    numReviews: 25,
    _user_id: "6759b9018d40c580c216fde9",
    type: ["Clothes", "Women Clothes", "Wedding Dresses"],
    variables: {
      size: ["S", "M", "L", "XL"],
      colors: ["white", "ivory"]
    }
  },
  {
    name: "Women's Striped Crop Top",
    image: [
      "https://images.pexels.com/photos/2648538/pexels-photo-2648538.jpeg",
      "https://images.pexels.com/photos/2648539/pexels-photo-2648539.jpeg",
      "https://images.pexels.com/photos/2648540/pexels-photo-2648540.jpeg",
      "https://images.pexels.com/photos/2648541/pexels-photo-2648541.jpeg",
      "https://images.pexels.com/photos/2648542/pexels-photo-2648542.jpeg"
    ],
    description: "Trendy striped crop top for casual outings.",
    impulse: false,
    price: 14.99,
    countInStock: 120,
    numSells: 320,
    rating: 4.3,
    numReviews: 55,
    _user_id: "6759b9018d40c580c216fde9",
    type: ["Clothes", "Women Clothes", "Tops"],
    variables: {
      size: ["XS", "S", "M", "L"],
      colors: ["red", "blue", "black"]
    }
  },{
    name: "Gaming Laptop",
    image: [
      "https://images.pexels.com/photos/2764675/pexels-photo-2764675.jpeg",
      "https://images.pexels.com/photos/2764676/pexels-photo-2764676.jpeg",
      "https://images.pexels.com/photos/2764677/pexels-photo-2764677.jpeg",
      "https://images.pexels.com/photos/2764678/pexels-photo-2764678.jpeg",
      "https://images.pexels.com/photos/2764679/pexels-photo-2764679.jpeg"
    ],
    description: "High-performance gaming laptop with advanced graphics.",
    impulse: true,
    price: 1499.99,
    countInStock: 20,
    numSells: 500,
    rating: 4.9,
    numReviews: 120,
    _user_id: "6759b9018d40c580c216fde9",
    type: ["Electronics", "Notebooks", "Games"],
    variables: {
      processor: ["Intel i7", "AMD Ryzen 7"],
      ram: ["16GB", "32GB"],
      storage: ["512GB SSD", "1TB SSD"]
    }
  },
  {
    name: "Desktop Computer",
    image: [
      "https://images.pexels.com/photos/4792711/pexels-photo-4792711.jpeg",
      "https://images.pexels.com/photos/4792712/pexels-photo-4792712.jpeg",
      "https://images.pexels.com/photos/4792713/pexels-photo-4792713.jpeg",
      "https://images.pexels.com/photos/4792714/pexels-photo-4792714.jpeg",
      "https://images.pexels.com/photos/4792715/pexels-photo-4792715.jpeg"
    ],
    description: "Powerful desktop computer for work and gaming.",
    impulse: false,
    price: 899.99,
    countInStock: 50,
    numSells: 300,
    rating: 4.7,
    numReviews: 80,
    _user_id: "6759b9018d40c580c216fde9",
    type: ["Electronics", "Computers"],
    variables: {
      processor: ["Intel i5", "AMD Ryzen 5"],
      ram: ["8GB", "16GB"],
      storage: ["256GB SSD", "512GB SSD"]
    }
  },{
    name: "Gaming Laptop",
    image: [
      "https://images.pexels.com/photos/2764675/pexels-photo-2764675.jpeg",
      "https://images.pexels.com/photos/2764676/pexels-photo-2764676.jpeg",
      "https://images.pexels.com/photos/2764677/pexels-photo-2764677.jpeg",
      "https://images.pexels.com/photos/2764678/pexels-photo-2764678.jpeg",
      "https://images.pexels.com/photos/2764679/pexels-photo-2764679.jpeg"
    ],
    description: "High-performance gaming laptop with advanced graphics.",
    impulse: true,
    price: 1499.99,
    countInStock: 20,
    numSells: 500,
    rating: 4.9,
    numReviews: 120,
    _user_id: "6759b9018d40c580c216fde9",
    type: ["Electronics", "Notebooks", "Games"],
    variables: {
      processor: ["Intel i7", "AMD Ryzen 7"],
      ram: ["16GB", "32GB"],
      storage: ["512GB SSD", "1TB SSD"]
    }
  },
  {
    name: "Desktop Computer",
    image: [
      "https://images.pexels.com/photos/4792711/pexels-photo-4792711.jpeg",
      "https://images.pexels.com/photos/4792712/pexels-photo-4792712.jpeg",
      "https://images.pexels.com/photos/4792713/pexels-photo-4792713.jpeg",
      "https://images.pexels.com/photos/4792714/pexels-photo-4792714.jpeg",
      "https://images.pexels.com/photos/4792715/pexels-photo-4792715.jpeg"
    ],
    description: "Powerful desktop computer for work and gaming.",
    impulse: false,
    price: 899.99,
    countInStock: 50,
    numSells: 300,
    rating: 4.7,
    numReviews: 80,
    _user_id: "6759b9018d40c580c216fde9",
    type: ["Electronics", "Computers"],
    variables: {
      processor: ["Intel i5", "AMD Ryzen 5"],
      ram: ["8GB", "16GB"],
      storage: ["256GB SSD", "512GB SSD"]
    }
  },{
    name: "Gaming Laptop",
    image: [
      "https://images.pexels.com/photos/2764675/pexels-photo-2764675.jpeg",
      "https://images.pexels.com/photos/2764676/pexels-photo-2764676.jpeg",
      "https://images.pexels.com/photos/2764677/pexels-photo-2764677.jpeg",
      "https://images.pexels.com/photos/2764678/pexels-photo-2764678.jpeg",
      "https://images.pexels.com/photos/2764679/pexels-photo-2764679.jpeg"
    ],
    description: "High-performance gaming laptop with advanced graphics.",
    impulse: true,
    price: 1499.99,
    countInStock: 20,
    numSells: 500,
    rating: 4.9,
    numReviews: 120,
    _user_id: "6759b9018d40c580c216fde9",
    type: ["Electronics", "Notebooks", "Games"],
    variables: {
      processor: ["Intel i7", "AMD Ryzen 7"],
      ram: ["16GB", "32GB"],
      storage: ["512GB SSD", "1TB SSD"]
    }
  },
  {
    name: "Desktop Computer",
    image: [
      "https://images.pexels.com/photos/4792711/pexels-photo-4792711.jpeg",
      "https://images.pexels.com/photos/4792712/pexels-photo-4792712.jpeg",
      "https://images.pexels.com/photos/4792713/pexels-photo-4792713.jpeg",
      "https://images.pexels.com/photos/4792714/pexels-photo-4792714.jpeg",
      "https://images.pexels.com/photos/4792715/pexels-photo-4792715.jpeg"
    ],
    description: "Powerful desktop computer for work and gaming.",
    impulse: false,
    price: 899.99,
    countInStock: 50,
    numSells: 300,
    rating: 4.7,
    numReviews: 80,
    _user_id: "6759b9018d40c580c216fde9",
    type: ["Electronics", "Computers"],
    variables: {
      processor: ["Intel i5", "AMD Ryzen 5"],
      ram: ["8GB", "16GB"],
      storage: ["256GB SSD", "512GB SSD"]
    }
  },{
    name: "Gaming Laptop",
    image: [
      "https://images.pexels.com/photos/2764675/pexels-photo-2764675.jpeg",
      "https://images.pexels.com/photos/2764676/pexels-photo-2764676.jpeg",
      "https://images.pexels.com/photos/2764677/pexels-photo-2764677.jpeg",
      "https://images.pexels.com/photos/2764678/pexels-photo-2764678.jpeg",
      "https://images.pexels.com/photos/2764679/pexels-photo-2764679.jpeg"
    ],
    description: "High-performance gaming laptop with advanced graphics.",
    impulse: true,
    price: 1499.99,
    countInStock: 20,
    numSells: 500,
    rating: 4.9,
    numReviews: 120,
    _user_id: "6759b9018d40c580c216fde9",
    type: ["Electronics", "Notebooks", "Games"],
    variables: {
      processor: ["Intel i7", "AMD Ryzen 7"],
      ram: ["16GB", "32GB"],
      storage: ["512GB SSD", "1TB SSD"]
    }
  },
  {
    name: "Desktop Computer",
    image: [
      "https://images.pexels.com/photos/4792711/pexels-photo-4792711.jpeg",
      "https://images.pexels.com/photos/4792712/pexels-photo-4792712.jpeg",
      "https://images.pexels.com/photos/4792713/pexels-photo-4792713.jpeg",
      "https://images.pexels.com/photos/4792714/pexels-photo-4792714.jpeg",
      "https://images.pexels.com/photos/4792715/pexels-photo-4792715.jpeg"
    ],
    description: "Powerful desktop computer for work and gaming.",
    impulse: false,
    price: 899.99,
    countInStock: 50,
    numSells: 300,
    rating: 4.7,
    numReviews: 80,
    _user_id: "6759b9018d40c580c216fde9",
    type: ["Electronics", "Computers"],
    variables: {
      processor: ["Intel i5", "AMD Ryzen 5"],
      ram: ["8GB", "16GB"],
      storage: ["256GB SSD", "512GB SSD"]
    }
  },
  {
    name: "Modern Sofa",
    image: [
      "https://images.pexels.com/photos/1866149/pexels-photo-1866149.jpeg",
      "https://images.pexels.com/photos/1866150/pexels-photo-1866150.jpeg",
      "https://images.pexels.com/photos/1866151/pexels-photo-1866151.jpeg",
      "https://images.pexels.com/photos/1866152/pexels-photo-1866152.jpeg",
      "https://images.pexels.com/photos/1866153/pexels-photo-1866153.jpeg"
    ],
    description: "Stylish and comfortable modern sofa for your living room.",
    impulse: true,
    price: 499.99,
    countInStock: 25,
    numSells: 200,
    rating: 4.8,
    numReviews: 150,
    _user_id: "6759b9018d40c580c216fde9",
    type: ["Home", "Decoration"],
    variables: {
      colors: ["gray", "blue", "beige"],
      materials: ["fabric", "leather"]
    }
  },
  {
    name: "Ceramic Dinner Set",
    image: [
      "https://images.pexels.com/photos/4792034/pexels-photo-4792034.jpeg",
      "https://images.pexels.com/photos/4792035/pexels-photo-4792035.jpeg",
      "https://images.pexels.com/photos/4792036/pexels-photo-4792036.jpeg",
      "https://images.pexels.com/photos/4792037/pexels-photo-4792037.jpeg",
      "https://images.pexels.com/photos/4792038/pexels-photo-4792038.jpeg"
    ],
    description: "Elegant ceramic dinner set for family gatherings and occasions.",
    impulse: false,
    price: 79.99,
    countInStock: 50,
    numSells: 300,
    rating: 4.6,
    numReviews: 95,
    _user_id: "6759b9018d40c580c216fde9",
    type: ["Home", "Dinnerware"],
    variables: {
      pieces: ["16-piece", "24-piece"],
      colors: ["white", "navy"]
    }
  },
  {
    name: "Kitchen Knife Set",
    image: [
      "https://images.pexels.com/photos/4226899/pexels-photo-4226899.jpeg",
      "https://images.pexels.com/photos/4226900/pexels-photo-4226900.jpeg",
      "https://images.pexels.com/photos/4226901/pexels-photo-4226901.jpeg",
      "https://images.pexels.com/photos/4226902/pexels-photo-4226902.jpeg",
      "https://images.pexels.com/photos/4226903/pexels-photo-4226903.jpeg"
    ],
    description: "High-quality stainless steel kitchen knife set.",
    impulse: false,
    price: 59.99,
    countInStock: 100,
    numSells: 400,
    rating: 4.7,
    numReviews: 120,
    _user_id: "6759b9018d40c580c216fde9",
    type: ["Home", "Kitchenware", "Tools"],
    variables: {
      pieces: ["5-piece", "10-piece"],
      handleMaterial: ["wood", "plastic"]
    }
  },{
    name: "Modern Sofa",
    image: [
      "https://images.pexels.com/photos/1866149/pexels-photo-1866149.jpeg",
      "https://images.pexels.com/photos/1866150/pexels-photo-1866150.jpeg",
      "https://images.pexels.com/photos/1866151/pexels-photo-1866151.jpeg",
      "https://images.pexels.com/photos/1866152/pexels-photo-1866152.jpeg",
      "https://images.pexels.com/photos/1866153/pexels-photo-1866153.jpeg"
    ],
    description: "Stylish and comfortable modern sofa for your living room.",
    impulse: true,
    price: 499.99,
    countInStock: 25,
    numSells: 200,
    rating: 4.8,
    numReviews: 150,
    _user_id: "6759b9018d40c580c216fde9",
    type: ["Home", "Decoration"],
    variables: {
      colors: ["gray", "blue", "beige"],
      materials: ["fabric", "leather"]
    }
  },
  {
    name: "Ceramic Dinner Set",
    image: [
      "https://images.pexels.com/photos/4792034/pexels-photo-4792034.jpeg",
      "https://images.pexels.com/photos/4792035/pexels-photo-4792035.jpeg",
      "https://images.pexels.com/photos/4792036/pexels-photo-4792036.jpeg",
      "https://images.pexels.com/photos/4792037/pexels-photo-4792037.jpeg",
      "https://images.pexels.com/photos/4792038/pexels-photo-4792038.jpeg"
    ],
    description: "Elegant ceramic dinner set for family gatherings and occasions.",
    impulse: false,
    price: 79.99,
    countInStock: 50,
    numSells: 300,
    rating: 4.6,
    numReviews: 95,
    _user_id: "6759b9018d40c580c216fde9",
    type: ["Home", "Dinnerware"],
    variables: {
      pieces: ["16-piece", "24-piece"],
      colors: ["white", "navy"]
    }
  },
  {
    name: "Kitchen Knife Set",
    image: [
      "https://images.pexels.com/photos/4226899/pexels-photo-4226899.jpeg",
      "https://images.pexels.com/photos/4226900/pexels-photo-4226900.jpeg",
      "https://images.pexels.com/photos/4226901/pexels-photo-4226901.jpeg",
      "https://images.pexels.com/photos/4226902/pexels-photo-4226902.jpeg",
      "https://images.pexels.com/photos/4226903/pexels-photo-4226903.jpeg"
    ],
    description: "High-quality stainless steel kitchen knife set.",
    impulse: false,
    price: 59.99,
    countInStock: 100,
    numSells: 400,
    rating: 4.7,
    numReviews: 120,
    _user_id: "6759b9018d40c580c216fde9",
    type: ["Home", "Kitchenware", "Tools"],
    variables: {
      pieces: ["5-piece", "10-piece"],
      handleMaterial: ["wood", "plastic"]
    }
  },{
    name: "Modern Sofa",
    image: [
      "https://images.pexels.com/photos/1866149/pexels-photo-1866149.jpeg",
      "https://images.pexels.com/photos/1866150/pexels-photo-1866150.jpeg",
      "https://images.pexels.com/photos/1866151/pexels-photo-1866151.jpeg",
      "https://images.pexels.com/photos/1866152/pexels-photo-1866152.jpeg",
      "https://images.pexels.com/photos/1866153/pexels-photo-1866153.jpeg"
    ],
    description: "Stylish and comfortable modern sofa for your living room.",
    impulse: true,
    price: 499.99,
    countInStock: 25,
    numSells: 200,
    rating: 4.8,
    numReviews: 150,
    _user_id: "6759b9018d40c580c216fde9",
    type: ["Home", "Decoration"],
    variables: {
      colors: ["gray", "blue", "beige"],
      materials: ["fabric", "leather"]
    }
  },
  {
    name: "Ceramic Dinner Set",
    image: [
      "https://images.pexels.com/photos/4792034/pexels-photo-4792034.jpeg",
      "https://images.pexels.com/photos/4792035/pexels-photo-4792035.jpeg",
      "https://images.pexels.com/photos/4792036/pexels-photo-4792036.jpeg",
      "https://images.pexels.com/photos/4792037/pexels-photo-4792037.jpeg",
      "https://images.pexels.com/photos/4792038/pexels-photo-4792038.jpeg"
    ],
    description: "Elegant ceramic dinner set for family gatherings and occasions.",
    impulse: false,
    price: 79.99,
    countInStock: 50,
    numSells: 300,
    rating: 4.6,
    numReviews: 95,
    _user_id: "6759b9018d40c580c216fde9",
    type: ["Home", "Dinnerware"],
    variables: {
      pieces: ["16-piece", "24-piece"],
      colors: ["white", "navy"]
    }
  },
  {
    name: "Kitchen Knife Set",
    image: [
      "https://images.pexels.com/photos/4226899/pexels-photo-4226899.jpeg",
      "https://images.pexels.com/photos/4226900/pexels-photo-4226900.jpeg",
      "https://images.pexels.com/photos/4226901/pexels-photo-4226901.jpeg",
      "https://images.pexels.com/photos/4226902/pexels-photo-4226902.jpeg",
      "https://images.pexels.com/photos/4226903/pexels-photo-4226903.jpeg"
    ],
    description: "High-quality stainless steel kitchen knife set.",
    impulse: false,
    price: 59.99,
    countInStock: 100,
    numSells: 400,
    rating: 4.7,
    numReviews: 120,
    _user_id: "6759b9018d40c580c216fde9",
    type: ["Home", "Kitchenware", "Tools"],
    variables: {
      pieces: ["5-piece", "10-piece"],
      handleMaterial: ["wood", "plastic"]
    }
  },{
    name: "Modern Sofa",
    image: [
      "https://images.pexels.com/photos/1866149/pexels-photo-1866149.jpeg",
      "https://images.pexels.com/photos/1866150/pexels-photo-1866150.jpeg",
      "https://images.pexels.com/photos/1866151/pexels-photo-1866151.jpeg",
      "https://images.pexels.com/photos/1866152/pexels-photo-1866152.jpeg",
      "https://images.pexels.com/photos/1866153/pexels-photo-1866153.jpeg"
    ],
    description: "Stylish and comfortable modern sofa for your living room.",
    impulse: true,
    price: 499.99,
    countInStock: 25,
    numSells: 200,
    rating: 4.8,
    numReviews: 150,
    _user_id: "6759b9018d40c580c216fdeb",
    type: ["Home", "Decoration"],
    variables: {
      colors: ["gray", "blue", "beige"],
      materials: ["fabric", "leather"]
    }
  },
  {
    name: "Ceramic Dinner Set",
    image: [
      "https://images.pexels.com/photos/4792034/pexels-photo-4792034.jpeg",
      "https://images.pexels.com/photos/4792035/pexels-photo-4792035.jpeg",
      "https://images.pexels.com/photos/4792036/pexels-photo-4792036.jpeg",
      "https://images.pexels.com/photos/4792037/pexels-photo-4792037.jpeg",
      "https://images.pexels.com/photos/4792038/pexels-photo-4792038.jpeg"
    ],
    description: "Elegant ceramic dinner set for family gatherings and occasions.",
    impulse: false,
    price: 79.99,
    countInStock: 50,
    numSells: 300,
    rating: 4.6,
    numReviews: 95,
    _user_id: "6759b9018d40c580c216fdeb",
    type: ["Home", "Dinnerware"],
    variables: {
      pieces: ["16-piece", "24-piece"],
      colors: ["white", "navy"]
    }
  },
  {
    name: "Kitchen Knife Set",
    image: [
      "https://images.pexels.com/photos/4226899/pexels-photo-4226899.jpeg",
      "https://images.pexels.com/photos/4226900/pexels-photo-4226900.jpeg",
      "https://images.pexels.com/photos/4226901/pexels-photo-4226901.jpeg",
      "https://images.pexels.com/photos/4226902/pexels-photo-4226902.jpeg",
      "https://images.pexels.com/photos/4226903/pexels-photo-4226903.jpeg"
    ],
    description: "High-quality stainless steel kitchen knife set.",
    impulse: false,
    price: 59.99,
    countInStock: 100,
    numSells: 400,
    rating: 4.7,
    numReviews: 120,
    _user_id: "6759b9018d40c580c216fdeb",
    type: ["Home", "Kitchenware", "Tools"],
    variables: {
      pieces: ["5-piece", "10-piece"],
      handleMaterial: ["wood", "plastic"]
    }
  }
]

module.exports = productsData;