const API_GITHUB_LINK = 'https://api.github.com/users/{{login}}'

const loginInput = document.querySelector('#gitUserLoginInput');
const getUserBtn = document.querySelector('#getUserBtn');
const container = document.querySelector('#container');

getUserBtn.addEventListener('click', onGetUserBtnClick);

function onGetUserBtnClick(e) {
    const login = loginInput.value;
    if (login) {
        getGitUser(login)
        .then(user => {
            renderUser(user);
            clearForm();
          })
        .catch(showError)
    }
}

function getGitUser(login) {
    const url = API_GITHUB_LINK.replace('{{login}}', login);
    return fetch(url).then((res) => {
        if (res.ok) {
          return res.json();
        }
        throw new Error('404! User not found');
    });
}

function renderUser(user) {
    const infoHtml = generateInfoHtml(user);
  
    container.innerHTML = infoHtml;
}

function generateInfoHtml(info) {
    return `
        <li>
            <a href="${info.html_url}" style="display: block; width: 150px; height: 150px; background-image: url(${info.avatar_url}); background-size: cover;"></a>
        </li>
        <li>
           Репозиториев ${info.public_repos} 
        </li>
        <li>
           Фоловеров ${info.followers} 
        </li>
        <li>
           Наблюдаемых ${info.following} 
        </li>
    `;
}

function clearForm() {
    loginInput.value = ''
}

function showError(e) {
    alert(e.message);
}