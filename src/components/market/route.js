module.exports = {
  path: 'market',

  getComponent(nextState, cb) {
    require.ensure([], (require) => {
      cb(null,
        require('components/market/MarketWrap').default)
    }, 'market')
  },

  childRoutes: [
    require('components/market/index/route'),
    require('components/market/stock/route')
  ]
}

