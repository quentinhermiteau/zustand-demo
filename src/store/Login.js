import create from 'zustand';
import { authStore } from './Auth';

const useLoginStore = create((set, get) => ({
    //state
    username: '',
    password: '',

    //setters
    setUsername: username => set(state => ({ ...state, username })),
    setPassword: password => set(state => ({ ...state, password })),

    //actions
    login: () => {
        if (get().username === "toto" && get().password === "toto") {
            alert('connecté');
            const { setToken } = authStore.getState();
            setToken(JSON.stringify({ user: get().username }));
        } else {
            alert('erreur credentials');
        }
    }
}));

export default useLoginStore;