"use strict";
(self["webpackChunkclient"] = self["webpackChunkclient"] || []).push([[983],{

/***/ 6983:
/*!***********************************************!*\
  !*** ./src/app/layout/main/main.component.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MainComponent: () => (/* binding */ MainComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/sidenav */ 7049);
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/toolbar */ 9552);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/button */ 4175);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/icon */ 3840);
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/list */ 943);
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/menu */ 1034);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../services/auth.service */ 4796);

















const _forTrack0 = ($index, $item) => $item.route;
function MainComponent_For_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "a", 6)(1, "mat-icon", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const item_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", item_r2.route);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](item_r2.icon);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](item_r2.label);
  }
}
function MainComponent_Conditional_17_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.nombreCompleto);
  }
}
// Rol 0 = Gerente (menú completo sin "Reservar" para invitados). Rol 1 = Invitado (solo Dashboard y Reservar).
const ROUTES_ROL_1 = ['/main/dashboard', '/main/reservar-habitacion'];
const ROUTE_RESERVAR_HABITACION = '/main/reservar-habitacion';
let MainComponent = /*#__PURE__*/(() => {
  class MainComponent {
    toggleSidenav() {
      this.sidenavOpened = !this.sidenavOpened;
    }
    constructor(router, authService) {
      this.router = router;
      this.authService = authService;
      this.sidenavOpened = true;
      this.sidenavMode = 'side';
      this.sidebarItems = [{
        label: 'Dashboard',
        route: '/main/dashboard',
        icon: 'dashboard'
      }, {
        label: 'Habitaciones',
        route: '/main/habitaciones',
        icon: 'meeting_room'
      }, {
        label: 'Huéspedes',
        route: '/main/huespedes',
        icon: 'people'
      }, {
        label: 'Reportes',
        route: '/main/reportes',
        icon: 'bar_chart'
      }, {
        label: 'Reservar',
        route: '/main/reservar-habitacion',
        icon: 'add_calendar'
      }, {
        label: 'Reservaciones',
        route: '/main/reservar',
        icon: 'event_available'
      }];
    }
    parseRol(raw) {
      if (raw === null || raw === undefined) return 0;
      if (typeof raw === 'number') return raw;
      if (typeof raw === 'string') {
        const trimmed = raw.trim();
        const lowered = trimmed.toLowerCase();
        // Soportar rol como número en string.
        const asNumber = Number(trimmed);
        if (!Number.isNaN(asNumber)) return asNumber;
        // Soportar rol como texto (backend o frontend).
        if (lowered.includes('invita') || lowered.includes('invit')) return 1;
        if (lowered.includes('hué') || lowered.includes('huesp') || lowered.includes('huésped')) return 1;
        if (lowered.includes('manager') || lowered.includes('gerent')) return 0;
      }
      return 0;
    }
    get visibleItems() {
      const user = this.authService.currentUser();
      const rol = this.parseRol(user?.rol);
      if (rol === 1) {
        return this.sidebarItems.filter(item => ROUTES_ROL_1.includes(item.route));
      }
      // Rol 0 (Gerente): todo menos la vista "Reservar" (solo para invitados).
      return this.sidebarItems.filter(item => item.route !== ROUTE_RESERVAR_HABITACION);
    }
    logout() {
      this.authService.logout();
    }
    static {
      this.ɵfac = function MainComponent_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || MainComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_0__.AuthService));
      };
    }
    static {
      this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: MainComponent,
        selectors: [["app-main"]],
        standalone: true,
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵStandaloneFeature"]],
        decls: 30,
        vars: 4,
        consts: [["sidenav", ""], ["userMenu", "matMenu"], [1, "main-container"], [1, "sidebar", 3, "mode", "opened"], [1, "sidebar-header"], [1, "brand"], ["mat-list-item", "", "routerLinkActive", "active", 3, "routerLink"], [1, "main-content"], [1, "toolbar"], ["mat-icon-button", "", "type", "button", "aria-label", "Alternar men\u00FA", 3, "click"], [1, "toolbar-title"], [1, "spacer"], [1, "user-name"], ["mat-icon-button", "", "aria-label", "Usuario", 3, "matMenuTriggerFor"], ["mat-menu-item", "", 3, "click"], [1, "content-area"], ["matListItemIcon", ""], ["matListItemTitle", ""]],
        template: function MainComponent_Template(rf, ctx) {
          if (rf & 1) {
            const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-sidenav-container", 2)(1, "mat-sidenav", 3, 0)(3, "div", 4)(4, "span", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "ProBook");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "mat-nav-list");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrepeaterCreate"](7, MainComponent_For_8_Template, 5, 3, "a", 6, _forTrack0);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "mat-sidenav-content", 7)(10, "mat-toolbar", 8)(11, "button", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function MainComponent_Template_button_click_11_listener() {
              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r1);
              return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx.toggleSidenav());
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "mat-icon");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "menu");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "span", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, "ProBook");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](16, "span", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](17, MainComponent_Conditional_17_Template, 2, 1, "span", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "button", 13)(19, "mat-icon");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20, "account_circle");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "mat-menu", null, 1)(23, "button", 14);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function MainComponent_Template_button_click_23_listener() {
              _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r1);
              return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx.logout());
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "mat-icon");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](25, "logout");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "span");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](27, "Cerrar sesi\u00F3n");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "div", 15);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](29, "router-outlet");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
          }
          if (rf & 2) {
            let tmp_5_0;
            const userMenu_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](22);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("mode", ctx.sidenavMode)("opened", ctx.sidenavOpened);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrepeater"](ctx.visibleItems);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](10);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵconditional"]((tmp_5_0 = ctx.authService.currentUser()) ? 17 : -1, tmp_5_0);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("matMenuTriggerFor", userMenu_r3);
          }
        },
        dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterOutlet, _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterLink, _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterLinkActive, _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_4__.MatSidenavModule, _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_4__.MatSidenav, _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_4__.MatSidenavContainer, _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_4__.MatSidenavContent, _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_5__.MatToolbarModule, _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_5__.MatToolbar, _angular_material_button__WEBPACK_IMPORTED_MODULE_6__.MatButtonModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_6__.MatIconButton, _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__.MatIconModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__.MatIcon, _angular_material_list__WEBPACK_IMPORTED_MODULE_8__.MatListModule, _angular_material_list__WEBPACK_IMPORTED_MODULE_8__.MatNavList, _angular_material_list__WEBPACK_IMPORTED_MODULE_8__.MatListItem, _angular_material_list__WEBPACK_IMPORTED_MODULE_8__.MatListItemIcon, _angular_material_list__WEBPACK_IMPORTED_MODULE_8__.MatListItemTitle, _angular_material_menu__WEBPACK_IMPORTED_MODULE_9__.MatMenuModule, _angular_material_menu__WEBPACK_IMPORTED_MODULE_9__.MatMenu, _angular_material_menu__WEBPACK_IMPORTED_MODULE_9__.MatMenuItem, _angular_material_menu__WEBPACK_IMPORTED_MODULE_9__.MatMenuTrigger],
        styles: [".main-container[_ngcontent-%COMP%] {\n  height: 100vh;\n}\n\n.sidebar[_ngcontent-%COMP%] {\n  width: 240px;\n  border-right: 1px solid rgba(255, 255, 255, 0.12);\n}\n.sidebar[_ngcontent-%COMP%]   .sidebar-header[_ngcontent-%COMP%] {\n  padding: 1rem 1rem 0.5rem;\n  border-bottom: 1px solid rgba(255, 255, 255, 0.08);\n  margin-bottom: 0.5rem;\n}\n.sidebar[_ngcontent-%COMP%]   .brand[_ngcontent-%COMP%] {\n  font-size: 1.25rem;\n  font-weight: 700;\n  color: #ffffff;\n}\n.sidebar[_ngcontent-%COMP%]   mat-nav-list[_ngcontent-%COMP%] {\n  padding-top: 0.5rem;\n}\n.sidebar[_ngcontent-%COMP%]   mat-nav-list[_ngcontent-%COMP%]   a.active[_ngcontent-%COMP%] {\n  background: rgba(57, 73, 171, 0.12);\n  color: var(--mat-primary-color);\n}\n.sidebar[_ngcontent-%COMP%]     mat-icon {\n  color: rgba(255, 255, 255, 0.87);\n}\n\n.main-content[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  min-height: 100%;\n}\n\n.toolbar[_ngcontent-%COMP%] {\n  position: sticky;\n  top: 0;\n  z-index: 10;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.35);\n}\n.toolbar[_ngcontent-%COMP%]   .toolbar-title[_ngcontent-%COMP%] {\n  font-size: 1.1rem;\n  font-weight: 600;\n}\n.toolbar[_ngcontent-%COMP%]   .spacer[_ngcontent-%COMP%] {\n  flex: 1;\n}\n.toolbar[_ngcontent-%COMP%]   .user-name[_ngcontent-%COMP%] {\n  font-size: 0.9rem;\n  margin-right: 0.5rem;\n}\n\n.content-area[_ngcontent-%COMP%] {\n  flex: 1;\n  padding: 1.5rem;\n  overflow: auto;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvbGF5b3V0L21haW4vbWFpbi5jb21wb25lbnQuc2NzcyIsIndlYnBhY2s6Ly8uLy4uLy4uLy4uLy4uL1Byb2dyYSUyMFdlYi9Qcm95ZWN0byUyMGZpbmFsL3Rlc3QtQWN0aXZpZGFkLXM0L2NsaWVudC9zcmMvYXBwL2xheW91dC9tYWluL21haW4uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFBO0FDQ0Y7O0FERUE7RUFDRSxZQUFBO0VBQ0EsaURBQUE7QUNDRjtBRENFO0VBQ0UseUJBQUE7RUFDQSxrREFBQTtFQUNBLHFCQUFBO0FDQ0o7QURFRTtFQUNFLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0FDQUo7QURHRTtFQUNFLG1CQUFBO0FDREo7QURHSTtFQUNFLG1DQUFBO0VBQ0EsK0JBQUE7QUNETjtBRE9FO0VBQ0UsZ0NBQUE7QUNMSjs7QURTQTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLGdCQUFBO0FDTkY7O0FEU0E7RUFDRSxnQkFBQTtFQUNBLE1BQUE7RUFDQSxXQUFBO0VBQ0EseUNBQUE7QUNORjtBRFFFO0VBQ0UsaUJBQUE7RUFDQSxnQkFBQTtBQ05KO0FEU0U7RUFDRSxPQUFBO0FDUEo7QURVRTtFQUNFLGlCQUFBO0VBQ0Esb0JBQUE7QUNSSjs7QURZQTtFQUNFLE9BQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtBQ1RGIiwic291cmNlc0NvbnRlbnQiOlsiLm1haW4tY29udGFpbmVyIHtcclxuICBoZWlnaHQ6IDEwMHZoO1xyXG59XHJcblxyXG4uc2lkZWJhciB7XHJcbiAgd2lkdGg6IDI0MHB4O1xyXG4gIGJvcmRlci1yaWdodDogMXB4IHNvbGlkIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4xMik7XHJcblxyXG4gIC5zaWRlYmFyLWhlYWRlciB7XHJcbiAgICBwYWRkaW5nOiAxcmVtIDFyZW0gMC41cmVtO1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4wOCk7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAwLjVyZW07XHJcbiAgfVxyXG5cclxuICAuYnJhbmQge1xyXG4gICAgZm9udC1zaXplOiAxLjI1cmVtO1xyXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgIGNvbG9yOiAjZmZmZmZmO1xyXG4gIH1cclxuXHJcbiAgbWF0LW5hdi1saXN0IHtcclxuICAgIHBhZGRpbmctdG9wOiAwLjVyZW07XHJcblxyXG4gICAgYS5hY3RpdmUge1xyXG4gICAgICBiYWNrZ3JvdW5kOiByZ2JhKDU3LCA3MywgMTcxLCAwLjEyKTtcclxuICAgICAgY29sb3I6IHZhcigtLW1hdC1wcmltYXJ5LWNvbG9yKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8vIE1hdEljb24gdXNhIGxhIGZ1ZW50ZSBcIk1hdGVyaWFsIEljb25zXCIgKGZvbnRTZXQgbWF0ZXJpYWwtaWNvbnMpLlxyXG4gIC8vIEVuIG1vZG8gb3NjdXJvIGZvcnphbW9zIHVuIGNvbG9yIHZpc2libGUuXHJcbiAgOjpuZy1kZWVwIG1hdC1pY29uIHtcclxuICAgIGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuODcpO1xyXG4gIH1cclxufVxyXG5cclxuLm1haW4tY29udGVudCB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIG1pbi1oZWlnaHQ6IDEwMCU7XHJcbn1cclxuXHJcbi50b29sYmFyIHtcclxuICBwb3NpdGlvbjogc3RpY2t5O1xyXG4gIHRvcDogMDtcclxuICB6LWluZGV4OiAxMDtcclxuICBib3gtc2hhZG93OiAwIDFweCAzcHggcmdiYSgwLCAwLCAwLCAwLjM1KTtcclxuXHJcbiAgLnRvb2xiYXItdGl0bGUge1xyXG4gICAgZm9udC1zaXplOiAxLjFyZW07XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG4gIH1cclxuXHJcbiAgLnNwYWNlciB7XHJcbiAgICBmbGV4OiAxO1xyXG4gIH1cclxuXHJcbiAgLnVzZXItbmFtZSB7XHJcbiAgICBmb250LXNpemU6IDAuOXJlbTtcclxuICAgIG1hcmdpbi1yaWdodDogMC41cmVtO1xyXG4gIH1cclxufVxyXG5cclxuLmNvbnRlbnQtYXJlYSB7XHJcbiAgZmxleDogMTtcclxuICBwYWRkaW5nOiAxLjVyZW07XHJcbiAgb3ZlcmZsb3c6IGF1dG87XHJcbn1cclxuIiwiLm1haW4tY29udGFpbmVyIHtcbiAgaGVpZ2h0OiAxMDB2aDtcbn1cblxuLnNpZGViYXIge1xuICB3aWR0aDogMjQwcHg7XG4gIGJvcmRlci1yaWdodDogMXB4IHNvbGlkIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4xMik7XG59XG4uc2lkZWJhciAuc2lkZWJhci1oZWFkZXIge1xuICBwYWRkaW5nOiAxcmVtIDFyZW0gMC41cmVtO1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjA4KTtcbiAgbWFyZ2luLWJvdHRvbTogMC41cmVtO1xufVxuLnNpZGViYXIgLmJyYW5kIHtcbiAgZm9udC1zaXplOiAxLjI1cmVtO1xuICBmb250LXdlaWdodDogNzAwO1xuICBjb2xvcjogI2ZmZmZmZjtcbn1cbi5zaWRlYmFyIG1hdC1uYXYtbGlzdCB7XG4gIHBhZGRpbmctdG9wOiAwLjVyZW07XG59XG4uc2lkZWJhciBtYXQtbmF2LWxpc3QgYS5hY3RpdmUge1xuICBiYWNrZ3JvdW5kOiByZ2JhKDU3LCA3MywgMTcxLCAwLjEyKTtcbiAgY29sb3I6IHZhcigtLW1hdC1wcmltYXJ5LWNvbG9yKTtcbn1cbi5zaWRlYmFyIDo6bmctZGVlcCBtYXQtaWNvbiB7XG4gIGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuODcpO1xufVxuXG4ubWFpbi1jb250ZW50IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgbWluLWhlaWdodDogMTAwJTtcbn1cblxuLnRvb2xiYXIge1xuICBwb3NpdGlvbjogc3RpY2t5O1xuICB0b3A6IDA7XG4gIHotaW5kZXg6IDEwO1xuICBib3gtc2hhZG93OiAwIDFweCAzcHggcmdiYSgwLCAwLCAwLCAwLjM1KTtcbn1cbi50b29sYmFyIC50b29sYmFyLXRpdGxlIHtcbiAgZm9udC1zaXplOiAxLjFyZW07XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG59XG4udG9vbGJhciAuc3BhY2VyIHtcbiAgZmxleDogMTtcbn1cbi50b29sYmFyIC51c2VyLW5hbWUge1xuICBmb250LXNpemU6IDAuOXJlbTtcbiAgbWFyZ2luLXJpZ2h0OiAwLjVyZW07XG59XG5cbi5jb250ZW50LWFyZWEge1xuICBmbGV4OiAxO1xuICBwYWRkaW5nOiAxLjVyZW07XG4gIG92ZXJmbG93OiBhdXRvO1xufSJdLCJzb3VyY2VSb290IjoiIn0= */"]
      });
    }
  }
  return MainComponent;
})();

/***/ }),

/***/ 5074:
/*!****************************************************************!*\
  !*** ./node_modules/rxjs/dist/esm/internal/operators/delay.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   delay: () => (/* binding */ delay)
/* harmony export */ });
/* harmony import */ var _scheduler_async__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../scheduler/async */ 8473);
/* harmony import */ var _delayWhen__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./delayWhen */ 1534);
/* harmony import */ var _observable_timer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../observable/timer */ 4876);



function delay(due, scheduler = _scheduler_async__WEBPACK_IMPORTED_MODULE_0__.asyncScheduler) {
  const duration = (0,_observable_timer__WEBPACK_IMPORTED_MODULE_1__.timer)(due, scheduler);
  return (0,_delayWhen__WEBPACK_IMPORTED_MODULE_2__.delayWhen)(() => duration);
}

/***/ }),

/***/ 1534:
/*!********************************************************************!*\
  !*** ./node_modules/rxjs/dist/esm/internal/operators/delayWhen.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   delayWhen: () => (/* binding */ delayWhen)
/* harmony export */ });
/* harmony import */ var _observable_concat__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../observable/concat */ 4665);
/* harmony import */ var _take__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./take */ 4334);
/* harmony import */ var _ignoreElements__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ignoreElements */ 7242);
/* harmony import */ var _mapTo__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./mapTo */ 7378);
/* harmony import */ var _mergeMap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./mergeMap */ 3255);
/* harmony import */ var _observable_innerFrom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../observable/innerFrom */ 2645);






function delayWhen(delayDurationSelector, subscriptionDelay) {
  if (subscriptionDelay) {
    return source => (0,_observable_concat__WEBPACK_IMPORTED_MODULE_0__.concat)(subscriptionDelay.pipe((0,_take__WEBPACK_IMPORTED_MODULE_1__.take)(1), (0,_ignoreElements__WEBPACK_IMPORTED_MODULE_2__.ignoreElements)()), source.pipe(delayWhen(delayDurationSelector)));
  }
  return (0,_mergeMap__WEBPACK_IMPORTED_MODULE_3__.mergeMap)((value, index) => (0,_observable_innerFrom__WEBPACK_IMPORTED_MODULE_4__.innerFrom)(delayDurationSelector(value, index)).pipe((0,_take__WEBPACK_IMPORTED_MODULE_1__.take)(1), (0,_mapTo__WEBPACK_IMPORTED_MODULE_5__.mapTo)(value)));
}

/***/ }),

/***/ 7242:
/*!*************************************************************************!*\
  !*** ./node_modules/rxjs/dist/esm/internal/operators/ignoreElements.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ignoreElements: () => (/* binding */ ignoreElements)
/* harmony export */ });
/* harmony import */ var _util_lift__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util/lift */ 3200);
/* harmony import */ var _OperatorSubscriber__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./OperatorSubscriber */ 1687);
/* harmony import */ var _util_noop__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../util/noop */ 4318);



function ignoreElements() {
  return (0,_util_lift__WEBPACK_IMPORTED_MODULE_0__.operate)((source, subscriber) => {
    source.subscribe((0,_OperatorSubscriber__WEBPACK_IMPORTED_MODULE_1__.createOperatorSubscriber)(subscriber, _util_noop__WEBPACK_IMPORTED_MODULE_2__.noop));
  });
}

/***/ }),

/***/ 4102:
/*!*************************************************************!*\
  !*** ./node_modules/@angular/material/fesm2022/divider.mjs ***!
  \*************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MatDivider: () => (/* binding */ MatDivider),
/* harmony export */   MatDividerModule: () => (/* binding */ MatDividerModule)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/cdk/coercion */ 2814);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/core */ 4646);




let MatDivider = /*#__PURE__*/(() => {
  class MatDivider {
    constructor() {
      this._vertical = false;
      this._inset = false;
    }
    /** Whether the divider is vertically aligned. */
    get vertical() {
      return this._vertical;
    }
    set vertical(value) {
      this._vertical = (0,_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_0__.coerceBooleanProperty)(value);
    }
    /** Whether the divider is an inset divider. */
    get inset() {
      return this._inset;
    }
    set inset(value) {
      this._inset = (0,_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_0__.coerceBooleanProperty)(value);
    }
    static {
      this.ɵfac = function MatDivider_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || MatDivider)();
      };
    }
    static {
      this.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: MatDivider,
        selectors: [["mat-divider"]],
        hostAttrs: ["role", "separator", 1, "mat-divider"],
        hostVars: 7,
        hostBindings: function MatDivider_HostBindings(rf, ctx) {
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("aria-orientation", ctx.vertical ? "vertical" : "horizontal");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("mat-divider-vertical", ctx.vertical)("mat-divider-horizontal", !ctx.vertical)("mat-divider-inset", ctx.inset);
          }
        },
        inputs: {
          vertical: "vertical",
          inset: "inset"
        },
        standalone: true,
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵStandaloneFeature"]],
        decls: 0,
        vars: 0,
        template: function MatDivider_Template(rf, ctx) {},
        styles: [".mat-divider{display:block;margin:0;border-top-style:solid;border-top-color:var(--mat-divider-color, var(--mat-app-outline));border-top-width:var(--mat-divider-width)}.mat-divider.mat-divider-vertical{border-top:0;border-right-style:solid;border-right-color:var(--mat-divider-color, var(--mat-app-outline));border-right-width:var(--mat-divider-width)}.mat-divider.mat-divider-inset{margin-left:80px}[dir=rtl] .mat-divider.mat-divider-inset{margin-left:auto;margin-right:80px}"],
        encapsulation: 2,
        changeDetection: 0
      });
    }
  }
  return MatDivider;
})();
/*#__PURE__*/(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
let MatDividerModule = /*#__PURE__*/(() => {
  class MatDividerModule {
    static {
      this.ɵfac = function MatDividerModule_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || MatDividerModule)();
      };
    }
    static {
      this.ɵmod = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
        type: MatDividerModule
      });
    }
    static {
      this.ɵinj = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
        imports: [_angular_material_core__WEBPACK_IMPORTED_MODULE_2__.MatCommonModule, _angular_material_core__WEBPACK_IMPORTED_MODULE_2__.MatCommonModule]
      });
    }
  }
  return MatDividerModule;
})();
/*#__PURE__*/(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();

/**
 * Generated bundle index. Do not edit.
 */



/***/ }),

/***/ 943:
/*!**********************************************************!*\
  !*** ./node_modules/@angular/material/fesm2022/list.mjs ***!
  \**********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MAT_LIST: () => (/* binding */ MAT_LIST),
/* harmony export */   MAT_LIST_CONFIG: () => (/* binding */ MAT_LIST_CONFIG),
/* harmony export */   MAT_NAV_LIST: () => (/* binding */ MAT_NAV_LIST),
/* harmony export */   MAT_SELECTION_LIST_VALUE_ACCESSOR: () => (/* binding */ MAT_SELECTION_LIST_VALUE_ACCESSOR),
/* harmony export */   MatActionList: () => (/* binding */ MatActionList),
/* harmony export */   MatList: () => (/* binding */ MatList),
/* harmony export */   MatListItem: () => (/* binding */ MatListItem),
/* harmony export */   MatListItemAvatar: () => (/* binding */ MatListItemAvatar),
/* harmony export */   MatListItemIcon: () => (/* binding */ MatListItemIcon),
/* harmony export */   MatListItemLine: () => (/* binding */ MatListItemLine),
/* harmony export */   MatListItemMeta: () => (/* binding */ MatListItemMeta),
/* harmony export */   MatListItemTitle: () => (/* binding */ MatListItemTitle),
/* harmony export */   MatListModule: () => (/* binding */ MatListModule),
/* harmony export */   MatListOption: () => (/* binding */ MatListOption),
/* harmony export */   MatListSubheaderCssMatStyler: () => (/* binding */ MatListSubheaderCssMatStyler),
/* harmony export */   MatNavList: () => (/* binding */ MatNavList),
/* harmony export */   MatSelectionList: () => (/* binding */ MatSelectionList),
/* harmony export */   MatSelectionListChange: () => (/* binding */ MatSelectionListChange),
/* harmony export */   SELECTION_LIST: () => (/* binding */ SELECTION_LIST),
/* harmony export */   _MatListItemGraphicBase: () => (/* binding */ _MatListItemGraphicBase)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/cdk/coercion */ 2814);
/* harmony import */ var _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/cdk/platform */ 7699);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/core */ 4646);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 2510);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 3617);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs */ 819);
/* harmony import */ var _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/cdk/observers */ 9539);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/divider */ 4102);
/* harmony import */ var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/cdk/a11y */ 2102);
/* harmony import */ var _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/cdk/collections */ 7989);
/* harmony import */ var _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/cdk/keycodes */ 4879);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ 4456);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rxjs/operators */ 3900);
















/**
 * Injection token that can be used to reference instances of an `ListOption`. It serves
 * as alternative token to an actual implementation which could result in undesired
 * retention of the class or circular references breaking runtime execution.
 * @docs-private
 */
