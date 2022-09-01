const express = require('express');
const router = express.Router();
const pool = require('../modules/pool.js');

//POST Route
router.post('/', (req, res) => {
    console.log('in POST /gallery', req.body);
    const queryText = `INSERT INTO "gallery" ("path", "description", "likes") 
                        VALUES ($1, $2, $3);`;
    pool.query(queryText, [req.body.path, req.body.description, req.body.likes])
    .then((result) => {
        console.log('POST success');
        res.sendStatus(200);
    }).catch((error) => {
        console.log('Error in POST /gallery', error);
        res.sendStatus(500);
    });
});

// PUT Route
router.put('/like/:id', (req, res) => {
    const galleryId = req.params.id;
    console.log('in PUT /gallery/like', galleryId);
    const queryText = `UPDATE "gallery" SET "likes" = "likes" + 1
                        WHERE "id" = $1;`;
    pool.query(queryText, [galleryId]).then((results) => {
        console.log('PUT success');
        res.sendStatus(200);
    }).catch((error) => {
        console.log('Error in PUT /gallery/likes', error);
        res.sendStatus(500);
    });
}); 

// DELETE Route
router.delete('/:id', (req, res) => {
    const galleryId = req.params.id;
    console.log('in DELETE /gallery', galleryId);
    const queryText = `DELETE FROM "gallery"
                       WHERE "id" = $1`;
    pool.query(queryText, [galleryId])
        .then((results) => {
            console.log('DELETE success');
            res.sendStatus(200);
        }).catch((error) => {
            res.sendStatus(500);
        })
});

// GET Route
router.get('/', (req, res) => {
    console.log('in GET /gallery')
    const queryText = 'SELECT * FROM "gallery" ORDER BY "description";';
    pool.query(queryText).then((results) => {
        console.log('SELECT success');
        res.send(results.rows);
    }).catch((error) => {
        console.log('Error in GET /gallery', error);
        res.sendStatus(500);
    });
}); 

module.exports = router;