import { User } from "@models/User";
declare global {
  interface AuthState {
    user: User;
    loading?: boolean;
  }
  interface MessagesState {
    contacts: any[];
    messages: any[];
    loading?: boolean;
  }
  interface ModalsState {
    addNewContact: any;
    newCallAlert: any;
  }
  interface SearchState {
    users: any[];
    totalPages: String;
    currentPage: any;
    loading?: boolean;
  }
}
