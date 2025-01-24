import { createSlice } from '@reduxjs/toolkit';

/*
type: [
Main "Clothes",

Main "Electronics"
"Notebooks",
"Computers",
"Games",
Main "Home",
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

*/

export const filterSlice = createSlice({
  name: 'filter',
  initialState: {
    mainCategory: '',
    category: [],
    priceMin: '',
    priceMax: '',
    sortBy: '',
    review: '',
    order: '',
    localFilter: '',
    currentPage: '1',
    totalPages: '1',
    categoryOptions: [],
    priceMinDefault: '',
    priceMaxDefault: '',

  },
  reducers: {
    setFilter(state, action) {
      const { name, value } = action.payload;
      state[name] = value;
    },

    setCategory(state, action) {
      const newCategory = action.payload;
      console.log(newCategory)
      if (!state.category.includes(newCategory)) {
        const newArray = state.category.concat([newCategory]);
        state.category = newArray;
      } else {
        const newArray = state.category.filter(
          (cat) => cat !== newCategory
        );
        state.category = newArray;
      }
    },

    removeCategory(state, action) {
      const categoryToRemove = action.payload;
      console.log(categoryToRemove)
      const categories = state.category.filter(
        (cat) => cat !== categoryToRemove
      );
      state.category = categories;
    },

    resetFilters(state) {
      state.category = [];
      state.priceMin = '';
      state.priceMax = '';
      state.sortBy = '';
      state.review = '';
      state.order = '';
    },

    setPages(state, action) {
      state.currentPage = action.payload.currentPage;
      state.totalPages = action.payload.totalPages;
    },

    setCategoryOptions(state, action) {
      const mainCategory = action.payload.categoryOptions;

      switch (mainCategory) {
        case "Clothes":
          state.categoryOptions = [
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
          ]
          break;
        case "Men Clothes":
          state.categoryOptions = [
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
            "Costumes & Cosplay"
          ]
          break;
        case "Women Clothes":
          state.categoryOptions = [
            "Women Clothes",
            "Dresses",
            "Tops",
            "Skirts",
            "Leggings",
            "Maternity Wear",
            "Wedding Dresses",
            "Sleepwear & Pajamas"
          ]
          break;
        case 'Eletronics':
          state.categoryOptions = [
            "Electronics",
            "Notebooks",
            "Computers",
            "Games",
          ]
          break;
        case 'Books':
          state.categoryOptions = [
            'Books',
            "Adventure",
            "Drama",
            "Policial",
            "Terror",
          ]
          break;
        case 'Home':
          state.categoryOptions = [
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
          ]
          break;
        default:
          state.categoryOptions = [
            'Others'
          ]
      };
    },

    setPriceDefault(state, action) {
      state.priceMinDefault = action.payload.priceMinDefault;
      state.priceMaxDefault = action.payload.priceMaxDefault;
    }
  }
});

export const filterActions = filterSlice.actions;
export default filterSlice.reducer;