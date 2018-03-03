import {HttpEvent, HttpInterceptor, HttpRequest, HttpHandler} from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import {Injectable} from '@angular/core';

@Injectable()
export class JwtInterceptor implements HttpInterceptor {

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    console.log('Http request is intercepted');
    return next.handle(request);
  }

}
