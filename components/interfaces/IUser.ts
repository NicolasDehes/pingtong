export default interface IUser {
    id: string;
    name?: string;
    email?: string;
    avatar?: string;
    elo?: number;
    wins?: number;
    losses?: number;
    games?: number;
}