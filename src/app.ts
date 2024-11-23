import express, { Application, Request, Response } from 'express';
import cors from 'cors';
import { ProductRouters } from './app/modules/Stationery-Product/StationeryProduct.router';
import { OrderRouters } from './app/modules/Orders/Orders.router';

const app: Application = express();

app.use(express.json());
app.use(cors());

app.use('/api/products', ProductRouters);
app.use('/api/Orders', OrderRouters);

app.get('/', (req: Request, res: Response) => {
  res.send('Stationery Shop BD Running');
});

export default app;
