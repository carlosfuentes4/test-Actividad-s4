"use strict";
(self["webpackChunkclient"] = self["webpackChunkclient"] || []).push([[513],{

/***/ 7513:
/*!**************************************************************!*\
  !*** ./src/app/pages/habitaciones/habitaciones.component.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   HabitacionesComponent: () => (/* binding */ HabitacionesComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/card */ 3777);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/table */ 7697);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/button */ 4175);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/icon */ 3840);
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/progress-spinner */ 1134);
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/tooltip */ 640);
/* harmony import */ var _room_create_dialog_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./room-create-dialog.component */ 9056);
/* harmony import */ var _room_delete_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./room-delete-confirm-dialog.component */ 606);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/dialog */ 2587);
/* harmony import */ var _services_rooms_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/rooms.service */ 6526);




















function HabitacionesComponent_p_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "p", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r0.errorMessage);
  }
}
function HabitacionesComponent_div_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "mat-spinner", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
function HabitacionesComponent_div_14_th_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "th", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "N\u00FAmero");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
function HabitacionesComponent_div_14_td_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "td", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const row_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](row_r2.numeroHabitacion);
  }
}
function HabitacionesComponent_div_14_th_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "th", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Tipo");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
function HabitacionesComponent_div_14_td_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "td", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const row_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](row_r3.tipoHabitacion);
  }
}
function HabitacionesComponent_div_14_th_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "th", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Capacidad");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
function HabitacionesComponent_div_14_td_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "td", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const row_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](row_r4.capacidad);
  }
}
function HabitacionesComponent_div_14_th_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "th", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Precio/Noche");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
function HabitacionesComponent_div_14_td_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "td", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const row_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](row_r5.precioPorNoche);
  }
}
function HabitacionesComponent_div_14_th_15_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "th", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Estado");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
function HabitacionesComponent_div_14_td_16_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "td", 24);
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
function HabitacionesComponent_div_14_th_18_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "th", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Descripci\u00F3n");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
function HabitacionesComponent_div_14_td_19_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "td", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const row_r7 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](row_r7.descripcion);
  }
}
function HabitacionesComponent_div_14_th_21_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "th", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Acciones");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
function HabitacionesComponent_div_14_td_22_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "td", 24)(1, "button", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function HabitacionesComponent_div_14_td_22_Template_button_click_1_listener() {
      const row_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r8).$implicit;
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r0.openEditDialog(row_r9));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, "edit");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "button", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function HabitacionesComponent_div_14_td_22_Template_button_click_4_listener() {
      const row_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r8).$implicit;
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r0.openDeleteConfirmDialog(row_r9));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6, "close");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
  }
}
function HabitacionesComponent_div_14_tr_23_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "tr", 27);
  }
}
function HabitacionesComponent_div_14_tr_24_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "tr", 28);
  }
}
function HabitacionesComponent_div_14_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 10)(1, "table", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](2, 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](3, HabitacionesComponent_div_14_th_3_Template, 2, 0, "th", 13)(4, HabitacionesComponent_div_14_td_4_Template, 2, 1, "td", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](5, 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](6, HabitacionesComponent_div_14_th_6_Template, 2, 0, "th", 13)(7, HabitacionesComponent_div_14_td_7_Template, 2, 1, "td", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](8, 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](9, HabitacionesComponent_div_14_th_9_Template, 2, 0, "th", 13)(10, HabitacionesComponent_div_14_td_10_Template, 2, 1, "td", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](11, 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](12, HabitacionesComponent_div_14_th_12_Template, 2, 0, "th", 13)(13, HabitacionesComponent_div_14_td_13_Template, 2, 1, "td", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](14, 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](15, HabitacionesComponent_div_14_th_15_Template, 2, 0, "th", 13)(16, HabitacionesComponent_div_14_td_16_Template, 2, 1, "td", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](17, 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](18, HabitacionesComponent_div_14_th_18_Template, 2, 0, "th", 13)(19, HabitacionesComponent_div_14_td_19_Template, 2, 1, "td", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](20, 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](21, HabitacionesComponent_div_14_th_21_Template, 2, 0, "th", 13)(22, HabitacionesComponent_div_14_td_22_Template, 7, 0, "td", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](23, HabitacionesComponent_div_14_tr_23_Template, 1, 0, "tr", 21)(24, HabitacionesComponent_div_14_tr_24_Template, 1, 0, "tr", 22);
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
function HabitacionesComponent_p_15_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "p", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " No hay habitaciones registradas. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
let HabitacionesComponent = /*#__PURE__*/(() => {
  class HabitacionesComponent {
    constructor(dialog, roomsService) {
      this.dialog = dialog;
      this.roomsService = roomsService;
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
          this.dataSource.data = rooms;
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
    openCreateDialog() {
      const dialogRef = this.dialog.open(_room_create_dialog_component__WEBPACK_IMPORTED_MODULE_0__.RoomCreateDialogComponent, {
        width: '720px',
        disableClose: true
      });
      dialogRef.afterClosed().subscribe(res => {
        if (res) this.loadRooms();
      });
    }
    openEditDialog(room) {
      const dialogRef = this.dialog.open(_room_create_dialog_component__WEBPACK_IMPORTED_MODULE_0__.RoomCreateDialogComponent, {
        width: '720px',
        disableClose: true,
        data: {
          room
        }
      });
      dialogRef.afterClosed().subscribe(res => {
        if (res) this.loadRooms();
      });
    }
    openDeleteConfirmDialog(room) {
      const data = {
        title: 'Eliminar habitación',
        message: '¿Está seguro de que desea eliminar esta habitación?',
        roomNumber: room.numeroHabitacion
      };
      const dialogRef = this.dialog.open(_room_delete_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_1__.RoomDeleteConfirmDialogComponent, {
        width: '400px',
        data
      });
      dialogRef.afterClosed().subscribe(confirmed => {
        if (confirmed) {
          this.roomsService.deleteRoom(room.idHabitacion).subscribe({
            next: () => this.loadRooms(),
            error: err => {
              this.errorMessage = err?.error?.message ?? err?.message ?? 'No se pudo eliminar la habitación.';
            }
          });
        }
      });
    }
    static {
      this.ɵfac = function HabitacionesComponent_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || HabitacionesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__.MatDialog), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_services_rooms_service__WEBPACK_IMPORTED_MODULE_2__.RoomsService));
      };
    }
    static {
      this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
        type: HabitacionesComponent,
        selectors: [["app-habitaciones"]],
        standalone: true,
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵStandaloneFeature"]],
        decls: 16,
        vars: 4,
        consts: [[1, "rooms-card"], [1, "toolbar"], ["mat-flat-button", "", "color", "primary", 3, "click"], ["class", "error-msg", 4, "ngIf"], ["class", "loading", 4, "ngIf"], ["class", "table-wrapper", 4, "ngIf"], ["class", "empty-msg", 4, "ngIf"], [1, "error-msg"], [1, "loading"], ["diameter", "40"], [1, "table-wrapper"], ["mat-table", "", 1, "mat-elevation-z1", 3, "dataSource"], ["matColumnDef", "numeroHabitacion"], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "tipoHabitacion"], ["matColumnDef", "capacidad"], ["matColumnDef", "precioPorNoche"], ["matColumnDef", "estado"], ["matColumnDef", "descripcion"], ["matColumnDef", "acciones"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], ["mat-header-cell", ""], ["mat-cell", ""], ["mat-icon-button", "", "matTooltip", "Editar", "type", "button", 3, "click"], ["mat-icon-button", "", "matTooltip", "Eliminar", "type", "button", "color", "warn", 3, "click"], ["mat-header-row", ""], ["mat-row", ""], [1, "empty-msg"]],
        template: function HabitacionesComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-card", 0)(1, "mat-card-header")(2, "mat-card-title");
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, "Gesti\u00F3n de habitaciones");
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "mat-card-subtitle");
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5, "Listado de habitaciones y creaci\u00F3n nueva");
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "mat-card-content")(7, "div", 1)(8, "button", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function HabitacionesComponent_Template_button_click_8_listener() {
              return ctx.openCreateDialog();
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "mat-icon");
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](10, "add");
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](11, " Crear habitaci\u00F3n ");
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](12, HabitacionesComponent_p_12_Template, 2, 1, "p", 3)(13, HabitacionesComponent_div_13_Template, 2, 0, "div", 4)(14, HabitacionesComponent_div_14_Template, 25, 3, "div", 5)(15, HabitacionesComponent_p_15_Template, 2, 0, "p", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
          }
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](12);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.errorMessage);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.loading);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx.loading && ctx.dataSource.data.length > 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx.loading && ctx.dataSource.data.length === 0);
          }
        },
        dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgIf, _angular_material_card__WEBPACK_IMPORTED_MODULE_7__.MatCardModule, _angular_material_card__WEBPACK_IMPORTED_MODULE_7__.MatCard, _angular_material_card__WEBPACK_IMPORTED_MODULE_7__.MatCardContent, _angular_material_card__WEBPACK_IMPORTED_MODULE_7__.MatCardHeader, _angular_material_card__WEBPACK_IMPORTED_MODULE_7__.MatCardSubtitle, _angular_material_card__WEBPACK_IMPORTED_MODULE_7__.MatCardTitle, _angular_material_table__WEBPACK_IMPORTED_MODULE_4__.MatTableModule, _angular_material_table__WEBPACK_IMPORTED_MODULE_4__.MatTable, _angular_material_table__WEBPACK_IMPORTED_MODULE_4__.MatHeaderCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_4__.MatHeaderRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_4__.MatColumnDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_4__.MatCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_4__.MatRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_4__.MatHeaderCell, _angular_material_table__WEBPACK_IMPORTED_MODULE_4__.MatCell, _angular_material_table__WEBPACK_IMPORTED_MODULE_4__.MatHeaderRow, _angular_material_table__WEBPACK_IMPORTED_MODULE_4__.MatRow, _angular_material_button__WEBPACK_IMPORTED_MODULE_8__.MatButtonModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_8__.MatButton, _angular_material_button__WEBPACK_IMPORTED_MODULE_8__.MatIconButton, _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__.MatIconModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__.MatIcon, _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_10__.MatProgressSpinnerModule, _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_10__.MatProgressSpinner, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_11__.MatTooltipModule, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_11__.MatTooltip],
        styles: [".rooms-card[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.toolbar[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n  margin-bottom: 12px;\n}\n\n.error-msg[_ngcontent-%COMP%] {\n  color: #c62828;\n  margin: 10px 0 0 0;\n}\n\n.loading[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 24px 0;\n}\n\n.table-wrapper[_ngcontent-%COMP%] {\n  overflow: auto;\n}\n\n.empty-msg[_ngcontent-%COMP%] {\n  margin-top: 12px;\n  opacity: 0.8;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvcGFnZXMvaGFiaXRhY2lvbmVzL2hhYml0YWNpb25lcy5jb21wb25lbnQuc2NzcyIsIndlYnBhY2s6Ly8uLy4uLy4uLy4uLy4uL1Byb2dyYSUyMFdlYi9Qcm95ZWN0byUyMGZpbmFsL3Rlc3QtQWN0aXZpZGFkLXM0L2NsaWVudC9zcmMvYXBwL3BhZ2VzL2hhYml0YWNpb25lcy9oYWJpdGFjaW9uZXMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxXQUFBO0FDQ0Y7O0FERUE7RUFDRSxhQUFBO0VBQ0EseUJBQUE7RUFDQSxtQkFBQTtBQ0NGOztBREVBO0VBQ0UsY0FBQTtFQUNBLGtCQUFBO0FDQ0Y7O0FERUE7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLGVBQUE7QUNDRjs7QURFQTtFQUNFLGNBQUE7QUNDRjs7QURFQTtFQUNFLGdCQUFBO0VBQ0EsWUFBQTtBQ0NGIiwic291cmNlc0NvbnRlbnQiOlsiLnJvb21zLWNhcmQge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4udG9vbGJhciB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xyXG4gIG1hcmdpbi1ib3R0b206IDEycHg7XHJcbn1cclxuXHJcbi5lcnJvci1tc2cge1xyXG4gIGNvbG9yOiAjYzYyODI4O1xyXG4gIG1hcmdpbjogMTBweCAwIDAgMDtcclxufVxyXG5cclxuLmxvYWRpbmcge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBwYWRkaW5nOiAyNHB4IDA7XHJcbn1cclxuXHJcbi50YWJsZS13cmFwcGVyIHtcclxuICBvdmVyZmxvdzogYXV0bztcclxufVxyXG5cclxuLmVtcHR5LW1zZyB7XHJcbiAgbWFyZ2luLXRvcDogMTJweDtcclxuICBvcGFjaXR5OiAwLjg7XHJcbn1cclxuXHJcbiIsIi5yb29tcy1jYXJkIHtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi50b29sYmFyIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbiAgbWFyZ2luLWJvdHRvbTogMTJweDtcbn1cblxuLmVycm9yLW1zZyB7XG4gIGNvbG9yOiAjYzYyODI4O1xuICBtYXJnaW46IDEwcHggMCAwIDA7XG59XG5cbi5sb2FkaW5nIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIHBhZGRpbmc6IDI0cHggMDtcbn1cblxuLnRhYmxlLXdyYXBwZXIge1xuICBvdmVyZmxvdzogYXV0bztcbn1cblxuLmVtcHR5LW1zZyB7XG4gIG1hcmdpbi10b3A6IDEycHg7XG4gIG9wYWNpdHk6IDAuODtcbn0iXSwic291cmNlUm9vdCI6IiJ9 */"]
      });
    }
  }
  return HabitacionesComponent;
})();

