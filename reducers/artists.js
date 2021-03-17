import { SET_ARTISTS, ADD_ARTISTS } from '../utils/constants'

const artistsReducer = (state = {}, action) => {
    switch (action.type) {
        case SET_ARTISTS:
            return artists
        case ADD_ARTISTS:
            return {
                ...state,
                next: artists.next,
                items: {...state_items, ...artists.items}
            }    
                default:
                    return state
    }
}

export default artistsReducer