const _c0 = ["*"];
const _c1 = ".mdc-list{margin:0;padding:8px 0;list-style-type:none}.mdc-list:focus{outline:none}.mdc-list-item{display:flex;position:relative;justify-content:flex-start;overflow:hidden;padding:0;align-items:stretch;cursor:pointer;padding-left:16px;padding-right:16px;background-color:var(--mdc-list-list-item-container-color);border-radius:var(--mdc-list-list-item-container-shape, var(--mat-app-corner-none))}.mdc-list-item.mdc-list-item--selected{background-color:var(--mdc-list-list-item-selected-container-color)}.mdc-list-item:focus{outline:0}.mdc-list-item.mdc-list-item--disabled{cursor:auto}.mdc-list-item.mdc-list-item--with-one-line{height:var(--mdc-list-list-item-one-line-container-height)}.mdc-list-item.mdc-list-item--with-one-line .mdc-list-item__start{align-self:center;margin-top:0}.mdc-list-item.mdc-list-item--with-one-line .mdc-list-item__end{align-self:center;margin-top:0}.mdc-list-item.mdc-list-item--with-two-lines{height:var(--mdc-list-list-item-two-line-container-height)}.mdc-list-item.mdc-list-item--with-two-lines .mdc-list-item__start{align-self:flex-start;margin-top:16px}.mdc-list-item.mdc-list-item--with-two-lines .mdc-list-item__end{align-self:center;margin-top:0}.mdc-list-item.mdc-list-item--with-three-lines{height:var(--mdc-list-list-item-three-line-container-height)}.mdc-list-item.mdc-list-item--with-three-lines .mdc-list-item__start{align-self:flex-start;margin-top:16px}.mdc-list-item.mdc-list-item--with-three-lines .mdc-list-item__end{align-self:flex-start;margin-top:16px}.mdc-list-item.mdc-list-item--selected::before,.mdc-list-item.mdc-list-item--selected:focus::before,.mdc-list-item:not(.mdc-list-item--selected):focus::before{position:absolute;box-sizing:border-box;width:100%;height:100%;top:0;left:0;border:1px solid rgba(0,0,0,0);border-radius:inherit;content:\"\";pointer-events:none}.cdk-high-contrast-active .mdc-list-item.mdc-list-item--selected::before,.cdk-high-contrast-active .mdc-list-item.mdc-list-item--selected:focus::before,.cdk-high-contrast-active .mdc-list-item:not(.mdc-list-item--selected):focus::before{border-color:CanvasText}.mdc-list-item.mdc-list-item--selected:focus::before,.mdc-list-item.mdc-list-item--selected::before{border-width:3px;border-style:double}a.mdc-list-item{color:inherit;text-decoration:none}.mdc-list-item__start{fill:currentColor;flex-shrink:0;pointer-events:none}.mdc-list-item--with-leading-icon .mdc-list-item__start{color:var(--mdc-list-list-item-leading-icon-color, var(--mat-app-on-surface-variant));width:var(--mdc-list-list-item-leading-icon-size);height:var(--mdc-list-list-item-leading-icon-size);margin-left:16px;margin-right:32px}[dir=rtl] .mdc-list-item--with-leading-icon .mdc-list-item__start{margin-left:32px;margin-right:16px}.mdc-list-item--with-leading-icon:hover .mdc-list-item__start{color:var(--mdc-list-list-item-hover-leading-icon-color)}.mdc-list-item--with-leading-avatar .mdc-list-item__start{width:var(--mdc-list-list-item-leading-avatar-size);height:var(--mdc-list-list-item-leading-avatar-size);margin-left:16px;margin-right:16px;border-radius:50%}.mdc-list-item--with-leading-avatar .mdc-list-item__start,[dir=rtl] .mdc-list-item--with-leading-avatar .mdc-list-item__start{margin-left:16px;margin-right:16px;border-radius:50%}.mdc-list-item__end{flex-shrink:0;pointer-events:none}.mdc-list-item--with-trailing-meta .mdc-list-item__end{font-family:var(--mdc-list-list-item-trailing-supporting-text-font, var(--mat-app-label-small-font));line-height:var(--mdc-list-list-item-trailing-supporting-text-line-height, var(--mat-app-label-small-line-height));font-size:var(--mdc-list-list-item-trailing-supporting-text-size, var(--mat-app-label-small-size));font-weight:var(--mdc-list-list-item-trailing-supporting-text-weight, var(--mat-app-label-small-weight));letter-spacing:var(--mdc-list-list-item-trailing-supporting-text-tracking, var(--mat-app-label-small-tracking))}.mdc-list-item--with-trailing-icon .mdc-list-item__end{color:var(--mdc-list-list-item-trailing-icon-color, var(--mat-app-on-surface-variant));width:var(--mdc-list-list-item-trailing-icon-size);height:var(--mdc-list-list-item-trailing-icon-size)}.mdc-list-item--with-trailing-icon:hover .mdc-list-item__end{color:var(--mdc-list-list-item-hover-trailing-icon-color)}.mdc-list-item.mdc-list-item--with-trailing-meta .mdc-list-item__end{color:var(--mdc-list-list-item-trailing-supporting-text-color, var(--mat-app-on-surface-variant))}.mdc-list-item--selected.mdc-list-item--with-trailing-icon .mdc-list-item__end{color:var(--mdc-list-list-item-selected-trailing-icon-color, var(--mat-app-primary))}.mdc-list-item__content{text-overflow:ellipsis;white-space:nowrap;overflow:hidden;align-self:center;flex:1;pointer-events:none}.mdc-list-item--with-two-lines .mdc-list-item__content,.mdc-list-item--with-three-lines .mdc-list-item__content{align-self:stretch}.mdc-list-item__primary-text{text-overflow:ellipsis;white-space:nowrap;overflow:hidden;color:var(--mdc-list-list-item-label-text-color, var(--mat-app-on-surface));font-family:var(--mdc-list-list-item-label-text-font, var(--mat-app-body-large-font));line-height:var(--mdc-list-list-item-label-text-line-height, var(--mat-app-body-large-line-height));font-size:var(--mdc-list-list-item-label-text-size, var(--mat-app-body-large-size));font-weight:var(--mdc-list-list-item-label-text-weight, var(--mat-app-body-large-weight));letter-spacing:var(--mdc-list-list-item-label-text-tracking, var(--mat-app-body-large-tracking))}.mdc-list-item:hover .mdc-list-item__primary-text{color:var(--mdc-list-list-item-hover-label-text-color, var(--mat-app-on-surface))}.mdc-list-item:focus .mdc-list-item__primary-text{color:var(--mdc-list-list-item-focus-label-text-color, var(--mat-app-on-surface))}.mdc-list-item--with-two-lines .mdc-list-item__primary-text,.mdc-list-item--with-three-lines .mdc-list-item__primary-text{display:block;margin-top:0;line-height:normal;margin-bottom:-20px}.mdc-list-item--with-two-lines .mdc-list-item__primary-text::before,.mdc-list-item--with-three-lines .mdc-list-item__primary-text::before{display:inline-block;width:0;height:28px;content:\"\";vertical-align:0}.mdc-list-item--with-two-lines .mdc-list-item__primary-text::after,.mdc-list-item--with-three-lines .mdc-list-item__primary-text::after{display:inline-block;width:0;height:20px;content:\"\";vertical-align:-20px}.mdc-list-item__secondary-text{text-overflow:ellipsis;white-space:nowrap;overflow:hidden;display:block;margin-top:0;color:var(--mdc-list-list-item-supporting-text-color, var(--mat-app-on-surface-variant));font-family:var(--mdc-list-list-item-supporting-text-font, var(--mat-app-body-medium-font));line-height:var(--mdc-list-list-item-supporting-text-line-height, var(--mat-app-body-medium-line-height));font-size:var(--mdc-list-list-item-supporting-text-size, var(--mat-app-body-medium-size));font-weight:var(--mdc-list-list-item-supporting-text-weight, var(--mat-app-body-medium-weight));letter-spacing:var(--mdc-list-list-item-supporting-text-tracking, var(--mat-app-body-medium-tracking))}.mdc-list-item__secondary-text::before{display:inline-block;width:0;height:20px;content:\"\";vertical-align:0}.mdc-list-item--with-three-lines .mdc-list-item__secondary-text{white-space:normal;line-height:20px}.mdc-list-item--with-overline .mdc-list-item__secondary-text{white-space:nowrap;line-height:auto}.mdc-list-item--with-leading-radio.mdc-list-item,.mdc-list-item--with-leading-checkbox.mdc-list-item,.mdc-list-item--with-leading-icon.mdc-list-item,.mdc-list-item--with-leading-avatar.mdc-list-item{padding-left:0;padding-right:16px}[dir=rtl] .mdc-list-item--with-leading-radio.mdc-list-item,[dir=rtl] .mdc-list-item--with-leading-checkbox.mdc-list-item,[dir=rtl] .mdc-list-item--with-leading-icon.mdc-list-item,[dir=rtl] .mdc-list-item--with-leading-avatar.mdc-list-item{padding-left:16px;padding-right:0}.mdc-list-item--with-leading-radio.mdc-list-item--with-two-lines .mdc-list-item__primary-text,.mdc-list-item--with-leading-checkbox.mdc-list-item--with-two-lines .mdc-list-item__primary-text,.mdc-list-item--with-leading-icon.mdc-list-item--with-two-lines .mdc-list-item__primary-text,.mdc-list-item--with-leading-avatar.mdc-list-item--with-two-lines .mdc-list-item__primary-text{display:block;margin-top:0;line-height:normal;margin-bottom:-20px}.mdc-list-item--with-leading-radio.mdc-list-item--with-two-lines .mdc-list-item__primary-text::before,.mdc-list-item--with-leading-checkbox.mdc-list-item--with-two-lines .mdc-list-item__primary-text::before,.mdc-list-item--with-leading-icon.mdc-list-item--with-two-lines .mdc-list-item__primary-text::before,.mdc-list-item--with-leading-avatar.mdc-list-item--with-two-lines .mdc-list-item__primary-text::before{display:inline-block;width:0;height:32px;content:\"\";vertical-align:0}.mdc-list-item--with-leading-radio.mdc-list-item--with-two-lines .mdc-list-item__primary-text::after,.mdc-list-item--with-leading-checkbox.mdc-list-item--with-two-lines .mdc-list-item__primary-text::after,.mdc-list-item--with-leading-icon.mdc-list-item--with-two-lines .mdc-list-item__primary-text::after,.mdc-list-item--with-leading-avatar.mdc-list-item--with-two-lines .mdc-list-item__primary-text::after{display:inline-block;width:0;height:20px;content:\"\";vertical-align:-20px}.mdc-list-item--with-leading-radio.mdc-list-item--with-two-lines.mdc-list-item--with-trailing-meta .mdc-list-item__end,.mdc-list-item--with-leading-checkbox.mdc-list-item--with-two-lines.mdc-list-item--with-trailing-meta .mdc-list-item__end,.mdc-list-item--with-leading-icon.mdc-list-item--with-two-lines.mdc-list-item--with-trailing-meta .mdc-list-item__end,.mdc-list-item--with-leading-avatar.mdc-list-item--with-two-lines.mdc-list-item--with-trailing-meta .mdc-list-item__end{display:block;margin-top:0;line-height:normal}.mdc-list-item--with-leading-radio.mdc-list-item--with-two-lines.mdc-list-item--with-trailing-meta .mdc-list-item__end::before,.mdc-list-item--with-leading-checkbox.mdc-list-item--with-two-lines.mdc-list-item--with-trailing-meta .mdc-list-item__end::before,.mdc-list-item--with-leading-icon.mdc-list-item--with-two-lines.mdc-list-item--with-trailing-meta .mdc-list-item__end::before,.mdc-list-item--with-leading-avatar.mdc-list-item--with-two-lines.mdc-list-item--with-trailing-meta .mdc-list-item__end::before{display:inline-block;width:0;height:32px;content:\"\";vertical-align:0}.mdc-list-item--with-trailing-icon.mdc-list-item,[dir=rtl] .mdc-list-item--with-trailing-icon.mdc-list-item{padding-left:0;padding-right:0}.mdc-list-item--with-trailing-icon .mdc-list-item__end{margin-left:16px;margin-right:16px}.mdc-list-item--with-trailing-meta.mdc-list-item{padding-left:16px;padding-right:0}[dir=rtl] .mdc-list-item--with-trailing-meta.mdc-list-item{padding-left:0;padding-right:16px}.mdc-list-item--with-trailing-meta .mdc-list-item__end{-webkit-user-select:none;user-select:none;margin-left:28px;margin-right:16px}[dir=rtl] .mdc-list-item--with-trailing-meta .mdc-list-item__end{margin-left:16px;margin-right:28px}.mdc-list-item--with-trailing-meta.mdc-list-item--with-three-lines .mdc-list-item__end,.mdc-list-item--with-trailing-meta.mdc-list-item--with-two-lines .mdc-list-item__end{display:block;line-height:normal;align-self:flex-start;margin-top:0}.mdc-list-item--with-trailing-meta.mdc-list-item--with-three-lines .mdc-list-item__end::before,.mdc-list-item--with-trailing-meta.mdc-list-item--with-two-lines .mdc-list-item__end::before{display:inline-block;width:0;height:28px;content:\"\";vertical-align:0}.mdc-list-item--with-leading-radio .mdc-list-item__start,.mdc-list-item--with-leading-checkbox .mdc-list-item__start{margin-left:8px;margin-right:24px}[dir=rtl] .mdc-list-item--with-leading-radio .mdc-list-item__start,[dir=rtl] .mdc-list-item--with-leading-checkbox .mdc-list-item__start{margin-left:24px;margin-right:8px}.mdc-list-item--with-leading-radio.mdc-list-item--with-two-lines .mdc-list-item__start,.mdc-list-item--with-leading-checkbox.mdc-list-item--with-two-lines .mdc-list-item__start{align-self:flex-start;margin-top:8px}.mdc-list-item--with-trailing-radio.mdc-list-item,.mdc-list-item--with-trailing-checkbox.mdc-list-item{padding-left:16px;padding-right:0}[dir=rtl] .mdc-list-item--with-trailing-radio.mdc-list-item,[dir=rtl] .mdc-list-item--with-trailing-checkbox.mdc-list-item{padding-left:0;padding-right:16px}.mdc-list-item--with-trailing-radio.mdc-list-item--with-leading-icon,.mdc-list-item--with-trailing-radio.mdc-list-item--with-leading-avatar,.mdc-list-item--with-trailing-checkbox.mdc-list-item--with-leading-icon,.mdc-list-item--with-trailing-checkbox.mdc-list-item--with-leading-avatar{padding-left:0}[dir=rtl] .mdc-list-item--with-trailing-radio.mdc-list-item--with-leading-icon,[dir=rtl] .mdc-list-item--with-trailing-radio.mdc-list-item--with-leading-avatar,[dir=rtl] .mdc-list-item--with-trailing-checkbox.mdc-list-item--with-leading-icon,[dir=rtl] .mdc-list-item--with-trailing-checkbox.mdc-list-item--with-leading-avatar{padding-right:0}.mdc-list-item--with-trailing-radio .mdc-list-item__end,.mdc-list-item--with-trailing-checkbox .mdc-list-item__end{margin-left:24px;margin-right:8px}[dir=rtl] .mdc-list-item--with-trailing-radio .mdc-list-item__end,[dir=rtl] .mdc-list-item--with-trailing-checkbox .mdc-list-item__end{margin-left:8px;margin-right:24px}.mdc-list-item--with-trailing-radio.mdc-list-item--with-three-lines .mdc-list-item__end,.mdc-list-item--with-trailing-checkbox.mdc-list-item--with-three-lines .mdc-list-item__end{align-self:flex-start;margin-top:8px}.mdc-list-group__subheader{margin:.75rem 16px}.mdc-list-item--disabled .mdc-list-item__start,.mdc-list-item--disabled .mdc-list-item__content,.mdc-list-item--disabled .mdc-list-item__end{opacity:1}.mdc-list-item--disabled .mdc-list-item__primary-text,.mdc-list-item--disabled .mdc-list-item__secondary-text{opacity:var(--mdc-list-list-item-disabled-label-text-opacity)}.mdc-list-item--disabled.mdc-list-item--with-leading-icon .mdc-list-item__start{color:var(--mdc-list-list-item-disabled-leading-icon-color, var(--mat-app-on-surface));opacity:var(--mdc-list-list-item-disabled-leading-icon-opacity)}.mdc-list-item--disabled.mdc-list-item--with-trailing-icon .mdc-list-item__end{color:var(--mdc-list-list-item-disabled-trailing-icon-color, var(--mat-app-on-surface));opacity:var(--mdc-list-list-item-disabled-trailing-icon-opacity)}.mat-mdc-list-item.mat-mdc-list-item-both-leading-and-trailing,[dir=rtl] .mat-mdc-list-item.mat-mdc-list-item-both-leading-and-trailing{padding-left:0;padding-right:0}.mdc-list-item.mdc-list-item--disabled .mdc-list-item__primary-text{color:var(--mdc-list-list-item-disabled-label-text-color, var(--mat-app-on-surface))}.mdc-list-item:hover::before{background-color:var(--mdc-list-list-item-hover-state-layer-color, var(--mat-app-on-surface));opacity:var(--mdc-list-list-item-hover-state-layer-opacity, var(--mat-app-hover-state-layer-opacity))}.mdc-list-item.mdc-list-item--disabled::before{background-color:var(--mdc-list-list-item-disabled-state-layer-color, var(--mat-app-on-surface));opacity:var(--mdc-list-list-item-disabled-state-layer-opacity, var(--mat-app-focus-state-layer-opacity))}.mdc-list-item:focus::before{background-color:var(--mdc-list-list-item-focus-state-layer-color, var(--mat-app-on-surface));opacity:var(--mdc-list-list-item-focus-state-layer-opacity, var(--mat-app-focus-state-layer-opacity))}.mdc-list-item--disabled .mdc-radio,.mdc-list-item--disabled .mdc-checkbox{opacity:var(--mdc-list-list-item-disabled-label-text-opacity)}.mdc-list-item--with-leading-avatar .mat-mdc-list-item-avatar{border-radius:var(--mdc-list-list-item-leading-avatar-shape, var(--mat-app-corner-full));background-color:var(--mdc-list-list-item-leading-avatar-color, var(--mat-app-primary-container))}.mat-mdc-list-item-icon{font-size:var(--mdc-list-list-item-leading-icon-size)}.cdk-high-contrast-active a.mdc-list-item--activated::after{content:\"\";position:absolute;top:50%;right:16px;transform:translateY(-50%);width:10px;height:0;border-bottom:solid 10px;border-radius:10px}.cdk-high-contrast-active a.mdc-list-item--activated [dir=rtl]::after{right:auto;left:16px}.mat-mdc-list-base{display:block}.mat-mdc-list-base .mdc-list-item__start,.mat-mdc-list-base .mdc-list-item__end,.mat-mdc-list-base .mdc-list-item__content{pointer-events:auto}.mat-mdc-list-item,.mat-mdc-list-option{width:100%;box-sizing:border-box;-webkit-tap-highlight-color:rgba(0,0,0,0)}.mat-mdc-list-item:not(.mat-mdc-list-item-interactive),.mat-mdc-list-option:not(.mat-mdc-list-item-interactive){cursor:default}.mat-mdc-list-item .mat-divider-inset,.mat-mdc-list-option .mat-divider-inset{position:absolute;left:0;right:0;bottom:0}.mat-mdc-list-item .mat-mdc-list-item-avatar~.mat-divider-inset,.mat-mdc-list-option .mat-mdc-list-item-avatar~.mat-divider-inset{margin-left:72px}[dir=rtl] .mat-mdc-list-item .mat-mdc-list-item-avatar~.mat-divider-inset,[dir=rtl] .mat-mdc-list-option .mat-mdc-list-item-avatar~.mat-divider-inset{margin-right:72px}.mat-mdc-list-item-interactive::before{top:0;left:0;right:0;bottom:0;position:absolute;content:\"\";opacity:0;pointer-events:none}.mat-mdc-list-item>.mat-mdc-focus-indicator{top:0;left:0;right:0;bottom:0;position:absolute;pointer-events:none}.mat-mdc-list-item:focus>.mat-mdc-focus-indicator::before{content:\"\"}.mat-mdc-list-item.mdc-list-item--with-three-lines .mat-mdc-list-item-line.mdc-list-item__secondary-text{white-space:nowrap;line-height:normal}.mat-mdc-list-item.mdc-list-item--with-three-lines .mat-mdc-list-item-unscoped-content.mdc-list-item__secondary-text{display:-webkit-box;-webkit-box-orient:vertical;-webkit-line-clamp:2}mat-action-list button{background:none;color:inherit;border:none;font:inherit;outline:inherit;-webkit-tap-highlight-color:rgba(0,0,0,0);text-align:start}mat-action-list button::-moz-focus-inner{border:0}.mdc-list-item--with-leading-icon .mdc-list-item__start{margin-inline-start:var(--mat-list-list-item-leading-icon-start-space);margin-inline-end:var(--mat-list-list-item-leading-icon-end-space)}.mat-mdc-nav-list .mat-mdc-list-item{border-radius:var(--mat-list-active-indicator-shape, var(--mat-app-corner-full));--mat-mdc-focus-indicator-border-radius:var(--mat-list-active-indicator-shape, var(--mat-app-corner-full))}.mat-mdc-nav-list .mat-mdc-list-item.mdc-list-item--activated{background-color:var(--mat-list-active-indicator-color, var(--mat-app-secondary-container))}";
const _c2 = ["unscopedContent"];
const _c3 = ["text"];
const _c4 = [[["", "matListItemAvatar", ""], ["", "matListItemIcon", ""]], [["", "matListItemTitle", ""]], [["", "matListItemLine", ""]], "*", [["", "matListItemMeta", ""]], [["mat-divider"]]];
const _c5 = ["[matListItemAvatar],[matListItemIcon]", "[matListItemTitle]", "[matListItemLine]", "*", "[matListItemMeta]", "mat-divider"];
const _c6 = [[["", "matListItemTitle", ""]], [["", "matListItemLine", ""]], "*", [["mat-divider"]], [["", "matListItemAvatar", ""], ["", "matListItemIcon", ""]]];
const _c7 = ["[matListItemTitle]", "[matListItemLine]", "*", "mat-divider", "[matListItemAvatar],[matListItemIcon]"];
function MatListOption_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](0, 4);
  }
}
function MatListOption_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "input", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "svg", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "path", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("mdc-checkbox--disabled", ctx_r1.disabled);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("checked", ctx_r1.selected)("disabled", ctx_r1.disabled);
  }
}
function MatListOption_ng_template_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "input", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "div", 20)(4, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("mdc-radio--disabled", ctx_r1.disabled);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("checked", ctx_r1.selected)("disabled", ctx_r1.disabled);
  }
}
function MatListOption_Conditional_6_ng_template_1_Template(rf, ctx) {}
function MatListOption_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, MatListOption_Conditional_6_ng_template_1_Template, 0, 0, "ng-template", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    const checkbox_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", checkbox_r3);
  }
}
function MatListOption_Conditional_7_ng_template_1_Template(rf, ctx) {}
function MatListOption_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, MatListOption_Conditional_7_ng_template_1_Template, 0, 0, "ng-template", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    const radio_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", radio_r4);
  }
}
function MatListOption_Conditional_8_ng_template_0_Template(rf, ctx) {}
function MatListOption_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, MatListOption_Conditional_8_ng_template_0_Template, 0, 0, "ng-template", 6);
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    const icons_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", icons_r5);
  }
}
function MatListOption_Conditional_15_ng_template_1_Template(rf, ctx) {}
function MatListOption_Conditional_15_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, MatListOption_Conditional_15_ng_template_1_Template, 0, 0, "ng-template", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    const checkbox_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", checkbox_r3);
  }
}
function MatListOption_Conditional_16_ng_template_1_Template(rf, ctx) {}
function MatListOption_Conditional_16_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, MatListOption_Conditional_16_ng_template_1_Template, 0, 0, "ng-template", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    const radio_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", radio_r4);
  }
}
function MatListOption_Conditional_17_ng_template_0_Template(rf, ctx) {}
function MatListOption_Conditional_17_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, MatListOption_Conditional_17_ng_template_0_Template, 0, 0, "ng-template", 6);
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    const icons_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", icons_r5);
  }
}
const LIST_OPTION = /*#__PURE__*/new _angular_core__WEBPACK_IMPORTED_MODULE_0__.InjectionToken('ListOption');

/**
 * Directive capturing the title of a list item. A list item usually consists of a
 * title and optional secondary or tertiary lines.
 *
 * Text content for the title never wraps. There can only be a single title per list item.
 */