/***/ }),

/***/ 9056:
/*!********************************************************************!*\
  !*** ./src/app/pages/habitaciones/room-create-dialog.component.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   RoomCreateDialogComponent: () => (/* binding */ RoomCreateDialogComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ 4456);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/button */ 4175);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/dialog */ 2587);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/form-field */ 4950);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/input */ 5541);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/select */ 5175);
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/progress-spinner */ 1134);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/icon */ 3840);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _services_rooms_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../services/rooms.service */ 6526);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/core */ 4646);





















const _forTrack0 = ($index, $item) => $item.value;
function RoomCreateDialogComponent_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-form-field", 3)(1, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "ID (opcional)");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "input", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
function RoomCreateDialogComponent_mat_error_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " El n\u00FAmero es obligatorio. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
function RoomCreateDialogComponent_mat_error_16_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " El tipo es obligatorio. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
function RoomCreateDialogComponent_For_31_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-option", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const e_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", e_r1.value);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](e_r1.label);
  }
}
function RoomCreateDialogComponent_p_36_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r1.errorMessage);
  }
}
function RoomCreateDialogComponent_mat_spinner_43_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "mat-spinner", 22);
  }
}
function RoomCreateDialogComponent_mat_icon_44_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-icon", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "check");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
function RoomCreateDialogComponent_span_45_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r1.isEditMode ? "Guardar" : "Crear");
  }
}
let RoomCreateDialogComponent = /*#__PURE__*/(() => {
  class RoomCreateDialogComponent {
    constructor(fb, dialogRef, data, roomsService) {
      this.fb = fb;
      this.dialogRef = dialogRef;
      this.data = data;
      this.roomsService = roomsService;
      this.loading = false;
      this.errorMessage = '';
      this.isEditMode = false;
      this.editRoomId = null;
      // Mapeo igual al enum RoomStatus del backend.
      this.estados = [{
        value: 0,
        label: 'Disponible'
      }, {
        value: 1,
        label: 'Ocupado'
      }, {
        value: 2,
        label: 'En mantenimiento'
      }, {
        value: 3,
        label: 'Reservado'
      }];
      this.form = this.fb.group({
        idHabitacion: [''],
        numeroHabitacion: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.minLength(1)]],
        tipoHabitacion: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.minLength(1)]],
        capacidad: [2, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.min(1)]],
        precioPorNoche: [0, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.min(0)]],
        estado: [0, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required]],
        descripcion: ['']
      });
      const payload = data && typeof data === 'object' && 'room' in data ? data.room : null;
      if (payload) {
        this.isEditMode = true;
        this.editRoomId = payload.idHabitacion;
        this.form.patchValue({
          idHabitacion: payload.idHabitacion,
          numeroHabitacion: payload.numeroHabitacion,
          tipoHabitacion: payload.tipoHabitacion,
          capacidad: payload.capacidad,
          precioPorNoche: payload.precioPorNoche,
          estado: payload.estado,
          descripcion: payload.descripcion ?? ''
        });
      }
    }
    onCancel() {
      this.dialogRef.close(false);
    }
    onSubmit() {
      this.errorMessage = '';
      if (this.form.invalid) {
        this.form.markAllAsTouched();
        return;
      }
      this.loading = true;
      const raw = this.form.value;
      const payload = {
        numeroHabitacion: raw.numeroHabitacion,
        tipoHabitacion: raw.tipoHabitacion,
        capacidad: Number(raw.capacidad),
        precioPorNoche: Number(raw.precioPorNoche),
        estado: raw.estado,
        descripcion: raw.descripcion ?? ''
      };
      if (this.isEditMode && this.editRoomId) {
        this.roomsService.updateRoom(this.editRoomId, payload).subscribe({
          next: res => {
            this.loading = false;
            this.dialogRef.close(res);
          },
          error: err => {
            this.loading = false;
            this.errorMessage = err?.error?.message ?? err?.message ?? 'No se pudo actualizar la habitación.';
          }
        });
      } else {
        this.roomsService.createRoom(payload).subscribe({
          next: res => {
            this.loading = false;
            this.dialogRef.close(res);
          },
          error: err => {
            this.loading = false;
            this.errorMessage = err?.error?.message ?? err?.message ?? 'No se pudo crear la habitación.';
          }
        });
      }
    }
    static {
      this.ɵfac = function RoomCreateDialogComponent_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || RoomCreateDialogComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__.MatDialogRef), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__.MAT_DIALOG_DATA), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_rooms_service__WEBPACK_IMPORTED_MODULE_0__.RoomsService));
      };
    }
    static {
      this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: RoomCreateDialogComponent,
        selectors: [["app-room-create-dialog"]],
        standalone: true,
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵStandaloneFeature"]],
        decls: 46,
        vars: 12,
        consts: [["mat-dialog-title", ""], [1, "dialog-content"], [3, "ngSubmit", "formGroup"], ["appearance", "outline", 1, "full-width"], ["matInput", "", "formControlName", "numeroHabitacion"], [4, "ngIf"], ["matInput", "", "formControlName", "tipoHabitacion"], [1, "grid-2"], ["matInput", "", "type", "number", "formControlName", "capacidad"], ["matInput", "", "type", "number", "formControlName", "precioPorNoche"], ["formControlName", "estado"], [3, "value"], ["matInput", "", "formControlName", "descripcion", "placeholder", "Ej: habitaci\u00F3n sencilla para dos personas"], ["class", "error-msg", 4, "ngIf"], [1, "actions"], ["mat-stroked-button", "", "type", "button", 3, "click", "disabled"], ["aria-hidden", "true", 1, "btn-icon"], ["mat-flat-button", "", "color", "primary", "type", "submit", 3, "disabled"], ["diameter", "18", 4, "ngIf"], ["aria-hidden", "true", "class", "btn-icon", 4, "ngIf"], ["matInput", "", "formControlName", "idHabitacion", "placeholder", "Deja vac\u00EDo para que se genere un ID"], [1, "error-msg"], ["diameter", "18"]],
        template: function RoomCreateDialogComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "h2", 0)(1, "mat-icon");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "mat-dialog-content", 1)(5, "form", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngSubmit", function RoomCreateDialogComponent_Template_form_ngSubmit_5_listener() {
              return ctx.onSubmit();
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, RoomCreateDialogComponent_Conditional_6_Template, 4, 0, "mat-form-field", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "mat-form-field", 3)(8, "mat-label");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "N\u00FAmero de habitaci\u00F3n");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](10, "input", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](11, RoomCreateDialogComponent_mat_error_11_Template, 2, 0, "mat-error", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "mat-form-field", 3)(13, "mat-label");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, "Tipo de habitaci\u00F3n");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](15, "input", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](16, RoomCreateDialogComponent_mat_error_16_Template, 2, 0, "mat-error", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "div", 7)(18, "mat-form-field", 3)(19, "mat-label");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20, "Capacidad");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](21, "input", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "mat-form-field", 3)(23, "mat-label");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](24, "Precio por noche");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](25, "input", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "mat-form-field", 3)(27, "mat-label");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](28, "Estado");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "mat-select", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrepeaterCreate"](30, RoomCreateDialogComponent_For_31_Template, 2, 2, "mat-option", 11, _forTrack0);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "mat-form-field", 3)(33, "mat-label");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](34, "Descripci\u00F3n");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](35, "input", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](36, RoomCreateDialogComponent_p_36_Template, 2, 1, "p", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](37, "div", 14)(38, "button", 15);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function RoomCreateDialogComponent_Template_button_click_38_listener() {
              return ctx.onCancel();
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](39, "mat-icon", 16);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](40, "close");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](41, " Cancelar ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](42, "button", 17);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](43, RoomCreateDialogComponent_mat_spinner_43_Template, 1, 0, "mat-spinner", 18)(44, RoomCreateDialogComponent_mat_icon_44_Template, 2, 0, "mat-icon", 19)(45, RoomCreateDialogComponent_span_45_Template, 2, 1, "span", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
          }
          if (rf & 2) {
            let tmp_4_0;
            let tmp_5_0;
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.isEditMode ? "edit" : "add_home");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx.isEditMode ? "Editar habitaci\u00F3n" : "Crear habitaci\u00F3n", "\n");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.form);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵconditional"](!ctx.isEditMode ? 6 : -1);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", (tmp_4_0 = ctx.form.get("numeroHabitacion")) == null ? null : tmp_4_0.hasError("required"));
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", (tmp_5_0 = ctx.form.get("tipoHabitacion")) == null ? null : tmp_5_0.hasError("required"));
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](14);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrepeater"](ctx.estados);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.errorMessage);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", ctx.loading);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", ctx.loading);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.loading);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.loading);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.loading);
          }
        },
        dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.ReactiveFormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NumberValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControlName, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__.MatDialogModule, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__.MatDialogTitle, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__.MatDialogContent, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__.MatFormFieldModule, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__.MatLabel, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__.MatError, _angular_material_input__WEBPACK_IMPORTED_MODULE_6__.MatInputModule, _angular_material_input__WEBPACK_IMPORTED_MODULE_6__.MatInput, _angular_material_select__WEBPACK_IMPORTED_MODULE_7__.MatSelectModule, _angular_material_select__WEBPACK_IMPORTED_MODULE_7__.MatSelect, _angular_material_core__WEBPACK_IMPORTED_MODULE_8__.MatOption, _angular_material_button__WEBPACK_IMPORTED_MODULE_9__.MatButtonModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_9__.MatButton, _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_10__.MatProgressSpinnerModule, _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_10__.MatProgressSpinner, _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__.MatIconModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__.MatIcon],
        styles: [".full-width[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.grid-2[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 12px;\n}\n\n.dialog-content[_ngcontent-%COMP%] {\n  min-width: 360px;\n}\n\n.error-msg[_ngcontent-%COMP%] {\n  color: #c62828;\n  margin-top: 10px;\n}\n\n.actions[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n  gap: 10px;\n  margin-top: 16px;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvcGFnZXMvaGFiaXRhY2lvbmVzL3Jvb20tY3JlYXRlLWRpYWxvZy5jb21wb25lbnQuc2NzcyIsIndlYnBhY2s6Ly8uLy4uLy4uLy4uLy4uL1Byb2dyYSUyMFdlYi9Qcm95ZWN0byUyMGZpbmFsL3Rlc3QtQWN0aXZpZGFkLXM0L2NsaWVudC9zcmMvYXBwL3BhZ2VzL2hhYml0YWNpb25lcy9yb29tLWNyZWF0ZS1kaWFsb2cuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxXQUFBO0FDQ0Y7O0FERUE7RUFDRSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxTQUFBO0FDQ0Y7O0FERUE7RUFDRSxnQkFBQTtBQ0NGOztBREVBO0VBQ0UsY0FBQTtFQUNBLGdCQUFBO0FDQ0Y7O0FERUE7RUFDRSxhQUFBO0VBQ0EseUJBQUE7RUFDQSxTQUFBO0VBQ0EsZ0JBQUE7QUNDRiIsInNvdXJjZXNDb250ZW50IjpbIi5mdWxsLXdpZHRoIHtcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuLmdyaWQtMiB7XHJcbiAgZGlzcGxheTogZ3JpZDtcclxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XHJcbiAgZ2FwOiAxMnB4O1xyXG59XHJcblxyXG4uZGlhbG9nLWNvbnRlbnQge1xyXG4gIG1pbi13aWR0aDogMzYwcHg7XHJcbn1cclxuXHJcbi5lcnJvci1tc2cge1xyXG4gIGNvbG9yOiAjYzYyODI4O1xyXG4gIG1hcmdpbi10b3A6IDEwcHg7XHJcbn1cclxuXHJcbi5hY3Rpb25zIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XHJcbiAgZ2FwOiAxMHB4O1xyXG4gIG1hcmdpbi10b3A6IDE2cHg7XHJcbn1cclxuXHJcbiIsIi5mdWxsLXdpZHRoIHtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5ncmlkLTIge1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XG4gIGdhcDogMTJweDtcbn1cblxuLmRpYWxvZy1jb250ZW50IHtcbiAgbWluLXdpZHRoOiAzNjBweDtcbn1cblxuLmVycm9yLW1zZyB7XG4gIGNvbG9yOiAjYzYyODI4O1xuICBtYXJnaW4tdG9wOiAxMHB4O1xufVxuXG4uYWN0aW9ucyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG4gIGdhcDogMTBweDtcbiAgbWFyZ2luLXRvcDogMTZweDtcbn0iXSwic291cmNlUm9vdCI6IiJ9 */"]
      });
    }
  }
  return RoomCreateDialogComponent;
})();

