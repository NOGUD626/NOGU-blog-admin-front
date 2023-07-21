import {createBrowserRouter} from "react-router-dom";
import App from '@/App';
import {ArticleRouter} from './ArticleRouter';

export const router = createBrowserRouter([
    ...ArticleRouter,
    {path: "/", element: <App/>}, // Appコンポーネントを関数として渡す
]);
