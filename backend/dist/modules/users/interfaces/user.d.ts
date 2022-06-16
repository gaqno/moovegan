export interface UserCreate {
    email: string;
    password: string;
    name?: string;
    cratedAt?: Date;
}
export interface UserChangePassword {
    email: string;
    password: string;
}