let MatListItemTitle = /*#__PURE__*/(() => {
  class MatListItemTitle {
    constructor(_elementRef) {
      this._elementRef = _elementRef;
    }
    static {
      this.ɵfac = function MatListItemTitle_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || MatListItemTitle)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef));
      };
    }
    static {
      this.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
        type: MatListItemTitle,
        selectors: [["", "matListItemTitle", ""]],
        hostAttrs: [1, "mat-mdc-list-item-title", "mdc-list-item__primary-text"],
        standalone: true
      });
    }
  }
  return MatListItemTitle;
})();
/*#__PURE__*/(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
/**
 * Directive capturing a line in a list item. A list item usually consists of a
 * title and optional secondary or tertiary lines.
 *
 * Text content inside a line never wraps. There can be at maximum two lines per list item.
 */
let MatListItemLine = /*#__PURE__*/(() => {
  class MatListItemLine {
    constructor(_elementRef) {
      this._elementRef = _elementRef;
    }
    static {
      this.ɵfac = function MatListItemLine_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || MatListItemLine)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef));
      };
    }
    static {
      this.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
        type: MatListItemLine,
        selectors: [["", "matListItemLine", ""]],
        hostAttrs: [1, "mat-mdc-list-item-line", "mdc-list-item__secondary-text"],
        standalone: true
      });
    }
  }
  return MatListItemLine;
})();
/*#__PURE__*/(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
/**
 * Directive matching an optional meta section for list items.
 *
 * List items can reserve space at the end of an item to display a control,
 * button or additional text content.
 */
let MatListItemMeta = /*#__PURE__*/(() => {
  class MatListItemMeta {
    static {
      this.ɵfac = function MatListItemMeta_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || MatListItemMeta)();
      };
    }
    static {
      this.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
        type: MatListItemMeta,
        selectors: [["", "matListItemMeta", ""]],
        hostAttrs: [1, "mat-mdc-list-item-meta", "mdc-list-item__end"],
        standalone: true
      });
    }
  }
  return MatListItemMeta;
})();
/*#__PURE__*/(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
/**
 * @docs-private
 *
 * MDC uses the very intuitively named classes `.mdc-list-item__start` and `.mat-list-item__end` to
 * position content such as icons or checkboxes/radios that comes either before or after the text
 * content respectively. This directive detects the placement of the checkbox/radio and applies the
 * correct MDC class to position the icon/avatar on the opposite side.
 */
let _MatListItemGraphicBase = /*#__PURE__*/(() => {
  class _MatListItemGraphicBase {
    constructor(_listOption) {
      this._listOption = _listOption;
    }
    _isAlignedAtStart() {
      // By default, in all list items the graphic is aligned at start. In list options,
      // the graphic is only aligned at start if the checkbox/radio is at the end.
      return !this._listOption || this._listOption?._getTogglePosition() === 'after';
    }
    static {
      this.ɵfac = function _MatListItemGraphicBase_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || _MatListItemGraphicBase)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](LIST_OPTION, 8));
      };
    }
    static {
      this.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
        type: _MatListItemGraphicBase,
        hostVars: 4,
        hostBindings: function _MatListItemGraphicBase_HostBindings(rf, ctx) {
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("mdc-list-item__start", ctx._isAlignedAtStart())("mdc-list-item__end", !ctx._isAlignedAtStart());
          }
        },
        standalone: true
      });
    }
  }
  return _MatListItemGraphicBase;
})();
/*#__PURE__*/(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
/**
 * Directive matching an optional avatar within a list item.
 *
 * List items can reserve space at the beginning of an item to display an avatar.
 */
let MatListItemAvatar = /*#__PURE__*/(() => {
  class MatListItemAvatar extends _MatListItemGraphicBase {
    static {
      this.ɵfac = /* @__PURE__ */(() => {
        let ɵMatListItemAvatar_BaseFactory;
        return function MatListItemAvatar_Factory(__ngFactoryType__) {
          return (ɵMatListItemAvatar_BaseFactory || (ɵMatListItemAvatar_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetInheritedFactory"](MatListItemAvatar)))(__ngFactoryType__ || MatListItemAvatar);
        };
      })();
    }
    static {
      this.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
        type: MatListItemAvatar,
        selectors: [["", "matListItemAvatar", ""]],
        hostAttrs: [1, "mat-mdc-list-item-avatar"],
        standalone: true,
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]]
      });
    }
  }
  return MatListItemAvatar;
})();
/*#__PURE__*/(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
/**
 * Directive matching an optional icon within a list item.
 *
 * List items can reserve space at the beginning of an item to display an icon.
 */
let MatListItemIcon = /*#__PURE__*/(() => {
  class MatListItemIcon extends _MatListItemGraphicBase {
    static {
      this.ɵfac = /* @__PURE__ */(() => {
        let ɵMatListItemIcon_BaseFactory;
        return function MatListItemIcon_Factory(__ngFactoryType__) {
          return (ɵMatListItemIcon_BaseFactory || (ɵMatListItemIcon_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetInheritedFactory"](MatListItemIcon)))(__ngFactoryType__ || MatListItemIcon);
        };
      })();
    }
    static {
      this.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
        type: MatListItemIcon,
        selectors: [["", "matListItemIcon", ""]],
        hostAttrs: [1, "mat-mdc-list-item-icon"],
        standalone: true,
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]]
      });
    }
  }
  return MatListItemIcon;
})();
/*#__PURE__*/(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();

/** Injection token that can be used to provide the default options for the list module. */
const MAT_LIST_CONFIG = /*#__PURE__*/new _angular_core__WEBPACK_IMPORTED_MODULE_0__.InjectionToken('MAT_LIST_CONFIG');

/** @docs-private */
let MatListBase = /*#__PURE__*/(() => {
  class MatListBase {
    constructor() {
      this._isNonInteractive = true;
      this._disableRipple = false;
      this._disabled = false;
      this._defaultOptions = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(MAT_LIST_CONFIG, {
        optional: true
      });
    }
    /** Whether ripples for all list items is disabled. */
    get disableRipple() {
      return this._disableRipple;
    }
    set disableRipple(value) {
      this._disableRipple = (0,_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_1__.coerceBooleanProperty)(value);
    }
    /**
     * Whether the entire list is disabled. When disabled, the list itself and each of its list items
     * are disabled.
     */
    get disabled() {
      return this._disabled;
    }
    set disabled(value) {
      this._disabled = (0,_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_1__.coerceBooleanProperty)(value);
    }
    static {
      this.ɵfac = function MatListBase_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || MatListBase)();
      };
    }
    static {
      this.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
        type: MatListBase,
        hostVars: 1,
        hostBindings: function MatListBase_HostBindings(rf, ctx) {
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-disabled", ctx.disabled);
          }
        },
        inputs: {
          disableRipple: "disableRipple",
          disabled: "disabled"
        },
        standalone: true
      });
    }
  }
  return MatListBase;
})();
/*#__PURE__*/(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
/** @docs-private */
let MatListItemBase = /*#__PURE__*/(() => {
  class MatListItemBase {
    /**
     * The number of lines this list item should reserve space for. If not specified,
     * lines are inferred based on the projected content.
     *
     * Explicitly specifying the number of lines is useful if you want to acquire additional
     * space and enable the wrapping of text. The unscoped text content of a list item will
     * always be able to take up the remaining space of the item, unless it represents the title.
     *
     * A maximum of three lines is supported as per the Material Design specification.
     */
    set lines(lines) {
      this._explicitLines = (0,_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_1__.coerceNumberProperty)(lines, null);
      this._updateItemLines(false);
    }
    /** Whether ripples for list items are disabled. */
    get disableRipple() {
      return this.disabled || this._disableRipple || this._noopAnimations || !!this._listBase?.disableRipple;
    }
    set disableRipple(value) {
      this._disableRipple = (0,_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_1__.coerceBooleanProperty)(value);
    }
    /** Whether the list-item is disabled. */
    get disabled() {
      return this._disabled || !!this._listBase?.disabled;
    }
    set disabled(value) {
      this._disabled = (0,_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_1__.coerceBooleanProperty)(value);
    }
    /**
     * Implemented as part of `RippleTarget`.
     * @docs-private
     */
    get rippleDisabled() {
      return this.disableRipple || !!this.rippleConfig.disabled;
    }
    constructor(_elementRef, _ngZone, _listBase, _platform, globalRippleOptions, animationMode) {
      this._elementRef = _elementRef;
      this._ngZone = _ngZone;
      this._listBase = _listBase;
      this._platform = _platform;
      this._explicitLines = null;
      this._disableRipple = false;
      this._disabled = false;
      this._subscriptions = new rxjs__WEBPACK_IMPORTED_MODULE_2__.Subscription();
      this._rippleRenderer = null;
      /** Whether the list item has unscoped text content. */
      this._hasUnscopedTextContent = false;
      this.rippleConfig = globalRippleOptions || {};
      this._hostElement = this._elementRef.nativeElement;
      this._isButtonElement = this._hostElement.nodeName.toLowerCase() === 'button';
      this._noopAnimations = animationMode === 'NoopAnimations';
      if (_listBase && !_listBase._isNonInteractive) {
        this._initInteractiveListItem();
      }
      // If no type attribute is specified for a host `<button>` element, set it to `button`. If a
      // type attribute is already specified, we do nothing. We do this for backwards compatibility.
      // TODO: Determine if we intend to continue doing this for the MDC-based list.
      if (this._isButtonElement && !this._hostElement.hasAttribute('type')) {
        this._hostElement.setAttribute('type', 'button');
      }
    }
    ngAfterViewInit() {
      this._monitorProjectedLinesAndTitle();
      this._updateItemLines(true);
    }
    ngOnDestroy() {
      this._subscriptions.unsubscribe();
      if (this._rippleRenderer !== null) {
        this._rippleRenderer._removeTriggerEvents();
      }
    }
    /** Whether the list item has icons or avatars. */
    _hasIconOrAvatar() {
      return !!(this._avatars.length || this._icons.length);
    }
    _initInteractiveListItem() {
      this._hostElement.classList.add('mat-mdc-list-item-interactive');
      this._rippleRenderer = new _angular_material_core__WEBPACK_IMPORTED_MODULE_3__.RippleRenderer(this, this._ngZone, this._hostElement, this._platform);
      this._rippleRenderer.setupTriggerEvents(this._hostElement);
    }
    /**
     * Subscribes to changes in the projected title and lines. Triggers a
     * item lines update whenever a change occurs.
     */
    _monitorProjectedLinesAndTitle() {
      this._ngZone.runOutsideAngular(() => {
        this._subscriptions.add((0,rxjs__WEBPACK_IMPORTED_MODULE_4__.merge)(this._lines.changes, this._titles.changes).subscribe(() => this._updateItemLines(false)));
      });
    }
    /**
     * Updates the lines of the list item. Based on the projected user content and optional
     * explicit lines setting, the visual appearance of the list item is determined.
     *
     * This method should be invoked whenever the projected user content changes, or
     * when the explicit lines have been updated.
     *
     * @param recheckUnscopedContent Whether the projected unscoped content should be re-checked.
     *   The unscoped content is not re-checked for every update as it is a rather expensive check
     *   for content that is expected to not change very often.
     */
    _updateItemLines(recheckUnscopedContent) {
      // If the updated is triggered too early before the view and content is initialized,
      // we just skip the update. After view initialization the update is triggered again.
      if (!this._lines || !this._titles || !this._unscopedContent) {
        return;
      }
      // Re-check the DOM for unscoped text content if requested. This needs to
      // happen before any computation or sanity checks run as these rely on the
      // result of whether there is unscoped text content or not.
      if (recheckUnscopedContent) {
        this._checkDomForUnscopedTextContent();
      }
      // Sanity check the list item lines and title in the content. This is a dev-mode only
      // check that can be dead-code eliminated by Terser in production.
      if (typeof ngDevMode === 'undefined' || ngDevMode) {
        sanityCheckListItemContent(this);
      }
      const numberOfLines = this._explicitLines ?? this._inferLinesFromContent();
      const unscopedContentEl = this._unscopedContent.nativeElement;
      // Update the list item element to reflect the number of lines.
      this._hostElement.classList.toggle('mat-mdc-list-item-single-line', numberOfLines <= 1);
      this._hostElement.classList.toggle('mdc-list-item--with-one-line', numberOfLines <= 1);
      this._hostElement.classList.toggle('mdc-list-item--with-two-lines', numberOfLines === 2);
      this._hostElement.classList.toggle('mdc-list-item--with-three-lines', numberOfLines === 3);
      // If there is no title and the unscoped content is the is the only line, the
      // unscoped text content will be treated as the title of the list-item.
      if (this._hasUnscopedTextContent) {
        const treatAsTitle = this._titles.length === 0 && numberOfLines === 1;
        unscopedContentEl.classList.toggle('mdc-list-item__primary-text', treatAsTitle);
        unscopedContentEl.classList.toggle('mdc-list-item__secondary-text', !treatAsTitle);
      } else {
        unscopedContentEl.classList.remove('mdc-list-item__primary-text');
        unscopedContentEl.classList.remove('mdc-list-item__secondary-text');
      }
    }
    /**
     * Infers the number of lines based on the projected user content. This is useful
     * if no explicit number of lines has been specified on the list item.
     *
     * The number of lines is inferred based on whether there is a title, the number of
     * additional lines (secondary/tertiary). An additional line is acquired if there is
     * unscoped text content.
     */
    _inferLinesFromContent() {
      let numOfLines = this._titles.length + this._lines.length;
      if (this._hasUnscopedTextContent) {
        numOfLines += 1;
      }
      return numOfLines;
    }
    /** Checks whether the list item has unscoped text content. */
    _checkDomForUnscopedTextContent() {
      this._hasUnscopedTextContent = Array.from(this._unscopedContent.nativeElement.childNodes).filter(node => node.nodeType !== node.COMMENT_NODE).some(node => !!(node.textContent && node.textContent.trim()));
    }
    static {
      this.ɵfac = function MatListItemBase_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || MatListItemBase)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](MatListBase, 8), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_5__.Platform), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_core__WEBPACK_IMPORTED_MODULE_3__.MAT_RIPPLE_GLOBAL_OPTIONS, 8), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ANIMATION_MODULE_TYPE, 8));
      };
    }
    static {
      this.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
        type: MatListItemBase,
        contentQueries: function MatListItemBase_ContentQueries(rf, ctx, dirIndex) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, MatListItemAvatar, 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, MatListItemIcon, 4);
          }
          if (rf & 2) {
            let _t;
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx._avatars = _t);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx._icons = _t);
          }
        },
        hostVars: 4,
        hostBindings: function MatListItemBase_HostBindings(rf, ctx) {
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-disabled", ctx.disabled)("disabled", ctx._isButtonElement && ctx.disabled || null);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("mdc-list-item--disabled", ctx.disabled);
          }
        },
        inputs: {
          lines: "lines",
          disableRipple: "disableRipple",
          disabled: "disabled"
        },
        standalone: true
      });
    }
  }
  return MatListItemBase;
})();
/*#__PURE__*/(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
/**
 * Sanity checks the configuration of the list item with respect to the amount
 * of lines, whether there is a title, or if there is unscoped text content.
 *
 * The checks are extracted into a top-level function that can be dead-code
 * eliminated by Terser or other optimizers in production mode.
 */
function sanityCheckListItemContent(item) {
  const numTitles = item._titles.length;
  const numLines = item._lines.length;
  if (numTitles > 1) {
    console.warn('A list item cannot have multiple titles.');
  }
  if (numTitles === 0 && numLines > 0) {
    console.warn('A list item line can only be used if there is a list item title.');
  }
  if (numTitles === 0 && item._hasUnscopedTextContent && item._explicitLines !== null && item._explicitLines > 1) {
    console.warn('A list item cannot have wrapping content without a title.');
  }
  if (numLines > 2 || numLines === 2 && item._hasUnscopedTextContent) {
    console.warn('A list item can have at maximum three lines.');
  }
}
let MatActionList = /*#__PURE__*/(() => {
  class MatActionList extends MatListBase {
    constructor() {
      super(...arguments);
      // An navigation list is considered interactive, but does not extend the interactive list
      // base class. We do this because as per MDC, items of interactive lists are only reachable
      // through keyboard shortcuts. We want all items for the navigation list to be reachable
      // through tab key as we do not intend to provide any special accessibility treatment. The
      // accessibility treatment depends on how the end-user will interact with it.
      this._isNonInteractive = false;
    }
    static {
      this.ɵfac = /* @__PURE__ */(() => {
        let ɵMatActionList_BaseFactory;
        return function MatActionList_Factory(__ngFactoryType__) {
          return (ɵMatActionList_BaseFactory || (ɵMatActionList_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetInheritedFactory"](MatActionList)))(__ngFactoryType__ || MatActionList);
        };
      })();
    }
    static {
      this.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: MatActionList,
        selectors: [["mat-action-list"]],
        hostAttrs: ["role", "group", 1, "mat-mdc-action-list", "mat-mdc-list-base", "mdc-list"],
        exportAs: ["matActionList"],
        standalone: true,
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([{
          provide: MatListBase,
          useExisting: MatActionList
        }]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵStandaloneFeature"]],
        ngContentSelectors: _c0,
        decls: 1,
        vars: 0,
        template: function MatActionList_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](0);
          }
        },
        styles: [".mdc-list{margin:0;padding:8px 0;list-style-type:none}.mdc-list:focus{outline:none}.mdc-list-item{display:flex;position:relative;justify-content:flex-start;overflow:hidden;padding:0;align-items:stretch;cursor:pointer;padding-left:16px;padding-right:16px;background-color:var(--mdc-list-list-item-container-color);border-radius:var(--mdc-list-list-item-container-shape, var(--mat-app-corner-none))}.mdc-list-item.mdc-list-item--selected{background-color:var(--mdc-list-list-item-selected-container-color)}.mdc-list-item:focus{outline:0}.mdc-list-item.mdc-list-item--disabled{cursor:auto}.mdc-list-item.mdc-list-item--with-one-line{height:var(--mdc-list-list-item-one-line-container-height)}.mdc-list-item.mdc-list-item--with-one-line .mdc-list-item__start{align-self:center;margin-top:0}.mdc-list-item.mdc-list-item--with-one-line .mdc-list-item__end{align-self:center;margin-top:0}.mdc-list-item.mdc-list-item--with-two-lines{height:var(--mdc-list-list-item-two-line-container-height)}.mdc-list-item.mdc-list-item--with-two-lines .mdc-list-item__start{align-self:flex-start;margin-top:16px}.mdc-list-item.mdc-list-item--with-two-lines .mdc-list-item__end{align-self:center;margin-top:0}.mdc-list-item.mdc-list-item--with-three-lines{height:var(--mdc-list-list-item-three-line-container-height)}.mdc-list-item.mdc-list-item--with-three-lines .mdc-list-item__start{align-self:flex-start;margin-top:16px}.mdc-list-item.mdc-list-item--with-three-lines .mdc-list-item__end{align-self:flex-start;margin-top:16px}.mdc-list-item.mdc-list-item--selected::before,.mdc-list-item.mdc-list-item--selected:focus::before,.mdc-list-item:not(.mdc-list-item--selected):focus::before{position:absolute;box-sizing:border-box;width:100%;height:100%;top:0;left:0;border:1px solid rgba(0,0,0,0);border-radius:inherit;content:\"\";pointer-events:none}.cdk-high-contrast-active .mdc-list-item.mdc-list-item--selected::before,.cdk-high-contrast-active .mdc-list-item.mdc-list-item--selected:focus::before,.cdk-high-contrast-active .mdc-list-item:not(.mdc-list-item--selected):focus::before{border-color:CanvasText}.mdc-list-item.mdc-list-item--selected:focus::before,.mdc-list-item.mdc-list-item--selected::before{border-width:3px;border-style:double}a.mdc-list-item{color:inherit;text-decoration:none}.mdc-list-item__start{fill:currentColor;flex-shrink:0;pointer-events:none}.mdc-list-item--with-leading-icon .mdc-list-item__start{color:var(--mdc-list-list-item-leading-icon-color, var(--mat-app-on-surface-variant));width:var(--mdc-list-list-item-leading-icon-size);height:var(--mdc-list-list-item-leading-icon-size);margin-left:16px;margin-right:32px}[dir=rtl] .mdc-list-item--with-leading-icon .mdc-list-item__start{margin-left:32px;margin-right:16px}.mdc-list-item--with-leading-icon:hover .mdc-list-item__start{color:var(--mdc-list-list-item-hover-leading-icon-color)}.mdc-list-item--with-leading-avatar .mdc-list-item__start{width:var(--mdc-list-list-item-leading-avatar-size);height:var(--mdc-list-list-item-leading-avatar-size);margin-left:16px;margin-right:16px;border-radius:50%}.mdc-list-item--with-leading-avatar .mdc-list-item__start,[dir=rtl] .mdc-list-item--with-leading-avatar .mdc-list-item__start{margin-left:16px;margin-right:16px;border-radius:50%}.mdc-list-item__end{flex-shrink:0;pointer-events:none}.mdc-list-item--with-trailing-meta .mdc-list-item__end{font-family:var(--mdc-list-list-item-trailing-supporting-text-font, var(--mat-app-label-small-font));line-height:var(--mdc-list-list-item-trailing-supporting-text-line-height, var(--mat-app-label-small-line-height));font-size:var(--mdc-list-list-item-trailing-supporting-text-size, var(--mat-app-label-small-size));font-weight:var(--mdc-list-list-item-trailing-supporting-text-weight, var(--mat-app-label-small-weight));letter-spacing:var(--mdc-list-list-item-trailing-supporting-text-tracking, var(--mat-app-label-small-tracking))}.mdc-list-item--with-trailing-icon .mdc-list-item__end{color:var(--mdc-list-list-item-trailing-icon-color, var(--mat-app-on-surface-variant));width:var(--mdc-list-list-item-trailing-icon-size);height:var(--mdc-list-list-item-trailing-icon-size)}.mdc-list-item--with-trailing-icon:hover .mdc-list-item__end{color:var(--mdc-list-list-item-hover-trailing-icon-color)}.mdc-list-item.mdc-list-item--with-trailing-meta .mdc-list-item__end{color:var(--mdc-list-list-item-trailing-supporting-text-color, var(--mat-app-on-surface-variant))}.mdc-list-item--selected.mdc-list-item--with-trailing-icon .mdc-list-item__end{color:var(--mdc-list-list-item-selected-trailing-icon-color, var(--mat-app-primary))}.mdc-list-item__content{text-overflow:ellipsis;white-space:nowrap;overflow:hidden;align-self:center;flex:1;pointer-events:none}.mdc-list-item--with-two-lines .mdc-list-item__content,.mdc-list-item--with-three-lines .mdc-list-item__content{align-self:stretch}.mdc-list-item__primary-text{text-overflow:ellipsis;white-space:nowrap;overflow:hidden;color:var(--mdc-list-list-item-label-text-color, var(--mat-app-on-surface));font-family:var(--mdc-list-list-item-label-text-font, var(--mat-app-body-large-font));line-height:var(--mdc-list-list-item-label-text-line-height, var(--mat-app-body-large-line-height));font-size:var(--mdc-list-list-item-label-text-size, var(--mat-app-body-large-size));font-weight:var(--mdc-list-list-item-label-text-weight, var(--mat-app-body-large-weight));letter-spacing:var(--mdc-list-list-item-label-text-tracking, var(--mat-app-body-large-tracking))}.mdc-list-item:hover .mdc-list-item__primary-text{color:var(--mdc-list-list-item-hover-label-text-color, var(--mat-app-on-surface))}.mdc-list-item:focus .mdc-list-item__primary-text{color:var(--mdc-list-list-item-focus-label-text-color, var(--mat-app-on-surface))}.mdc-list-item--with-two-lines .mdc-list-item__primary-text,.mdc-list-item--with-three-lines .mdc-list-item__primary-text{display:block;margin-top:0;line-height:normal;margin-bottom:-20px}.mdc-list-item--with-two-lines .mdc-list-item__primary-text::before,.mdc-list-item--with-three-lines .mdc-list-item__primary-text::before{display:inline-block;width:0;height:28px;content:\"\";vertical-align:0}.mdc-list-item--with-two-lines .mdc-list-item__primary-text::after,.mdc-list-item--with-three-lines .mdc-list-item__primary-text::after{display:inline-block;width:0;height:20px;content:\"\";vertical-align:-20px}.mdc-list-item__secondary-text{text-overflow:ellipsis;white-space:nowrap;overflow:hidden;display:block;margin-top:0;color:var(--mdc-list-list-item-supporting-text-color, var(--mat-app-on-surface-variant));font-family:var(--mdc-list-list-item-supporting-text-font, var(--mat-app-body-medium-font));line-height:var(--mdc-list-list-item-supporting-text-line-height, var(--mat-app-body-medium-line-height));font-size:var(--mdc-list-list-item-supporting-text-size, var(--mat-app-body-medium-size));font-weight:var(--mdc-list-list-item-supporting-text-weight, var(--mat-app-body-medium-weight));letter-spacing:var(--mdc-list-list-item-supporting-text-tracking, var(--mat-app-body-medium-tracking))}.mdc-list-item__secondary-text::before{display:inline-block;width:0;height:20px;content:\"\";vertical-align:0}.mdc-list-item--with-three-lines .mdc-list-item__secondary-text{white-space:normal;line-height:20px}.mdc-list-item--with-overline .mdc-list-item__secondary-text{white-space:nowrap;line-height:auto}.mdc-list-item--with-leading-radio.mdc-list-item,.mdc-list-item--with-leading-checkbox.mdc-list-item,.mdc-list-item--with-leading-icon.mdc-list-item,.mdc-list-item--with-leading-avatar.mdc-list-item{padding-left:0;padding-right:16px}[dir=rtl] .mdc-list-item--with-leading-radio.mdc-list-item,[dir=rtl] .mdc-list-item--with-leading-checkbox.mdc-list-item,[dir=rtl] .mdc-list-item--with-leading-icon.mdc-list-item,[dir=rtl] .mdc-list-item--with-leading-avatar.mdc-list-item{padding-left:16px;padding-right:0}.mdc-list-item--with-leading-radio.mdc-list-item--with-two-lines .mdc-list-item__primary-text,.mdc-list-item--with-leading-checkbox.mdc-list-item--with-two-lines .mdc-list-item__primary-text,.mdc-list-item--with-leading-icon.mdc-list-item--with-two-lines .mdc-list-item__primary-text,.mdc-list-item--with-leading-avatar.mdc-list-item--with-two-lines .mdc-list-item__primary-text{display:block;margin-top:0;line-height:normal;margin-bottom:-20px}.mdc-list-item--with-leading-radio.mdc-list-item--with-two-lines .mdc-list-item__primary-text::before,.mdc-list-item--with-leading-checkbox.mdc-list-item--with-two-lines .mdc-list-item__primary-text::before,.mdc-list-item--with-leading-icon.mdc-list-item--with-two-lines .mdc-list-item__primary-text::before,.mdc-list-item--with-leading-avatar.mdc-list-item--with-two-lines .mdc-list-item__primary-text::before{display:inline-block;width:0;height:32px;content:\"\";vertical-align:0}.mdc-list-item--with-leading-radio.mdc-list-item--with-two-lines .mdc-list-item__primary-text::after,.mdc-list-item--with-leading-checkbox.mdc-list-item--with-two-lines .mdc-list-item__primary-text::after,.mdc-list-item--with-leading-icon.mdc-list-item--with-two-lines .mdc-list-item__primary-text::after,.mdc-list-item--with-leading-avatar.mdc-list-item--with-two-lines .mdc-list-item__primary-text::after{display:inline-block;width:0;height:20px;content:\"\";vertical-align:-20px}.mdc-list-item--with-leading-radio.mdc-list-item--with-two-lines.mdc-list-item--with-trailing-meta .mdc-list-item__end,.mdc-list-item--with-leading-checkbox.mdc-list-item--with-two-lines.mdc-list-item--with-trailing-meta .mdc-list-item__end,.mdc-list-item--with-leading-icon.mdc-list-item--with-two-lines.mdc-list-item--with-trailing-meta .mdc-list-item__end,.mdc-list-item--with-leading-avatar.mdc-list-item--with-two-lines.mdc-list-item--with-trailing-meta .mdc-list-item__end{display:block;margin-top:0;line-height:normal}.mdc-list-item--with-leading-radio.mdc-list-item--with-two-lines.mdc-list-item--with-trailing-meta .mdc-list-item__end::before,.mdc-list-item--with-leading-checkbox.mdc-list-item--with-two-lines.mdc-list-item--with-trailing-meta .mdc-list-item__end::before,.mdc-list-item--with-leading-icon.mdc-list-item--with-two-lines.mdc-list-item--with-trailing-meta .mdc-list-item__end::before,.mdc-list-item--with-leading-avatar.mdc-list-item--with-two-lines.mdc-list-item--with-trailing-meta .mdc-list-item__end::before{display:inline-block;width:0;height:32px;content:\"\";vertical-align:0}.mdc-list-item--with-trailing-icon.mdc-list-item,[dir=rtl] .mdc-list-item--with-trailing-icon.mdc-list-item{padding-left:0;padding-right:0}.mdc-list-item--with-trailing-icon .mdc-list-item__end{margin-left:16px;margin-right:16px}.mdc-list-item--with-trailing-meta.mdc-list-item{padding-left:16px;padding-right:0}[dir=rtl] .mdc-list-item--with-trailing-meta.mdc-list-item{padding-left:0;padding-right:16px}.mdc-list-item--with-trailing-meta .mdc-list-item__end{-webkit-user-select:none;user-select:none;margin-left:28px;margin-right:16px}[dir=rtl] .mdc-list-item--with-trailing-meta .mdc-list-item__end{margin-left:16px;margin-right:28px}.mdc-list-item--with-trailing-meta.mdc-list-item--with-three-lines .mdc-list-item__end,.mdc-list-item--with-trailing-meta.mdc-list-item--with-two-lines .mdc-list-item__end{display:block;line-height:normal;align-self:flex-start;margin-top:0}.mdc-list-item--with-trailing-meta.mdc-list-item--with-three-lines .mdc-list-item__end::before,.mdc-list-item--with-trailing-meta.mdc-list-item--with-two-lines .mdc-list-item__end::before{display:inline-block;width:0;height:28px;content:\"\";vertical-align:0}.mdc-list-item--with-leading-radio .mdc-list-item__start,.mdc-list-item--with-leading-checkbox .mdc-list-item__start{margin-left:8px;margin-right:24px}[dir=rtl] .mdc-list-item--with-leading-radio .mdc-list-item__start,[dir=rtl] .mdc-list-item--with-leading-checkbox .mdc-list-item__start{margin-left:24px;margin-right:8px}.mdc-list-item--with-leading-radio.mdc-list-item--with-two-lines .mdc-list-item__start,.mdc-list-item--with-leading-checkbox.mdc-list-item--with-two-lines .mdc-list-item__start{align-self:flex-start;margin-top:8px}.mdc-list-item--with-trailing-radio.mdc-list-item,.mdc-list-item--with-trailing-checkbox.mdc-list-item{padding-left:16px;padding-right:0}[dir=rtl] .mdc-list-item--with-trailing-radio.mdc-list-item,[dir=rtl] .mdc-list-item--with-trailing-checkbox.mdc-list-item{padding-left:0;padding-right:16px}.mdc-list-item--with-trailing-radio.mdc-list-item--with-leading-icon,.mdc-list-item--with-trailing-radio.mdc-list-item--with-leading-avatar,.mdc-list-item--with-trailing-checkbox.mdc-list-item--with-leading-icon,.mdc-list-item--with-trailing-checkbox.mdc-list-item--with-leading-avatar{padding-left:0}[dir=rtl] .mdc-list-item--with-trailing-radio.mdc-list-item--with-leading-icon,[dir=rtl] .mdc-list-item--with-trailing-radio.mdc-list-item--with-leading-avatar,[dir=rtl] .mdc-list-item--with-trailing-checkbox.mdc-list-item--with-leading-icon,[dir=rtl] .mdc-list-item--with-trailing-checkbox.mdc-list-item--with-leading-avatar{padding-right:0}.mdc-list-item--with-trailing-radio .mdc-list-item__end,.mdc-list-item--with-trailing-checkbox .mdc-list-item__end{margin-left:24px;margin-right:8px}[dir=rtl] .mdc-list-item--with-trailing-radio .mdc-list-item__end,[dir=rtl] .mdc-list-item--with-trailing-checkbox .mdc-list-item__end{margin-left:8px;margin-right:24px}.mdc-list-item--with-trailing-radio.mdc-list-item--with-three-lines .mdc-list-item__end,.mdc-list-item--with-trailing-checkbox.mdc-list-item--with-three-lines .mdc-list-item__end{align-self:flex-start;margin-top:8px}.mdc-list-group__subheader{margin:.75rem 16px}.mdc-list-item--disabled .mdc-list-item__start,.mdc-list-item--disabled .mdc-list-item__content,.mdc-list-item--disabled .mdc-list-item__end{opacity:1}.mdc-list-item--disabled .mdc-list-item__primary-text,.mdc-list-item--disabled .mdc-list-item__secondary-text{opacity:var(--mdc-list-list-item-disabled-label-text-opacity)}.mdc-list-item--disabled.mdc-list-item--with-leading-icon .mdc-list-item__start{color:var(--mdc-list-list-item-disabled-leading-icon-color, var(--mat-app-on-surface));opacity:var(--mdc-list-list-item-disabled-leading-icon-opacity)}.mdc-list-item--disabled.mdc-list-item--with-trailing-icon .mdc-list-item__end{color:var(--mdc-list-list-item-disabled-trailing-icon-color, var(--mat-app-on-surface));opacity:var(--mdc-list-list-item-disabled-trailing-icon-opacity)}.mat-mdc-list-item.mat-mdc-list-item-both-leading-and-trailing,[dir=rtl] .mat-mdc-list-item.mat-mdc-list-item-both-leading-and-trailing{padding-left:0;padding-right:0}.mdc-list-item.mdc-list-item--disabled .mdc-list-item__primary-text{color:var(--mdc-list-list-item-disabled-label-text-color, var(--mat-app-on-surface))}.mdc-list-item:hover::before{background-color:var(--mdc-list-list-item-hover-state-layer-color, var(--mat-app-on-surface));opacity:var(--mdc-list-list-item-hover-state-layer-opacity, var(--mat-app-hover-state-layer-opacity))}.mdc-list-item.mdc-list-item--disabled::before{background-color:var(--mdc-list-list-item-disabled-state-layer-color, var(--mat-app-on-surface));opacity:var(--mdc-list-list-item-disabled-state-layer-opacity, var(--mat-app-focus-state-layer-opacity))}.mdc-list-item:focus::before{background-color:var(--mdc-list-list-item-focus-state-layer-color, var(--mat-app-on-surface));opacity:var(--mdc-list-list-item-focus-state-layer-opacity, var(--mat-app-focus-state-layer-opacity))}.mdc-list-item--disabled .mdc-radio,.mdc-list-item--disabled .mdc-checkbox{opacity:var(--mdc-list-list-item-disabled-label-text-opacity)}.mdc-list-item--with-leading-avatar .mat-mdc-list-item-avatar{border-radius:var(--mdc-list-list-item-leading-avatar-shape, var(--mat-app-corner-full));background-color:var(--mdc-list-list-item-leading-avatar-color, var(--mat-app-primary-container))}.mat-mdc-list-item-icon{font-size:var(--mdc-list-list-item-leading-icon-size)}.cdk-high-contrast-active a.mdc-list-item--activated::after{content:\"\";position:absolute;top:50%;right:16px;transform:translateY(-50%);width:10px;height:0;border-bottom:solid 10px;border-radius:10px}.cdk-high-contrast-active a.mdc-list-item--activated [dir=rtl]::after{right:auto;left:16px}.mat-mdc-list-base{display:block}.mat-mdc-list-base .mdc-list-item__start,.mat-mdc-list-base .mdc-list-item__end,.mat-mdc-list-base .mdc-list-item__content{pointer-events:auto}.mat-mdc-list-item,.mat-mdc-list-option{width:100%;box-sizing:border-box;-webkit-tap-highlight-color:rgba(0,0,0,0)}.mat-mdc-list-item:not(.mat-mdc-list-item-interactive),.mat-mdc-list-option:not(.mat-mdc-list-item-interactive){cursor:default}.mat-mdc-list-item .mat-divider-inset,.mat-mdc-list-option .mat-divider-inset{position:absolute;left:0;right:0;bottom:0}.mat-mdc-list-item .mat-mdc-list-item-avatar~.mat-divider-inset,.mat-mdc-list-option .mat-mdc-list-item-avatar~.mat-divider-inset{margin-left:72px}[dir=rtl] .mat-mdc-list-item .mat-mdc-list-item-avatar~.mat-divider-inset,[dir=rtl] .mat-mdc-list-option .mat-mdc-list-item-avatar~.mat-divider-inset{margin-right:72px}.mat-mdc-list-item-interactive::before{top:0;left:0;right:0;bottom:0;position:absolute;content:\"\";opacity:0;pointer-events:none}.mat-mdc-list-item>.mat-mdc-focus-indicator{top:0;left:0;right:0;bottom:0;position:absolute;pointer-events:none}.mat-mdc-list-item:focus>.mat-mdc-focus-indicator::before{content:\"\"}.mat-mdc-list-item.mdc-list-item--with-three-lines .mat-mdc-list-item-line.mdc-list-item__secondary-text{white-space:nowrap;line-height:normal}.mat-mdc-list-item.mdc-list-item--with-three-lines .mat-mdc-list-item-unscoped-content.mdc-list-item__secondary-text{display:-webkit-box;-webkit-box-orient:vertical;-webkit-line-clamp:2}mat-action-list button{background:none;color:inherit;border:none;font:inherit;outline:inherit;-webkit-tap-highlight-color:rgba(0,0,0,0);text-align:start}mat-action-list button::-moz-focus-inner{border:0}.mdc-list-item--with-leading-icon .mdc-list-item__start{margin-inline-start:var(--mat-list-list-item-leading-icon-start-space);margin-inline-end:var(--mat-list-list-item-leading-icon-end-space)}.mat-mdc-nav-list .mat-mdc-list-item{border-radius:var(--mat-list-active-indicator-shape, var(--mat-app-corner-full));--mat-mdc-focus-indicator-border-radius:var(--mat-list-active-indicator-shape, var(--mat-app-corner-full))}.mat-mdc-nav-list .mat-mdc-list-item.mdc-list-item--activated{background-color:var(--mat-list-active-indicator-color, var(--mat-app-secondary-container))}"],
        encapsulation: 2,
        changeDetection: 0
      });
    }
  }
  return MatActionList;
})();
/*#__PURE__*/(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();

/**
 * Injection token that can be used to inject instances of `MatList`. It serves as
 * alternative token to the actual `MatList` class which could cause unnecessary
 * retention of the class and its component metadata.
 */
const MAT_LIST = /*#__PURE__*/new _angular_core__WEBPACK_IMPORTED_MODULE_0__.InjectionToken('MatList');
let MatList = /*#__PURE__*/(() => {
  class MatList extends MatListBase {
    static {
      this.ɵfac = /* @__PURE__ */(() => {
        let ɵMatList_BaseFactory;
        return function MatList_Factory(__ngFactoryType__) {
          return (ɵMatList_BaseFactory || (ɵMatList_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetInheritedFactory"](MatList)))(__ngFactoryType__ || MatList);
        };
      })();
    }
    static {
      this.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: MatList,
        selectors: [["mat-list"]],
        hostAttrs: [1, "mat-mdc-list", "mat-mdc-list-base", "mdc-list"],
        exportAs: ["matList"],
        standalone: true,
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([{
          provide: MatListBase,
          useExisting: MatList
        }]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵStandaloneFeature"]],
        ngContentSelectors: _c0,
        decls: 1,
        vars: 0,
        template: function MatList_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](0);
          }
        },
        styles: [_c1],
        encapsulation: 2,
        changeDetection: 0
      });
    }
  }
  return MatList;
})();
/*#__PURE__*/(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
let MatListItem = /*#__PURE__*/(() => {
  class MatListItem extends MatListItemBase {
    /** Indicates whether an item in a `<mat-nav-list>` is the currently active page. */
    get activated() {
      return this._activated;
    }
    set activated(activated) {
      this._activated = (0,_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_1__.coerceBooleanProperty)(activated);
    }
    constructor(element, ngZone, listBase, platform, globalRippleOptions, animationMode) {
      super(element, ngZone, listBase, platform, globalRippleOptions, animationMode);
      this._activated = false;
    }
    /**
     * Determine the value of `aria-current`. Return 'page' if this item is an activated anchor tag.
     * Otherwise, return `null`. This method is safe to use with server-side rendering.
     */
    _getAriaCurrent() {
      return this._hostElement.nodeName === 'A' && this._activated ? 'page' : null;
    }
    _hasBothLeadingAndTrailing() {
      return this._meta.length !== 0 && (this._avatars.length !== 0 || this._icons.length !== 0);
    }
    static {
      this.ɵfac = function MatListItem_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || MatListItem)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](MatListBase, 8), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_5__.Platform), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_core__WEBPACK_IMPORTED_MODULE_3__.MAT_RIPPLE_GLOBAL_OPTIONS, 8), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ANIMATION_MODULE_TYPE, 8));
      };
    }
    static {
      this.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: MatListItem,
        selectors: [["mat-list-item"], ["a", "mat-list-item", ""], ["button", "mat-list-item", ""]],
        contentQueries: function MatListItem_ContentQueries(rf, ctx, dirIndex) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, MatListItemLine, 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, MatListItemTitle, 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, MatListItemMeta, 5);
          }
          if (rf & 2) {
            let _t;
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx._lines = _t);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx._titles = _t);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx._meta = _t);
          }
        },
        viewQuery: function MatListItem_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c2, 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c3, 5);
          }
          if (rf & 2) {
            let _t;
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx._unscopedContent = _t.first);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx._itemText = _t.first);
          }
        },
        hostAttrs: [1, "mat-mdc-list-item", "mdc-list-item"],
        hostVars: 13,
        hostBindings: function MatListItem_HostBindings(rf, ctx) {
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-current", ctx._getAriaCurrent());
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("mdc-list-item--activated", ctx.activated)("mdc-list-item--with-leading-avatar", ctx._avatars.length !== 0)("mdc-list-item--with-leading-icon", ctx._icons.length !== 0)("mdc-list-item--with-trailing-meta", ctx._meta.length !== 0)("mat-mdc-list-item-both-leading-and-trailing", ctx._hasBothLeadingAndTrailing())("_mat-animation-noopable", ctx._noopAnimations);
          }
        },
        inputs: {
          activated: "activated"
        },
        exportAs: ["matListItem"],
        standalone: true,
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵStandaloneFeature"]],
        ngContentSelectors: _c5,
        decls: 10,
        vars: 0,
        consts: [["unscopedContent", ""], [1, "mdc-list-item__content"], [1, "mat-mdc-list-item-unscoped-content", 3, "cdkObserveContent"], [1, "mat-mdc-focus-indicator"]],
        template: function MatListItem_Template(rf, ctx) {
          if (rf & 1) {
            const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"](_c4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](2, 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](3, 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 2, 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("cdkObserveContent", function MatListItem_Template_span_cdkObserveContent_4_listener() {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1);
              return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx._updateItemLines(true));
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](6, 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](7, 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](8, 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "div", 3);
          }
        },
        dependencies: [_angular_cdk_observers__WEBPACK_IMPORTED_MODULE_6__.CdkObserveContent],
        encapsulation: 2,
        changeDetection: 0
      });
    }
  }
  return MatListItem;
})();
/*#__PURE__*/(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();

/**
 * Injection token that can be used to reference instances of an `SelectionList`. It serves
 * as alternative token to an actual implementation which would result in circular references.
 * @docs-private
 */
const SELECTION_LIST = /*#__PURE__*/new _angular_core__WEBPACK_IMPORTED_MODULE_0__.InjectionToken('SelectionList');
let MatListOption = /*#__PURE__*/(() => {
  class MatListOption extends MatListItemBase {
    /**
     * Whether the label should appear before or after the checkbox/radio. Defaults to 'after'
     *
     * @deprecated Use `togglePosition` instead.
     * @breaking-change 17.0.0
     */
    get checkboxPosition() {
      return this.togglePosition;
    }
    set checkboxPosition(value) {
      this.togglePosition = value;
    }
    /**
     * Theme color of the list option. This sets the color of the checkbox/radio.
     * This API is supported in M2 themes only, it has no effect in M3 themes.
     *
     * For information on applying color variants in M3, see
     * https://material.angular.io/guide/theming#using-component-color-variants.
     */
    get color() {
      return this._color || this._selectionList.color;
    }
    set color(newValue) {
      this._color = newValue;
    }
    /** Value of the option */
    get value() {
      return this._value;
    }
    set value(newValue) {
      if (this.selected && newValue !== this.value && this._inputsInitialized) {
        this.selected = false;
      }
      this._value = newValue;
    }
    /** Whether the option is selected. */
    get selected() {
      return this._selectionList.selectedOptions.isSelected(this);
    }
    set selected(value) {
      const isSelected = (0,_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_1__.coerceBooleanProperty)(value);
      if (isSelected !== this._selected) {
        this._setSelected(isSelected);
        if (isSelected || this._selectionList.multiple) {
          this._selectionList._reportValueChange();
        }
      }
    }
    constructor(elementRef, ngZone, _selectionList, platform, _changeDetectorRef, globalRippleOptions, animationMode) {
      super(elementRef, ngZone, _selectionList, platform, globalRippleOptions, animationMode);
      this._selectionList = _selectionList;
      this._changeDetectorRef = _changeDetectorRef;
      /**
       * Emits when the selected state of the option has changed.
       * Use to facilitate two-data binding to the `selected` property.
       * @docs-private
       */
      this.selectedChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
      /** Whether the label should appear before or after the checkbox/radio. Defaults to 'after' */
      this.togglePosition = 'after';
      this._selected = false;
      /**
       * This is set to true after the first OnChanges cycle so we don't
       * clear the value of `selected` in the first cycle.
       */
      this._inputsInitialized = false;
    }
    ngOnInit() {
      const list = this._selectionList;
      if (list._value && list._value.some(value => list.compareWith(this._value, value))) {
        this._setSelected(true);
      }
      const wasSelected = this._selected;
      // List options that are selected at initialization can't be reported properly to the form
      // control. This is because it takes some time until the selection-list knows about all
      // available options. Also it can happen that the ControlValueAccessor has an initial value
      // that should be used instead. Deferring the value change report to the next tick ensures
      // that the form control value is not being overwritten.
      Promise.resolve().then(() => {
        if (this._selected || wasSelected) {
          this.selected = true;
          this._changeDetectorRef.markForCheck();
        }
      });
      this._inputsInitialized = true;
    }
    ngOnDestroy() {
      super.ngOnDestroy();
      if (this.selected) {
        // We have to delay this until the next tick in order
        // to avoid changed after checked errors.
        Promise.resolve().then(() => {
          this.selected = false;
        });
      }
    }
    /** Toggles the selection state of the option. */
    toggle() {
      this.selected = !this.selected;
    }
    /** Allows for programmatic focusing of the option. */
    focus() {
      this._hostElement.focus();
    }
    /** Gets the text label of the list option. Used for the typeahead functionality in the list. */
    getLabel() {
      const titleElement = this._titles?.get(0)?._elementRef.nativeElement;
      // If there is no explicit title element, the unscoped text content
      // is treated as the list item title.
      const labelEl = titleElement || this._unscopedContent?.nativeElement;
      return labelEl?.textContent || '';
    }
    /** Whether a checkbox is shown at the given position. */
    _hasCheckboxAt(position) {
      return this._selectionList.multiple && this._getTogglePosition() === position;
    }
    /** Where a radio indicator is shown at the given position. */
    _hasRadioAt(position) {
      return !this._selectionList.multiple && this._getTogglePosition() === position && !this._selectionList.hideSingleSelectionIndicator;
    }
    /** Whether icons or avatars are shown at the given position. */
    _hasIconsOrAvatarsAt(position) {
      return this._hasProjected('icons', position) || this._hasProjected('avatars', position);
    }
    /** Gets whether the given type of element is projected at the specified position. */
    _hasProjected(type, position) {
      // If the checkbox/radio is shown at the specified position, neither icons or
      // avatars can be shown at the position.
      return this._getTogglePosition() !== position && (type === 'avatars' ? this._avatars.length !== 0 : this._icons.length !== 0);
    }
    _handleBlur() {
      this._selectionList._onTouched();
    }
    /** Gets the current position of the checkbox/radio. */
    _getTogglePosition() {
      return this.togglePosition || 'after';
    }
    /**
     * Sets the selected state of the option.
     * @returns Whether the value has changed.
     */
    _setSelected(selected) {
      if (selected === this._selected) {
        return false;
      }
      this._selected = selected;
      if (selected) {
        this._selectionList.selectedOptions.select(this);
      } else {
        this._selectionList.selectedOptions.deselect(this);
      }
      this.selectedChange.emit(selected);
      this._changeDetectorRef.markForCheck();
      return true;
    }
    /**
     * Notifies Angular that the option needs to be checked in the next change detection run.
     * Mainly used to trigger an update of the list option if the disabled state of the selection
     * list changed.
     */
    _markForCheck() {
      this._changeDetectorRef.markForCheck();
    }
    /** Toggles the option's value based on a user interaction. */
    _toggleOnInteraction() {
      if (!this.disabled) {
        if (this._selectionList.multiple) {
          this.selected = !this.selected;
          this._selectionList._emitChangeEvent([this]);
        } else if (!this.selected) {
          this.selected = true;
          this._selectionList._emitChangeEvent([this]);
        }
      }
    }
    /** Sets the tabindex of the list option. */
    _setTabindex(value) {
      this._hostElement.setAttribute('tabindex', value + '');
    }
    _hasBothLeadingAndTrailing() {
      const hasLeading = this._hasProjected('avatars', 'before') || this._hasProjected('icons', 'before') || this._hasCheckboxAt('before') || this._hasRadioAt('before');
      const hasTrailing = this._hasProjected('icons', 'after') || this._hasProjected('avatars', 'after') || this._hasCheckboxAt('after') || this._hasRadioAt('after');
      return hasLeading && hasTrailing;
    }
    static {
      this.ɵfac = function MatListOption_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || MatListOption)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](SELECTION_LIST), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_5__.Platform), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_core__WEBPACK_IMPORTED_MODULE_3__.MAT_RIPPLE_GLOBAL_OPTIONS, 8), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ANIMATION_MODULE_TYPE, 8));
      };
    }
    static {
      this.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: MatListOption,
        selectors: [["mat-list-option"]],
        contentQueries: function MatListOption_ContentQueries(rf, ctx, dirIndex) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, MatListItemLine, 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, MatListItemTitle, 5);
          }
          if (rf & 2) {
            let _t;
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx._lines = _t);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx._titles = _t);
          }
        },
        viewQuery: function MatListOption_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c2, 5);
          }
          if (rf & 2) {
            let _t;
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx._unscopedContent = _t.first);
          }
        },
        hostAttrs: ["role", "option", 1, "mat-mdc-list-item", "mat-mdc-list-option", "mdc-list-item"],
        hostVars: 27,
        hostBindings: function MatListOption_HostBindings(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("blur", function MatListOption_blur_HostBindingHandler() {
              return ctx._handleBlur();
            })("click", function MatListOption_click_HostBindingHandler() {
              return ctx._toggleOnInteraction();
            });
          }
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-selected", ctx.selected);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("mdc-list-item--selected", ctx.selected && !ctx._selectionList.multiple && ctx._selectionList.hideSingleSelectionIndicator)("mdc-list-item--with-leading-avatar", ctx._hasProjected("avatars", "before"))("mdc-list-item--with-leading-icon", ctx._hasProjected("icons", "before"))("mdc-list-item--with-trailing-icon", ctx._hasProjected("icons", "after"))("mat-mdc-list-option-with-trailing-avatar", ctx._hasProjected("avatars", "after"))("mdc-list-item--with-leading-checkbox", ctx._hasCheckboxAt("before"))("mdc-list-item--with-trailing-checkbox", ctx._hasCheckboxAt("after"))("mdc-list-item--with-leading-radio", ctx._hasRadioAt("before"))("mdc-list-item--with-trailing-radio", ctx._hasRadioAt("after"))("mat-mdc-list-item-both-leading-and-trailing", ctx._hasBothLeadingAndTrailing())("mat-accent", ctx.color !== "primary" && ctx.color !== "warn")("mat-warn", ctx.color === "warn")("_mat-animation-noopable", ctx._noopAnimations);
          }
        },
        inputs: {
          togglePosition: "togglePosition",
          checkboxPosition: "checkboxPosition",
          color: "color",
          value: "value",
          selected: "selected"
        },
        outputs: {
          selectedChange: "selectedChange"
        },
        exportAs: ["matListOption"],
        standalone: true,
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([{
          provide: MatListItemBase,
          useExisting: MatListOption
        }, {
          provide: LIST_OPTION,
          useExisting: MatListOption
        }]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵStandaloneFeature"]],
        ngContentSelectors: _c7,
        decls: 20,
        vars: 4,
        consts: [["icons", ""], ["checkbox", ""], ["radio", ""], ["unscopedContent", ""], [1, "mdc-list-item__start", "mat-mdc-list-option-checkbox-before"], [1, "mdc-list-item__start", "mat-mdc-list-option-radio-before"], [3, "ngTemplateOutlet"], [1, "mdc-list-item__content"], [1, "mat-mdc-list-item-unscoped-content", 3, "cdkObserveContent"], [1, "mdc-list-item__end"], [1, "mat-mdc-focus-indicator"], [1, "mdc-checkbox"], ["type", "checkbox", 1, "mdc-checkbox__native-control", 3, "checked", "disabled"], [1, "mdc-checkbox__background"], ["viewBox", "0 0 24 24", "aria-hidden", "true", 1, "mdc-checkbox__checkmark"], ["fill", "none", "d", "M1.73,12.91 8.1,19.28 22.79,4.59", 1, "mdc-checkbox__checkmark-path"], [1, "mdc-checkbox__mixedmark"], [1, "mdc-radio"], ["type", "radio", 1, "mdc-radio__native-control", 3, "checked", "disabled"], [1, "mdc-radio__background"], [1, "mdc-radio__outer-circle"], [1, "mdc-radio__inner-circle"]],
        template: function MatListOption_Template(rf, ctx) {
          if (rf & 1) {
            const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"](_c6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, MatListOption_ng_template_0_Template, 1, 0, "ng-template", null, 0, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"])(2, MatListOption_ng_template_2_Template, 6, 4, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"])(4, MatListOption_ng_template_4_Template, 5, 4, "ng-template", null, 2, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"])(6, MatListOption_Conditional_6_Template, 2, 1, "span", 4)(7, MatListOption_Conditional_7_Template, 2, 1, "span", 5)(8, MatListOption_Conditional_8_Template, 1, 1, null, 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "span", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](10);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](11, 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "span", 8, 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("cdkObserveContent", function MatListOption_Template_span_cdkObserveContent_12_listener() {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1);
              return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx._updateItemLines(true));
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](14, 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, MatListOption_Conditional_15_Template, 2, 1, "span", 9)(16, MatListOption_Conditional_16_Template, 2, 1, "span", 9)(17, MatListOption_Conditional_17_Template, 1, 1, null, 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](18, 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "div", 10);
          }
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵconditional"](ctx._hasCheckboxAt("before") ? 6 : ctx._hasRadioAt("before") ? 7 : -1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵconditional"](ctx._hasIconsOrAvatarsAt("before") ? 8 : -1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵconditional"](ctx._hasCheckboxAt("after") ? 15 : ctx._hasRadioAt("after") ? 16 : -1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵconditional"](ctx._hasIconsOrAvatarsAt("after") ? 17 : -1);
          }
        },
        dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.NgTemplateOutlet, _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_6__.CdkObserveContent],
        styles: [".mat-mdc-list-option-with-trailing-avatar.mdc-list-item,[dir=rtl] .mat-mdc-list-option-with-trailing-avatar.mdc-list-item{padding-left:0;padding-right:0}.mat-mdc-list-option-with-trailing-avatar .mdc-list-item__end{margin-left:16px;margin-right:16px;width:40px;height:40px}.mat-mdc-list-option-with-trailing-avatar.mdc-list-item--with-two-lines .mdc-list-item__primary-text{display:block;margin-top:0;line-height:normal;margin-bottom:-20px}.mat-mdc-list-option-with-trailing-avatar.mdc-list-item--with-two-lines .mdc-list-item__primary-text::before{display:inline-block;width:0;height:32px;content:\"\";vertical-align:0}.mat-mdc-list-option-with-trailing-avatar.mdc-list-item--with-two-lines .mdc-list-item__primary-text::after{display:inline-block;width:0;height:20px;content:\"\";vertical-align:-20px}.mat-mdc-list-option-with-trailing-avatar .mdc-list-item__end{border-radius:50%}.mat-mdc-list-option .mdc-checkbox{display:inline-block;position:relative;flex:0 0 18px;box-sizing:content-box;width:18px;height:18px;line-height:0;white-space:nowrap;cursor:pointer;vertical-align:bottom;padding:calc((var(--mdc-checkbox-state-layer-size, 40px) - 18px)/2);margin:calc((var(--mdc-checkbox-state-layer-size, 40px) - var(--mdc-checkbox-state-layer-size, 40px))/2)}.mat-mdc-list-option .mdc-checkbox .mdc-checkbox__native-control{position:absolute;margin:0;padding:0;opacity:0;cursor:inherit;width:var(--mdc-checkbox-state-layer-size, 40px);height:var(--mdc-checkbox-state-layer-size, 40px);top:calc((var(--mdc-checkbox-state-layer-size, 40px) - var(--mdc-checkbox-state-layer-size, 40px))/2);right:calc((var(--mdc-checkbox-state-layer-size, 40px) - var(--mdc-checkbox-state-layer-size, 40px))/2);left:calc((var(--mdc-checkbox-state-layer-size, 40px) - var(--mdc-checkbox-state-layer-size, 40px))/2)}.mat-mdc-list-option .mdc-checkbox--disabled{cursor:default;pointer-events:none}.cdk-high-contrast-active .mat-mdc-list-option .mdc-checkbox--disabled{opacity:.5}.mat-mdc-list-option .mdc-checkbox__background{display:inline-flex;position:absolute;align-items:center;justify-content:center;box-sizing:border-box;width:18px;height:18px;border:2px solid currentColor;border-radius:2px;background-color:rgba(0,0,0,0);pointer-events:none;will-change:background-color,border-color;transition:background-color 90ms cubic-bezier(0.4, 0, 0.6, 1),border-color 90ms cubic-bezier(0.4, 0, 0.6, 1);-webkit-print-color-adjust:exact;color-adjust:exact;border-color:var(--mdc-checkbox-unselected-icon-color, var(--mat-app-on-surface-variant));top:calc((var(--mdc-checkbox-state-layer-size, 40px) - 18px)/2);left:calc((var(--mdc-checkbox-state-layer-size, 40px) - 18px)/2)}.mat-mdc-list-option .mdc-checkbox__native-control:enabled:checked~.mdc-checkbox__background,.mat-mdc-list-option .mdc-checkbox__native-control:enabled:indeterminate~.mdc-checkbox__background{border-color:var(--mdc-checkbox-selected-icon-color, var(--mat-app-primary));background-color:var(--mdc-checkbox-selected-icon-color, var(--mat-app-primary))}.mat-mdc-list-option .mdc-checkbox--disabled .mdc-checkbox__background{border-color:var(--mdc-checkbox-disabled-unselected-icon-color)}.mat-mdc-list-option .mdc-checkbox__native-control:disabled:checked~.mdc-checkbox__background,.mat-mdc-list-option .mdc-checkbox__native-control:disabled:indeterminate~.mdc-checkbox__background{background-color:var(--mdc-checkbox-disabled-selected-icon-color);border-color:rgba(0,0,0,0)}.mat-mdc-list-option .mdc-checkbox:hover .mdc-checkbox__native-control:not(:checked)~.mdc-checkbox__background,.mat-mdc-list-option .mdc-checkbox:hover .mdc-checkbox__native-control:not(:indeterminate)~.mdc-checkbox__background{border-color:var(--mdc-checkbox-unselected-hover-icon-color, var(--mat-app-on-surface));background-color:rgba(0,0,0,0)}.mat-mdc-list-option .mdc-checkbox:hover .mdc-checkbox__native-control:checked~.mdc-checkbox__background,.mat-mdc-list-option .mdc-checkbox:hover .mdc-checkbox__native-control:indeterminate~.mdc-checkbox__background{border-color:var(--mdc-checkbox-selected-hover-icon-color, var(--mat-app-primary));background-color:var(--mdc-checkbox-selected-hover-icon-color, var(--mat-app-primary))}.mat-mdc-list-option .mdc-checkbox__native-control:focus:focus:not(:checked)~.mdc-checkbox__background,.mat-mdc-list-option .mdc-checkbox__native-control:focus:focus:not(:indeterminate)~.mdc-checkbox__background{border-color:var(--mdc-checkbox-unselected-focus-icon-color, var(--mat-app-on-surface))}.mat-mdc-list-option .mdc-checkbox__native-control:focus:focus:checked~.mdc-checkbox__background,.mat-mdc-list-option .mdc-checkbox__native-control:focus:focus:indeterminate~.mdc-checkbox__background{border-color:var(--mdc-checkbox-selected-focus-icon-color, var(--mat-app-primary));background-color:var(--mdc-checkbox-selected-focus-icon-color, var(--mat-app-primary))}.mat-mdc-list-option .mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox:hover .mdc-checkbox__native-control~.mdc-checkbox__background,.mat-mdc-list-option .mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox .mdc-checkbox__native-control:focus~.mdc-checkbox__background,.mat-mdc-list-option .mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox__background{border-color:var(--mdc-checkbox-disabled-unselected-icon-color)}.mat-mdc-list-option .mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox__native-control:checked~.mdc-checkbox__background,.mat-mdc-list-option .mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox__native-control:indeterminate~.mdc-checkbox__background{background-color:var(--mdc-checkbox-disabled-selected-icon-color);border-color:rgba(0,0,0,0)}.mat-mdc-list-option .mdc-checkbox__checkmark{position:absolute;top:0;right:0;bottom:0;left:0;width:100%;opacity:0;transition:opacity 180ms cubic-bezier(0.4, 0, 0.6, 1);color:var(--mdc-checkbox-selected-checkmark-color, var(--mat-app-on-primary))}.cdk-high-contrast-active .mat-mdc-list-option .mdc-checkbox__checkmark{color:CanvasText}.mat-mdc-list-option .mdc-checkbox--disabled .mdc-checkbox__checkmark,.mat-mdc-list-option .mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox__checkmark{color:var(--mdc-checkbox-disabled-selected-checkmark-color, var(--mat-app-surface))}.cdk-high-contrast-active .mat-mdc-list-option .mdc-checkbox--disabled .mdc-checkbox__checkmark,.cdk-high-contrast-active .mat-mdc-list-option .mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox__checkmark{color:CanvasText}.mat-mdc-list-option .mdc-checkbox__checkmark-path{transition:stroke-dashoffset 180ms cubic-bezier(0.4, 0, 0.6, 1);stroke:currentColor;stroke-width:3.12px;stroke-dashoffset:29.7833385;stroke-dasharray:29.7833385}.mat-mdc-list-option .mdc-checkbox__mixedmark{width:100%;height:0;transform:scaleX(0) rotate(0deg);border-width:1px;border-style:solid;opacity:0;transition:opacity 90ms cubic-bezier(0.4, 0, 0.6, 1),transform 90ms cubic-bezier(0.4, 0, 0.6, 1);border-color:var(--mdc-checkbox-selected-checkmark-color, var(--mat-app-on-primary))}.cdk-high-contrast-active .mat-mdc-list-option .mdc-checkbox__mixedmark{margin:0 1px}.mat-mdc-list-option .mdc-checkbox--disabled .mdc-checkbox__mixedmark,.mat-mdc-list-option .mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox__mixedmark{border-color:var(--mdc-checkbox-disabled-selected-checkmark-color, var(--mat-app-surface))}.mat-mdc-list-option .mdc-checkbox--anim-unchecked-checked .mdc-checkbox__background,.mat-mdc-list-option .mdc-checkbox--anim-unchecked-indeterminate .mdc-checkbox__background,.mat-mdc-list-option .mdc-checkbox--anim-checked-unchecked .mdc-checkbox__background,.mat-mdc-list-option .mdc-checkbox--anim-indeterminate-unchecked .mdc-checkbox__background{animation-duration:180ms;animation-timing-function:linear}.mat-mdc-list-option .mdc-checkbox--anim-unchecked-checked .mdc-checkbox__checkmark-path{animation:mdc-checkbox-unchecked-checked-checkmark-path 180ms linear;transition:none}.mat-mdc-list-option .mdc-checkbox--anim-unchecked-indeterminate .mdc-checkbox__mixedmark{animation:mdc-checkbox-unchecked-indeterminate-mixedmark 90ms linear;transition:none}.mat-mdc-list-option .mdc-checkbox--anim-checked-unchecked .mdc-checkbox__checkmark-path{animation:mdc-checkbox-checked-unchecked-checkmark-path 90ms linear;transition:none}.mat-mdc-list-option .mdc-checkbox--anim-checked-indeterminate .mdc-checkbox__checkmark{animation:mdc-checkbox-checked-indeterminate-checkmark 90ms linear;transition:none}.mat-mdc-list-option .mdc-checkbox--anim-checked-indeterminate .mdc-checkbox__mixedmark{animation:mdc-checkbox-checked-indeterminate-mixedmark 90ms linear;transition:none}.mat-mdc-list-option .mdc-checkbox--anim-indeterminate-checked .mdc-checkbox__checkmark{animation:mdc-checkbox-indeterminate-checked-checkmark 500ms linear;transition:none}.mat-mdc-list-option .mdc-checkbox--anim-indeterminate-checked .mdc-checkbox__mixedmark{animation:mdc-checkbox-indeterminate-checked-mixedmark 500ms linear;transition:none}.mat-mdc-list-option .mdc-checkbox--anim-indeterminate-unchecked .mdc-checkbox__mixedmark{animation:mdc-checkbox-indeterminate-unchecked-mixedmark 300ms linear;transition:none}.mat-mdc-list-option .mdc-checkbox__native-control:checked~.mdc-checkbox__background,.mat-mdc-list-option .mdc-checkbox__native-control:indeterminate~.mdc-checkbox__background{transition:border-color 90ms cubic-bezier(0, 0, 0.2, 1),background-color 90ms cubic-bezier(0, 0, 0.2, 1)}.mat-mdc-list-option .mdc-checkbox__native-control:checked~.mdc-checkbox__background .mdc-checkbox__checkmark-path,.mat-mdc-list-option .mdc-checkbox__native-control:indeterminate~.mdc-checkbox__background .mdc-checkbox__checkmark-path{stroke-dashoffset:0}.mat-mdc-list-option .mdc-checkbox__native-control:checked~.mdc-checkbox__background .mdc-checkbox__checkmark{transition:opacity 180ms cubic-bezier(0, 0, 0.2, 1),transform 180ms cubic-bezier(0, 0, 0.2, 1);opacity:1}.mat-mdc-list-option .mdc-checkbox__native-control:checked~.mdc-checkbox__background .mdc-checkbox__mixedmark{transform:scaleX(1) rotate(-45deg)}.mat-mdc-list-option .mdc-checkbox__native-control:indeterminate~.mdc-checkbox__background .mdc-checkbox__checkmark{transform:rotate(45deg);opacity:0;transition:opacity 90ms cubic-bezier(0.4, 0, 0.6, 1),transform 90ms cubic-bezier(0.4, 0, 0.6, 1)}.mat-mdc-list-option .mdc-checkbox__native-control:indeterminate~.mdc-checkbox__background .mdc-checkbox__mixedmark{transform:scaleX(1) rotate(0deg);opacity:1}@keyframes mdc-checkbox-unchecked-checked-checkmark-path{0%,50%{stroke-dashoffset:29.7833385}50%{animation-timing-function:cubic-bezier(0, 0, 0.2, 1)}100%{stroke-dashoffset:0}}@keyframes mdc-checkbox-unchecked-indeterminate-mixedmark{0%,68.2%{transform:scaleX(0)}68.2%{animation-timing-function:cubic-bezier(0, 0, 0, 1)}100%{transform:scaleX(1)}}@keyframes mdc-checkbox-checked-unchecked-checkmark-path{from{animation-timing-function:cubic-bezier(0.4, 0, 1, 1);opacity:1;stroke-dashoffset:0}to{opacity:0;stroke-dashoffset:-29.7833385}}@keyframes mdc-checkbox-checked-indeterminate-checkmark{from{animation-timing-function:cubic-bezier(0, 0, 0.2, 1);transform:rotate(0deg);opacity:1}to{transform:rotate(45deg);opacity:0}}@keyframes mdc-checkbox-indeterminate-checked-checkmark{from{animation-timing-function:cubic-bezier(0.14, 0, 0, 1);transform:rotate(45deg);opacity:0}to{transform:rotate(360deg);opacity:1}}@keyframes mdc-checkbox-checked-indeterminate-mixedmark{from{animation-timing-function:cubic-bezier(0, 0, 0.2, 1);transform:rotate(-45deg);opacity:0}to{transform:rotate(0deg);opacity:1}}@keyframes mdc-checkbox-indeterminate-checked-mixedmark{from{animation-timing-function:cubic-bezier(0.14, 0, 0, 1);transform:rotate(0deg);opacity:1}to{transform:rotate(315deg);opacity:0}}@keyframes mdc-checkbox-indeterminate-unchecked-mixedmark{0%{animation-timing-function:linear;transform:scaleX(1);opacity:1}32.8%,100%{transform:scaleX(0);opacity:0}}.mat-mdc-list-option._mat-animation-noopable .mdc-checkbox *,.mat-mdc-list-option._mat-animation-noopable .mdc-checkbox *::before{transition:none !important;animation:none !important}.mat-mdc-list-option .mdc-radio{display:inline-block;position:relative;flex:0 0 auto;box-sizing:content-box;width:20px;height:20px;cursor:pointer;will-change:opacity,transform,border-color,color;padding:calc((var(--mdc-radio-state-layer-size) - 20px)/2)}.mat-mdc-list-option .mdc-radio__background{display:inline-block;position:relative;box-sizing:border-box;width:20px;height:20px}.mat-mdc-list-option .mdc-radio__background::before{position:absolute;transform:scale(0, 0);border-radius:50%;opacity:0;pointer-events:none;content:\"\";transition:opacity 90ms cubic-bezier(0.4, 0, 0.6, 1),transform 90ms cubic-bezier(0.4, 0, 0.6, 1);width:var(--mdc-radio-state-layer-size);height:var(--mdc-radio-state-layer-size);top:calc(-1*(var(--mdc-radio-state-layer-size) - 20px)/2);left:calc(-1*(var(--mdc-radio-state-layer-size) - 20px)/2)}.mat-mdc-list-option .mdc-radio__outer-circle{position:absolute;top:0;left:0;box-sizing:border-box;width:100%;height:100%;border-width:2px;border-style:solid;border-radius:50%;transition:border-color 90ms cubic-bezier(0.4, 0, 0.6, 1)}.mat-mdc-list-option .mdc-radio__inner-circle{position:absolute;top:0;left:0;box-sizing:border-box;width:100%;height:100%;transform:scale(0, 0);border-width:10px;border-style:solid;border-radius:50%;transition:transform 90ms cubic-bezier(0.4, 0, 0.6, 1),border-color 90ms cubic-bezier(0.4, 0, 0.6, 1)}.mat-mdc-list-option .mdc-radio__native-control{position:absolute;margin:0;padding:0;opacity:0;top:0;right:0;left:0;cursor:inherit;z-index:1;width:var(--mdc-radio-state-layer-size);height:var(--mdc-radio-state-layer-size)}.mat-mdc-list-option .mdc-radio__native-control:checked+.mdc-radio__background,.mat-mdc-list-option .mdc-radio__native-control:disabled+.mdc-radio__background{transition:opacity 90ms cubic-bezier(0, 0, 0.2, 1),transform 90ms cubic-bezier(0, 0, 0.2, 1)}.mat-mdc-list-option .mdc-radio__native-control:checked+.mdc-radio__background .mdc-radio__outer-circle,.mat-mdc-list-option .mdc-radio__native-control:disabled+.mdc-radio__background .mdc-radio__outer-circle{transition:border-color 90ms cubic-bezier(0, 0, 0.2, 1)}.mat-mdc-list-option .mdc-radio__native-control:checked+.mdc-radio__background .mdc-radio__inner-circle,.mat-mdc-list-option .mdc-radio__native-control:disabled+.mdc-radio__background .mdc-radio__inner-circle{transition:transform 90ms cubic-bezier(0, 0, 0.2, 1),border-color 90ms cubic-bezier(0, 0, 0.2, 1)}.mat-mdc-list-option .mdc-radio__native-control:disabled:not(:checked)+.mdc-radio__background .mdc-radio__outer-circle{border-color:var(--mdc-radio-disabled-unselected-icon-color, var(--mat-app-on-surface));opacity:var(--mdc-radio-disabled-unselected-icon-opacity)}.mat-mdc-list-option .mdc-radio__native-control:disabled+.mdc-radio__background{cursor:default}.mat-mdc-list-option .mdc-radio__native-control:disabled+.mdc-radio__background .mdc-radio__inner-circle,.mat-mdc-list-option .mdc-radio__native-control:disabled+.mdc-radio__background .mdc-radio__outer-circle{border-color:var(--mdc-radio-disabled-selected-icon-color, var(--mat-app-on-surface));opacity:var(--mdc-radio-disabled-selected-icon-opacity)}.mat-mdc-list-option .mdc-radio__native-control:enabled:not(:checked)+.mdc-radio__background .mdc-radio__outer-circle{border-color:var(--mdc-radio-unselected-icon-color, var(--mat-app-on-surface-variant))}.mat-mdc-list-option .mdc-radio__native-control:enabled:checked+.mdc-radio__background .mdc-radio__outer-circle,.mat-mdc-list-option .mdc-radio__native-control:enabled:checked+.mdc-radio__background .mdc-radio__inner-circle{border-color:var(--mdc-radio-selected-icon-color, var(--mat-app-primary))}.mat-mdc-list-option .mdc-radio__native-control:checked+.mdc-radio__background .mdc-radio__inner-circle{transform:scale(0.5);transition:transform 90ms cubic-bezier(0, 0, 0.2, 1),border-color 90ms cubic-bezier(0, 0, 0.2, 1)}.mat-mdc-list-option._mat-animation-noopable .mdc-radio__background::before,.mat-mdc-list-option._mat-animation-noopable .mdc-radio__outer-circle,.mat-mdc-list-option._mat-animation-noopable .mdc-radio__inner-circle{transition:none !important}.mat-mdc-list-option .mdc-checkbox__native-control,.mat-mdc-list-option .mdc-radio__native-control{display:none}.cdk-high-contrast-active .mat-mdc-list-option.mdc-list-item--selected::after{content:\"\";position:absolute;top:50%;right:16px;transform:translateY(-50%);width:10px;height:0;border-bottom:solid 10px;border-radius:10px}.cdk-high-contrast-active .mat-mdc-list-option.mdc-list-item--selected [dir=rtl]::after{right:auto;left:16px}"],
        encapsulation: 2,
        changeDetection: 0
      });
    }
  }
  return MatListOption;
})();
/*#__PURE__*/(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();

/**
 * Directive whose purpose is to add the mat- CSS styling to this selector.
 * @docs-private
 */
let MatListSubheaderCssMatStyler = /*#__PURE__*/(() => {
  class MatListSubheaderCssMatStyler {
    static {
      this.ɵfac = function MatListSubheaderCssMatStyler_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || MatListSubheaderCssMatStyler)();
      };
    }
    static {
      this.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
        type: MatListSubheaderCssMatStyler,
        selectors: [["", "mat-subheader", ""], ["", "matSubheader", ""]],
        hostAttrs: [1, "mat-mdc-subheader", "mdc-list-group__subheader"],
        standalone: true
      });
    }
  }
  return MatListSubheaderCssMatStyler;
})();
/*#__PURE__*/(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();

/**
 * Injection token that can be used to inject instances of `MatNavList`. It serves as
 * alternative token to the actual `MatNavList` class which could cause unnecessary
 * retention of the class and its component metadata.
 */
const MAT_NAV_LIST = /*#__PURE__*/new _angular_core__WEBPACK_IMPORTED_MODULE_0__.InjectionToken('MatNavList');
let MatNavList = /*#__PURE__*/(() => {
  class MatNavList extends MatListBase {
    constructor() {
      super(...arguments);
      // An navigation list is considered interactive, but does not extend the interactive list
      // base class. We do this because as per MDC, items of interactive lists are only reachable
      // through keyboard shortcuts. We want all items for the navigation list to be reachable
      // through tab key as we do not intend to provide any special accessibility treatment. The
      // accessibility treatment depends on how the end-user will interact with it.
      this._isNonInteractive = false;
    }
    static {
      this.ɵfac = /* @__PURE__ */(() => {
        let ɵMatNavList_BaseFactory;
        return function MatNavList_Factory(__ngFactoryType__) {
          return (ɵMatNavList_BaseFactory || (ɵMatNavList_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetInheritedFactory"](MatNavList)))(__ngFactoryType__ || MatNavList);
        };
      })();
    }
    static {
      this.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: MatNavList,
        selectors: [["mat-nav-list"]],
        hostAttrs: ["role", "navigation", 1, "mat-mdc-nav-list", "mat-mdc-list-base", "mdc-list"],
        exportAs: ["matNavList"],
        standalone: true,
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([{
          provide: MatListBase,
          useExisting: MatNavList
        }]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵStandaloneFeature"]],
        ngContentSelectors: _c0,
        decls: 1,
        vars: 0,
        template: function MatNavList_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](0);
          }
        },
        styles: [_c1],
        encapsulation: 2,
        changeDetection: 0
      });
    }
  }
  return MatNavList;
})();
/*#__PURE__*/(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
const MAT_SELECTION_LIST_VALUE_ACCESSOR = {
  provide: _angular_forms__WEBPACK_IMPORTED_MODULE_8__.NG_VALUE_ACCESSOR,
  useExisting: /*#__PURE__*/(0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(() => MatSelectionList),
  multi: true
};
/** Change event that is being fired whenever the selected state of an option changes. */
class MatSelectionListChange {
  constructor(/** Reference to the selection list that emitted the event. */
  source, /** Reference to the options that have been changed. */
  options) {
    this.source = source;
    this.options = options;
  }
}
let MatSelectionList = /*#__PURE__*/(() => {
  class MatSelectionList extends MatListBase {
    /** Whether selection is limited to one or multiple items (default multiple). */
    get multiple() {
      return this._multiple;
    }
    set multiple(value) {
      const newValue = (0,_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_1__.coerceBooleanProperty)(value);
      if (newValue !== this._multiple) {
        if ((typeof ngDevMode === 'undefined' || ngDevMode) && this._initialized) {
          throw new Error('Cannot change `multiple` mode of mat-selection-list after initialization.');
        }
        this._multiple = newValue;
        this.selectedOptions = new _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_9__.SelectionModel(this._multiple, this.selectedOptions.selected);
      }
    }
    /** Whether radio indicator for all list items is hidden. */
    get hideSingleSelectionIndicator() {
      return this._hideSingleSelectionIndicator;
    }
    set hideSingleSelectionIndicator(value) {
      this._hideSingleSelectionIndicator = (0,_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_1__.coerceBooleanProperty)(value);
    }
    constructor(_element, _ngZone) {
      super();
      this._element = _element;
      this._ngZone = _ngZone;
      this._initialized = false;
      /** Emits when the list has been destroyed. */
      this._destroyed = new rxjs__WEBPACK_IMPORTED_MODULE_10__.Subject();
      /** View to model callback that should be called whenever the selected options change. */
      this._onChange = _ => {};
      /** Emits a change event whenever the selected state of an option changes. */
      this.selectionChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
      /**
       * Theme color of the selection list. This sets the checkbox color for all
       * list options. This API is supported in M2 themes only, it has no effect in
       * M3 themes.
       *
       * For information on applying color variants in M3, see
       * https://material.angular.io/guide/theming#using-component-color-variants.
       */
      this.color = 'accent';
      /**
       * Function used for comparing an option against the selected value when determining which
       * options should appear as selected. The first argument is the value of an options. The second
       * one is a value from the selected value. A boolean must be returned.
       */
      this.compareWith = (a1, a2) => a1 === a2;
      this._multiple = true;
      this._hideSingleSelectionIndicator = this._defaultOptions?.hideSingleSelectionIndicator ?? false;
      /** The currently selected options. */
      this.selectedOptions = new _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_9__.SelectionModel(this._multiple);
      /** View to model callback that should be called if the list or its options lost focus. */
      this._onTouched = () => {};
      this._changeDetectorRef = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(_angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef);
      this._selectionListDisabled = false;
      /** Handles focusout events within the list. */
      this._handleFocusout = () => {
        // Focus takes a while to update so we have to wrap our call in a timeout.
        setTimeout(() => {
          if (!this._containsFocus()) {
            this._resetActiveOption();
          }
        });
      };
      /** Handles focusin events within the list. */
      this._handleFocusin = event => {
        if (this.disabled) {
          return;
        }
        const activeIndex = this._items.toArray().findIndex(item => item._elementRef.nativeElement.contains(event.target));
        if (activeIndex > -1) {
          this._setActiveOption(activeIndex);
        } else {
          this._resetActiveOption();
        }
      };
      this._isNonInteractive = false;
    }
    ngAfterViewInit() {
      // Mark the selection list as initialized so that the `multiple`
      // binding can no longer be changed.
      this._initialized = true;
      this._setupRovingTabindex();
      // These events are bound outside the zone, because they don't change
      // any change-detected properties and they can trigger timeouts.
      this._ngZone.runOutsideAngular(() => {
        this._element.nativeElement.addEventListener('focusin', this._handleFocusin);
        this._element.nativeElement.addEventListener('focusout', this._handleFocusout);
      });
      if (this._value) {
        this._setOptionsFromValues(this._value);
      }
      this._watchForSelectionChange();
    }
    ngOnChanges(changes) {
      const disabledChanges = changes['disabled'];
      const disableRippleChanges = changes['disableRipple'];
      const hideSingleSelectionIndicatorChanges = changes['hideSingleSelectionIndicator'];
      if (disableRippleChanges && !disableRippleChanges.firstChange || disabledChanges && !disabledChanges.firstChange || hideSingleSelectionIndicatorChanges && !hideSingleSelectionIndicatorChanges.firstChange) {
        this._markOptionsForCheck();
      }
    }
    ngOnDestroy() {
      this._keyManager?.destroy();
      this._element.nativeElement.removeEventListener('focusin', this._handleFocusin);
      this._element.nativeElement.removeEventListener('focusout', this._handleFocusout);
      this._destroyed.next();
      this._destroyed.complete();
      this._isDestroyed = true;
    }
    /** Focuses the selection list. */
    focus(options) {
      this._element.nativeElement.focus(options);
    }
    /** Selects all of the options. Returns the options that changed as a result. */
    selectAll() {
      return this._setAllOptionsSelected(true);
    }
    /** Deselects all of the options. Returns the options that changed as a result. */
    deselectAll() {
      return this._setAllOptionsSelected(false);
    }
    /** Reports a value change to the ControlValueAccessor */
    _reportValueChange() {
      // Stop reporting value changes after the list has been destroyed. This avoids
      // cases where the list might wrongly reset its value once it is removed, but
      // the form control is still live.
      if (this.options && !this._isDestroyed) {
        const value = this._getSelectedOptionValues();
        this._onChange(value);
        this._value = value;
      }
    }
    /** Emits a change event if the selected state of an option changed. */
    _emitChangeEvent(options) {
      this.selectionChange.emit(new MatSelectionListChange(this, options));
    }
    /** Implemented as part of ControlValueAccessor. */
    writeValue(values) {
      this._value = values;
      if (this.options) {
        this._setOptionsFromValues(values || []);
      }
    }
    /** Implemented as a part of ControlValueAccessor. */
    setDisabledState(isDisabled) {
      this.disabled = isDisabled;
      this._changeDetectorRef.markForCheck();
    }
    /**
     * Whether the *entire* selection list is disabled. When true, each list item is also disabled
     * and each list item is removed from the tab order (has tabindex="-1").
     */
    get disabled() {
      return this._selectionListDisabled;
    }
    set disabled(value) {
      // Update the disabled state of this list. Write to `this._selectionListDisabled` instead of
      // `super.disabled`. That is to avoid closure compiler compatibility issues with assigning to
      // a super property.
      this._selectionListDisabled = (0,_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_1__.coerceBooleanProperty)(value);
      if (this._selectionListDisabled) {
        this._keyManager?.setActiveItem(-1);
      }
    }
    /** Implemented as part of ControlValueAccessor. */
    registerOnChange(fn) {
      this._onChange = fn;
    }
    /** Implemented as part of ControlValueAccessor. */
    registerOnTouched(fn) {
      this._onTouched = fn;
    }
    /** Watches for changes in the selected state of the options and updates the list accordingly. */
    _watchForSelectionChange() {
      this.selectedOptions.changed.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.takeUntil)(this._destroyed)).subscribe(event => {
        // Sync external changes to the model back to the options.
        for (let item of event.added) {
          item.selected = true;
        }
        for (let item of event.removed) {
          item.selected = false;
        }
        if (!this._containsFocus()) {
          this._resetActiveOption();
        }
      });
    }
    /** Sets the selected options based on the specified values. */
    _setOptionsFromValues(values) {
      this.options.forEach(option => option._setSelected(false));
      values.forEach(value => {
        const correspondingOption = this.options.find(option => {
          // Skip options that are already in the model. This allows us to handle cases
          // where the same primitive value is selected multiple times.
          return option.selected ? false : this.compareWith(option.value, value);
        });
        if (correspondingOption) {
          correspondingOption._setSelected(true);
        }
      });
    }
    /** Returns the values of the selected options. */
    _getSelectedOptionValues() {
      return this.options.filter(option => option.selected).map(option => option.value);
    }
    /** Marks all the options to be checked in the next change detection run. */
    _markOptionsForCheck() {
      if (this.options) {
        this.options.forEach(option => option._markForCheck());
      }
    }
    /**
     * Sets the selected state on all of the options
     * and emits an event if anything changed.
     */
    _setAllOptionsSelected(isSelected, skipDisabled) {
      // Keep track of whether anything changed, because we only want to
      // emit the changed event when something actually changed.
      const changedOptions = [];
      this.options.forEach(option => {
        if ((!skipDisabled || !option.disabled) && option._setSelected(isSelected)) {
          changedOptions.push(option);
        }
      });
      if (changedOptions.length) {
        this._reportValueChange();
      }
      return changedOptions;
    }
    // Note: This getter exists for backwards compatibility. The `_items` query list
    // cannot be named `options` as it will be picked up by the interactive list base.
    /** The option components contained within this selection-list. */
    get options() {
      return this._items;
    }
    /** Handles keydown events within the list. */
    _handleKeydown(event) {
      const activeItem = this._keyManager.activeItem;
      if ((event.keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_12__.ENTER || event.keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_12__.SPACE) && !this._keyManager.isTyping() && activeItem && !activeItem.disabled) {
        event.preventDefault();
        activeItem._toggleOnInteraction();
      } else if (event.keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_12__.A && this.multiple && !this._keyManager.isTyping() && (0,_angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_12__.hasModifierKey)(event, 'ctrlKey')) {
        const shouldSelect = this.options.some(option => !option.disabled && !option.selected);
        event.preventDefault();
        this._emitChangeEvent(this._setAllOptionsSelected(shouldSelect, true));
      } else {
        this._keyManager.onKeydown(event);
      }
    }
    /**
     * Sets up the logic for maintaining the roving tabindex.
     *
     * `skipPredicate` determines if key manager should avoid putting a given list item in the tab
     * index. Allow disabled list items to receive focus to align with WAI ARIA recommendation.
     * Normally WAI ARIA's instructions are to exclude disabled items from the tab order, but it
     * makes a few exceptions for compound widgets.
     *
     * From [Developing a Keyboard Interface](
     * https://www.w3.org/WAI/ARIA/apg/practices/keyboard-interface/):
     *   "For the following composite widget elements, keep them focusable when disabled: Options in a
     *   Listbox..."
     */
    _setupRovingTabindex() {
      this._keyManager = new _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_13__.FocusKeyManager(this._items).withHomeAndEnd().withTypeAhead().withWrap().skipPredicate(() => this.disabled);
      // Set the initial focus.
      this._resetActiveOption();
      // Move the tabindex to the currently-focused list item.
      this._keyManager.change.subscribe(activeItemIndex => this._setActiveOption(activeItemIndex));
      // If the active item is removed from the list, reset back to the first one.
      this._items.changes.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.takeUntil)(this._destroyed)).subscribe(() => {
        const activeItem = this._keyManager.activeItem;
        if (!activeItem || this._items.toArray().indexOf(activeItem) === -1) {
          this._resetActiveOption();
        }
      });
    }
    /**
     * Sets an option as active.
     * @param index Index of the active option. If set to -1, no option will be active.
     */
    _setActiveOption(index) {
      this._items.forEach((item, itemIndex) => item._setTabindex(itemIndex === index ? 0 : -1));
      this._keyManager.updateActiveItem(index);
    }
    /**
     * Resets the active option. When the list is disabled, remove all options from to the tab order.
     * Otherwise, focus the first selected option.
     */
    _resetActiveOption() {
      if (this.disabled) {
        this._setActiveOption(-1);
        return;
      }
      const activeItem = this._items.find(item => item.selected && !item.disabled) || this._items.first;
      this._setActiveOption(activeItem ? this._items.toArray().indexOf(activeItem) : -1);
    }
    /** Returns whether the focus is currently within the list. */
    _containsFocus() {
      const activeElement = (0,_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_5__._getFocusedElementPierceShadowDom)();
      return activeElement && this._element.nativeElement.contains(activeElement);
    }
    static {
      this.ɵfac = function MatSelectionList_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || MatSelectionList)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone));
      };
    }
    static {
      this.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: MatSelectionList,
        selectors: [["mat-selection-list"]],
        contentQueries: function MatSelectionList_ContentQueries(rf, ctx, dirIndex) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, MatListOption, 5);
          }
          if (rf & 2) {
            let _t;
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx._items = _t);
          }
        },
        hostAttrs: ["role", "listbox", 1, "mat-mdc-selection-list", "mat-mdc-list-base", "mdc-list"],
        hostVars: 1,
        hostBindings: function MatSelectionList_HostBindings(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keydown", function MatSelectionList_keydown_HostBindingHandler($event) {
              return ctx._handleKeydown($event);
            });
          }
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-multiselectable", ctx.multiple);
          }
        },
        inputs: {
          color: "color",
          compareWith: "compareWith",
          multiple: "multiple",
          hideSingleSelectionIndicator: "hideSingleSelectionIndicator",
          disabled: "disabled"
        },
        outputs: {
          selectionChange: "selectionChange"
        },
        exportAs: ["matSelectionList"],
        standalone: true,
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([MAT_SELECTION_LIST_VALUE_ACCESSOR, {
          provide: MatListBase,
          useExisting: MatSelectionList
        }, {
          provide: SELECTION_LIST,
          useExisting: MatSelectionList
        }]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵStandaloneFeature"]],
        ngContentSelectors: _c0,
        decls: 1,
        vars: 0,
        template: function MatSelectionList_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](0);
          }
        },
        styles: [_c1],
        encapsulation: 2,
        changeDetection: 0
      });
    }
  }
  return MatSelectionList;
})();
/*#__PURE__*/(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
let MatListModule = /*#__PURE__*/(() => {
  class MatListModule {
    static {
      this.ɵfac = function MatListModule_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || MatListModule)();
      };
    }
    static {
      this.ɵmod = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: MatListModule
      });
    }
    static {
      this.ɵinj = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        imports: [_angular_cdk_observers__WEBPACK_IMPORTED_MODULE_6__.ObserversModule, _angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule, _angular_material_core__WEBPACK_IMPORTED_MODULE_3__.MatCommonModule, _angular_material_core__WEBPACK_IMPORTED_MODULE_3__.MatRippleModule, _angular_material_core__WEBPACK_IMPORTED_MODULE_3__.MatPseudoCheckboxModule, _angular_material_divider__WEBPACK_IMPORTED_MODULE_14__.MatDividerModule]
      });
    }
  }
  return MatListModule;
})();
/*#__PURE__*/(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();

/**
 * Generated bundle index. Do not edit.
 */



/***/ }),

