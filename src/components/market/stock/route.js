module.exports = {
  path: '/market/stock',

  getComponent(nextState, cb) {
    require.ensure([], (require) => {
      cb(null,
        require('components/market/stock/MarketStockContent').default)
    }, 'stock')
  }
}
