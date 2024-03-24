import cookieParser from 'cookie-parser';
import cors from 'cors';
import express from 'express';
import authRoutes from './routes/auth';
import postRoutes from './routes/posts';
import usersRoutes from './routes/users';

const app = express();

app.use(express.json());
app.use(cors());
app.use(cookieParser());

app.use('/api/auth', authRoutes);
app.use('/api/users', usersRoutes);
app.use('/api/posts', postRoutes);

const PORT = 8800;

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
