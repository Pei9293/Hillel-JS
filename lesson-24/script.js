const URL = 'https://jsonplaceholder.typicode.com/'
const ALBUM_CLASS = 'album'
const ACTIVE_CLASS = 'active'
const IMAGE = 'album-image'

const albumsList = document.querySelector('#albumsList')
const images = document.querySelector('#images')

albumsList.addEventListener('click', onAlbumsListClick)

start()

function start() {
    getAlbumList().then((albums) => {
        renderAlbumList(albums);
        const firstAlbum = getFirstAlbum(albums)
        getAlbum(firstAlbum).then(renderPhotos);
        const firstAlbumEl = albumsList.querySelector(':first-child');
        bindActiveStyle(firstAlbumEl);
    })
}

function onAlbumsListClick(e) {
    e.preventDefault();

    const targetAlbum = getTargetAlbum(e.target)
    const targetAlbumId = getTargetAlbumId(targetAlbum)

    const activeAlbum = findActiveAlbum()

    if (targetAlbum == activeAlbum) { 
        return
    }

    if (activeAlbum && activeAlbum !== targetAlbum) { 
        activeAlbum.classList.remove(ACTIVE_CLASS);
        targetAlbum.classList.add(ACTIVE_CLASS);
        images.innerHTML = '';
        getAlbum(targetAlbumId).then(renderPhotos);
        return
    }
}

function getAlbumList() {
    return fetch(URL + 'albums')
    .then(res => {
        if (res.ok) {
            return res.json();
        }

        throw new Error('Can not get photos');
    })
    .catch((e) => {
        throw new Error(`Can not execure request: ${e.message}`);
    });
}

function renderAlbumList(list) {
    const html = list.map(generateAlbumHtml).join('');
    albumsList.insertAdjacentHTML('beforeend', html);
}

function getFirstAlbum(albums) {
    return albums[0].id
}

function getAlbum(id) {
    return fetch(URL + `photos?albumId=${id}`)
    .then(res => {
        if (res.ok) {
            return res.json();
        }

        throw new Error('Can not get photos');
    })
    .catch((e) => {
        throw new Error(`Can not execure request: ${e.message}`);
    });
}

function renderPhotos(list) {
    const html = list.map(generatePhotosHtml).join('');
    images.insertAdjacentHTML('beforeend', html);
}

function bindActiveStyle(el) {
    el.classList.add(ACTIVE_CLASS)
}

function getTargetAlbum(el) {
    return el.closest(`.${ALBUM_CLASS}`)
}

function getTargetAlbumId(el) {
    return el.dataset.id
}

function findActiveAlbum() {
    return albumsList.querySelector(`.${ACTIVE_CLASS}`);
}

function generateAlbumHtml(album) {

    return `
        <li data-id ="${album.id}" class = ${ALBUM_CLASS}>
            <span>${album.title}</span>
        </li>
    `;
}

function generatePhotosHtml(image) {
    return `
    <li>
        <img src="${image.url}" alt="img id = ${image.id}"  class = ${IMAGE}>
    </li>
    `
}