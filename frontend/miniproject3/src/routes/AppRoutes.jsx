import { Routes, Route } from 'react-router-dom';
import Posts from '../pages/Posts';
import NewPost from '../pages/NewPost';
import Post from '../pages/Post';
import EditPost from '../pages/EditPost';
import PageNotFound from '../pages/PageNotFound';

function AppRoutes() {
    return (
        <Routes>
            <Route path="/" element={<Posts />} />
            <Route path="/posts" element={<Posts />} />
            <Route path="/posts/new" element={<NewPost />} />
            <Route path="/posts/:id" element={<Post />} />
            <Route path="/posts/:id/edit" element={<EditPost />} />
            <Route path="*" element={<PageNotFound />} />
        </Routes>
    );
};

export default AppRoutes;
