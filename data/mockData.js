
const users = [
  {
    id: 1,
    username: 'CarFanatic_88',
    profileImage: '/images/user1.jpg',
    bio: 'Just a dude who loves cars, coffee, and cruises. All about that JDM life.',
    isMechanic: false
  },
  {
    id: 2,
    username: 'WrenchMaster',
    profileImage: '/images/mechanic1.jpg',
    bio: 'ASE Certified Master Technician with 15 years of experience. Specializing in European imports. If it has wheels, I can fix it.',
    isMechanic: true,
    verifiedWrench: true,
    location: 'San Francisco, CA'
  },
  {
    id: 3,
    username: 'TireSlayer',
    profileImage: '/images/user2.jpg',
    bio: 'Drift enthusiast and weekend track warrior. Always looking for the next project car.',
    isMechanic: false
  },
  {
    id: 4,
    username: 'VintageVibes',
    profileImage: '/images/mechanic2.jpg',
    bio: 'Restoring classic American muscle is my passion and my job. From rust buckets to show winners.',
    isMechanic: true,
    verifiedWrench: true,
    location: 'Austin, TX'
  }
];

const posts = [
  {
    id: 1,
    authorId: 1,
    content: 'Sunset drive with the Supra was a blast! The new exhaust sounds mean. #car #jdm #supra',
    images: ['/images/post1.jpg'],
    createdAt: '2026-02-01T18:25:43.511Z'
  },
  {
    id: 2,
    authorId: 2,
    content: 'Just finished a full engine rebuild on this beautiful Porsche 911. Purrs like a kitten now. Another happy customer!',
    images: ['/images/post2.jpg', '/images/post3.jpg'],
    createdAt: '2026-02-02T10:30:00.000Z'
  },
  {
    id: 3,
    authorId: 3,
    content: 'New shoes for the S13! Ready for the next drift event. Who else is going?',
    images: ['/images/post4.jpg'],
    createdAt: '2026-02-03T12:00:00.000Z'
  }
];

const comments = [
    { id: 1, postId: 1, authorId: 3, content: 'That color is sick! 🔥' },
    { id: 2, postId: 2, authorId: 1, content: 'Incredible work, man. True craftsmanship.' },
    { id: 3, postId: 2, authorId: 4, content: 'Clean engine bay. Respect.' }
];

const reviews = [
    {id: 1, mechanicId: 2, rating: 5, comment: 'WrenchMaster is the real deal. Solved a mysterious electrical issue on my BMW that two other shops couldn\'t diagnose.'},
    {id: 2, mechanicId: 2, rating: 5, comment: 'Professional, fair pricing, and incredibly knowledgeable. My go-to for my Audi.'},
    {id: 3, mechanicId: 4, rating: 4, comment: 'Did a great job on my \'69 Camaro. Took a bit longer than quoted, but the quality of the work speaks for itself.'}
];


// Helper function to get user by ID
const getUserById = (id) => users.find(u => u.id === id);

// Helper function to get comments by Post ID
const getCommentsByPostId = (postId) => comments.filter(c => c.postId === postId);

// Helper function to get reviews by Mechanic ID
const getReviewsByMechanicId = (mechanicId) => reviews.filter(r => r.mechanicId === mechanicId);

module.exports = {
    users,
    posts,
    comments,
    reviews,
    getUserById,
    getCommentsByPostId,
    getReviewsByMechanicId
};
