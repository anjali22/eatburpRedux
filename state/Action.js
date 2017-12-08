import ActionTypes from './ActionTypes';

export default defineActionConstants([
  'SET_CURRENT_USER',
  'SIGN_IN',
  'SIGN_OUT',
  'SET_BREWERIES',
  'COMPUTE_DISTANCES',
  'SET_NEARBY_BREWERIES',
  'SET_VISITED_BREWERIES',
  'ADD_VISITED_BREWERY',
  'REMOVE_VISITED_BREWERY',
  'TOGGLE_VISITED_BREWERY',
  'SET_SEARCHED_PLACES',
  'SET_SEARCHED_FOOD',
  'SET_PLACES',
  'SET_FOOD',
  'SET_RATED_FOOD'
]);

export const SET_SEARCHED_PLACES = 'SET_SEARCHED_PLACES'
export const SET_SEARCHED_FOOD = 'SET_SEARCHED_FOOD'
export const SET_PLACES = 'SET_PLACES'
export const SET_FOOD = 'SET_FOOD'
export const SET_RATED_FOOD = 'SET_RATED_FOOD'

export default class Actions {
  static setCurrentUser(user) {
    return {
      type: ActionTypes.SET_CURRENT_USER,
      user,
    }
  }

  static signIn(user) {
    return {
      type: ActionTypes.SIGN_IN,
      user,
    }
  }

  static signOut() {
    return {
      type: ActionTypes.SIGN_OUT,
    }
  }

  static setSearchedPlaces(places) {
    return{
      type: SET_SEARCHED_PLACES,
      places      
    }

  }

  static setSearchedFood(food) {
    return{
      type: SET_SEARCHED_FOOD,
      food
    }

  }
  
  static setPlaces(places) {
    return{
      type: SET_PLACES,
      places
    }
   
  }

  static setFood(food) {
    return{
      type: SET_FOOD,
      food
    }

  }

  static setRatedFood(food) {
    return{
      type: SET_RATED_FOOD,
      food
    }

  }

  static setNearbyPlaces(restaurantIds) {
    return {
      type: ActionTypes.SET_NEARBY_BREWERIES,
      restaurantIds,
    }
  }

  static computeDistances() {
    return {
      type: ActionTypes.COMPUTE_DISTANCES,
    }
  }
}

//Action performed when clicking on search button (if not selecting from suggested items )
export const searchAction = (item) =>{
  return{
    type: SEARCH,
    item
  }
}

//Action performed when suggestions pop out after writing few letters in search bar
export const filterAction = (searchedText) => {
  return{
    type: SEARCH,
    searchedText
  }
}

//Action performed on selected button (what to eat/ where to eat)
export const setSearchFilter = (filter) => {
  return{
    type: SET_SEARCH_FILTER,
    filter
  }
}

//Action performed when selecting an item from the list and navigating to that particular item (might be restaurant detailed screen or item list screen)
export const navigateToItem = (id) => {
  return{
    type: NAVIGATE_TO_ITEM,
    id
  }
}

//Action performed when moving to another tab Home, rating, setting etc.
export const tabFilter = (filter) => {
  return {
    type: TAB_FILTER,
    filter
  }
}
