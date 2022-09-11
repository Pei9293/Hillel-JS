export default class StudentsApi {
    static URL = 'https://5dd3d5ba8b5e080014dc4bfa.mockapi.io/students/';

    static request(id = '', method = 'GET', body) {
        return fetch(StudentsApi.URL + id, {
            method,
            body: body ? JSON.stringify(body) : undefined,
            headers: {
                'Content-type': 'application/json',
            },
        })
        .catch((e) => {
            throw new Error(`StudentsApi can not execure request: ${e.message}`);
        });
    }

    static getStudent(id) {
        return StudentsApi
            .request(id)
            .then(res => {
                if (res.ok) {
                    return res.json();
                }

                throw new Error(`Can not retrive student with id "${id}"`);
            });
    }

    static getStudentsList() {
        return StudentsApi
            .request()
            .then(res => {
                if (res.ok) {
                    return res.json();
                }

                throw new Error('Can not retrive student list');
            });
    }

    static create(student) {
        return StudentsApi
            .request('', 'POST', student)
            .then(res => {
                if (res.ok) {
                    return res.json();
                }
        
                throw new Error('Can not create new student');
            });
    }

    static edit(id, changes) {
        return StudentsApi
            .request(id, 'PUT', changes)
            .then(res => {
                if (res.ok) {
                    return res.json();
                }
        
                throw new Error(`Can not update student with id "${id}"`);
            });
    }

    static delete(id) {
        return StudentsApi
            .request(id, 'DELETE')
            .then(res => {
                if (res.ok) {
                    return res.json();
                }
        
                throw new Error(`Can not delete student with id "${id}"`);
            });
    }
}