/***/ }),

/***/ 606:
/*!****************************************************************************!*\
  !*** ./src/app/pages/habitaciones/room-delete-confirm-dialog.component.ts ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   RoomDeleteConfirmDialogComponent: () => (/* binding */ RoomDeleteConfirmDialogComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/dialog */ 2587);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/button */ 4175);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7580);






function RoomDeleteConfirmDialogComponent_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 1)(1, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Habitaci\u00F3n: ", ctx_r0.data.roomNumber, "");
  }
}
let RoomDeleteConfirmDialogComponent = /*#__PURE__*/(() => {
  class RoomDeleteConfirmDialogComponent {
    constructor(dialogRef, data) {
      this.dialogRef = dialogRef;
      this.data = data;
    }
    onCancel() {
      this.dialogRef.close(false);
    }
    onConfirm() {
      this.dialogRef.close(true);
    }
    static {
      this.ɵfac = function RoomDeleteConfirmDialogComponent_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || RoomDeleteConfirmDialogComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__.MatDialogRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__.MAT_DIALOG_DATA));
      };
    }
    static {
      this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: RoomDeleteConfirmDialogComponent,
        selectors: [["app-room-delete-confirm-dialog"]],
        standalone: true,
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵStandaloneFeature"]],
        decls: 11,
        vars: 3,
        consts: [["mat-dialog-title", ""], [1, "room-number"], ["align", "end"], ["mat-button", "", 3, "click"], ["mat-flat-button", "", "color", "warn", 3, "click"]],
        template: function RoomDeleteConfirmDialogComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h2", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-dialog-content")(3, "p");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, RoomDeleteConfirmDialogComponent_Conditional_5_Template, 3, 1, "p", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-dialog-actions", 2)(7, "button", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RoomDeleteConfirmDialogComponent_Template_button_click_7_listener() {
              return ctx.onCancel();
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Cancelar");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RoomDeleteConfirmDialogComponent_Template_button_click_9_listener() {
              return ctx.onConfirm();
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " Eliminar ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          }
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.data.title);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.data.message);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵconditional"](ctx.data.roomNumber ? 5 : -1);
          }
        },
        dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__.MatDialogModule, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__.MatDialogTitle, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__.MatDialogActions, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__.MatDialogContent, _angular_material_button__WEBPACK_IMPORTED_MODULE_3__.MatButtonModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_3__.MatButton],
        styles: [".room-number[_ngcontent-%COMP%] {\n  margin-top: 0.5rem;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvcGFnZXMvaGFiaXRhY2lvbmVzL3Jvb20tZGVsZXRlLWNvbmZpcm0tZGlhbG9nLmNvbXBvbmVudC50cyIsIndlYnBhY2s6Ly8uLy4uLy4uLy4uLy4uL1Byb2dyYSUyMFdlYi9Qcm95ZWN0byUyMGZpbmFsL3Rlc3QtQWN0aXZpZGFkLXM0L2NsaWVudC9zcmMvYXBwL3BhZ2VzL2hhYml0YWNpb25lcy9yb29tLWRlbGV0ZS1jb25maXJtLWRpYWxvZy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0k7RUFBZSxrQkFBQTtBQ0NuQiIsInNvdXJjZXNDb250ZW50IjpbIlxuICAgIC5yb29tLW51bWJlciB7IG1hcmdpbi10b3A6IDAuNXJlbTsgfVxuICAiLCIucm9vbS1udW1iZXIge1xuICBtYXJnaW4tdG9wOiAwLjVyZW07XG59Il0sInNvdXJjZVJvb3QiOiIifQ== */"]
      });
    }
  }
  return RoomDeleteConfirmDialogComponent;
})();

