import {Injectable} from '@angular/core';
import {HttpEvent, HttpInterceptor, HttpHandler, HttpRequest} from '@angular/common/http';
import {Observable} from 'rxjs';
import {tap, timeout} from 'rxjs/operators';
import {ok} from 'assert';
import {ErrorsService} from './errors.service';
import {LoaderService} from './loaders/loader.service';

@Injectable()
export class NoopInterceptor implements HttpInterceptor {
  constructor(private errorsService: ErrorsService,
              private loaderService: LoaderService) {
  }

  intercept(req: HttpRequest<any>, next: HttpHandler):
    Observable<HttpEvent<any>> {
    return next.handle(req).pipe(
      timeout(60000),
      tap(
        ok,
        err => {
          let params;
          if (!err.status && !err.statusText) {
            params = 'timeout';
            this.hideLoader();
          } else {
            params = err.status + err.statusText;
          }
          this.errorsService.add(params);
        },
      ));
  }

  hideLoader() {
    this.loaderService.hide();
  }
}