/***/ 1034:
/*!**********************************************************!*\
  !*** ./node_modules/@angular/material/fesm2022/menu.mjs ***!
  \**********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MAT_MENU_CONTENT: () => (/* binding */ MAT_MENU_CONTENT),
/* harmony export */   MAT_MENU_DEFAULT_OPTIONS: () => (/* binding */ MAT_MENU_DEFAULT_OPTIONS),
/* harmony export */   MAT_MENU_PANEL: () => (/* binding */ MAT_MENU_PANEL),
/* harmony export */   MAT_MENU_SCROLL_STRATEGY: () => (/* binding */ MAT_MENU_SCROLL_STRATEGY),
/* harmony export */   MAT_MENU_SCROLL_STRATEGY_FACTORY_PROVIDER: () => (/* binding */ MAT_MENU_SCROLL_STRATEGY_FACTORY_PROVIDER),
/* harmony export */   MENU_PANEL_TOP_PADDING: () => (/* binding */ MENU_PANEL_TOP_PADDING),
/* harmony export */   MatMenu: () => (/* binding */ MatMenu),
/* harmony export */   MatMenuContent: () => (/* binding */ MatMenuContent),
/* harmony export */   MatMenuItem: () => (/* binding */ MatMenuItem),
/* harmony export */   MatMenuModule: () => (/* binding */ MatMenuModule),
/* harmony export */   MatMenuTrigger: () => (/* binding */ MatMenuTrigger),
/* harmony export */   fadeInItems: () => (/* binding */ fadeInItems),
/* harmony export */   matMenuAnimations: () => (/* binding */ matMenuAnimations),
/* harmony export */   transformMenu: () => (/* binding */ transformMenu)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/cdk/a11y */ 2102);
/* harmony import */ var _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/cdk/keycodes */ 4879);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 819);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs */ 3617);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! rxjs */ 2510);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! rxjs */ 9452);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! rxjs */ 7180);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ 3037);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/operators */ 6647);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! rxjs/operators */ 3900);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! rxjs/operators */ 1567);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! rxjs/operators */ 4334);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! rxjs/operators */ 5074);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/core */ 4646);
/* harmony import */ var _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/cdk/portal */ 9168);
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/animations */ 7172);
/* harmony import */ var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/cdk/bidi */ 3680);
/* harmony import */ var _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/cdk/overlay */ 1570);
/* harmony import */ var _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/cdk/platform */ 7699);
/* harmony import */ var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/cdk/scrolling */ 9975);

















