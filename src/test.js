const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('../app');

// Configure Chai
chai.use(chaiHttp);
chai.should();

describe('User Authentication', () => {
  let authToken; // Store the authentication token for use in requests

  // Login before running tests
  before((done) => {
    chai.request(app)
      .post('/api/login')
      .send({ username: 'your-username', password: 'your-password' }) 
        authToken = res.body.token; 
        done();
      });
  });


  // CRUD Operations for Notes
  describe('CRUD Operations for Notes', () => {
    // Test creating a note
    it('should create a new note', (done) => {
      chai.request(app)
        .post('/api/notes')
        .set('Authorization', `Bearer ${authToken}`)
        .send({ title: 'Test Note', content: 'This is a test note', user_id: 1 })
        .end((err, res) => {
          res.should.have.status(201);
          res.body.should.be.a('object');
          res.body.should.have.property('id');
          done();
        });
    });

    // Test reading a note
    it('should get a specific note', (done) => {
      chai.request(app)
        .get('/api/notes/1')
        .set('Authorization', `Bearer ${authToken}`)
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.a('object');
          res.body.should.have.property('id');
          done();
        });
    });

    // Test updating a note
    it('should update a specific note', (done) => {
      chai.request(app)
        .put('/api/notes/1')
        .set('Authorization', `Bearer ${authToken}`)
        .send({ title: 'Updated Test Note', content: 'This is an updated test note' })
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.a('object');
          res.body.should.have.property('id');
          res.body.title.should.equal('Updated Test Note');
          done();
        });
    });

    // Test deleting a note
    it('should delete a specific note', (done) => {
      chai.request(app)
        .delete('/api/notes/1')
        .set('Authorization', `Bearer ${authToken}`)
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.a('object');
          res.body.should.have.property('message').equal('Note deleted successfully');
          done();
        });
    });
  });

// Test searching for notes by title
describe('GET /api/search', () => {
    it('should search for notes by title', (done) => {
      const searchTerm = 'Test'; 
  
      chai.request(app)
        .get(`/api/search?title=${searchTerm}`)
        .set('Authorization', `Bearer ${authToken}`) 
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.an('array');
          res.body.some((note) => note.title.includes(searchTerm)).should.be.true;
          done();
        });
    });
  });
  

 // Test sharing a note with another user
describe('POST /api/notes/:id/share', () => {
    it('should share a note with another user', (done) => {
      const noteId = 1; // Replace with the ID of the note you want to share
      const userIdToShareWith = test.email.com; // Replace with the email  of the user you want to share the note with 
      chai.request(app)
        .post(`/api/notes/${noteId}/share`)
        .set('Authorization', `Bearer ${authToken}`) // Set the Authorization header with the token
        .send({ userIdToShareWith })
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.a('object');
          res.body.should.have.property('message').equal(`Note ${noteId} shared with user ${userIdToShareWith} successfully`);
          done();
        });
    });
  });
  
