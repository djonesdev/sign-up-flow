import { takeLatest, put } from "redux-saga/effects";
import { registerApi } from "../../api/register";
import { registerUserFailureType, registerUserSuccessType, registerUserType } from "../actions/actionTypes";

// import config from 'config'
// import pokemonApi from 'api/pokemonApi'
// import {
//   getPokemonFailedAction,
//   getPokemonSuccessAction,
//   getPokemonDetailsSuccessAction,
//   getPokemonDetailsFailedAction,
//   getNextPokemonSuccessPageAction,
//   getNextPokemonFailedPageAction,
//   getPreviousPokemonPageFailedAction,
//   getPreviousPokemonPageSuccessAction,
//   getPokemonByGenerationFailedAction,
//   getPokemonByGenerationSuccessAction,
//   getPokemonDetailsForComparisonSuccessAction,
//   getPokemonDetailsForComparisonFailedAction
// } from '../actions/actionTypes'
// import { selectNextPokemonPageUrl, selectPreviousPokemonPageUrl } from 'redux/selectors'

// export function* getPokemon() {
//   try {
//     const pokemon = yield pokemonApi.getPokemon()
//     yield put({ type: getPokemonSuccessAction, payload: pokemon.data })
//   }
//   catch (error) {
//     yield put({ type: getPokemonFailedAction, error })
//     console.log(error)
//   }
// }

// export function* getAllPokemon() {
//   try {
//     const pokemon = yield pokemonApi.getAllPokemon()
//     yield put({ type: getPokemonSuccessAction, payload: pokemon.data })
//   }
//   catch (error) {
//     yield put({ type: getPokemonFailedAction, error })
//     console.log(error)
//   }
// }

// export function* getNextPaginatedPokemon() {
//   const url = yield select(selectNextPokemonPageUrl)
//   try {
//     const pokemon = yield pokemonApi.getPokemonPaginatedPage(url)
//     yield put({ type: getNextPokemonSuccessPageAction, payload: pokemon.data })
//   }
//   catch (error) {
//     yield put({ type: getNextPokemonFailedPageAction, error })
//     console.log(error)
//   }
// }

// export function* getPokemonByGeneration(payload) {
//   const { generationId } = payload
//   try {
//     const pokemon = yield pokemonApi.getPokemonByGeneration(generationId)
//     yield put({ type: getPokemonByGenerationSuccessAction, payload: pokemon.data.pokemon_species })
//   }
//   catch (error) {
//     yield put({ type: getPokemonByGenerationFailedAction, error })
//     console.log(error)
//   }
// }

// export function* getPreviousPaginatedPokemon() {
//   const url = yield select(selectPreviousPokemonPageUrl)
//   try {
//     const pokemon = yield pokemonApi.getPokemonPaginatedPage(url)
//     yield put({ type: getPreviousPokemonPageSuccessAction, payload: pokemon.data })
//   }
//   catch (error) {
//     yield put({ type: getPreviousPokemonPageFailedAction, error })
//     console.log(error)
//   }
// }

// export function* getPokemonStatForComparison(payload) {
//   const url = payload.pokemonName ? `${config.baseUrl}/pokemon/${payload.pokemonName}` : `${config.baseUrl}/pokemon/${payload.payload.newPokemon.name}`
//   try {
//     const pokemon = yield pokemonApi.getPokemonDetails(url)
//     yield put({ type: getPokemonDetailsForComparisonSuccessAction, payload: pokemon.data })
//   }
//   catch (error) {
//     yield put({ type: getPokemonDetailsForComparisonFailedAction, error })
//     console.log(error)
//   }
// }

// export function* getPokemonDetails(actionPayload) {
//   const { payload } = actionPayload
//   let detailsUrl = ''
//   try {
//     // I'm not a fan of this, but for some reason the details url provided when filtering by generation goes to /pokemon-species/:id and doesn't contain sprites
//     // But when calling all pokemon the detail url provided (/pokemon/:id) does
//     if(payload.includes('pokemon-species')) {
//       const pokemonId = payload.split("pokemon-species/").pop()
//       detailsUrl = `https://pokeapi.co/api/v2/pokemon/${pokemonId}`
//     } else {
//       detailsUrl = payload
//     }
//     const pokemonDetails = yield pokemonApi.getPokemonDetails(detailsUrl)
//     yield put({ type: getPokemonDetailsSuccessAction, payload: pokemonDetails.data })
//   }
//   catch (error) {
//     yield put({ type: getPokemonDetailsFailedAction, error })
//     console.log(error)
//   }
// }

export function* simpleFunction(payload) {
  try {
    const result = yield registerApi.register(payload)
    yield put({ type: registerUserSuccessType, payload: result });
  } catch (error) {
    yield put({ type: registerUserFailureType, payload: error });
    console.log(error);
  }
}

export default function* rootSaga() {
  yield takeLatest(registerUserType, simpleFunction);
}
