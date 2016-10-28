require('styles/App.less');

export default {
  path: 'main',

  getChildRoutes(partialNextState, cb) {

    alert()

    require.ensure([], (require) => {
      cb(null, [
        require('components/market/route')
      ])
    })
  },

  getComponent(nextState, cb) {

    alert()

    require.ensure([], (require) => {
      cb(null, require('components/FrameHeader').default) //头部
    }, 'main')
  }
}
