export interface UserModel {
    userId: number;
    name: string | null;
    email: string;
    password: number;
    pictureUrl: string | null;
    created_at: Date;
    updated_at: Date;
}