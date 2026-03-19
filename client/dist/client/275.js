"use strict";
(self["webpackChunkclient"] = self["webpackChunkclient"] || []).push([[275],{

/***/ 1275:
/*!********************************************************!*\
  !*** ./src/app/pages/huespedes/huespedes.component.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   HuespedesComponent: () => (/* binding */ HuespedesComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/card */ 3777);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/table */ 7697);
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/progress-spinner */ 1134);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/icon */ 3840);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/button */ 4175);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _services_users_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../services/users.service */ 3221);












function HuespedesComponent_div_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "mat-spinner", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "span", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Cargando hu\u00E9spedes...");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
}
function HuespedesComponent_p_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r0.errorMessage);
  }
}
function HuespedesComponent_div_9_th_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "th", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Nombre completo");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
function HuespedesComponent_div_9_td_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "td", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const row_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](row_r2.nombreCompleto);
  }
}
function HuespedesComponent_div_9_th_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "th", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Correo");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
function HuespedesComponent_div_9_td_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "td", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const row_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](row_r3.correo);
  }
}
function HuespedesComponent_div_9_th_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "th", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Tel\u00E9fono");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
function HuespedesComponent_div_9_td_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "td", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const row_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](row_r4.telefono || "-");
  }
}
function HuespedesComponent_div_9_tr_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "tr", 20);
  }
}
function HuespedesComponent_div_9_tr_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "tr", 21);
  }
}
function HuespedesComponent_div_9_p_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " No hay hu\u00E9spedes registrados. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
function HuespedesComponent_div_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 8)(1, "table", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](2, 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, HuespedesComponent_div_9_th_3_Template, 2, 0, "th", 11)(4, HuespedesComponent_div_9_td_4_Template, 2, 1, "td", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](5, 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, HuespedesComponent_div_9_th_6_Template, 2, 0, "th", 11)(7, HuespedesComponent_div_9_td_7_Template, 2, 1, "td", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](8, 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](9, HuespedesComponent_div_9_th_9_Template, 2, 0, "th", 11)(10, HuespedesComponent_div_9_td_10_Template, 2, 1, "td", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](11, HuespedesComponent_div_9_tr_11_Template, 1, 0, "tr", 15)(12, HuespedesComponent_div_9_tr_12_Template, 1, 0, "tr", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](13, HuespedesComponent_div_9_p_13_Template, 2, 0, "p", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("dataSource", ctx_r0.dataSource);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("matHeaderRowDef", ctx_r0.displayedColumns);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("matRowDefColumns", ctx_r0.displayedColumns);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r0.dataSource.data.length === 0);
  }
}
let HuespedesComponent = /*#__PURE__*/(() => {
  class HuespedesComponent {
    constructor(usersService) {
      this.usersService = usersService;
      this.loading = false;
      this.errorMessage = '';
      this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_2__.MatTableDataSource([]);
      this.displayedColumns = ['nombreCompleto', 'correo', 'telefono'];
    }
    ngOnInit() {
      this.load();
    }
    load() {
      this.loading = true;
      this.errorMessage = '';
      this.usersService.getUsers().subscribe({
        next: users => {
          this.dataSource.data = users.filter(u => Number(u.rol) === 1);
          this.loading = false;
        },
        error: err => {
          this.loading = false;
          this.errorMessage = err?.error?.message ?? 'No se pudieron cargar los huéspedes.';
        }
      });
    }
    static {
      this.ɵfac = function HuespedesComponent_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || HuespedesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_users_service__WEBPACK_IMPORTED_MODULE_0__.UsersService));
      };
    }
    static {
      this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: HuespedesComponent,
        selectors: [["app-huespedes"]],
        standalone: true,
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵStandaloneFeature"]],
        decls: 10,
        vars: 3,
        consts: [[1, "rooms-card"], ["class", "loading", 4, "ngIf"], ["class", "error-msg", 4, "ngIf"], ["class", "table-wrapper", 4, "ngIf"], [1, "loading"], ["diameter", "40"], [1, "loading-text"], [1, "error-msg"], [1, "table-wrapper"], ["mat-table", "", 1, "mat-elevation-z1", 3, "dataSource"], ["matColumnDef", "nombreCompleto"], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "correo"], ["matColumnDef", "telefono"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], ["class", "empty-msg", 4, "ngIf"], ["mat-header-cell", ""], ["mat-cell", ""], ["mat-header-row", ""], ["mat-row", ""], [1, "empty-msg"]],
        template: function HuespedesComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-card", 0)(1, "mat-card-header")(2, "mat-card-title");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Hu\u00E9spedes");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "mat-card-subtitle");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "Usuarios con rol = Invitado");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "mat-card-content");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](7, HuespedesComponent_div_7_Template, 4, 0, "div", 1)(8, HuespedesComponent_p_8_Template, 2, 1, "p", 2)(9, HuespedesComponent_div_9_Template, 14, 4, "div", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          }
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.loading);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.loading && ctx.errorMessage);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.loading && !ctx.errorMessage);
          }
        },
        dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, _angular_material_card__WEBPACK_IMPORTED_MODULE_4__.MatCardModule, _angular_material_card__WEBPACK_IMPORTED_MODULE_4__.MatCard, _angular_material_card__WEBPACK_IMPORTED_MODULE_4__.MatCardContent, _angular_material_card__WEBPACK_IMPORTED_MODULE_4__.MatCardHeader, _angular_material_card__WEBPACK_IMPORTED_MODULE_4__.MatCardSubtitle, _angular_material_card__WEBPACK_IMPORTED_MODULE_4__.MatCardTitle, _angular_material_table__WEBPACK_IMPORTED_MODULE_2__.MatTableModule, _angular_material_table__WEBPACK_IMPORTED_MODULE_2__.MatTable, _angular_material_table__WEBPACK_IMPORTED_MODULE_2__.MatHeaderCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_2__.MatHeaderRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_2__.MatColumnDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_2__.MatCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_2__.MatRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_2__.MatHeaderCell, _angular_material_table__WEBPACK_IMPORTED_MODULE_2__.MatCell, _angular_material_table__WEBPACK_IMPORTED_MODULE_2__.MatHeaderRow, _angular_material_table__WEBPACK_IMPORTED_MODULE_2__.MatRow, _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_5__.MatProgressSpinnerModule, _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_5__.MatProgressSpinner, _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__.MatIconModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_7__.MatButtonModule],
        styles: [".rooms-card[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.loading[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 12px;\n  align-items: center;\n  justify-content: center;\n  padding: 24px 0;\n}\n\n.loading-text[_ngcontent-%COMP%] {\n  opacity: 0.8;\n}\n\n.error-msg[_ngcontent-%COMP%] {\n  color: #c62828;\n  margin: 10px 0 0 0;\n}\n\n.table-wrapper[_ngcontent-%COMP%] {\n  overflow: auto;\n}\n\n.empty-msg[_ngcontent-%COMP%] {\n  margin-top: 12px;\n  opacity: 0.8;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvcGFnZXMvaHVlc3BlZGVzL2h1ZXNwZWRlcy5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLi8uLi8uLi8uLi8uLi9Qcm9ncmElMjBXZWIvUHJveWVjdG8lMjBmaW5hbC90ZXN0LUFjdGl2aWRhZC1zNC9jbGllbnQvc3JjL2FwcC9wYWdlcy9odWVzcGVkZXMvaHVlc3BlZGVzLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDTTtFQUNFLFdBQUE7QUNBUjs7QURFTTtFQUNFLGFBQUE7RUFDQSxTQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLGVBQUE7QUNDUjs7QURDTTtFQUNFLFlBQUE7QUNFUjs7QURBTTtFQUNFLGNBQUE7RUFDQSxrQkFBQTtBQ0dSOztBRERNO0VBQ0UsY0FBQTtBQ0lSOztBREZNO0VBQ0UsZ0JBQUE7RUFDQSxZQUFBO0FDS1IiLCJzb3VyY2VzQ29udGVudCI6WyJcbiAgICAgIC5yb29tcy1jYXJkIHtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICB9XG4gICAgICAubG9hZGluZyB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGdhcDogMTJweDtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgIHBhZGRpbmc6IDI0cHggMDtcbiAgICAgIH1cbiAgICAgIC5sb2FkaW5nLXRleHQge1xuICAgICAgICBvcGFjaXR5OiAwLjg7XG4gICAgICB9XG4gICAgICAuZXJyb3ItbXNnIHtcbiAgICAgICAgY29sb3I6ICNjNjI4Mjg7XG4gICAgICAgIG1hcmdpbjogMTBweCAwIDAgMDtcbiAgICAgIH1cbiAgICAgIC50YWJsZS13cmFwcGVyIHtcbiAgICAgICAgb3ZlcmZsb3c6IGF1dG87XG4gICAgICB9XG4gICAgICAuZW1wdHktbXNnIHtcbiAgICAgICAgbWFyZ2luLXRvcDogMTJweDtcbiAgICAgICAgb3BhY2l0eTogMC44O1xuICAgICAgfVxuICAgICIsIi5yb29tcy1jYXJkIHtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5sb2FkaW5nIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZ2FwOiAxMnB4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgcGFkZGluZzogMjRweCAwO1xufVxuXG4ubG9hZGluZy10ZXh0IHtcbiAgb3BhY2l0eTogMC44O1xufVxuXG4uZXJyb3ItbXNnIHtcbiAgY29sb3I6ICNjNjI4Mjg7XG4gIG1hcmdpbjogMTBweCAwIDAgMDtcbn1cblxuLnRhYmxlLXdyYXBwZXIge1xuICBvdmVyZmxvdzogYXV0bztcbn1cblxuLmVtcHR5LW1zZyB7XG4gIG1hcmdpbi10b3A6IDEycHg7XG4gIG9wYWNpdHk6IDAuODtcbn0iXSwic291cmNlUm9vdCI6IiJ9 */"]
      });
    }
  }
  return HuespedesComponent;
})();

