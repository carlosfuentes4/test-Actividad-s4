"use strict";
(self["webpackChunkclient"] = self["webpackChunkclient"] || []).push([[579],{

/***/ 1579:
/*!****************************************************************************!*\
  !*** ./src/app/pages/reservar-habitacion/reservar-habitacion.component.ts ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ReservarHabitacionComponent: () => (/* binding */ ReservarHabitacionComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/card */ 3777);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/table */ 7697);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/button */ 4175);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/icon */ 3840);
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/progress-spinner */ 1134);
/* harmony import */ var _reservar_reservation_create_dialog_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../reservar/reservation-create-dialog.component */ 4953);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/dialog */ 2587);
/* harmony import */ var _services_rooms_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/rooms.service */ 6526);
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/auth.service */ 4796);

















function ReservarHabitacionComponent_p_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "p", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r0.errorMessage);
  }
}
function ReservarHabitacionComponent_div_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "mat-spinner", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
function ReservarHabitacionComponent_div_9_th_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "th", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "N\u00FAmero");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
function ReservarHabitacionComponent_div_9_td_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "td", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const row_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](row_r2.numeroHabitacion);
  }
}
function ReservarHabitacionComponent_div_9_th_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "th", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Tipo");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
function ReservarHabitacionComponent_div_9_td_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "td", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const row_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](row_r3.tipoHabitacion);
  }
}
function ReservarHabitacionComponent_div_9_th_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "th", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Capacidad");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
function ReservarHabitacionComponent_div_9_td_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "td", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const row_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](row_r4.capacidad);
  }
}
function ReservarHabitacionComponent_div_9_th_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "th", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Precio/Noche");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
function ReservarHabitacionComponent_div_9_td_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "td", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const row_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](row_r5.precioPorNoche);
  }
}
function ReservarHabitacionComponent_div_9_th_15_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "th", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Estado");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
function ReservarHabitacionComponent_div_9_td_16_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "td", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const row_r6 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r0.estadoLabel(row_r6.estado));
  }
}
function ReservarHabitacionComponent_div_9_th_18_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "th", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Descripci\u00F3n");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
function ReservarHabitacionComponent_div_9_td_19_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "td", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const row_r7 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](row_r7.descripcion);
  }
}
function ReservarHabitacionComponent_div_9_th_21_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "th", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Acciones");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
function ReservarHabitacionComponent_div_9_td_22_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "td", 22)(1, "button", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ReservarHabitacionComponent_div_9_td_22_Template_button_click_1_listener() {
      const row_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r8).$implicit;
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r0.openReservarDialog(row_r9));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, "info");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4, " Ver m\u00E1s detalles ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
}
function ReservarHabitacionComponent_div_9_tr_23_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "tr", 24);
  }
}
function ReservarHabitacionComponent_div_9_tr_24_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "tr", 25);
  }
}
function ReservarHabitacionComponent_div_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 8)(1, "table", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](2, 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](3, ReservarHabitacionComponent_div_9_th_3_Template, 2, 0, "th", 11)(4, ReservarHabitacionComponent_div_9_td_4_Template, 2, 1, "td", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](5, 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](6, ReservarHabitacionComponent_div_9_th_6_Template, 2, 0, "th", 11)(7, ReservarHabitacionComponent_div_9_td_7_Template, 2, 1, "td", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](8, 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](9, ReservarHabitacionComponent_div_9_th_9_Template, 2, 0, "th", 11)(10, ReservarHabitacionComponent_div_9_td_10_Template, 2, 1, "td", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](11, 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](12, ReservarHabitacionComponent_div_9_th_12_Template, 2, 0, "th", 11)(13, ReservarHabitacionComponent_div_9_td_13_Template, 2, 1, "td", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](14, 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](15, ReservarHabitacionComponent_div_9_th_15_Template, 2, 0, "th", 11)(16, ReservarHabitacionComponent_div_9_td_16_Template, 2, 1, "td", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](17, 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](18, ReservarHabitacionComponent_div_9_th_18_Template, 2, 0, "th", 11)(19, ReservarHabitacionComponent_div_9_td_19_Template, 2, 1, "td", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](20, 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](21, ReservarHabitacionComponent_div_9_th_21_Template, 2, 0, "th", 11)(22, ReservarHabitacionComponent_div_9_td_22_Template, 5, 0, "td", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](23, ReservarHabitacionComponent_div_9_tr_23_Template, 1, 0, "tr", 19)(24, ReservarHabitacionComponent_div_9_tr_24_Template, 1, 0, "tr", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("dataSource", ctx_r0.dataSource);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](22);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("matHeaderRowDef", ctx_r0.displayedColumns);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("matRowDefColumns", ctx_r0.displayedColumns);
  }
}
function ReservarHabitacionComponent_p_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "p", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " No hay habitaciones disponibles en este momento. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
const ESTADO_DISPONIBLE = 0;
let ReservarHabitacionComponent = /*#__PURE__*/(() => {
  class ReservarHabitacionComponent {
    constructor(dialog, roomsService, authService) {
      this.dialog = dialog;
      this.roomsService = roomsService;
      this.authService = authService;
      this.loading = false;
      this.errorMessage = '';
      this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_4__.MatTableDataSource([]);
      this.displayedColumns = ['numeroHabitacion', 'tipoHabitacion', 'capacidad', 'precioPorNoche', 'estado', 'descripcion', 'acciones'];
    }
    ngOnInit() {
      this.loadRooms();
    }
    loadRooms() {
      this.loading = true;
      this.errorMessage = '';
      this.roomsService.getRooms().subscribe({
        next: rooms => {
          const disponibles = rooms.filter(r => Number(r.estado) === ESTADO_DISPONIBLE);
          this.dataSource.data = disponibles;
          this.loading = false;
        },
        error: err => {
          this.loading = false;
          this.errorMessage = err?.error?.message ?? 'No se pudieron cargar las habitaciones.';
        }
      });
    }
    estadoLabel(estado) {
      switch (estado) {
        case 0:
          return 'Disponible';
        case 1:
          return 'Ocupado';
        case 2:
          return 'En mantenimiento';
        case 3:
          return 'Reservado';
        default:
          return String(estado);
      }
    }
    openReservarDialog(room) {
      const user = this.authService.currentUser();
      if (!user) {
        this.errorMessage = 'Debes iniciar sesión para reservar.';
        return;
      }
      const dialogRef = this.dialog.open(_reservar_reservation_create_dialog_component__WEBPACK_IMPORTED_MODULE_0__.ReservationCreateDialogComponent, {
        width: '900px',
        disableClose: true,
        data: {
          room,
          guest: user
        }
      });
      dialogRef.afterClosed().subscribe(res => {
        if (res) this.loadRooms();
      });
    }
    static {
      this.ɵfac = function ReservarHabitacionComponent_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || ReservarHabitacionComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__.MatDialog), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_services_rooms_service__WEBPACK_IMPORTED_MODULE_1__.RoomsService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_2__.AuthService));
      };
    }
    static {
      this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
        type: ReservarHabitacionComponent,
        selectors: [["app-reservar-habitacion"]],
        standalone: true,
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵStandaloneFeature"]],
        decls: 11,
        vars: 4,
        consts: [[1, "rooms-card"], ["class", "error-msg", 4, "ngIf"], ["class", "loading", 4, "ngIf"], ["class", "table-wrapper", 4, "ngIf"], ["class", "empty-msg", 4, "ngIf"], [1, "error-msg"], [1, "loading"], ["diameter", "40"], [1, "table-wrapper"], ["mat-table", "", 1, "mat-elevation-z1", 3, "dataSource"], ["matColumnDef", "numeroHabitacion"], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "tipoHabitacion"], ["matColumnDef", "capacidad"], ["matColumnDef", "precioPorNoche"], ["matColumnDef", "estado"], ["matColumnDef", "descripcion"], ["matColumnDef", "acciones"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], ["mat-header-cell", ""], ["mat-cell", ""], ["mat-flat-button", "", "color", "primary", "type", "button", 3, "click"], ["mat-header-row", ""], ["mat-row", ""], [1, "empty-msg"]],
        template: function ReservarHabitacionComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-card", 0)(1, "mat-card-header")(2, "mat-card-title");
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, "Reservar");
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "mat-card-subtitle");
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5, "Habitaciones disponibles para reservar");
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "mat-card-content");
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](7, ReservarHabitacionComponent_p_7_Template, 2, 1, "p", 1)(8, ReservarHabitacionComponent_div_8_Template, 2, 0, "div", 2)(9, ReservarHabitacionComponent_div_9_Template, 25, 3, "div", 3)(10, ReservarHabitacionComponent_p_10_Template, 2, 0, "p", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
          }
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](7);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.errorMessage);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.loading);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx.loading && ctx.dataSource.data.length > 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx.loading && ctx.dataSource.data.length === 0);
          }
        },
        dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgIf, _angular_material_card__WEBPACK_IMPORTED_MODULE_7__.MatCardModule, _angular_material_card__WEBPACK_IMPORTED_MODULE_7__.MatCard, _angular_material_card__WEBPACK_IMPORTED_MODULE_7__.MatCardContent, _angular_material_card__WEBPACK_IMPORTED_MODULE_7__.MatCardHeader, _angular_material_card__WEBPACK_IMPORTED_MODULE_7__.MatCardSubtitle, _angular_material_card__WEBPACK_IMPORTED_MODULE_7__.MatCardTitle, _angular_material_table__WEBPACK_IMPORTED_MODULE_4__.MatTableModule, _angular_material_table__WEBPACK_IMPORTED_MODULE_4__.MatTable, _angular_material_table__WEBPACK_IMPORTED_MODULE_4__.MatHeaderCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_4__.MatHeaderRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_4__.MatColumnDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_4__.MatCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_4__.MatRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_4__.MatHeaderCell, _angular_material_table__WEBPACK_IMPORTED_MODULE_4__.MatCell, _angular_material_table__WEBPACK_IMPORTED_MODULE_4__.MatHeaderRow, _angular_material_table__WEBPACK_IMPORTED_MODULE_4__.MatRow, _angular_material_button__WEBPACK_IMPORTED_MODULE_8__.MatButtonModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_8__.MatButton, _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__.MatIconModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__.MatIcon, _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_10__.MatProgressSpinnerModule, _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_10__.MatProgressSpinner],
        styles: [".rooms-card[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.error-msg[_ngcontent-%COMP%] {\n  color: #c62828;\n  margin: 10px 0 0 0;\n}\n\n.loading[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 24px 0;\n}\n\n.table-wrapper[_ngcontent-%COMP%] {\n  overflow: auto;\n}\n\n.empty-msg[_ngcontent-%COMP%] {\n  margin-top: 12px;\n  opacity: 0.8;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvcGFnZXMvcmVzZXJ2YXItaGFiaXRhY2lvbi9yZXNlcnZhci1oYWJpdGFjaW9uLmNvbXBvbmVudC5zY3NzIiwid2VicGFjazovLy4vLi4vLi4vLi4vLi4vUHJvZ3JhJTIwV2ViL1Byb3llY3RvJTIwZmluYWwvdGVzdC1BY3RpdmlkYWQtczQvY2xpZW50L3NyYy9hcHAvcGFnZXMvcmVzZXJ2YXItaGFiaXRhY2lvbi9yZXNlcnZhci1oYWJpdGFjaW9uLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsV0FBQTtBQ0NGOztBREVBO0VBQ0UsY0FBQTtFQUNBLGtCQUFBO0FDQ0Y7O0FERUE7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLGVBQUE7QUNDRjs7QURFQTtFQUNFLGNBQUE7QUNDRjs7QURFQTtFQUNFLGdCQUFBO0VBQ0EsWUFBQTtBQ0NGIiwic291cmNlc0NvbnRlbnQiOlsiLnJvb21zLWNhcmQge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4uZXJyb3ItbXNnIHtcclxuICBjb2xvcjogI2M2MjgyODtcclxuICBtYXJnaW46IDEwcHggMCAwIDA7XHJcbn1cclxuXHJcbi5sb2FkaW5nIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgcGFkZGluZzogMjRweCAwO1xyXG59XHJcblxyXG4udGFibGUtd3JhcHBlciB7XHJcbiAgb3ZlcmZsb3c6IGF1dG87XHJcbn1cclxuXHJcbi5lbXB0eS1tc2cge1xyXG4gIG1hcmdpbi10b3A6IDEycHg7XHJcbiAgb3BhY2l0eTogMC44O1xyXG59XHJcbiIsIi5yb29tcy1jYXJkIHtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5lcnJvci1tc2cge1xuICBjb2xvcjogI2M2MjgyODtcbiAgbWFyZ2luOiAxMHB4IDAgMCAwO1xufVxuXG4ubG9hZGluZyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBwYWRkaW5nOiAyNHB4IDA7XG59XG5cbi50YWJsZS13cmFwcGVyIHtcbiAgb3ZlcmZsb3c6IGF1dG87XG59XG5cbi5lbXB0eS1tc2cge1xuICBtYXJnaW4tdG9wOiAxMnB4O1xuICBvcGFjaXR5OiAwLjg7XG59Il0sInNvdXJjZVJvb3QiOiIifQ== */"]
      });
    }
  }
  return ReservarHabitacionComponent;
})();

/***/ })

}]);
//# sourceMappingURL=579.js.map