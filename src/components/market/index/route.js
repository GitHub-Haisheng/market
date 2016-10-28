module.exports = {
  path: '/market/index',

  getComponent(nextState, cb) {
    require.ensure([], (require) => {
      cb(null,
        require('components/market/index/MarketIndexContent').default)
    }, 'index')
  }
}
