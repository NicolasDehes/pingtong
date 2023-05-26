import IUser from "../../interfaces/IUser";

export default interface IScore{
    user1: number | IUser;
    user2: number | IUser;
    score1: number;
    score2: number;
    date: Date;
}