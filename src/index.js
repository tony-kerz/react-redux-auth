import assert from 'assert'
import _ from 'lodash'
import debug from 'debug'
import getAuthRedux from './get-auth-redux'

export AuthContainer from './auth-container'
export IfAuthorizedContainer from './if-authorized-container'
export getAuth0Auth from './get-auth-auth0.js'
export getHelloAuth from './get-auth-hello.js'
export getAzureHelloProvider from './hello/azure.js'
export getOidcHelloProvider from './hello/oidc.js'

const dbg = debug('lib:auth')

const auth = {}

export function configure(config) {
  dbg('configure: config=%o', config)
  assert(config, 'config required')
  const {postAuthLocation, impl, onNotAuthorized} = config
  const picked = _.pick(config, ['rules', 'notAuthorizedLocation', 'onNotAuthorized'])

  Object.assign(auth, {
    ...getAuthRedux({
      postAuthLocation,
      impl,
      onNotAuthorized
    }),
    ...picked
  })
}

export default auth
