/* eslint-env node */
'use strict';

module.exports = function(deployTarget) {
  let ENV = {
    build: {},
    'revision-data': {
      type: 'git-commit'
    },
    's3-index': {
      profile: 'bendemboski',
      bucket: 'leioutconfidential.com',
      region: 'us-east-1',
      allowOverwrite: true
    },
    s3: {
      profile: 'bendemboski',
      bucket: 'leioutconfidential.com',
      region: 'us-east-1'
    }
  };

  if (deployTarget === 'development') {
    ENV.build.environment = 'development';
  }

  if (deployTarget === 'staging') {
    ENV.build.environment = 'production';
  }

  if (deployTarget === 'production') {
    ENV.build.environment = 'production';
  }

  return ENV;
};
