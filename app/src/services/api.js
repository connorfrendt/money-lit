let token = '';

const getOptions = (method, data) => {
    const options = {
        method,
        headers: {}
    };

    if(data) {
        options.headers['Content-Type'] = 'application/json';
        options.body = JSON.stringify(data);
    }

    if(token) {
        options.headers.Authorization = token;
    }

    return options;
}

export default {
    setToken(t) {
        token = t;
    },

    signUp(profile) {
        return fetch('/api/auth/signup', getOptions('POST', profile))
            .then(response => {
                console.log('***SIGN UP RESPONSE***', response);
                if(!response.ok) {
                    console.log('***SIGN UP NOT OK***');
                    return response.json();
                }
                console.log('sign up after if');
                return response.json()
                    .then(error => {
                        console.error('***SIGN UP ERROR***', error);
                        return Promise.reject(error);
                    });
            });
    },

    signIn(credentials) {
        return fetch('/api/auth/signin', getOptions('POST', credentials))
            .then(response => {
                console.log('***SIGN IN RESPONSE***', response);
                if(response.ok) {
                    console.log('***SIGN IN OK***');
                    return response.json();
                }

                return response.json()
                    .then(error => {
                        console.log('***SIGN IN ERROR***', error);
                        return Promise.reject(error);
                    });
            });
    }
}