type Methods = "POST" | "PUT" | "PATCH" | "DELETE";
export type ContactWithoutId = Omit<ContactDataType, "id">;

type CustomFile = {
  name: string;
  size: number;
  lastModified: number;
  type: string;
  webkitRelativePath: string;
  lastModifiedDate: object;
};

export interface ContactDataType {
  id: number;
  name: string;
  lastName: string;
  email: string;
  avatar: unknown | FileList;
  favorite: boolean;
}

export interface DefaultContact {
  id: number;
  email: string;
  first_name: string;
  last_name: string;
  avatar: string;
  favorite: boolean;
}

export interface ContactsTypes {
  id: number;
  name: string;
  lastName: string;
  email: string;
  avatar: string;
  favorite: boolean;
}

export type InitialData = {
  contacts: ContactDataType[];
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
  contacts: ContactsTypes[] | undefined;
}

export type ThemeContextType = {
  toggleDarkMode: () => void;
  isDarkMode: boolean;
};

export interface AuthContextType {
  manageGetContacts: () => ContactTypes[] | undefined;
  manageGetFavorites: () => ContactTypes[] | undefined;
  manageCreateContact: (newContact: ContactWithoutId) => void;
  manageDeleteContact: (id: number, imagePath?: string) => void;
  manageToggleLike: (id: number, favorite: boolean) => void;
  isAuthenticated: boolean;
}

export interface LoginTypes {
  email: string;
  password: string;
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

// Auth types

export interface AppMetadata {
  provider: string;
  providers: string[];
}

export interface Identity {
  identity_id: string;
  id: string;
  user_id: string;
  identity_data: Data;
  provider: string;
  last_sign_in_at: Date;
  created_at: Date;
  updated_at: Date;
  email: string;
}

export interface Data {
  email: string;
  email_verified: boolean;
  lastName: string;
  name: string;
  phone_verified: boolean;
  sub: string;
}

export interface AuthInfo {
  id: string;
  aud: string;
  role: string;
  email: string;
  email_confirmed_at: Date;
  phone: string;
  confirmation_sent_at: Date;
  confirmed_at: Date;
  last_sign_in_at: Date;
  app_metadata: AppMetadata;
  user_metadata: Data;
  identities: Identity[];
  created_at: Date;
  updated_at: Date;
  is_anonymous: boolean;
}
