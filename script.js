// script.js
const form = document.getElementById('githubForm');
const cardContainer = document.getElementById('cardContainer');

form.addEventListener('submit', function(e) {
    e.preventDefault();
    const username = document.getElementById('username').value.trim();

    fetch(`https://api.github.com/users/${username}`)
        .then(response => response.json())
        .then(data => {
            const card = `
                <div class="card">
                <div class="avatar-container">
                        <img src="${data.avatar_url}" alt="Avatar" class="avatar">
                    </div>
                    <h2>${data.login}</h2>
                    <p>Name: ${data.name}</p>
                    <p>Public Repos: ${data.public_repos}</p>
                    <p>Public Gists: ${data.public_gists}</p>
                    <p>Profile Created At: ${new Date(data.created_at).toLocaleDateString()}</p>
                </div>
            `;
            cardContainer.innerHTML = card;
        })
        .catch(error => {
            cardContainer.innerHTML = '<p>User not found!</p>';
        });
});
