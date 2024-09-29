declare type ResponseCode = 0 | 1 | 2;

declare type UsersResponse = {
    code: ResponseCode,
    msg?: string,
    data: Array
}

declare type UserItem = { id: number, user_id: Number, name: string };
declare type UserItems = UserItem[];


declare type AddResponse = {
    code: ResponseCode,
    msg?: string,
}