/***/ }),

/***/ 640:
/*!*************************************************************!*\
  !*** ./node_modules/@angular/material/fesm2022/tooltip.mjs ***!
  \*************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MAT_TOOLTIP_DEFAULT_OPTIONS: () => (/* binding */ MAT_TOOLTIP_DEFAULT_OPTIONS),
/* harmony export */   MAT_TOOLTIP_DEFAULT_OPTIONS_FACTORY: () => (/* binding */ MAT_TOOLTIP_DEFAULT_OPTIONS_FACTORY),
/* harmony export */   MAT_TOOLTIP_SCROLL_STRATEGY: () => (/* binding */ MAT_TOOLTIP_SCROLL_STRATEGY),
/* harmony export */   MAT_TOOLTIP_SCROLL_STRATEGY_FACTORY: () => (/* binding */ MAT_TOOLTIP_SCROLL_STRATEGY_FACTORY),
/* harmony export */   MAT_TOOLTIP_SCROLL_STRATEGY_FACTORY_PROVIDER: () => (/* binding */ MAT_TOOLTIP_SCROLL_STRATEGY_FACTORY_PROVIDER),
/* harmony export */   MatTooltip: () => (/* binding */ MatTooltip),
/* harmony export */   MatTooltipModule: () => (/* binding */ MatTooltipModule),
/* harmony export */   SCROLL_THROTTLE_MS: () => (/* binding */ SCROLL_THROTTLE_MS),
/* harmony export */   TOOLTIP_PANEL_CLASS: () => (/* binding */ TOOLTIP_PANEL_CLASS),
/* harmony export */   TooltipComponent: () => (/* binding */ TooltipComponent),
/* harmony export */   getMatTooltipInvalidPositionError: () => (/* binding */ getMatTooltipInvalidPositionError),
/* harmony export */   matTooltipAnimations: () => (/* binding */ matTooltipAnimations)
/* harmony export */ });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ 3900);
/* harmony import */ var _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/cdk/coercion */ 2814);
/* harmony import */ var _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/cdk/keycodes */ 4879);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/cdk/platform */ 7699);
/* harmony import */ var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/cdk/a11y */ 2102);
/* harmony import */ var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/cdk/bidi */ 3680);
/* harmony import */ var _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/cdk/overlay */ 1570);
/* harmony import */ var _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/cdk/scrolling */ 9975);
/* harmony import */ var _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/cdk/portal */ 9168);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 819);
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/animations */ 7172);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/core */ 4646);



















/** Time in ms to throttle repositioning after scroll events. */
const _c0 = ["tooltip"];
const SCROLL_THROTTLE_MS = 20;
/**
 * Creates an error to be thrown if the user supplied an invalid tooltip position.
 * @docs-private
 */
function getMatTooltipInvalidPositionError(position) {
  return Error(`Tooltip position "${position}" is invalid.`);
}
/** Injection token that determines the scroll handling while a tooltip is visible. */
const MAT_TOOLTIP_SCROLL_STRATEGY = /*#__PURE__*/new _angular_core__WEBPACK_IMPORTED_MODULE_0__.InjectionToken('mat-tooltip-scroll-strategy', {
  providedIn: 'root',
  factory: () => {
    const overlay = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_1__.Overlay);
    return () => overlay.scrollStrategies.reposition({
      scrollThrottle: SCROLL_THROTTLE_MS
    });
  }
});
/** @docs-private */
function MAT_TOOLTIP_SCROLL_STRATEGY_FACTORY(overlay) {
  return () => overlay.scrollStrategies.reposition({
    scrollThrottle: SCROLL_THROTTLE_MS
  });
}
/** @docs-private */
const MAT_TOOLTIP_SCROLL_STRATEGY_FACTORY_PROVIDER = {
  provide: MAT_TOOLTIP_SCROLL_STRATEGY,
  deps: [_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_1__.Overlay],
  useFactory: MAT_TOOLTIP_SCROLL_STRATEGY_FACTORY
};
/** @docs-private */
function MAT_TOOLTIP_DEFAULT_OPTIONS_FACTORY() {
  return {
    showDelay: 0,
    hideDelay: 0,
    touchendHideDelay: 1500
  };
}
/** Injection token to be used to override the default options for `matTooltip`. */
const MAT_TOOLTIP_DEFAULT_OPTIONS = /*#__PURE__*/new _angular_core__WEBPACK_IMPORTED_MODULE_0__.InjectionToken('mat-tooltip-default-options', {
  providedIn: 'root',
  factory: MAT_TOOLTIP_DEFAULT_OPTIONS_FACTORY
});
/**
 * CSS class that will be attached to the overlay panel.
 * @deprecated
 * @breaking-change 13.0.0 remove this variable
 */
const TOOLTIP_PANEL_CLASS = 'mat-mdc-tooltip-panel';
const PANEL_CLASS = 'tooltip-panel';
/** Options used to bind passive event listeners. */
const passiveListenerOptions = /*#__PURE__*/(0,_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_2__.normalizePassiveListenerOptions)({
  passive: true
});
// These constants were taken from MDC's `numbers` object. We can't import them from MDC,
// because they have some top-level references to `window` which break during SSR.
const MIN_VIEWPORT_TOOLTIP_THRESHOLD = 8;
const UNBOUNDED_ANCHOR_GAP = 8;
const MIN_HEIGHT = 24;
const MAX_WIDTH = 200;
/**
 * Directive that attaches a material design tooltip to the host element. Animates the showing and
 * hiding of a tooltip provided position (defaults to below the element).
 *
 * https://material.io/design/components/tooltips.html
 */
