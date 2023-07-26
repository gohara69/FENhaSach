import { HttpHeaders } from '@angular/common/http';

export class shareService {
    public httpOptions = {
        headers: new HttpHeaders({
           'Content-Type': 'application/json',
        }),
     };
}