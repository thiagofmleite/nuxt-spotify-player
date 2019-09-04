import axios from 'axios'
import * as store from '~/store/modules/search'

let state = {
  albums: { items: [] },
  artists: { items: [] }
}

let mockCommit = (mutation, payload) => {
  store.mutations[mutation](state, payload)
}

let mockAxiosGetResult
jest.mock('axios', () => ({
  $get: jest.fn(() => Promise.resolve(mockAxiosGetResult)),
  setToken: jest.fn(),
  setHeader: jest.fn()
}))

let action
const testActionsWithBindedMock = (
  context = { commit: mockCommit },
  payload = {}
) => {
  return store.actions[action].bind({ $axios: axios })(context, payload)
}

describe('Search', () => {
  test('Do the search an artist', async done => {
    action = 'search'
    mockAxiosGetResult = { albums: [], artists: [] }
    const result = await testActionsWithBindedMock(
      { commit: mockCommit, rootGetters: { token: '' } },
      { query: 'muse' }
    )

    expect(axios.$get).toBeCalledWith('/search', {
      params: { q: 'muse', type: 'album,artist' }
    })

    done()
  })

  test('Do the search an album', async done => {
    action = 'search'
    mockAxiosGetResult = { albums: [], artists: [] }
    const result = await testActionsWithBindedMock(
      { commit: mockCommit, rootGetters: { token: '' } },
      { query: 'black', type: 'album' }
    )

    expect(axios.$get).toBeCalledWith('/search', {
      params: { q: 'black', type: 'album' }
    })

    done()
  })
})