let MatTooltip = /*#__PURE__*/(() => {
  class MatTooltip {
    /** Allows the user to define the position of the tooltip relative to the parent element */
    get position() {
      return this._position;
    }
    set position(value) {
      if (value !== this._position) {
        this._position = value;
        if (this._overlayRef) {
          this._updatePosition(this._overlayRef);
          this._tooltipInstance?.show(0);
          this._overlayRef.updatePosition();
        }
      }
    }
    /**
     * Whether tooltip should be relative to the click or touch origin
     * instead of outside the element bounding box.
     */
    get positionAtOrigin() {
      return this._positionAtOrigin;
    }
    set positionAtOrigin(value) {
      this._positionAtOrigin = (0,_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_3__.coerceBooleanProperty)(value);
      this._detach();
      this._overlayRef = null;
    }
    /** Disables the display of the tooltip. */
    get disabled() {
      return this._disabled;
    }
    set disabled(value) {
      const isDisabled = (0,_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_3__.coerceBooleanProperty)(value);
      if (this._disabled !== isDisabled) {
        this._disabled = isDisabled;
        // If tooltip is disabled, hide immediately.
        if (isDisabled) {
          this.hide(0);
        } else {
          this._setupPointerEnterEventsIfNeeded();
        }
        this._syncAriaDescription(this.message);
      }
    }
    /** The default delay in ms before showing the tooltip after show is called */
    get showDelay() {
      return this._showDelay;
    }
    set showDelay(value) {
      this._showDelay = (0,_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_3__.coerceNumberProperty)(value);
    }
    /** The default delay in ms before hiding the tooltip after hide is called */
    get hideDelay() {
      return this._hideDelay;
    }
    set hideDelay(value) {
      this._hideDelay = (0,_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_3__.coerceNumberProperty)(value);
      if (this._tooltipInstance) {
        this._tooltipInstance._mouseLeaveHideDelay = this._hideDelay;
      }
    }
    /** The message to be displayed in the tooltip */
    get message() {
      return this._message;
    }
    set message(value) {
      const oldMessage = this._message;
      // If the message is not a string (e.g. number), convert it to a string and trim it.
      // Must convert with `String(value)`, not `${value}`, otherwise Closure Compiler optimises
      // away the string-conversion: https://github.com/angular/components/issues/20684
      this._message = value != null ? String(value).trim() : '';
      if (!this._message && this._isTooltipVisible()) {
        this.hide(0);
      } else {
        this._setupPointerEnterEventsIfNeeded();
        this._updateTooltipMessage();
      }
      this._syncAriaDescription(oldMessage);
    }
    /** Classes to be passed to the tooltip. Supports the same syntax as `ngClass`. */
    get tooltipClass() {
      return this._tooltipClass;
    }
    set tooltipClass(value) {
      this._tooltipClass = value;
      if (this._tooltipInstance) {
        this._setTooltipClass(this._tooltipClass);
      }
    }
    constructor(_overlay, _elementRef, _scrollDispatcher, _viewContainerRef, _ngZone, _platform, _ariaDescriber, _focusMonitor, scrollStrategy, _dir, _defaultOptions, _document) {
      this._overlay = _overlay;
      this._elementRef = _elementRef;
      this._scrollDispatcher = _scrollDispatcher;
      this._viewContainerRef = _viewContainerRef;
      this._ngZone = _ngZone;
      this._platform = _platform;
      this._ariaDescriber = _ariaDescriber;
      this._focusMonitor = _focusMonitor;
      this._dir = _dir;
      this._defaultOptions = _defaultOptions;
      this._position = 'below';
      this._positionAtOrigin = false;
      this._disabled = false;
      this._viewInitialized = false;
      this._pointerExitEventsInitialized = false;
      this._tooltipComponent = TooltipComponent;
      this._viewportMargin = 8;
      this._cssClassPrefix = 'mat-mdc';
      /**
       * How touch gestures should be handled by the tooltip. On touch devices the tooltip directive
       * uses a long press gesture to show and hide, however it can conflict with the native browser
       * gestures. To work around the conflict, Angular Material disables native gestures on the
       * trigger, but that might not be desirable on particular elements (e.g. inputs and draggable
       * elements). The different values for this option configure the touch event handling as follows:
       * - `auto` - Enables touch gestures for all elements, but tries to avoid conflicts with native
       *   browser gestures on particular elements. In particular, it allows text selection on inputs
       *   and textareas, and preserves the native browser dragging on elements marked as `draggable`.
       * - `on` - Enables touch gestures for all elements and disables native
       *   browser gestures with no exceptions.
       * - `off` - Disables touch gestures. Note that this will prevent the tooltip from
       *   showing on touch devices.
       */
      this.touchGestures = 'auto';
      this._message = '';
      /** Manually-bound passive event listeners. */
      this._passiveListeners = [];
      /** Timer started at the last `touchstart` event. */
      this._touchstartTimeout = null;
      /** Emits when the component is destroyed. */
      this._destroyed = new rxjs__WEBPACK_IMPORTED_MODULE_4__.Subject();
      this._injector = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(_angular_core__WEBPACK_IMPORTED_MODULE_0__.Injector);
      this._scrollStrategy = scrollStrategy;
      this._document = _document;
      if (_defaultOptions) {
        this._showDelay = _defaultOptions.showDelay;
        this._hideDelay = _defaultOptions.hideDelay;
        if (_defaultOptions.position) {
          this.position = _defaultOptions.position;
        }
        if (_defaultOptions.positionAtOrigin) {
          this.positionAtOrigin = _defaultOptions.positionAtOrigin;
        }
        if (_defaultOptions.touchGestures) {
          this.touchGestures = _defaultOptions.touchGestures;
        }
        if (_defaultOptions.tooltipClass) {
          this.tooltipClass = _defaultOptions.tooltipClass;
        }
      }
      _dir.change.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.takeUntil)(this._destroyed)).subscribe(() => {
        if (this._overlayRef) {
          this._updatePosition(this._overlayRef);
        }
      });
      this._viewportMargin = MIN_VIEWPORT_TOOLTIP_THRESHOLD;
    }
    ngAfterViewInit() {
      // This needs to happen after view init so the initial values for all inputs have been set.
      this._viewInitialized = true;
      this._setupPointerEnterEventsIfNeeded();
      this._focusMonitor.monitor(this._elementRef).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.takeUntil)(this._destroyed)).subscribe(origin => {
        // Note that the focus monitor runs outside the Angular zone.
        if (!origin) {
          this._ngZone.run(() => this.hide(0));
        } else if (origin === 'keyboard') {
          this._ngZone.run(() => this.show());
        }
      });
    }
    /**
     * Dispose the tooltip when destroyed.
     */
    ngOnDestroy() {
      const nativeElement = this._elementRef.nativeElement;
      // Optimization: Do not call clearTimeout unless there is an active timer.
      if (this._touchstartTimeout) {
        clearTimeout(this._touchstartTimeout);
      }
      if (this._overlayRef) {
        this._overlayRef.dispose();
        this._tooltipInstance = null;
      }
      // Clean up the event listeners set in the constructor
      this._passiveListeners.forEach(([event, listener]) => {
        nativeElement.removeEventListener(event, listener, passiveListenerOptions);
      });
      this._passiveListeners.length = 0;
      this._destroyed.next();
      this._destroyed.complete();
      this._ariaDescriber.removeDescription(nativeElement, this.message, 'tooltip');
      this._focusMonitor.stopMonitoring(nativeElement);
    }
    /** Shows the tooltip after the delay in ms, defaults to tooltip-delay-show or 0ms if no input */
    show(delay = this.showDelay, origin) {
      if (this.disabled || !this.message || this._isTooltipVisible()) {
        this._tooltipInstance?._cancelPendingAnimations();
        return;
      }
      const overlayRef = this._createOverlay(origin);
      this._detach();
      this._portal = this._portal || new _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_6__.ComponentPortal(this._tooltipComponent, this._viewContainerRef);
      const instance = this._tooltipInstance = overlayRef.attach(this._portal).instance;
      instance._triggerElement = this._elementRef.nativeElement;
      instance._mouseLeaveHideDelay = this._hideDelay;
      instance.afterHidden().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.takeUntil)(this._destroyed)).subscribe(() => this._detach());
      this._setTooltipClass(this._tooltipClass);
      this._updateTooltipMessage();
      instance.show(delay);
    }
    /** Hides the tooltip after the delay in ms, defaults to tooltip-delay-hide or 0ms if no input */
    hide(delay = this.hideDelay) {
      const instance = this._tooltipInstance;
      if (instance) {
        if (instance.isVisible()) {
          instance.hide(delay);
        } else {
          instance._cancelPendingAnimations();
          this._detach();
        }
      }
    }
    /** Shows/hides the tooltip */
    toggle(origin) {
      this._isTooltipVisible() ? this.hide() : this.show(undefined, origin);
    }
    /** Returns true if the tooltip is currently visible to the user */
    _isTooltipVisible() {
      return !!this._tooltipInstance && this._tooltipInstance.isVisible();
    }
    /** Create the overlay config and position strategy */
    _createOverlay(origin) {
      if (this._overlayRef) {
        const existingStrategy = this._overlayRef.getConfig().positionStrategy;
        if ((!this.positionAtOrigin || !origin) && existingStrategy._origin instanceof _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef) {
          return this._overlayRef;
        }
        this._detach();
      }
      const scrollableAncestors = this._scrollDispatcher.getAncestorScrollContainers(this._elementRef);
      // Create connected position strategy that listens for scroll events to reposition.
      const strategy = this._overlay.position().flexibleConnectedTo(this.positionAtOrigin ? origin || this._elementRef : this._elementRef).withTransformOriginOn(`.${this._cssClassPrefix}-tooltip`).withFlexibleDimensions(false).withViewportMargin(this._viewportMargin).withScrollableContainers(scrollableAncestors);
      strategy.positionChanges.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.takeUntil)(this._destroyed)).subscribe(change => {
        this._updateCurrentPositionClass(change.connectionPair);
        if (this._tooltipInstance) {
          if (change.scrollableViewProperties.isOverlayClipped && this._tooltipInstance.isVisible()) {
            // After position changes occur and the overlay is clipped by
            // a parent scrollable then close the tooltip.
            this._ngZone.run(() => this.hide(0));
          }
        }
      });
      this._overlayRef = this._overlay.create({
        direction: this._dir,
        positionStrategy: strategy,
        panelClass: `${this._cssClassPrefix}-${PANEL_CLASS}`,
        scrollStrategy: this._scrollStrategy()
      });
      this._updatePosition(this._overlayRef);
      this._overlayRef.detachments().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.takeUntil)(this._destroyed)).subscribe(() => this._detach());
      this._overlayRef.outsidePointerEvents().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.takeUntil)(this._destroyed)).subscribe(() => this._tooltipInstance?._handleBodyInteraction());
      this._overlayRef.keydownEvents().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.takeUntil)(this._destroyed)).subscribe(event => {
        if (this._isTooltipVisible() && event.keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_7__.ESCAPE && !(0,_angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_7__.hasModifierKey)(event)) {
          event.preventDefault();
          event.stopPropagation();
          this._ngZone.run(() => this.hide(0));
        }
      });
      if (this._defaultOptions?.disableTooltipInteractivity) {
        this._overlayRef.addPanelClass(`${this._cssClassPrefix}-tooltip-panel-non-interactive`);
      }
      return this._overlayRef;
    }
    /** Detaches the currently-attached tooltip. */
    _detach() {
      if (this._overlayRef && this._overlayRef.hasAttached()) {
        this._overlayRef.detach();
      }
      this._tooltipInstance = null;
    }
    /** Updates the position of the current tooltip. */
    _updatePosition(overlayRef) {
      const position = overlayRef.getConfig().positionStrategy;
      const origin = this._getOrigin();
      const overlay = this._getOverlayPosition();
      position.withPositions([this._addOffset({
        ...origin.main,
        ...overlay.main
      }), this._addOffset({
        ...origin.fallback,
        ...overlay.fallback
      })]);
    }
    /** Adds the configured offset to a position. Used as a hook for child classes. */
    _addOffset(position) {
      const offset = UNBOUNDED_ANCHOR_GAP;
      const isLtr = !this._dir || this._dir.value == 'ltr';
      if (position.originY === 'top') {
        position.offsetY = -offset;
      } else if (position.originY === 'bottom') {
        position.offsetY = offset;
      } else if (position.originX === 'start') {
        position.offsetX = isLtr ? -offset : offset;
      } else if (position.originX === 'end') {
        position.offsetX = isLtr ? offset : -offset;
      }
      return position;
    }
    /**
     * Returns the origin position and a fallback position based on the user's position preference.
     * The fallback position is the inverse of the origin (e.g. `'below' -> 'above'`).
     */
    _getOrigin() {
      const isLtr = !this._dir || this._dir.value == 'ltr';
      const position = this.position;
      let originPosition;
      if (position == 'above' || position == 'below') {
        originPosition = {
          originX: 'center',
          originY: position == 'above' ? 'top' : 'bottom'
        };
      } else if (position == 'before' || position == 'left' && isLtr || position == 'right' && !isLtr) {
        originPosition = {
          originX: 'start',
          originY: 'center'
        };
      } else if (position == 'after' || position == 'right' && isLtr || position == 'left' && !isLtr) {
        originPosition = {
          originX: 'end',
          originY: 'center'
        };
      } else if (typeof ngDevMode === 'undefined' || ngDevMode) {
        throw getMatTooltipInvalidPositionError(position);
      }
      const {
        x,
        y
      } = this._invertPosition(originPosition.originX, originPosition.originY);
      return {
        main: originPosition,
        fallback: {
          originX: x,
          originY: y
        }
      };
    }
    /** Returns the overlay position and a fallback position based on the user's preference */
    _getOverlayPosition() {
      const isLtr = !this._dir || this._dir.value == 'ltr';
      const position = this.position;
      let overlayPosition;
      if (position == 'above') {
        overlayPosition = {
          overlayX: 'center',
          overlayY: 'bottom'
        };
      } else if (position == 'below') {
        overlayPosition = {
          overlayX: 'center',
          overlayY: 'top'
        };
      } else if (position == 'before' || position == 'left' && isLtr || position == 'right' && !isLtr) {
        overlayPosition = {
          overlayX: 'end',
          overlayY: 'center'
        };
      } else if (position == 'after' || position == 'right' && isLtr || position == 'left' && !isLtr) {
        overlayPosition = {
          overlayX: 'start',
          overlayY: 'center'
        };
      } else if (typeof ngDevMode === 'undefined' || ngDevMode) {
        throw getMatTooltipInvalidPositionError(position);
      }
      const {
        x,
        y
      } = this._invertPosition(overlayPosition.overlayX, overlayPosition.overlayY);
      return {
        main: overlayPosition,
        fallback: {
          overlayX: x,
          overlayY: y
        }
      };
    }
    /** Updates the tooltip message and repositions the overlay according to the new message length */
    _updateTooltipMessage() {
      // Must wait for the message to be painted to the tooltip so that the overlay can properly
      // calculate the correct positioning based on the size of the text.
      if (this._tooltipInstance) {
        this._tooltipInstance.message = this.message;
        this._tooltipInstance._markForCheck();
        (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.afterNextRender)(() => {
          if (this._tooltipInstance) {
            this._overlayRef.updatePosition();
          }
        }, {
          injector: this._injector
        });
      }
    }
    /** Updates the tooltip class */
    _setTooltipClass(tooltipClass) {
      if (this._tooltipInstance) {
        this._tooltipInstance.tooltipClass = tooltipClass;
        this._tooltipInstance._markForCheck();
      }
    }
    /** Inverts an overlay position. */
    _invertPosition(x, y) {
      if (this.position === 'above' || this.position === 'below') {
        if (y === 'top') {
          y = 'bottom';
        } else if (y === 'bottom') {
          y = 'top';
        }
      } else {
        if (x === 'end') {
          x = 'start';
        } else if (x === 'start') {
          x = 'end';
        }
      }
      return {
        x,
        y
      };
    }
    /** Updates the class on the overlay panel based on the current position of the tooltip. */
    _updateCurrentPositionClass(connectionPair) {
      const {
        overlayY,
        originX,
        originY
      } = connectionPair;
      let newPosition;
      // If the overlay is in the middle along the Y axis,
      // it means that it's either before or after.
      if (overlayY === 'center') {
        // Note that since this information is used for styling, we want to
        // resolve `start` and `end` to their real values, otherwise consumers
        // would have to remember to do it themselves on each consumption.
        if (this._dir && this._dir.value === 'rtl') {
          newPosition = originX === 'end' ? 'left' : 'right';
        } else {
          newPosition = originX === 'start' ? 'left' : 'right';
        }
      } else {
        newPosition = overlayY === 'bottom' && originY === 'top' ? 'above' : 'below';
      }
      if (newPosition !== this._currentPosition) {
        const overlayRef = this._overlayRef;
        if (overlayRef) {
          const classPrefix = `${this._cssClassPrefix}-${PANEL_CLASS}-`;
          overlayRef.removePanelClass(classPrefix + this._currentPosition);
          overlayRef.addPanelClass(classPrefix + newPosition);
        }
        this._currentPosition = newPosition;
      }
    }
    /** Binds the pointer events to the tooltip trigger. */
    _setupPointerEnterEventsIfNeeded() {
      // Optimization: Defer hooking up events if there's no message or the tooltip is disabled.
      if (this._disabled || !this.message || !this._viewInitialized || this._passiveListeners.length) {
        return;
      }
      // The mouse events shouldn't be bound on mobile devices, because they can prevent the
      // first tap from firing its click event or can cause the tooltip to open for clicks.
      if (this._platformSupportsMouseEvents()) {
        this._passiveListeners.push(['mouseenter', event => {
          this._setupPointerExitEventsIfNeeded();
          let point = undefined;
          if (event.x !== undefined && event.y !== undefined) {
            point = event;
          }
          this.show(undefined, point);
        }]);
      } else if (this.touchGestures !== 'off') {
        this._disableNativeGesturesIfNecessary();
        this._passiveListeners.push(['touchstart', event => {
          const touch = event.targetTouches?.[0];
          const origin = touch ? {
            x: touch.clientX,
            y: touch.clientY
          } : undefined;
          // Note that it's important that we don't `preventDefault` here,
          // because it can prevent click events from firing on the element.
          this._setupPointerExitEventsIfNeeded();
          if (this._touchstartTimeout) {
            clearTimeout(this._touchstartTimeout);
          }
          const DEFAULT_LONGPRESS_DELAY = 500;
          this._touchstartTimeout = setTimeout(() => {
            this._touchstartTimeout = null;
            this.show(undefined, origin);
          }, this._defaultOptions.touchLongPressShowDelay ?? DEFAULT_LONGPRESS_DELAY);
        }]);
      }
      this._addListeners(this._passiveListeners);
    }
    _setupPointerExitEventsIfNeeded() {
      if (this._pointerExitEventsInitialized) {
        return;
      }
      this._pointerExitEventsInitialized = true;
      const exitListeners = [];
      if (this._platformSupportsMouseEvents()) {
        exitListeners.push(['mouseleave', event => {
          const newTarget = event.relatedTarget;
          if (!newTarget || !this._overlayRef?.overlayElement.contains(newTarget)) {
            this.hide();
          }
        }], ['wheel', event => this._wheelListener(event)]);
      } else if (this.touchGestures !== 'off') {
        this._disableNativeGesturesIfNecessary();
        const touchendListener = () => {
          if (this._touchstartTimeout) {
            clearTimeout(this._touchstartTimeout);
          }
          this.hide(this._defaultOptions.touchendHideDelay);
        };
        exitListeners.push(['touchend', touchendListener], ['touchcancel', touchendListener]);
      }
      this._addListeners(exitListeners);
      this._passiveListeners.push(...exitListeners);
    }
    _addListeners(listeners) {
      listeners.forEach(([event, listener]) => {
        this._elementRef.nativeElement.addEventListener(event, listener, passiveListenerOptions);
      });
    }
    _platformSupportsMouseEvents() {
      return !this._platform.IOS && !this._platform.ANDROID;
    }
    /** Listener for the `wheel` event on the element. */
    _wheelListener(event) {
      if (this._isTooltipVisible()) {
        const elementUnderPointer = this._document.elementFromPoint(event.clientX, event.clientY);
        const element = this._elementRef.nativeElement;
        // On non-touch devices we depend on the `mouseleave` event to close the tooltip, but it
        // won't fire if the user scrolls away using the wheel without moving their cursor. We
        // work around it by finding the element under the user's cursor and closing the tooltip
        // if it's not the trigger.
        if (elementUnderPointer !== element && !element.contains(elementUnderPointer)) {
          this.hide();
        }
      }
    }
    /** Disables the native browser gestures, based on how the tooltip has been configured. */
    _disableNativeGesturesIfNecessary() {
      const gestures = this.touchGestures;
      if (gestures !== 'off') {
        const element = this._elementRef.nativeElement;
        const style = element.style;
        // If gestures are set to `auto`, we don't disable text selection on inputs and
        // textareas, because it prevents the user from typing into them on iOS Safari.
        if (gestures === 'on' || element.nodeName !== 'INPUT' && element.nodeName !== 'TEXTAREA') {
          style.userSelect = style.msUserSelect = style.webkitUserSelect = style.MozUserSelect = 'none';
        }
        // If we have `auto` gestures and the element uses native HTML dragging,
        // we don't set `-webkit-user-drag` because it prevents the native behavior.
        if (gestures === 'on' || !element.draggable) {
          style.webkitUserDrag = 'none';
        }
        style.touchAction = 'none';
        style.webkitTapHighlightColor = 'transparent';
      }
    }
    /** Updates the tooltip's ARIA description based on it current state. */
    _syncAriaDescription(oldMessage) {
      if (this._ariaDescriptionPending) {
        return;
      }
      this._ariaDescriptionPending = true;
      this._ariaDescriber.removeDescription(this._elementRef.nativeElement, oldMessage, 'tooltip');
      this._ngZone.runOutsideAngular(() => {
        // The `AriaDescriber` has some functionality that avoids adding a description if it's the
        // same as the `aria-label` of an element, however we can't know whether the tooltip trigger
        // has a data-bound `aria-label` or when it'll be set for the first time. We can avoid the
        // issue by deferring the description by a tick so Angular has time to set the `aria-label`.
        Promise.resolve().then(() => {
          this._ariaDescriptionPending = false;
          if (this.message && !this.disabled) {
            this._ariaDescriber.describe(this._elementRef.nativeElement, this.message, 'tooltip');
          }
        });
      });
    }
    static {
      this.ɵfac = function MatTooltip_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || MatTooltip)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_1__.Overlay), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_8__.ScrollDispatcher), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewContainerRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_2__.Platform), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_9__.AriaDescriber), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_9__.FocusMonitor), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](MAT_TOOLTIP_SCROLL_STRATEGY), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_10__.Directionality), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](MAT_TOOLTIP_DEFAULT_OPTIONS, 8), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_11__.DOCUMENT));
      };
    }
    static {
      this.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
        type: MatTooltip,
        selectors: [["", "matTooltip", ""]],
        hostAttrs: [1, "mat-mdc-tooltip-trigger"],
        hostVars: 2,
        hostBindings: function MatTooltip_HostBindings(rf, ctx) {
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("mat-mdc-tooltip-disabled", ctx.disabled);
          }
        },
        inputs: {
          position: [0, "matTooltipPosition", "position"],
          positionAtOrigin: [0, "matTooltipPositionAtOrigin", "positionAtOrigin"],
          disabled: [0, "matTooltipDisabled", "disabled"],
          showDelay: [0, "matTooltipShowDelay", "showDelay"],
          hideDelay: [0, "matTooltipHideDelay", "hideDelay"],
          touchGestures: [0, "matTooltipTouchGestures", "touchGestures"],
          message: [0, "matTooltip", "message"],
          tooltipClass: [0, "matTooltipClass", "tooltipClass"]
        },
        exportAs: ["matTooltip"],
        standalone: true
      });
    }
  }
  return MatTooltip;
})();
/*#__PURE__*/(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
/**
 * Internal component that wraps the tooltip's content.
 * @docs-private
 */
let TooltipComponent = /*#__PURE__*/(() => {
  class TooltipComponent {
    constructor(_changeDetectorRef, _elementRef, animationMode) {
      this._changeDetectorRef = _changeDetectorRef;
      this._elementRef = _elementRef;
      /* Whether the tooltip text overflows to multiple lines */
      this._isMultiline = false;
      /** Whether interactions on the page should close the tooltip */
      this._closeOnInteraction = false;
      /** Whether the tooltip is currently visible. */
      this._isVisible = false;
      /** Subject for notifying that the tooltip has been hidden from the view */
      this._onHide = new rxjs__WEBPACK_IMPORTED_MODULE_4__.Subject();
      /** Name of the show animation and the class that toggles it. */
      this._showAnimation = 'mat-mdc-tooltip-show';
      /** Name of the hide animation and the class that toggles it. */
      this._hideAnimation = 'mat-mdc-tooltip-hide';
      this._animationsDisabled = animationMode === 'NoopAnimations';
    }
    /**
     * Shows the tooltip with an animation originating from the provided origin
     * @param delay Amount of milliseconds to the delay showing the tooltip.
     */
    show(delay) {
      // Cancel the delayed hide if it is scheduled
      if (this._hideTimeoutId != null) {
        clearTimeout(this._hideTimeoutId);
      }
      this._showTimeoutId = setTimeout(() => {
        this._toggleVisibility(true);
        this._showTimeoutId = undefined;
      }, delay);
    }
    /**
     * Begins the animation to hide the tooltip after the provided delay in ms.
     * @param delay Amount of milliseconds to delay showing the tooltip.
     */
    hide(delay) {
      // Cancel the delayed show if it is scheduled
      if (this._showTimeoutId != null) {
        clearTimeout(this._showTimeoutId);
      }
      this._hideTimeoutId = setTimeout(() => {
        this._toggleVisibility(false);
        this._hideTimeoutId = undefined;
      }, delay);
    }
    /** Returns an observable that notifies when the tooltip has been hidden from view. */
    afterHidden() {
      return this._onHide;
    }
    /** Whether the tooltip is being displayed. */
    isVisible() {
      return this._isVisible;
    }
    ngOnDestroy() {
      this._cancelPendingAnimations();
      this._onHide.complete();
      this._triggerElement = null;
    }
    /**
     * Interactions on the HTML body should close the tooltip immediately as defined in the
     * material design spec.
     * https://material.io/design/components/tooltips.html#behavior
     */
    _handleBodyInteraction() {
      if (this._closeOnInteraction) {
        this.hide(0);
      }
    }
    /**
     * Marks that the tooltip needs to be checked in the next change detection run.
     * Mainly used for rendering the initial text before positioning a tooltip, which
     * can be problematic in components with OnPush change detection.
     */
    _markForCheck() {
      this._changeDetectorRef.markForCheck();
    }
    _handleMouseLeave({
      relatedTarget
    }) {
      if (!relatedTarget || !this._triggerElement.contains(relatedTarget)) {
        if (this.isVisible()) {
          this.hide(this._mouseLeaveHideDelay);
        } else {
          this._finalizeAnimation(false);
        }
      }
    }
    /**
     * Callback for when the timeout in this.show() gets completed.
     * This method is only needed by the mdc-tooltip, and so it is only implemented
     * in the mdc-tooltip, not here.
     */
    _onShow() {
      this._isMultiline = this._isTooltipMultiline();
      this._markForCheck();
    }
    /** Whether the tooltip text has overflown to the next line */
    _isTooltipMultiline() {
      const rect = this._elementRef.nativeElement.getBoundingClientRect();
      return rect.height > MIN_HEIGHT && rect.width >= MAX_WIDTH;
    }
    /** Event listener dispatched when an animation on the tooltip finishes. */
    _handleAnimationEnd({
      animationName
    }) {
      if (animationName === this._showAnimation || animationName === this._hideAnimation) {
        this._finalizeAnimation(animationName === this._showAnimation);
      }
    }
    /** Cancels any pending animation sequences. */
    _cancelPendingAnimations() {
      if (this._showTimeoutId != null) {
        clearTimeout(this._showTimeoutId);
      }
      if (this._hideTimeoutId != null) {
        clearTimeout(this._hideTimeoutId);
      }
      this._showTimeoutId = this._hideTimeoutId = undefined;
    }
    /** Handles the cleanup after an animation has finished. */
    _finalizeAnimation(toVisible) {
      if (toVisible) {
        this._closeOnInteraction = true;
      } else if (!this.isVisible()) {
        this._onHide.next();
      }
    }
    /** Toggles the visibility of the tooltip element. */
    _toggleVisibility(isVisible) {
      // We set the classes directly here ourselves so that toggling the tooltip state
      // isn't bound by change detection. This allows us to hide it even if the
      // view ref has been detached from the CD tree.
      const tooltip = this._tooltip.nativeElement;
      const showClass = this._showAnimation;
      const hideClass = this._hideAnimation;
      tooltip.classList.remove(isVisible ? hideClass : showClass);
      tooltip.classList.add(isVisible ? showClass : hideClass);
      if (this._isVisible !== isVisible) {
        this._isVisible = isVisible;
        this._changeDetectorRef.markForCheck();
      }
      // It's common for internal apps to disable animations using `* { animation: none !important }`
      // which can break the opening sequence. Try to detect such cases and work around them.
      if (isVisible && !this._animationsDisabled && typeof getComputedStyle === 'function') {
        const styles = getComputedStyle(tooltip);
        // Use `getPropertyValue` to avoid issues with property renaming.
        if (styles.getPropertyValue('animation-duration') === '0s' || styles.getPropertyValue('animation-name') === 'none') {
          this._animationsDisabled = true;
        }
      }
      if (isVisible) {
        this._onShow();
      }
      if (this._animationsDisabled) {
        tooltip.classList.add('_mat-animation-noopable');
        this._finalizeAnimation(isVisible);
      }
    }
    static {
      this.ɵfac = function TooltipComponent_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || TooltipComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ANIMATION_MODULE_TYPE, 8));
      };
    }
    static {
      this.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: TooltipComponent,
        selectors: [["mat-tooltip-component"]],
        viewQuery: function TooltipComponent_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, 7);
          }
          if (rf & 2) {
            let _t;
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx._tooltip = _t.first);
          }
        },
        hostAttrs: ["aria-hidden", "true"],
        hostBindings: function TooltipComponent_HostBindings(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("mouseleave", function TooltipComponent_mouseleave_HostBindingHandler($event) {
              return ctx._handleMouseLeave($event);
            });
          }
        },
        standalone: true,
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵStandaloneFeature"]],
        decls: 4,
        vars: 4,
        consts: [["tooltip", ""], [1, "mdc-tooltip", "mat-mdc-tooltip", 3, "animationend", "ngClass"], [1, "mat-mdc-tooltip-surface", "mdc-tooltip__surface"]],
        template: function TooltipComponent_Template(rf, ctx) {
          if (rf & 1) {
            const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1, 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("animationend", function TooltipComponent_Template_div_animationend_0_listener($event) {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1);
              return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx._handleAnimationEnd($event));
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          }
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("mdc-tooltip--multiline", ctx._isMultiline);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.tooltipClass);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.message);
          }
        },
        dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_11__.NgClass],
        styles: [".mat-mdc-tooltip{position:relative;transform:scale(0);display:inline-flex}.mat-mdc-tooltip::before{content:\"\";top:0;right:0;bottom:0;left:0;z-index:-1;position:absolute}.mat-mdc-tooltip-panel-below .mat-mdc-tooltip::before{top:-8px}.mat-mdc-tooltip-panel-above .mat-mdc-tooltip::before{bottom:-8px}.mat-mdc-tooltip-panel-right .mat-mdc-tooltip::before{left:-8px}.mat-mdc-tooltip-panel-left .mat-mdc-tooltip::before{right:-8px}.mat-mdc-tooltip._mat-animation-noopable{animation:none;transform:scale(1)}.mat-mdc-tooltip-surface{word-break:normal;overflow-wrap:anywhere;padding:4px 8px;min-width:40px;max-width:200px;min-height:24px;max-height:40vh;box-sizing:border-box;overflow:hidden;text-align:center;will-change:transform,opacity;background-color:var(--mdc-plain-tooltip-container-color, var(--mat-app-inverse-surface));color:var(--mdc-plain-tooltip-supporting-text-color, var(--mat-app-inverse-on-surface));border-radius:var(--mdc-plain-tooltip-container-shape, var(--mat-app-corner-extra-small));font-family:var(--mdc-plain-tooltip-supporting-text-font, var(--mat-app-body-small-font));font-size:var(--mdc-plain-tooltip-supporting-text-size, var(--mat-app-body-small-size));font-weight:var(--mdc-plain-tooltip-supporting-text-weight, var(--mat-app-body-small-weight));line-height:var(--mdc-plain-tooltip-supporting-text-line-height, var(--mat-app-body-small-line-height));letter-spacing:var(--mdc-plain-tooltip-supporting-text-tracking, var(--mat-app-body-small-tracking))}.mat-mdc-tooltip-surface::before{position:absolute;box-sizing:border-box;width:100%;height:100%;top:0;left:0;border:1px solid rgba(0,0,0,0);border-radius:inherit;content:\"\";pointer-events:none}.mdc-tooltip--multiline .mat-mdc-tooltip-surface{text-align:left}[dir=rtl] .mdc-tooltip--multiline .mat-mdc-tooltip-surface{text-align:right}.mat-mdc-tooltip-panel.mat-mdc-tooltip-panel-non-interactive{pointer-events:none}@keyframes mat-mdc-tooltip-show{0%{opacity:0;transform:scale(0.8)}100%{opacity:1;transform:scale(1)}}@keyframes mat-mdc-tooltip-hide{0%{opacity:1;transform:scale(1)}100%{opacity:0;transform:scale(0.8)}}.mat-mdc-tooltip-show{animation:mat-mdc-tooltip-show 150ms cubic-bezier(0, 0, 0.2, 1) forwards}.mat-mdc-tooltip-hide{animation:mat-mdc-tooltip-hide 75ms cubic-bezier(0.4, 0, 1, 1) forwards}"],
        encapsulation: 2,
        changeDetection: 0
      });
    }
  }
  return TooltipComponent;
})();
/*#__PURE__*/(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();

/**
 * Animations used by MatTooltip.
 * @docs-private
 */
const matTooltipAnimations = {
  /** Animation that transitions a tooltip in and out. */
  tooltipState: /*#__PURE__*/(0,_angular_animations__WEBPACK_IMPORTED_MODULE_12__.trigger)('state', [
  /*#__PURE__*/
  // TODO(crisbeto): these values are based on MDC's CSS.
  // We should be able to use their styles directly once we land #19432.
  (0,_angular_animations__WEBPACK_IMPORTED_MODULE_12__.state)('initial, void, hidden', /*#__PURE__*/(0,_angular_animations__WEBPACK_IMPORTED_MODULE_12__.style)({
    opacity: 0,
    transform: 'scale(0.8)'
  })), /*#__PURE__*/(0,_angular_animations__WEBPACK_IMPORTED_MODULE_12__.state)('visible', /*#__PURE__*/(0,_angular_animations__WEBPACK_IMPORTED_MODULE_12__.style)({
    transform: 'scale(1)'
  })), /*#__PURE__*/(0,_angular_animations__WEBPACK_IMPORTED_MODULE_12__.transition)('* => visible', /*#__PURE__*/(0,_angular_animations__WEBPACK_IMPORTED_MODULE_12__.animate)('150ms cubic-bezier(0, 0, 0.2, 1)')), /*#__PURE__*/(0,_angular_animations__WEBPACK_IMPORTED_MODULE_12__.transition)('* => hidden', /*#__PURE__*/(0,_angular_animations__WEBPACK_IMPORTED_MODULE_12__.animate)('75ms cubic-bezier(0.4, 0, 1, 1)'))])
};
let MatTooltipModule = /*#__PURE__*/(() => {
  class MatTooltipModule {
    static {
      this.ɵfac = function MatTooltipModule_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || MatTooltipModule)();
      };
    }
    static {
      this.ɵmod = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: MatTooltipModule
      });
    }
    static {
      this.ɵinj = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        providers: [MAT_TOOLTIP_SCROLL_STRATEGY_FACTORY_PROVIDER],
        imports: [_angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_9__.A11yModule, _angular_common__WEBPACK_IMPORTED_MODULE_11__.CommonModule, _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_1__.OverlayModule, _angular_material_core__WEBPACK_IMPORTED_MODULE_13__.MatCommonModule, _angular_material_core__WEBPACK_IMPORTED_MODULE_13__.MatCommonModule, _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_8__.CdkScrollableModule]
      });
    }
  }
  return MatTooltipModule;
})();
/*#__PURE__*/(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();

/**
 * Generated bundle index. Do not edit.
 */



/***/ })

}]);
//# sourceMappingURL=513.js.map