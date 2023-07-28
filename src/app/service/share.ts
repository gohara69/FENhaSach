import { Observable, Subject } from "rxjs";


export class shareService {
   private subject = new Subject<any>();

   sendClickEvent(){
      this.subject.next;
   }

   getClickEvent(): Observable<any>{
      return this.subject.asObservable();
   }
}