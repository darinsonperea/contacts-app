type Methods = "POST" | "PUT" | "PATCH" | "DELETE";
export type ContactWithoutId = Omit<Contacts, "id">;

export interface Contacts {
  id: number;
  name: string;
  lastName: string;
  email: string;
  avatar: string | File;
  favorite: boolean;
}

export type InitialData = {
  contacts: Contacts[];
  isOpen: boolean;
};

export interface EditContactType {
  id: number;
  name?: string;
  lastName?: string;
  email?: string;
}

export interface Gender {
  count: number;
  gender: string;
  name: string;
  probability: number;
}

export interface CardsProps {
  flag?: boolean;
  contacts: Contacts[] | undefined;
}

export type ThemeContextType = {
  toggleDarkMode: () => void;
  isDarkMode: boolean;
};

export interface AuthContextType {
  manageGetContacts: () => Contacts[] | undefined;
  manageGetFavorites: () => Contacts[] | undefined;
  manageCreateContact: (newContact: ContactWithoutId) => void;
  manageDeleteContact: (id: number, imagePath?: string) => void;
  manageToggleLike: (id: number, favorite: boolean) => void;
  isAuthenticated: boolean;
}

export interface LoginTypes {
  email: string;
  password: string;
  confirmPassword: string;
}

export interface FetchTypes {
  url: string;
  method: Methods;
  body?: object;
  headers?: HeadersInit;
  actionFn?: () => void;
  onSuccess?: () => void;
  onError?: () => void;
}

export type QueryTypes = Pick<FetchTypes, "url" | "headers">;
