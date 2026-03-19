"use strict";
(self["webpackChunkclient"] = self["webpackChunkclient"] || []).push([[199],{

/***/ 5199:
/*!********************************************************!*\
  !*** ./src/app/pages/dashboard/dashboard.component.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DashboardComponent: () => (/* binding */ DashboardComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/card */ 3777);
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/progress-spinner */ 1134);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 2510);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _services_rooms_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../services/rooms.service */ 6526);









function DashboardComponent_div_24_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "mat-progress-spinner", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
function DashboardComponent_p_25_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r0.roomsError);
  }
}
function DashboardComponent_div_26_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 10)(1, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "Descripci\u00F3n");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", ctx_r0.cheapestRoom.precioPorNoche, " HNL/noche");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r0.cheapestRoom.descripcion || "Sin descripci\u00F3n");
  }
}
let DashboardComponent = /*#__PURE__*/(() => {
  class DashboardComponent {
    constructor(roomsService) {
      this.roomsService = roomsService;
      this.currentTime = new Date();
      this.clockTimer = null;
      this.roomsLoading = false;
      this.roomsError = '';
      this.cheapestRoom = null;
      this.subs = new rxjs__WEBPACK_IMPORTED_MODULE_2__.Subscription();
    }
    ngOnInit() {
      this.clockTimer = window.setInterval(() => {
        this.currentTime = new Date();
      }, 1000);
      this.loadCheapestRoom();
    }
    ngOnDestroy() {
      if (this.clockTimer) window.clearInterval(this.clockTimer);
      this.subs.unsubscribe();
    }
    formatTime(d) {
      try {
        return d.toLocaleTimeString('es-HN', {
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit'
        });
      } catch {
        return d.toLocaleTimeString();
      }
    }
    loadCheapestRoom() {
      this.roomsLoading = true;
      this.roomsError = '';
      this.cheapestRoom = null;
      // 0 = Disponible (según RoomStatus del backend)
      const DISPONIBLE = 0;
      this.subs.add(this.roomsService.getRooms().subscribe({
        next: rooms => {
          const disponibles = rooms.filter(r => Number(r.estado) === DISPONIBLE);
          const pool = disponibles.length > 0 ? disponibles : rooms;
          const cheapest = pool.slice().sort((a, b) => Number(a.precioPorNoche) - Number(b.precioPorNoche))[0] ?? null;
          this.cheapestRoom = cheapest;
          this.roomsLoading = false;
        },
        error: err => {
          this.roomsLoading = false;
          this.roomsError = err?.error?.message ?? err?.message ?? 'No se pudieron cargar las habitaciones.';
        }
      }));
    }
    static {
      this.ɵfac = function DashboardComponent_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || DashboardComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_rooms_service__WEBPACK_IMPORTED_MODULE_0__.RoomsService));
      };
    }
    static {
      this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: DashboardComponent,
        selectors: [["app-dashboard"]],
        standalone: true,
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵStandaloneFeature"]],
        decls: 27,
        vars: 4,
        consts: [[1, "dashboard-grid"], [1, "half-card"], [1, "time-value"], [1, "time-subtitle"], ["class", "loading", 4, "ngIf"], ["class", "error-msg", 4, "ngIf"], ["class", "room", 4, "ngIf"], [1, "loading"], ["diameter", "40", "mode", "indeterminate"], [1, "error-msg"], [1, "room"], [1, "room-price"], [1, "room-desc-title"], [1, "room-desc"]],
        template: function DashboardComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-card")(1, "mat-card-header")(2, "mat-card-title");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Dashboard");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "mat-card-subtitle");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "Vista general del sistema");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "mat-card-content")(7, "div", 0)(8, "mat-card", 1)(9, "mat-card-header")(10, "mat-card-title");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "Hora actual");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "mat-card-content")(13, "div", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "div", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, "Actualizado en tiempo real");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "mat-card", 1)(18, "mat-card-header")(19, "mat-card-title");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20, "Habitaci\u00F3n m\u00E1s econ\u00F3mica");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "mat-card-subtitle");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22, "Disponible en el sistema");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "mat-card-content");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](24, DashboardComponent_div_24_Template, 2, 0, "div", 4)(25, DashboardComponent_p_25_Template, 2, 1, "p", 5)(26, DashboardComponent_div_26_Template, 7, 2, "div", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
          }
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](14);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.formatTime(ctx.currentTime));
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](10);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.roomsLoading);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.roomsLoading && ctx.roomsError);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.roomsLoading && !ctx.roomsError && ctx.cheapestRoom);
          }
        },
        dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, _angular_material_card__WEBPACK_IMPORTED_MODULE_4__.MatCardModule, _angular_material_card__WEBPACK_IMPORTED_MODULE_4__.MatCard, _angular_material_card__WEBPACK_IMPORTED_MODULE_4__.MatCardContent, _angular_material_card__WEBPACK_IMPORTED_MODULE_4__.MatCardHeader, _angular_material_card__WEBPACK_IMPORTED_MODULE_4__.MatCardSubtitle, _angular_material_card__WEBPACK_IMPORTED_MODULE_4__.MatCardTitle, _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_5__.MatProgressSpinnerModule, _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_5__.MatProgressSpinner],
        styles: [".dashboard-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(2, minmax(0, 1fr));\n  gap: 16px;\n  align-items: stretch;\n}\n\n.half-card[_ngcontent-%COMP%] {\n  width: 100%;\n  min-width: 0;\n}\n\n.time-value[_ngcontent-%COMP%] {\n  font-size: 34px;\n  font-weight: 700;\n  letter-spacing: 0.2px;\n}\n\n.time-subtitle[_ngcontent-%COMP%] {\n  margin-top: 6px;\n  opacity: 0.8;\n  font-size: 12px;\n}\n\n.loading[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 18px 0;\n}\n\n.error-msg[_ngcontent-%COMP%] {\n  color: #c62828;\n  margin: 0;\n}\n\n.weather-temp[_ngcontent-%COMP%] {\n  font-size: 34px;\n  font-weight: 700;\n}\n\n.weather-row[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 8px;\n  margin-top: 6px;\n}\n\n.weather-label[_ngcontent-%COMP%] {\n  opacity: 0.8;\n  font-size: 13px;\n}\n\n.weather-value[_ngcontent-%COMP%] {\n  font-size: 13px;\n  font-weight: 500;\n}\n\n.weather-updated[_ngcontent-%COMP%] {\n  margin-top: 10px;\n  opacity: 0.8;\n  font-size: 12px;\n}\n\n.room-price[_ngcontent-%COMP%] {\n  font-size: 30px;\n  font-weight: 700;\n}\n\n.room-desc-title[_ngcontent-%COMP%] {\n  margin-top: 10px;\n  opacity: 0.8;\n  font-size: 13px;\n}\n\n.room-desc[_ngcontent-%COMP%] {\n  margin-top: 4px;\n  font-size: 13px;\n  opacity: 0.95;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvcGFnZXMvZGFzaGJvYXJkL2Rhc2hib2FyZC5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLi8uLi8uLi8uLi8uLi9Qcm9ncmElMjBXZWIvUHJveWVjdG8lMjBmaW5hbC90ZXN0LUFjdGl2aWRhZC1zNC9jbGllbnQvc3JjL2FwcC9wYWdlcy9kYXNoYm9hcmQvZGFzaGJvYXJkLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDTTtFQUNFLGFBQUE7RUFDQSxnREFBQTtFQUNBLFNBQUE7RUFDQSxvQkFBQTtBQ0FSOztBREdNO0VBQ0UsV0FBQTtFQUNBLFlBQUE7QUNBUjs7QURHTTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtFQUNBLHFCQUFBO0FDQVI7O0FER007RUFDRSxlQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7QUNBUjs7QURHTTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsZUFBQTtBQ0FSOztBREdNO0VBQ0UsY0FBQTtFQUNBLFNBQUE7QUNBUjs7QURHTTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtBQ0FSOztBREdNO0VBQ0UsYUFBQTtFQUNBLFFBQUE7RUFDQSxlQUFBO0FDQVI7O0FER007RUFDRSxZQUFBO0VBQ0EsZUFBQTtBQ0FSOztBREdNO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0FDQVI7O0FER007RUFDRSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0FDQVI7O0FER007RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7QUNBUjs7QURHTTtFQUNFLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7QUNBUjs7QURHTTtFQUNFLGVBQUE7RUFDQSxlQUFBO0VBQ0EsYUFBQTtBQ0FSIiwic291cmNlc0NvbnRlbnQiOlsiXG4gICAgICAuZGFzaGJvYXJkLWdyaWQge1xuICAgICAgICBkaXNwbGF5OiBncmlkO1xuICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgyLCBtaW5tYXgoMCwgMWZyKSk7XG4gICAgICAgIGdhcDogMTZweDtcbiAgICAgICAgYWxpZ24taXRlbXM6IHN0cmV0Y2g7XG4gICAgICB9XG5cbiAgICAgIC5oYWxmLWNhcmQge1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgbWluLXdpZHRoOiAwO1xuICAgICAgfVxuXG4gICAgICAudGltZS12YWx1ZSB7XG4gICAgICAgIGZvbnQtc2l6ZTogMzRweDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDAuMnB4O1xuICAgICAgfVxuXG4gICAgICAudGltZS1zdWJ0aXRsZSB7XG4gICAgICAgIG1hcmdpbi10b3A6IDZweDtcbiAgICAgICAgb3BhY2l0eTogMC44O1xuICAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICB9XG5cbiAgICAgIC5sb2FkaW5nIHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgIHBhZGRpbmc6IDE4cHggMDtcbiAgICAgIH1cblxuICAgICAgLmVycm9yLW1zZyB7XG4gICAgICAgIGNvbG9yOiAjYzYyODI4O1xuICAgICAgICBtYXJnaW46IDA7XG4gICAgICB9XG5cbiAgICAgIC53ZWF0aGVyLXRlbXAge1xuICAgICAgICBmb250LXNpemU6IDM0cHg7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgICB9XG5cbiAgICAgIC53ZWF0aGVyLXJvdyB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGdhcDogOHB4O1xuICAgICAgICBtYXJnaW4tdG9wOiA2cHg7XG4gICAgICB9XG5cbiAgICAgIC53ZWF0aGVyLWxhYmVsIHtcbiAgICAgICAgb3BhY2l0eTogMC44O1xuICAgICAgICBmb250LXNpemU6IDEzcHg7XG4gICAgICB9XG5cbiAgICAgIC53ZWF0aGVyLXZhbHVlIHtcbiAgICAgICAgZm9udC1zaXplOiAxM3B4O1xuICAgICAgICBmb250LXdlaWdodDogNTAwO1xuICAgICAgfVxuXG4gICAgICAud2VhdGhlci11cGRhdGVkIHtcbiAgICAgICAgbWFyZ2luLXRvcDogMTBweDtcbiAgICAgICAgb3BhY2l0eTogMC44O1xuICAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICB9XG5cbiAgICAgIC5yb29tLXByaWNlIHtcbiAgICAgICAgZm9udC1zaXplOiAzMHB4O1xuICAgICAgICBmb250LXdlaWdodDogNzAwO1xuICAgICAgfVxuXG4gICAgICAucm9vbS1kZXNjLXRpdGxlIHtcbiAgICAgICAgbWFyZ2luLXRvcDogMTBweDtcbiAgICAgICAgb3BhY2l0eTogMC44O1xuICAgICAgICBmb250LXNpemU6IDEzcHg7XG4gICAgICB9XG5cbiAgICAgIC5yb29tLWRlc2Mge1xuICAgICAgICBtYXJnaW4tdG9wOiA0cHg7XG4gICAgICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgICAgICAgb3BhY2l0eTogMC45NTtcbiAgICAgIH1cbiAgICAiLCIuZGFzaGJvYXJkLWdyaWQge1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgyLCBtaW5tYXgoMCwgMWZyKSk7XG4gIGdhcDogMTZweDtcbiAgYWxpZ24taXRlbXM6IHN0cmV0Y2g7XG59XG5cbi5oYWxmLWNhcmQge1xuICB3aWR0aDogMTAwJTtcbiAgbWluLXdpZHRoOiAwO1xufVxuXG4udGltZS12YWx1ZSB7XG4gIGZvbnQtc2l6ZTogMzRweDtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMnB4O1xufVxuXG4udGltZS1zdWJ0aXRsZSB7XG4gIG1hcmdpbi10b3A6IDZweDtcbiAgb3BhY2l0eTogMC44O1xuICBmb250LXNpemU6IDEycHg7XG59XG5cbi5sb2FkaW5nIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIHBhZGRpbmc6IDE4cHggMDtcbn1cblxuLmVycm9yLW1zZyB7XG4gIGNvbG9yOiAjYzYyODI4O1xuICBtYXJnaW46IDA7XG59XG5cbi53ZWF0aGVyLXRlbXAge1xuICBmb250LXNpemU6IDM0cHg7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG59XG5cbi53ZWF0aGVyLXJvdyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGdhcDogOHB4O1xuICBtYXJnaW4tdG9wOiA2cHg7XG59XG5cbi53ZWF0aGVyLWxhYmVsIHtcbiAgb3BhY2l0eTogMC44O1xuICBmb250LXNpemU6IDEzcHg7XG59XG5cbi53ZWF0aGVyLXZhbHVlIHtcbiAgZm9udC1zaXplOiAxM3B4O1xuICBmb250LXdlaWdodDogNTAwO1xufVxuXG4ud2VhdGhlci11cGRhdGVkIHtcbiAgbWFyZ2luLXRvcDogMTBweDtcbiAgb3BhY2l0eTogMC44O1xuICBmb250LXNpemU6IDEycHg7XG59XG5cbi5yb29tLXByaWNlIHtcbiAgZm9udC1zaXplOiAzMHB4O1xuICBmb250LXdlaWdodDogNzAwO1xufVxuXG4ucm9vbS1kZXNjLXRpdGxlIHtcbiAgbWFyZ2luLXRvcDogMTBweDtcbiAgb3BhY2l0eTogMC44O1xuICBmb250LXNpemU6IDEzcHg7XG59XG5cbi5yb29tLWRlc2Mge1xuICBtYXJnaW4tdG9wOiA0cHg7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgb3BhY2l0eTogMC45NTtcbn0iXSwic291cmNlUm9vdCI6IiJ9 */"]
      });
    }
  }
  return DashboardComponent;
})();

