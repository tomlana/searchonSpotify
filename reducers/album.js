import { SET_ALBUMS, ADD_ALBUMS } from '../utils/constants'

const albumReducer = (state = {}, action) => {
    switch (action.type) {
        case SET_ALBUMS:
        return albums
        case ADD_ALBUMS:    
        return ADD_ALBUMS
        return{
            ...state,
            next: albums.next,
            items: [...state.items, ...albums.items]
        }
        default:
            return state
    }

}

export default albumReducer