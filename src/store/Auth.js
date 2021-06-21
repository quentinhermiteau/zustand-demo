import create from 'zustand';
import { persist } from 'zustand/middleware';

const [ useAuthStore, authStore ] = create(persist(
    set => ({
        token: '',
        setToken: token => set(state => ({ ...state, token }))
    }),
    {
        name: 'auth',
    }
));

export {
    useAuthStore,
    authStore,
};