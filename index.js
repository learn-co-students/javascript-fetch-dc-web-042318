const app = "I don't do much.";
const token = "60ac3be40061a2c6fb34a3304caef5d70c8f120a";

fetch("https://api.github.com/user/repos", {
  headers: {
    Authorization: `token ${token}`
  }
})
  .then(res => res.json())
  .then(json => console.log(json));

  
