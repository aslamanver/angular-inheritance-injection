import { HttpClient } from "@angular/common/http";

export class MyService {

    constructor(private http: HttpClient) {

    }

    getUsers() {
        this.http.get('https://reqres.in/api/users?page=2').subscribe((res: any) => {
            console.log(res.data);
        })
    }

}