/**
 * Injection token used to provide the parent menu to menu-specific components.
 * @docs-private
 */
const _c0 = ["mat-menu-item", ""];
const _c1 = [[["mat-icon"], ["", "matMenuItemIcon", ""]], "*"];
const _c2 = ["mat-icon, [matMenuItemIcon]", "*"];
function MatMenuItem_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "svg", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "polygon", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
}
const _c3 = ["*"];
function MatMenu_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keydown", function MatMenu_ng_template_0_Template_div_keydown_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r1._handleKeydown($event));
    })("click", function MatMenu_ng_template_0_Template_div_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r1.closed.emit("click"));
    })("@transformMenu.start", function MatMenu_ng_template_0_Template_div_animation_transformMenu_start_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r1._onAnimationStart($event));
    })("@transformMenu.done", function MatMenu_ng_template_0_Template_div_animation_transformMenu_done_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r1._onAnimationDone($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx_r1._classList);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("id", ctx_r1.panelId)("@transformMenu", ctx_r1._panelAnimationState);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-label", ctx_r1.ariaLabel || null)("aria-labelledby", ctx_r1.ariaLabelledby || null)("aria-describedby", ctx_r1.ariaDescribedby || null);
  }
}
const MAT_MENU_PANEL = /*#__PURE__*/new _angular_core__WEBPACK_IMPORTED_MODULE_0__.InjectionToken('MAT_MENU_PANEL');

/**
 * Single item inside a `mat-menu`. Provides the menu item styling and accessibility treatment.
 */
let MatMenuItem = /*#__PURE__*/(() => {
  class MatMenuItem {
    constructor(_elementRef, _document, _focusMonitor, _parentMenu, _changeDetectorRef) {
      this._elementRef = _elementRef;
      this._document = _document;
      this._focusMonitor = _focusMonitor;
      this._parentMenu = _parentMenu;
      this._changeDetectorRef = _changeDetectorRef;
      /** ARIA role for the menu item. */
      this.role = 'menuitem';
      /** Whether the menu item is disabled. */
      this.disabled = false;
      /** Whether ripples are disabled on the menu item. */
      this.disableRipple = false;
      /** Stream that emits when the menu item is hovered. */
      this._hovered = new rxjs__WEBPACK_IMPORTED_MODULE_1__.Subject();
      /** Stream that emits when the menu item is focused. */
      this._focused = new rxjs__WEBPACK_IMPORTED_MODULE_1__.Subject();
      /** Whether the menu item is highlighted. */
      this._highlighted = false;
      /** Whether the menu item acts as a trigger for a sub-menu. */
      this._triggersSubmenu = false;
      _parentMenu?.addItem?.(this);
    }
    /** Focuses the menu item. */
    focus(origin, options) {
      if (this._focusMonitor && origin) {
        this._focusMonitor.focusVia(this._getHostElement(), origin, options);
      } else {
        this._getHostElement().focus(options);
      }
      this._focused.next(this);
    }
    ngAfterViewInit() {
      if (this._focusMonitor) {
        // Start monitoring the element, so it gets the appropriate focused classes. We want
        // to show the focus style for menu items only when the focus was not caused by a
        // mouse or touch interaction.
        this._focusMonitor.monitor(this._elementRef, false);
      }
    }
    ngOnDestroy() {
      if (this._focusMonitor) {
        this._focusMonitor.stopMonitoring(this._elementRef);
      }
      if (this._parentMenu && this._parentMenu.removeItem) {
        this._parentMenu.removeItem(this);
      }
      this._hovered.complete();
      this._focused.complete();
    }
    /** Used to set the `tabindex`. */
    _getTabIndex() {
      return this.disabled ? '-1' : '0';
    }
    /** Returns the host DOM element. */
    _getHostElement() {
      return this._elementRef.nativeElement;
    }
    /** Prevents the default element actions if it is disabled. */
    _checkDisabled(event) {
      if (this.disabled) {
        event.preventDefault();
        event.stopPropagation();
      }
    }
    /** Emits to the hover stream. */
    _handleMouseEnter() {
      this._hovered.next(this);
    }
    /** Gets the label to be used when determining whether the option should be focused. */
    getLabel() {
      const clone = this._elementRef.nativeElement.cloneNode(true);
      const icons = clone.querySelectorAll('mat-icon, .material-icons');
      // Strip away icons, so they don't show up in the text.
      for (let i = 0; i < icons.length; i++) {
        icons[i].remove();
      }
      return clone.textContent?.trim() || '';
    }
    _setHighlighted(isHighlighted) {
      // We need to mark this for check for the case where the content is coming from a
      // `matMenuContent` whose change detection tree is at the declaration position,
      // not the insertion position. See #23175.
      // @breaking-change 12.0.0 Remove null check for `_changeDetectorRef`.
      this._highlighted = isHighlighted;
      this._changeDetectorRef?.markForCheck();
    }
    _setTriggersSubmenu(triggersSubmenu) {
      // @breaking-change 12.0.0 Remove null check for `_changeDetectorRef`.
      this._triggersSubmenu = triggersSubmenu;
      this._changeDetectorRef?.markForCheck();
    }
    _hasFocus() {
      return this._document && this._document.activeElement === this._getHostElement();
    }
    static {
      this.ɵfac = function MatMenuItem_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || MatMenuItem)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_2__.DOCUMENT), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_3__.FocusMonitor), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](MAT_MENU_PANEL, 8), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef));
      };
    }
    static {
      this.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: MatMenuItem,
        selectors: [["", "mat-menu-item", ""]],
        hostAttrs: [1, "mat-mdc-menu-item", "mat-mdc-focus-indicator"],
        hostVars: 8,
        hostBindings: function MatMenuItem_HostBindings(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MatMenuItem_click_HostBindingHandler($event) {
              return ctx._checkDisabled($event);
            })("mouseenter", function MatMenuItem_mouseenter_HostBindingHandler() {
              return ctx._handleMouseEnter();
            });
          }
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("role", ctx.role)("tabindex", ctx._getTabIndex())("aria-disabled", ctx.disabled)("disabled", ctx.disabled || null);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("mat-mdc-menu-item-highlighted", ctx._highlighted)("mat-mdc-menu-item-submenu-trigger", ctx._triggersSubmenu);
          }
        },
        inputs: {
          role: "role",
          disabled: [2, "disabled", "disabled", _angular_core__WEBPACK_IMPORTED_MODULE_0__.booleanAttribute],
          disableRipple: [2, "disableRipple", "disableRipple", _angular_core__WEBPACK_IMPORTED_MODULE_0__.booleanAttribute]
        },
        exportAs: ["matMenuItem"],
        standalone: true,
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInputTransformsFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵStandaloneFeature"]],
        attrs: _c0,
        ngContentSelectors: _c2,
        decls: 5,
        vars: 3,
        consts: [[1, "mat-mdc-menu-item-text"], ["matRipple", "", 1, "mat-mdc-menu-ripple", 3, "matRippleDisabled", "matRippleTrigger"], ["viewBox", "0 0 5 10", "focusable", "false", "aria-hidden", "true", 1, "mat-mdc-menu-submenu-icon"], ["points", "0,0 5,5 0,10"]],
        template: function MatMenuItem_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"](_c1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](2, 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, MatMenuItem_Conditional_4_Template, 2, 0, ":svg:svg", 2);
          }
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matRippleDisabled", ctx.disableRipple || ctx.disabled)("matRippleTrigger", ctx._getHostElement());
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵconditional"](ctx._triggersSubmenu ? 4 : -1);
          }
        },
        dependencies: [_angular_material_core__WEBPACK_IMPORTED_MODULE_4__.MatRipple],
        encapsulation: 2,
        changeDetection: 0
      });
    }
  }
  return MatMenuItem;
})();
/*#__PURE__*/(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();

/**
 * Throws an exception for the case when menu's x-position value isn't valid.
 * In other words, it doesn't match 'before' or 'after'.
 * @docs-private
 */
function throwMatMenuInvalidPositionX() {
  throw Error(`xPosition value must be either 'before' or after'.
      Example: <mat-menu xPosition="before" #menu="matMenu"></mat-menu>`);
}
/**
 * Throws an exception for the case when menu's y-position value isn't valid.
 * In other words, it doesn't match 'above' or 'below'.
 * @docs-private
 */
function throwMatMenuInvalidPositionY() {
  throw Error(`yPosition value must be either 'above' or below'.
      Example: <mat-menu yPosition="above" #menu="matMenu"></mat-menu>`);
}
/**
 * Throws an exception for the case when a menu is assigned
 * to a trigger that is placed inside the same menu.
 * @docs-private
 */
function throwMatMenuRecursiveError() {
  throw Error(`matMenuTriggerFor: menu cannot contain its own trigger. Assign a menu that is ` + `not a parent of the trigger or move the trigger outside of the menu.`);
}

/**
 * Injection token that can be used to reference instances of `MatMenuContent`. It serves
 * as alternative token to the actual `MatMenuContent` class which could cause unnecessary
 * retention of the class and its directive metadata.
 */
const MAT_MENU_CONTENT = /*#__PURE__*/new _angular_core__WEBPACK_IMPORTED_MODULE_0__.InjectionToken('MatMenuContent');
/** Menu content that will be rendered lazily once the menu is opened. */
let MatMenuContent = /*#__PURE__*/(() => {
  class MatMenuContent {
    constructor(_template, _componentFactoryResolver, _appRef, _injector, _viewContainerRef, _document, _changeDetectorRef) {
      this._template = _template;
      this._componentFactoryResolver = _componentFactoryResolver;
      this._appRef = _appRef;
      this._injector = _injector;
      this._viewContainerRef = _viewContainerRef;
      this._document = _document;
      this._changeDetectorRef = _changeDetectorRef;
      /** Emits when the menu content has been attached. */
      this._attached = new rxjs__WEBPACK_IMPORTED_MODULE_1__.Subject();
    }
    /**
     * Attaches the content with a particular context.
     * @docs-private
     */
    attach(context = {}) {
      if (!this._portal) {
        this._portal = new _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_5__.TemplatePortal(this._template, this._viewContainerRef);
      }
      this.detach();
      if (!this._outlet) {
        this._outlet = new _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_5__.DomPortalOutlet(this._document.createElement('div'), this._componentFactoryResolver, this._appRef, this._injector);
      }
      const element = this._template.elementRef.nativeElement;
      // Because we support opening the same menu from different triggers (which in turn have their
      // own `OverlayRef` panel), we have to re-insert the host element every time, otherwise we
      // risk it staying attached to a pane that's no longer in the DOM.
      element.parentNode.insertBefore(this._outlet.outletElement, element);
      // When `MatMenuContent` is used in an `OnPush` component, the insertion of the menu
      // content via `createEmbeddedView` does not cause the content to be seen as "dirty"
      // by Angular. This causes the `@ContentChildren` for menu items within the menu to
      // not be updated by Angular. By explicitly marking for check here, we tell Angular that
      // it needs to check for new menu items and update the `@ContentChild` in `MatMenu`.
      // @breaking-change 9.0.0 Make change detector ref required
      this._changeDetectorRef?.markForCheck();
      this._portal.attach(this._outlet, context);
      this._attached.next();
    }
    /**
     * Detaches the content.
     * @docs-private
     */
    detach() {
      if (this._portal.isAttached) {
        this._portal.detach();
      }
    }
    ngOnDestroy() {
      if (this._outlet) {
        this._outlet.dispose();
      }
    }
    static {
      this.ɵfac = function MatMenuContent_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || MatMenuContent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ComponentFactoryResolver), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ApplicationRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.Injector), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewContainerRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_2__.DOCUMENT), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef));
      };
    }
    static {
      this.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
        type: MatMenuContent,
        selectors: [["ng-template", "matMenuContent", ""]],
        standalone: true,
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([{
          provide: MAT_MENU_CONTENT,
          useExisting: MatMenuContent
        }])]
      });
    }
  }
  return MatMenuContent;
})();
/*#__PURE__*/(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();

/**
 * Animations used by the mat-menu component.
 * Animation duration and timing values are based on:
 * https://material.io/guidelines/components/menus.html#menus-usage
 * @docs-private
 */
const matMenuAnimations = {
  /**
   * This animation controls the menu panel's entry and exit from the page.
   *
   * When the menu panel is added to the DOM, it scales in and fades in its border.
   *
   * When the menu panel is removed from the DOM, it simply fades out after a brief
   * delay to display the ripple.
   */
  transformMenu: /*#__PURE__*/(0,_angular_animations__WEBPACK_IMPORTED_MODULE_6__.trigger)('transformMenu', [/*#__PURE__*/(0,_angular_animations__WEBPACK_IMPORTED_MODULE_6__.state)('void', /*#__PURE__*/(0,_angular_animations__WEBPACK_IMPORTED_MODULE_6__.style)({
    opacity: 0,
    transform: 'scale(0.8)'
  })), /*#__PURE__*/(0,_angular_animations__WEBPACK_IMPORTED_MODULE_6__.transition)('void => enter', /*#__PURE__*/(0,_angular_animations__WEBPACK_IMPORTED_MODULE_6__.animate)('120ms cubic-bezier(0, 0, 0.2, 1)', /*#__PURE__*/(0,_angular_animations__WEBPACK_IMPORTED_MODULE_6__.style)({
    opacity: 1,
    transform: 'scale(1)'
  }))), /*#__PURE__*/(0,_angular_animations__WEBPACK_IMPORTED_MODULE_6__.transition)('* => void', /*#__PURE__*/(0,_angular_animations__WEBPACK_IMPORTED_MODULE_6__.animate)('100ms 25ms linear', /*#__PURE__*/(0,_angular_animations__WEBPACK_IMPORTED_MODULE_6__.style)({
    opacity: 0
  })))]),
  /**
   * This animation fades in the background color and content of the menu panel
   * after its containing element is scaled in.
   */
  fadeInItems: /*#__PURE__*/(0,_angular_animations__WEBPACK_IMPORTED_MODULE_6__.trigger)('fadeInItems', [
  /*#__PURE__*/
  // TODO(crisbeto): this is inside the `transformMenu`
  // now. Remove next time we do breaking changes.
  (0,_angular_animations__WEBPACK_IMPORTED_MODULE_6__.state)('showing', /*#__PURE__*/(0,_angular_animations__WEBPACK_IMPORTED_MODULE_6__.style)({
    opacity: 1
  })), /*#__PURE__*/(0,_angular_animations__WEBPACK_IMPORTED_MODULE_6__.transition)('void => *', [/*#__PURE__*/(0,_angular_animations__WEBPACK_IMPORTED_MODULE_6__.style)({
    opacity: 0
  }), /*#__PURE__*/(0,_angular_animations__WEBPACK_IMPORTED_MODULE_6__.animate)('400ms 100ms cubic-bezier(0.55, 0, 0.55, 0.2)')])])
};
/**
 * @deprecated
 * @breaking-change 8.0.0
 * @docs-private
 */
const fadeInItems = matMenuAnimations.fadeInItems;
/**
 * @deprecated
 * @breaking-change 8.0.0
 * @docs-private
 */
const transformMenu = matMenuAnimations.transformMenu;
let menuPanelUid = 0;
/** Injection token to be used to override the default options for `mat-menu`. */
const MAT_MENU_DEFAULT_OPTIONS = /*#__PURE__*/new _angular_core__WEBPACK_IMPORTED_MODULE_0__.InjectionToken('mat-menu-default-options', {
  providedIn: 'root',
  factory: MAT_MENU_DEFAULT_OPTIONS_FACTORY
});
/** @docs-private */
function MAT_MENU_DEFAULT_OPTIONS_FACTORY() {
  return {
    overlapTrigger: false,
    xPosition: 'after',
    yPosition: 'below',
    backdropClass: 'cdk-overlay-transparent-backdrop'
  };
}
let MatMenu = /*#__PURE__*/(() => {
  class MatMenu {
    /** Position of the menu in the X axis. */
    get xPosition() {
      return this._xPosition;
    }
    set xPosition(value) {
      if (value !== 'before' && value !== 'after' && (typeof ngDevMode === 'undefined' || ngDevMode)) {
        throwMatMenuInvalidPositionX();
      }
      this._xPosition = value;
      this.setPositionClasses();
    }
    /** Position of the menu in the Y axis. */
    get yPosition() {
      return this._yPosition;
    }
    set yPosition(value) {
      if (value !== 'above' && value !== 'below' && (typeof ngDevMode === 'undefined' || ngDevMode)) {
        throwMatMenuInvalidPositionY();
      }
      this._yPosition = value;
      this.setPositionClasses();
    }
    /**
     * This method takes classes set on the host mat-menu element and applies them on the
     * menu template that displays in the overlay container.  Otherwise, it's difficult
     * to style the containing menu from outside the component.
     * @param classes list of class names
     */
    set panelClass(classes) {
      const previousPanelClass = this._previousPanelClass;
      const newClassList = {
        ...this._classList
      };
      if (previousPanelClass && previousPanelClass.length) {
        previousPanelClass.split(' ').forEach(className => {
          newClassList[className] = false;
        });
      }
      this._previousPanelClass = classes;
      if (classes && classes.length) {
        classes.split(' ').forEach(className => {
          newClassList[className] = true;
        });
        this._elementRef.nativeElement.className = '';
      }
      this._classList = newClassList;
    }
    /**
     * This method takes classes set on the host mat-menu element and applies them on the
     * menu template that displays in the overlay container.  Otherwise, it's difficult
     * to style the containing menu from outside the component.
     * @deprecated Use `panelClass` instead.
     * @breaking-change 8.0.0
     */
    get classList() {
      return this.panelClass;
    }
    set classList(classes) {
      this.panelClass = classes;
    }
    constructor(_elementRef,
    /**
     * @deprecated Unused param, will be removed.
     * @breaking-change 19.0.0
     */
    _unusedNgZone, defaultOptions,
    // @breaking-change 15.0.0 `_changeDetectorRef` to become a required parameter.
    _changeDetectorRef) {
      this._elementRef = _elementRef;
      this._changeDetectorRef = _changeDetectorRef;
      this._elevationPrefix = 'mat-elevation-z';
      this._baseElevation = null;
      /** Only the direct descendant menu items. */
      this._directDescendantItems = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.QueryList();
      /** Classes to be applied to the menu panel. */
      this._classList = {};
      /** Current state of the panel animation. */
      this._panelAnimationState = 'void';
      /** Emits whenever an animation on the menu completes. */
      this._animationDone = new rxjs__WEBPACK_IMPORTED_MODULE_1__.Subject();
      /** Event emitted when the menu is closed. */
      this.closed = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
      /**
       * Event emitted when the menu is closed.
       * @deprecated Switch to `closed` instead
       * @breaking-change 8.0.0
       */
      this.close = this.closed;
      this.panelId = `mat-menu-panel-${menuPanelUid++}`;
      this._injector = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(_angular_core__WEBPACK_IMPORTED_MODULE_0__.Injector);
      this.overlayPanelClass = defaultOptions.overlayPanelClass || '';
      this._xPosition = defaultOptions.xPosition;
      this._yPosition = defaultOptions.yPosition;
      this.backdropClass = defaultOptions.backdropClass;
      this.overlapTrigger = defaultOptions.overlapTrigger;
      this.hasBackdrop = defaultOptions.hasBackdrop;
    }
    ngOnInit() {
      this.setPositionClasses();
    }
    ngAfterContentInit() {
      this._updateDirectDescendants();
      this._keyManager = new _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_3__.FocusKeyManager(this._directDescendantItems).withWrap().withTypeAhead().withHomeAndEnd();
      this._keyManager.tabOut.subscribe(() => this.closed.emit('tab'));
      // If a user manually (programmatically) focuses a menu item, we need to reflect that focus
      // change back to the key manager. Note that we don't need to unsubscribe here because _focused
      // is internal and we know that it gets completed on destroy.
      this._directDescendantItems.changes.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.startWith)(this._directDescendantItems), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.switchMap)(items => (0,rxjs__WEBPACK_IMPORTED_MODULE_9__.merge)(...items.map(item => item._focused)))).subscribe(focusedItem => this._keyManager.updateActiveItem(focusedItem));
      this._directDescendantItems.changes.subscribe(itemsList => {
        // Move focus to another item, if the active item is removed from the list.
        // We need to debounce the callback, because multiple items might be removed
        // in quick succession.
        const manager = this._keyManager;
        if (this._panelAnimationState === 'enter' && manager.activeItem?._hasFocus()) {
          const items = itemsList.toArray();
          const index = Math.max(0, Math.min(items.length - 1, manager.activeItemIndex || 0));
          if (items[index] && !items[index].disabled) {
            manager.setActiveItem(index);
          } else {
            manager.setNextItemActive();
          }
        }
      });
    }
    ngOnDestroy() {
      this._keyManager?.destroy();
      this._directDescendantItems.destroy();
      this.closed.complete();
      this._firstItemFocusRef?.destroy();
    }
    /** Stream that emits whenever the hovered menu item changes. */
    _hovered() {
      // Coerce the `changes` property because Angular types it as `Observable<any>`
      const itemChanges = this._directDescendantItems.changes;
      return itemChanges.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.startWith)(this._directDescendantItems), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.switchMap)(items => (0,rxjs__WEBPACK_IMPORTED_MODULE_9__.merge)(...items.map(item => item._hovered))));
    }
    /*
     * Registers a menu item with the menu.
     * @docs-private
     * @deprecated No longer being used. To be removed.
     * @breaking-change 9.0.0
     */
    addItem(_item) {}
    /**
     * Removes an item from the menu.
     * @docs-private
     * @deprecated No longer being used. To be removed.
     * @breaking-change 9.0.0
     */
    removeItem(_item) {}
    /** Handle a keyboard event from the menu, delegating to the appropriate action. */
    _handleKeydown(event) {
      const keyCode = event.keyCode;
      const manager = this._keyManager;
      switch (keyCode) {
        case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_10__.ESCAPE:
          if (!(0,_angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_10__.hasModifierKey)(event)) {
            event.preventDefault();
            this.closed.emit('keydown');
          }
          break;
        case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_10__.LEFT_ARROW:
          if (this.parentMenu && this.direction === 'ltr') {
            this.closed.emit('keydown');
          }
          break;
        case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_10__.RIGHT_ARROW:
          if (this.parentMenu && this.direction === 'rtl') {
            this.closed.emit('keydown');
          }
          break;
        default:
          if (keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_10__.UP_ARROW || keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_10__.DOWN_ARROW) {
            manager.setFocusOrigin('keyboard');
          }
          manager.onKeydown(event);
          return;
      }
      // Don't allow the event to propagate if we've already handled it, or it may
      // end up reaching other overlays that were opened earlier (see #22694).
      event.stopPropagation();
    }
    /**
     * Focus the first item in the menu.
     * @param origin Action from which the focus originated. Used to set the correct styling.
     */
    focusFirstItem(origin = 'program') {
      // Wait for `afterNextRender` to ensure iOS VoiceOver screen reader focuses the first item (#24735).
      this._firstItemFocusRef?.destroy();
      this._firstItemFocusRef = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.afterNextRender)(() => {
        let menuPanel = null;
        if (this._directDescendantItems.length) {
          // Because the `mat-menuPanel` is at the DOM insertion point, not inside the overlay, we don't
          // have a nice way of getting a hold of the menuPanel panel. We can't use a `ViewChild` either
          // because the panel is inside an `ng-template`. We work around it by starting from one of
          // the items and walking up the DOM.
          menuPanel = this._directDescendantItems.first._getHostElement().closest('[role="menu"]');
        }
        // If an item in the menuPanel is already focused, avoid overriding the focus.
        if (!menuPanel || !menuPanel.contains(document.activeElement)) {
          const manager = this._keyManager;
          manager.setFocusOrigin(origin).setFirstItemActive();
          // If there's no active item at this point, it means that all the items are disabled.
          // Move focus to the menuPanel panel so keyboard events like Escape still work. Also this will
          // give _some_ feedback to screen readers.
          if (!manager.activeItem && menuPanel) {
            menuPanel.focus();
          }
        }
      }, {
        injector: this._injector
      });
    }
    /**
     * Resets the active item in the menu. This is used when the menu is opened, allowing
     * the user to start from the first option when pressing the down arrow.
     */
    resetActiveItem() {
      this._keyManager.setActiveItem(-1);
    }
    /**
     * Sets the menu panel elevation.
     * @param depth Number of parent menus that come before the menu.
     */
    setElevation(depth) {
      // The base elevation depends on which version of the spec
      // we're running so we have to resolve it at runtime.
      if (this._baseElevation === null) {
        const styles = typeof getComputedStyle === 'function' ? getComputedStyle(this._elementRef.nativeElement) : null;
        const value = styles?.getPropertyValue('--mat-menu-base-elevation-level') || '8';
        this._baseElevation = parseInt(value);
      }
      // The elevation starts at the base and increases by one for each level.
      // Capped at 24 because that's the maximum elevation defined in the Material design spec.
      const elevation = Math.min(this._baseElevation + depth, 24);
      const newElevation = `${this._elevationPrefix}${elevation}`;
      const customElevation = Object.keys(this._classList).find(className => {
        return className.startsWith(this._elevationPrefix);
      });
      if (!customElevation || customElevation === this._previousElevation) {
        const newClassList = {
          ...this._classList
        };
        if (this._previousElevation) {
          newClassList[this._previousElevation] = false;
        }
        newClassList[newElevation] = true;
        this._previousElevation = newElevation;
        this._classList = newClassList;
      }
    }
    /**
     * Adds classes to the menu panel based on its position. Can be used by
     * consumers to add specific styling based on the position.
     * @param posX Position of the menu along the x axis.
     * @param posY Position of the menu along the y axis.
     * @docs-private
     */
    setPositionClasses(posX = this.xPosition, posY = this.yPosition) {
      this._classList = {
        ...this._classList,
        ['mat-menu-before']: posX === 'before',
        ['mat-menu-after']: posX === 'after',
        ['mat-menu-above']: posY === 'above',
        ['mat-menu-below']: posY === 'below'
      };
      // @breaking-change 15.0.0 Remove null check for `_changeDetectorRef`.
      this._changeDetectorRef?.markForCheck();
    }
    /** Starts the enter animation. */
    _startAnimation() {
      // @breaking-change 8.0.0 Combine with _resetAnimation.
      this._panelAnimationState = 'enter';
    }
    /** Resets the panel animation to its initial state. */
    _resetAnimation() {
      // @breaking-change 8.0.0 Combine with _startAnimation.
      this._panelAnimationState = 'void';
    }
    /** Callback that is invoked when the panel animation completes. */
    _onAnimationDone(event) {
      this._animationDone.next(event);
      this._isAnimating = false;
    }
    _onAnimationStart(event) {
      this._isAnimating = true;
      // Scroll the content element to the top as soon as the animation starts. This is necessary,
      // because we move focus to the first item while it's still being animated, which can throw
      // the browser off when it determines the scroll position. Alternatively we can move focus
      // when the animation is done, however moving focus asynchronously will interrupt screen
      // readers which are in the process of reading out the menu already. We take the `element`
      // from the `event` since we can't use a `ViewChild` to access the pane.
      if (event.toState === 'enter' && this._keyManager.activeItemIndex === 0) {
        event.element.scrollTop = 0;
      }
    }
    /**
     * Sets up a stream that will keep track of any newly-added menu items and will update the list
     * of direct descendants. We collect the descendants this way, because `_allItems` can include
     * items that are part of child menus, and using a custom way of registering items is unreliable
     * when it comes to maintaining the item order.
     */
    _updateDirectDescendants() {
      this._allItems.changes.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.startWith)(this._allItems)).subscribe(items => {
        this._directDescendantItems.reset(items.filter(item => item._parentMenu === this));
        this._directDescendantItems.notifyOnChanges();
      });
    }
    static {
      this.ɵfac = function MatMenu_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || MatMenu)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](MAT_MENU_DEFAULT_OPTIONS), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef));
      };
    }
    static {
      this.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: MatMenu,
        selectors: [["mat-menu"]],
        contentQueries: function MatMenu_ContentQueries(rf, ctx, dirIndex) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, MAT_MENU_CONTENT, 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, MatMenuItem, 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, MatMenuItem, 4);
          }
          if (rf & 2) {
            let _t;
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.lazyContent = _t.first);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx._allItems = _t);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.items = _t);
          }
        },
        viewQuery: function MatMenu_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef, 5);
          }
          if (rf & 2) {
            let _t;
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.templateRef = _t.first);
          }
        },
        hostVars: 3,
        hostBindings: function MatMenu_HostBindings(rf, ctx) {
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-label", null)("aria-labelledby", null)("aria-describedby", null);
          }
        },
        inputs: {
          backdropClass: "backdropClass",
          ariaLabel: [0, "aria-label", "ariaLabel"],
          ariaLabelledby: [0, "aria-labelledby", "ariaLabelledby"],
          ariaDescribedby: [0, "aria-describedby", "ariaDescribedby"],
          xPosition: "xPosition",
          yPosition: "yPosition",
          overlapTrigger: [2, "overlapTrigger", "overlapTrigger", _angular_core__WEBPACK_IMPORTED_MODULE_0__.booleanAttribute],
          hasBackdrop: [2, "hasBackdrop", "hasBackdrop", value => value == null ? null : (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.booleanAttribute)(value)],
          panelClass: [0, "class", "panelClass"],
          classList: "classList"
        },
        outputs: {
          closed: "closed",
          close: "close"
        },
        exportAs: ["matMenu"],
        standalone: true,
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([{
          provide: MAT_MENU_PANEL,
          useExisting: MatMenu
        }]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInputTransformsFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵStandaloneFeature"]],
        ngContentSelectors: _c3,
        decls: 1,
        vars: 0,
        consts: [["tabindex", "-1", "role", "menu", 1, "mat-mdc-menu-panel", "mat-mdc-elevation-specific", 3, "keydown", "click", "id"], [1, "mat-mdc-menu-content"]],
        template: function MatMenu_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, MatMenu_ng_template_0_Template, 3, 7, "ng-template");
          }
        },
        styles: ["mat-menu{display:none}.mat-mdc-menu-content{margin:0;padding:8px 0;outline:0}.mat-mdc-menu-content,.mat-mdc-menu-content .mat-mdc-menu-item .mat-mdc-menu-item-text{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;flex:1;white-space:normal;font-family:var(--mat-menu-item-label-text-font, var(--mat-app-label-large-font));line-height:var(--mat-menu-item-label-text-line-height, var(--mat-app-label-large-line-height));font-size:var(--mat-menu-item-label-text-size, var(--mat-app-label-large-size));letter-spacing:var(--mat-menu-item-label-text-tracking, var(--mat-app-label-large-tracking));font-weight:var(--mat-menu-item-label-text-weight, var(--mat-app-label-large-weight))}.mat-mdc-menu-panel{min-width:112px;max-width:280px;overflow:auto;-webkit-overflow-scrolling:touch;box-sizing:border-box;outline:0;border-radius:var(--mat-menu-container-shape, var(--mat-app-corner-extra-small));background-color:var(--mat-menu-container-color, var(--mat-app-surface-container));will-change:transform,opacity}.mat-mdc-menu-panel.ng-animating{pointer-events:none}.mat-mdc-menu-panel.ng-animating:has(.mat-mdc-menu-content:empty){display:none}.cdk-high-contrast-active .mat-mdc-menu-panel{outline:solid 1px}.mat-mdc-menu-panel .mat-divider{color:var(--mat-menu-divider-color, var(--mat-app-surface-variant));margin-bottom:var(--mat-menu-divider-bottom-spacing);margin-top:var(--mat-menu-divider-top-spacing)}.mat-mdc-menu-item{display:flex;position:relative;align-items:center;justify-content:flex-start;overflow:hidden;padding:0;padding-left:var(--mat-menu-item-leading-spacing);padding-right:var(--mat-menu-item-trailing-spacing);-webkit-user-select:none;user-select:none;cursor:pointer;outline:none;border:none;-webkit-tap-highlight-color:rgba(0,0,0,0);cursor:pointer;width:100%;text-align:left;box-sizing:border-box;color:inherit;font-size:inherit;background:none;text-decoration:none;margin:0;min-height:48px}[dir=rtl] .mat-mdc-menu-item{padding-right:var(--mat-menu-item-leading-spacing);padding-left:var(--mat-menu-item-trailing-spacing)}.mat-mdc-menu-item:has(.material-icons,mat-icon,[matButtonIcon]){padding-left:var(--mat-menu-item-with-icon-leading-spacing);padding-right:var(--mat-menu-item-with-icon-trailing-spacing)}[dir=rtl] .mat-mdc-menu-item:has(.material-icons,mat-icon,[matButtonIcon]){padding-right:var(--mat-menu-item-with-icon-leading-spacing);padding-left:var(--mat-menu-item-with-icon-trailing-spacing)}.mat-mdc-menu-item::-moz-focus-inner{border:0}.mat-mdc-menu-item,.mat-mdc-menu-item:visited,.mat-mdc-menu-item:link{color:var(--mat-menu-item-label-text-color, var(--mat-app-on-surface))}.mat-mdc-menu-item .mat-icon-no-color,.mat-mdc-menu-item .mat-mdc-menu-submenu-icon{color:var(--mat-menu-item-icon-color, var(--mat-app-on-surface-variant))}.mat-mdc-menu-item[disabled]{cursor:default;opacity:.38}.mat-mdc-menu-item[disabled]::after{display:block;position:absolute;content:\"\";top:0;left:0;bottom:0;right:0}.mat-mdc-menu-item:focus{outline:0}.mat-mdc-menu-item .mat-icon{flex-shrink:0;margin-right:var(--mat-menu-item-spacing);height:var(--mat-menu-item-icon-size);width:var(--mat-menu-item-icon-size)}[dir=rtl] .mat-mdc-menu-item{text-align:right}[dir=rtl] .mat-mdc-menu-item .mat-icon{margin-right:0;margin-left:var(--mat-menu-item-spacing)}.mat-mdc-menu-item:not([disabled]):hover{background-color:var(--mat-menu-item-hover-state-layer-color)}.mat-mdc-menu-item:not([disabled]).cdk-program-focused,.mat-mdc-menu-item:not([disabled]).cdk-keyboard-focused,.mat-mdc-menu-item:not([disabled]).mat-mdc-menu-item-highlighted{background-color:var(--mat-menu-item-focus-state-layer-color)}.cdk-high-contrast-active .mat-mdc-menu-item{margin-top:1px}.mat-mdc-menu-submenu-icon{width:var(--mat-menu-item-icon-size);height:10px;fill:currentColor;padding-left:var(--mat-menu-item-spacing)}[dir=rtl] .mat-mdc-menu-submenu-icon{padding-right:var(--mat-menu-item-spacing);padding-left:0}[dir=rtl] .mat-mdc-menu-submenu-icon polygon{transform:scaleX(-1);transform-origin:center}.cdk-high-contrast-active .mat-mdc-menu-submenu-icon{fill:CanvasText}.mat-mdc-menu-item .mat-mdc-menu-ripple{top:0;left:0;right:0;bottom:0;position:absolute;pointer-events:none}"],
        encapsulation: 2,
        data: {
          animation: [matMenuAnimations.transformMenu, matMenuAnimations.fadeInItems]
        },
        changeDetection: 0
      });
    }
  }
  return MatMenu;
})();
/*#__PURE__*/(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();

/** Injection token that determines the scroll handling while the menu is open. */
const MAT_MENU_SCROLL_STRATEGY = /*#__PURE__*/new _angular_core__WEBPACK_IMPORTED_MODULE_0__.InjectionToken('mat-menu-scroll-strategy', {
  providedIn: 'root',
  factory: () => {
    const overlay = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_11__.Overlay);
    return () => overlay.scrollStrategies.reposition();
  }
});
/** @docs-private */
function MAT_MENU_SCROLL_STRATEGY_FACTORY(overlay) {
  return () => overlay.scrollStrategies.reposition();
}
/** @docs-private */
const MAT_MENU_SCROLL_STRATEGY_FACTORY_PROVIDER = {
  provide: MAT_MENU_SCROLL_STRATEGY,
  deps: [_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_11__.Overlay],
  useFactory: MAT_MENU_SCROLL_STRATEGY_FACTORY
};
/** Options for binding a passive event listener. */
const passiveEventListenerOptions = /*#__PURE__*/(0,_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_12__.normalizePassiveListenerOptions)({
  passive: true
});
/**
 * Default top padding of the menu panel.
 * @deprecated No longer being used. Will be removed.
 * @breaking-change 15.0.0
 */
