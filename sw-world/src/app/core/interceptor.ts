import {Injectable} from '@angular/core';
import {HttpEvent, HttpInterceptor, HttpHandler, HttpRequest} from '@angular/common/http';
import {Observable} from 'rxjs';
import {tap} from 'rxjs/operators';
import {ok} from 'assert';
import {ErrorsService} from './errors.service';

@Injectable()
export class NoopInterceptor implements HttpInterceptor {
  constructor(private errorsService: ErrorsService) {
  }

  intercept(req: HttpRequest<any>, next: HttpHandler):
    Observable<HttpEvent<any>> {
    return next.handle(req).pipe(
      tap(
        ok,
        err => {
          console.log(err);
          this.errorsService.add(err.status + err.statusText);
        },
      ));
  }
}