/***/ }),

/***/ 3221:
/*!*******************************************!*\
  !*** ./src/app/services/users.service.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   UsersService: () => (/* binding */ UsersService)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ 6443);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../environments/environment */ 5312);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7580);




let UsersService = /*#__PURE__*/(() => {
  class UsersService {
    constructor(http) {
      this.http = http;
      this.apiUrl = `${_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiUrl}/users`;
      this.storageKey = 'probook_user';
    }
    getUsers() {
      const token = this.getToken();
      const headers = token ? new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpHeaders({
        Authorization: `Bearer ${token}`
      }) : undefined;
      return this.http.get(this.apiUrl, {
        headers
      });
    }
    /** Crea un usuario (POST /api/users, endpoint AllowAnonymous). */
    createUser(payload) {
      return this.http.post(this.apiUrl, payload);
    }
    getToken() {
      const stored = localStorage.getItem(this.storageKey);
      if (!stored) return null;
      try {
        const user = JSON.parse(stored);
        const rawToken = user?.token ?? user?.Token;
        if (typeof rawToken !== 'string') return null;
        let token = rawToken.trim();
        if (token.startsWith('Bearer ')) token = token.slice('Bearer '.length).trim();
        return token || null;
      } catch {
        return null;
      }
    }
    static {
      this.ɵfac = function UsersService_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || UsersService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient));
      };
    }
    static {
      this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
        token: UsersService,
        factory: UsersService.ɵfac,
        providedIn: 'root'
      });
    }
  }
  return UsersService;
})();

/***/ })

}]);
//# sourceMappingURL=275.js.map