export class Notification {
    public title: string;
    public message: string;
    public httpCode: number;

    constructor(title: string, message: string, httpCode:number){
        this.title = title,
        this.message = message,
        this.httpCode = httpCode
    }
}
