import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpErrorResponse } from '@angular/common/http';
import { Observable, empty, throwError } from 'rxjs';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { catchError, onErrorResumeNext } from 'rxjs/operators';
//import { MatSnackBar } from '@angular/material';
//import { TranslateService } from '@ngx-translate/core';
//import { ErrorTipComponent } from 'shared/components/error-tip';

@Injectable()
export class ExceptionInterceptor implements HttpInterceptor {
    constructor(
        private router: Router) {
    }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        return next.handle(req).pipe(
            catchError((err, caught) => {
                if (err instanceof HttpErrorResponse) {
                    if (err.status === 400 || err.status === 500) {
                        this.errorHandle(err.error);
                    }
                    if (err.status === 401) {
                        console.log('401');
                        window.location.href = '/';
                    }
                }
                return throwError(err);
            })
        );
    }

    errorHandle(error: Object);
    async errorHandle(error: Array<Object>) {
        if (!Array.isArray(error)) {

        } else if (Array.isArray(error)) {
            const message = [];
            await error.forEach(item => {
               
            });
           
        }
    }
}