const MENU_PANEL_TOP_PADDING = 8;
/** Directive applied to an element that should trigger a `mat-menu`. */
let MatMenuTrigger = /*#__PURE__*/(() => {
  class MatMenuTrigger {
    /**
     * @deprecated
     * @breaking-change 8.0.0
     */
    get _deprecatedMatMenuTriggerFor() {
      return this.menu;
    }
    set _deprecatedMatMenuTriggerFor(v) {
      this.menu = v;
    }
    /** References the menu instance that the trigger is associated with. */
    get menu() {
      return this._menu;
    }
    set menu(menu) {
      if (menu === this._menu) {
        return;
      }
      this._menu = menu;
      this._menuCloseSubscription.unsubscribe();
      if (menu) {
        if (menu === this._parentMaterialMenu && (typeof ngDevMode === 'undefined' || ngDevMode)) {
          throwMatMenuRecursiveError();
        }
        this._menuCloseSubscription = menu.close.subscribe(reason => {
          this._destroyMenu(reason);
          // If a click closed the menu, we should close the entire chain of nested menus.
          if ((reason === 'click' || reason === 'tab') && this._parentMaterialMenu) {
            this._parentMaterialMenu.closed.emit(reason);
          }
        });
      }
      this._menuItemInstance?._setTriggersSubmenu(this.triggersSubmenu());
    }
    constructor(_overlay, _element, _viewContainerRef, scrollStrategy, parentMenu,
    // `MatMenuTrigger` is commonly used in combination with a `MatMenuItem`.
    // tslint:disable-next-line: lightweight-tokens
    _menuItemInstance, _dir, _focusMonitor, _ngZone) {
      this._overlay = _overlay;
      this._element = _element;
      this._viewContainerRef = _viewContainerRef;
      this._menuItemInstance = _menuItemInstance;
      this._dir = _dir;
      this._focusMonitor = _focusMonitor;
      this._ngZone = _ngZone;
      this._overlayRef = null;
      this._menuOpen = false;
      this._closingActionsSubscription = rxjs__WEBPACK_IMPORTED_MODULE_13__.Subscription.EMPTY;
      this._hoverSubscription = rxjs__WEBPACK_IMPORTED_MODULE_13__.Subscription.EMPTY;
      this._menuCloseSubscription = rxjs__WEBPACK_IMPORTED_MODULE_13__.Subscription.EMPTY;
      this._changeDetectorRef = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(_angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef);
      /**
       * Handles touch start events on the trigger.
       * Needs to be an arrow function so we can easily use addEventListener and removeEventListener.
       */
      this._handleTouchStart = event => {
        if (!(0,_angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_3__.isFakeTouchstartFromScreenReader)(event)) {
          this._openedBy = 'touch';
        }
      };
      // Tracking input type is necessary so it's possible to only auto-focus
      // the first item of the list when the menu is opened via the keyboard
      this._openedBy = undefined;
      /**
       * Whether focus should be restored when the menu is closed.
       * Note that disabling this option can have accessibility implications
       * and it's up to you to manage focus, if you decide to turn it off.
       */
      this.restoreFocus = true;
      /** Event emitted when the associated menu is opened. */
      this.menuOpened = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
      /**
       * Event emitted when the associated menu is opened.
       * @deprecated Switch to `menuOpened` instead
       * @breaking-change 8.0.0
       */
      // tslint:disable-next-line:no-output-on-prefix
      this.onMenuOpen = this.menuOpened;
      /** Event emitted when the associated menu is closed. */
      this.menuClosed = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
      /**
       * Event emitted when the associated menu is closed.
       * @deprecated Switch to `menuClosed` instead
       * @breaking-change 8.0.0
       */
      // tslint:disable-next-line:no-output-on-prefix
      this.onMenuClose = this.menuClosed;
      this._scrollStrategy = scrollStrategy;
      this._parentMaterialMenu = parentMenu instanceof MatMenu ? parentMenu : undefined;
      _element.nativeElement.addEventListener('touchstart', this._handleTouchStart, passiveEventListenerOptions);
    }
    ngAfterContentInit() {
      this._handleHover();
    }
    ngOnDestroy() {
      if (this._overlayRef) {
        this._overlayRef.dispose();
        this._overlayRef = null;
      }
      this._element.nativeElement.removeEventListener('touchstart', this._handleTouchStart, passiveEventListenerOptions);
      this._menuCloseSubscription.unsubscribe();
      this._closingActionsSubscription.unsubscribe();
      this._hoverSubscription.unsubscribe();
    }
    /** Whether the menu is open. */
    get menuOpen() {
      return this._menuOpen;
    }
    /** The text direction of the containing app. */
    get dir() {
      return this._dir && this._dir.value === 'rtl' ? 'rtl' : 'ltr';
    }
    /** Whether the menu triggers a sub-menu or a top-level one. */
    triggersSubmenu() {
      return !!(this._menuItemInstance && this._parentMaterialMenu && this.menu);
    }
    /** Toggles the menu between the open and closed states. */
    toggleMenu() {
      return this._menuOpen ? this.closeMenu() : this.openMenu();
    }
    /** Opens the menu. */
    openMenu() {
      const menu = this.menu;
      if (this._menuOpen || !menu) {
        return;
      }
      const overlayRef = this._createOverlay(menu);
      const overlayConfig = overlayRef.getConfig();
      const positionStrategy = overlayConfig.positionStrategy;
      this._setPosition(menu, positionStrategy);
      overlayConfig.hasBackdrop = menu.hasBackdrop == null ? !this.triggersSubmenu() : menu.hasBackdrop;
      overlayRef.attach(this._getPortal(menu));
      if (menu.lazyContent) {
        menu.lazyContent.attach(this.menuData);
      }
      this._closingActionsSubscription = this._menuClosingActions().subscribe(() => this.closeMenu());
      this._initMenu(menu);
      if (menu instanceof MatMenu) {
        menu._startAnimation();
        menu._directDescendantItems.changes.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_14__.takeUntil)(menu.close)).subscribe(() => {
          // Re-adjust the position without locking when the amount of items
          // changes so that the overlay is allowed to pick a new optimal position.
          positionStrategy.withLockedPosition(false).reapplyLastPosition();
          positionStrategy.withLockedPosition(true);
        });
      }
    }
    /** Closes the menu. */
    closeMenu() {
      this.menu?.close.emit();
    }
    /**
     * Focuses the menu trigger.
     * @param origin Source of the menu trigger's focus.
     */
    focus(origin, options) {
      if (this._focusMonitor && origin) {
        this._focusMonitor.focusVia(this._element, origin, options);
      } else {
        this._element.nativeElement.focus(options);
      }
    }
    /**
     * Updates the position of the menu to ensure that it fits all options within the viewport.
     */
    updatePosition() {
      this._overlayRef?.updatePosition();
    }
    /** Closes the menu and does the necessary cleanup. */
    _destroyMenu(reason) {
      if (!this._overlayRef || !this.menuOpen) {
        return;
      }
      const menu = this.menu;
      this._closingActionsSubscription.unsubscribe();
      this._overlayRef.detach();
      // Always restore focus if the user is navigating using the keyboard or the menu was opened
      // programmatically. We don't restore for non-root triggers, because it can prevent focus
      // from making it back to the root trigger when closing a long chain of menus by clicking
      // on the backdrop.
      if (this.restoreFocus && (reason === 'keydown' || !this._openedBy || !this.triggersSubmenu())) {
        this.focus(this._openedBy);
      }
      this._openedBy = undefined;
      if (menu instanceof MatMenu) {
        menu._resetAnimation();
        if (menu.lazyContent) {
          // Wait for the exit animation to finish before detaching the content.
          menu._animationDone.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_15__.filter)(event => event.toState === 'void'), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_16__.take)(1),
          // Interrupt if the content got re-attached.
          (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_14__.takeUntil)(menu.lazyContent._attached)).subscribe({
            next: () => menu.lazyContent.detach(),
            // No matter whether the content got re-attached, reset the menu.
            complete: () => this._setIsMenuOpen(false)
          });
        } else {
          this._setIsMenuOpen(false);
        }
      } else {
        this._setIsMenuOpen(false);
        menu?.lazyContent?.detach();
      }
    }
    /**
     * This method sets the menu state to open and focuses the first item if
     * the menu was opened via the keyboard.
     */
    _initMenu(menu) {
      menu.parentMenu = this.triggersSubmenu() ? this._parentMaterialMenu : undefined;
      menu.direction = this.dir;
      this._setMenuElevation(menu);
      menu.focusFirstItem(this._openedBy || 'program');
      this._setIsMenuOpen(true);
    }
    /** Updates the menu elevation based on the amount of parent menus that it has. */
    _setMenuElevation(menu) {
      if (menu.setElevation) {
        let depth = 0;
        let parentMenu = menu.parentMenu;
        while (parentMenu) {
          depth++;
          parentMenu = parentMenu.parentMenu;
        }
        menu.setElevation(depth);
      }
    }
    // set state rather than toggle to support triggers sharing a menu
    _setIsMenuOpen(isOpen) {
      if (isOpen !== this._menuOpen) {
        this._menuOpen = isOpen;
        this._menuOpen ? this.menuOpened.emit() : this.menuClosed.emit();
        if (this.triggersSubmenu()) {
          this._menuItemInstance._setHighlighted(isOpen);
        }
        this._changeDetectorRef.markForCheck();
      }
    }
    /**
     * This method creates the overlay from the provided menu's template and saves its
     * OverlayRef so that it can be attached to the DOM when openMenu is called.
     */
    _createOverlay(menu) {
      if (!this._overlayRef) {
        const config = this._getOverlayConfig(menu);
        this._subscribeToPositions(menu, config.positionStrategy);
        this._overlayRef = this._overlay.create(config);
        // Consume the `keydownEvents` in order to prevent them from going to another overlay.
        // Ideally we'd also have our keyboard event logic in here, however doing so will
        // break anybody that may have implemented the `MatMenuPanel` themselves.
        this._overlayRef.keydownEvents().subscribe();
      }
      return this._overlayRef;
    }
    /**
     * This method builds the configuration object needed to create the overlay, the OverlayState.
     * @returns OverlayConfig
     */
    _getOverlayConfig(menu) {
      return new _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_11__.OverlayConfig({
        positionStrategy: this._overlay.position().flexibleConnectedTo(this._element).withLockedPosition().withGrowAfterOpen().withTransformOriginOn('.mat-menu-panel, .mat-mdc-menu-panel'),
        backdropClass: menu.backdropClass || 'cdk-overlay-transparent-backdrop',
        panelClass: menu.overlayPanelClass,
        scrollStrategy: this._scrollStrategy(),
        direction: this._dir
      });
    }
    /**
     * Listens to changes in the position of the overlay and sets the correct classes
     * on the menu based on the new position. This ensures the animation origin is always
     * correct, even if a fallback position is used for the overlay.
     */
    _subscribeToPositions(menu, position) {
      if (menu.setPositionClasses) {
        position.positionChanges.subscribe(change => {
          const posX = change.connectionPair.overlayX === 'start' ? 'after' : 'before';
          const posY = change.connectionPair.overlayY === 'top' ? 'below' : 'above';
          // @breaking-change 15.0.0 Remove null check for `ngZone`.
          // `positionChanges` fires outside of the `ngZone` and `setPositionClasses` might be
          // updating something in the view so we need to bring it back in.
          if (this._ngZone) {
            this._ngZone.run(() => menu.setPositionClasses(posX, posY));
          } else {
            menu.setPositionClasses(posX, posY);
          }
        });
      }
    }
    /**
     * Sets the appropriate positions on a position strategy
     * so the overlay connects with the trigger correctly.
     * @param positionStrategy Strategy whose position to update.
     */
    _setPosition(menu, positionStrategy) {
      let [originX, originFallbackX] = menu.xPosition === 'before' ? ['end', 'start'] : ['start', 'end'];
      let [overlayY, overlayFallbackY] = menu.yPosition === 'above' ? ['bottom', 'top'] : ['top', 'bottom'];
      let [originY, originFallbackY] = [overlayY, overlayFallbackY];
      let [overlayX, overlayFallbackX] = [originX, originFallbackX];
      let offsetY = 0;
      if (this.triggersSubmenu()) {
        // When the menu is a sub-menu, it should always align itself
        // to the edges of the trigger, instead of overlapping it.
        overlayFallbackX = originX = menu.xPosition === 'before' ? 'start' : 'end';
        originFallbackX = overlayX = originX === 'end' ? 'start' : 'end';
        if (this._parentMaterialMenu) {
          if (this._parentInnerPadding == null) {
            const firstItem = this._parentMaterialMenu.items.first;
            this._parentInnerPadding = firstItem ? firstItem._getHostElement().offsetTop : 0;
          }
          offsetY = overlayY === 'bottom' ? this._parentInnerPadding : -this._parentInnerPadding;
        }
      } else if (!menu.overlapTrigger) {
        originY = overlayY === 'top' ? 'bottom' : 'top';
        originFallbackY = overlayFallbackY === 'top' ? 'bottom' : 'top';
      }
      positionStrategy.withPositions([{
        originX,
        originY,
        overlayX,
        overlayY,
        offsetY
      }, {
        originX: originFallbackX,
        originY,
        overlayX: overlayFallbackX,
        overlayY,
        offsetY
      }, {
        originX,
        originY: originFallbackY,
        overlayX,
        overlayY: overlayFallbackY,
        offsetY: -offsetY
      }, {
        originX: originFallbackX,
        originY: originFallbackY,
        overlayX: overlayFallbackX,
        overlayY: overlayFallbackY,
        offsetY: -offsetY
      }]);
    }
    /** Returns a stream that emits whenever an action that should close the menu occurs. */
    _menuClosingActions() {
      const backdrop = this._overlayRef.backdropClick();
      const detachments = this._overlayRef.detachments();
      const parentClose = this._parentMaterialMenu ? this._parentMaterialMenu.closed : (0,rxjs__WEBPACK_IMPORTED_MODULE_17__.of)();
      const hover = this._parentMaterialMenu ? this._parentMaterialMenu._hovered().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_15__.filter)(active => active !== this._menuItemInstance), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_15__.filter)(() => this._menuOpen)) : (0,rxjs__WEBPACK_IMPORTED_MODULE_17__.of)();
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_9__.merge)(backdrop, parentClose, hover, detachments);
    }
    /** Handles mouse presses on the trigger. */
    _handleMousedown(event) {
      if (!(0,_angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_3__.isFakeMousedownFromScreenReader)(event)) {
        // Since right or middle button clicks won't trigger the `click` event,
        // we shouldn't consider the menu as opened by mouse in those cases.
        this._openedBy = event.button === 0 ? 'mouse' : undefined;
        // Since clicking on the trigger won't close the menu if it opens a sub-menu,
        // we should prevent focus from moving onto it via click to avoid the
        // highlight from lingering on the menu item.
        if (this.triggersSubmenu()) {
          event.preventDefault();
        }
      }
    }
    /** Handles key presses on the trigger. */
    _handleKeydown(event) {
      const keyCode = event.keyCode;
      // Pressing enter on the trigger will trigger the click handler later.
      if (keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_10__.ENTER || keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_10__.SPACE) {
        this._openedBy = 'keyboard';
      }
      if (this.triggersSubmenu() && (keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_10__.RIGHT_ARROW && this.dir === 'ltr' || keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_10__.LEFT_ARROW && this.dir === 'rtl')) {
        this._openedBy = 'keyboard';
        this.openMenu();
      }
    }
    /** Handles click events on the trigger. */
    _handleClick(event) {
      if (this.triggersSubmenu()) {
        // Stop event propagation to avoid closing the parent menu.
        event.stopPropagation();
        this.openMenu();
      } else {
        this.toggleMenu();
      }
    }
    /** Handles the cases where the user hovers over the trigger. */
    _handleHover() {
      // Subscribe to changes in the hovered item in order to toggle the panel.
      if (!this.triggersSubmenu() || !this._parentMaterialMenu) {
        return;
      }
      this._hoverSubscription = this._parentMaterialMenu._hovered()
      // Since we might have multiple competing triggers for the same menu (e.g. a sub-menu
      // with different data and triggers), we have to delay it by a tick to ensure that
      // it won't be closed immediately after it is opened.
      .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_15__.filter)(active => active === this._menuItemInstance && !active.disabled), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_18__.delay)(0, rxjs__WEBPACK_IMPORTED_MODULE_19__.asapScheduler)).subscribe(() => {
        this._openedBy = 'mouse';
        // If the same menu is used between multiple triggers, it might still be animating
        // while the new trigger tries to re-open it. Wait for the animation to finish
        // before doing so. Also interrupt if the user moves to another item.
        if (this.menu instanceof MatMenu && this.menu._isAnimating) {
          // We need the `delay(0)` here in order to avoid
          // 'changed after checked' errors in some cases. See #12194.
          this.menu._animationDone.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_16__.take)(1), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_18__.delay)(0, rxjs__WEBPACK_IMPORTED_MODULE_19__.asapScheduler), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_14__.takeUntil)(this._parentMaterialMenu._hovered())).subscribe(() => this.openMenu());
        } else {
          this.openMenu();
        }
      });
    }
    /** Gets the portal that should be attached to the overlay. */
    _getPortal(menu) {
      // Note that we can avoid this check by keeping the portal on the menu panel.
      // While it would be cleaner, we'd have to introduce another required method on
      // `MatMenuPanel`, making it harder to consume.
      if (!this._portal || this._portal.templateRef !== menu.templateRef) {
        this._portal = new _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_5__.TemplatePortal(menu.templateRef, this._viewContainerRef);
      }
      return this._portal;
    }
    static {
      this.ɵfac = function MatMenuTrigger_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || MatMenuTrigger)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_11__.Overlay), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewContainerRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](MAT_MENU_SCROLL_STRATEGY), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](MAT_MENU_PANEL, 8), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](MatMenuItem, 10), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_20__.Directionality, 8), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_3__.FocusMonitor), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone));
      };
    }
    static {
      this.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
        type: MatMenuTrigger,
        selectors: [["", "mat-menu-trigger-for", ""], ["", "matMenuTriggerFor", ""]],
        hostAttrs: [1, "mat-mdc-menu-trigger"],
        hostVars: 3,
        hostBindings: function MatMenuTrigger_HostBindings(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MatMenuTrigger_click_HostBindingHandler($event) {
              return ctx._handleClick($event);
            })("mousedown", function MatMenuTrigger_mousedown_HostBindingHandler($event) {
              return ctx._handleMousedown($event);
            })("keydown", function MatMenuTrigger_keydown_HostBindingHandler($event) {
              return ctx._handleKeydown($event);
            });
          }
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-haspopup", ctx.menu ? "menu" : null)("aria-expanded", ctx.menuOpen)("aria-controls", ctx.menuOpen ? ctx.menu.panelId : null);
          }
        },
        inputs: {
          _deprecatedMatMenuTriggerFor: [0, "mat-menu-trigger-for", "_deprecatedMatMenuTriggerFor"],
          menu: [0, "matMenuTriggerFor", "menu"],
          menuData: [0, "matMenuTriggerData", "menuData"],
          restoreFocus: [0, "matMenuTriggerRestoreFocus", "restoreFocus"]
        },
        outputs: {
          menuOpened: "menuOpened",
          onMenuOpen: "onMenuOpen",
          menuClosed: "menuClosed",
          onMenuClose: "onMenuClose"
        },
        exportAs: ["matMenuTrigger"],
        standalone: true
      });
    }
  }
  return MatMenuTrigger;
})();
/*#__PURE__*/(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
let MatMenuModule = /*#__PURE__*/(() => {
  class MatMenuModule {
    static {
      this.ɵfac = function MatMenuModule_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || MatMenuModule)();
      };
    }
    static {
      this.ɵmod = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: MatMenuModule
      });
    }
    static {
      this.ɵinj = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        providers: [MAT_MENU_SCROLL_STRATEGY_FACTORY_PROVIDER],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule, _angular_material_core__WEBPACK_IMPORTED_MODULE_4__.MatRippleModule, _angular_material_core__WEBPACK_IMPORTED_MODULE_4__.MatCommonModule, _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_11__.OverlayModule, _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_21__.CdkScrollableModule, _angular_material_core__WEBPACK_IMPORTED_MODULE_4__.MatCommonModule]
      });
    }
  }
  return MatMenuModule;
})();
/*#__PURE__*/(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();

/**
 * Generated bundle index. Do not edit.
 */



/***/ }),

