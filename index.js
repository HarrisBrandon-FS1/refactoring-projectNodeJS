

  function fetchUserData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
        const user = { id: userId, name: 'User ' + userId };
        resolve(user);
     }, 1000);
    })
}

  function fetchUserPosts() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const posts = ['Post 1', 'Post 2', 'Post 3'];
        resolve(posts);
     }, 1000);
    })
}

  function fetchPostComments() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const comments = ['Comment 1', 'Comment 2'];
        resolve(comments);
     }, 1000);
    })
}


Promise.all([
    fetchUserData,
    fetchUserPosts,
    fetchPostComments
]).then(() => {
    console.log('User:', user);
    console.log('Posts:', posts);
    console.log('Comments', comments);
}).catch((error) => {
    console.log(error.name + ' ' + error.message)
});
