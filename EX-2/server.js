import express from 'express';
import articleRouter from './routes/articleRoute.js';
import journalistRouter from './routes/journalistRoute.js';
import categoryRouter from './routes/categoriesRoute.js';
import logger from './middleware/logger.js';

const app = express();
const PORT = 3000;

app.use(express.json());
app.use(logger);

app.use('/article', articleRouter);
app.use('/journalist', journalistRouter);
app.use('/category', categoryRouter);


app.listen(PORT, () => {
    console.log(`🚀 Server is running on http://localhost:${PORT}`);
});