import express, { Application, Request, Response } from 'express';
import cors from 'cors';
import { ProductRouters } from './app/modules/Stationery-Product/StationeryProduct.router';

const app: Application = express();

app.use(express.json());
app.use(cors());

app.use('/api/v1/products', ProductRouters);

app.get('/', (req: Request, res: Response) => {
  res.send('Stationery Shop BD Running');
});

export default app;
