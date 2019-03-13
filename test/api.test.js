const {send} = require('micro');
const request = require('supertest');
const server = require('../server');
const {ready} = server;

const token = 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImZvbyIsImlhdCI6MTU1MjQyNzE5NywiZXhwIjoxNTUyNTEzNTk3fQ.Ug5mfWe0Ql5i9Q4mMaiHw_gYw--Uzqe-g2WUSUpWbW0';

describe('dienstplan', () => {
    describe('api', () => {

        before(done => {
            ready(done);
        });

        // describe('register', () => {
        //     it('should return accesstoken', async () => {
        //         await request(server)
        //             .post('/api/register')
        //             .send({username: 'foo', password: 'bar'})
        //             .expect('Content-Type', /json/)
        //             .expect({auth: true, token})
        //             .expect(200)
        //         ;
        //     });
        // });

        describe('login', () => {
            it('should return accesstoken', async () => {
                await request(server)
                    .post('/api/login')
                    .send({username: 'foo', password: 'bar'})
                    .expect('Content-Type', /json/)
                    .expect({auth: true, token})
                    .expect(200)
                ;
            });
        });

        describe('access private content', () => {
            it('should return accesstoken', async () => {
                await request(server)
                    .get('/api/user')
                    .set({Authorization: token})
                    .expect(200)
                ;
            });
        });
    });
});
