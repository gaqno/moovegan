export interface User {
    email: any;
    password: string;
    name?: string;
    id?: number;
    cratedAt?: Date;
}
export interface validateUserPassword {
    password: string;
}
export interface UserChangePassword {
    email: string;
    password: string;
}
