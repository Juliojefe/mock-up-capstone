const express = require('express');
const path = require('path');
const data = require('./data/mockData');

const app = express();
const PORT = 3000;

// Set up the view engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Serve static files (CSS, images)
// NOTE: In a real app, you'd have actual images. For this mock-up, we'll just have broken image links.
app.use(express.static(path.join(__dirname, 'public')));


// --- ROUTES ---

// 1. Landing Page
app.get('/', (req, res) => {
    res.render('landing', { title: 'Welcome to CarCulture' });
});

// 2. Post Feed Page
app.get('/feed', (req, res) => {
    // We need to enrich the posts with author information
    const populatedPosts = data.posts.map(post => {
        const author = data.getUserById(post.authorId);
        const postComments = data.getCommentsByPostId(post.id).map(comment => {
           const commentAuthor = data.getUserById(comment.authorId);
           return { ...comment, author: commentAuthor};
        });
        return { ...post, author, comments: postComments };
    }).sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt)); // Sort by newest first

    res.render('feed', {
        title: 'Feed',
        posts: populatedPosts
    });
});

// 3. User & Mechanic Profile Page
// This one route handles both /users/:id and /mechanics/:id
app.get('/users/:id', (req, res) => {
    const userId = parseInt(req.params.id, 10);
    const user = data.getUserById(userId);

    if (!user) {
        return res.status(404).send('User not found');
    }

    // Fetch mechanic-specific data if applicable
    let reviews = [];
    if (user.isMechanic) {
        reviews = data.getReviewsByMechanicId(user.id);
    }

    res.render('profile', {
        title: `${user.username}'s Profile`,
        user,
        reviews
    });
});

// Redirect /mechanics/:id to the same /users/:id handler to keep things simple
app.get('/mechanics/:id', (req, res) => {
    res.redirect(`/users/${req.params.id}`);
});


// --- SERVER ---
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
