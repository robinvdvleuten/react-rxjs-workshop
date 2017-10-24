export const searchQuery = (query) => ({
  type: 'SEARCH_QUERY', query
})

export const resultsReceived = (results) => ({
  type: 'SEARCH_QUERY_SUCCESS', results
})
