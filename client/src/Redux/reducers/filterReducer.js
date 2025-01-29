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
    page: 1,
    totalPages: 1,
    totalDocuments: 0,
    categoryOptions: [],
    priceMinDefault: '',
    priceMaxDefault: '',
    expandFilter: 'false',
    expandSort: 'false',
    sortName: 'Relevância'
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
    
    resetFilters(state) {
      state.category = [];
      state.priceMin = '';
      state.priceMax = '';
      state.sortBy = '';
      state.sortName= 'Relevância';
      state.review = '';
      state.order = '';
      state.expandFilter = 'false';
      state.expandSort = 'false';
    },

    setPages(state, action) {
      state.page = action.payload.page;
      state.totalPages = action.payload.totalPages || state.totalPages;
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