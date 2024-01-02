const request = require('supertest')
const app = require('../app')

describe('Test API endpoints', () => {
    it('should fetch all todos', async () => {
      const response = await request(app).get('/api/v1/todos');
      expect(response.status).toBe(200);
      expect(response.body).toHaveProperty('allTodos');
    });
  });

  describe('Authentication flow', () => {
    it('should register a new user and login', async () => {
      await request(app)
        .post('/api/register')
        .send({ username: 'testuser', password: 'testpass' });
  
      const loginResponse = await request(app)
        .post('/api/login')
        .send({ username: 'testuser', password: 'testpass' });
  
      expect(loginResponse.status).toBe(200);
    });
  });