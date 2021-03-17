import {

  SET_ALBUMS,
  ADD_ALBUMS,
  SET_ARTISTS,
  ADD_ARTISTS,
  SET_PLAYLIST,
  ADD_PLAYLIST

} from '../utils/constants'
import { get } from '../utils/api'

export const setAlbums = (albums) => ({
        type: SET_ALBUMS,
        albums
})

export const addAlbums = (albums) => ({
    type: ADD_ALBUMS,
    albums
})


export const setArtists = (artists) => ({
    type: SET_ARTISTS,
    artists
})

export const addArtists = (artists) => ({
    type: ADD_ARTISTS,
    artists
})


export const setPlaylist = (playlist) => ({
    type: SET_PLAYLIST,
    playlist
})

export const addPlaylist = (playlist) => ({
    type: ADD_PLAYLIST,
    playlist
})

export const initiateGetResult = (searchTerm) => {
    return async (dispatch) => {
        try {
            const API_URL = `https://api.spotify.com/v1/search?query=${encodeURIComponent(
              searchTerm
            )}&type=album,playlist,artist`;
            const result = await get(API_URL)
            console.log(result)
            const { albums, artists, playlists } = result
            dispatch(setAlbums(albums))
            dispatch(setArtists(artists))
            return dispatch(setPlayList(playlists))
          } catch (error) {
            console.log('error', error)
          }
        }
      }

export const initiateLoadMoreAlbums = (url) => {
  return async (dispatch) => {
      try {
        console.log('url', url)
        const result = await get(url)
        console.log('categories', result)
        return dispatch(addAlbums(results.albums))
      } catch (error) {
        console.log('error', error)
      }
  }
}

export const initiateLoadMoreArtists = (url) => {
  return async (dispatch) => {
      try {
        console.log('url', url)
        const result = await get(url)
        console.log('categories', result)
        return dispatch(addArtists(results.albums))
      } catch (error) {
        console.log('error', error)
      }
  }
}

export const initiateLoadMoreArtistPlaylist = (url) => {
  return async (dispatch) => {
      try {
        console.log('url', url)
        const result = await get(url)
        console.log('categories', result)
        return dispatch(addPlaylist(results.playlist))
      } catch (error) {
        console.log('error', error)
      }
  }
}