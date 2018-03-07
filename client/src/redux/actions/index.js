import axios from "axios";

axios.interceptors.request.use((config) => {
    const token = localStorage.getItem("token");
    config.headers.Authorization = `Bearer ${token}`;
    return config;
})

const wordsUrl = "https://phat-learn-app.herokuapp.com/word/";
const userUrl = "https://phat-learn-app.herokuapp.com/auth/";
const profileUrl = "https://phat-learn-app.herokuapp.com/profile/";

export function verify() {
    return (dispatch) => {
        axios.get(profileUrl + "verify")
            .then((response) => {
                let { success, user } = response.data;
                dispatch(logon(success, user));
                dispatch(loadWords());  //
            })
            .catch((err) => {
                console.error(err);
            })
    }
}

function logon(success, user) {
    return {
        type: "LOGON",
        success,
        user
    }
}
function handleAuthErr(key, errCode) {
    return {
        type: "HANDLE_AUTH_ERR",
        key,
        errCode
    }
}

export function signup(credentials) {
    return (dispatch) => {
        axios.post(userUrl + "signup", credentials)
            .then((response) => {
                let { token, user, success } = response.data;
                localStorage.setItem("token", token);
                dispatch(logon(success, user));
                dispatch(loadWords());
            })
            .catch((err) => {
                console.error(err);
                dispatch(handleAuthErr("signup", err.response.status));
            })
    }
}

export function signin(credentials) {
    return (dispatch) => {
        axios.post(userUrl + "login", credentials)
            .then((response) => {
                let { token, user, success } = response.data;
                localStorage.setItem("token", token);
                dispatch(logon(success, user));
                dispatch(loadWords())  //set to get data form user
            })
            .catch((err) => {
                console.error(err);
                dispatch(handleAuthErr("signin", err.response.status));
            })
    }
}

export function logout() {
    localStorage.removeItem("token");
    return {
        type: "LOGOUT"
    }
}

//Set Word
function setWords(words) {
    return {
        type: "SET_WORDS",
        words
    }
}

export function loadWords() {
    return (dispatch) => {
        axios.get(wordsUrl)
            .then((response) => {
                // console.log(response.data);
                // dispatch(setWords(response.data));
                dispatch(setWords(response.data));  //set to get data form user
            })
            .catch((err) => {
                console.error(err);
            })
    }
}

export function addWord(word) {
    return (dispatch) => {
        axios.post(wordsUrl, word)
            .then((response) => {
                dispatch(loadWords());
            })
            .catch((err) => {
                console.error(err);
            })
    }
}

export function editWord(id, word) {
    return (dispatch) => {
        axios.put(wordsUrl + id, word)
            .then((response) => {
                dispatch(loadWords());
            })
            .catch((err) => {
                console.error(err);
            })
    }
}

export function deleteWord(id) {
    return (dispatch) => {
        axios.delete(wordsUrl + id)
            .then((response) => {
                dispatch(loadWords());
            })
            .catch((err) => {
                console.error(err);
            })
    }
}
