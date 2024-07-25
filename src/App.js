import './App.css';
import { Header } from './components/Header';
import { Blogs } from './components/Blogs';
import { Pagination } from './components/Pagination';
import { useContext } from 'react';
import { AppContext } from './context/AppContext';
import { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';

function App() {
  const { fetchBlogPost } = useContext(AppContext);
  // console.log(fetchBlogPost());
  useEffect(() => {
    
  }, []);
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/blog/:blogId" element={<BlogsPage />} />
      <Route path="/tags/:tag" element={<TagPage />} />
      <Route path="/categories/:category" element={<Category />} />
    </Routes>
  );
}

export default App;
