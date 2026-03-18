import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  private readonly storageKey = 'probook_user';

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const stored = localStorage.getItem(this.storageKey);
    if (!stored) return next.handle(req);

    try {
      const user = JSON.parse(stored) as any | null;
      // Soportar nombres camelCase y PascalCase por si cambió la serialización.
      const rawToken: unknown = user?.token ?? user?.Token;
      if (typeof rawToken !== 'string') return next.handle(req);

      let token = rawToken.trim();
      // Evitar duplicar "Bearer " si ya venía con prefijo.
      if (token.startsWith('Bearer ')) token = token.slice('Bearer '.length).trim();
      if (!token) return next.handle(req);

      const authReq = req.clone({
        setHeaders: {
          Authorization: `Bearer ${token}`,
        },
      });

      return next.handle(authReq);
    } catch {
      return next.handle(req);
    }
  }
}

