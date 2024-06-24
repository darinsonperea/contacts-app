export interface ReduxContacts {
  id: string;
  first_name: string;
  last_name: string;
  email: string;
  avatar: string;
  favorite: boolean;
}

export interface Contacts {
  id: number;
  name: string;
  lastName: string;
  email: string;
  avatar: string;
  favorite: boolean;
}

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
  count?: number;
}

export type ThemeContextType = {
  toggleDarkMode: () => void;
  isDarkMode: boolean;
};
