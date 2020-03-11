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
                return response.ok ? response.json()
                    : response.json()
                        .then(error => Promise.reject(error));
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

    getNeedsWants() {
        return fetch('/api/needsWants', getOptions('GET'))
            .then(response => response.json());
    },

    addNeedsWants(needWant) {
        return fetch('/api/needsWants', getOptions('POST', needWant))
            .then(needWant => {
                console.log('RESPONSE HERE', needWant);
                return needWant;
            })
            .catch(error => {
                console.error(error);
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