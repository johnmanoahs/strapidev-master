'use strict';

/**
 * email-signup service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::email-signup.email-signup');
