export enum QueryKeys {
  PLANETS = 'planets',
  REBELS_POSITION = 'rebelsPosition',
  ODDS = 'odds',
  FALCON = 'falcon',
}

export const API_URL = 'http://localhost:8080'

export const PLANET_URL = `${API_URL}/routes`
export const REBELS_URL = `${API_URL}/empire`
export const ODDS_URL = `${API_URL}/answer`
export const FALCON_URL = `${API_URL}/millenium-falcon`