/***/ }),

/***/ 6526:
/*!*******************************************!*\
  !*** ./src/app/services/rooms.service.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   RoomsService: () => (/* binding */ RoomsService)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ 6443);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../environments/environment */ 5312);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7580);




let RoomsService = /*#__PURE__*/(() => {
  class RoomsService {
    constructor(http) {
      this.http = http;
      this.apiUrl = `${_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiUrl}/rooms`;
      this.storageKey = 'probook_user';
    }
    getRooms() {
      const token = this.getToken();
      const headers = token ? new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpHeaders({
        Authorization: `Bearer ${token}`
      }) : undefined;
      return this.http.get(this.apiUrl, {
        headers
      });
    }
    createRoom(payload) {
      const token = this.getToken();
      const headers = token ? new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpHeaders({
        Authorization: `Bearer ${token}`
      }) : undefined;
      return this.http.post(this.apiUrl, payload, {
        headers
      });
    }
    updateRoom(id, payload) {
      const token = this.getToken();
      const headers = token ? new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpHeaders({
        Authorization: `Bearer ${token}`
      }) : undefined;
      return this.http.put(`${this.apiUrl}/${id}`, payload, {
        headers
      });
    }
    deleteRoom(id) {
      const token = this.getToken();
      const headers = token ? new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpHeaders({
        Authorization: `Bearer ${token}`
      }) : undefined;
      return this.http.delete(`${this.apiUrl}/${id}`, {
        headers
      });
    }
    getToken() {
      const stored = localStorage.getItem(this.storageKey);
      if (!stored) return null;
      try {
        const user = JSON.parse(stored);
        const rawToken = user?.token ?? user?.Token;
        if (typeof rawToken !== 'string') return null;
        let token = rawToken.trim();
        // Evitar duplicar "Bearer " si el token se guardó ya con prefijo.
        if (token.startsWith('Bearer ')) token = token.slice('Bearer '.length).trim();
        return token || null;
      } catch {
        return null;
      }
    }
    static {
      this.ɵfac = function RoomsService_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || RoomsService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient));
      };
    }
    static {
      this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
        token: RoomsService,
        factory: RoomsService.ɵfac,
        providedIn: 'root'
      });
    }
  }
  return RoomsService;
})();

/***/ })

}]);
//# sourceMappingURL=199.js.map