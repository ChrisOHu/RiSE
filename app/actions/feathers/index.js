import { AsyncStorage } from 'react'
import feathers from 'feathers/client'
import hooks from 'feathers-hooks'
import authentication from 'feathers-authentication/client'
import rest from 'feathers-rest/client'

const globals = require('app/globals')

const host = 'http://localhost:3030'

export default function setup() {

  globals.feathers = feathers()
    .configure(rest(host).fetch(fetch))
    .configure(hooks())
    // Use AsyncStorage to store our login toke
    .configure(authentication({
      storage: AsyncStorage
    }))

  return globals.feathers
}

