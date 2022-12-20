const POSTS_URL = "https://jsonplaceholder.typicode.com/posts";
let isLoading = false;
// const createNewPost = () => {
//     isLoading = true;
//     fetch(POSTS_URL, {
//         method: "POST"
//     })
//         .then((response) => response.json())
//         .then((result) => {
//             console.log("result", result);
//         })
//         .catch((error) => {
//             console.log("error", error);
//         })
//         .finally(() => {
//             isLoading = false;
//         });
// };
// createNewPost();

const createNewPost = async () => {
    try {
        isLoading = true;
        const response = await fetch(POSTS_URL, {
            method: 'POST'
        })
        const posts = await response.json()
        console.log(posts)

    } catch (e) {
        console.log(e)
    } finally {
        console.log('finally')
    }
}
createNewPost()