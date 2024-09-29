declare type ResponseCode = 0 | 1 | 2;

declare type ThemeResponse = {
    code: ResponseCode,
    msg?: string,
    data: Array
}

declare type ThemeItem = { id: number, user_id: number, theme: string };
declare type ThemeItems = ThemeItem[];


declare type AddResponse = {
    code: ResponseCode,
    msg?: string,
}