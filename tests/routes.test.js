'use strict';

const request = require('supertest');
const app = require('../app');
const axios = require('axios');

jest.mock('axios');

function externalAdviceResponse(expectedAdvice) {
  axios.get.mockImplementation(() => {
    return Promise.resolve({
      data: {slip: {advice: expectedAdvice}}});
  });
}

function externalApiError(error) {
  axios.get.mockImplementation(() => {
    return Promise.reject(error);
  })
}

describe('Routes', () => {
  describe('/advice', () => {
    test('It can handle request', (done) => {
      externalAdviceResponse('');

      request(app).get('/advice').then((response) => {
        expect(response.status).toStrictEqual(200);
        done();
      });
    });

    test('It can respond with an advice', (done) => {
      const expectedAdvice = 'Some people would be better off if they took their own advice.';
      
      externalAdviceResponse(expectedAdvice);

      request(app).get('/advice').then((response) => {
        expect(response.body).toStrictEqual(expectedAdvice);
        done();
      })
    });

    test('It can handle external api error', (done) => {
      externalApiError('External API error');

      request(app).get('/advice').then((response) => {
        expect(response.status).toStrictEqual(500);
        expect(response.body).toStrictEqual('External API error');
        done();
      });
    });
  });
});