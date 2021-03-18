import { createStore, combineReducers, applyMidware, compose } from 'redux'
import thunk from 'redux'
import albumReducer from '../reducers/album'
import artistsReducer from '../reducers/artists'
import playlistReducer from '../reducers/playlist'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const store = createStore( 
    combineReducers({
        albums: albumReducer,
        artists: artistsReducer,
        playlist: playlistReducer
}),
    composeEnhancers(applyMidware(thunk))
)

export default store