import express, { request } from 'express';
import { getRepository } from 'typeorm';

import Ophanages from './models/Ophanages'

import './database/connection';


const app = express();

app.use(express.json());

app.post('/orphanages', async (req, res) => {
    const {
        name,
        latitude,
        longitude,
        about,
        instructions,
        opening_hours,
        open_on_weekends
    } = req.body;

    const orphanagesRepo = getRepository(Ophanages);

    const orphanage = orphanagesRepo.create({
        name,
        latitude,
        longitude,
        about,
        instructions,
        opening_hours,
        open_on_weekends
    });

    await orphanagesRepo.save(orphanage);

    return res.status(201).json(orphanage);
})

app.listen(3333);

// Driver Nativo: SQL puro, Query builder: ex. Knex.js, Adonis.js, ORM