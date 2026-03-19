"use strict";
(self["webpackChunkclient"] = self["webpackChunkclient"] || []).push([[749],{

/***/ 3749:
/*!******************************************************!*\
  !*** ./src/app/pages/reservar/reservar.component.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ReservarComponent: () => (/* binding */ ReservarComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/card */ 3777);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/table */ 7697);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/button */ 4175);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/icon */ 3840);
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/progress-spinner */ 1134);
/* harmony import */ var _reservation_create_dialog_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./reservation-create-dialog.component */ 4953);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/dialog */ 2587);
/* harmony import */ var _services_rooms_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/rooms.service */ 6526);
/* harmony import */ var _services_users_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/users.service */ 3221);
/* harmony import */ var _services_reservations_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/reservations.service */ 9549);


















function ReservarComponent_p_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "p", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r0.errorMessage);
  }
}
function ReservarComponent_div_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "mat-spinner", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
}
function ReservarComponent_div_14_th_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "th", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "ID");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
}
function ReservarComponent_div_14_td_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "td", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const row_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](row_r2.idReservacion);
  }
}
function ReservarComponent_div_14_th_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "th", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "Habitaci\u00F3n");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
}
function ReservarComponent_div_14_td_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "td", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const row_r3 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r0.roomLabel(row_r3.idHabitacion));
  }
}
function ReservarComponent_div_14_th_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "th", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "Hu\u00E9sped");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
}
function ReservarComponent_div_14_td_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "td", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const row_r4 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r0.userLabel(row_r4.idHuesped));
  }
}
function ReservarComponent_div_14_th_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "th", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "Entrada");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
}
function ReservarComponent_div_14_td_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "td", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const row_r5 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r0.formatDate(row_r5.fechaEntrada));
  }
}
function ReservarComponent_div_14_th_15_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "th", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "Salida");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
}
function ReservarComponent_div_14_td_16_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "td", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const row_r6 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r0.formatDate(row_r6.fechaSalida));
  }
}
function ReservarComponent_div_14_th_18_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "th", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "Estado");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
}
function ReservarComponent_div_14_td_19_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "td", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const row_r7 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r0.estadoLabel(row_r7.estado));
  }
}
function ReservarComponent_div_14_th_21_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "th", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "Hu\u00E9spedes");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
}
function ReservarComponent_div_14_td_22_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "td", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const row_r8 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](row_r8.numeroHuespedes);
  }
}
function ReservarComponent_div_14_th_24_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "th", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "Monto");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
}
function ReservarComponent_div_14_td_25_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "td", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const row_r9 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate2"](" ", row_r9.montoTotal, " ", row_r9.moneda, " ");
  }
}
function ReservarComponent_div_14_th_27_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "th", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "Pago");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
}
function ReservarComponent_div_14_td_28_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "td", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const row_r10 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", row_r10.pagoConfirmado ? "S\u00ED" : "No", " ");
  }
}
function ReservarComponent_div_14_th_30_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "th", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "Solicitudes");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
}
function ReservarComponent_div_14_td_31_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "td", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const row_r11 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](row_r11.solicitudesEspeciales);
  }
}
function ReservarComponent_div_14_tr_32_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "tr", 28);
  }
}
function ReservarComponent_div_14_tr_33_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "tr", 29);
  }
}
function ReservarComponent_div_14_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 10)(1, "table", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](2, 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](3, ReservarComponent_div_14_th_3_Template, 2, 0, "th", 13)(4, ReservarComponent_div_14_td_4_Template, 2, 1, "td", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](5, 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](6, ReservarComponent_div_14_th_6_Template, 2, 0, "th", 13)(7, ReservarComponent_div_14_td_7_Template, 2, 1, "td", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](8, 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](9, ReservarComponent_div_14_th_9_Template, 2, 0, "th", 13)(10, ReservarComponent_div_14_td_10_Template, 2, 1, "td", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](11, 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](12, ReservarComponent_div_14_th_12_Template, 2, 0, "th", 13)(13, ReservarComponent_div_14_td_13_Template, 2, 1, "td", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](14, 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](15, ReservarComponent_div_14_th_15_Template, 2, 0, "th", 13)(16, ReservarComponent_div_14_td_16_Template, 2, 1, "td", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](17, 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](18, ReservarComponent_div_14_th_18_Template, 2, 0, "th", 13)(19, ReservarComponent_div_14_td_19_Template, 2, 1, "td", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](20, 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](21, ReservarComponent_div_14_th_21_Template, 2, 0, "th", 13)(22, ReservarComponent_div_14_td_22_Template, 2, 1, "td", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](23, 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](24, ReservarComponent_div_14_th_24_Template, 2, 0, "th", 13)(25, ReservarComponent_div_14_td_25_Template, 2, 2, "td", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](26, 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](27, ReservarComponent_div_14_th_27_Template, 2, 0, "th", 13)(28, ReservarComponent_div_14_td_28_Template, 2, 1, "td", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](29, 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](30, ReservarComponent_div_14_th_30_Template, 2, 0, "th", 13)(31, ReservarComponent_div_14_td_31_Template, 2, 1, "td", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](32, ReservarComponent_div_14_tr_32_Template, 1, 0, "tr", 24)(33, ReservarComponent_div_14_tr_33_Template, 1, 0, "tr", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("dataSource", ctx_r0.dataSource);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](31);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("matHeaderRowDef", ctx_r0.displayedColumns);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("matRowDefColumns", ctx_r0.displayedColumns);
  }
}
function ReservarComponent_p_15_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "p", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, " No hay reservaciones registradas. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
}
let ReservarComponent = /*#__PURE__*/(() => {
  class ReservarComponent {
    constructor(dialog, roomsService, usersService, reservationsService) {
      this.dialog = dialog;
      this.roomsService = roomsService;
      this.usersService = usersService;
      this.reservationsService = reservationsService;
      this.loading = false;
      this.errorMessage = '';
      this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_5__.MatTableDataSource([]);
      this.displayedColumns = ['idReservacion', 'habitacion', 'huesped', 'fechaEntrada', 'fechaSalida', 'estado', 'numeroHuespedes', 'montoTotal', 'pagoConfirmado', 'solicitudesEspeciales'];
      this.rooms = [];
      this.users = [];
    }
    ngOnInit() {
      this.load();
    }
    load() {
      this.loading = true;
      this.errorMessage = '';
      // Cargamos en paralelo (y refrescamos tabla cuando terminen).
      let roomsLoaded = false;
      let usersLoaded = false;
      let reservationsLoaded = false;
      this.roomsService.getRooms().subscribe({
        next: r => {
          this.rooms = r;
          roomsLoaded = true;
          if (reservationsLoaded && usersLoaded) this.loading = false;
        },
        error: () => {
          roomsLoaded = true;
          if (reservationsLoaded && usersLoaded) this.loading = false;
        }
      });
      this.usersService.getUsers().subscribe({
        next: u => {
          this.users = u;
          usersLoaded = true;
          if (reservationsLoaded && roomsLoaded) this.loading = false;
        },
        error: () => {
          usersLoaded = true;
          if (reservationsLoaded && roomsLoaded) this.loading = false;
        }
      });
      this.reservationsService.getReservations().subscribe({
        next: reservations => {
          this.dataSource.data = reservations;
          reservationsLoaded = true;
          if (roomsLoaded && usersLoaded) this.loading = false;
        },
        error: err => {
          this.loading = false;
          this.errorMessage = err?.error?.message ?? 'No se pudieron cargar las reservaciones.';
        }
      });
    }
    estadoLabel(estado) {
      switch (estado) {
        case 0:
          return 'Pendiente';
        case 1:
          return 'Confirmado';
        case 2:
          return 'En proceso';
        case 3:
          return 'Completado';
        case 4:
          return 'Cancelado';
        case 5:
          return 'Ausente';
        default:
          return String(estado);
      }
    }
    roomLabel(roomId) {
      const r = this.rooms.find(x => x.idHabitacion === roomId);
      return r ? `${r.numeroHabitacion} (${r.tipoHabitacion})` : roomId;
    }
    userLabel(userId) {
      const u = this.users.find(x => x.idUser === userId);
      return u ? `${u.nombreCompleto}` : userId;
    }
    formatDate(value) {
      if (!value) return '';
      const d = new Date(value);
      return isNaN(d.getTime()) ? value : d.toLocaleString();
    }
    openCreateDialog() {
      const dialogRef = this.dialog.open(_reservation_create_dialog_component__WEBPACK_IMPORTED_MODULE_0__.ReservationCreateDialogComponent, {
        width: '900px',
        disableClose: true
      });
      dialogRef.afterClosed().subscribe(res => {
        if (res) this.load();
      });
    }
    static {
      this.ɵfac = function ReservarComponent_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || ReservarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__.MatDialog), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_services_rooms_service__WEBPACK_IMPORTED_MODULE_1__.RoomsService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_services_users_service__WEBPACK_IMPORTED_MODULE_2__.UsersService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_services_reservations_service__WEBPACK_IMPORTED_MODULE_3__.ReservationsService));
      };
    }
    static {
      this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
        type: ReservarComponent,
        selectors: [["app-reservar"]],
        standalone: true,
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵStandaloneFeature"]],
        decls: 16,
        vars: 4,
        consts: [[1, "rooms-card"], [1, "toolbar"], ["mat-flat-button", "", "color", "primary", 3, "click"], ["class", "error-msg", 4, "ngIf"], ["class", "loading", 4, "ngIf"], ["class", "table-wrapper", 4, "ngIf"], ["class", "empty-msg", 4, "ngIf"], [1, "error-msg"], [1, "loading"], ["diameter", "40"], [1, "table-wrapper"], ["mat-table", "", 1, "mat-elevation-z1", 3, "dataSource"], ["matColumnDef", "idReservacion"], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "habitacion"], ["matColumnDef", "huesped"], ["matColumnDef", "fechaEntrada"], ["matColumnDef", "fechaSalida"], ["matColumnDef", "estado"], ["matColumnDef", "numeroHuespedes"], ["matColumnDef", "montoTotal"], ["matColumnDef", "pagoConfirmado"], ["matColumnDef", "solicitudesEspeciales"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], ["mat-header-cell", ""], ["mat-cell", ""], ["mat-header-row", ""], ["mat-row", ""], [1, "empty-msg"]],
        template: function ReservarComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "mat-card", 0)(1, "mat-card-header")(2, "mat-card-title");
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3, "Reservaciones");
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "mat-card-subtitle");
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](5, "Listado de reservaciones y creaci\u00F3n nueva");
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "mat-card-content")(7, "div", 1)(8, "button", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function ReservarComponent_Template_button_click_8_listener() {
              return ctx.openCreateDialog();
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "mat-icon");
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](10, "add");
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](11, " Nueva reservaci\u00F3n ");
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](12, ReservarComponent_p_12_Template, 2, 1, "p", 3)(13, ReservarComponent_div_13_Template, 2, 0, "div", 4)(14, ReservarComponent_div_14_Template, 34, 3, "div", 5)(15, ReservarComponent_p_15_Template, 2, 0, "p", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
          }
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](12);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.errorMessage);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.loading);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !ctx.loading && ctx.dataSource.data.length > 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !ctx.loading && ctx.dataSource.data.length === 0);
          }
        },
        dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgIf, _angular_material_card__WEBPACK_IMPORTED_MODULE_8__.MatCardModule, _angular_material_card__WEBPACK_IMPORTED_MODULE_8__.MatCard, _angular_material_card__WEBPACK_IMPORTED_MODULE_8__.MatCardContent, _angular_material_card__WEBPACK_IMPORTED_MODULE_8__.MatCardHeader, _angular_material_card__WEBPACK_IMPORTED_MODULE_8__.MatCardSubtitle, _angular_material_card__WEBPACK_IMPORTED_MODULE_8__.MatCardTitle, _angular_material_table__WEBPACK_IMPORTED_MODULE_5__.MatTableModule, _angular_material_table__WEBPACK_IMPORTED_MODULE_5__.MatTable, _angular_material_table__WEBPACK_IMPORTED_MODULE_5__.MatHeaderCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_5__.MatHeaderRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_5__.MatColumnDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_5__.MatCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_5__.MatRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_5__.MatHeaderCell, _angular_material_table__WEBPACK_IMPORTED_MODULE_5__.MatCell, _angular_material_table__WEBPACK_IMPORTED_MODULE_5__.MatHeaderRow, _angular_material_table__WEBPACK_IMPORTED_MODULE_5__.MatRow, _angular_material_button__WEBPACK_IMPORTED_MODULE_9__.MatButtonModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_9__.MatButton, _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__.MatIconModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__.MatIcon, _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_11__.MatProgressSpinnerModule, _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_11__.MatProgressSpinner],
        styles: [".rooms-card[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.toolbar[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n  margin-bottom: 12px;\n}\n\n.error-msg[_ngcontent-%COMP%] {\n  color: #c62828;\n  margin: 10px 0 0 0;\n}\n\n.loading[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 24px 0;\n}\n\n.table-wrapper[_ngcontent-%COMP%] {\n  overflow: auto;\n}\n\n.empty-msg[_ngcontent-%COMP%] {\n  margin-top: 12px;\n  opacity: 0.8;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvcGFnZXMvcmVzZXJ2YXIvcmVzZXJ2YXIuY29tcG9uZW50LnNjc3MiLCJ3ZWJwYWNrOi8vLi8uLi8uLi8uLi8uLi9Qcm9ncmElMjBXZWIvUHJveWVjdG8lMjBmaW5hbC90ZXN0LUFjdGl2aWRhZC1zNC9jbGllbnQvc3JjL2FwcC9wYWdlcy9yZXNlcnZhci9yZXNlcnZhci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFdBQUE7QUNDRjs7QURFQTtFQUNFLGFBQUE7RUFDQSx5QkFBQTtFQUNBLG1CQUFBO0FDQ0Y7O0FERUE7RUFDRSxjQUFBO0VBQ0Esa0JBQUE7QUNDRjs7QURFQTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsZUFBQTtBQ0NGOztBREVBO0VBQ0UsY0FBQTtBQ0NGOztBREVBO0VBQ0UsZ0JBQUE7RUFDQSxZQUFBO0FDQ0YiLCJzb3VyY2VzQ29udGVudCI6WyIucm9vbXMtY2FyZCB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi50b29sYmFyIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XHJcbiAgbWFyZ2luLWJvdHRvbTogMTJweDtcclxufVxyXG5cclxuLmVycm9yLW1zZyB7XHJcbiAgY29sb3I6ICNjNjI4Mjg7XHJcbiAgbWFyZ2luOiAxMHB4IDAgMCAwO1xyXG59XHJcblxyXG4ubG9hZGluZyB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIHBhZGRpbmc6IDI0cHggMDtcclxufVxyXG5cclxuLnRhYmxlLXdyYXBwZXIge1xyXG4gIG92ZXJmbG93OiBhdXRvO1xyXG59XHJcblxyXG4uZW1wdHktbXNnIHtcclxuICBtYXJnaW4tdG9wOiAxMnB4O1xyXG4gIG9wYWNpdHk6IDAuODtcclxufVxyXG5cclxuIiwiLnJvb21zLWNhcmQge1xuICB3aWR0aDogMTAwJTtcbn1cblxuLnRvb2xiYXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xuICBtYXJnaW4tYm90dG9tOiAxMnB4O1xufVxuXG4uZXJyb3ItbXNnIHtcbiAgY29sb3I6ICNjNjI4Mjg7XG4gIG1hcmdpbjogMTBweCAwIDAgMDtcbn1cblxuLmxvYWRpbmcge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgcGFkZGluZzogMjRweCAwO1xufVxuXG4udGFibGUtd3JhcHBlciB7XG4gIG92ZXJmbG93OiBhdXRvO1xufVxuXG4uZW1wdHktbXNnIHtcbiAgbWFyZ2luLXRvcDogMTJweDtcbiAgb3BhY2l0eTogMC44O1xufSJdLCJzb3VyY2VSb290IjoiIn0= */"]
      });
    }
  }
  return ReservarComponent;
})();

/***/ })

}]);
//# sourceMappingURL=749.js.map