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
                if(response.ok) return response.json();
                
                return response.json()
                    .then(error => {
                        return Promise.reject(error);
                    });
            });
    },

    signIn(credentials) {
        return fetch('/api/auth/signin', getOptions('POST', credentials))
            .then(response => {
                return response.ok ? response.json()
                    : response.json()
                        .then(error => Promise.reject(error));
            });
    },

    normalize(username) {
        let splitUsername = username.split('');
        for(let i = 0; i < splitUsername.length; i++) {
            if(i === 0) splitUsername[i] = splitUsername[i].toUpperCase();
            else splitUsername[i] = splitUsername[i].toLowerCase();
        }
        
        return splitUsername.join('');
    }
};