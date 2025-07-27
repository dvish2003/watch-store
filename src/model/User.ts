export type User = {
    _id: string;
    name: string;
    email: string;
    password: string;
    role: 'user' | 'admin';
}

export type userFormData = {
    name: string;
    email: string;
    password: string;
    confirmPassword: string;
}