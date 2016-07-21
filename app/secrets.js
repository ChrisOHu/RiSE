//TODO: keep **PRODUCTION SECRETS** secrets

let IS_DEV = true
  
OSS_SECRETS

if (IS_DEV) {
  OSS_SECRETS = {
    accessKeyId: 'goQK5m49QVoPdn50',
    secretAccessKey: 'jslh1DJolaGsEn10pYEE8X2QGAXYrr'
  }
} else {
  // TODO: should keep **PRODUCTION SECRETS** secrets
}

export default {
  OSS_SECRETS
}
