export interface UserModel {
    userId: number;
    name: string | null;
    email: string;
    password: number;
    pictureUrl: string | null;
    createdAt: Date;
    updatedAt: Date;
}