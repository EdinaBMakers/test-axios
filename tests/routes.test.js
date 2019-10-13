'use strict';

const request = require('supertest');
const app = require('../app');

describe('Routes', () => {
  describe('/advice', () => {
    test('It can handle request', (done) => {
      request(app).get('/advice').then((response) => {
        expect(response.status).toStrictEqual(200);
        done();
      });
    });
  });
});