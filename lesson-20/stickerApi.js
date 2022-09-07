class SticekrApi {
  static URL = 'https://62e6b2430e5d74566aeb3d86.mockapi.io/stickers/';

  static request(id = '', method = 'GET', body) {
      return fetch(SticekrApi.URL + id, {
          method,
          body: body ? JSON.stringify(body) : undefined,
          headers: {
              'Content-type': 'application/json',
          },
      })
      .catch((e) => {
          throw new Error(`SticekrApi can not execure request: ${e.message}`);
      });
  }

  static getStickersList() {
      return SticekrApi
          .request()
          .then(res => {
              if (res.ok) {
                  return res.json();
              }

              throw new Error('Can not retrive stickers list');
          });
  }

  static create() {
      return SticekrApi
          .request('', 'POST', {
              description: '',
              width: 200,
              height:100,
          })
          .then(res => {
              if (res.ok) {
                  return res.json();
              }
      
              throw new Error('Can not create new sticker');
          });
  }

  static edit(id, changes) {
      return SticekrApi
          .request(id, 'PUT', changes)
          .then(res => {
              if (res.ok) {
                  return res.json();
              }
      
              throw new Error(`Can not update sticker with id "${id}"`);
          });
  }

  static delete(id) {
      return SticekrApi
          .request(id, 'DELETE')
          .then(res => {
              if (res.ok) {
                  return res.json();
              }
      
              throw new Error(`Can not delete sticker with id "${id}"`);
          });
  }
}
Footer
