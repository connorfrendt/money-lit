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
};

export default {
    setToken(t) {
        token = t;
    },

    signUp(profile) {
        return fetch('/api/auth/signup', getOptions('POST', profile))
            .then(response => {
                console.log(`***SIGN UP ${response.statusText}***\n`, response.status, '\n', 'Username: ', profile.username, '\nPassword: ', profile.password);

                if(response.ok) {
                    return response.json();
                }
                
                return response.json()
                    .then(error => {
                        console.log('here');
                        return Promise.reject(error);
                    });
            });
    },

    signIn(credentials) {
        console.log('CREDENTIALS', credentials);
        return fetch('/api/auth/signin', getOptions('POST', credentials))
            .then(response => {
                if(response.ok) {
                    return response.json();
                }

                return response.json()
                    .then(error => {
                        return Promise.reject(error);
                    });
            });
    },

    normalize(username) {
        let splitUsername = username.split('');
        for(let i = 0; i < splitUsername.length; i++) {
            if(i === 0) splitUsername[i] = splitUsername[i].toUpperCase();
            if(i > 0) splitUsername[i] = splitUsername[i].toLowerCase();
        }
        
        return splitUsername.join('');
    }
};