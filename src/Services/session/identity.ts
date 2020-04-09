import { useContext, createContext } from "react";
export interface UserIdentity {
    _id: string;
    firstName: string;
    displayName: string;
}

// _id: '999',
// provider: 'google',
// providerId: '114218569505994648772',
// firstName: 'Karolis',
// lastName: 'K.',
// displayName: 'Karolis K.',
// email: 'cancel.k.k@gmail.com',
// password: null

export const IdentityContext = createContext<UserIdentity>(
    (null as unknown) as UserIdentity
);

export const useIdentity = (): UserIdentity => useContext(IdentityContext);
