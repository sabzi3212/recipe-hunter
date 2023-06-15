import React from 'react';
import NavigationBar from '../pages/Shared/NavigationBar';
import Blogs from '../pages/Blogs/Blogs';
import Footer from '../pages/Shared/Footer';

const BlogsLayout = () => {
    return (
        <div>
            <NavigationBar></NavigationBar>
            <Blogs></Blogs>
            <Footer></Footer>
        </div>
    );
};

export default BlogsLayout;