/***/ 7049:
/*!*************************************************************!*\
  !*** ./node_modules/@angular/material/fesm2022/sidenav.mjs ***!
  \*************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MAT_DRAWER_DEFAULT_AUTOSIZE: () => (/* binding */ MAT_DRAWER_DEFAULT_AUTOSIZE),
/* harmony export */   MAT_DRAWER_DEFAULT_AUTOSIZE_FACTORY: () => (/* binding */ MAT_DRAWER_DEFAULT_AUTOSIZE_FACTORY),
/* harmony export */   MatDrawer: () => (/* binding */ MatDrawer),
/* harmony export */   MatDrawerContainer: () => (/* binding */ MatDrawerContainer),
/* harmony export */   MatDrawerContent: () => (/* binding */ MatDrawerContent),
/* harmony export */   MatSidenav: () => (/* binding */ MatSidenav),
/* harmony export */   MatSidenavContainer: () => (/* binding */ MatSidenavContainer),
/* harmony export */   MatSidenavContent: () => (/* binding */ MatSidenavContent),
/* harmony export */   MatSidenavModule: () => (/* binding */ MatSidenavModule),
/* harmony export */   matDrawerAnimations: () => (/* binding */ matDrawerAnimations),
/* harmony export */   throwMatDuplicatedDrawerError: () => (/* binding */ throwMatDuplicatedDrawerError)
/* harmony export */ });
/* harmony import */ var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/cdk/scrolling */ 9975);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/core */ 4646);
/* harmony import */ var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/cdk/a11y */ 2102);
/* harmony import */ var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/cdk/bidi */ 3680);
/* harmony import */ var _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/cdk/coercion */ 2814);
/* harmony import */ var _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/cdk/keycodes */ 4879);
/* harmony import */ var _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/cdk/platform */ 7699);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 819);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs */ 8537);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! rxjs */ 3617);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ 1567);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ 271);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ 7378);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/operators */ 3900);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rxjs/operators */ 4334);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! rxjs/operators */ 3037);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! rxjs/operators */ 2575);
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/animations */ 7172);















/**
 * Animations used by the Material drawers.
 * @docs-private
 */
const _c0 = ["*"];
const _c1 = ["content"];
const _c2 = [[["mat-drawer"]], [["mat-drawer-content"]], "*"];
const _c3 = ["mat-drawer", "mat-drawer-content", "*"];
function MatDrawerContainer_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MatDrawerContainer_Conditional_0_Template_div_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r1._onBackdropClicked());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("mat-drawer-shown", ctx_r1._isShowingBackdrop());
  }
}
function MatDrawerContainer_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-drawer-content");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](1, 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
}
const _c4 = [[["mat-sidenav"]], [["mat-sidenav-content"]], "*"];
const _c5 = ["mat-sidenav", "mat-sidenav-content", "*"];
function MatSidenavContainer_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MatSidenavContainer_Conditional_0_Template_div_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r1._onBackdropClicked());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("mat-drawer-shown", ctx_r1._isShowingBackdrop());
  }
}
function MatSidenavContainer_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-sidenav-content");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](1, 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
}
const _c6 = ".mat-drawer-container{position:relative;z-index:1;color:var(--mat-sidenav-content-text-color, var(--mat-app-on-background));background-color:var(--mat-sidenav-content-background-color, var(--mat-app-background));box-sizing:border-box;-webkit-overflow-scrolling:touch;display:block;overflow:hidden}.mat-drawer-container[fullscreen]{top:0;left:0;right:0;bottom:0;position:absolute}.mat-drawer-container[fullscreen].mat-drawer-container-has-open{overflow:hidden}.mat-drawer-container.mat-drawer-container-explicit-backdrop .mat-drawer-side{z-index:3}.mat-drawer-container.ng-animate-disabled .mat-drawer-backdrop,.mat-drawer-container.ng-animate-disabled .mat-drawer-content,.ng-animate-disabled .mat-drawer-container .mat-drawer-backdrop,.ng-animate-disabled .mat-drawer-container .mat-drawer-content{transition:none}.mat-drawer-backdrop{top:0;left:0;right:0;bottom:0;position:absolute;display:block;z-index:3;visibility:hidden}.mat-drawer-backdrop.mat-drawer-shown{visibility:visible;background-color:var(--mat-sidenav-scrim-color)}.mat-drawer-transition .mat-drawer-backdrop{transition-duration:400ms;transition-timing-function:cubic-bezier(0.25, 0.8, 0.25, 1);transition-property:background-color,visibility}.cdk-high-contrast-active .mat-drawer-backdrop{opacity:.5}.mat-drawer-content{position:relative;z-index:1;display:block;height:100%;overflow:auto}.mat-drawer-transition .mat-drawer-content{transition-duration:400ms;transition-timing-function:cubic-bezier(0.25, 0.8, 0.25, 1);transition-property:transform,margin-left,margin-right}.mat-drawer{position:relative;z-index:4;color:var(--mat-sidenav-container-text-color, var(--mat-app-on-surface-variant));box-shadow:var(--mat-sidenav-container-elevation-shadow);background-color:var(--mat-sidenav-container-background-color, var(--mat-app-surface));border-top-right-radius:var(--mat-sidenav-container-shape, var(--mat-app-corner-large));border-bottom-right-radius:var(--mat-sidenav-container-shape, var(--mat-app-corner-large));width:var(--mat-sidenav-container-width);display:block;position:absolute;top:0;bottom:0;z-index:3;outline:0;box-sizing:border-box;overflow-y:auto;transform:translate3d(-100%, 0, 0)}.cdk-high-contrast-active .mat-drawer,.cdk-high-contrast-active [dir=rtl] .mat-drawer.mat-drawer-end{border-right:solid 1px currentColor}.cdk-high-contrast-active [dir=rtl] .mat-drawer,.cdk-high-contrast-active .mat-drawer.mat-drawer-end{border-left:solid 1px currentColor;border-right:none}.mat-drawer.mat-drawer-side{z-index:2}.mat-drawer.mat-drawer-end{right:0;transform:translate3d(100%, 0, 0);border-top-left-radius:var(--mat-sidenav-container-shape, var(--mat-app-corner-large));border-bottom-left-radius:var(--mat-sidenav-container-shape, var(--mat-app-corner-large));border-top-right-radius:0;border-bottom-right-radius:0}[dir=rtl] .mat-drawer{border-top-left-radius:var(--mat-sidenav-container-shape, var(--mat-app-corner-large));border-bottom-left-radius:var(--mat-sidenav-container-shape, var(--mat-app-corner-large));border-top-right-radius:0;border-bottom-right-radius:0;transform:translate3d(100%, 0, 0)}[dir=rtl] .mat-drawer.mat-drawer-end{border-top-right-radius:var(--mat-sidenav-container-shape, var(--mat-app-corner-large));border-bottom-right-radius:var(--mat-sidenav-container-shape, var(--mat-app-corner-large));border-top-left-radius:0;border-bottom-left-radius:0;left:0;right:auto;transform:translate3d(-100%, 0, 0)}.mat-drawer[style*=\"visibility: hidden\"]{display:none}.mat-drawer-side{box-shadow:none;border-right-color:var(--mat-sidenav-container-divider-color);border-right-width:1px;border-right-style:solid}.mat-drawer-side.mat-drawer-end{border-left-color:var(--mat-sidenav-container-divider-color);border-left-width:1px;border-left-style:solid;border-right:none}[dir=rtl] .mat-drawer-side{border-left-color:var(--mat-sidenav-container-divider-color);border-left-width:1px;border-left-style:solid;border-right:none}[dir=rtl] .mat-drawer-side.mat-drawer-end{border-right-color:var(--mat-sidenav-container-divider-color);border-right-width:1px;border-right-style:solid;border-left:none}.mat-drawer-inner-container{width:100%;height:100%;overflow:auto;-webkit-overflow-scrolling:touch}.mat-sidenav-fixed{position:fixed}";
const matDrawerAnimations = {
  /** Animation that slides a drawer in and out. */
  transformDrawer: /*#__PURE__*/(0,_angular_animations__WEBPACK_IMPORTED_MODULE_1__.trigger)('transform', [
  /*#__PURE__*/
  // We remove the `transform` here completely, rather than setting it to zero, because:
  // 1. Having a transform can cause elements with ripples or an animated
  //    transform to shift around in Chrome with an RTL layout (see #10023).
  // 2. 3d transforms causes text to appear blurry on IE and Edge.
  (0,_angular_animations__WEBPACK_IMPORTED_MODULE_1__.state)('open, open-instant', /*#__PURE__*/(0,_angular_animations__WEBPACK_IMPORTED_MODULE_1__.style)({
    'transform': 'none',
    'visibility': 'visible'
  })), /*#__PURE__*/(0,_angular_animations__WEBPACK_IMPORTED_MODULE_1__.state)('void', /*#__PURE__*/(0,_angular_animations__WEBPACK_IMPORTED_MODULE_1__.style)({
    // Avoids the shadow showing up when closed in SSR.
    'box-shadow': 'none',
    'visibility': 'hidden'
  })), /*#__PURE__*/(0,_angular_animations__WEBPACK_IMPORTED_MODULE_1__.transition)('void => open-instant', /*#__PURE__*/(0,_angular_animations__WEBPACK_IMPORTED_MODULE_1__.animate)('0ms')), /*#__PURE__*/(0,_angular_animations__WEBPACK_IMPORTED_MODULE_1__.transition)('void <=> open, open-instant => void', /*#__PURE__*/(0,_angular_animations__WEBPACK_IMPORTED_MODULE_1__.animate)('400ms cubic-bezier(0.25, 0.8, 0.25, 1)'))])
};

/**
 * Throws an exception when two MatDrawer are matching the same position.
 * @docs-private
 */
function throwMatDuplicatedDrawerError(position) {
  throw Error(`A drawer was already declared for 'position="${position}"'`);
}
/** Configures whether drawers should use auto sizing by default. */
const MAT_DRAWER_DEFAULT_AUTOSIZE = /*#__PURE__*/new _angular_core__WEBPACK_IMPORTED_MODULE_0__.InjectionToken('MAT_DRAWER_DEFAULT_AUTOSIZE', {
  providedIn: 'root',
  factory: MAT_DRAWER_DEFAULT_AUTOSIZE_FACTORY
});
/**
 * Used to provide a drawer container to a drawer while avoiding circular references.
 * @docs-private
 */
