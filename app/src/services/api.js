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
                console.log('***RESPONSE***', response);
                if(response.ok) {
                    return response.json();
                }

                return response.json()
                    .then(error => {
                        console.error('***ERROR***', error);
                        return Promise.reject(error);
                    });
            });
    }
}