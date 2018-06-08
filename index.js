const app = "8d9f91b8f1de6587d899bbecba9e8ba60bc51c91";
const token = 'YOUR_TOKEN_HERE'
fetch('https://api.github.com/user/repos', {
    headers: {
        Authorization: `token ${token}`
    }
}).then(res => res.json()).then(json => console.log(json));