const MAT_DRAWER_CONTAINER = /*#__PURE__*/new _angular_core__WEBPACK_IMPORTED_MODULE_0__.InjectionToken('MAT_DRAWER_CONTAINER');
/** @docs-private */
function MAT_DRAWER_DEFAULT_AUTOSIZE_FACTORY() {
  return false;
}
let MatDrawerContent = /*#__PURE__*/(() => {
  class MatDrawerContent extends _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_2__.CdkScrollable {
    constructor(_changeDetectorRef, _container, elementRef, scrollDispatcher, ngZone) {
      super(elementRef, scrollDispatcher, ngZone);
      this._changeDetectorRef = _changeDetectorRef;
      this._container = _container;
    }
    ngAfterContentInit() {
      this._container._contentMarginChanges.subscribe(() => {
        this._changeDetectorRef.markForCheck();
      });
    }
    static {
      this.ɵfac = function MatDrawerContent_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || MatDrawerContent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"]((0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(() => MatDrawerContainer)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_2__.ScrollDispatcher), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone));
      };
    }
    static {
      this.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: MatDrawerContent,
        selectors: [["mat-drawer-content"]],
        hostAttrs: [1, "mat-drawer-content"],
        hostVars: 4,
        hostBindings: function MatDrawerContent_HostBindings(rf, ctx) {
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("margin-left", ctx._container._contentMargins.left, "px")("margin-right", ctx._container._contentMargins.right, "px");
          }
        },
        standalone: true,
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([{
          provide: _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_2__.CdkScrollable,
          useExisting: MatDrawerContent
        }]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵStandaloneFeature"]],
        ngContentSelectors: _c0,
        decls: 1,
        vars: 0,
        template: function MatDrawerContent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](0);
          }
        },
        encapsulation: 2,
        changeDetection: 0
      });
    }
  }
  return MatDrawerContent;
})();
/*#__PURE__*/(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
/**
 * This component corresponds to a drawer that can be opened on the drawer container.
 */
let MatDrawer = /*#__PURE__*/(() => {
  class MatDrawer {
    /** The side that the drawer is attached to. */
    get position() {
      return this._position;
    }
    set position(value) {
      // Make sure we have a valid value.
      value = value === 'end' ? 'end' : 'start';
      if (value !== this._position) {
        // Static inputs in Ivy are set before the element is in the DOM.
        if (this._isAttached) {
          this._updatePositionInParent(value);
        }
        this._position = value;
        this.onPositionChanged.emit();
      }
    }
    /** Mode of the drawer; one of 'over', 'push' or 'side'. */
    get mode() {
      return this._mode;
    }
    set mode(value) {
      this._mode = value;
      this._updateFocusTrapState();
      this._modeChanged.next();
    }
    /** Whether the drawer can be closed with the escape key or by clicking on the backdrop. */
    get disableClose() {
      return this._disableClose;
    }
    set disableClose(value) {
      this._disableClose = (0,_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_3__.coerceBooleanProperty)(value);
    }
    /**
     * Whether the drawer should focus the first focusable element automatically when opened.
     * Defaults to false in when `mode` is set to `side`, otherwise defaults to `true`. If explicitly
     * enabled, focus will be moved into the sidenav in `side` mode as well.
     * @breaking-change 14.0.0 Remove boolean option from autoFocus. Use string or AutoFocusTarget
     * instead.
     */
    get autoFocus() {
      const value = this._autoFocus;
      // Note that usually we don't allow autoFocus to be set to `first-tabbable` in `side` mode,
      // because we don't know how the sidenav is being used, but in some cases it still makes
      // sense to do it. The consumer can explicitly set `autoFocus`.
      if (value == null) {
        if (this.mode === 'side') {
          return 'dialog';
        } else {
          return 'first-tabbable';
        }
      }
      return value;
    }
    set autoFocus(value) {
      if (value === 'true' || value === 'false' || value == null) {
        value = (0,_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_3__.coerceBooleanProperty)(value);
      }
      this._autoFocus = value;
    }
    /**
     * Whether the drawer is opened. We overload this because we trigger an event when it
     * starts or end.
     */
    get opened() {
      return this._opened;
    }
    set opened(value) {
      this.toggle((0,_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_3__.coerceBooleanProperty)(value));
    }
    constructor(_elementRef, _focusTrapFactory, _focusMonitor, _platform, _ngZone, _interactivityChecker, _doc, _container) {
      this._elementRef = _elementRef;
      this._focusTrapFactory = _focusTrapFactory;
      this._focusMonitor = _focusMonitor;
      this._platform = _platform;
      this._ngZone = _ngZone;
      this._interactivityChecker = _interactivityChecker;
      this._doc = _doc;
      this._container = _container;
      this._focusTrap = null;
      this._elementFocusedBeforeDrawerWasOpened = null;
      /** Whether the drawer is initialized. Used for disabling the initial animation. */
      this._enableAnimations = false;
      this._position = 'start';
      this._mode = 'over';
      this._disableClose = false;
      this._opened = false;
      /** Emits whenever the drawer has started animating. */
      this._animationStarted = new rxjs__WEBPACK_IMPORTED_MODULE_4__.Subject();
      /** Emits whenever the drawer is done animating. */
      this._animationEnd = new rxjs__WEBPACK_IMPORTED_MODULE_4__.Subject();
      /** Current state of the sidenav animation. */
      this._animationState = 'void';
      /** Event emitted when the drawer open state is changed. */
      this.openedChange =
      // Note this has to be async in order to avoid some issues with two-bindings (see #8872).
      new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter(/* isAsync */true);
      /** Event emitted when the drawer has been opened. */
      this._openedStream = this.openedChange.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.filter)(o => o), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.map)(() => {}));
      /** Event emitted when the drawer has started opening. */
      this.openedStart = this._animationStarted.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.filter)(e => e.fromState !== e.toState && e.toState.indexOf('open') === 0), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.mapTo)(undefined));
      /** Event emitted when the drawer has been closed. */
      this._closedStream = this.openedChange.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.filter)(o => !o), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.map)(() => {}));
      /** Event emitted when the drawer has started closing. */
      this.closedStart = this._animationStarted.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.filter)(e => e.fromState !== e.toState && e.toState === 'void'), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.mapTo)(undefined));
      /** Emits when the component is destroyed. */
      this._destroyed = new rxjs__WEBPACK_IMPORTED_MODULE_4__.Subject();
      /** Event emitted when the drawer's position changes. */
      // tslint:disable-next-line:no-output-on-prefix
      this.onPositionChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
      /**
       * An observable that emits when the drawer mode changes. This is used by the drawer container to
       * to know when to when the mode changes so it can adapt the margins on the content.
       */
      this._modeChanged = new rxjs__WEBPACK_IMPORTED_MODULE_4__.Subject();
      this._injector = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(_angular_core__WEBPACK_IMPORTED_MODULE_0__.Injector);
      this._changeDetectorRef = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(_angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef);
      this.openedChange.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.takeUntil)(this._destroyed)).subscribe(opened => {
        if (opened) {
          if (this._doc) {
            this._elementFocusedBeforeDrawerWasOpened = this._doc.activeElement;
          }
          this._takeFocus();
        } else if (this._isFocusWithinDrawer()) {
          this._restoreFocus(this._openedVia || 'program');
        }
      });
      /**
       * Listen to `keydown` events outside the zone so that change detection is not run every
       * time a key is pressed. Instead we re-enter the zone only if the `ESC` key is pressed
       * and we don't have close disabled.
       */
      this._ngZone.runOutsideAngular(() => {
        (0,rxjs__WEBPACK_IMPORTED_MODULE_9__.fromEvent)(this._elementRef.nativeElement, 'keydown').pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.filter)(event => {
          return event.keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_10__.ESCAPE && !this.disableClose && !(0,_angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_10__.hasModifierKey)(event);
        }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.takeUntil)(this._destroyed)).subscribe(event => this._ngZone.run(() => {
          this.close();
          event.stopPropagation();
          event.preventDefault();
        }));
      });
      this._animationEnd.subscribe(event => {
        const {
          fromState,
          toState
        } = event;
        if (toState.indexOf('open') === 0 && fromState === 'void' || toState === 'void' && fromState.indexOf('open') === 0) {
          this.openedChange.emit(this._opened);
        }
      });
    }
    /**
     * Focuses the provided element. If the element is not focusable, it will add a tabIndex
     * attribute to forcefully focus it. The attribute is removed after focus is moved.
     * @param element The element to focus.
     */
    _forceFocus(element, options) {
      if (!this._interactivityChecker.isFocusable(element)) {
        element.tabIndex = -1;
        // The tabindex attribute should be removed to avoid navigating to that element again
        this._ngZone.runOutsideAngular(() => {
          const callback = () => {
            element.removeEventListener('blur', callback);
            element.removeEventListener('mousedown', callback);
            element.removeAttribute('tabindex');
          };
          element.addEventListener('blur', callback);
          element.addEventListener('mousedown', callback);
        });
      }
      element.focus(options);
    }
    /**
     * Focuses the first element that matches the given selector within the focus trap.
     * @param selector The CSS selector for the element to set focus to.
     */
    _focusByCssSelector(selector, options) {
      let elementToFocus = this._elementRef.nativeElement.querySelector(selector);
      if (elementToFocus) {
        this._forceFocus(elementToFocus, options);
      }
    }
    /**
     * Moves focus into the drawer. Note that this works even if
     * the focus trap is disabled in `side` mode.
     */
    _takeFocus() {
      if (!this._focusTrap) {
        return;
      }
      const element = this._elementRef.nativeElement;
      // When autoFocus is not on the sidenav, if the element cannot be focused or does
      // not exist, focus the sidenav itself so the keyboard navigation still works.
      // We need to check that `focus` is a function due to Universal.
      switch (this.autoFocus) {
        case false:
        case 'dialog':
          return;
        case true:
        case 'first-tabbable':
          (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.afterNextRender)(() => {
            const hasMovedFocus = this._focusTrap.focusInitialElement();
            if (!hasMovedFocus && typeof element.focus === 'function') {
              element.focus();
            }
          }, {
            injector: this._injector
          });
          break;
        case 'first-heading':
          this._focusByCssSelector('h1, h2, h3, h4, h5, h6, [role="heading"]');
          break;
        default:
          this._focusByCssSelector(this.autoFocus);
          break;
      }
    }
    /**
     * Restores focus to the element that was originally focused when the drawer opened.
     * If no element was focused at that time, the focus will be restored to the drawer.
     */
    _restoreFocus(focusOrigin) {
      if (this.autoFocus === 'dialog') {
        return;
      }
      if (this._elementFocusedBeforeDrawerWasOpened) {
        this._focusMonitor.focusVia(this._elementFocusedBeforeDrawerWasOpened, focusOrigin);
      } else {
        this._elementRef.nativeElement.blur();
      }
      this._elementFocusedBeforeDrawerWasOpened = null;
    }
    /** Whether focus is currently within the drawer. */
    _isFocusWithinDrawer() {
      const activeEl = this._doc.activeElement;
      return !!activeEl && this._elementRef.nativeElement.contains(activeEl);
    }
    ngAfterViewInit() {
      this._isAttached = true;
      // Only update the DOM position when the sidenav is positioned at
      // the end since we project the sidenav before the content by default.
      if (this._position === 'end') {
        this._updatePositionInParent('end');
      }
      // Needs to happen after the position is updated
      // so the focus trap anchors are in the right place.
      if (this._platform.isBrowser) {
        this._focusTrap = this._focusTrapFactory.create(this._elementRef.nativeElement);
        this._updateFocusTrapState();
      }
    }
    ngAfterContentChecked() {
      // Enable the animations after the lifecycle hooks have run, in order to avoid animating
      // drawers that are open by default. When we're on the server, we shouldn't enable the
      // animations, because we don't want the drawer to animate the first time the user sees
      // the page.
      if (this._platform.isBrowser) {
        this._enableAnimations = true;
      }
    }
    ngOnDestroy() {
      this._focusTrap?.destroy();
      this._anchor?.remove();
      this._anchor = null;
      this._animationStarted.complete();
      this._animationEnd.complete();
      this._modeChanged.complete();
      this._destroyed.next();
      this._destroyed.complete();
    }
    /**
     * Open the drawer.
     * @param openedVia Whether the drawer was opened by a key press, mouse click or programmatically.
     * Used for focus management after the sidenav is closed.
     */
    open(openedVia) {
      return this.toggle(true, openedVia);
    }
    /** Close the drawer. */
    close() {
      return this.toggle(false);
    }
    /** Closes the drawer with context that the backdrop was clicked. */
    _closeViaBackdropClick() {
      // If the drawer is closed upon a backdrop click, we always want to restore focus. We
      // don't need to check whether focus is currently in the drawer, as clicking on the
      // backdrop causes blurs the active element.
      return this._setOpen(/* isOpen */false, /* restoreFocus */true, 'mouse');
    }
    /**
     * Toggle this drawer.
     * @param isOpen Whether the drawer should be open.
     * @param openedVia Whether the drawer was opened by a key press, mouse click or programmatically.
     * Used for focus management after the sidenav is closed.
     */
    toggle(isOpen = !this.opened, openedVia) {
      // If the focus is currently inside the drawer content and we are closing the drawer,
      // restore the focus to the initially focused element (when the drawer opened).
      if (isOpen && openedVia) {
        this._openedVia = openedVia;
      }
      const result = this._setOpen(isOpen, /* restoreFocus */!isOpen && this._isFocusWithinDrawer(), this._openedVia || 'program');
      if (!isOpen) {
        this._openedVia = null;
      }
      return result;
    }
    /**
     * Toggles the opened state of the drawer.
     * @param isOpen Whether the drawer should open or close.
     * @param restoreFocus Whether focus should be restored on close.
     * @param focusOrigin Origin to use when restoring focus.
     */
    _setOpen(isOpen, restoreFocus, focusOrigin) {
      this._opened = isOpen;
      if (isOpen) {
        this._animationState = this._enableAnimations ? 'open' : 'open-instant';
      } else {
        this._animationState = 'void';
        if (restoreFocus) {
          this._restoreFocus(focusOrigin);
        }
      }
      // Needed to ensure that the closing sequence fires off correctly.
      this._changeDetectorRef.markForCheck();
      this._updateFocusTrapState();
      return new Promise(resolve => {
        this.openedChange.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.take)(1)).subscribe(open => resolve(open ? 'open' : 'close'));
      });
    }
    _getWidth() {
      return this._elementRef.nativeElement ? this._elementRef.nativeElement.offsetWidth || 0 : 0;
    }
    /** Updates the enabled state of the focus trap. */
    _updateFocusTrapState() {
      if (this._focusTrap) {
        // Trap focus only if the backdrop is enabled. Otherwise, allow end user to interact with the
        // sidenav content.
        this._focusTrap.enabled = !!this._container?.hasBackdrop && this.opened;
      }
    }
    /**
     * Updates the position of the drawer in the DOM. We need to move the element around ourselves
     * when it's in the `end` position so that it comes after the content and the visual order
     * matches the tab order. We also need to be able to move it back to `start` if the sidenav
     * started off as `end` and was changed to `start`.
     */
    _updatePositionInParent(newPosition) {
      // Don't move the DOM node around on the server, because it can throw off hydration.
      if (!this._platform.isBrowser) {
        return;
      }
      const element = this._elementRef.nativeElement;
      const parent = element.parentNode;
      if (newPosition === 'end') {
        if (!this._anchor) {
          this._anchor = this._doc.createComment('mat-drawer-anchor');
          parent.insertBefore(this._anchor, element);
        }
        parent.appendChild(element);
      } else if (this._anchor) {
        this._anchor.parentNode.insertBefore(element, this._anchor);
      }
    }
    static {
      this.ɵfac = function MatDrawer_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || MatDrawer)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_12__.FocusTrapFactory), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_12__.FocusMonitor), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_13__.Platform), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_12__.InteractivityChecker), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_14__.DOCUMENT, 8), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](MAT_DRAWER_CONTAINER, 8));
      };
    }
    static {
      this.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: MatDrawer,
        selectors: [["mat-drawer"]],
        viewQuery: function MatDrawer_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c1, 5);
          }
          if (rf & 2) {
            let _t;
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx._content = _t.first);
          }
        },
        hostAttrs: ["tabIndex", "-1", 1, "mat-drawer"],
        hostVars: 12,
        hostBindings: function MatDrawer_HostBindings(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsyntheticHostListener"]("@transform.start", function MatDrawer_animation_transform_start_HostBindingHandler($event) {
              return ctx._animationStarted.next($event);
            })("@transform.done", function MatDrawer_animation_transform_done_HostBindingHandler($event) {
              return ctx._animationEnd.next($event);
            });
          }
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsyntheticHostProperty"]("@transform", ctx._animationState);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("align", null);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("mat-drawer-end", ctx.position === "end")("mat-drawer-over", ctx.mode === "over")("mat-drawer-push", ctx.mode === "push")("mat-drawer-side", ctx.mode === "side")("mat-drawer-opened", ctx.opened);
          }
        },
        inputs: {
          position: "position",
          mode: "mode",
          disableClose: "disableClose",
          autoFocus: "autoFocus",
          opened: "opened"
        },
        outputs: {
          openedChange: "openedChange",
          _openedStream: "opened",
          openedStart: "openedStart",
          _closedStream: "closed",
          closedStart: "closedStart",
          onPositionChanged: "positionChanged"
        },
        exportAs: ["matDrawer"],
        standalone: true,
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵStandaloneFeature"]],
        ngContentSelectors: _c0,
        decls: 3,
        vars: 0,
        consts: [["content", ""], ["cdkScrollable", "", 1, "mat-drawer-inner-container"]],
        template: function MatDrawer_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1, 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
        },
        dependencies: [_angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_2__.CdkScrollable],
        encapsulation: 2,
        data: {
          animation: [matDrawerAnimations.transformDrawer]
        },
        changeDetection: 0
      });
    }
  }
  return MatDrawer;
})();
/*#__PURE__*/(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
/**
 * `<mat-drawer-container>` component.
 *
 * This is the parent component to one or two `<mat-drawer>`s that validates the state internally
 * and coordinates the backdrop and content styling.
 */
let MatDrawerContainer = /*#__PURE__*/(() => {
  class MatDrawerContainer {
    /** The drawer child with the `start` position. */
    get start() {
      return this._start;
    }
    /** The drawer child with the `end` position. */
    get end() {
      return this._end;
    }
    /**
     * Whether to automatically resize the container whenever
     * the size of any of its drawers changes.
     *
     * **Use at your own risk!** Enabling this option can cause layout thrashing by measuring
     * the drawers on every change detection cycle. Can be configured globally via the
     * `MAT_DRAWER_DEFAULT_AUTOSIZE` token.
     */
    get autosize() {
      return this._autosize;
    }
    set autosize(value) {
      this._autosize = (0,_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_3__.coerceBooleanProperty)(value);
    }
    /**
     * Whether the drawer container should have a backdrop while one of the sidenavs is open.
     * If explicitly set to `true`, the backdrop will be enabled for drawers in the `side`
     * mode as well.
     */
    get hasBackdrop() {
      return this._drawerHasBackdrop(this._start) || this._drawerHasBackdrop(this._end);
    }
    set hasBackdrop(value) {
      this._backdropOverride = value == null ? null : (0,_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_3__.coerceBooleanProperty)(value);
    }
    /** Reference to the CdkScrollable instance that wraps the scrollable content. */
    get scrollable() {
      return this._userContent || this._content;
    }
    constructor(_dir, _element, _ngZone, _changeDetectorRef, viewportRuler, defaultAutosize = false, _animationMode) {
      this._dir = _dir;
      this._element = _element;
      this._ngZone = _ngZone;
      this._changeDetectorRef = _changeDetectorRef;
      this._animationMode = _animationMode;
      /** Drawers that belong to this container. */
      this._drawers = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.QueryList();
      /** Event emitted when the drawer backdrop is clicked. */
      this.backdropClick = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
      /** Emits when the component is destroyed. */
      this._destroyed = new rxjs__WEBPACK_IMPORTED_MODULE_4__.Subject();
      /** Emits on every ngDoCheck. Used for debouncing reflows. */
      this._doCheckSubject = new rxjs__WEBPACK_IMPORTED_MODULE_4__.Subject();
      /**
       * Margins to be applied to the content. These are used to push / shrink the drawer content when a
       * drawer is open. We use margin rather than transform even for push mode because transform breaks
       * fixed position elements inside of the transformed element.
       */
      this._contentMargins = {
        left: null,
        right: null
      };
      this._contentMarginChanges = new rxjs__WEBPACK_IMPORTED_MODULE_4__.Subject();
      this._injector = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(_angular_core__WEBPACK_IMPORTED_MODULE_0__.Injector);
      // If a `Dir` directive exists up the tree, listen direction changes
      // and update the left/right properties to point to the proper start/end.
      if (_dir) {
        _dir.change.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.takeUntil)(this._destroyed)).subscribe(() => {
          this._validateDrawers();
          this.updateContentMargins();
        });
      }
      // Since the minimum width of the sidenav depends on the viewport width,
      // we need to recompute the margins if the viewport changes.
      viewportRuler.change().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.takeUntil)(this._destroyed)).subscribe(() => this.updateContentMargins());
      this._autosize = defaultAutosize;
    }
    ngAfterContentInit() {
      this._allDrawers.changes.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_15__.startWith)(this._allDrawers), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.takeUntil)(this._destroyed)).subscribe(drawer => {
        this._drawers.reset(drawer.filter(item => !item._container || item._container === this));
        this._drawers.notifyOnChanges();
      });
      this._drawers.changes.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_15__.startWith)(null)).subscribe(() => {
        this._validateDrawers();
        this._drawers.forEach(drawer => {
          this._watchDrawerToggle(drawer);
          this._watchDrawerPosition(drawer);
          this._watchDrawerMode(drawer);
        });
        if (!this._drawers.length || this._isDrawerOpen(this._start) || this._isDrawerOpen(this._end)) {
          this.updateContentMargins();
        }
        this._changeDetectorRef.markForCheck();
      });
      // Avoid hitting the NgZone through the debounce timeout.
      this._ngZone.runOutsideAngular(() => {
        this._doCheckSubject.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_16__.debounceTime)(10),
        // Arbitrary debounce time, less than a frame at 60fps
        (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.takeUntil)(this._destroyed)).subscribe(() => this.updateContentMargins());
      });
    }
    ngOnDestroy() {
      this._contentMarginChanges.complete();
      this._doCheckSubject.complete();
      this._drawers.destroy();
      this._destroyed.next();
      this._destroyed.complete();
    }
    /** Calls `open` of both start and end drawers */
    open() {
      this._drawers.forEach(drawer => drawer.open());
    }
    /** Calls `close` of both start and end drawers */
    close() {
      this._drawers.forEach(drawer => drawer.close());
    }
    /**
     * Recalculates and updates the inline styles for the content. Note that this should be used
     * sparingly, because it causes a reflow.
     */
    updateContentMargins() {
      // 1. For drawers in `over` mode, they don't affect the content.
      // 2. For drawers in `side` mode they should shrink the content. We do this by adding to the
      //    left margin (for left drawer) or right margin (for right the drawer).
      // 3. For drawers in `push` mode the should shift the content without resizing it. We do this by
      //    adding to the left or right margin and simultaneously subtracting the same amount of
      //    margin from the other side.
      let left = 0;
      let right = 0;
      if (this._left && this._left.opened) {
        if (this._left.mode == 'side') {
          left += this._left._getWidth();
        } else if (this._left.mode == 'push') {
          const width = this._left._getWidth();
          left += width;
          right -= width;
        }
      }
      if (this._right && this._right.opened) {
        if (this._right.mode == 'side') {
          right += this._right._getWidth();
        } else if (this._right.mode == 'push') {
          const width = this._right._getWidth();
          right += width;
          left -= width;
        }
      }
      // If either `right` or `left` is zero, don't set a style to the element. This
      // allows users to specify a custom size via CSS class in SSR scenarios where the
      // measured widths will always be zero. Note that we reset to `null` here, rather
      // than below, in order to ensure that the types in the `if` below are consistent.
      left = left || null;
      right = right || null;
      if (left !== this._contentMargins.left || right !== this._contentMargins.right) {
        this._contentMargins = {
          left,
          right
        };
        // Pull back into the NgZone since in some cases we could be outside. We need to be careful
        // to do it only when something changed, otherwise we can end up hitting the zone too often.
        this._ngZone.run(() => this._contentMarginChanges.next(this._contentMargins));
      }
    }
    ngDoCheck() {
      // If users opted into autosizing, do a check every change detection cycle.
      if (this._autosize && this._isPushed()) {
        // Run outside the NgZone, otherwise the debouncer will throw us into an infinite loop.
        this._ngZone.runOutsideAngular(() => this._doCheckSubject.next());
      }
    }
    /**
     * Subscribes to drawer events in order to set a class on the main container element when the
     * drawer is open and the backdrop is visible. This ensures any overflow on the container element
     * is properly hidden.
     */
    _watchDrawerToggle(drawer) {
      drawer._animationStarted.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.filter)(event => event.fromState !== event.toState), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.takeUntil)(this._drawers.changes)).subscribe(event => {
        // Set the transition class on the container so that the animations occur. This should not
        // be set initially because animations should only be triggered via a change in state.
        if (event.toState !== 'open-instant' && this._animationMode !== 'NoopAnimations') {
          this._element.nativeElement.classList.add('mat-drawer-transition');
        }
        this.updateContentMargins();
        this._changeDetectorRef.markForCheck();
      });
      if (drawer.mode !== 'side') {
        drawer.openedChange.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.takeUntil)(this._drawers.changes)).subscribe(() => this._setContainerClass(drawer.opened));
      }
    }
    /**
     * Subscribes to drawer onPositionChanged event in order to
     * re-validate drawers when the position changes.
     */
    _watchDrawerPosition(drawer) {
      if (!drawer) {
        return;
      }
      // NOTE: We need to wait for the microtask queue to be empty before validating,
      // since both drawers may be swapping positions at the same time.
      drawer.onPositionChanged.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.takeUntil)(this._drawers.changes)).subscribe(() => {
        (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.afterNextRender)(() => {
          this._validateDrawers();
        }, {
          injector: this._injector,
          phase: _angular_core__WEBPACK_IMPORTED_MODULE_0__.AfterRenderPhase.Read
        });
      });
    }
    /** Subscribes to changes in drawer mode so we can run change detection. */
    _watchDrawerMode(drawer) {
      if (drawer) {
        drawer._modeChanged.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.takeUntil)((0,rxjs__WEBPACK_IMPORTED_MODULE_17__.merge)(this._drawers.changes, this._destroyed))).subscribe(() => {
          this.updateContentMargins();
          this._changeDetectorRef.markForCheck();
        });
      }
    }
    /** Toggles the 'mat-drawer-opened' class on the main 'mat-drawer-container' element. */
    _setContainerClass(isAdd) {
      const classList = this._element.nativeElement.classList;
      const className = 'mat-drawer-container-has-open';
      if (isAdd) {
        classList.add(className);
      } else {
        classList.remove(className);
      }
    }
    /** Validate the state of the drawer children components. */
    _validateDrawers() {
      this._start = this._end = null;
      // Ensure that we have at most one start and one end drawer.
      this._drawers.forEach(drawer => {
        if (drawer.position == 'end') {
          if (this._end != null && (typeof ngDevMode === 'undefined' || ngDevMode)) {
            throwMatDuplicatedDrawerError('end');
          }
          this._end = drawer;
        } else {
          if (this._start != null && (typeof ngDevMode === 'undefined' || ngDevMode)) {
            throwMatDuplicatedDrawerError('start');
          }
          this._start = drawer;
        }
      });
      this._right = this._left = null;
      // Detect if we're LTR or RTL.
      if (this._dir && this._dir.value === 'rtl') {
        this._left = this._end;
        this._right = this._start;
      } else {
        this._left = this._start;
        this._right = this._end;
      }
    }
    /** Whether the container is being pushed to the side by one of the drawers. */
    _isPushed() {
      return this._isDrawerOpen(this._start) && this._start.mode != 'over' || this._isDrawerOpen(this._end) && this._end.mode != 'over';
    }
    _onBackdropClicked() {
      this.backdropClick.emit();
      this._closeModalDrawersViaBackdrop();
    }
    _closeModalDrawersViaBackdrop() {
      // Close all open drawers where closing is not disabled and the mode is not `side`.
      [this._start, this._end].filter(drawer => drawer && !drawer.disableClose && this._drawerHasBackdrop(drawer)).forEach(drawer => drawer._closeViaBackdropClick());
    }
    _isShowingBackdrop() {
      return this._isDrawerOpen(this._start) && this._drawerHasBackdrop(this._start) || this._isDrawerOpen(this._end) && this._drawerHasBackdrop(this._end);
    }
    _isDrawerOpen(drawer) {
      return drawer != null && drawer.opened;
    }
    // Whether argument drawer should have a backdrop when it opens
    _drawerHasBackdrop(drawer) {
      if (this._backdropOverride == null) {
        return !!drawer && drawer.mode !== 'side';
      }
      return this._backdropOverride;
    }
    static {
      this.ɵfac = function MatDrawerContainer_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || MatDrawerContainer)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_18__.Directionality, 8), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_2__.ViewportRuler), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](MAT_DRAWER_DEFAULT_AUTOSIZE), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ANIMATION_MODULE_TYPE, 8));
      };
    }
    static {
      this.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: MatDrawerContainer,
        selectors: [["mat-drawer-container"]],
        contentQueries: function MatDrawerContainer_ContentQueries(rf, ctx, dirIndex) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, MatDrawerContent, 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, MatDrawer, 5);
          }
          if (rf & 2) {
            let _t;
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx._content = _t.first);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx._allDrawers = _t);
          }
        },
        viewQuery: function MatDrawerContainer_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](MatDrawerContent, 5);
          }
          if (rf & 2) {
            let _t;
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx._userContent = _t.first);
          }
        },
        hostAttrs: [1, "mat-drawer-container"],
        hostVars: 2,
        hostBindings: function MatDrawerContainer_HostBindings(rf, ctx) {
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("mat-drawer-container-explicit-backdrop", ctx._backdropOverride);
          }
        },
        inputs: {
          autosize: "autosize",
          hasBackdrop: "hasBackdrop"
        },
        outputs: {
          backdropClick: "backdropClick"
        },
        exportAs: ["matDrawerContainer"],
        standalone: true,
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([{
          provide: MAT_DRAWER_CONTAINER,
          useExisting: MatDrawerContainer
        }]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵStandaloneFeature"]],
        ngContentSelectors: _c3,
        decls: 4,
        vars: 2,
        consts: [[1, "mat-drawer-backdrop", 3, "mat-drawer-shown"], [1, "mat-drawer-backdrop", 3, "click"]],
        template: function MatDrawerContainer_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"](_c2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, MatDrawerContainer_Conditional_0_Template, 1, 2, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](2, 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, MatDrawerContainer_Conditional_3_Template, 2, 0, "mat-drawer-content");
          }
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵconditional"](ctx.hasBackdrop ? 0 : -1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵconditional"](!ctx._content ? 3 : -1);
          }
        },
        dependencies: [MatDrawerContent],
        styles: [".mat-drawer-container{position:relative;z-index:1;color:var(--mat-sidenav-content-text-color, var(--mat-app-on-background));background-color:var(--mat-sidenav-content-background-color, var(--mat-app-background));box-sizing:border-box;-webkit-overflow-scrolling:touch;display:block;overflow:hidden}.mat-drawer-container[fullscreen]{top:0;left:0;right:0;bottom:0;position:absolute}.mat-drawer-container[fullscreen].mat-drawer-container-has-open{overflow:hidden}.mat-drawer-container.mat-drawer-container-explicit-backdrop .mat-drawer-side{z-index:3}.mat-drawer-container.ng-animate-disabled .mat-drawer-backdrop,.mat-drawer-container.ng-animate-disabled .mat-drawer-content,.ng-animate-disabled .mat-drawer-container .mat-drawer-backdrop,.ng-animate-disabled .mat-drawer-container .mat-drawer-content{transition:none}.mat-drawer-backdrop{top:0;left:0;right:0;bottom:0;position:absolute;display:block;z-index:3;visibility:hidden}.mat-drawer-backdrop.mat-drawer-shown{visibility:visible;background-color:var(--mat-sidenav-scrim-color)}.mat-drawer-transition .mat-drawer-backdrop{transition-duration:400ms;transition-timing-function:cubic-bezier(0.25, 0.8, 0.25, 1);transition-property:background-color,visibility}.cdk-high-contrast-active .mat-drawer-backdrop{opacity:.5}.mat-drawer-content{position:relative;z-index:1;display:block;height:100%;overflow:auto}.mat-drawer-transition .mat-drawer-content{transition-duration:400ms;transition-timing-function:cubic-bezier(0.25, 0.8, 0.25, 1);transition-property:transform,margin-left,margin-right}.mat-drawer{position:relative;z-index:4;color:var(--mat-sidenav-container-text-color, var(--mat-app-on-surface-variant));box-shadow:var(--mat-sidenav-container-elevation-shadow);background-color:var(--mat-sidenav-container-background-color, var(--mat-app-surface));border-top-right-radius:var(--mat-sidenav-container-shape, var(--mat-app-corner-large));border-bottom-right-radius:var(--mat-sidenav-container-shape, var(--mat-app-corner-large));width:var(--mat-sidenav-container-width);display:block;position:absolute;top:0;bottom:0;z-index:3;outline:0;box-sizing:border-box;overflow-y:auto;transform:translate3d(-100%, 0, 0)}.cdk-high-contrast-active .mat-drawer,.cdk-high-contrast-active [dir=rtl] .mat-drawer.mat-drawer-end{border-right:solid 1px currentColor}.cdk-high-contrast-active [dir=rtl] .mat-drawer,.cdk-high-contrast-active .mat-drawer.mat-drawer-end{border-left:solid 1px currentColor;border-right:none}.mat-drawer.mat-drawer-side{z-index:2}.mat-drawer.mat-drawer-end{right:0;transform:translate3d(100%, 0, 0);border-top-left-radius:var(--mat-sidenav-container-shape, var(--mat-app-corner-large));border-bottom-left-radius:var(--mat-sidenav-container-shape, var(--mat-app-corner-large));border-top-right-radius:0;border-bottom-right-radius:0}[dir=rtl] .mat-drawer{border-top-left-radius:var(--mat-sidenav-container-shape, var(--mat-app-corner-large));border-bottom-left-radius:var(--mat-sidenav-container-shape, var(--mat-app-corner-large));border-top-right-radius:0;border-bottom-right-radius:0;transform:translate3d(100%, 0, 0)}[dir=rtl] .mat-drawer.mat-drawer-end{border-top-right-radius:var(--mat-sidenav-container-shape, var(--mat-app-corner-large));border-bottom-right-radius:var(--mat-sidenav-container-shape, var(--mat-app-corner-large));border-top-left-radius:0;border-bottom-left-radius:0;left:0;right:auto;transform:translate3d(-100%, 0, 0)}.mat-drawer[style*=\"visibility: hidden\"]{display:none}.mat-drawer-side{box-shadow:none;border-right-color:var(--mat-sidenav-container-divider-color);border-right-width:1px;border-right-style:solid}.mat-drawer-side.mat-drawer-end{border-left-color:var(--mat-sidenav-container-divider-color);border-left-width:1px;border-left-style:solid;border-right:none}[dir=rtl] .mat-drawer-side{border-left-color:var(--mat-sidenav-container-divider-color);border-left-width:1px;border-left-style:solid;border-right:none}[dir=rtl] .mat-drawer-side.mat-drawer-end{border-right-color:var(--mat-sidenav-container-divider-color);border-right-width:1px;border-right-style:solid;border-left:none}.mat-drawer-inner-container{width:100%;height:100%;overflow:auto;-webkit-overflow-scrolling:touch}.mat-sidenav-fixed{position:fixed}"],
        encapsulation: 2,
        changeDetection: 0
      });
    }
  }
  return MatDrawerContainer;
})();
/*#__PURE__*/(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
let MatSidenavContent = /*#__PURE__*/(() => {
  class MatSidenavContent extends MatDrawerContent {
    constructor(changeDetectorRef, container, elementRef, scrollDispatcher, ngZone) {
      super(changeDetectorRef, container, elementRef, scrollDispatcher, ngZone);
    }
    static {
      this.ɵfac = function MatSidenavContent_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || MatSidenavContent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"]((0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(() => MatSidenavContainer)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_2__.ScrollDispatcher), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone));
      };
    }
    static {
      this.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: MatSidenavContent,
        selectors: [["mat-sidenav-content"]],
        hostAttrs: [1, "mat-drawer-content", "mat-sidenav-content"],
        hostVars: 4,
        hostBindings: function MatSidenavContent_HostBindings(rf, ctx) {
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("margin-left", ctx._container._contentMargins.left, "px")("margin-right", ctx._container._contentMargins.right, "px");
          }
        },
        standalone: true,
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([{
          provide: _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_2__.CdkScrollable,
          useExisting: MatSidenavContent
        }]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵStandaloneFeature"]],
        ngContentSelectors: _c0,
        decls: 1,
        vars: 0,
        template: function MatSidenavContent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](0);
          }
        },
        encapsulation: 2,
        changeDetection: 0
      });
    }
  }
  return MatSidenavContent;
})();
/*#__PURE__*/(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
let MatSidenav = /*#__PURE__*/(() => {
  class MatSidenav extends MatDrawer {
    constructor() {
      super(...arguments);
      this._fixedInViewport = false;
      this._fixedTopGap = 0;
      this._fixedBottomGap = 0;
    }
    /** Whether the sidenav is fixed in the viewport. */
    get fixedInViewport() {
      return this._fixedInViewport;
    }
    set fixedInViewport(value) {
      this._fixedInViewport = (0,_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_3__.coerceBooleanProperty)(value);
    }
    /**
     * The gap between the top of the sidenav and the top of the viewport when the sidenav is in fixed
     * mode.
     */
    get fixedTopGap() {
      return this._fixedTopGap;
    }
    set fixedTopGap(value) {
      this._fixedTopGap = (0,_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_3__.coerceNumberProperty)(value);
    }
    /**
     * The gap between the bottom of the sidenav and the bottom of the viewport when the sidenav is in
     * fixed mode.
     */
    get fixedBottomGap() {
      return this._fixedBottomGap;
    }
    set fixedBottomGap(value) {
      this._fixedBottomGap = (0,_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_3__.coerceNumberProperty)(value);
    }
    static {
      this.ɵfac = /* @__PURE__ */(() => {
        let ɵMatSidenav_BaseFactory;
        return function MatSidenav_Factory(__ngFactoryType__) {
          return (ɵMatSidenav_BaseFactory || (ɵMatSidenav_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetInheritedFactory"](MatSidenav)))(__ngFactoryType__ || MatSidenav);
        };
      })();
    }
    static {
      this.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: MatSidenav,
        selectors: [["mat-sidenav"]],
        hostAttrs: ["tabIndex", "-1", 1, "mat-drawer", "mat-sidenav"],
        hostVars: 17,
        hostBindings: function MatSidenav_HostBindings(rf, ctx) {
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("align", null);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("top", ctx.fixedInViewport ? ctx.fixedTopGap : null, "px")("bottom", ctx.fixedInViewport ? ctx.fixedBottomGap : null, "px");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("mat-drawer-end", ctx.position === "end")("mat-drawer-over", ctx.mode === "over")("mat-drawer-push", ctx.mode === "push")("mat-drawer-side", ctx.mode === "side")("mat-drawer-opened", ctx.opened)("mat-sidenav-fixed", ctx.fixedInViewport);
          }
        },
        inputs: {
          fixedInViewport: "fixedInViewport",
          fixedTopGap: "fixedTopGap",
          fixedBottomGap: "fixedBottomGap"
        },
        exportAs: ["matSidenav"],
        standalone: true,
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵStandaloneFeature"]],
        ngContentSelectors: _c0,
        decls: 3,
        vars: 0,
        consts: [["content", ""], ["cdkScrollable", "", 1, "mat-drawer-inner-container"]],
        template: function MatSidenav_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1, 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
        },
        dependencies: [_angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_2__.CdkScrollable],
        encapsulation: 2,
        data: {
          animation: [matDrawerAnimations.transformDrawer]
        },
        changeDetection: 0
      });
    }
  }
  return MatSidenav;
})();
/*#__PURE__*/(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
let MatSidenavContainer = /*#__PURE__*/(() => {
  class MatSidenavContainer extends MatDrawerContainer {
    constructor() {
      super(...arguments);
      this._allDrawers = undefined;
      // We need an initializer here to avoid a TS error.
      this._content = undefined;
    }
    static {
      this.ɵfac = /* @__PURE__ */(() => {
        let ɵMatSidenavContainer_BaseFactory;
        return function MatSidenavContainer_Factory(__ngFactoryType__) {
          return (ɵMatSidenavContainer_BaseFactory || (ɵMatSidenavContainer_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetInheritedFactory"](MatSidenavContainer)))(__ngFactoryType__ || MatSidenavContainer);
        };
      })();
    }
    static {
      this.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: MatSidenavContainer,
        selectors: [["mat-sidenav-container"]],
        contentQueries: function MatSidenavContainer_ContentQueries(rf, ctx, dirIndex) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, MatSidenavContent, 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, MatSidenav, 5);
          }
          if (rf & 2) {
            let _t;
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx._content = _t.first);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx._allDrawers = _t);
          }
        },
        hostAttrs: [1, "mat-drawer-container", "mat-sidenav-container"],
        hostVars: 2,
        hostBindings: function MatSidenavContainer_HostBindings(rf, ctx) {
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("mat-drawer-container-explicit-backdrop", ctx._backdropOverride);
          }
        },
        exportAs: ["matSidenavContainer"],
        standalone: true,
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([{
          provide: MAT_DRAWER_CONTAINER,
          useExisting: MatSidenavContainer
        }]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵStandaloneFeature"]],
        ngContentSelectors: _c5,
        decls: 4,
        vars: 2,
        consts: [[1, "mat-drawer-backdrop", 3, "mat-drawer-shown"], [1, "mat-drawer-backdrop", 3, "click"]],
        template: function MatSidenavContainer_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"](_c4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, MatSidenavContainer_Conditional_0_Template, 1, 2, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](2, 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, MatSidenavContainer_Conditional_3_Template, 2, 0, "mat-sidenav-content");
          }
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵconditional"](ctx.hasBackdrop ? 0 : -1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵconditional"](!ctx._content ? 3 : -1);
          }
        },
        dependencies: [MatSidenavContent],
        styles: [_c6],
        encapsulation: 2,
        changeDetection: 0
      });
    }
  }
  return MatSidenavContainer;
})();
/*#__PURE__*/(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
let MatSidenavModule = /*#__PURE__*/(() => {
  class MatSidenavModule {
    static {
      this.ɵfac = function MatSidenavModule_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || MatSidenavModule)();
      };
    }
    static {
      this.ɵmod = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: MatSidenavModule
      });
    }
    static {
      this.ɵinj = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        imports: [_angular_material_core__WEBPACK_IMPORTED_MODULE_19__.MatCommonModule, _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_2__.CdkScrollableModule, _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_2__.CdkScrollableModule, _angular_material_core__WEBPACK_IMPORTED_MODULE_19__.MatCommonModule]
      });
    }
  }
  return MatSidenavModule;
})();
/*#__PURE__*/(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();

/**
 * Generated bundle index. Do not edit.
 */



/***/ }),

/***/ 9552:
/*!*************************************************************!*\
  !*** ./node_modules/@angular/material/fesm2022/toolbar.mjs ***!
  \*************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MatToolbar: () => (/* binding */ MatToolbar),
/* harmony export */   MatToolbarModule: () => (/* binding */ MatToolbarModule),
/* harmony export */   MatToolbarRow: () => (/* binding */ MatToolbarRow),
/* harmony export */   throwToolbarMixedModesError: () => (/* binding */ throwToolbarMixedModesError)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/core */ 4646);
/* harmony import */ var _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/cdk/platform */ 7699);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 316);





const _c0 = ["*", [["mat-toolbar-row"]]];
const _c1 = ["*", "mat-toolbar-row"];
let MatToolbarRow = /*#__PURE__*/(() => {
  class MatToolbarRow {
    static {
      this.ɵfac = function MatToolbarRow_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || MatToolbarRow)();
      };
    }
    static {
      this.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
        type: MatToolbarRow,
        selectors: [["mat-toolbar-row"]],
        hostAttrs: [1, "mat-toolbar-row"],
        exportAs: ["matToolbarRow"],
        standalone: true
      });
    }
  }
  return MatToolbarRow;
})();
/*#__PURE__*/(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
let MatToolbar = /*#__PURE__*/(() => {
  class MatToolbar {
    constructor(_elementRef, _platform, document) {
      this._elementRef = _elementRef;
      this._platform = _platform;
      // TODO: make the document a required param when doing breaking changes.
      this._document = document;
    }
    ngAfterViewInit() {
      if (this._platform.isBrowser) {
        this._checkToolbarMixedModes();
        this._toolbarRows.changes.subscribe(() => this._checkToolbarMixedModes());
      }
    }
    /**
     * Throws an exception when developers are attempting to combine the different toolbar row modes.
     */
    _checkToolbarMixedModes() {
      if (this._toolbarRows.length && (typeof ngDevMode === 'undefined' || ngDevMode)) {
        // Check if there are any other DOM nodes that can display content but aren't inside of
        // a <mat-toolbar-row> element.
        const isCombinedUsage = Array.from(this._elementRef.nativeElement.childNodes).filter(node => !(node.classList && node.classList.contains('mat-toolbar-row'))).filter(node => node.nodeType !== (this._document ? this._document.COMMENT_NODE : 8)).some(node => !!(node.textContent && node.textContent.trim()));
        if (isCombinedUsage) {
          throwToolbarMixedModesError();
        }
      }
    }
    static {
      this.ɵfac = function MatToolbar_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || MatToolbar)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_1__.Platform), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_2__.DOCUMENT));
      };
    }
    static {
      this.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: MatToolbar,
        selectors: [["mat-toolbar"]],
        contentQueries: function MatToolbar_ContentQueries(rf, ctx, dirIndex) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, MatToolbarRow, 5);
          }
          if (rf & 2) {
            let _t;
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx._toolbarRows = _t);
          }
        },
        hostAttrs: [1, "mat-toolbar"],
        hostVars: 6,
        hostBindings: function MatToolbar_HostBindings(rf, ctx) {
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx.color ? "mat-" + ctx.color : "");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("mat-toolbar-multiple-rows", ctx._toolbarRows.length > 0)("mat-toolbar-single-row", ctx._toolbarRows.length === 0);
          }
        },
        inputs: {
          color: "color"
        },
        exportAs: ["matToolbar"],
        standalone: true,
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵStandaloneFeature"]],
        ngContentSelectors: _c1,
        decls: 2,
        vars: 0,
        template: function MatToolbar_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"](_c0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](1, 1);
          }
        },
        styles: [".mat-toolbar{background:var(--mat-toolbar-container-background-color, var(--mat-app-surface));color:var(--mat-toolbar-container-text-color, var(--mat-app-on-surface))}.mat-toolbar,.mat-toolbar h1,.mat-toolbar h2,.mat-toolbar h3,.mat-toolbar h4,.mat-toolbar h5,.mat-toolbar h6{font-family:var(--mat-toolbar-title-text-font, var(--mat-app-title-large-font));font-size:var(--mat-toolbar-title-text-size, var(--mat-app-title-large-size));line-height:var(--mat-toolbar-title-text-line-height, var(--mat-app-title-large-line-height));font-weight:var(--mat-toolbar-title-text-weight, var(--mat-app-title-large-weight));letter-spacing:var(--mat-toolbar-title-text-tracking, var(--mat-app-title-large-tracking));margin:0}.cdk-high-contrast-active .mat-toolbar{outline:solid 1px}.mat-toolbar .mat-form-field-underline,.mat-toolbar .mat-form-field-ripple,.mat-toolbar .mat-focused .mat-form-field-ripple{background-color:currentColor}.mat-toolbar .mat-form-field-label,.mat-toolbar .mat-focused .mat-form-field-label,.mat-toolbar .mat-select-value,.mat-toolbar .mat-select-arrow,.mat-toolbar .mat-form-field.mat-focused .mat-select-arrow{color:inherit}.mat-toolbar .mat-input-element{caret-color:currentColor}.mat-toolbar .mat-mdc-button-base.mat-mdc-button-base.mat-unthemed{--mdc-text-button-label-text-color:var(--mat-toolbar-container-text-color, var(--mat-app-on-surface));--mdc-outlined-button-label-text-color:var(--mat-toolbar-container-text-color, var(--mat-app-on-surface))}.mat-toolbar-row,.mat-toolbar-single-row{display:flex;box-sizing:border-box;padding:0 16px;width:100%;flex-direction:row;align-items:center;white-space:nowrap;height:var(--mat-toolbar-standard-height)}@media(max-width: 599px){.mat-toolbar-row,.mat-toolbar-single-row{height:var(--mat-toolbar-mobile-height)}}.mat-toolbar-multiple-rows{display:flex;box-sizing:border-box;flex-direction:column;width:100%;min-height:var(--mat-toolbar-standard-height)}@media(max-width: 599px){.mat-toolbar-multiple-rows{min-height:var(--mat-toolbar-mobile-height)}}"],
        encapsulation: 2,
        changeDetection: 0
      });
    }
  }
  return MatToolbar;
})();
/*#__PURE__*/(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
/**
 * Throws an exception when attempting to combine the different toolbar row modes.
 * @docs-private
 */
function throwToolbarMixedModesError() {
  throw Error('MatToolbar: Attempting to combine different toolbar modes. ' + 'Either specify multiple `<mat-toolbar-row>` elements explicitly or just place content ' + 'inside of a `<mat-toolbar>` for a single row.');
}
let MatToolbarModule = /*#__PURE__*/(() => {
  class MatToolbarModule {
    static {
      this.ɵfac = function MatToolbarModule_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || MatToolbarModule)();
      };
    }
    static {
      this.ɵmod = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: MatToolbarModule
      });
    }
    static {
      this.ɵinj = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        imports: [_angular_material_core__WEBPACK_IMPORTED_MODULE_3__.MatCommonModule, _angular_material_core__WEBPACK_IMPORTED_MODULE_3__.MatCommonModule]
      });
    }
  }
  return MatToolbarModule;
})();
/*#__PURE__*/(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();

/**
 * Generated bundle index. Do not edit.
 */



/***/ })

}]);
//# sourceMappingURL=983.js.map