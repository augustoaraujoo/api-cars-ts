import { app } from '@shared/infra/http/app';
import request from 'supertest';
import { v4 as uuidV4 } from 'uuid';
import { createConnection } from "@shared/infra/typeorm/index";
import { Connection } from 'typeorm';
import { hash } from 'bcrypt';

let connection: Connection;

describe('list categories', () => {
    beforeAll(async () => {
        connection = await createConnection();
        await connection.runMigrations()
        const id = uuidV4();
        const password = await hash('admin', 8);

        await connection.query(
            `INSERT INTO USERS(id, name, email, password, "isAdmin", created_at, driver_license) 
        values('${id}', 'admin', 'admin@admin.com.br', '${password}', true, 'now()', 'ABC-2351')`
        );
    })
    afterAll(async () => {
        await connection.dropDatabase();
        await connection.close()
    })
    it('should be able to list all categories', async () => {

        const responseToken = await request(app).post('/sessions').send({
            email: 'admin@admin.com.br',
            password: 'admin'
        })
        const { token } = responseToken.body;
        console.log(token);

        await request(app).post('/categories').send({
            name: 'categories',
            description: 'categories',
        }).set({
            'Authorization': `Bearer ${token}`
        })
        const response = await request(app).get('/categories')
        expect(response.status).toBe(200);
        expect(response.body.length).toBe(1);
        expect(response.body[0]).toHaveProperty('id');
        expect(response.body[0].name).toEqual('Category Supertest');
    })
})