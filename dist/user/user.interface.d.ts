export interface User {
    id?: string;
    email: string;
    password: string;
}
export interface QueryResponse {
    Items: User[];
}
