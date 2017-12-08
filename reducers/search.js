import {SEARCH, searchAction} from '../actions/search';

const initialState = {
    item: '',
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SEARCH':
            return {
                ...state,
                item: action.item || '',
            };
        default: 
          return state;
    }
};

console.log('initialState',initialState);
console.log('searchState',reducer(initialState, searchAction('anjali')));
export default reducer;