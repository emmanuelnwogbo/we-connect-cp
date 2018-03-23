import express from 'express';
const router = express.Router();

router.get('/api/v1/businesses/', (req, res) => {});

router.get('/api/v1/businesses/:businessid/reviews', (req, res) => {});

router.post('/api/v1/businesses/:businessid/reviews', (req, res) => {});

router.post('/api/v1/businesses/', (req, res) => {});

router.patch('/api/v1/businesses/:businessid', (req, res) => {});

router.delete('/api/v1/businesses/:businessid', (req, res) => {});

router.post('/api/v1/auth/signup', (req, res) => {
  console.log(req);
});

router.post('/api/v1/auth/login', (req, res) => {
  console.log(req);
});

export default router;
