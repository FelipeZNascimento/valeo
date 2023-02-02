export const apiBaseUrl = 'http://localhost:63768/valeo';
// export const apiBaseUrl = 'https://api.omegafox.me/valeo';

// Guests
export const guests = () => '/guests/';
export const guest = (code: string) => `/guest/${code}`;
export const setGuest = () => `/guest/`;
