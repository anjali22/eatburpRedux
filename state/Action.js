import ActionTypes from './ActionTypes';

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

  }

  static setSearchedFood(food) {

  }
  
  static setPlaces(places) {
   
  }

  static setFood(food) {

  }

  static setRatedFood(food) {

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
