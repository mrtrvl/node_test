const request = require('supertest');
const express = require('express');

const app = express();
app.get('/test', (req, res) => {
  res.json({ message: 'Server is working!' });
});

describe('GET /test', () => {
  it('should return server working message', async () => {
    const res = await request(app).get('/test');
    expect(res.statusCode).toBe(200);
    expect(res.body).toEqual({ message: 'Server is working!' });
  });
});
