import { Router } from 'express';
import { getSin, getCos, getTan } from '../controllers/trigController';

const router = Router();

router.get('/sin/:id', getSin);
router.get('/cos/:id', getCos);
router.get('/tan/:id', getTan);

export default router;
