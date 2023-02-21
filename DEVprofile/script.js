async function search() {
    const response = await
fetch('https://api.github.com/users/febessg')
    const data = await response.json()
    console.log(data)

    document.getElementById('name').innerHTML = data?.name;
    const pic = document.getElementById('pic')
    pic.innerHTML = `<img id='profilePic' src=${data?.avatar_url}.jpg>`

    document.getElementById('bio').innerHTML = data?.bio;

    document.getElementById('githubUser').innerHTML = `<a href=${data?.url}>${data?.login}</a>`;
    document.getElementById('twitterUser').innerHTML = `@${data?.twitter_username}`;
}
search()