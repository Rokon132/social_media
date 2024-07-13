import React from 'react';
import './home_style.css';

const Home = () => {
    return (
        <home>
            <div className="app">
                <Sidebar />
                <MainContent />
            </div>
        </home>

    );
};

const Sidebar = () => {
    return (
        <div className="sidebar">
            <h1>Instagram</h1>
            <ul>
                <li>Home</li>
                <li>Search</li>
                <li>Explore</li>
                <li>Reels</li>
                <li>Messages</li>
                <li>Notifications</li>
                <li>Create</li>
                <li>Profile</li>
                <li>Threads</li>
                <li>More</li>
            </ul>
        </div>
    );
};

const MainContent = () => {
    const posts = [
        {
            username: 'paragonfoodshop',
            imgSrc: 'post1.jpg',
            caption: 'Caption for the first post...',
            likes: '1,234',
            comments: '56',
        },
        {
            username: 'leomessi',
            imgSrc: 'post2.jpg',
            caption: 'VAMOSSS!!! A LA FINAL!!! ...',
            likes: '7,510,987',
            comments: '85,770',
        },
    ];

    return (
        <div className="main-content">
            {posts.map((post, index) => (
                <Post key={index} post={post} />
            ))}
        </div>
    );
};

const Post = ({ post }) => {
    return (
        <div className="post">
            <div className="post-header">
                <img src={`./images/${post.imgSrc}`} alt="User" />
                <p>{post.username}</p>
            </div>
            <img src={`./images/${post.imgSrc}`} alt="Post" className="post-image" />
            <div className="post-footer">
                <p>{post.caption}</p>
                <div className="post-stats">
                    <p>{post.likes} likes</p>
                    <p>{post.comments} comments</p>
                </div>
            </div>
        </div>
    );
};

export default Home;
