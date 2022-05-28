import { Router } from 'express';
import { authenticateRoutes } from './authenticate.routes';
import { categoriesRoutes } from './categories.routes';
import { specificationsRouter } from './specifications.routes';
import { usersRouters } from './users.routes';
import { carsRouter } from './cars.routes';

const router = Router();

router.use("/categories", categoriesRoutes);
router.use("/specifications", specificationsRouter);
router.use("/users", usersRouters);
router.use(authenticateRoutes);
router.use("/cars", carsRouter);

export { router };
