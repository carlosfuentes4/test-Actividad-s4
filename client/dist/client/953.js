"use strict";
(self["webpackChunkclient"] = self["webpackChunkclient"] || []).push([[953],{

/***/ 4953:
/*!***********************************************************************!*\
  !*** ./src/app/pages/reservar/reservation-create-dialog.component.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ReservationCreateDialogComponent: () => (/* binding */ ReservationCreateDialogComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 4456);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/dialog */ 2587);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/button */ 4175);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/form-field */ 4950);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/input */ 5541);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/select */ 5175);
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/datepicker */ 1977);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/core */ 4646);
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/progress-spinner */ 1134);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/icon */ 3840);
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/checkbox */ 7024);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _services_rooms_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../services/rooms.service */ 6526);
/* harmony import */ var _services_users_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/users.service */ 3221);
/* harmony import */ var _services_reservations_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/reservations.service */ 9549);




























const _forTrack0 = ($index, $item) => $item.value;
function ReservationCreateDialogComponent_mat_option_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-option", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const r_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("value", r_r2.idHabitacion);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate2"](" ", r_r2.numeroHabitacion, " (", r_r2.tipoHabitacion, ") ");
  }
}
function ReservationCreateDialogComponent_mat_hint_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-hint");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Seleccionada desde la lista de habitaciones");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
function ReservationCreateDialogComponent_mat_error_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " Selecciona una habitaci\u00F3n. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
function ReservationCreateDialogComponent_mat_option_18_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-option", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const u_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("value", u_r3.idUser);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate2"](" ", u_r3.nombreCompleto, " (", u_r3.correo, ") ");
  }
}
function ReservationCreateDialogComponent_mat_hint_19_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-hint");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Usuario actual");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
function ReservationCreateDialogComponent_mat_error_20_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " Selecciona un hu\u00E9sped. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
function ReservationCreateDialogComponent_mat_error_29_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " Requerido. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
function ReservationCreateDialogComponent_mat_error_37_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " Requerido. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
function ReservationCreateDialogComponent_For_44_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-option", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const e_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("value", e_r4.value);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](e_r4.label);
  }
}
function ReservationCreateDialogComponent_p_64_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "p", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r4.errorMessage);
  }
}
function ReservationCreateDialogComponent_mat_spinner_71_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "mat-spinner", 29);
  }
}
function ReservationCreateDialogComponent_mat_icon_72_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-icon", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "check");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
function ReservationCreateDialogComponent_span_73_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Crear");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
let ReservationCreateDialogComponent = /*#__PURE__*/(() => {
  class ReservationCreateDialogComponent {
    constructor(fb, dialogRef, data, roomsService, usersService, reservationsService) {
      this.fb = fb;
      this.dialogRef = dialogRef;
      this.data = data;
      this.roomsService = roomsService;
      this.usersService = usersService;
      this.reservationsService = reservationsService;
      this.loading = false;
      this.errorMessage = '';
      this.rooms = [];
      this.users = [];
      /** Cuando es true, habitación y huésped vienen predefinidos (vista invitado) y se muestran bloqueados. */
      this.lockGuestAndRoom = false;
      // Mapeo igual al enum ReservationStatus del backend.
      this.estados = [{
        value: 0,
        label: 'Pendiente'
      }, {
        value: 1,
        label: 'Confirmado'
      }, {
        value: 2,
        label: 'En proceso'
      }, {
        value: 3,
        label: 'Completado'
      }, {
        value: 4,
        label: 'Cancelado'
      }, {
        value: 5,
        label: 'Ausente'
      }];
      const today = new Date();
      const entradaDefault = this.startOfDay(today);
      const salidaDefault = this.endOfDay(today);
      this.form = this.fb.group({
        idReservacion: [''],
        idHabitacion: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required]],
        idHuesped: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required]],
        fechaEntrada: [entradaDefault, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required]],
        fechaSalida: [salidaDefault, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required]],
        estado: [0, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required]],
        numeroHuespedes: [1, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.min(1)]],
        montoTotal: [0, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.min(0)]],
        moneda: ['HNL', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required]],
        pagoConfirmado: [false],
        solicitudesEspeciales: ['']
      });
      const payload = data && typeof data === 'object' && 'room' in data && 'guest' in data ? data : null;
      if (payload?.room && payload?.guest) {
        this.lockGuestAndRoom = true;
        this.rooms = [payload.room];
        this.users = [{
          idUser: payload.guest.id,
          correo: payload.guest.email,
          nombreCompleto: payload.guest.nombreCompleto,
          rol: 1
        }];
        this.form.patchValue({
          idHabitacion: payload.room.idHabitacion,
          idHuesped: payload.guest.id
        });
        this.form.get('idHabitacion')?.disable();
        this.form.get('idHuesped')?.disable();
      } else {
        this.initSelects();
      }
    }
    initSelects() {
      // Cargamos ambos selects al abrir el modal.
      this.roomsService.getRooms().subscribe({
        next: rooms => {
          this.rooms = rooms;
        },
        error: () => {
          // Si falla, se verá vacío y la API regresará error al crear.
        }
      });
      this.usersService.getUsers().subscribe({
        next: users => {
          // Invitado = huésped (por seguridad convertimos a number).
          this.users = users.filter(u => Number(u.rol) === 1);
        },
        error: () => {
          this.users = [];
        }
      });
    }
    onCancel() {
      this.dialogRef.close(false);
    }
    startOfDay(d) {
      const x = new Date(d);
      x.setHours(0, 0, 0, 0);
      return x;
    }
    endOfDay(d) {
      const x = new Date(d);
      x.setHours(23, 59, 59, 999);
      return x;
    }
    onSubmit() {
      this.errorMessage = '';
      if (this.form.invalid) {
        this.form.markAllAsTouched();
        return;
      }
      const raw = this.form.getRawValue(); // getRawValue incluye campos deshabilitados
      // Payload con nombres en camelCase (por namingPolicy del backend).
      const payload = {
        idReservacion: raw.idReservacion?.trim() || undefined,
        idHabitacion: raw.idHabitacion,
        idHuesped: raw.idHuesped,
        fechaEntrada: this.startOfDay(new Date(raw.fechaEntrada)).toISOString(),
        fechaSalida: this.endOfDay(new Date(raw.fechaSalida)).toISOString(),
        estado: Number(raw.estado),
        numeroHuespedes: Number(raw.numeroHuespedes),
        montoTotal: Number(raw.montoTotal),
        moneda: raw.moneda,
        pagoConfirmado: Boolean(raw.pagoConfirmado),
        solicitudesEspeciales: raw.solicitudesEspeciales || undefined
      };
      this.loading = true;
      this.reservationsService.createReservation(payload).subscribe({
        next: res => {
          this.loading = false;
          this.dialogRef.close(res);
        },
        error: err => {
          this.loading = false;
          this.errorMessage = err?.error?.message ?? err?.message ?? 'No se pudo crear la reservación.';
        }
      });
    }
    static {
      this.ɵfac = function ReservationCreateDialogComponent_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || ReservationCreateDialogComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__.MatDialogRef), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__.MAT_DIALOG_DATA), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_services_rooms_service__WEBPACK_IMPORTED_MODULE_0__.RoomsService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_services_users_service__WEBPACK_IMPORTED_MODULE_1__.UsersService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_services_reservations_service__WEBPACK_IMPORTED_MODULE_2__.ReservationsService));
      };
    }
    static {
      this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
        type: ReservationCreateDialogComponent,
        selectors: [["app-reservation-create-dialog"]],
        standalone: true,
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵProvidersFeature"]([
        // Mostrar fechas en el input con el formato requerido por el proyecto.
        {
          provide: _angular_material_core__WEBPACK_IMPORTED_MODULE_6__.MAT_DATE_LOCALE,
          useValue: 'es-ES'
        }, {
          provide: _angular_material_core__WEBPACK_IMPORTED_MODULE_6__.MAT_DATE_FORMATS,
          useValue: {
            parse: {
              dateInput: 'dd/MM/yyyy'
            },
            display: {
              dateInput: 'dd/MM/yyyy',
              monthYearLabel: 'MMM yyyy',
              dateA11y: 'dd/MM/yyyy',
              monthYearA11y: 'MMMM yyyy'
            }
          }
        }]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵStandaloneFeature"]],
        decls: 74,
        vars: 19,
        consts: [["pickerEntrada", ""], ["pickerSalida", ""], ["mat-dialog-title", ""], [1, "dialog-content"], [3, "ngSubmit", "formGroup"], [1, "grid-2"], ["appearance", "outline", 1, "full-width"], ["formControlName", "idHabitacion"], [3, "value", 4, "ngFor", "ngForOf"], [4, "ngIf"], ["formControlName", "idHuesped"], ["matInput", "", "formControlName", "fechaEntrada", 3, "matDatepicker"], ["matSuffix", "", 3, "for"], ["matInput", "", "formControlName", "fechaSalida", 3, "matDatepicker"], ["formControlName", "estado"], [3, "value"], ["matInput", "", "type", "number", "formControlName", "numeroHuespedes"], ["matInput", "", "type", "number", "formControlName", "montoTotal"], ["matInput", "", "formControlName", "moneda"], ["formControlName", "pagoConfirmado"], ["matInput", "", "formControlName", "solicitudesEspeciales", "placeholder", "Ej: cama extra, alergias..."], ["class", "error-msg", 4, "ngIf"], [1, "actions"], ["mat-stroked-button", "", "type", "button", 3, "click", "disabled"], ["aria-hidden", "true", 1, "btn-icon"], ["mat-flat-button", "", "color", "primary", "type", "submit", 3, "disabled"], ["diameter", "18", 4, "ngIf"], ["aria-hidden", "true", "class", "btn-icon", 4, "ngIf"], [1, "error-msg"], ["diameter", "18"]],
        template: function ReservationCreateDialogComponent_Template(rf, ctx) {
          if (rf & 1) {
            const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "h2", 2)(1, "mat-icon");
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "event");
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, " Crear reservaci\u00F3n\n");
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "mat-dialog-content", 3)(5, "form", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngSubmit", function ReservationCreateDialogComponent_Template_form_ngSubmit_5_listener() {
              _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r1);
              return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx.onSubmit());
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "div", 5)(7, "mat-form-field", 6)(8, "mat-label");
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](9, "Habitaci\u00F3n");
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "mat-select", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](11, ReservationCreateDialogComponent_mat_option_11_Template, 2, 3, "mat-option", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](12, ReservationCreateDialogComponent_mat_hint_12_Template, 2, 0, "mat-hint", 9)(13, ReservationCreateDialogComponent_mat_error_13_Template, 2, 0, "mat-error", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](14, "mat-form-field", 6)(15, "mat-label");
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](16, "Hu\u00E9sped");
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](17, "mat-select", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](18, ReservationCreateDialogComponent_mat_option_18_Template, 2, 3, "mat-option", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](19, ReservationCreateDialogComponent_mat_hint_19_Template, 2, 0, "mat-hint", 9)(20, ReservationCreateDialogComponent_mat_error_20_Template, 2, 0, "mat-error", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](21, "div", 5)(22, "mat-form-field", 6)(23, "mat-label");
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](24, "Fecha entrada");
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](25, "input", 11)(26, "mat-datepicker-toggle", 12)(27, "mat-datepicker", null, 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](29, ReservationCreateDialogComponent_mat_error_29_Template, 2, 0, "mat-error", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](30, "mat-form-field", 6)(31, "mat-label");
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](32, "Fecha salida");
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](33, "input", 13)(34, "mat-datepicker-toggle", 12)(35, "mat-datepicker", null, 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](37, ReservationCreateDialogComponent_mat_error_37_Template, 2, 0, "mat-error", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](38, "div", 5)(39, "mat-form-field", 6)(40, "mat-label");
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](41, "Estado");
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](42, "mat-select", 14);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrepeaterCreate"](43, ReservationCreateDialogComponent_For_44_Template, 2, 2, "mat-option", 15, _forTrack0);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](45, "mat-form-field", 6)(46, "mat-label");
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](47, "N\u00FAmero de hu\u00E9spedes");
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](48, "input", 16);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](49, "div", 5)(50, "mat-form-field", 6)(51, "mat-label");
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](52, "Monto total");
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](53, "input", 17);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](54, "mat-form-field", 6)(55, "mat-label");
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](56, "Moneda");
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](57, "input", 18);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](58, "mat-checkbox", 19);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](59, "Pago confirmado");
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](60, "mat-form-field", 6)(61, "mat-label");
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](62, "Solicitudes especiales");
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](63, "input", 20);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](64, ReservationCreateDialogComponent_p_64_Template, 2, 1, "p", 21);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](65, "div", 22)(66, "button", 23);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ReservationCreateDialogComponent_Template_button_click_66_listener() {
              _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r1);
              return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx.onCancel());
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](67, "mat-icon", 24);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](68, "close");
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](69, " Cancelar ");
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](70, "button", 25);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](71, ReservationCreateDialogComponent_mat_spinner_71_Template, 1, 0, "mat-spinner", 26)(72, ReservationCreateDialogComponent_mat_icon_72_Template, 2, 0, "mat-icon", 27)(73, ReservationCreateDialogComponent_span_73_Template, 2, 0, "span", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
          }
          if (rf & 2) {
            let tmp_5_0;
            let tmp_8_0;
            let tmp_11_0;
            let tmp_14_0;
            const pickerEntrada_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](28);
            const pickerSalida_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](36);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("formGroup", ctx.form);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx.rooms);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.lockGuestAndRoom);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", (tmp_5_0 = ctx.form.get("idHabitacion")) == null ? null : tmp_5_0.hasError("required"));
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx.users);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.lockGuestAndRoom);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", (tmp_8_0 = ctx.form.get("idHuesped")) == null ? null : tmp_8_0.hasError("required"));
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("matDatepicker", pickerEntrada_r6);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("for", pickerEntrada_r6);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", (tmp_11_0 = ctx.form.get("fechaEntrada")) == null ? null : tmp_11_0.hasError("required"));
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("matDatepicker", pickerSalida_r7);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("for", pickerSalida_r7);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", (tmp_14_0 = ctx.form.get("fechaSalida")) == null ? null : tmp_14_0.hasError("required"));
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrepeater"](ctx.estados);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](21);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.errorMessage);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("disabled", ctx.loading);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("disabled", ctx.loading);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.loading);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx.loading);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx.loading);
          }
        },
        dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.ReactiveFormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NumberValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControlName, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__.MatDialogModule, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__.MatDialogTitle, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__.MatDialogContent, _angular_material_button__WEBPACK_IMPORTED_MODULE_8__.MatButtonModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_8__.MatButton, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__.MatFormFieldModule, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__.MatLabel, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__.MatHint, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__.MatError, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__.MatSuffix, _angular_material_input__WEBPACK_IMPORTED_MODULE_10__.MatInputModule, _angular_material_input__WEBPACK_IMPORTED_MODULE_10__.MatInput, _angular_material_select__WEBPACK_IMPORTED_MODULE_11__.MatSelectModule, _angular_material_select__WEBPACK_IMPORTED_MODULE_11__.MatSelect, _angular_material_core__WEBPACK_IMPORTED_MODULE_6__.MatOption, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_12__.MatDatepickerModule, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_12__.MatDatepicker, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_12__.MatDatepickerInput, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_12__.MatDatepickerToggle, _angular_material_core__WEBPACK_IMPORTED_MODULE_6__.MatNativeDateModule, _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_13__.MatProgressSpinnerModule, _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_13__.MatProgressSpinner, _angular_material_icon__WEBPACK_IMPORTED_MODULE_14__.MatIconModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_14__.MatIcon, _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_15__.MatCheckboxModule, _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_15__.MatCheckbox],
        styles: [".full-width[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.grid-2[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 12px;\n}\n\n.dialog-content[_ngcontent-%COMP%] {\n  min-width: 720px;\n}\n\n.error-msg[_ngcontent-%COMP%] {\n  color: #c62828;\n  margin-top: 10px;\n}\n\n.actions[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n  gap: 10px;\n  margin-top: 16px;\n}\n\n[_nghost-%COMP%]     .mat-mdc-datepicker-panel, \n[_nghost-%COMP%]     .cdk-overlay-pane {\n  z-index: 10000 !important;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvcGFnZXMvcmVzZXJ2YXIvcmVzZXJ2YXRpb24tY3JlYXRlLWRpYWxvZy5jb21wb25lbnQuc2NzcyIsIndlYnBhY2s6Ly8uLy4uLy4uLy4uLy4uL1Byb2dyYSUyMFdlYi9Qcm95ZWN0byUyMGZpbmFsL3Rlc3QtQWN0aXZpZGFkLXM0L2NsaWVudC9zcmMvYXBwL3BhZ2VzL3Jlc2VydmFyL3Jlc2VydmF0aW9uLWNyZWF0ZS1kaWFsb2cuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxXQUFBO0FDQ0Y7O0FERUE7RUFDRSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxTQUFBO0FDQ0Y7O0FERUE7RUFDRSxnQkFBQTtBQ0NGOztBREVBO0VBQ0UsY0FBQTtFQUNBLGdCQUFBO0FDQ0Y7O0FERUE7RUFDRSxhQUFBO0VBQ0EseUJBQUE7RUFDQSxTQUFBO0VBQ0EsZ0JBQUE7QUNDRjs7QURJQTs7RUFFRSx5QkFBQTtBQ0RGIiwic291cmNlc0NvbnRlbnQiOlsiLmZ1bGwtd2lkdGgge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4uZ3JpZC0yIHtcclxuICBkaXNwbGF5OiBncmlkO1xyXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjtcclxuICBnYXA6IDEycHg7XHJcbn1cclxuXHJcbi5kaWFsb2ctY29udGVudCB7XHJcbiAgbWluLXdpZHRoOiA3MjBweDtcclxufVxyXG5cclxuLmVycm9yLW1zZyB7XHJcbiAgY29sb3I6ICNjNjI4Mjg7XHJcbiAgbWFyZ2luLXRvcDogMTBweDtcclxufVxyXG5cclxuLmFjdGlvbnMge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcclxuICBnYXA6IDEwcHg7XHJcbiAgbWFyZ2luLXRvcDogMTZweDtcclxufVxyXG5cclxuLy8gRWwgcGFuZWwgZGUgTWF0RGF0ZXBpY2tlciBzZSByZW5kZXJpemEgZW4gdW4gb3ZlcmxheSBnbG9iYWwgKENESykuXHJcbi8vIEVuIGFsZ3Vub3MgbGF5b3V0cyBkZW50cm8gZGUgTWF0RGlhbG9nIHB1ZWRlIHF1ZWRhciBwb3IgZGViYWpvLlxyXG46aG9zdCA6Om5nLWRlZXAgLm1hdC1tZGMtZGF0ZXBpY2tlci1wYW5lbCxcclxuOmhvc3QgOjpuZy1kZWVwIC5jZGstb3ZlcmxheS1wYW5lIHtcclxuICB6LWluZGV4OiAxMDAwMCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4iLCIuZnVsbC13aWR0aCB7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4uZ3JpZC0yIHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyO1xuICBnYXA6IDEycHg7XG59XG5cbi5kaWFsb2ctY29udGVudCB7XG4gIG1pbi13aWR0aDogNzIwcHg7XG59XG5cbi5lcnJvci1tc2cge1xuICBjb2xvcjogI2M2MjgyODtcbiAgbWFyZ2luLXRvcDogMTBweDtcbn1cblxuLmFjdGlvbnMge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xuICBnYXA6IDEwcHg7XG4gIG1hcmdpbi10b3A6IDE2cHg7XG59XG5cbjpob3N0IDo6bmctZGVlcCAubWF0LW1kYy1kYXRlcGlja2VyLXBhbmVsLFxuOmhvc3QgOjpuZy1kZWVwIC5jZGstb3ZlcmxheS1wYW5lIHtcbiAgei1pbmRleDogMTAwMDAgIWltcG9ydGFudDtcbn0iXSwic291cmNlUm9vdCI6IiJ9 */"]
      });
    }
  }
  return ReservationCreateDialogComponent;
})();

/***/ }),

/***/ 9549:
/*!**************************************************!*\
  !*** ./src/app/services/reservations.service.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ReservationsService: () => (/* binding */ ReservationsService)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ 6443);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../environments/environment */ 5312);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7580);




let ReservationsService = /*#__PURE__*/(() => {
  class ReservationsService {
    constructor(http) {
      this.http = http;
      this.apiUrl = `${_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiUrl}/reservations`;
      this.storageKey = 'probook_user';
    }
    getReservations() {
      const token = this.getToken();
      const headers = token ? new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpHeaders({
        Authorization: `Bearer ${token}`
      }) : undefined;
      return this.http.get(this.apiUrl, {
        headers
      });
    }
    createReservation(payload) {
      const token = this.getToken();
      const headers = token ? new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpHeaders({
        Authorization: `Bearer ${token}`
      }) : undefined;
      return this.http.post(this.apiUrl, payload, {
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
        if (token.startsWith('Bearer ')) token = token.slice('Bearer '.length).trim();
        return token || null;
      } catch {
        return null;
      }
    }
    static {
      this.ɵfac = function ReservationsService_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || ReservationsService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient));
      };
    }
    static {
      this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
        token: ReservationsService,
        factory: ReservationsService.ɵfac,
        providedIn: 'root'
      });
    }
  }
  return ReservationsService;
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

/***/ }),

/***/ 7024:
/*!**************************************************************!*\
  !*** ./node_modules/@angular/material/fesm2022/checkbox.mjs ***!
  \**************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MAT_CHECKBOX_CONTROL_VALUE_ACCESSOR: () => (/* binding */ MAT_CHECKBOX_CONTROL_VALUE_ACCESSOR),
/* harmony export */   MAT_CHECKBOX_DEFAULT_OPTIONS: () => (/* binding */ MAT_CHECKBOX_DEFAULT_OPTIONS),
/* harmony export */   MAT_CHECKBOX_DEFAULT_OPTIONS_FACTORY: () => (/* binding */ MAT_CHECKBOX_DEFAULT_OPTIONS_FACTORY),
/* harmony export */   MAT_CHECKBOX_REQUIRED_VALIDATOR: () => (/* binding */ MAT_CHECKBOX_REQUIRED_VALIDATOR),
/* harmony export */   MatCheckbox: () => (/* binding */ MatCheckbox),
/* harmony export */   MatCheckboxChange: () => (/* binding */ MatCheckboxChange),
/* harmony export */   MatCheckboxModule: () => (/* binding */ MatCheckboxModule),
/* harmony export */   MatCheckboxRequiredValidator: () => (/* binding */ MatCheckboxRequiredValidator),
/* harmony export */   TransitionCheckState: () => (/* binding */ TransitionCheckState),
/* harmony export */   _MatCheckboxRequiredValidatorModule: () => (/* binding */ _MatCheckboxRequiredValidatorModule)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ 4456);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/core */ 4646);





/** Injection token to be used to override the default options for `mat-checkbox`. */
const _c0 = ["input"];
const _c1 = ["label"];
const _c2 = ["*"];
const MAT_CHECKBOX_DEFAULT_OPTIONS = /*#__PURE__*/new _angular_core__WEBPACK_IMPORTED_MODULE_0__.InjectionToken('mat-checkbox-default-options', {
  providedIn: 'root',
  factory: MAT_CHECKBOX_DEFAULT_OPTIONS_FACTORY
});
/** @docs-private */
function MAT_CHECKBOX_DEFAULT_OPTIONS_FACTORY() {
  return {
    color: 'accent',
    clickAction: 'check-indeterminate',
    disabledInteractive: false
  };
}

/**
 * Represents the different states that require custom transitions between them.
 * @docs-private
 */
var TransitionCheckState = /*#__PURE__*/function (TransitionCheckState) {
  /** The initial state of the component before any user interaction. */
  TransitionCheckState[TransitionCheckState["Init"] = 0] = "Init";
  /** The state representing the component when it's becoming checked. */
  TransitionCheckState[TransitionCheckState["Checked"] = 1] = "Checked";
  /** The state representing the component when it's becoming unchecked. */
  TransitionCheckState[TransitionCheckState["Unchecked"] = 2] = "Unchecked";
  /** The state representing the component when it's becoming indeterminate. */
  TransitionCheckState[TransitionCheckState["Indeterminate"] = 3] = "Indeterminate";
  return TransitionCheckState;
}(TransitionCheckState || {});
/**
 * @deprecated Will stop being exported.
 * @breaking-change 19.0.0
 */
const MAT_CHECKBOX_CONTROL_VALUE_ACCESSOR = {
  provide: _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NG_VALUE_ACCESSOR,
  useExisting: /*#__PURE__*/(0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(() => MatCheckbox),
  multi: true
};
/** Change event object emitted by checkbox. */
class MatCheckboxChange {}
// Increasing integer for generating unique ids for checkbox components.
let nextUniqueId = 0;
// Default checkbox configuration.
const defaults = /*#__PURE__*/MAT_CHECKBOX_DEFAULT_OPTIONS_FACTORY();
let MatCheckbox = /*#__PURE__*/(() => {
  class MatCheckbox {
    /** Focuses the checkbox. */
    focus() {
      this._inputElement.nativeElement.focus();
    }
    /** Creates the change event that will be emitted by the checkbox. */
    _createChangeEvent(isChecked) {
      const event = new MatCheckboxChange();
      event.source = this;
      event.checked = isChecked;
      return event;
    }
    /** Gets the element on which to add the animation CSS classes. */
    _getAnimationTargetElement() {
      return this._inputElement?.nativeElement;
    }
    /** Returns the unique id for the visual hidden input. */
    get inputId() {
      return `${this.id || this._uniqueId}-input`;
    }
    constructor(_elementRef, _changeDetectorRef, _ngZone, tabIndex, _animationMode, _options) {
      this._elementRef = _elementRef;
      this._changeDetectorRef = _changeDetectorRef;
      this._ngZone = _ngZone;
      this._animationMode = _animationMode;
      this._options = _options;
      /** CSS classes to add when transitioning between the different checkbox states. */
      this._animationClasses = {
        uncheckedToChecked: 'mdc-checkbox--anim-unchecked-checked',
        uncheckedToIndeterminate: 'mdc-checkbox--anim-unchecked-indeterminate',
        checkedToUnchecked: 'mdc-checkbox--anim-checked-unchecked',
        checkedToIndeterminate: 'mdc-checkbox--anim-checked-indeterminate',
        indeterminateToChecked: 'mdc-checkbox--anim-indeterminate-checked',
        indeterminateToUnchecked: 'mdc-checkbox--anim-indeterminate-unchecked'
      };
      /**
       * Attached to the aria-label attribute of the host element. In most cases, aria-labelledby will
       * take precedence so this may be omitted.
       */
      this.ariaLabel = '';
      /**
       * Users can specify the `aria-labelledby` attribute which will be forwarded to the input element
       */
      this.ariaLabelledby = null;
      /** Whether the label should appear after or before the checkbox. Defaults to 'after' */
      this.labelPosition = 'after';
      /** Name value will be applied to the input element if present */
      this.name = null;
      /** Event emitted when the checkbox's `checked` value changes. */
      this.change = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
      /** Event emitted when the checkbox's `indeterminate` value changes. */
      this.indeterminateChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
      /**
       * Called when the checkbox is blurred. Needed to properly implement ControlValueAccessor.
       * @docs-private
       */
      this._onTouched = () => {};
      this._currentAnimationClass = '';
      this._currentCheckState = TransitionCheckState.Init;
      this._controlValueAccessorChangeFn = () => {};
      this._validatorChangeFn = () => {};
      this._checked = false;
      this._disabled = false;
      this._indeterminate = false;
      this._options = this._options || defaults;
      this.color = this._options.color || defaults.color;
      this.tabIndex = parseInt(tabIndex) || 0;
      this.id = this._uniqueId = `mat-mdc-checkbox-${++nextUniqueId}`;
      this.disabledInteractive = _options?.disabledInteractive ?? false;
    }
    ngOnChanges(changes) {
      if (changes['required']) {
        this._validatorChangeFn();
      }
    }
    ngAfterViewInit() {
      this._syncIndeterminate(this._indeterminate);
    }
    /** Whether the checkbox is checked. */
    get checked() {
      return this._checked;
    }
    set checked(value) {
      if (value != this.checked) {
        this._checked = value;
        this._changeDetectorRef.markForCheck();
      }
    }
    /** Whether the checkbox is disabled. */
    get disabled() {
      return this._disabled;
    }
    set disabled(value) {
      if (value !== this.disabled) {
        this._disabled = value;
        this._changeDetectorRef.markForCheck();
      }
    }
    /**
     * Whether the checkbox is indeterminate. This is also known as "mixed" mode and can be used to
     * represent a checkbox with three states, e.g. a checkbox that represents a nested list of
     * checkable items. Note that whenever checkbox is manually clicked, indeterminate is immediately
     * set to false.
     */
    get indeterminate() {
      return this._indeterminate;
    }
    set indeterminate(value) {
      const changed = value != this._indeterminate;
      this._indeterminate = value;
      if (changed) {
        if (this._indeterminate) {
          this._transitionCheckState(TransitionCheckState.Indeterminate);
        } else {
          this._transitionCheckState(this.checked ? TransitionCheckState.Checked : TransitionCheckState.Unchecked);
        }
        this.indeterminateChange.emit(this._indeterminate);
      }
      this._syncIndeterminate(this._indeterminate);
    }
    _isRippleDisabled() {
      return this.disableRipple || this.disabled;
    }
    /** Method being called whenever the label text changes. */
    _onLabelTextChange() {
      // Since the event of the `cdkObserveContent` directive runs outside of the zone, the checkbox
      // component will be only marked for check, but no actual change detection runs automatically.
      // Instead of going back into the zone in order to trigger a change detection which causes
      // *all* components to be checked (if explicitly marked or not using OnPush), we only trigger
      // an explicit change detection for the checkbox view and its children.
      this._changeDetectorRef.detectChanges();
    }
    // Implemented as part of ControlValueAccessor.
    writeValue(value) {
      this.checked = !!value;
    }
    // Implemented as part of ControlValueAccessor.
    registerOnChange(fn) {
      this._controlValueAccessorChangeFn = fn;
    }
    // Implemented as part of ControlValueAccessor.
    registerOnTouched(fn) {
      this._onTouched = fn;
    }
    // Implemented as part of ControlValueAccessor.
    setDisabledState(isDisabled) {
      this.disabled = isDisabled;
    }
    // Implemented as a part of Validator.
    validate(control) {
      return this.required && control.value !== true ? {
        'required': true
      } : null;
    }
    // Implemented as a part of Validator.
    registerOnValidatorChange(fn) {
      this._validatorChangeFn = fn;
    }
    _transitionCheckState(newState) {
      let oldState = this._currentCheckState;
      let element = this._getAnimationTargetElement();
      if (oldState === newState || !element) {
        return;
      }
      if (this._currentAnimationClass) {
        element.classList.remove(this._currentAnimationClass);
      }
      this._currentAnimationClass = this._getAnimationClassForCheckStateTransition(oldState, newState);
      this._currentCheckState = newState;
      if (this._currentAnimationClass.length > 0) {
        element.classList.add(this._currentAnimationClass);
        // Remove the animation class to avoid animation when the checkbox is moved between containers
        const animationClass = this._currentAnimationClass;
        this._ngZone.runOutsideAngular(() => {
          setTimeout(() => {
            element.classList.remove(animationClass);
          }, 1000);
        });
      }
    }
    _emitChangeEvent() {
      this._controlValueAccessorChangeFn(this.checked);
      this.change.emit(this._createChangeEvent(this.checked));
      // Assigning the value again here is redundant, but we have to do it in case it was
      // changed inside the `change` listener which will cause the input to be out of sync.
      if (this._inputElement) {
        this._inputElement.nativeElement.checked = this.checked;
      }
    }
    /** Toggles the `checked` state of the checkbox. */
    toggle() {
      this.checked = !this.checked;
      this._controlValueAccessorChangeFn(this.checked);
    }
    _handleInputClick() {
      const clickAction = this._options?.clickAction;
      // If resetIndeterminate is false, and the current state is indeterminate, do nothing on click
      if (!this.disabled && clickAction !== 'noop') {
        // When user manually click on the checkbox, `indeterminate` is set to false.
        if (this.indeterminate && clickAction !== 'check') {
          Promise.resolve().then(() => {
            this._indeterminate = false;
            this.indeterminateChange.emit(this._indeterminate);
          });
        }
        this._checked = !this._checked;
        this._transitionCheckState(this._checked ? TransitionCheckState.Checked : TransitionCheckState.Unchecked);
        // Emit our custom change event if the native input emitted one.
        // It is important to only emit it, if the native input triggered one, because
        // we don't want to trigger a change event, when the `checked` variable changes for example.
        this._emitChangeEvent();
      } else if (this.disabled && this.disabledInteractive || !this.disabled && clickAction === 'noop') {
        // Reset native input when clicked with noop. The native checkbox becomes checked after
        // click, reset it to be align with `checked` value of `mat-checkbox`.
        this._inputElement.nativeElement.checked = this.checked;
        this._inputElement.nativeElement.indeterminate = this.indeterminate;
      }
    }
    _onInteractionEvent(event) {
      // We always have to stop propagation on the change event.
      // Otherwise the change event, from the input element, will bubble up and
      // emit its event object to the `change` output.
      event.stopPropagation();
    }
    _onBlur() {
      // When a focused element becomes disabled, the browser *immediately* fires a blur event.
      // Angular does not expect events to be raised during change detection, so any state change
      // (such as a form control's 'ng-touched') will cause a changed-after-checked error.
      // See https://github.com/angular/angular/issues/17793. To work around this, we defer
      // telling the form control it has been touched until the next tick.
      Promise.resolve().then(() => {
        this._onTouched();
        this._changeDetectorRef.markForCheck();
      });
    }
    _getAnimationClassForCheckStateTransition(oldState, newState) {
      // Don't transition if animations are disabled.
      if (this._animationMode === 'NoopAnimations') {
        return '';
      }
      switch (oldState) {
        case TransitionCheckState.Init:
          // Handle edge case where user interacts with checkbox that does not have [(ngModel)] or
          // [checked] bound to it.
          if (newState === TransitionCheckState.Checked) {
            return this._animationClasses.uncheckedToChecked;
          } else if (newState == TransitionCheckState.Indeterminate) {
            return this._checked ? this._animationClasses.checkedToIndeterminate : this._animationClasses.uncheckedToIndeterminate;
          }
          break;
        case TransitionCheckState.Unchecked:
          return newState === TransitionCheckState.Checked ? this._animationClasses.uncheckedToChecked : this._animationClasses.uncheckedToIndeterminate;
        case TransitionCheckState.Checked:
          return newState === TransitionCheckState.Unchecked ? this._animationClasses.checkedToUnchecked : this._animationClasses.checkedToIndeterminate;
        case TransitionCheckState.Indeterminate:
          return newState === TransitionCheckState.Checked ? this._animationClasses.indeterminateToChecked : this._animationClasses.indeterminateToUnchecked;
      }
      return '';
    }
    /**
     * Syncs the indeterminate value with the checkbox DOM node.
     *
     * We sync `indeterminate` directly on the DOM node, because in Ivy the check for whether a
     * property is supported on an element boils down to `if (propName in element)`. Domino's
     * HTMLInputElement doesn't have an `indeterminate` property so Ivy will warn during
     * server-side rendering.
     */
    _syncIndeterminate(value) {
      const nativeCheckbox = this._inputElement;
      if (nativeCheckbox) {
        nativeCheckbox.nativeElement.indeterminate = value;
      }
    }
    _onInputClick() {
      this._handleInputClick();
    }
    _onTouchTargetClick() {
      this._handleInputClick();
      if (!this.disabled) {
        // Normally the input should be focused already, but if the click
        // comes from the touch target, then we might have to focus it ourselves.
        this._inputElement.nativeElement.focus();
      }
    }
    /**
     *  Prevent click events that come from the `<label/>` element from bubbling. This prevents the
     *  click handler on the host from triggering twice when clicking on the `<label/>` element. After
     *  the click event on the `<label/>` propagates, the browsers dispatches click on the associated
     *  `<input/>`. By preventing clicks on the label by bubbling, we ensure only one click event
     *  bubbles when the label is clicked.
     */
    _preventBubblingFromLabel(event) {
      if (!!event.target && this._labelElement.nativeElement.contains(event.target)) {
        event.stopPropagation();
      }
    }
    static {
      this.ɵfac = function MatCheckbox_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || MatCheckbox)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinjectAttribute"]('tabindex'), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ANIMATION_MODULE_TYPE, 8), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](MAT_CHECKBOX_DEFAULT_OPTIONS, 8));
      };
    }
    static {
      this.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: MatCheckbox,
        selectors: [["mat-checkbox"]],
        viewQuery: function MatCheckbox_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c1, 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_angular_material_core__WEBPACK_IMPORTED_MODULE_2__.MatRipple, 5);
          }
          if (rf & 2) {
            let _t;
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx._inputElement = _t.first);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx._labelElement = _t.first);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.ripple = _t.first);
          }
        },
        hostAttrs: [1, "mat-mdc-checkbox"],
        hostVars: 16,
        hostBindings: function MatCheckbox_HostBindings(rf, ctx) {
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵhostProperty"]("id", ctx.id);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("tabindex", null)("aria-label", null)("aria-labelledby", null);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx.color ? "mat-" + ctx.color : "mat-accent");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("_mat-animation-noopable", ctx._animationMode === "NoopAnimations")("mdc-checkbox--disabled", ctx.disabled)("mat-mdc-checkbox-disabled", ctx.disabled)("mat-mdc-checkbox-checked", ctx.checked)("mat-mdc-checkbox-disabled-interactive", ctx.disabledInteractive);
          }
        },
        inputs: {
          ariaLabel: [0, "aria-label", "ariaLabel"],
          ariaLabelledby: [0, "aria-labelledby", "ariaLabelledby"],
          ariaDescribedby: [0, "aria-describedby", "ariaDescribedby"],
          id: "id",
          required: [2, "required", "required", _angular_core__WEBPACK_IMPORTED_MODULE_0__.booleanAttribute],
          labelPosition: "labelPosition",
          name: "name",
          value: "value",
          disableRipple: [2, "disableRipple", "disableRipple", _angular_core__WEBPACK_IMPORTED_MODULE_0__.booleanAttribute],
          tabIndex: [2, "tabIndex", "tabIndex", value => value == null ? undefined : (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.numberAttribute)(value)],
          color: "color",
          disabledInteractive: [2, "disabledInteractive", "disabledInteractive", _angular_core__WEBPACK_IMPORTED_MODULE_0__.booleanAttribute],
          checked: [2, "checked", "checked", _angular_core__WEBPACK_IMPORTED_MODULE_0__.booleanAttribute],
          disabled: [2, "disabled", "disabled", _angular_core__WEBPACK_IMPORTED_MODULE_0__.booleanAttribute],
          indeterminate: [2, "indeterminate", "indeterminate", _angular_core__WEBPACK_IMPORTED_MODULE_0__.booleanAttribute]
        },
        outputs: {
          change: "change",
          indeterminateChange: "indeterminateChange"
        },
        exportAs: ["matCheckbox"],
        standalone: true,
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([MAT_CHECKBOX_CONTROL_VALUE_ACCESSOR, {
          provide: _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NG_VALIDATORS,
          useExisting: MatCheckbox,
          multi: true
        }]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInputTransformsFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵStandaloneFeature"]],
        ngContentSelectors: _c2,
        decls: 15,
        vars: 20,
        consts: [["checkbox", ""], ["input", ""], ["label", ""], ["mat-internal-form-field", "", 3, "click", "labelPosition"], [1, "mdc-checkbox"], [1, "mat-mdc-checkbox-touch-target", 3, "click"], ["type", "checkbox", 1, "mdc-checkbox__native-control", 3, "blur", "click", "change", "checked", "indeterminate", "disabled", "id", "required", "tabIndex"], [1, "mdc-checkbox__ripple"], [1, "mdc-checkbox__background"], ["focusable", "false", "viewBox", "0 0 24 24", "aria-hidden", "true", 1, "mdc-checkbox__checkmark"], ["fill", "none", "d", "M1.73,12.91 8.1,19.28 22.79,4.59", 1, "mdc-checkbox__checkmark-path"], [1, "mdc-checkbox__mixedmark"], ["mat-ripple", "", 1, "mat-mdc-checkbox-ripple", "mat-mdc-focus-indicator", 3, "matRippleTrigger", "matRippleDisabled", "matRippleCentered"], [1, "mdc-label", 3, "for"]],
        template: function MatCheckbox_Template(rf, ctx) {
          if (rf & 1) {
            const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MatCheckbox_Template_div_click_0_listener($event) {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1);
              return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx._preventBubblingFromLabel($event));
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 4, 0)(3, "div", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MatCheckbox_Template_div_click_3_listener() {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1);
              return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx._onTouchTargetClick());
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "input", 6, 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("blur", function MatCheckbox_Template_input_blur_4_listener() {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1);
              return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx._onBlur());
            })("click", function MatCheckbox_Template_input_click_4_listener() {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1);
              return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx._onInputClick());
            })("change", function MatCheckbox_Template_input_change_4_listener($event) {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1);
              return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx._onInteractionEvent($event));
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "div", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "svg", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "path", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "div", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "div", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "label", 13, 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](14);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          }
          if (rf & 2) {
            const checkbox_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("labelPosition", ctx.labelPosition);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("mdc-checkbox--selected", ctx.checked);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("checked", ctx.checked)("indeterminate", ctx.indeterminate)("disabled", ctx.disabled && !ctx.disabledInteractive)("id", ctx.inputId)("required", ctx.required)("tabIndex", ctx.disabled && !ctx.disabledInteractive ? -1 : ctx.tabIndex);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-label", ctx.ariaLabel || null)("aria-labelledby", ctx.ariaLabelledby)("aria-describedby", ctx.ariaDescribedby)("aria-checked", ctx.indeterminate ? "mixed" : null)("aria-disabled", ctx.disabled && ctx.disabledInteractive ? true : null)("name", ctx.name)("value", ctx.value);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matRippleTrigger", checkbox_r2)("matRippleDisabled", ctx.disableRipple || ctx.disabled)("matRippleCentered", true);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("for", ctx.inputId);
          }
        },
        dependencies: [_angular_material_core__WEBPACK_IMPORTED_MODULE_2__.MatRipple, _angular_material_core__WEBPACK_IMPORTED_MODULE_2__._MatInternalFormField],
        styles: [".mdc-checkbox{display:inline-block;position:relative;flex:0 0 18px;box-sizing:content-box;width:18px;height:18px;line-height:0;white-space:nowrap;cursor:pointer;vertical-align:bottom;padding:calc((var(--mdc-checkbox-state-layer-size, 40px) - 18px)/2);margin:calc((var(--mdc-checkbox-state-layer-size, 40px) - var(--mdc-checkbox-state-layer-size, 40px))/2)}.mdc-checkbox:hover .mdc-checkbox__ripple{opacity:var(--mdc-checkbox-unselected-hover-state-layer-opacity, var(--mat-app-hover-state-layer-opacity));background-color:var(--mdc-checkbox-unselected-hover-state-layer-color, var(--mat-app-on-surface))}.mdc-checkbox:hover .mat-mdc-checkbox-ripple .mat-ripple-element{background-color:var(--mdc-checkbox-unselected-hover-state-layer-color, var(--mat-app-on-surface))}.mdc-checkbox .mdc-checkbox__native-control:focus~.mdc-checkbox__ripple{opacity:var(--mdc-checkbox-unselected-focus-state-layer-opacity, var(--mat-app-focus-state-layer-opacity));background-color:var(--mdc-checkbox-unselected-focus-state-layer-color, var(--mat-app-on-surface))}.mdc-checkbox .mdc-checkbox__native-control:focus~.mat-mdc-checkbox-ripple .mat-ripple-element{background-color:var(--mdc-checkbox-unselected-focus-state-layer-color, var(--mat-app-on-surface))}.mdc-checkbox:active .mdc-checkbox__native-control~.mdc-checkbox__ripple{opacity:var(--mdc-checkbox-unselected-pressed-state-layer-opacity, var(--mat-app-pressed-state-layer-opacity));background-color:var(--mdc-checkbox-unselected-pressed-state-layer-color, var(--mat-app-primary))}.mdc-checkbox:active .mdc-checkbox__native-control~.mat-mdc-checkbox-ripple .mat-ripple-element{background-color:var(--mdc-checkbox-unselected-pressed-state-layer-color, var(--mat-app-primary))}.mdc-checkbox:hover .mdc-checkbox__native-control:checked~.mdc-checkbox__ripple{opacity:var(--mdc-checkbox-selected-hover-state-layer-opacity, var(--mat-app-hover-state-layer-opacity));background-color:var(--mdc-checkbox-selected-hover-state-layer-color, var(--mat-app-primary))}.mdc-checkbox:hover .mdc-checkbox__native-control:checked~.mat-mdc-checkbox-ripple .mat-ripple-element{background-color:var(--mdc-checkbox-selected-hover-state-layer-color, var(--mat-app-primary))}.mdc-checkbox .mdc-checkbox__native-control:focus:checked~.mdc-checkbox__ripple{opacity:var(--mdc-checkbox-selected-focus-state-layer-opacity, var(--mat-app-focus-state-layer-opacity));background-color:var(--mdc-checkbox-selected-focus-state-layer-color, var(--mat-app-primary))}.mdc-checkbox .mdc-checkbox__native-control:focus:checked~.mat-mdc-checkbox-ripple .mat-ripple-element{background-color:var(--mdc-checkbox-selected-focus-state-layer-color, var(--mat-app-primary))}.mdc-checkbox:active .mdc-checkbox__native-control:checked~.mdc-checkbox__ripple{opacity:var(--mdc-checkbox-selected-pressed-state-layer-opacity, var(--mat-app-pressed-state-layer-opacity));background-color:var(--mdc-checkbox-selected-pressed-state-layer-color, var(--mat-app-on-surface))}.mdc-checkbox:active .mdc-checkbox__native-control:checked~.mat-mdc-checkbox-ripple .mat-ripple-element{background-color:var(--mdc-checkbox-selected-pressed-state-layer-color, var(--mat-app-on-surface))}.mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox .mdc-checkbox__native-control~.mat-mdc-checkbox-ripple .mat-ripple-element,.mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox .mdc-checkbox__native-control~.mdc-checkbox__ripple{background-color:var(--mdc-checkbox-unselected-hover-state-layer-color, var(--mat-app-on-surface))}.mdc-checkbox .mdc-checkbox__native-control{position:absolute;margin:0;padding:0;opacity:0;cursor:inherit;width:var(--mdc-checkbox-state-layer-size, 40px);height:var(--mdc-checkbox-state-layer-size, 40px);top:calc((var(--mdc-checkbox-state-layer-size, 40px) - var(--mdc-checkbox-state-layer-size, 40px))/2);right:calc((var(--mdc-checkbox-state-layer-size, 40px) - var(--mdc-checkbox-state-layer-size, 40px))/2);left:calc((var(--mdc-checkbox-state-layer-size, 40px) - var(--mdc-checkbox-state-layer-size, 40px))/2)}.mdc-checkbox--disabled{cursor:default;pointer-events:none}.cdk-high-contrast-active .mdc-checkbox--disabled{opacity:.5}.mdc-checkbox__background{display:inline-flex;position:absolute;align-items:center;justify-content:center;box-sizing:border-box;width:18px;height:18px;border:2px solid currentColor;border-radius:2px;background-color:rgba(0,0,0,0);pointer-events:none;will-change:background-color,border-color;transition:background-color 90ms cubic-bezier(0.4, 0, 0.6, 1),border-color 90ms cubic-bezier(0.4, 0, 0.6, 1);-webkit-print-color-adjust:exact;color-adjust:exact;border-color:var(--mdc-checkbox-unselected-icon-color, var(--mat-app-on-surface-variant));top:calc((var(--mdc-checkbox-state-layer-size, 40px) - 18px)/2);left:calc((var(--mdc-checkbox-state-layer-size, 40px) - 18px)/2)}.mdc-checkbox__native-control:enabled:checked~.mdc-checkbox__background,.mdc-checkbox__native-control:enabled:indeterminate~.mdc-checkbox__background{border-color:var(--mdc-checkbox-selected-icon-color, var(--mat-app-primary));background-color:var(--mdc-checkbox-selected-icon-color, var(--mat-app-primary))}.mdc-checkbox--disabled .mdc-checkbox__background{border-color:var(--mdc-checkbox-disabled-unselected-icon-color)}.mdc-checkbox__native-control:disabled:checked~.mdc-checkbox__background,.mdc-checkbox__native-control:disabled:indeterminate~.mdc-checkbox__background{background-color:var(--mdc-checkbox-disabled-selected-icon-color);border-color:rgba(0,0,0,0)}.mdc-checkbox:hover .mdc-checkbox__native-control:not(:checked)~.mdc-checkbox__background,.mdc-checkbox:hover .mdc-checkbox__native-control:not(:indeterminate)~.mdc-checkbox__background{border-color:var(--mdc-checkbox-unselected-hover-icon-color, var(--mat-app-on-surface));background-color:rgba(0,0,0,0)}.mdc-checkbox:hover .mdc-checkbox__native-control:checked~.mdc-checkbox__background,.mdc-checkbox:hover .mdc-checkbox__native-control:indeterminate~.mdc-checkbox__background{border-color:var(--mdc-checkbox-selected-hover-icon-color, var(--mat-app-primary));background-color:var(--mdc-checkbox-selected-hover-icon-color, var(--mat-app-primary))}.mdc-checkbox__native-control:focus:focus:not(:checked)~.mdc-checkbox__background,.mdc-checkbox__native-control:focus:focus:not(:indeterminate)~.mdc-checkbox__background{border-color:var(--mdc-checkbox-unselected-focus-icon-color, var(--mat-app-on-surface))}.mdc-checkbox__native-control:focus:focus:checked~.mdc-checkbox__background,.mdc-checkbox__native-control:focus:focus:indeterminate~.mdc-checkbox__background{border-color:var(--mdc-checkbox-selected-focus-icon-color, var(--mat-app-primary));background-color:var(--mdc-checkbox-selected-focus-icon-color, var(--mat-app-primary))}.mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox:hover .mdc-checkbox__native-control~.mdc-checkbox__background,.mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox .mdc-checkbox__native-control:focus~.mdc-checkbox__background,.mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox__background{border-color:var(--mdc-checkbox-disabled-unselected-icon-color)}.mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox__native-control:checked~.mdc-checkbox__background,.mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox__native-control:indeterminate~.mdc-checkbox__background{background-color:var(--mdc-checkbox-disabled-selected-icon-color);border-color:rgba(0,0,0,0)}.mdc-checkbox__checkmark{position:absolute;top:0;right:0;bottom:0;left:0;width:100%;opacity:0;transition:opacity 180ms cubic-bezier(0.4, 0, 0.6, 1);color:var(--mdc-checkbox-selected-checkmark-color, var(--mat-app-on-primary))}.cdk-high-contrast-active .mdc-checkbox__checkmark{color:CanvasText}.mdc-checkbox--disabled .mdc-checkbox__checkmark,.mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox__checkmark{color:var(--mdc-checkbox-disabled-selected-checkmark-color, var(--mat-app-surface))}.cdk-high-contrast-active .mdc-checkbox--disabled .mdc-checkbox__checkmark,.cdk-high-contrast-active .mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox__checkmark{color:CanvasText}.mdc-checkbox__checkmark-path{transition:stroke-dashoffset 180ms cubic-bezier(0.4, 0, 0.6, 1);stroke:currentColor;stroke-width:3.12px;stroke-dashoffset:29.7833385;stroke-dasharray:29.7833385}.mdc-checkbox__mixedmark{width:100%;height:0;transform:scaleX(0) rotate(0deg);border-width:1px;border-style:solid;opacity:0;transition:opacity 90ms cubic-bezier(0.4, 0, 0.6, 1),transform 90ms cubic-bezier(0.4, 0, 0.6, 1);border-color:var(--mdc-checkbox-selected-checkmark-color, var(--mat-app-on-primary))}.cdk-high-contrast-active .mdc-checkbox__mixedmark{margin:0 1px}.mdc-checkbox--disabled .mdc-checkbox__mixedmark,.mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox__mixedmark{border-color:var(--mdc-checkbox-disabled-selected-checkmark-color, var(--mat-app-surface))}.mdc-checkbox--anim-unchecked-checked .mdc-checkbox__background,.mdc-checkbox--anim-unchecked-indeterminate .mdc-checkbox__background,.mdc-checkbox--anim-checked-unchecked .mdc-checkbox__background,.mdc-checkbox--anim-indeterminate-unchecked .mdc-checkbox__background{animation-duration:180ms;animation-timing-function:linear}.mdc-checkbox--anim-unchecked-checked .mdc-checkbox__checkmark-path{animation:mdc-checkbox-unchecked-checked-checkmark-path 180ms linear;transition:none}.mdc-checkbox--anim-unchecked-indeterminate .mdc-checkbox__mixedmark{animation:mdc-checkbox-unchecked-indeterminate-mixedmark 90ms linear;transition:none}.mdc-checkbox--anim-checked-unchecked .mdc-checkbox__checkmark-path{animation:mdc-checkbox-checked-unchecked-checkmark-path 90ms linear;transition:none}.mdc-checkbox--anim-checked-indeterminate .mdc-checkbox__checkmark{animation:mdc-checkbox-checked-indeterminate-checkmark 90ms linear;transition:none}.mdc-checkbox--anim-checked-indeterminate .mdc-checkbox__mixedmark{animation:mdc-checkbox-checked-indeterminate-mixedmark 90ms linear;transition:none}.mdc-checkbox--anim-indeterminate-checked .mdc-checkbox__checkmark{animation:mdc-checkbox-indeterminate-checked-checkmark 500ms linear;transition:none}.mdc-checkbox--anim-indeterminate-checked .mdc-checkbox__mixedmark{animation:mdc-checkbox-indeterminate-checked-mixedmark 500ms linear;transition:none}.mdc-checkbox--anim-indeterminate-unchecked .mdc-checkbox__mixedmark{animation:mdc-checkbox-indeterminate-unchecked-mixedmark 300ms linear;transition:none}.mdc-checkbox__native-control:checked~.mdc-checkbox__background,.mdc-checkbox__native-control:indeterminate~.mdc-checkbox__background{transition:border-color 90ms cubic-bezier(0, 0, 0.2, 1),background-color 90ms cubic-bezier(0, 0, 0.2, 1)}.mdc-checkbox__native-control:checked~.mdc-checkbox__background .mdc-checkbox__checkmark-path,.mdc-checkbox__native-control:indeterminate~.mdc-checkbox__background .mdc-checkbox__checkmark-path{stroke-dashoffset:0}.mdc-checkbox__native-control:checked~.mdc-checkbox__background .mdc-checkbox__checkmark{transition:opacity 180ms cubic-bezier(0, 0, 0.2, 1),transform 180ms cubic-bezier(0, 0, 0.2, 1);opacity:1}.mdc-checkbox__native-control:checked~.mdc-checkbox__background .mdc-checkbox__mixedmark{transform:scaleX(1) rotate(-45deg)}.mdc-checkbox__native-control:indeterminate~.mdc-checkbox__background .mdc-checkbox__checkmark{transform:rotate(45deg);opacity:0;transition:opacity 90ms cubic-bezier(0.4, 0, 0.6, 1),transform 90ms cubic-bezier(0.4, 0, 0.6, 1)}.mdc-checkbox__native-control:indeterminate~.mdc-checkbox__background .mdc-checkbox__mixedmark{transform:scaleX(1) rotate(0deg);opacity:1}@keyframes mdc-checkbox-unchecked-checked-checkmark-path{0%,50%{stroke-dashoffset:29.7833385}50%{animation-timing-function:cubic-bezier(0, 0, 0.2, 1)}100%{stroke-dashoffset:0}}@keyframes mdc-checkbox-unchecked-indeterminate-mixedmark{0%,68.2%{transform:scaleX(0)}68.2%{animation-timing-function:cubic-bezier(0, 0, 0, 1)}100%{transform:scaleX(1)}}@keyframes mdc-checkbox-checked-unchecked-checkmark-path{from{animation-timing-function:cubic-bezier(0.4, 0, 1, 1);opacity:1;stroke-dashoffset:0}to{opacity:0;stroke-dashoffset:-29.7833385}}@keyframes mdc-checkbox-checked-indeterminate-checkmark{from{animation-timing-function:cubic-bezier(0, 0, 0.2, 1);transform:rotate(0deg);opacity:1}to{transform:rotate(45deg);opacity:0}}@keyframes mdc-checkbox-indeterminate-checked-checkmark{from{animation-timing-function:cubic-bezier(0.14, 0, 0, 1);transform:rotate(45deg);opacity:0}to{transform:rotate(360deg);opacity:1}}@keyframes mdc-checkbox-checked-indeterminate-mixedmark{from{animation-timing-function:cubic-bezier(0, 0, 0.2, 1);transform:rotate(-45deg);opacity:0}to{transform:rotate(0deg);opacity:1}}@keyframes mdc-checkbox-indeterminate-checked-mixedmark{from{animation-timing-function:cubic-bezier(0.14, 0, 0, 1);transform:rotate(0deg);opacity:1}to{transform:rotate(315deg);opacity:0}}@keyframes mdc-checkbox-indeterminate-unchecked-mixedmark{0%{animation-timing-function:linear;transform:scaleX(1);opacity:1}32.8%,100%{transform:scaleX(0);opacity:0}}.mat-mdc-checkbox{display:inline-block;position:relative;-webkit-tap-highlight-color:rgba(0,0,0,0)}.mat-mdc-checkbox._mat-animation-noopable .mdc-checkbox *,.mat-mdc-checkbox._mat-animation-noopable .mdc-checkbox *::before{transition:none !important;animation:none !important}.mat-mdc-checkbox label{cursor:pointer}.mat-mdc-checkbox .mat-internal-form-field{color:var(--mat-checkbox-label-text-color, var(--mat-app-on-surface));font-family:var(--mat-checkbox-label-text-font, var(--mat-app-body-medium-font));line-height:var(--mat-checkbox-label-text-line-height, var(--mat-app-body-medium-line-height));font-size:var(--mat-checkbox-label-text-size, var(--mat-app-body-medium-size));letter-spacing:var(--mat-checkbox-label-text-tracking, var(--mat-app-body-medium-tracking));font-weight:var(--mat-checkbox-label-text-weight, var(--mat-app-body-medium-weight))}.mat-mdc-checkbox.mat-mdc-checkbox-disabled.mat-mdc-checkbox-disabled-interactive{pointer-events:auto}.mat-mdc-checkbox.mat-mdc-checkbox-disabled.mat-mdc-checkbox-disabled-interactive input{cursor:default}.mat-mdc-checkbox.mat-mdc-checkbox-disabled label{cursor:default;color:var(--mat-checkbox-disabled-label-color)}.mat-mdc-checkbox label:empty{display:none}.mat-mdc-checkbox .mdc-checkbox__ripple{opacity:0}.mat-mdc-checkbox-ripple,.mdc-checkbox__ripple{top:0;left:0;right:0;bottom:0;position:absolute;border-radius:50%;pointer-events:none}.mat-mdc-checkbox-ripple:not(:empty),.mdc-checkbox__ripple:not(:empty){transform:translateZ(0)}.mat-mdc-checkbox-ripple .mat-ripple-element{opacity:.1}.mat-mdc-checkbox-touch-target{position:absolute;top:50%;left:50%;height:48px;width:48px;transform:translate(-50%, -50%);display:var(--mat-checkbox-touch-target-display)}.mat-mdc-checkbox-ripple::before{border-radius:50%}.mdc-checkbox__native-control:focus~.mat-mdc-focus-indicator::before{content:\"\"}"],
        encapsulation: 2,
        changeDetection: 0
      });
    }
  }
  return MatCheckbox;
})();
/*#__PURE__*/(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();

/**
 * @deprecated No longer used, `MatCheckbox` implements required validation directly.
 * @breaking-change 19.0.0
 */
const MAT_CHECKBOX_REQUIRED_VALIDATOR = {
  provide: _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NG_VALIDATORS,
  useExisting: /*#__PURE__*/(0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(() => MatCheckboxRequiredValidator),
  multi: true
};
/**
 * Validator for Material checkbox's required attribute in template-driven checkbox.
 * Current CheckboxRequiredValidator only work with `input type=checkbox` and does not
 * work with `mat-checkbox`.
 *
 * @deprecated No longer used, `MatCheckbox` implements required validation directly.
 * @breaking-change 19.0.0
 */
let MatCheckboxRequiredValidator = /*#__PURE__*/(() => {
  class MatCheckboxRequiredValidator extends _angular_forms__WEBPACK_IMPORTED_MODULE_1__.CheckboxRequiredValidator {
    static {
      this.ɵfac = /* @__PURE__ */(() => {
        let ɵMatCheckboxRequiredValidator_BaseFactory;
        return function MatCheckboxRequiredValidator_Factory(__ngFactoryType__) {
          return (ɵMatCheckboxRequiredValidator_BaseFactory || (ɵMatCheckboxRequiredValidator_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetInheritedFactory"](MatCheckboxRequiredValidator)))(__ngFactoryType__ || MatCheckboxRequiredValidator);
        };
      })();
    }
    static {
      this.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
        type: MatCheckboxRequiredValidator,
        selectors: [["mat-checkbox", "required", "", "formControlName", ""], ["mat-checkbox", "required", "", "formControl", ""], ["mat-checkbox", "required", "", "ngModel", ""]],
        standalone: true,
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([MAT_CHECKBOX_REQUIRED_VALIDATOR]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]]
      });
    }
  }
  return MatCheckboxRequiredValidator;
})();
/*#__PURE__*/(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();

/**
 * @deprecated No longer used, `MatCheckbox` implements required validation directly.
 * @breaking-change 19.0.0
 */
let _MatCheckboxRequiredValidatorModule = /*#__PURE__*/(() => {
  class _MatCheckboxRequiredValidatorModule {
    static {
      this.ɵfac = function _MatCheckboxRequiredValidatorModule_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || _MatCheckboxRequiredValidatorModule)();
      };
    }
    static {
      this.ɵmod = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: _MatCheckboxRequiredValidatorModule
      });
    }
    static {
      this.ɵinj = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({});
    }
  }
  return _MatCheckboxRequiredValidatorModule;
})();
/*#__PURE__*/(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
let MatCheckboxModule = /*#__PURE__*/(() => {
  class MatCheckboxModule {
    static {
      this.ɵfac = function MatCheckboxModule_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || MatCheckboxModule)();
      };
    }
    static {
      this.ɵmod = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: MatCheckboxModule
      });
    }
    static {
      this.ɵinj = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        imports: [MatCheckbox, _angular_material_core__WEBPACK_IMPORTED_MODULE_2__.MatCommonModule, _angular_material_core__WEBPACK_IMPORTED_MODULE_2__.MatCommonModule]
      });
    }
  }
  return MatCheckboxModule;
})();
/*#__PURE__*/(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();

/**
 * Generated bundle index. Do not edit.
 */



/***/ }),

/***/ 1977:
/*!****************************************************************!*\
  !*** ./node_modules/@angular/material/fesm2022/datepicker.mjs ***!
  \****************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DateRange: () => (/* binding */ DateRange),
/* harmony export */   DefaultMatCalendarRangeStrategy: () => (/* binding */ DefaultMatCalendarRangeStrategy),
/* harmony export */   MAT_DATEPICKER_SCROLL_STRATEGY: () => (/* binding */ MAT_DATEPICKER_SCROLL_STRATEGY),
/* harmony export */   MAT_DATEPICKER_SCROLL_STRATEGY_FACTORY: () => (/* binding */ MAT_DATEPICKER_SCROLL_STRATEGY_FACTORY),
/* harmony export */   MAT_DATEPICKER_SCROLL_STRATEGY_FACTORY_PROVIDER: () => (/* binding */ MAT_DATEPICKER_SCROLL_STRATEGY_FACTORY_PROVIDER),
/* harmony export */   MAT_DATEPICKER_VALIDATORS: () => (/* binding */ MAT_DATEPICKER_VALIDATORS),
/* harmony export */   MAT_DATEPICKER_VALUE_ACCESSOR: () => (/* binding */ MAT_DATEPICKER_VALUE_ACCESSOR),
/* harmony export */   MAT_DATE_RANGE_SELECTION_STRATEGY: () => (/* binding */ MAT_DATE_RANGE_SELECTION_STRATEGY),
/* harmony export */   MAT_RANGE_DATE_SELECTION_MODEL_FACTORY: () => (/* binding */ MAT_RANGE_DATE_SELECTION_MODEL_FACTORY),
/* harmony export */   MAT_RANGE_DATE_SELECTION_MODEL_PROVIDER: () => (/* binding */ MAT_RANGE_DATE_SELECTION_MODEL_PROVIDER),
/* harmony export */   MAT_SINGLE_DATE_SELECTION_MODEL_FACTORY: () => (/* binding */ MAT_SINGLE_DATE_SELECTION_MODEL_FACTORY),
/* harmony export */   MAT_SINGLE_DATE_SELECTION_MODEL_PROVIDER: () => (/* binding */ MAT_SINGLE_DATE_SELECTION_MODEL_PROVIDER),
/* harmony export */   MatCalendar: () => (/* binding */ MatCalendar),
/* harmony export */   MatCalendarBody: () => (/* binding */ MatCalendarBody),
/* harmony export */   MatCalendarCell: () => (/* binding */ MatCalendarCell),
/* harmony export */   MatCalendarHeader: () => (/* binding */ MatCalendarHeader),
/* harmony export */   MatDateRangeInput: () => (/* binding */ MatDateRangeInput),
/* harmony export */   MatDateRangePicker: () => (/* binding */ MatDateRangePicker),
/* harmony export */   MatDateSelectionModel: () => (/* binding */ MatDateSelectionModel),
/* harmony export */   MatDatepicker: () => (/* binding */ MatDatepicker),
/* harmony export */   MatDatepickerActions: () => (/* binding */ MatDatepickerActions),
/* harmony export */   MatDatepickerApply: () => (/* binding */ MatDatepickerApply),
/* harmony export */   MatDatepickerCancel: () => (/* binding */ MatDatepickerCancel),
/* harmony export */   MatDatepickerContent: () => (/* binding */ MatDatepickerContent),
/* harmony export */   MatDatepickerInput: () => (/* binding */ MatDatepickerInput),
/* harmony export */   MatDatepickerInputEvent: () => (/* binding */ MatDatepickerInputEvent),
/* harmony export */   MatDatepickerIntl: () => (/* binding */ MatDatepickerIntl),
/* harmony export */   MatDatepickerModule: () => (/* binding */ MatDatepickerModule),
/* harmony export */   MatDatepickerToggle: () => (/* binding */ MatDatepickerToggle),
/* harmony export */   MatDatepickerToggleIcon: () => (/* binding */ MatDatepickerToggleIcon),
/* harmony export */   MatEndDate: () => (/* binding */ MatEndDate),
/* harmony export */   MatMonthView: () => (/* binding */ MatMonthView),
/* harmony export */   MatMultiYearView: () => (/* binding */ MatMultiYearView),
/* harmony export */   MatRangeDateSelectionModel: () => (/* binding */ MatRangeDateSelectionModel),
/* harmony export */   MatSingleDateSelectionModel: () => (/* binding */ MatSingleDateSelectionModel),
/* harmony export */   MatStartDate: () => (/* binding */ MatStartDate),
/* harmony export */   MatYearView: () => (/* binding */ MatYearView),
/* harmony export */   matDatepickerAnimations: () => (/* binding */ matDatepickerAnimations),
/* harmony export */   yearsPerPage: () => (/* binding */ yearsPerPage),
/* harmony export */   yearsPerRow: () => (/* binding */ yearsPerRow)
/* harmony export */ });
/* harmony import */ var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/cdk/a11y */ 2102);
/* harmony import */ var _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/cdk/overlay */ 1570);
/* harmony import */ var _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/cdk/portal */ 9168);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/button */ 4175);
/* harmony import */ var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/cdk/scrolling */ 9975);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/core */ 4646);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 819);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 2510);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! rxjs */ 3617);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! rxjs */ 9452);
/* harmony import */ var _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/cdk/keycodes */ 4879);
/* harmony import */ var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/cdk/bidi */ 3680);
/* harmony import */ var _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/cdk/platform */ 7699);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ 3037);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! rxjs/operators */ 4334);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! rxjs/operators */ 1567);
/* harmony import */ var _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/cdk/coercion */ 2814);
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/animations */ 7172);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/forms */ 4456);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/form-field */ 4950);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/input */ 5541);
























/** @docs-private */
const _c0 = ["mat-calendar-body", ""];
function _forTrack0($index, $item) {
  return this._trackRow($item);
}
const _forTrack1 = ($index, $item) => $item.id;
function MatCalendarBody_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr", 0)(1, "td", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("padding-top", ctx_r0._cellPadding)("padding-bottom", ctx_r0._cellPadding);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("colspan", ctx_r0.numCols);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r0.label, " ");
  }
}
function MatCalendarBody_For_2_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("padding-top", ctx_r0._cellPadding)("padding-bottom", ctx_r0._cellPadding);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("colspan", ctx_r0._firstRowOffset);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r0._firstRowOffset >= ctx_r0.labelMinRequiredCells ? ctx_r0.label : "", " ");
  }
}
function MatCalendarBody_For_2_For_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 6)(1, "button", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MatCalendarBody_For_2_For_3_Template_button_click_1_listener($event) {
      const item_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r2).$implicit;
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r0._cellClicked(item_r3, $event));
    })("focus", function MatCalendarBody_For_2_For_3_Template_button_focus_1_listener($event) {
      const item_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r2).$implicit;
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r0._emitActiveDateChange(item_r3, $event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "span", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const item_r3 = ctx.$implicit;
    const ɵ$index_14_r4 = ctx.$index;
    const ɵ$index_7_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$index;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("width", ctx_r0._cellWidth)("padding-top", ctx_r0._cellPadding)("padding-bottom", ctx_r0._cellPadding);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("data-mat-row", ɵ$index_7_r5)("data-mat-col", ɵ$index_14_r4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("mat-calendar-body-disabled", !item_r3.enabled)("mat-calendar-body-active", ctx_r0._isActiveCell(ɵ$index_7_r5, ɵ$index_14_r4))("mat-calendar-body-range-start", ctx_r0._isRangeStart(item_r3.compareValue))("mat-calendar-body-range-end", ctx_r0._isRangeEnd(item_r3.compareValue))("mat-calendar-body-in-range", ctx_r0._isInRange(item_r3.compareValue))("mat-calendar-body-comparison-bridge-start", ctx_r0._isComparisonBridgeStart(item_r3.compareValue, ɵ$index_7_r5, ɵ$index_14_r4))("mat-calendar-body-comparison-bridge-end", ctx_r0._isComparisonBridgeEnd(item_r3.compareValue, ɵ$index_7_r5, ɵ$index_14_r4))("mat-calendar-body-comparison-start", ctx_r0._isComparisonStart(item_r3.compareValue))("mat-calendar-body-comparison-end", ctx_r0._isComparisonEnd(item_r3.compareValue))("mat-calendar-body-in-comparison-range", ctx_r0._isInComparisonRange(item_r3.compareValue))("mat-calendar-body-preview-start", ctx_r0._isPreviewStart(item_r3.compareValue))("mat-calendar-body-preview-end", ctx_r0._isPreviewEnd(item_r3.compareValue))("mat-calendar-body-in-preview", ctx_r0._isInPreview(item_r3.compareValue));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", item_r3.cssClasses)("tabindex", ctx_r0._isActiveCell(ɵ$index_7_r5, ɵ$index_14_r4) ? 0 : -1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-label", item_r3.ariaLabel)("aria-disabled", !item_r3.enabled || null)("aria-pressed", ctx_r0._isSelected(item_r3.compareValue))("aria-current", ctx_r0.todayValue === item_r3.compareValue ? "date" : null)("aria-describedby", ctx_r0._getDescribedby(item_r3.compareValue));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("mat-calendar-body-selected", ctx_r0._isSelected(item_r3.compareValue))("mat-calendar-body-comparison-identical", ctx_r0._isComparisonIdentical(item_r3.compareValue))("mat-calendar-body-today", ctx_r0.todayValue === item_r3.compareValue);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", item_r3.displayValue, " ");
  }
}
function MatCalendarBody_For_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, MatCalendarBody_For_2_Conditional_1_Template, 2, 6, "td", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrepeaterCreate"](2, MatCalendarBody_For_2_For_3_Template, 5, 48, "td", 5, _forTrack1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const row_r6 = ctx.$implicit;
    const ɵ$index_7_r5 = ctx.$index;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵconditional"](ɵ$index_7_r5 === 0 && ctx_r0._firstRowOffset ? 1 : -1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrepeater"](row_r6);
  }
}
function MatMonthView_For_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 2)(1, "span", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const day_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](day_r1.long);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](day_r1.narrow);
  }
}
const _c1 = ["*"];
function MatCalendar_ng_template_0_Template(rf, ctx) {}
function MatCalendar_Case_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-month-view", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtwoWayListener"]("activeDateChange", function MatCalendar_Case_2_Template_mat_month_view_activeDateChange_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtwoWayBindingSet"](ctx_r1.activeDate, $event) || (ctx_r1.activeDate = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("_userSelection", function MatCalendar_Case_2_Template_mat_month_view__userSelection_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r1._dateSelected($event));
    })("dragStarted", function MatCalendar_Case_2_Template_mat_month_view_dragStarted_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r1._dragStarted($event));
    })("dragEnded", function MatCalendar_Case_2_Template_mat_month_view_dragEnded_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r1._dragEnded($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtwoWayProperty"]("activeDate", ctx_r1.activeDate);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("selected", ctx_r1.selected)("dateFilter", ctx_r1.dateFilter)("maxDate", ctx_r1.maxDate)("minDate", ctx_r1.minDate)("dateClass", ctx_r1.dateClass)("comparisonStart", ctx_r1.comparisonStart)("comparisonEnd", ctx_r1.comparisonEnd)("startDateAccessibleName", ctx_r1.startDateAccessibleName)("endDateAccessibleName", ctx_r1.endDateAccessibleName)("activeDrag", ctx_r1._activeDrag);
  }
}
function MatCalendar_Case_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-year-view", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtwoWayListener"]("activeDateChange", function MatCalendar_Case_3_Template_mat_year_view_activeDateChange_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtwoWayBindingSet"](ctx_r1.activeDate, $event) || (ctx_r1.activeDate = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("monthSelected", function MatCalendar_Case_3_Template_mat_year_view_monthSelected_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r1._monthSelectedInYearView($event));
    })("selectedChange", function MatCalendar_Case_3_Template_mat_year_view_selectedChange_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r1._goToDateInView($event, "month"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtwoWayProperty"]("activeDate", ctx_r1.activeDate);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("selected", ctx_r1.selected)("dateFilter", ctx_r1.dateFilter)("maxDate", ctx_r1.maxDate)("minDate", ctx_r1.minDate)("dateClass", ctx_r1.dateClass);
  }
}
function MatCalendar_Case_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-multi-year-view", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtwoWayListener"]("activeDateChange", function MatCalendar_Case_4_Template_mat_multi_year_view_activeDateChange_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtwoWayBindingSet"](ctx_r1.activeDate, $event) || (ctx_r1.activeDate = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("yearSelected", function MatCalendar_Case_4_Template_mat_multi_year_view_yearSelected_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r1._yearSelectedInMultiYearView($event));
    })("selectedChange", function MatCalendar_Case_4_Template_mat_multi_year_view_selectedChange_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r1._goToDateInView($event, "year"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtwoWayProperty"]("activeDate", ctx_r1.activeDate);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("selected", ctx_r1.selected)("dateFilter", ctx_r1.dateFilter)("maxDate", ctx_r1.maxDate)("minDate", ctx_r1.minDate)("dateClass", ctx_r1.dateClass);
  }
}
function MatDatepickerContent_ng_template_2_Template(rf, ctx) {}
const _c2 = ["button"];
const _c3 = [[["", "matDatepickerToggleIcon", ""]]];
const _c4 = ["[matDatepickerToggleIcon]"];
function MatDatepickerToggle_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "svg", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "path", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
}
const _c5 = [[["input", "matStartDate", ""]], [["input", "matEndDate", ""]]];
const _c6 = ["input[matStartDate]", "input[matEndDate]"];
function MatDatepickerActions_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
}
function createMissingDateImplError(provider) {
  return Error(`MatDatepicker: No provider found for ${provider}. You must add one of the following ` + `to your app config: provideNativeDateAdapter, provideDateFnsAdapter, ` + `provideLuxonDateAdapter, provideMomentDateAdapter, or provide a custom implementation.`);
}

/** Datepicker data that requires internationalization. */
let MatDatepickerIntl = /*#__PURE__*/(() => {
  class MatDatepickerIntl {
    constructor() {
      /**
       * Stream that emits whenever the labels here are changed. Use this to notify
       * components if the labels have changed after initialization.
       */
      this.changes = new rxjs__WEBPACK_IMPORTED_MODULE_1__.Subject();
      /** A label for the calendar popup (used by screen readers). */
      this.calendarLabel = 'Calendar';
      /** A label for the button used to open the calendar popup (used by screen readers). */
      this.openCalendarLabel = 'Open calendar';
      /** Label for the button used to close the calendar popup. */
      this.closeCalendarLabel = 'Close calendar';
      /** A label for the previous month button (used by screen readers). */
      this.prevMonthLabel = 'Previous month';
      /** A label for the next month button (used by screen readers). */
      this.nextMonthLabel = 'Next month';
      /** A label for the previous year button (used by screen readers). */
      this.prevYearLabel = 'Previous year';
      /** A label for the next year button (used by screen readers). */
      this.nextYearLabel = 'Next year';
      /** A label for the previous multi-year button (used by screen readers). */
      this.prevMultiYearLabel = 'Previous 24 years';
      /** A label for the next multi-year button (used by screen readers). */
      this.nextMultiYearLabel = 'Next 24 years';
      /** A label for the 'switch to month view' button (used by screen readers). */
      this.switchToMonthViewLabel = 'Choose date';
      /** A label for the 'switch to year view' button (used by screen readers). */
      this.switchToMultiYearViewLabel = 'Choose month and year';
      /**
       * A label for the first date of a range of dates (used by screen readers).
       * @deprecated Provide your own internationalization string.
       * @breaking-change 17.0.0
       */
      this.startDateLabel = 'Start date';
      /**
       * A label for the last date of a range of dates (used by screen readers).
       * @deprecated Provide your own internationalization string.
       * @breaking-change 17.0.0
       */
      this.endDateLabel = 'End date';
    }
    /** Formats a range of years (used for visuals). */
    formatYearRange(start, end) {
      return `${start} \u2013 ${end}`;
    }
    /** Formats a label for a range of years (used by screen readers). */
    formatYearRangeLabel(start, end) {
      return `${start} to ${end}`;
    }
    static {
      this.ɵfac = function MatDatepickerIntl_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || MatDatepickerIntl)();
      };
    }
    static {
      this.ɵprov = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: MatDatepickerIntl,
        factory: MatDatepickerIntl.ɵfac,
        providedIn: 'root'
      });
    }
  }
  return MatDatepickerIntl;
})();
/*#__PURE__*/(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
let uniqueIdCounter$1 = 0;
/**
 * An internal class that represents the data corresponding to a single calendar cell.
 * @docs-private
 */
class MatCalendarCell {
  constructor(value, displayValue, ariaLabel, enabled, cssClasses = {}, compareValue = value, rawValue) {
    this.value = value;
    this.displayValue = displayValue;
    this.ariaLabel = ariaLabel;
    this.enabled = enabled;
    this.cssClasses = cssClasses;
    this.compareValue = compareValue;
    this.rawValue = rawValue;
    this.id = uniqueIdCounter$1++;
  }
}
let calendarBodyId = 1;
/** Event options that can be used to bind an active, capturing event. */
const activeCapturingEventOptions = /*#__PURE__*/(0,_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_2__.normalizePassiveListenerOptions)({
  passive: false,
  capture: true
});
/** Event options that can be used to bind a passive, capturing event. */
const passiveCapturingEventOptions = /*#__PURE__*/(0,_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_2__.normalizePassiveListenerOptions)({
  passive: true,
  capture: true
});
/** Event options that can be used to bind a passive, non-capturing event. */
const passiveEventOptions = /*#__PURE__*/(0,_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_2__.normalizePassiveListenerOptions)({
  passive: true
});
/**
 * An internal component used to display calendar data in a table.
 * @docs-private
 */
let MatCalendarBody = /*#__PURE__*/(() => {
  class MatCalendarBody {
    ngAfterViewChecked() {
      if (this._focusActiveCellAfterViewChecked) {
        this._focusActiveCell();
        this._focusActiveCellAfterViewChecked = false;
      }
    }
    constructor(_elementRef, _ngZone) {
      this._elementRef = _elementRef;
      this._ngZone = _ngZone;
      this._platform = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_2__.Platform);
      /**
       * Used to focus the active cell after change detection has run.
       */
      this._focusActiveCellAfterViewChecked = false;
      /** The number of columns in the table. */
      this.numCols = 7;
      /** The cell number of the active cell in the table. */
      this.activeCell = 0;
      /** Whether a range is being selected. */
      this.isRange = false;
      /**
       * The aspect ratio (width / height) to use for the cells in the table. This aspect ratio will be
       * maintained even as the table resizes.
       */
      this.cellAspectRatio = 1;
      /** Start of the preview range. */
      this.previewStart = null;
      /** End of the preview range. */
      this.previewEnd = null;
      /** Emits when a new value is selected. */
      this.selectedValueChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
      /** Emits when the preview has changed as a result of a user action. */
      this.previewChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
      this.activeDateChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
      /** Emits the date at the possible start of a drag event. */
      this.dragStarted = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
      /** Emits the date at the conclusion of a drag, or null if mouse was not released on a date. */
      this.dragEnded = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
      this._didDragSinceMouseDown = false;
      this._injector = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(_angular_core__WEBPACK_IMPORTED_MODULE_0__.Injector);
      /**
       * Tracking function for rows based on their identity. Ideally we would use some sort of
       * key on the row, but that would require a breaking change for the `rows` input. We don't
       * use the built-in identity tracking, because it logs warnings.
       */
      this._trackRow = row => row;
      /**
       * Event handler for when the user enters an element
       * inside the calendar body (e.g. by hovering in or focus).
       */
      this._enterHandler = event => {
        if (this._skipNextFocus && event.type === 'focus') {
          this._skipNextFocus = false;
          return;
        }
        // We only need to hit the zone when we're selecting a range.
        if (event.target && this.isRange) {
          const cell = this._getCellFromElement(event.target);
          if (cell) {
            this._ngZone.run(() => this.previewChange.emit({
              value: cell.enabled ? cell : null,
              event
            }));
          }
        }
      };
      this._touchmoveHandler = event => {
        if (!this.isRange) return;
        const target = getActualTouchTarget(event);
        const cell = target ? this._getCellFromElement(target) : null;
        if (target !== event.target) {
          this._didDragSinceMouseDown = true;
        }
        // If the initial target of the touch is a date cell, prevent default so
        // that the move is not handled as a scroll.
        if (getCellElement(event.target)) {
          event.preventDefault();
        }
        this._ngZone.run(() => this.previewChange.emit({
          value: cell?.enabled ? cell : null,
          event
        }));
      };
      /**
       * Event handler for when the user's pointer leaves an element
       * inside the calendar body (e.g. by hovering out or blurring).
       */
      this._leaveHandler = event => {
        // We only need to hit the zone when we're selecting a range.
        if (this.previewEnd !== null && this.isRange) {
          if (event.type !== 'blur') {
            this._didDragSinceMouseDown = true;
          }
          // Only reset the preview end value when leaving cells. This looks better, because
          // we have a gap between the cells and the rows and we don't want to remove the
          // range just for it to show up again when the user moves a few pixels to the side.
          if (event.target && this._getCellFromElement(event.target) && !(event.relatedTarget && this._getCellFromElement(event.relatedTarget))) {
            this._ngZone.run(() => this.previewChange.emit({
              value: null,
              event
            }));
          }
        }
      };
      /**
       * Triggered on mousedown or touchstart on a date cell.
       * Respsonsible for starting a drag sequence.
       */
      this._mousedownHandler = event => {
        if (!this.isRange) return;
        this._didDragSinceMouseDown = false;
        // Begin a drag if a cell within the current range was targeted.
        const cell = event.target && this._getCellFromElement(event.target);
        if (!cell || !this._isInRange(cell.compareValue)) {
          return;
        }
        this._ngZone.run(() => {
          this.dragStarted.emit({
            value: cell.rawValue,
            event
          });
        });
      };
      /** Triggered on mouseup anywhere. Respsonsible for ending a drag sequence. */
      this._mouseupHandler = event => {
        if (!this.isRange) return;
        const cellElement = getCellElement(event.target);
        if (!cellElement) {
          // Mouseup happened outside of datepicker. Cancel drag.
          this._ngZone.run(() => {
            this.dragEnded.emit({
              value: null,
              event
            });
          });
          return;
        }
        if (cellElement.closest('.mat-calendar-body') !== this._elementRef.nativeElement) {
          // Mouseup happened inside a different month instance.
          // Allow it to handle the event.
          return;
        }
        this._ngZone.run(() => {
          const cell = this._getCellFromElement(cellElement);
          this.dragEnded.emit({
            value: cell?.rawValue ?? null,
            event
          });
        });
      };
      /** Triggered on touchend anywhere. Respsonsible for ending a drag sequence. */
      this._touchendHandler = event => {
        const target = getActualTouchTarget(event);
        if (target) {
          this._mouseupHandler({
            target
          });
        }
      };
      this._id = `mat-calendar-body-${calendarBodyId++}`;
      this._startDateLabelId = `${this._id}-start-date`;
      this._endDateLabelId = `${this._id}-end-date`;
      _ngZone.runOutsideAngular(() => {
        const element = _elementRef.nativeElement;
        // `touchmove` is active since we need to call `preventDefault`.
        element.addEventListener('touchmove', this._touchmoveHandler, activeCapturingEventOptions);
        element.addEventListener('mouseenter', this._enterHandler, passiveCapturingEventOptions);
        element.addEventListener('focus', this._enterHandler, passiveCapturingEventOptions);
        element.addEventListener('mouseleave', this._leaveHandler, passiveCapturingEventOptions);
        element.addEventListener('blur', this._leaveHandler, passiveCapturingEventOptions);
        element.addEventListener('mousedown', this._mousedownHandler, passiveEventOptions);
        element.addEventListener('touchstart', this._mousedownHandler, passiveEventOptions);
        if (this._platform.isBrowser) {
          window.addEventListener('mouseup', this._mouseupHandler);
          window.addEventListener('touchend', this._touchendHandler);
        }
      });
    }
    /** Called when a cell is clicked. */
    _cellClicked(cell, event) {
      // Ignore "clicks" that are actually canceled drags (eg the user dragged
      // off and then went back to this cell to undo).
      if (this._didDragSinceMouseDown) {
        return;
      }
      if (cell.enabled) {
        this.selectedValueChange.emit({
          value: cell.value,
          event
        });
      }
    }
    _emitActiveDateChange(cell, event) {
      if (cell.enabled) {
        this.activeDateChange.emit({
          value: cell.value,
          event
        });
      }
    }
    /** Returns whether a cell should be marked as selected. */
    _isSelected(value) {
      return this.startValue === value || this.endValue === value;
    }
    ngOnChanges(changes) {
      const columnChanges = changes['numCols'];
      const {
        rows,
        numCols
      } = this;
      if (changes['rows'] || columnChanges) {
        this._firstRowOffset = rows && rows.length && rows[0].length ? numCols - rows[0].length : 0;
      }
      if (changes['cellAspectRatio'] || columnChanges || !this._cellPadding) {
        this._cellPadding = `${50 * this.cellAspectRatio / numCols}%`;
      }
      if (columnChanges || !this._cellWidth) {
        this._cellWidth = `${100 / numCols}%`;
      }
    }
    ngOnDestroy() {
      const element = this._elementRef.nativeElement;
      element.removeEventListener('touchmove', this._touchmoveHandler, activeCapturingEventOptions);
      element.removeEventListener('mouseenter', this._enterHandler, passiveCapturingEventOptions);
      element.removeEventListener('focus', this._enterHandler, passiveCapturingEventOptions);
      element.removeEventListener('mouseleave', this._leaveHandler, passiveCapturingEventOptions);
      element.removeEventListener('blur', this._leaveHandler, passiveCapturingEventOptions);
      element.removeEventListener('mousedown', this._mousedownHandler, passiveEventOptions);
      element.removeEventListener('touchstart', this._mousedownHandler, passiveEventOptions);
      if (this._platform.isBrowser) {
        window.removeEventListener('mouseup', this._mouseupHandler);
        window.removeEventListener('touchend', this._touchendHandler);
      }
    }
    /** Returns whether a cell is active. */
    _isActiveCell(rowIndex, colIndex) {
      let cellNumber = rowIndex * this.numCols + colIndex;
      // Account for the fact that the first row may not have as many cells.
      if (rowIndex) {
        cellNumber -= this._firstRowOffset;
      }
      return cellNumber == this.activeCell;
    }
    /**
     * Focuses the active cell after the microtask queue is empty.
     *
     * Adding a 0ms setTimeout seems to fix Voiceover losing focus when pressing PageUp/PageDown
     * (issue #24330).
     *
     * Determined a 0ms by gradually increasing duration from 0 and testing two use cases with screen
     * reader enabled:
     *
     * 1. Pressing PageUp/PageDown repeatedly with pausing between each key press.
     * 2. Pressing and holding the PageDown key with repeated keys enabled.
     *
     * Test 1 worked roughly 95-99% of the time with 0ms and got a little bit better as the duration
     * increased. Test 2 got slightly better until the duration was long enough to interfere with
     * repeated keys. If the repeated key speed was faster than the timeout duration, then pressing
     * and holding pagedown caused the entire page to scroll.
     *
     * Since repeated key speed can verify across machines, determined that any duration could
     * potentially interfere with repeated keys. 0ms would be best because it almost entirely
     * eliminates the focus being lost in Voiceover (#24330) without causing unintended side effects.
     * Adding delay also complicates writing tests.
     */
    _focusActiveCell(movePreview = true) {
      (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.afterNextRender)(() => {
        setTimeout(() => {
          const activeCell = this._elementRef.nativeElement.querySelector('.mat-calendar-body-active');
          if (activeCell) {
            if (!movePreview) {
              this._skipNextFocus = true;
            }
            activeCell.focus();
          }
        });
      }, {
        injector: this._injector
      });
    }
    /** Focuses the active cell after change detection has run and the microtask queue is empty. */
    _scheduleFocusActiveCellAfterViewChecked() {
      this._focusActiveCellAfterViewChecked = true;
    }
    /** Gets whether a value is the start of the main range. */
    _isRangeStart(value) {
      return isStart(value, this.startValue, this.endValue);
    }
    /** Gets whether a value is the end of the main range. */
    _isRangeEnd(value) {
      return isEnd(value, this.startValue, this.endValue);
    }
    /** Gets whether a value is within the currently-selected range. */
    _isInRange(value) {
      return isInRange(value, this.startValue, this.endValue, this.isRange);
    }
    /** Gets whether a value is the start of the comparison range. */
    _isComparisonStart(value) {
      return isStart(value, this.comparisonStart, this.comparisonEnd);
    }
    /** Whether the cell is a start bridge cell between the main and comparison ranges. */
    _isComparisonBridgeStart(value, rowIndex, colIndex) {
      if (!this._isComparisonStart(value) || this._isRangeStart(value) || !this._isInRange(value)) {
        return false;
      }
      let previousCell = this.rows[rowIndex][colIndex - 1];
      if (!previousCell) {
        const previousRow = this.rows[rowIndex - 1];
        previousCell = previousRow && previousRow[previousRow.length - 1];
      }
      return previousCell && !this._isRangeEnd(previousCell.compareValue);
    }
    /** Whether the cell is an end bridge cell between the main and comparison ranges. */
    _isComparisonBridgeEnd(value, rowIndex, colIndex) {
      if (!this._isComparisonEnd(value) || this._isRangeEnd(value) || !this._isInRange(value)) {
        return false;
      }
      let nextCell = this.rows[rowIndex][colIndex + 1];
      if (!nextCell) {
        const nextRow = this.rows[rowIndex + 1];
        nextCell = nextRow && nextRow[0];
      }
      return nextCell && !this._isRangeStart(nextCell.compareValue);
    }
    /** Gets whether a value is the end of the comparison range. */
    _isComparisonEnd(value) {
      return isEnd(value, this.comparisonStart, this.comparisonEnd);
    }
    /** Gets whether a value is within the current comparison range. */
    _isInComparisonRange(value) {
      return isInRange(value, this.comparisonStart, this.comparisonEnd, this.isRange);
    }
    /**
     * Gets whether a value is the same as the start and end of the comparison range.
     * For context, the functions that we use to determine whether something is the start/end of
     * a range don't allow for the start and end to be on the same day, because we'd have to use
     * much more specific CSS selectors to style them correctly in all scenarios. This is fine for
     * the regular range, because when it happens, the selected styles take over and still show where
     * the range would've been, however we don't have these selected styles for a comparison range.
     * This function is used to apply a class that serves the same purpose as the one for selected
     * dates, but it only applies in the context of a comparison range.
     */
    _isComparisonIdentical(value) {
      // Note that we don't need to null check the start/end
      // here, because the `value` will always be defined.
      return this.comparisonStart === this.comparisonEnd && value === this.comparisonStart;
    }
    /** Gets whether a value is the start of the preview range. */
    _isPreviewStart(value) {
      return isStart(value, this.previewStart, this.previewEnd);
    }
    /** Gets whether a value is the end of the preview range. */
    _isPreviewEnd(value) {
      return isEnd(value, this.previewStart, this.previewEnd);
    }
    /** Gets whether a value is inside the preview range. */
    _isInPreview(value) {
      return isInRange(value, this.previewStart, this.previewEnd, this.isRange);
    }
    /** Gets ids of aria descriptions for the start and end of a date range. */
    _getDescribedby(value) {
      if (!this.isRange) {
        return null;
      }
      if (this.startValue === value && this.endValue === value) {
        return `${this._startDateLabelId} ${this._endDateLabelId}`;
      } else if (this.startValue === value) {
        return this._startDateLabelId;
      } else if (this.endValue === value) {
        return this._endDateLabelId;
      }
      return null;
    }
    /** Finds the MatCalendarCell that corresponds to a DOM node. */
    _getCellFromElement(element) {
      const cell = getCellElement(element);
      if (cell) {
        const row = cell.getAttribute('data-mat-row');
        const col = cell.getAttribute('data-mat-col');
        if (row && col) {
          return this.rows[parseInt(row)][parseInt(col)];
        }
      }
      return null;
    }
    static {
      this.ɵfac = function MatCalendarBody_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || MatCalendarBody)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone));
      };
    }
    static {
      this.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: MatCalendarBody,
        selectors: [["", "mat-calendar-body", ""]],
        hostAttrs: [1, "mat-calendar-body"],
        inputs: {
          label: "label",
          rows: "rows",
          todayValue: "todayValue",
          startValue: "startValue",
          endValue: "endValue",
          labelMinRequiredCells: "labelMinRequiredCells",
          numCols: "numCols",
          activeCell: "activeCell",
          isRange: "isRange",
          cellAspectRatio: "cellAspectRatio",
          comparisonStart: "comparisonStart",
          comparisonEnd: "comparisonEnd",
          previewStart: "previewStart",
          previewEnd: "previewEnd",
          startDateAccessibleName: "startDateAccessibleName",
          endDateAccessibleName: "endDateAccessibleName"
        },
        outputs: {
          selectedValueChange: "selectedValueChange",
          previewChange: "previewChange",
          activeDateChange: "activeDateChange",
          dragStarted: "dragStarted",
          dragEnded: "dragEnded"
        },
        exportAs: ["matCalendarBody"],
        standalone: true,
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵStandaloneFeature"]],
        attrs: _c0,
        decls: 7,
        vars: 5,
        consts: [["aria-hidden", "true"], ["role", "row"], [1, "mat-calendar-body-hidden-label", 3, "id"], [1, "mat-calendar-body-label"], [1, "mat-calendar-body-label", 3, "paddingTop", "paddingBottom"], ["role", "gridcell", 1, "mat-calendar-body-cell-container", 3, "width", "paddingTop", "paddingBottom"], ["role", "gridcell", 1, "mat-calendar-body-cell-container"], ["type", "button", 1, "mat-calendar-body-cell", 3, "click", "focus", "ngClass", "tabindex"], [1, "mat-calendar-body-cell-content", "mat-focus-indicator"], ["aria-hidden", "true", 1, "mat-calendar-body-cell-preview"]],
        template: function MatCalendarBody_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, MatCalendarBody_Conditional_0_Template, 3, 6, "tr", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrepeaterCreate"](1, MatCalendarBody_For_2_Template, 4, 1, "tr", 1, _forTrack0, true);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵconditional"](ctx._firstRowOffset < ctx.labelMinRequiredCells ? 0 : -1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrepeater"](ctx.rows);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("id", ctx._startDateLabelId);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.startDateAccessibleName, "\n");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("id", ctx._endDateLabelId);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.endDateAccessibleName, "\n");
          }
        },
        dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgClass],
        styles: [".mat-calendar-body{min-width:224px}.mat-calendar-body-today:not(.mat-calendar-body-selected):not(.mat-calendar-body-comparison-identical){border-color:var(--mat-datepicker-calendar-date-today-outline-color, var(--mat-app-primary))}.mat-calendar-body-label{height:0;line-height:0;text-align:start;padding-left:4.7142857143%;padding-right:4.7142857143%;font-size:var(--mat-datepicker-calendar-body-label-text-size, var(--mat-app-title-small-size));font-weight:var(--mat-datepicker-calendar-body-label-text-weight, var(--mat-app-title-small-weight));color:var(--mat-datepicker-calendar-body-label-text-color, var(--mat-app-on-surface))}.mat-calendar-body-hidden-label{display:none}.mat-calendar-body-cell-container{position:relative;height:0;line-height:0}.mat-calendar-body-cell{-webkit-user-select:none;user-select:none;cursor:pointer;outline:none;border:none;-webkit-tap-highlight-color:rgba(0,0,0,0);position:absolute;top:0;left:0;width:100%;height:100%;background:none;text-align:center;outline:none;font-family:inherit;margin:0;font-family:var(--mat-datepicker-calendar-text-font, var(--mat-app-body-medium-font));font-size:var(--mat-datepicker-calendar-text-size, var(--mat-app-body-medium-size))}.mat-calendar-body-cell::-moz-focus-inner{border:0}.mat-calendar-body-cell::before,.mat-calendar-body-cell::after,.mat-calendar-body-cell-preview{content:\"\";position:absolute;top:5%;left:0;z-index:0;box-sizing:border-box;display:block;height:90%;width:100%}.mat-calendar-body-range-start:not(.mat-calendar-body-in-comparison-range)::before,.mat-calendar-body-range-start::after,.mat-calendar-body-comparison-start:not(.mat-calendar-body-comparison-bridge-start)::before,.mat-calendar-body-comparison-start::after,.mat-calendar-body-preview-start .mat-calendar-body-cell-preview{left:5%;width:95%;border-top-left-radius:999px;border-bottom-left-radius:999px}[dir=rtl] .mat-calendar-body-range-start:not(.mat-calendar-body-in-comparison-range)::before,[dir=rtl] .mat-calendar-body-range-start::after,[dir=rtl] .mat-calendar-body-comparison-start:not(.mat-calendar-body-comparison-bridge-start)::before,[dir=rtl] .mat-calendar-body-comparison-start::after,[dir=rtl] .mat-calendar-body-preview-start .mat-calendar-body-cell-preview{left:0;border-radius:0;border-top-right-radius:999px;border-bottom-right-radius:999px}.mat-calendar-body-range-end:not(.mat-calendar-body-in-comparison-range)::before,.mat-calendar-body-range-end::after,.mat-calendar-body-comparison-end:not(.mat-calendar-body-comparison-bridge-end)::before,.mat-calendar-body-comparison-end::after,.mat-calendar-body-preview-end .mat-calendar-body-cell-preview{width:95%;border-top-right-radius:999px;border-bottom-right-radius:999px}[dir=rtl] .mat-calendar-body-range-end:not(.mat-calendar-body-in-comparison-range)::before,[dir=rtl] .mat-calendar-body-range-end::after,[dir=rtl] .mat-calendar-body-comparison-end:not(.mat-calendar-body-comparison-bridge-end)::before,[dir=rtl] .mat-calendar-body-comparison-end::after,[dir=rtl] .mat-calendar-body-preview-end .mat-calendar-body-cell-preview{left:5%;border-radius:0;border-top-left-radius:999px;border-bottom-left-radius:999px}[dir=rtl] .mat-calendar-body-comparison-bridge-start.mat-calendar-body-range-end::after,[dir=rtl] .mat-calendar-body-comparison-bridge-end.mat-calendar-body-range-start::after{width:95%;border-top-right-radius:999px;border-bottom-right-radius:999px}.mat-calendar-body-comparison-start.mat-calendar-body-range-end::after,[dir=rtl] .mat-calendar-body-comparison-start.mat-calendar-body-range-end::after,.mat-calendar-body-comparison-end.mat-calendar-body-range-start::after,[dir=rtl] .mat-calendar-body-comparison-end.mat-calendar-body-range-start::after{width:90%}.mat-calendar-body-in-preview{color:var(--mat-datepicker-calendar-date-preview-state-outline-color, var(--mat-app-primary))}.mat-calendar-body-in-preview .mat-calendar-body-cell-preview{border-top:dashed 1px;border-bottom:dashed 1px}.mat-calendar-body-preview-start .mat-calendar-body-cell-preview{border-left:dashed 1px}[dir=rtl] .mat-calendar-body-preview-start .mat-calendar-body-cell-preview{border-left:0;border-right:dashed 1px}.mat-calendar-body-preview-end .mat-calendar-body-cell-preview{border-right:dashed 1px}[dir=rtl] .mat-calendar-body-preview-end .mat-calendar-body-cell-preview{border-right:0;border-left:dashed 1px}.mat-calendar-body-disabled{cursor:default}.mat-calendar-body-disabled>.mat-calendar-body-cell-content:not(.mat-calendar-body-selected):not(.mat-calendar-body-comparison-identical){color:var(--mat-datepicker-calendar-date-disabled-state-text-color)}.mat-calendar-body-disabled>.mat-calendar-body-today:not(.mat-calendar-body-selected):not(.mat-calendar-body-comparison-identical){border-color:var(--mat-datepicker-calendar-date-today-disabled-state-outline-color)}.cdk-high-contrast-active .mat-calendar-body-disabled{opacity:.5}.mat-calendar-body-cell-content{top:5%;left:5%;z-index:1;display:flex;align-items:center;justify-content:center;box-sizing:border-box;width:90%;height:90%;line-height:1;border-width:1px;border-style:solid;border-radius:999px;color:var(--mat-datepicker-calendar-date-text-color, var(--mat-app-on-surface));border-color:var(--mat-datepicker-calendar-date-outline-color)}.mat-calendar-body-cell-content.mat-focus-indicator{position:absolute}.cdk-high-contrast-active .mat-calendar-body-cell-content{border:none}.cdk-keyboard-focused .mat-calendar-body-active>.mat-calendar-body-cell-content:not(.mat-calendar-body-selected):not(.mat-calendar-body-comparison-identical),.cdk-program-focused .mat-calendar-body-active>.mat-calendar-body-cell-content:not(.mat-calendar-body-selected):not(.mat-calendar-body-comparison-identical){background-color:var(--mat-datepicker-calendar-date-focus-state-background-color)}@media(hover: hover){.mat-calendar-body-cell:not(.mat-calendar-body-disabled):hover>.mat-calendar-body-cell-content:not(.mat-calendar-body-selected):not(.mat-calendar-body-comparison-identical){background-color:var(--mat-datepicker-calendar-date-hover-state-background-color)}}.mat-calendar-body-selected{background-color:var(--mat-datepicker-calendar-date-selected-state-background-color, var(--mat-app-primary));color:var(--mat-datepicker-calendar-date-selected-state-text-color, var(--mat-app-on-primary))}.mat-calendar-body-disabled>.mat-calendar-body-selected{background-color:var(--mat-datepicker-calendar-date-selected-disabled-state-background-color)}.mat-calendar-body-selected.mat-calendar-body-today{box-shadow:inset 0 0 0 1px var(--mat-datepicker-calendar-date-today-selected-state-outline-color, var(--mat-app-primary))}.mat-calendar-body-in-range::before{background:var(--mat-datepicker-calendar-date-in-range-state-background-color, var(--mat-app-primary-container))}.mat-calendar-body-comparison-identical,.mat-calendar-body-in-comparison-range::before{background:var(--mat-datepicker-calendar-date-in-comparison-range-state-background-color, var(--mat-app-tertiary-container))}.mat-calendar-body-comparison-identical,.mat-calendar-body-in-comparison-range::before{background:var(--mat-datepicker-calendar-date-in-comparison-range-state-background-color, var(--mat-app-tertiary-container))}.mat-calendar-body-comparison-bridge-start::before,[dir=rtl] .mat-calendar-body-comparison-bridge-end::before{background:linear-gradient(to right, var(--mat-datepicker-calendar-date-in-range-state-background-color, var(--mat-app-primary-container)) 50%, var(--mat-datepicker-calendar-date-in-comparison-range-state-background-color, var(--mat-app-tertiary-container)) 50%)}.mat-calendar-body-comparison-bridge-end::before,[dir=rtl] .mat-calendar-body-comparison-bridge-start::before{background:linear-gradient(to left, var(--mat-datepicker-calendar-date-in-range-state-background-color, var(--mat-app-primary-container)) 50%, var(--mat-datepicker-calendar-date-in-comparison-range-state-background-color, var(--mat-app-tertiary-container)) 50%)}.mat-calendar-body-in-range>.mat-calendar-body-comparison-identical,.mat-calendar-body-in-comparison-range.mat-calendar-body-in-range::after{background:var(--mat-datepicker-calendar-date-in-overlap-range-state-background-color, var(--mat-app-secondary-container))}.mat-calendar-body-comparison-identical.mat-calendar-body-selected,.mat-calendar-body-in-comparison-range>.mat-calendar-body-selected{background:var(--mat-datepicker-calendar-date-in-overlap-range-selected-state-background-color, var(--mat-app-secondary))}.cdk-high-contrast-active .mat-datepicker-popup:not(:empty),.cdk-high-contrast-active .mat-calendar-body-cell:not(.mat-calendar-body-in-range) .mat-calendar-body-selected{outline:solid 1px}.cdk-high-contrast-active .mat-calendar-body-today{outline:dotted 1px}.cdk-high-contrast-active .mat-calendar-body-cell::before,.cdk-high-contrast-active .mat-calendar-body-cell::after,.cdk-high-contrast-active .mat-calendar-body-selected{background:none}.cdk-high-contrast-active .mat-calendar-body-in-range::before,.cdk-high-contrast-active .mat-calendar-body-comparison-bridge-start::before,.cdk-high-contrast-active .mat-calendar-body-comparison-bridge-end::before{border-top:solid 1px;border-bottom:solid 1px}.cdk-high-contrast-active .mat-calendar-body-range-start::before{border-left:solid 1px}[dir=rtl] .cdk-high-contrast-active .mat-calendar-body-range-start::before{border-left:0;border-right:solid 1px}.cdk-high-contrast-active .mat-calendar-body-range-end::before{border-right:solid 1px}[dir=rtl] .cdk-high-contrast-active .mat-calendar-body-range-end::before{border-right:0;border-left:solid 1px}.cdk-high-contrast-active .mat-calendar-body-in-comparison-range::before{border-top:dashed 1px;border-bottom:dashed 1px}.cdk-high-contrast-active .mat-calendar-body-comparison-start::before{border-left:dashed 1px}[dir=rtl] .cdk-high-contrast-active .mat-calendar-body-comparison-start::before{border-left:0;border-right:dashed 1px}.cdk-high-contrast-active .mat-calendar-body-comparison-end::before{border-right:dashed 1px}[dir=rtl] .cdk-high-contrast-active .mat-calendar-body-comparison-end::before{border-right:0;border-left:dashed 1px}"],
        encapsulation: 2,
        changeDetection: 0
      });
    }
  }
  return MatCalendarBody;
})();
/*#__PURE__*/(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
/** Checks whether a node is a table cell element. */
function isTableCell(node) {
  return node?.nodeName === 'TD';
}
/**
 * Gets the date table cell element that is or contains the specified element.
 * Or returns null if element is not part of a date cell.
 */
function getCellElement(element) {
  let cell;
  if (isTableCell(element)) {
    cell = element;
  } else if (isTableCell(element.parentNode)) {
    cell = element.parentNode;
  } else if (isTableCell(element.parentNode?.parentNode)) {
    cell = element.parentNode.parentNode;
  }
  return cell?.getAttribute('data-mat-row') != null ? cell : null;
}
/** Checks whether a value is the start of a range. */
function isStart(value, start, end) {
  return end !== null && start !== end && value < end && value === start;
}
/** Checks whether a value is the end of a range. */
function isEnd(value, start, end) {
  return start !== null && start !== end && value >= start && value === end;
}
/** Checks whether a value is inside of a range. */
function isInRange(value, start, end, rangeEnabled) {
  return rangeEnabled && start !== null && end !== null && start !== end && value >= start && value <= end;
}
/**
 * Extracts the element that actually corresponds to a touch event's location
 * (rather than the element that initiated the sequence of touch events).
 */
function getActualTouchTarget(event) {
  const touchLocation = event.changedTouches[0];
  return document.elementFromPoint(touchLocation.clientX, touchLocation.clientY);
}

/** A class representing a range of dates. */
class DateRange {
  constructor(/** The start date of the range. */
  start, /** The end date of the range. */
  end) {
    this.start = start;
    this.end = end;
  }
}
/**
 * A selection model containing a date selection.
 * @docs-private
 */
let MatDateSelectionModel = /*#__PURE__*/(() => {
  class MatDateSelectionModel {
    constructor(/** The current selection. */
    selection, _adapter) {
      this.selection = selection;
      this._adapter = _adapter;
      this._selectionChanged = new rxjs__WEBPACK_IMPORTED_MODULE_1__.Subject();
      /** Emits when the selection has changed. */
      this.selectionChanged = this._selectionChanged;
      this.selection = selection;
    }
    /**
     * Updates the current selection in the model.
     * @param value New selection that should be assigned.
     * @param source Object that triggered the selection change.
     */
    updateSelection(value, source) {
      const oldValue = this.selection;
      this.selection = value;
      this._selectionChanged.next({
        selection: value,
        source,
        oldValue
      });
    }
    ngOnDestroy() {
      this._selectionChanged.complete();
    }
    _isValidDateInstance(date) {
      return this._adapter.isDateInstance(date) && this._adapter.isValid(date);
    }
    static {
      this.ɵfac = function MatDateSelectionModel_Factory(__ngFactoryType__) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinvalidFactory"]();
      };
    }
    static {
      this.ɵprov = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: MatDateSelectionModel,
        factory: MatDateSelectionModel.ɵfac
      });
    }
  }
  return MatDateSelectionModel;
})();
/*#__PURE__*/(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
/**
 * A selection model that contains a single date.
 * @docs-private
 */
let MatSingleDateSelectionModel = /*#__PURE__*/(() => {
  class MatSingleDateSelectionModel extends MatDateSelectionModel {
    constructor(adapter) {
      super(null, adapter);
    }
    /**
     * Adds a date to the current selection. In the case of a single date selection, the added date
     * simply overwrites the previous selection
     */
    add(date) {
      super.updateSelection(date, this);
    }
    /** Checks whether the current selection is valid. */
    isValid() {
      return this.selection != null && this._isValidDateInstance(this.selection);
    }
    /**
     * Checks whether the current selection is complete. In the case of a single date selection, this
     * is true if the current selection is not null.
     */
    isComplete() {
      return this.selection != null;
    }
    /** Clones the selection model. */
    clone() {
      const clone = new MatSingleDateSelectionModel(this._adapter);
      clone.updateSelection(this.selection, this);
      return clone;
    }
    static {
      this.ɵfac = function MatSingleDateSelectionModel_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || MatSingleDateSelectionModel)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_material_core__WEBPACK_IMPORTED_MODULE_4__.DateAdapter));
      };
    }
    static {
      this.ɵprov = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: MatSingleDateSelectionModel,
        factory: MatSingleDateSelectionModel.ɵfac
      });
    }
  }
  return MatSingleDateSelectionModel;
})();
/*#__PURE__*/(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
/**
 * A selection model that contains a date range.
 * @docs-private
 */
let MatRangeDateSelectionModel = /*#__PURE__*/(() => {
  class MatRangeDateSelectionModel extends MatDateSelectionModel {
    constructor(adapter) {
      super(new DateRange(null, null), adapter);
    }
    /**
     * Adds a date to the current selection. In the case of a date range selection, the added date
     * fills in the next `null` value in the range. If both the start and the end already have a date,
     * the selection is reset so that the given date is the new `start` and the `end` is null.
     */
    add(date) {
      let {
        start,
        end
      } = this.selection;
      if (start == null) {
        start = date;
      } else if (end == null) {
        end = date;
      } else {
        start = date;
        end = null;
      }
      super.updateSelection(new DateRange(start, end), this);
    }
    /** Checks whether the current selection is valid. */
    isValid() {
      const {
        start,
        end
      } = this.selection;
      // Empty ranges are valid.
      if (start == null && end == null) {
        return true;
      }
      // Complete ranges are only valid if both dates are valid and the start is before the end.
      if (start != null && end != null) {
        return this._isValidDateInstance(start) && this._isValidDateInstance(end) && this._adapter.compareDate(start, end) <= 0;
      }
      // Partial ranges are valid if the start/end is valid.
      return (start == null || this._isValidDateInstance(start)) && (end == null || this._isValidDateInstance(end));
    }
    /**
     * Checks whether the current selection is complete. In the case of a date range selection, this
     * is true if the current selection has a non-null `start` and `end`.
     */
    isComplete() {
      return this.selection.start != null && this.selection.end != null;
    }
    /** Clones the selection model. */
    clone() {
      const clone = new MatRangeDateSelectionModel(this._adapter);
      clone.updateSelection(this.selection, this);
      return clone;
    }
    static {
      this.ɵfac = function MatRangeDateSelectionModel_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || MatRangeDateSelectionModel)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_material_core__WEBPACK_IMPORTED_MODULE_4__.DateAdapter));
      };
    }
    static {
      this.ɵprov = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: MatRangeDateSelectionModel,
        factory: MatRangeDateSelectionModel.ɵfac
      });
    }
  }
  return MatRangeDateSelectionModel;
})();
/*#__PURE__*/(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
/** @docs-private */
function MAT_SINGLE_DATE_SELECTION_MODEL_FACTORY(parent, adapter) {
  return parent || new MatSingleDateSelectionModel(adapter);
}
/**
 * Used to provide a single selection model to a component.
 * @docs-private
 */
const MAT_SINGLE_DATE_SELECTION_MODEL_PROVIDER = {
  provide: MatDateSelectionModel,
  deps: [[/*#__PURE__*/new _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional(), /*#__PURE__*/new _angular_core__WEBPACK_IMPORTED_MODULE_0__.SkipSelf(), MatDateSelectionModel], _angular_material_core__WEBPACK_IMPORTED_MODULE_4__.DateAdapter],
  useFactory: MAT_SINGLE_DATE_SELECTION_MODEL_FACTORY
};
/** @docs-private */
function MAT_RANGE_DATE_SELECTION_MODEL_FACTORY(parent, adapter) {
  return parent || new MatRangeDateSelectionModel(adapter);
}
/**
 * Used to provide a range selection model to a component.
 * @docs-private
 */
const MAT_RANGE_DATE_SELECTION_MODEL_PROVIDER = {
  provide: MatDateSelectionModel,
  deps: [[/*#__PURE__*/new _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional(), /*#__PURE__*/new _angular_core__WEBPACK_IMPORTED_MODULE_0__.SkipSelf(), MatDateSelectionModel], _angular_material_core__WEBPACK_IMPORTED_MODULE_4__.DateAdapter],
  useFactory: MAT_RANGE_DATE_SELECTION_MODEL_FACTORY
};

/** Injection token used to customize the date range selection behavior. */
const MAT_DATE_RANGE_SELECTION_STRATEGY = /*#__PURE__*/new _angular_core__WEBPACK_IMPORTED_MODULE_0__.InjectionToken('MAT_DATE_RANGE_SELECTION_STRATEGY');
/** Provides the default date range selection behavior. */
let DefaultMatCalendarRangeStrategy = /*#__PURE__*/(() => {
  class DefaultMatCalendarRangeStrategy {
    constructor(_dateAdapter) {
      this._dateAdapter = _dateAdapter;
    }
    selectionFinished(date, currentRange) {
      let {
        start,
        end
      } = currentRange;
      if (start == null) {
        start = date;
      } else if (end == null && date && this._dateAdapter.compareDate(date, start) >= 0) {
        end = date;
      } else {
        start = date;
        end = null;
      }
      return new DateRange(start, end);
    }
    createPreview(activeDate, currentRange) {
      let start = null;
      let end = null;
      if (currentRange.start && !currentRange.end && activeDate) {
        start = currentRange.start;
        end = activeDate;
      }
      return new DateRange(start, end);
    }
    createDrag(dragOrigin, originalRange, newDate) {
      let start = originalRange.start;
      let end = originalRange.end;
      if (!start || !end) {
        // Can't drag from an incomplete range.
        return null;
      }
      const adapter = this._dateAdapter;
      const isRange = adapter.compareDate(start, end) !== 0;
      const diffYears = adapter.getYear(newDate) - adapter.getYear(dragOrigin);
      const diffMonths = adapter.getMonth(newDate) - adapter.getMonth(dragOrigin);
      const diffDays = adapter.getDate(newDate) - adapter.getDate(dragOrigin);
      if (isRange && adapter.sameDate(dragOrigin, originalRange.start)) {
        start = newDate;
        if (adapter.compareDate(newDate, end) > 0) {
          end = adapter.addCalendarYears(end, diffYears);
          end = adapter.addCalendarMonths(end, diffMonths);
          end = adapter.addCalendarDays(end, diffDays);
        }
      } else if (isRange && adapter.sameDate(dragOrigin, originalRange.end)) {
        end = newDate;
        if (adapter.compareDate(newDate, start) < 0) {
          start = adapter.addCalendarYears(start, diffYears);
          start = adapter.addCalendarMonths(start, diffMonths);
          start = adapter.addCalendarDays(start, diffDays);
        }
      } else {
        start = adapter.addCalendarYears(start, diffYears);
        start = adapter.addCalendarMonths(start, diffMonths);
        start = adapter.addCalendarDays(start, diffDays);
        end = adapter.addCalendarYears(end, diffYears);
        end = adapter.addCalendarMonths(end, diffMonths);
        end = adapter.addCalendarDays(end, diffDays);
      }
      return new DateRange(start, end);
    }
    static {
      this.ɵfac = function DefaultMatCalendarRangeStrategy_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || DefaultMatCalendarRangeStrategy)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_material_core__WEBPACK_IMPORTED_MODULE_4__.DateAdapter));
      };
    }
    static {
      this.ɵprov = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: DefaultMatCalendarRangeStrategy,
        factory: DefaultMatCalendarRangeStrategy.ɵfac
      });
    }
  }
  return DefaultMatCalendarRangeStrategy;
})();
/*#__PURE__*/(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
/** @docs-private */
function MAT_CALENDAR_RANGE_STRATEGY_PROVIDER_FACTORY(parent, adapter) {
  return parent || new DefaultMatCalendarRangeStrategy(adapter);
}
/** @docs-private */
const MAT_CALENDAR_RANGE_STRATEGY_PROVIDER = {
  provide: MAT_DATE_RANGE_SELECTION_STRATEGY,
  deps: [[/*#__PURE__*/new _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional(), /*#__PURE__*/new _angular_core__WEBPACK_IMPORTED_MODULE_0__.SkipSelf(), MAT_DATE_RANGE_SELECTION_STRATEGY], _angular_material_core__WEBPACK_IMPORTED_MODULE_4__.DateAdapter],
  useFactory: MAT_CALENDAR_RANGE_STRATEGY_PROVIDER_FACTORY
};
const DAYS_PER_WEEK = 7;
let uniqueIdCounter = 0;
/**
 * An internal component used to display a single month in the datepicker.
 * @docs-private
 */
let MatMonthView = /*#__PURE__*/(() => {
  class MatMonthView {
    /**
     * The date to display in this month view (everything other than the month and year is ignored).
     */
    get activeDate() {
      return this._activeDate;
    }
    set activeDate(value) {
      const oldActiveDate = this._activeDate;
      const validDate = this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(value)) || this._dateAdapter.today();
      this._activeDate = this._dateAdapter.clampDate(validDate, this.minDate, this.maxDate);
      if (!this._hasSameMonthAndYear(oldActiveDate, this._activeDate)) {
        this._init();
      }
    }
    /** The currently selected date. */
    get selected() {
      return this._selected;
    }
    set selected(value) {
      if (value instanceof DateRange) {
        this._selected = value;
      } else {
        this._selected = this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(value));
      }
      this._setRanges(this._selected);
    }
    /** The minimum selectable date. */
    get minDate() {
      return this._minDate;
    }
    set minDate(value) {
      this._minDate = this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(value));
    }
    /** The maximum selectable date. */
    get maxDate() {
      return this._maxDate;
    }
    set maxDate(value) {
      this._maxDate = this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(value));
    }
    constructor(_changeDetectorRef, _dateFormats, _dateAdapter, _dir, _rangeStrategy) {
      this._changeDetectorRef = _changeDetectorRef;
      this._dateFormats = _dateFormats;
      this._dateAdapter = _dateAdapter;
      this._dir = _dir;
      this._rangeStrategy = _rangeStrategy;
      this._rerenderSubscription = rxjs__WEBPACK_IMPORTED_MODULE_5__.Subscription.EMPTY;
      /** Origin of active drag, or null when dragging is not active. */
      this.activeDrag = null;
      /** Emits when a new date is selected. */
      this.selectedChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
      /** Emits when any date is selected. */
      this._userSelection = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
      /** Emits when the user initiates a date range drag via mouse or touch. */
      this.dragStarted = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
      /**
       * Emits when the user completes or cancels a date range drag.
       * Emits null when the drag was canceled or the newly selected date range if completed.
       */
      this.dragEnded = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
      /** Emits when any date is activated. */
      this.activeDateChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
      if (typeof ngDevMode === 'undefined' || ngDevMode) {
        if (!this._dateAdapter) {
          throw createMissingDateImplError('DateAdapter');
        }
        if (!this._dateFormats) {
          throw createMissingDateImplError('MAT_DATE_FORMATS');
        }
      }
      this._activeDate = this._dateAdapter.today();
    }
    ngAfterContentInit() {
      this._rerenderSubscription = this._dateAdapter.localeChanges.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.startWith)(null)).subscribe(() => this._init());
    }
    ngOnChanges(changes) {
      const comparisonChange = changes['comparisonStart'] || changes['comparisonEnd'];
      if (comparisonChange && !comparisonChange.firstChange) {
        this._setRanges(this.selected);
      }
      if (changes['activeDrag'] && !this.activeDrag) {
        this._clearPreview();
      }
    }
    ngOnDestroy() {
      this._rerenderSubscription.unsubscribe();
    }
    /** Handles when a new date is selected. */
    _dateSelected(event) {
      const date = event.value;
      const selectedDate = this._getDateFromDayOfMonth(date);
      let rangeStartDate;
      let rangeEndDate;
      if (this._selected instanceof DateRange) {
        rangeStartDate = this._getDateInCurrentMonth(this._selected.start);
        rangeEndDate = this._getDateInCurrentMonth(this._selected.end);
      } else {
        rangeStartDate = rangeEndDate = this._getDateInCurrentMonth(this._selected);
      }
      if (rangeStartDate !== date || rangeEndDate !== date) {
        this.selectedChange.emit(selectedDate);
      }
      this._userSelection.emit({
        value: selectedDate,
        event: event.event
      });
      this._clearPreview();
      this._changeDetectorRef.markForCheck();
    }
    /**
     * Takes the index of a calendar body cell wrapped in an event as argument. For the date that
     * corresponds to the given cell, set `activeDate` to that date and fire `activeDateChange` with
     * that date.
     *
     * This function is used to match each component's model of the active date with the calendar
     * body cell that was focused. It updates its value of `activeDate` synchronously and updates the
     * parent's value asynchronously via the `activeDateChange` event. The child component receives an
     * updated value asynchronously via the `activeCell` Input.
     */
    _updateActiveDate(event) {
      const month = event.value;
      const oldActiveDate = this._activeDate;
      this.activeDate = this._getDateFromDayOfMonth(month);
      if (this._dateAdapter.compareDate(oldActiveDate, this.activeDate)) {
        this.activeDateChange.emit(this._activeDate);
      }
    }
    /** Handles keydown events on the calendar body when calendar is in month view. */
    _handleCalendarBodyKeydown(event) {
      // TODO(mmalerba): We currently allow keyboard navigation to disabled dates, but just prevent
      // disabled ones from being selected. This may not be ideal, we should look into whether
      // navigation should skip over disabled dates, and if so, how to implement that efficiently.
      const oldActiveDate = this._activeDate;
      const isRtl = this._isRtl();
      switch (event.keyCode) {
        case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_7__.LEFT_ARROW:
          this.activeDate = this._dateAdapter.addCalendarDays(this._activeDate, isRtl ? 1 : -1);
          break;
        case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_7__.RIGHT_ARROW:
          this.activeDate = this._dateAdapter.addCalendarDays(this._activeDate, isRtl ? -1 : 1);
          break;
        case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_7__.UP_ARROW:
          this.activeDate = this._dateAdapter.addCalendarDays(this._activeDate, -7);
          break;
        case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_7__.DOWN_ARROW:
          this.activeDate = this._dateAdapter.addCalendarDays(this._activeDate, 7);
          break;
        case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_7__.HOME:
          this.activeDate = this._dateAdapter.addCalendarDays(this._activeDate, 1 - this._dateAdapter.getDate(this._activeDate));
          break;
        case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_7__.END:
          this.activeDate = this._dateAdapter.addCalendarDays(this._activeDate, this._dateAdapter.getNumDaysInMonth(this._activeDate) - this._dateAdapter.getDate(this._activeDate));
          break;
        case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_7__.PAGE_UP:
          this.activeDate = event.altKey ? this._dateAdapter.addCalendarYears(this._activeDate, -1) : this._dateAdapter.addCalendarMonths(this._activeDate, -1);
          break;
        case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_7__.PAGE_DOWN:
          this.activeDate = event.altKey ? this._dateAdapter.addCalendarYears(this._activeDate, 1) : this._dateAdapter.addCalendarMonths(this._activeDate, 1);
          break;
        case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_7__.ENTER:
        case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_7__.SPACE:
          this._selectionKeyPressed = true;
          if (this._canSelect(this._activeDate)) {
            // Prevent unexpected default actions such as form submission.
            // Note that we only prevent the default action here while the selection happens in
            // `keyup` below. We can't do the selection here, because it can cause the calendar to
            // reopen if focus is restored immediately. We also can't call `preventDefault` on `keyup`
            // because it's too late (see #23305).
            event.preventDefault();
          }
          return;
        case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_7__.ESCAPE:
          // Abort the current range selection if the user presses escape mid-selection.
          if (this._previewEnd != null && !(0,_angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_7__.hasModifierKey)(event)) {
            this._clearPreview();
            // If a drag is in progress, cancel the drag without changing the
            // current selection.
            if (this.activeDrag) {
              this.dragEnded.emit({
                value: null,
                event
              });
            } else {
              this.selectedChange.emit(null);
              this._userSelection.emit({
                value: null,
                event
              });
            }
            event.preventDefault();
            event.stopPropagation(); // Prevents the overlay from closing.
          }
          return;
        default:
          // Don't prevent default or focus active cell on keys that we don't explicitly handle.
          return;
      }
      if (this._dateAdapter.compareDate(oldActiveDate, this.activeDate)) {
        this.activeDateChange.emit(this.activeDate);
        this._focusActiveCellAfterViewChecked();
      }
      // Prevent unexpected default actions such as form submission.
      event.preventDefault();
    }
    /** Handles keyup events on the calendar body when calendar is in month view. */
    _handleCalendarBodyKeyup(event) {
      if (event.keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_7__.SPACE || event.keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_7__.ENTER) {
        if (this._selectionKeyPressed && this._canSelect(this._activeDate)) {
          this._dateSelected({
            value: this._dateAdapter.getDate(this._activeDate),
            event
          });
        }
        this._selectionKeyPressed = false;
      }
    }
    /** Initializes this month view. */
    _init() {
      this._setRanges(this.selected);
      this._todayDate = this._getCellCompareValue(this._dateAdapter.today());
      this._monthLabel = this._dateFormats.display.monthLabel ? this._dateAdapter.format(this.activeDate, this._dateFormats.display.monthLabel) : this._dateAdapter.getMonthNames('short')[this._dateAdapter.getMonth(this.activeDate)].toLocaleUpperCase();
      let firstOfMonth = this._dateAdapter.createDate(this._dateAdapter.getYear(this.activeDate), this._dateAdapter.getMonth(this.activeDate), 1);
      this._firstWeekOffset = (DAYS_PER_WEEK + this._dateAdapter.getDayOfWeek(firstOfMonth) - this._dateAdapter.getFirstDayOfWeek()) % DAYS_PER_WEEK;
      this._initWeekdays();
      this._createWeekCells();
      this._changeDetectorRef.markForCheck();
    }
    /** Focuses the active cell after the microtask queue is empty. */
    _focusActiveCell(movePreview) {
      this._matCalendarBody._focusActiveCell(movePreview);
    }
    /** Focuses the active cell after change detection has run and the microtask queue is empty. */
    _focusActiveCellAfterViewChecked() {
      this._matCalendarBody._scheduleFocusActiveCellAfterViewChecked();
    }
    /** Called when the user has activated a new cell and the preview needs to be updated. */
    _previewChanged({
      event,
      value: cell
    }) {
      if (this._rangeStrategy) {
        // We can assume that this will be a range, because preview
        // events aren't fired for single date selections.
        const value = cell ? cell.rawValue : null;
        const previewRange = this._rangeStrategy.createPreview(value, this.selected, event);
        this._previewStart = this._getCellCompareValue(previewRange.start);
        this._previewEnd = this._getCellCompareValue(previewRange.end);
        if (this.activeDrag && value) {
          const dragRange = this._rangeStrategy.createDrag?.(this.activeDrag.value, this.selected, value, event);
          if (dragRange) {
            this._previewStart = this._getCellCompareValue(dragRange.start);
            this._previewEnd = this._getCellCompareValue(dragRange.end);
          }
        }
        // Note that here we need to use `detectChanges`, rather than `markForCheck`, because
        // the way `_focusActiveCell` is set up at the moment makes it fire at the wrong time
        // when navigating one month back using the keyboard which will cause this handler
        // to throw a "changed after checked" error when updating the preview state.
        this._changeDetectorRef.detectChanges();
      }
    }
    /**
     * Called when the user has ended a drag. If the drag/drop was successful,
     * computes and emits the new range selection.
     */
    _dragEnded(event) {
      if (!this.activeDrag) return;
      if (event.value) {
        // Propagate drag effect
        const dragDropResult = this._rangeStrategy?.createDrag?.(this.activeDrag.value, this.selected, event.value, event.event);
        this.dragEnded.emit({
          value: dragDropResult ?? null,
          event: event.event
        });
      } else {
        this.dragEnded.emit({
          value: null,
          event: event.event
        });
      }
    }
    /**
     * Takes a day of the month and returns a new date in the same month and year as the currently
     *  active date. The returned date will have the same day of the month as the argument date.
     */
    _getDateFromDayOfMonth(dayOfMonth) {
      return this._dateAdapter.createDate(this._dateAdapter.getYear(this.activeDate), this._dateAdapter.getMonth(this.activeDate), dayOfMonth);
    }
    /** Initializes the weekdays. */
    _initWeekdays() {
      const firstDayOfWeek = this._dateAdapter.getFirstDayOfWeek();
      const narrowWeekdays = this._dateAdapter.getDayOfWeekNames('narrow');
      const longWeekdays = this._dateAdapter.getDayOfWeekNames('long');
      // Rotate the labels for days of the week based on the configured first day of the week.
      let weekdays = longWeekdays.map((long, i) => {
        return {
          long,
          narrow: narrowWeekdays[i],
          id: uniqueIdCounter++
        };
      });
      this._weekdays = weekdays.slice(firstDayOfWeek).concat(weekdays.slice(0, firstDayOfWeek));
    }
    /** Creates MatCalendarCells for the dates in this month. */
    _createWeekCells() {
      const daysInMonth = this._dateAdapter.getNumDaysInMonth(this.activeDate);
      const dateNames = this._dateAdapter.getDateNames();
      this._weeks = [[]];
      for (let i = 0, cell = this._firstWeekOffset; i < daysInMonth; i++, cell++) {
        if (cell == DAYS_PER_WEEK) {
          this._weeks.push([]);
          cell = 0;
        }
        const date = this._dateAdapter.createDate(this._dateAdapter.getYear(this.activeDate), this._dateAdapter.getMonth(this.activeDate), i + 1);
        const enabled = this._shouldEnableDate(date);
        const ariaLabel = this._dateAdapter.format(date, this._dateFormats.display.dateA11yLabel);
        const cellClasses = this.dateClass ? this.dateClass(date, 'month') : undefined;
        this._weeks[this._weeks.length - 1].push(new MatCalendarCell(i + 1, dateNames[i], ariaLabel, enabled, cellClasses, this._getCellCompareValue(date), date));
      }
    }
    /** Date filter for the month */
    _shouldEnableDate(date) {
      return !!date && (!this.minDate || this._dateAdapter.compareDate(date, this.minDate) >= 0) && (!this.maxDate || this._dateAdapter.compareDate(date, this.maxDate) <= 0) && (!this.dateFilter || this.dateFilter(date));
    }
    /**
     * Gets the date in this month that the given Date falls on.
     * Returns null if the given Date is in another month.
     */
    _getDateInCurrentMonth(date) {
      return date && this._hasSameMonthAndYear(date, this.activeDate) ? this._dateAdapter.getDate(date) : null;
    }
    /** Checks whether the 2 dates are non-null and fall within the same month of the same year. */
    _hasSameMonthAndYear(d1, d2) {
      return !!(d1 && d2 && this._dateAdapter.getMonth(d1) == this._dateAdapter.getMonth(d2) && this._dateAdapter.getYear(d1) == this._dateAdapter.getYear(d2));
    }
    /** Gets the value that will be used to one cell to another. */
    _getCellCompareValue(date) {
      if (date) {
        // We use the time since the Unix epoch to compare dates in this view, rather than the
        // cell values, because we need to support ranges that span across multiple months/years.
        const year = this._dateAdapter.getYear(date);
        const month = this._dateAdapter.getMonth(date);
        const day = this._dateAdapter.getDate(date);
        return new Date(year, month, day).getTime();
      }
      return null;
    }
    /** Determines whether the user has the RTL layout direction. */
    _isRtl() {
      return this._dir && this._dir.value === 'rtl';
    }
    /** Sets the current range based on a model value. */
    _setRanges(selectedValue) {
      if (selectedValue instanceof DateRange) {
        this._rangeStart = this._getCellCompareValue(selectedValue.start);
        this._rangeEnd = this._getCellCompareValue(selectedValue.end);
        this._isRange = true;
      } else {
        this._rangeStart = this._rangeEnd = this._getCellCompareValue(selectedValue);
        this._isRange = false;
      }
      this._comparisonRangeStart = this._getCellCompareValue(this.comparisonStart);
      this._comparisonRangeEnd = this._getCellCompareValue(this.comparisonEnd);
    }
    /** Gets whether a date can be selected in the month view. */
    _canSelect(date) {
      return !this.dateFilter || this.dateFilter(date);
    }
    /** Clears out preview state. */
    _clearPreview() {
      this._previewStart = this._previewEnd = null;
    }
    static {
      this.ɵfac = function MatMonthView_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || MatMonthView)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_core__WEBPACK_IMPORTED_MODULE_4__.MAT_DATE_FORMATS, 8), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_core__WEBPACK_IMPORTED_MODULE_4__.DateAdapter, 8), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_8__.Directionality, 8), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](MAT_DATE_RANGE_SELECTION_STRATEGY, 8));
      };
    }
    static {
      this.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: MatMonthView,
        selectors: [["mat-month-view"]],
        viewQuery: function MatMonthView_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](MatCalendarBody, 5);
          }
          if (rf & 2) {
            let _t;
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx._matCalendarBody = _t.first);
          }
        },
        inputs: {
          activeDate: "activeDate",
          selected: "selected",
          minDate: "minDate",
          maxDate: "maxDate",
          dateFilter: "dateFilter",
          dateClass: "dateClass",
          comparisonStart: "comparisonStart",
          comparisonEnd: "comparisonEnd",
          startDateAccessibleName: "startDateAccessibleName",
          endDateAccessibleName: "endDateAccessibleName",
          activeDrag: "activeDrag"
        },
        outputs: {
          selectedChange: "selectedChange",
          _userSelection: "_userSelection",
          dragStarted: "dragStarted",
          dragEnded: "dragEnded",
          activeDateChange: "activeDateChange"
        },
        exportAs: ["matMonthView"],
        standalone: true,
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵStandaloneFeature"]],
        decls: 8,
        vars: 14,
        consts: [["role", "grid", 1, "mat-calendar-table"], [1, "mat-calendar-table-header"], ["scope", "col"], ["aria-hidden", "true"], ["colspan", "7", 1, "mat-calendar-table-header-divider"], ["mat-calendar-body", "", 3, "selectedValueChange", "activeDateChange", "previewChange", "dragStarted", "dragEnded", "keyup", "keydown", "label", "rows", "todayValue", "startValue", "endValue", "comparisonStart", "comparisonEnd", "previewStart", "previewEnd", "isRange", "labelMinRequiredCells", "activeCell", "startDateAccessibleName", "endDateAccessibleName"], [1, "cdk-visually-hidden"]],
        template: function MatMonthView_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "table", 0)(1, "thead", 1)(2, "tr");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrepeaterCreate"](3, MatMonthView_For_4_Template, 5, 2, "th", 2, _forTrack1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "tr", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "th", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "tbody", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("selectedValueChange", function MatMonthView_Template_tbody_selectedValueChange_7_listener($event) {
              return ctx._dateSelected($event);
            })("activeDateChange", function MatMonthView_Template_tbody_activeDateChange_7_listener($event) {
              return ctx._updateActiveDate($event);
            })("previewChange", function MatMonthView_Template_tbody_previewChange_7_listener($event) {
              return ctx._previewChanged($event);
            })("dragStarted", function MatMonthView_Template_tbody_dragStarted_7_listener($event) {
              return ctx.dragStarted.emit($event);
            })("dragEnded", function MatMonthView_Template_tbody_dragEnded_7_listener($event) {
              return ctx._dragEnded($event);
            })("keyup", function MatMonthView_Template_tbody_keyup_7_listener($event) {
              return ctx._handleCalendarBodyKeyup($event);
            })("keydown", function MatMonthView_Template_tbody_keydown_7_listener($event) {
              return ctx._handleCalendarBodyKeydown($event);
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          }
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrepeater"](ctx._weekdays);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("label", ctx._monthLabel)("rows", ctx._weeks)("todayValue", ctx._todayDate)("startValue", ctx._rangeStart)("endValue", ctx._rangeEnd)("comparisonStart", ctx._comparisonRangeStart)("comparisonEnd", ctx._comparisonRangeEnd)("previewStart", ctx._previewStart)("previewEnd", ctx._previewEnd)("isRange", ctx._isRange)("labelMinRequiredCells", 3)("activeCell", ctx._dateAdapter.getDate(ctx.activeDate) - 1)("startDateAccessibleName", ctx.startDateAccessibleName)("endDateAccessibleName", ctx.endDateAccessibleName);
          }
        },
        dependencies: [MatCalendarBody],
        encapsulation: 2,
        changeDetection: 0
      });
    }
  }
  return MatMonthView;
})();
/*#__PURE__*/(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
const yearsPerPage = 24;
const yearsPerRow = 4;
/**
 * An internal component used to display a year selector in the datepicker.
 * @docs-private
 */
let MatMultiYearView = /*#__PURE__*/(() => {
  class MatMultiYearView {
    /** The date to display in this multi-year view (everything other than the year is ignored). */
    get activeDate() {
      return this._activeDate;
    }
    set activeDate(value) {
      let oldActiveDate = this._activeDate;
      const validDate = this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(value)) || this._dateAdapter.today();
      this._activeDate = this._dateAdapter.clampDate(validDate, this.minDate, this.maxDate);
      if (!isSameMultiYearView(this._dateAdapter, oldActiveDate, this._activeDate, this.minDate, this.maxDate)) {
        this._init();
      }
    }
    /** The currently selected date. */
    get selected() {
      return this._selected;
    }
    set selected(value) {
      if (value instanceof DateRange) {
        this._selected = value;
      } else {
        this._selected = this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(value));
      }
      this._setSelectedYear(value);
    }
    /** The minimum selectable date. */
    get minDate() {
      return this._minDate;
    }
    set minDate(value) {
      this._minDate = this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(value));
    }
    /** The maximum selectable date. */
    get maxDate() {
      return this._maxDate;
    }
    set maxDate(value) {
      this._maxDate = this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(value));
    }
    constructor(_changeDetectorRef, _dateAdapter, _dir) {
      this._changeDetectorRef = _changeDetectorRef;
      this._dateAdapter = _dateAdapter;
      this._dir = _dir;
      this._rerenderSubscription = rxjs__WEBPACK_IMPORTED_MODULE_5__.Subscription.EMPTY;
      /** Emits when a new year is selected. */
      this.selectedChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
      /** Emits the selected year. This doesn't imply a change on the selected date */
      this.yearSelected = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
      /** Emits when any date is activated. */
      this.activeDateChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
      if (!this._dateAdapter && (typeof ngDevMode === 'undefined' || ngDevMode)) {
        throw createMissingDateImplError('DateAdapter');
      }
      this._activeDate = this._dateAdapter.today();
    }
    ngAfterContentInit() {
      this._rerenderSubscription = this._dateAdapter.localeChanges.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.startWith)(null)).subscribe(() => this._init());
    }
    ngOnDestroy() {
      this._rerenderSubscription.unsubscribe();
    }
    /** Initializes this multi-year view. */
    _init() {
      this._todayYear = this._dateAdapter.getYear(this._dateAdapter.today());
      // We want a range years such that we maximize the number of
      // enabled dates visible at once. This prevents issues where the minimum year
      // is the last item of a page OR the maximum year is the first item of a page.
      // The offset from the active year to the "slot" for the starting year is the
      // *actual* first rendered year in the multi-year view.
      const activeYear = this._dateAdapter.getYear(this._activeDate);
      const minYearOfPage = activeYear - getActiveOffset(this._dateAdapter, this.activeDate, this.minDate, this.maxDate);
      this._years = [];
      for (let i = 0, row = []; i < yearsPerPage; i++) {
        row.push(minYearOfPage + i);
        if (row.length == yearsPerRow) {
          this._years.push(row.map(year => this._createCellForYear(year)));
          row = [];
        }
      }
      this._changeDetectorRef.markForCheck();
    }
    /** Handles when a new year is selected. */
    _yearSelected(event) {
      const year = event.value;
      const selectedYear = this._dateAdapter.createDate(year, 0, 1);
      const selectedDate = this._getDateFromYear(year);
      this.yearSelected.emit(selectedYear);
      this.selectedChange.emit(selectedDate);
    }
    /**
     * Takes the index of a calendar body cell wrapped in an event as argument. For the date that
     * corresponds to the given cell, set `activeDate` to that date and fire `activeDateChange` with
     * that date.
     *
     * This function is used to match each component's model of the active date with the calendar
     * body cell that was focused. It updates its value of `activeDate` synchronously and updates the
     * parent's value asynchronously via the `activeDateChange` event. The child component receives an
     * updated value asynchronously via the `activeCell` Input.
     */
    _updateActiveDate(event) {
      const year = event.value;
      const oldActiveDate = this._activeDate;
      this.activeDate = this._getDateFromYear(year);
      if (this._dateAdapter.compareDate(oldActiveDate, this.activeDate)) {
        this.activeDateChange.emit(this.activeDate);
      }
    }
    /** Handles keydown events on the calendar body when calendar is in multi-year view. */
    _handleCalendarBodyKeydown(event) {
      const oldActiveDate = this._activeDate;
      const isRtl = this._isRtl();
      switch (event.keyCode) {
        case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_7__.LEFT_ARROW:
          this.activeDate = this._dateAdapter.addCalendarYears(this._activeDate, isRtl ? 1 : -1);
          break;
        case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_7__.RIGHT_ARROW:
          this.activeDate = this._dateAdapter.addCalendarYears(this._activeDate, isRtl ? -1 : 1);
          break;
        case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_7__.UP_ARROW:
          this.activeDate = this._dateAdapter.addCalendarYears(this._activeDate, -yearsPerRow);
          break;
        case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_7__.DOWN_ARROW:
          this.activeDate = this._dateAdapter.addCalendarYears(this._activeDate, yearsPerRow);
          break;
        case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_7__.HOME:
          this.activeDate = this._dateAdapter.addCalendarYears(this._activeDate, -getActiveOffset(this._dateAdapter, this.activeDate, this.minDate, this.maxDate));
          break;
        case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_7__.END:
          this.activeDate = this._dateAdapter.addCalendarYears(this._activeDate, yearsPerPage - getActiveOffset(this._dateAdapter, this.activeDate, this.minDate, this.maxDate) - 1);
          break;
        case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_7__.PAGE_UP:
          this.activeDate = this._dateAdapter.addCalendarYears(this._activeDate, event.altKey ? -yearsPerPage * 10 : -yearsPerPage);
          break;
        case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_7__.PAGE_DOWN:
          this.activeDate = this._dateAdapter.addCalendarYears(this._activeDate, event.altKey ? yearsPerPage * 10 : yearsPerPage);
          break;
        case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_7__.ENTER:
        case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_7__.SPACE:
          // Note that we only prevent the default action here while the selection happens in
          // `keyup` below. We can't do the selection here, because it can cause the calendar to
          // reopen if focus is restored immediately. We also can't call `preventDefault` on `keyup`
          // because it's too late (see #23305).
          this._selectionKeyPressed = true;
          break;
        default:
          // Don't prevent default or focus active cell on keys that we don't explicitly handle.
          return;
      }
      if (this._dateAdapter.compareDate(oldActiveDate, this.activeDate)) {
        this.activeDateChange.emit(this.activeDate);
      }
      this._focusActiveCellAfterViewChecked();
      // Prevent unexpected default actions such as form submission.
      event.preventDefault();
    }
    /** Handles keyup events on the calendar body when calendar is in multi-year view. */
    _handleCalendarBodyKeyup(event) {
      if (event.keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_7__.SPACE || event.keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_7__.ENTER) {
        if (this._selectionKeyPressed) {
          this._yearSelected({
            value: this._dateAdapter.getYear(this._activeDate),
            event
          });
        }
        this._selectionKeyPressed = false;
      }
    }
    _getActiveCell() {
      return getActiveOffset(this._dateAdapter, this.activeDate, this.minDate, this.maxDate);
    }
    /** Focuses the active cell after the microtask queue is empty. */
    _focusActiveCell() {
      this._matCalendarBody._focusActiveCell();
    }
    /** Focuses the active cell after change detection has run and the microtask queue is empty. */
    _focusActiveCellAfterViewChecked() {
      this._matCalendarBody._scheduleFocusActiveCellAfterViewChecked();
    }
    /**
     * Takes a year and returns a new date on the same day and month as the currently active date
     *  The returned date will have the same year as the argument date.
     */
    _getDateFromYear(year) {
      const activeMonth = this._dateAdapter.getMonth(this.activeDate);
      const daysInMonth = this._dateAdapter.getNumDaysInMonth(this._dateAdapter.createDate(year, activeMonth, 1));
      const normalizedDate = this._dateAdapter.createDate(year, activeMonth, Math.min(this._dateAdapter.getDate(this.activeDate), daysInMonth));
      return normalizedDate;
    }
    /** Creates an MatCalendarCell for the given year. */
    _createCellForYear(year) {
      const date = this._dateAdapter.createDate(year, 0, 1);
      const yearName = this._dateAdapter.getYearName(date);
      const cellClasses = this.dateClass ? this.dateClass(date, 'multi-year') : undefined;
      return new MatCalendarCell(year, yearName, yearName, this._shouldEnableYear(year), cellClasses);
    }
    /** Whether the given year is enabled. */
    _shouldEnableYear(year) {
      // disable if the year is greater than maxDate lower than minDate
      if (year === undefined || year === null || this.maxDate && year > this._dateAdapter.getYear(this.maxDate) || this.minDate && year < this._dateAdapter.getYear(this.minDate)) {
        return false;
      }
      // enable if it reaches here and there's no filter defined
      if (!this.dateFilter) {
        return true;
      }
      const firstOfYear = this._dateAdapter.createDate(year, 0, 1);
      // If any date in the year is enabled count the year as enabled.
      for (let date = firstOfYear; this._dateAdapter.getYear(date) == year; date = this._dateAdapter.addCalendarDays(date, 1)) {
        if (this.dateFilter(date)) {
          return true;
        }
      }
      return false;
    }
    /** Determines whether the user has the RTL layout direction. */
    _isRtl() {
      return this._dir && this._dir.value === 'rtl';
    }
    /** Sets the currently-highlighted year based on a model value. */
    _setSelectedYear(value) {
      this._selectedYear = null;
      if (value instanceof DateRange) {
        const displayValue = value.start || value.end;
        if (displayValue) {
          this._selectedYear = this._dateAdapter.getYear(displayValue);
        }
      } else if (value) {
        this._selectedYear = this._dateAdapter.getYear(value);
      }
    }
    static {
      this.ɵfac = function MatMultiYearView_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || MatMultiYearView)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_core__WEBPACK_IMPORTED_MODULE_4__.DateAdapter, 8), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_8__.Directionality, 8));
      };
    }
    static {
      this.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: MatMultiYearView,
        selectors: [["mat-multi-year-view"]],
        viewQuery: function MatMultiYearView_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](MatCalendarBody, 5);
          }
          if (rf & 2) {
            let _t;
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx._matCalendarBody = _t.first);
          }
        },
        inputs: {
          activeDate: "activeDate",
          selected: "selected",
          minDate: "minDate",
          maxDate: "maxDate",
          dateFilter: "dateFilter",
          dateClass: "dateClass"
        },
        outputs: {
          selectedChange: "selectedChange",
          yearSelected: "yearSelected",
          activeDateChange: "activeDateChange"
        },
        exportAs: ["matMultiYearView"],
        standalone: true,
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵStandaloneFeature"]],
        decls: 5,
        vars: 7,
        consts: [["role", "grid", 1, "mat-calendar-table"], ["aria-hidden", "true", 1, "mat-calendar-table-header"], ["colspan", "4", 1, "mat-calendar-table-header-divider"], ["mat-calendar-body", "", 3, "selectedValueChange", "activeDateChange", "keyup", "keydown", "rows", "todayValue", "startValue", "endValue", "numCols", "cellAspectRatio", "activeCell"]],
        template: function MatMultiYearView_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "table", 0)(1, "thead", 1)(2, "tr");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "th", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "tbody", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("selectedValueChange", function MatMultiYearView_Template_tbody_selectedValueChange_4_listener($event) {
              return ctx._yearSelected($event);
            })("activeDateChange", function MatMultiYearView_Template_tbody_activeDateChange_4_listener($event) {
              return ctx._updateActiveDate($event);
            })("keyup", function MatMultiYearView_Template_tbody_keyup_4_listener($event) {
              return ctx._handleCalendarBodyKeyup($event);
            })("keydown", function MatMultiYearView_Template_tbody_keydown_4_listener($event) {
              return ctx._handleCalendarBodyKeydown($event);
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          }
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("rows", ctx._years)("todayValue", ctx._todayYear)("startValue", ctx._selectedYear)("endValue", ctx._selectedYear)("numCols", 4)("cellAspectRatio", 4 / 7)("activeCell", ctx._getActiveCell());
          }
        },
        dependencies: [MatCalendarBody],
        encapsulation: 2,
        changeDetection: 0
      });
    }
  }
  return MatMultiYearView;
})();
/*#__PURE__*/(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
function isSameMultiYearView(dateAdapter, date1, date2, minDate, maxDate) {
  const year1 = dateAdapter.getYear(date1);
  const year2 = dateAdapter.getYear(date2);
  const startingYear = getStartingYear(dateAdapter, minDate, maxDate);
  return Math.floor((year1 - startingYear) / yearsPerPage) === Math.floor((year2 - startingYear) / yearsPerPage);
}
/**
 * When the multi-year view is first opened, the active year will be in view.
 * So we compute how many years are between the active year and the *slot* where our
 * "startingYear" will render when paged into view.
 */
function getActiveOffset(dateAdapter, activeDate, minDate, maxDate) {
  const activeYear = dateAdapter.getYear(activeDate);
  return euclideanModulo(activeYear - getStartingYear(dateAdapter, minDate, maxDate), yearsPerPage);
}
/**
 * We pick a "starting" year such that either the maximum year would be at the end
 * or the minimum year would be at the beginning of a page.
 */
function getStartingYear(dateAdapter, minDate, maxDate) {
  let startingYear = 0;
  if (maxDate) {
    const maxYear = dateAdapter.getYear(maxDate);
    startingYear = maxYear - yearsPerPage + 1;
  } else if (minDate) {
    startingYear = dateAdapter.getYear(minDate);
  }
  return startingYear;
}
/** Gets remainder that is non-negative, even if first number is negative */
function euclideanModulo(a, b) {
  return (a % b + b) % b;
}

/**
 * An internal component used to display a single year in the datepicker.
 * @docs-private
 */
let MatYearView = /*#__PURE__*/(() => {
  class MatYearView {
    /** The date to display in this year view (everything other than the year is ignored). */
    get activeDate() {
      return this._activeDate;
    }
    set activeDate(value) {
      let oldActiveDate = this._activeDate;
      const validDate = this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(value)) || this._dateAdapter.today();
      this._activeDate = this._dateAdapter.clampDate(validDate, this.minDate, this.maxDate);
      if (this._dateAdapter.getYear(oldActiveDate) !== this._dateAdapter.getYear(this._activeDate)) {
        this._init();
      }
    }
    /** The currently selected date. */
    get selected() {
      return this._selected;
    }
    set selected(value) {
      if (value instanceof DateRange) {
        this._selected = value;
      } else {
        this._selected = this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(value));
      }
      this._setSelectedMonth(value);
    }
    /** The minimum selectable date. */
    get minDate() {
      return this._minDate;
    }
    set minDate(value) {
      this._minDate = this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(value));
    }
    /** The maximum selectable date. */
    get maxDate() {
      return this._maxDate;
    }
    set maxDate(value) {
      this._maxDate = this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(value));
    }
    constructor(_changeDetectorRef, _dateFormats, _dateAdapter, _dir) {
      this._changeDetectorRef = _changeDetectorRef;
      this._dateFormats = _dateFormats;
      this._dateAdapter = _dateAdapter;
      this._dir = _dir;
      this._rerenderSubscription = rxjs__WEBPACK_IMPORTED_MODULE_5__.Subscription.EMPTY;
      /** Emits when a new month is selected. */
      this.selectedChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
      /** Emits the selected month. This doesn't imply a change on the selected date */
      this.monthSelected = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
      /** Emits when any date is activated. */
      this.activeDateChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
      if (typeof ngDevMode === 'undefined' || ngDevMode) {
        if (!this._dateAdapter) {
          throw createMissingDateImplError('DateAdapter');
        }
        if (!this._dateFormats) {
          throw createMissingDateImplError('MAT_DATE_FORMATS');
        }
      }
      this._activeDate = this._dateAdapter.today();
    }
    ngAfterContentInit() {
      this._rerenderSubscription = this._dateAdapter.localeChanges.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.startWith)(null)).subscribe(() => this._init());
    }
    ngOnDestroy() {
      this._rerenderSubscription.unsubscribe();
    }
    /** Handles when a new month is selected. */
    _monthSelected(event) {
      const month = event.value;
      const selectedMonth = this._dateAdapter.createDate(this._dateAdapter.getYear(this.activeDate), month, 1);
      this.monthSelected.emit(selectedMonth);
      const selectedDate = this._getDateFromMonth(month);
      this.selectedChange.emit(selectedDate);
    }
    /**
     * Takes the index of a calendar body cell wrapped in an event as argument. For the date that
     * corresponds to the given cell, set `activeDate` to that date and fire `activeDateChange` with
     * that date.
     *
     * This function is used to match each component's model of the active date with the calendar
     * body cell that was focused. It updates its value of `activeDate` synchronously and updates the
     * parent's value asynchronously via the `activeDateChange` event. The child component receives an
     * updated value asynchronously via the `activeCell` Input.
     */
    _updateActiveDate(event) {
      const month = event.value;
      const oldActiveDate = this._activeDate;
      this.activeDate = this._getDateFromMonth(month);
      if (this._dateAdapter.compareDate(oldActiveDate, this.activeDate)) {
        this.activeDateChange.emit(this.activeDate);
      }
    }
    /** Handles keydown events on the calendar body when calendar is in year view. */
    _handleCalendarBodyKeydown(event) {
      // TODO(mmalerba): We currently allow keyboard navigation to disabled dates, but just prevent
      // disabled ones from being selected. This may not be ideal, we should look into whether
      // navigation should skip over disabled dates, and if so, how to implement that efficiently.
      const oldActiveDate = this._activeDate;
      const isRtl = this._isRtl();
      switch (event.keyCode) {
        case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_7__.LEFT_ARROW:
          this.activeDate = this._dateAdapter.addCalendarMonths(this._activeDate, isRtl ? 1 : -1);
          break;
        case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_7__.RIGHT_ARROW:
          this.activeDate = this._dateAdapter.addCalendarMonths(this._activeDate, isRtl ? -1 : 1);
          break;
        case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_7__.UP_ARROW:
          this.activeDate = this._dateAdapter.addCalendarMonths(this._activeDate, -4);
          break;
        case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_7__.DOWN_ARROW:
          this.activeDate = this._dateAdapter.addCalendarMonths(this._activeDate, 4);
          break;
        case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_7__.HOME:
          this.activeDate = this._dateAdapter.addCalendarMonths(this._activeDate, -this._dateAdapter.getMonth(this._activeDate));
          break;
        case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_7__.END:
          this.activeDate = this._dateAdapter.addCalendarMonths(this._activeDate, 11 - this._dateAdapter.getMonth(this._activeDate));
          break;
        case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_7__.PAGE_UP:
          this.activeDate = this._dateAdapter.addCalendarYears(this._activeDate, event.altKey ? -10 : -1);
          break;
        case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_7__.PAGE_DOWN:
          this.activeDate = this._dateAdapter.addCalendarYears(this._activeDate, event.altKey ? 10 : 1);
          break;
        case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_7__.ENTER:
        case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_7__.SPACE:
          // Note that we only prevent the default action here while the selection happens in
          // `keyup` below. We can't do the selection here, because it can cause the calendar to
          // reopen if focus is restored immediately. We also can't call `preventDefault` on `keyup`
          // because it's too late (see #23305).
          this._selectionKeyPressed = true;
          break;
        default:
          // Don't prevent default or focus active cell on keys that we don't explicitly handle.
          return;
      }
      if (this._dateAdapter.compareDate(oldActiveDate, this.activeDate)) {
        this.activeDateChange.emit(this.activeDate);
        this._focusActiveCellAfterViewChecked();
      }
      // Prevent unexpected default actions such as form submission.
      event.preventDefault();
    }
    /** Handles keyup events on the calendar body when calendar is in year view. */
    _handleCalendarBodyKeyup(event) {
      if (event.keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_7__.SPACE || event.keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_7__.ENTER) {
        if (this._selectionKeyPressed) {
          this._monthSelected({
            value: this._dateAdapter.getMonth(this._activeDate),
            event
          });
        }
        this._selectionKeyPressed = false;
      }
    }
    /** Initializes this year view. */
    _init() {
      this._setSelectedMonth(this.selected);
      this._todayMonth = this._getMonthInCurrentYear(this._dateAdapter.today());
      this._yearLabel = this._dateAdapter.getYearName(this.activeDate);
      let monthNames = this._dateAdapter.getMonthNames('short');
      // First row of months only contains 5 elements so we can fit the year label on the same row.
      this._months = [[0, 1, 2, 3], [4, 5, 6, 7], [8, 9, 10, 11]].map(row => row.map(month => this._createCellForMonth(month, monthNames[month])));
      this._changeDetectorRef.markForCheck();
    }
    /** Focuses the active cell after the microtask queue is empty. */
    _focusActiveCell() {
      this._matCalendarBody._focusActiveCell();
    }
    /** Schedules the matCalendarBody to focus the active cell after change detection has run */
    _focusActiveCellAfterViewChecked() {
      this._matCalendarBody._scheduleFocusActiveCellAfterViewChecked();
    }
    /**
     * Gets the month in this year that the given Date falls on.
     * Returns null if the given Date is in another year.
     */
    _getMonthInCurrentYear(date) {
      return date && this._dateAdapter.getYear(date) == this._dateAdapter.getYear(this.activeDate) ? this._dateAdapter.getMonth(date) : null;
    }
    /**
     * Takes a month and returns a new date in the same day and year as the currently active date.
     *  The returned date will have the same month as the argument date.
     */
    _getDateFromMonth(month) {
      const normalizedDate = this._dateAdapter.createDate(this._dateAdapter.getYear(this.activeDate), month, 1);
      const daysInMonth = this._dateAdapter.getNumDaysInMonth(normalizedDate);
      return this._dateAdapter.createDate(this._dateAdapter.getYear(this.activeDate), month, Math.min(this._dateAdapter.getDate(this.activeDate), daysInMonth));
    }
    /** Creates an MatCalendarCell for the given month. */
    _createCellForMonth(month, monthName) {
      const date = this._dateAdapter.createDate(this._dateAdapter.getYear(this.activeDate), month, 1);
      const ariaLabel = this._dateAdapter.format(date, this._dateFormats.display.monthYearA11yLabel);
      const cellClasses = this.dateClass ? this.dateClass(date, 'year') : undefined;
      return new MatCalendarCell(month, monthName.toLocaleUpperCase(), ariaLabel, this._shouldEnableMonth(month), cellClasses);
    }
    /** Whether the given month is enabled. */
    _shouldEnableMonth(month) {
      const activeYear = this._dateAdapter.getYear(this.activeDate);
      if (month === undefined || month === null || this._isYearAndMonthAfterMaxDate(activeYear, month) || this._isYearAndMonthBeforeMinDate(activeYear, month)) {
        return false;
      }
      if (!this.dateFilter) {
        return true;
      }
      const firstOfMonth = this._dateAdapter.createDate(activeYear, month, 1);
      // If any date in the month is enabled count the month as enabled.
      for (let date = firstOfMonth; this._dateAdapter.getMonth(date) == month; date = this._dateAdapter.addCalendarDays(date, 1)) {
        if (this.dateFilter(date)) {
          return true;
        }
      }
      return false;
    }
    /**
     * Tests whether the combination month/year is after this.maxDate, considering
     * just the month and year of this.maxDate
     */
    _isYearAndMonthAfterMaxDate(year, month) {
      if (this.maxDate) {
        const maxYear = this._dateAdapter.getYear(this.maxDate);
        const maxMonth = this._dateAdapter.getMonth(this.maxDate);
        return year > maxYear || year === maxYear && month > maxMonth;
      }
      return false;
    }
    /**
     * Tests whether the combination month/year is before this.minDate, considering
     * just the month and year of this.minDate
     */
    _isYearAndMonthBeforeMinDate(year, month) {
      if (this.minDate) {
        const minYear = this._dateAdapter.getYear(this.minDate);
        const minMonth = this._dateAdapter.getMonth(this.minDate);
        return year < minYear || year === minYear && month < minMonth;
      }
      return false;
    }
    /** Determines whether the user has the RTL layout direction. */
    _isRtl() {
      return this._dir && this._dir.value === 'rtl';
    }
    /** Sets the currently-selected month based on a model value. */
    _setSelectedMonth(value) {
      if (value instanceof DateRange) {
        this._selectedMonth = this._getMonthInCurrentYear(value.start) || this._getMonthInCurrentYear(value.end);
      } else {
        this._selectedMonth = this._getMonthInCurrentYear(value);
      }
    }
    static {
      this.ɵfac = function MatYearView_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || MatYearView)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_core__WEBPACK_IMPORTED_MODULE_4__.MAT_DATE_FORMATS, 8), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_core__WEBPACK_IMPORTED_MODULE_4__.DateAdapter, 8), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_8__.Directionality, 8));
      };
    }
    static {
      this.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: MatYearView,
        selectors: [["mat-year-view"]],
        viewQuery: function MatYearView_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](MatCalendarBody, 5);
          }
          if (rf & 2) {
            let _t;
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx._matCalendarBody = _t.first);
          }
        },
        inputs: {
          activeDate: "activeDate",
          selected: "selected",
          minDate: "minDate",
          maxDate: "maxDate",
          dateFilter: "dateFilter",
          dateClass: "dateClass"
        },
        outputs: {
          selectedChange: "selectedChange",
          monthSelected: "monthSelected",
          activeDateChange: "activeDateChange"
        },
        exportAs: ["matYearView"],
        standalone: true,
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵStandaloneFeature"]],
        decls: 5,
        vars: 9,
        consts: [["role", "grid", 1, "mat-calendar-table"], ["aria-hidden", "true", 1, "mat-calendar-table-header"], ["colspan", "4", 1, "mat-calendar-table-header-divider"], ["mat-calendar-body", "", 3, "selectedValueChange", "activeDateChange", "keyup", "keydown", "label", "rows", "todayValue", "startValue", "endValue", "labelMinRequiredCells", "numCols", "cellAspectRatio", "activeCell"]],
        template: function MatYearView_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "table", 0)(1, "thead", 1)(2, "tr");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "th", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "tbody", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("selectedValueChange", function MatYearView_Template_tbody_selectedValueChange_4_listener($event) {
              return ctx._monthSelected($event);
            })("activeDateChange", function MatYearView_Template_tbody_activeDateChange_4_listener($event) {
              return ctx._updateActiveDate($event);
            })("keyup", function MatYearView_Template_tbody_keyup_4_listener($event) {
              return ctx._handleCalendarBodyKeyup($event);
            })("keydown", function MatYearView_Template_tbody_keydown_4_listener($event) {
              return ctx._handleCalendarBodyKeydown($event);
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          }
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("label", ctx._yearLabel)("rows", ctx._months)("todayValue", ctx._todayMonth)("startValue", ctx._selectedMonth)("endValue", ctx._selectedMonth)("labelMinRequiredCells", 2)("numCols", 4)("cellAspectRatio", 4 / 7)("activeCell", ctx._dateAdapter.getMonth(ctx.activeDate));
          }
        },
        dependencies: [MatCalendarBody],
        encapsulation: 2,
        changeDetection: 0
      });
    }
  }
  return MatYearView;
})();
/*#__PURE__*/(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
let calendarHeaderId = 1;
/** Default header for MatCalendar */
let MatCalendarHeader = /*#__PURE__*/(() => {
  class MatCalendarHeader {
    constructor(_intl, calendar, _dateAdapter, _dateFormats, changeDetectorRef) {
      this._intl = _intl;
      this.calendar = calendar;
      this._dateAdapter = _dateAdapter;
      this._dateFormats = _dateFormats;
      this._id = `mat-calendar-header-${calendarHeaderId++}`;
      this._periodButtonLabelId = `${this._id}-period-label`;
      this.calendar.stateChanges.subscribe(() => changeDetectorRef.markForCheck());
    }
    /** The display text for the current calendar view. */
    get periodButtonText() {
      if (this.calendar.currentView == 'month') {
        return this._dateAdapter.format(this.calendar.activeDate, this._dateFormats.display.monthYearLabel).toLocaleUpperCase();
      }
      if (this.calendar.currentView == 'year') {
        return this._dateAdapter.getYearName(this.calendar.activeDate);
      }
      return this._intl.formatYearRange(...this._formatMinAndMaxYearLabels());
    }
    /** The aria description for the current calendar view. */
    get periodButtonDescription() {
      if (this.calendar.currentView == 'month') {
        return this._dateAdapter.format(this.calendar.activeDate, this._dateFormats.display.monthYearLabel).toLocaleUpperCase();
      }
      if (this.calendar.currentView == 'year') {
        return this._dateAdapter.getYearName(this.calendar.activeDate);
      }
      // Format a label for the window of years displayed in the multi-year calendar view. Use
      // `formatYearRangeLabel` because it is TTS friendly.
      return this._intl.formatYearRangeLabel(...this._formatMinAndMaxYearLabels());
    }
    /** The `aria-label` for changing the calendar view. */
    get periodButtonLabel() {
      return this.calendar.currentView == 'month' ? this._intl.switchToMultiYearViewLabel : this._intl.switchToMonthViewLabel;
    }
    /** The label for the previous button. */
    get prevButtonLabel() {
      return {
        'month': this._intl.prevMonthLabel,
        'year': this._intl.prevYearLabel,
        'multi-year': this._intl.prevMultiYearLabel
      }[this.calendar.currentView];
    }
    /** The label for the next button. */
    get nextButtonLabel() {
      return {
        'month': this._intl.nextMonthLabel,
        'year': this._intl.nextYearLabel,
        'multi-year': this._intl.nextMultiYearLabel
      }[this.calendar.currentView];
    }
    /** Handles user clicks on the period label. */
    currentPeriodClicked() {
      this.calendar.currentView = this.calendar.currentView == 'month' ? 'multi-year' : 'month';
    }
    /** Handles user clicks on the previous button. */
    previousClicked() {
      this.calendar.activeDate = this.calendar.currentView == 'month' ? this._dateAdapter.addCalendarMonths(this.calendar.activeDate, -1) : this._dateAdapter.addCalendarYears(this.calendar.activeDate, this.calendar.currentView == 'year' ? -1 : -yearsPerPage);
    }
    /** Handles user clicks on the next button. */
    nextClicked() {
      this.calendar.activeDate = this.calendar.currentView == 'month' ? this._dateAdapter.addCalendarMonths(this.calendar.activeDate, 1) : this._dateAdapter.addCalendarYears(this.calendar.activeDate, this.calendar.currentView == 'year' ? 1 : yearsPerPage);
    }
    /** Whether the previous period button is enabled. */
    previousEnabled() {
      if (!this.calendar.minDate) {
        return true;
      }
      return !this.calendar.minDate || !this._isSameView(this.calendar.activeDate, this.calendar.minDate);
    }
    /** Whether the next period button is enabled. */
    nextEnabled() {
      return !this.calendar.maxDate || !this._isSameView(this.calendar.activeDate, this.calendar.maxDate);
    }
    /** Whether the two dates represent the same view in the current view mode (month or year). */
    _isSameView(date1, date2) {
      if (this.calendar.currentView == 'month') {
        return this._dateAdapter.getYear(date1) == this._dateAdapter.getYear(date2) && this._dateAdapter.getMonth(date1) == this._dateAdapter.getMonth(date2);
      }
      if (this.calendar.currentView == 'year') {
        return this._dateAdapter.getYear(date1) == this._dateAdapter.getYear(date2);
      }
      // Otherwise we are in 'multi-year' view.
      return isSameMultiYearView(this._dateAdapter, date1, date2, this.calendar.minDate, this.calendar.maxDate);
    }
    /**
     * Format two individual labels for the minimum year and maximum year available in the multi-year
     * calendar view. Returns an array of two strings where the first string is the formatted label
     * for the minimum year, and the second string is the formatted label for the maximum year.
     */
    _formatMinAndMaxYearLabels() {
      // The offset from the active year to the "slot" for the starting year is the
      // *actual* first rendered year in the multi-year view, and the last year is
      // just yearsPerPage - 1 away.
      const activeYear = this._dateAdapter.getYear(this.calendar.activeDate);
      const minYearOfPage = activeYear - getActiveOffset(this._dateAdapter, this.calendar.activeDate, this.calendar.minDate, this.calendar.maxDate);
      const maxYearOfPage = minYearOfPage + yearsPerPage - 1;
      const minYearLabel = this._dateAdapter.getYearName(this._dateAdapter.createDate(minYearOfPage, 0, 1));
      const maxYearLabel = this._dateAdapter.getYearName(this._dateAdapter.createDate(maxYearOfPage, 0, 1));
      return [minYearLabel, maxYearLabel];
    }
    static {
      this.ɵfac = function MatCalendarHeader_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || MatCalendarHeader)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](MatDatepickerIntl), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"]((0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(() => MatCalendar)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_core__WEBPACK_IMPORTED_MODULE_4__.DateAdapter, 8), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_core__WEBPACK_IMPORTED_MODULE_4__.MAT_DATE_FORMATS, 8), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef));
      };
    }
    static {
      this.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: MatCalendarHeader,
        selectors: [["mat-calendar-header"]],
        exportAs: ["matCalendarHeader"],
        standalone: true,
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵStandaloneFeature"]],
        ngContentSelectors: _c1,
        decls: 17,
        vars: 11,
        consts: [[1, "mat-calendar-header"], [1, "mat-calendar-controls"], ["aria-live", "polite", 1, "cdk-visually-hidden", 3, "id"], ["mat-button", "", "type", "button", 1, "mat-calendar-period-button", 3, "click"], ["aria-hidden", "true"], ["viewBox", "0 0 10 5", "focusable", "false", "aria-hidden", "true", 1, "mat-calendar-arrow"], ["points", "0,0 5,5 10,0"], [1, "mat-calendar-spacer"], ["mat-icon-button", "", "type", "button", 1, "mat-calendar-previous-button", 3, "click", "disabled"], ["viewBox", "0 0 24 24", "focusable", "false", "aria-hidden", "true"], ["d", "M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"], ["mat-icon-button", "", "type", "button", 1, "mat-calendar-next-button", 3, "click", "disabled"], ["d", "M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"]],
        template: function MatCalendarHeader_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "span", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MatCalendarHeader_Template_button_click_4_listener() {
              return ctx.currentPeriodClicked();
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "svg", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "polygon", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "div", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](10);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "button", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MatCalendarHeader_Template_button_click_11_listener() {
              return ctx.previousClicked();
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "svg", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "path", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "button", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MatCalendarHeader_Template_button_click_14_listener() {
              return ctx.nextClicked();
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "svg", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "path", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
          }
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("id", ctx._periodButtonLabelId);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.periodButtonDescription);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-label", ctx.periodButtonLabel)("aria-describedby", ctx._periodButtonLabelId);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.periodButtonText);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("mat-calendar-invert", ctx.calendar.currentView !== "month");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx.previousEnabled());
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-label", ctx.prevButtonLabel);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx.nextEnabled());
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-label", ctx.nextButtonLabel);
          }
        },
        dependencies: [_angular_material_button__WEBPACK_IMPORTED_MODULE_9__.MatButton, _angular_material_button__WEBPACK_IMPORTED_MODULE_9__.MatIconButton],
        encapsulation: 2,
        changeDetection: 0
      });
    }
  }
  return MatCalendarHeader;
})();
/*#__PURE__*/(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
/** A calendar that is used as part of the datepicker. */
let MatCalendar = /*#__PURE__*/(() => {
  class MatCalendar {
    /** A date representing the period (month or year) to start the calendar in. */
    get startAt() {
      return this._startAt;
    }
    set startAt(value) {
      this._startAt = this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(value));
    }
    /** The currently selected date. */
    get selected() {
      return this._selected;
    }
    set selected(value) {
      if (value instanceof DateRange) {
        this._selected = value;
      } else {
        this._selected = this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(value));
      }
    }
    /** The minimum selectable date. */
    get minDate() {
      return this._minDate;
    }
    set minDate(value) {
      this._minDate = this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(value));
    }
    /** The maximum selectable date. */
    get maxDate() {
      return this._maxDate;
    }
    set maxDate(value) {
      this._maxDate = this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(value));
    }
    /**
     * The current active date. This determines which time period is shown and which date is
     * highlighted when using keyboard navigation.
     */
    get activeDate() {
      return this._clampedActiveDate;
    }
    set activeDate(value) {
      this._clampedActiveDate = this._dateAdapter.clampDate(value, this.minDate, this.maxDate);
      this.stateChanges.next();
      this._changeDetectorRef.markForCheck();
    }
    /** Whether the calendar is in month view. */
    get currentView() {
      return this._currentView;
    }
    set currentView(value) {
      const viewChangedResult = this._currentView !== value ? value : null;
      this._currentView = value;
      this._moveFocusOnNextTick = true;
      this._changeDetectorRef.markForCheck();
      if (viewChangedResult) {
        this.viewChanged.emit(viewChangedResult);
      }
    }
    constructor(_intl, _dateAdapter, _dateFormats, _changeDetectorRef) {
      this._dateAdapter = _dateAdapter;
      this._dateFormats = _dateFormats;
      this._changeDetectorRef = _changeDetectorRef;
      /**
       * Used for scheduling that focus should be moved to the active cell on the next tick.
       * We need to schedule it, rather than do it immediately, because we have to wait
       * for Angular to re-evaluate the view children.
       */
      this._moveFocusOnNextTick = false;
      /** Whether the calendar should be started in month or year view. */
      this.startView = 'month';
      /** Emits when the currently selected date changes. */
      this.selectedChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
      /**
       * Emits the year chosen in multiyear view.
       * This doesn't imply a change on the selected date.
       */
      this.yearSelected = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
      /**
       * Emits the month chosen in year view.
       * This doesn't imply a change on the selected date.
       */
      this.monthSelected = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
      /**
       * Emits when the current view changes.
       */
      this.viewChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter(true);
      /** Emits when any date is selected. */
      this._userSelection = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
      /** Emits a new date range value when the user completes a drag drop operation. */
      this._userDragDrop = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
      /** Origin of active drag, or null when dragging is not active. */
      this._activeDrag = null;
      /**
       * Emits whenever there is a state change that the header may need to respond to.
       */
      this.stateChanges = new rxjs__WEBPACK_IMPORTED_MODULE_1__.Subject();
      if (typeof ngDevMode === 'undefined' || ngDevMode) {
        if (!this._dateAdapter) {
          throw createMissingDateImplError('DateAdapter');
        }
        if (!this._dateFormats) {
          throw createMissingDateImplError('MAT_DATE_FORMATS');
        }
      }
      this._intlChanges = _intl.changes.subscribe(() => {
        _changeDetectorRef.markForCheck();
        this.stateChanges.next();
      });
    }
    ngAfterContentInit() {
      this._calendarHeaderPortal = new _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_10__.ComponentPortal(this.headerComponent || MatCalendarHeader);
      this.activeDate = this.startAt || this._dateAdapter.today();
      // Assign to the private property since we don't want to move focus on init.
      this._currentView = this.startView;
    }
    ngAfterViewChecked() {
      if (this._moveFocusOnNextTick) {
        this._moveFocusOnNextTick = false;
        this.focusActiveCell();
      }
    }
    ngOnDestroy() {
      this._intlChanges.unsubscribe();
      this.stateChanges.complete();
    }
    ngOnChanges(changes) {
      // Ignore date changes that are at a different time on the same day. This fixes issues where
      // the calendar re-renders when there is no meaningful change to [minDate] or [maxDate]
      // (#24435).
      const minDateChange = changes['minDate'] && !this._dateAdapter.sameDate(changes['minDate'].previousValue, changes['minDate'].currentValue) ? changes['minDate'] : undefined;
      const maxDateChange = changes['maxDate'] && !this._dateAdapter.sameDate(changes['maxDate'].previousValue, changes['maxDate'].currentValue) ? changes['maxDate'] : undefined;
      const changeRequiringRerender = minDateChange || maxDateChange || changes['dateFilter'];
      if (changeRequiringRerender && !changeRequiringRerender.firstChange) {
        const view = this._getCurrentViewComponent();
        if (view) {
          // Schedule focus to be moved to the active date since re-rendering
          // can blur the active cell. See #29265.
          this._moveFocusOnNextTick = true;
          // We need to `detectChanges` manually here, because the `minDate`, `maxDate` etc. are
          // passed down to the view via data bindings which won't be up-to-date when we call `_init`.
          this._changeDetectorRef.detectChanges();
          view._init();
        }
      }
      this.stateChanges.next();
    }
    /** Focuses the active date. */
    focusActiveCell() {
      this._getCurrentViewComponent()._focusActiveCell(false);
    }
    /** Updates today's date after an update of the active date */
    updateTodaysDate() {
      this._getCurrentViewComponent()._init();
    }
    /** Handles date selection in the month view. */
    _dateSelected(event) {
      const date = event.value;
      if (this.selected instanceof DateRange || date && !this._dateAdapter.sameDate(date, this.selected)) {
        this.selectedChange.emit(date);
      }
      this._userSelection.emit(event);
    }
    /** Handles year selection in the multiyear view. */
    _yearSelectedInMultiYearView(normalizedYear) {
      this.yearSelected.emit(normalizedYear);
    }
    /** Handles month selection in the year view. */
    _monthSelectedInYearView(normalizedMonth) {
      this.monthSelected.emit(normalizedMonth);
    }
    /** Handles year/month selection in the multi-year/year views. */
    _goToDateInView(date, view) {
      this.activeDate = date;
      this.currentView = view;
    }
    /** Called when the user starts dragging to change a date range. */
    _dragStarted(event) {
      this._activeDrag = event;
    }
    /**
     * Called when a drag completes. It may end in cancelation or in the selection
     * of a new range.
     */
    _dragEnded(event) {
      if (!this._activeDrag) return;
      if (event.value) {
        this._userDragDrop.emit(event);
      }
      this._activeDrag = null;
    }
    /** Returns the component instance that corresponds to the current calendar view. */
    _getCurrentViewComponent() {
      // The return type is explicitly written as a union to ensure that the Closure compiler does
      // not optimize calls to _init(). Without the explicit return type, TypeScript narrows it to
      // only the first component type. See https://github.com/angular/components/issues/22996.
      return this.monthView || this.yearView || this.multiYearView;
    }
    static {
      this.ɵfac = function MatCalendar_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || MatCalendar)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](MatDatepickerIntl), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_core__WEBPACK_IMPORTED_MODULE_4__.DateAdapter, 8), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_core__WEBPACK_IMPORTED_MODULE_4__.MAT_DATE_FORMATS, 8), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef));
      };
    }
    static {
      this.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: MatCalendar,
        selectors: [["mat-calendar"]],
        viewQuery: function MatCalendar_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](MatMonthView, 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](MatYearView, 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](MatMultiYearView, 5);
          }
          if (rf & 2) {
            let _t;
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.monthView = _t.first);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.yearView = _t.first);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.multiYearView = _t.first);
          }
        },
        hostAttrs: [1, "mat-calendar"],
        inputs: {
          headerComponent: "headerComponent",
          startAt: "startAt",
          startView: "startView",
          selected: "selected",
          minDate: "minDate",
          maxDate: "maxDate",
          dateFilter: "dateFilter",
          dateClass: "dateClass",
          comparisonStart: "comparisonStart",
          comparisonEnd: "comparisonEnd",
          startDateAccessibleName: "startDateAccessibleName",
          endDateAccessibleName: "endDateAccessibleName"
        },
        outputs: {
          selectedChange: "selectedChange",
          yearSelected: "yearSelected",
          monthSelected: "monthSelected",
          viewChanged: "viewChanged",
          _userSelection: "_userSelection",
          _userDragDrop: "_userDragDrop"
        },
        exportAs: ["matCalendar"],
        standalone: true,
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([MAT_SINGLE_DATE_SELECTION_MODEL_PROVIDER]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵStandaloneFeature"]],
        decls: 5,
        vars: 2,
        consts: [[3, "cdkPortalOutlet"], ["cdkMonitorSubtreeFocus", "", "tabindex", "-1", 1, "mat-calendar-content"], [3, "activeDate", "selected", "dateFilter", "maxDate", "minDate", "dateClass", "comparisonStart", "comparisonEnd", "startDateAccessibleName", "endDateAccessibleName", "activeDrag"], [3, "activeDate", "selected", "dateFilter", "maxDate", "minDate", "dateClass"], [3, "activeDateChange", "_userSelection", "dragStarted", "dragEnded", "activeDate", "selected", "dateFilter", "maxDate", "minDate", "dateClass", "comparisonStart", "comparisonEnd", "startDateAccessibleName", "endDateAccessibleName", "activeDrag"], [3, "activeDateChange", "monthSelected", "selectedChange", "activeDate", "selected", "dateFilter", "maxDate", "minDate", "dateClass"], [3, "activeDateChange", "yearSelected", "selectedChange", "activeDate", "selected", "dateFilter", "maxDate", "minDate", "dateClass"]],
        template: function MatCalendar_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, MatCalendar_ng_template_0_Template, 0, 0, "ng-template", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, MatCalendar_Case_2_Template, 1, 11, "mat-month-view", 2)(3, MatCalendar_Case_3_Template, 1, 6, "mat-year-view", 3)(4, MatCalendar_Case_4_Template, 1, 6, "mat-multi-year-view", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
          if (rf & 2) {
            let tmp_1_0;
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("cdkPortalOutlet", ctx._calendarHeaderPortal);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵconditional"]((tmp_1_0 = ctx.currentView) === "month" ? 2 : tmp_1_0 === "year" ? 3 : tmp_1_0 === "multi-year" ? 4 : -1);
          }
        },
        dependencies: [_angular_cdk_portal__WEBPACK_IMPORTED_MODULE_10__.CdkPortalOutlet, _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_11__.CdkMonitorFocus, MatMonthView, MatYearView, MatMultiYearView],
        styles: [".mat-calendar{display:block;line-height:normal;font-family:var(--mat-datepicker-calendar-text-font, var(--mat-app-body-medium-font));font-size:var(--mat-datepicker-calendar-text-size, var(--mat-app-body-medium-size))}.mat-calendar-header{padding:8px 8px 0 8px}.mat-calendar-content{padding:0 8px 8px 8px;outline:none}.mat-calendar-controls{display:flex;align-items:center;margin:5% calc(4.7142857143% - 16px)}.mat-calendar-spacer{flex:1 1 auto}.mat-calendar-period-button{min-width:0;margin:0 8px;font-size:var(--mat-datepicker-calendar-period-button-text-size, var(--mat-app-title-small-size));font-weight:var(--mat-datepicker-calendar-period-button-text-weight, var(--mat-app-title-small-weight));--mdc-text-button-label-text-color:var(--mat-datepicker-calendar-period-button-text-color, var(--mat-app-on-surface-variant))}.mat-calendar-arrow{display:inline-block;width:10px;height:5px;margin:0 0 0 5px;vertical-align:middle;fill:var(--mat-datepicker-calendar-period-button-icon-color, var(--mat-app-on-surface-variant))}.mat-calendar-arrow.mat-calendar-invert{transform:rotate(180deg)}[dir=rtl] .mat-calendar-arrow{margin:0 5px 0 0}.cdk-high-contrast-active .mat-calendar-arrow{fill:CanvasText}.mat-datepicker-content .mat-calendar-previous-button:not(.mat-mdc-button-disabled),.mat-datepicker-content .mat-calendar-next-button:not(.mat-mdc-button-disabled){color:var(--mat-datepicker-calendar-navigation-button-icon-color, var(--mat-app-on-surface-variant))}[dir=rtl] .mat-calendar-previous-button,[dir=rtl] .mat-calendar-next-button{transform:rotate(180deg)}.mat-calendar-table{border-spacing:0;border-collapse:collapse;width:100%}.mat-calendar-table-header th{text-align:center;padding:0 0 8px 0;color:var(--mat-datepicker-calendar-header-text-color, var(--mat-app-on-surface-variant));font-size:var(--mat-datepicker-calendar-header-text-size, var(--mat-app-title-small-size));font-weight:var(--mat-datepicker-calendar-header-text-weight, var(--mat-app-title-small-weight))}.mat-calendar-table-header-divider{position:relative;height:1px}.mat-calendar-table-header-divider::after{content:\"\";position:absolute;top:0;left:-8px;right:-8px;height:1px;background:var(--mat-datepicker-calendar-header-divider-color)}.mat-calendar-body-cell-content::before{margin:calc(calc(var(--mat-focus-indicator-border-width, 3px) + 3px)*-1)}.mat-calendar-body-cell:focus .mat-focus-indicator::before{content:\"\"}"],
        encapsulation: 2,
        changeDetection: 0
      });
    }
  }
  return MatCalendar;
})();
/*#__PURE__*/(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();

/**
 * Animations used by the Material datepicker.
 * @docs-private
 */
const matDatepickerAnimations = {
  /** Transforms the height of the datepicker's calendar. */
  transformPanel: /*#__PURE__*/(0,_angular_animations__WEBPACK_IMPORTED_MODULE_12__.trigger)('transformPanel', [/*#__PURE__*/(0,_angular_animations__WEBPACK_IMPORTED_MODULE_12__.transition)('void => enter-dropdown', /*#__PURE__*/(0,_angular_animations__WEBPACK_IMPORTED_MODULE_12__.animate)('120ms cubic-bezier(0, 0, 0.2, 1)', /*#__PURE__*/(0,_angular_animations__WEBPACK_IMPORTED_MODULE_12__.keyframes)([/*#__PURE__*/(0,_angular_animations__WEBPACK_IMPORTED_MODULE_12__.style)({
    opacity: 0,
    transform: 'scale(1, 0.8)'
  }), /*#__PURE__*/(0,_angular_animations__WEBPACK_IMPORTED_MODULE_12__.style)({
    opacity: 1,
    transform: 'scale(1, 1)'
  })]))), /*#__PURE__*/(0,_angular_animations__WEBPACK_IMPORTED_MODULE_12__.transition)('void => enter-dialog', /*#__PURE__*/(0,_angular_animations__WEBPACK_IMPORTED_MODULE_12__.animate)('150ms cubic-bezier(0, 0, 0.2, 1)', /*#__PURE__*/(0,_angular_animations__WEBPACK_IMPORTED_MODULE_12__.keyframes)([/*#__PURE__*/(0,_angular_animations__WEBPACK_IMPORTED_MODULE_12__.style)({
    opacity: 0,
    transform: 'scale(0.7)'
  }), /*#__PURE__*/(0,_angular_animations__WEBPACK_IMPORTED_MODULE_12__.style)({
    transform: 'none',
    opacity: 1
  })]))), /*#__PURE__*/(0,_angular_animations__WEBPACK_IMPORTED_MODULE_12__.transition)('* => void', /*#__PURE__*/(0,_angular_animations__WEBPACK_IMPORTED_MODULE_12__.animate)('100ms linear', /*#__PURE__*/(0,_angular_animations__WEBPACK_IMPORTED_MODULE_12__.style)({
    opacity: 0
  })))]),
  /** Fades in the content of the calendar. */
  fadeInCalendar: /*#__PURE__*/(0,_angular_animations__WEBPACK_IMPORTED_MODULE_12__.trigger)('fadeInCalendar', [/*#__PURE__*/(0,_angular_animations__WEBPACK_IMPORTED_MODULE_12__.state)('void', /*#__PURE__*/(0,_angular_animations__WEBPACK_IMPORTED_MODULE_12__.style)({
    opacity: 0
  })), /*#__PURE__*/(0,_angular_animations__WEBPACK_IMPORTED_MODULE_12__.state)('enter', /*#__PURE__*/(0,_angular_animations__WEBPACK_IMPORTED_MODULE_12__.style)({
    opacity: 1
  })),
  /*#__PURE__*/
  // TODO(crisbeto): this animation should be removed since it isn't quite on spec, but we
  // need to keep it until #12440 gets in, otherwise the exit animation will look glitchy.
  (0,_angular_animations__WEBPACK_IMPORTED_MODULE_12__.transition)('void => *', /*#__PURE__*/(0,_angular_animations__WEBPACK_IMPORTED_MODULE_12__.animate)('120ms 100ms cubic-bezier(0.55, 0, 0.55, 0.2)'))])
};

/** Used to generate a unique ID for each datepicker instance. */
let datepickerUid = 0;
/** Injection token that determines the scroll handling while the calendar is open. */
const MAT_DATEPICKER_SCROLL_STRATEGY = /*#__PURE__*/new _angular_core__WEBPACK_IMPORTED_MODULE_0__.InjectionToken('mat-datepicker-scroll-strategy', {
  providedIn: 'root',
  factory: () => {
    const overlay = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_13__.Overlay);
    return () => overlay.scrollStrategies.reposition();
  }
});
/** @docs-private */
function MAT_DATEPICKER_SCROLL_STRATEGY_FACTORY(overlay) {
  return () => overlay.scrollStrategies.reposition();
}
/** @docs-private */
const MAT_DATEPICKER_SCROLL_STRATEGY_FACTORY_PROVIDER = {
  provide: MAT_DATEPICKER_SCROLL_STRATEGY,
  deps: [_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_13__.Overlay],
  useFactory: MAT_DATEPICKER_SCROLL_STRATEGY_FACTORY
};
/**
 * Component used as the content for the datepicker overlay. We use this instead of using
 * MatCalendar directly as the content so we can control the initial focus. This also gives us a
 * place to put additional features of the overlay that are not part of the calendar itself in the
 * future. (e.g. confirmation buttons).
 * @docs-private
 */
let MatDatepickerContent = /*#__PURE__*/(() => {
  class MatDatepickerContent {
    constructor(_elementRef, _changeDetectorRef, _globalModel, _dateAdapter, _rangeSelectionStrategy, intl) {
      this._elementRef = _elementRef;
      this._changeDetectorRef = _changeDetectorRef;
      this._globalModel = _globalModel;
      this._dateAdapter = _dateAdapter;
      this._rangeSelectionStrategy = _rangeSelectionStrategy;
      this._subscriptions = new rxjs__WEBPACK_IMPORTED_MODULE_5__.Subscription();
      /** Emits when an animation has finished. */
      this._animationDone = new rxjs__WEBPACK_IMPORTED_MODULE_1__.Subject();
      /** Whether there is an in-progress animation. */
      this._isAnimating = false;
      /** Portal with projected action buttons. */
      this._actionsPortal = null;
      this._closeButtonText = intl.closeCalendarLabel;
    }
    ngOnInit() {
      this._animationState = this.datepicker.touchUi ? 'enter-dialog' : 'enter-dropdown';
    }
    ngAfterViewInit() {
      this._subscriptions.add(this.datepicker.stateChanges.subscribe(() => {
        this._changeDetectorRef.markForCheck();
      }));
      this._calendar.focusActiveCell();
    }
    ngOnDestroy() {
      this._subscriptions.unsubscribe();
      this._animationDone.complete();
    }
    _handleUserSelection(event) {
      const selection = this._model.selection;
      const value = event.value;
      const isRange = selection instanceof DateRange;
      // If we're selecting a range and we have a selection strategy, always pass the value through
      // there. Otherwise don't assign null values to the model, unless we're selecting a range.
      // A null value when picking a range means that the user cancelled the selection (e.g. by
      // pressing escape), whereas when selecting a single value it means that the value didn't
      // change. This isn't very intuitive, but it's here for backwards-compatibility.
      if (isRange && this._rangeSelectionStrategy) {
        const newSelection = this._rangeSelectionStrategy.selectionFinished(value, selection, event.event);
        this._model.updateSelection(newSelection, this);
      } else if (value && (isRange || !this._dateAdapter.sameDate(value, selection))) {
        this._model.add(value);
      }
      // Delegate closing the overlay to the actions.
      if ((!this._model || this._model.isComplete()) && !this._actionsPortal) {
        this.datepicker.close();
      }
    }
    _handleUserDragDrop(event) {
      this._model.updateSelection(event.value, this);
    }
    _startExitAnimation() {
      this._animationState = 'void';
      this._changeDetectorRef.markForCheck();
    }
    _handleAnimationEvent(event) {
      this._isAnimating = event.phaseName === 'start';
      if (!this._isAnimating) {
        this._animationDone.next();
      }
    }
    _getSelected() {
      return this._model.selection;
    }
    /** Applies the current pending selection to the global model. */
    _applyPendingSelection() {
      if (this._model !== this._globalModel) {
        this._globalModel.updateSelection(this._model.selection, this);
      }
    }
    /**
     * Assigns a new portal containing the datepicker actions.
     * @param portal Portal with the actions to be assigned.
     * @param forceRerender Whether a re-render of the portal should be triggered. This isn't
     * necessary if the portal is assigned during initialization, but it may be required if it's
     * added at a later point.
     */
    _assignActions(portal, forceRerender) {
      // If we have actions, clone the model so that we have the ability to cancel the selection,
      // otherwise update the global model directly. Note that we want to assign this as soon as
      // possible, but `_actionsPortal` isn't available in the constructor so we do it in `ngOnInit`.
      this._model = portal ? this._globalModel.clone() : this._globalModel;
      this._actionsPortal = portal;
      if (forceRerender) {
        this._changeDetectorRef.detectChanges();
      }
    }
    static {
      this.ɵfac = function MatDatepickerContent_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || MatDatepickerContent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](MatDateSelectionModel), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_core__WEBPACK_IMPORTED_MODULE_4__.DateAdapter), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](MAT_DATE_RANGE_SELECTION_STRATEGY, 8), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](MatDatepickerIntl));
      };
    }
    static {
      this.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: MatDatepickerContent,
        selectors: [["mat-datepicker-content"]],
        viewQuery: function MatDatepickerContent_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](MatCalendar, 5);
          }
          if (rf & 2) {
            let _t;
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx._calendar = _t.first);
          }
        },
        hostAttrs: [1, "mat-datepicker-content"],
        hostVars: 5,
        hostBindings: function MatDatepickerContent_HostBindings(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsyntheticHostListener"]("@transformPanel.start", function MatDatepickerContent_animation_transformPanel_start_HostBindingHandler($event) {
              return ctx._handleAnimationEvent($event);
            })("@transformPanel.done", function MatDatepickerContent_animation_transformPanel_done_HostBindingHandler($event) {
              return ctx._handleAnimationEvent($event);
            });
          }
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsyntheticHostProperty"]("@transformPanel", ctx._animationState);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx.color ? "mat-" + ctx.color : "");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("mat-datepicker-content-touch", ctx.datepicker.touchUi);
          }
        },
        inputs: {
          color: "color"
        },
        exportAs: ["matDatepickerContent"],
        standalone: true,
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵStandaloneFeature"]],
        decls: 5,
        vars: 27,
        consts: [["cdkTrapFocus", "", "role", "dialog", 1, "mat-datepicker-content-container"], [3, "yearSelected", "monthSelected", "viewChanged", "_userSelection", "_userDragDrop", "id", "startAt", "startView", "minDate", "maxDate", "dateFilter", "headerComponent", "selected", "dateClass", "comparisonStart", "comparisonEnd", "startDateAccessibleName", "endDateAccessibleName"], [3, "cdkPortalOutlet"], ["type", "button", "mat-raised-button", "", 1, "mat-datepicker-close-button", 3, "focus", "blur", "click", "color"]],
        template: function MatDatepickerContent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "mat-calendar", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("yearSelected", function MatDatepickerContent_Template_mat_calendar_yearSelected_1_listener($event) {
              return ctx.datepicker._selectYear($event);
            })("monthSelected", function MatDatepickerContent_Template_mat_calendar_monthSelected_1_listener($event) {
              return ctx.datepicker._selectMonth($event);
            })("viewChanged", function MatDatepickerContent_Template_mat_calendar_viewChanged_1_listener($event) {
              return ctx.datepicker._viewChanged($event);
            })("_userSelection", function MatDatepickerContent_Template_mat_calendar__userSelection_1_listener($event) {
              return ctx._handleUserSelection($event);
            })("_userDragDrop", function MatDatepickerContent_Template_mat_calendar__userDragDrop_1_listener($event) {
              return ctx._handleUserDragDrop($event);
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, MatDatepickerContent_ng_template_2_Template, 0, 0, "ng-template", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("focus", function MatDatepickerContent_Template_button_focus_3_listener() {
              return ctx._closeButtonFocused = true;
            })("blur", function MatDatepickerContent_Template_button_blur_3_listener() {
              return ctx._closeButtonFocused = false;
            })("click", function MatDatepickerContent_Template_button_click_3_listener() {
              return ctx.datepicker.close();
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          }
          if (rf & 2) {
            let tmp_3_0;
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("mat-datepicker-content-container-with-custom-header", ctx.datepicker.calendarHeaderComponent)("mat-datepicker-content-container-with-actions", ctx._actionsPortal);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-modal", true)("aria-labelledby", (tmp_3_0 = ctx._dialogLabelId) !== null && tmp_3_0 !== undefined ? tmp_3_0 : undefined);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx.datepicker.panelClass);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("id", ctx.datepicker.id)("startAt", ctx.datepicker.startAt)("startView", ctx.datepicker.startView)("minDate", ctx.datepicker._getMinDate())("maxDate", ctx.datepicker._getMaxDate())("dateFilter", ctx.datepicker._getDateFilter())("headerComponent", ctx.datepicker.calendarHeaderComponent)("selected", ctx._getSelected())("dateClass", ctx.datepicker.dateClass)("comparisonStart", ctx.comparisonStart)("comparisonEnd", ctx.comparisonEnd)("@fadeInCalendar", "enter")("startDateAccessibleName", ctx.startDateAccessibleName)("endDateAccessibleName", ctx.endDateAccessibleName);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("cdkPortalOutlet", ctx._actionsPortal);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("cdk-visually-hidden", !ctx._closeButtonFocused);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("color", ctx.color || "primary");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx._closeButtonText);
          }
        },
        dependencies: [_angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_11__.CdkTrapFocus, MatCalendar, _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_10__.CdkPortalOutlet, _angular_material_button__WEBPACK_IMPORTED_MODULE_9__.MatButton],
        styles: [".mat-datepicker-content{display:block;border-radius:4px;background-color:var(--mat-datepicker-calendar-container-background-color, var(--mat-app-surface-container-high));color:var(--mat-datepicker-calendar-container-text-color, var(--mat-app-on-surface));box-shadow:var(--mat-datepicker-calendar-container-elevation-shadow);border-radius:var(--mat-datepicker-calendar-container-shape, var(--mat-app-corner-large))}.mat-datepicker-content .mat-calendar{width:296px;height:354px}.mat-datepicker-content .mat-datepicker-content-container-with-custom-header .mat-calendar{height:auto}.mat-datepicker-content .mat-datepicker-close-button{position:absolute;top:100%;left:0;margin-top:8px}.ng-animating .mat-datepicker-content .mat-datepicker-close-button{display:none}.mat-datepicker-content-container{display:flex;flex-direction:column;justify-content:space-between}.mat-datepicker-content-touch{display:block;max-height:80vh;box-shadow:var(--mat-datepicker-calendar-container-touch-elevation-shadow);border-radius:var(--mat-datepicker-calendar-container-touch-shape, var(--mat-app-corner-extra-large));position:relative;overflow:visible}.mat-datepicker-content-touch .mat-datepicker-content-container{min-height:312px;max-height:788px;min-width:250px;max-width:750px}.mat-datepicker-content-touch .mat-calendar{width:100%;height:auto}@media all and (orientation: landscape){.mat-datepicker-content-touch .mat-datepicker-content-container{width:64vh;height:80vh}}@media all and (orientation: portrait){.mat-datepicker-content-touch .mat-datepicker-content-container{width:80vw;height:100vw}.mat-datepicker-content-touch .mat-datepicker-content-container-with-actions{height:115vw}}"],
        encapsulation: 2,
        data: {
          animation: [matDatepickerAnimations.transformPanel, matDatepickerAnimations.fadeInCalendar]
        },
        changeDetection: 0
      });
    }
  }
  return MatDatepickerContent;
})();
/*#__PURE__*/(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
/** Base class for a datepicker. */
let MatDatepickerBase = /*#__PURE__*/(() => {
  class MatDatepickerBase {
    /** The date to open the calendar to initially. */
    get startAt() {
      // If an explicit startAt is set we start there, otherwise we start at whatever the currently
      // selected value is.
      return this._startAt || (this.datepickerInput ? this.datepickerInput.getStartValue() : null);
    }
    set startAt(value) {
      this._startAt = this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(value));
    }
    /**
     * Theme color of the datepicker's calendar. This API is supported in M2 themes only, it
     * has no effect in M3 themes.
     *
     * For information on applying color variants in M3, see
     * https://material.angular.io/guide/theming#using-component-color-variants.
     */
    get color() {
      return this._color || (this.datepickerInput ? this.datepickerInput.getThemePalette() : undefined);
    }
    set color(value) {
      this._color = value;
    }
    /** Whether the datepicker pop-up should be disabled. */
    get disabled() {
      return this._disabled === undefined && this.datepickerInput ? this.datepickerInput.disabled : !!this._disabled;
    }
    set disabled(value) {
      if (value !== this._disabled) {
        this._disabled = value;
        this.stateChanges.next(undefined);
      }
    }
    /** Classes to be passed to the date picker panel. */
    get panelClass() {
      return this._panelClass;
    }
    set panelClass(value) {
      this._panelClass = (0,_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_14__.coerceStringArray)(value);
    }
    /** Whether the calendar is open. */
    get opened() {
      return this._opened;
    }
    set opened(value) {
      if (value) {
        this.open();
      } else {
        this.close();
      }
    }
    /** The minimum selectable date. */
    _getMinDate() {
      return this.datepickerInput && this.datepickerInput.min;
    }
    /** The maximum selectable date. */
    _getMaxDate() {
      return this.datepickerInput && this.datepickerInput.max;
    }
    _getDateFilter() {
      return this.datepickerInput && this.datepickerInput.dateFilter;
    }
    constructor(_overlay,
    /**
     * @deprecated parameter is unused and will be removed
     * @breaking-change 19.0.0
     */
    _unusedNgZone, _viewContainerRef, scrollStrategy, _dateAdapter, _dir, _model) {
      this._overlay = _overlay;
      this._viewContainerRef = _viewContainerRef;
      this._dateAdapter = _dateAdapter;
      this._dir = _dir;
      this._model = _model;
      this._inputStateChanges = rxjs__WEBPACK_IMPORTED_MODULE_5__.Subscription.EMPTY;
      this._document = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(_angular_common__WEBPACK_IMPORTED_MODULE_3__.DOCUMENT);
      /** The view that the calendar should start in. */
      this.startView = 'month';
      /**
       * Whether the calendar UI is in touch mode. In touch mode the calendar opens in a dialog rather
       * than a dropdown and elements have more padding to allow for bigger touch targets.
       */
      this.touchUi = false;
      /** Preferred position of the datepicker in the X axis. */
      this.xPosition = 'start';
      /** Preferred position of the datepicker in the Y axis. */
      this.yPosition = 'below';
      /**
       * Whether to restore focus to the previously-focused element when the calendar is closed.
       * Note that automatic focus restoration is an accessibility feature and it is recommended that
       * you provide your own equivalent, if you decide to turn it off.
       */
      this.restoreFocus = true;
      /**
       * Emits selected year in multiyear view.
       * This doesn't imply a change on the selected date.
       */
      this.yearSelected = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
      /**
       * Emits selected month in year view.
       * This doesn't imply a change on the selected date.
       */
      this.monthSelected = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
      /**
       * Emits when the current view changes.
       */
      this.viewChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter(true);
      /** Emits when the datepicker has been opened. */
      this.openedStream = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
      /** Emits when the datepicker has been closed. */
      this.closedStream = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
      this._opened = false;
      /** The id for the datepicker calendar. */
      this.id = `mat-datepicker-${datepickerUid++}`;
      /** The element that was focused before the datepicker was opened. */
      this._focusedElementBeforeOpen = null;
      /** Unique class that will be added to the backdrop so that the test harnesses can look it up. */
      this._backdropHarnessClass = `${this.id}-backdrop`;
      /** Emits when the datepicker's state changes. */
      this.stateChanges = new rxjs__WEBPACK_IMPORTED_MODULE_1__.Subject();
      this._injector = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(_angular_core__WEBPACK_IMPORTED_MODULE_0__.Injector);
      this._changeDetectorRef = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(_angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef);
      if (!this._dateAdapter && (typeof ngDevMode === 'undefined' || ngDevMode)) {
        throw createMissingDateImplError('DateAdapter');
      }
      this._scrollStrategy = scrollStrategy;
      this._model.selectionChanged.subscribe(() => {
        this._changeDetectorRef.markForCheck();
      });
    }
    ngOnChanges(changes) {
      const positionChange = changes['xPosition'] || changes['yPosition'];
      if (positionChange && !positionChange.firstChange && this._overlayRef) {
        const positionStrategy = this._overlayRef.getConfig().positionStrategy;
        if (positionStrategy instanceof _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_13__.FlexibleConnectedPositionStrategy) {
          this._setConnectedPositions(positionStrategy);
          if (this.opened) {
            this._overlayRef.updatePosition();
          }
        }
      }
      this.stateChanges.next(undefined);
    }
    ngOnDestroy() {
      this._destroyOverlay();
      this.close();
      this._inputStateChanges.unsubscribe();
      this.stateChanges.complete();
    }
    /** Selects the given date */
    select(date) {
      this._model.add(date);
    }
    /** Emits the selected year in multiyear view */
    _selectYear(normalizedYear) {
      this.yearSelected.emit(normalizedYear);
    }
    /** Emits selected month in year view */
    _selectMonth(normalizedMonth) {
      this.monthSelected.emit(normalizedMonth);
    }
    /** Emits changed view */
    _viewChanged(view) {
      this.viewChanged.emit(view);
    }
    /**
     * Register an input with this datepicker.
     * @param input The datepicker input to register with this datepicker.
     * @returns Selection model that the input should hook itself up to.
     */
    registerInput(input) {
      if (this.datepickerInput && (typeof ngDevMode === 'undefined' || ngDevMode)) {
        throw Error('A MatDatepicker can only be associated with a single input.');
      }
      this._inputStateChanges.unsubscribe();
      this.datepickerInput = input;
      this._inputStateChanges = input.stateChanges.subscribe(() => this.stateChanges.next(undefined));
      return this._model;
    }
    /**
     * Registers a portal containing action buttons with the datepicker.
     * @param portal Portal to be registered.
     */
    registerActions(portal) {
      if (this._actionsPortal && (typeof ngDevMode === 'undefined' || ngDevMode)) {
        throw Error('A MatDatepicker can only be associated with a single actions row.');
      }
      this._actionsPortal = portal;
      this._componentRef?.instance._assignActions(portal, true);
    }
    /**
     * Removes a portal containing action buttons from the datepicker.
     * @param portal Portal to be removed.
     */
    removeActions(portal) {
      if (portal === this._actionsPortal) {
        this._actionsPortal = null;
        this._componentRef?.instance._assignActions(null, true);
      }
    }
    /** Open the calendar. */
    open() {
      // Skip reopening if there's an in-progress animation to avoid overlapping
      // sequences which can cause "changed after checked" errors. See #25837.
      if (this._opened || this.disabled || this._componentRef?.instance._isAnimating) {
        return;
      }
      if (!this.datepickerInput && (typeof ngDevMode === 'undefined' || ngDevMode)) {
        throw Error('Attempted to open an MatDatepicker with no associated input.');
      }
      this._focusedElementBeforeOpen = (0,_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_2__._getFocusedElementPierceShadowDom)();
      this._openOverlay();
      this._opened = true;
      this.openedStream.emit();
    }
    /** Close the calendar. */
    close() {
      // Skip reopening if there's an in-progress animation to avoid overlapping
      // sequences which can cause "changed after checked" errors. See #25837.
      if (!this._opened || this._componentRef?.instance._isAnimating) {
        return;
      }
      const canRestoreFocus = this.restoreFocus && this._focusedElementBeforeOpen && typeof this._focusedElementBeforeOpen.focus === 'function';
      const completeClose = () => {
        // The `_opened` could've been reset already if
        // we got two events in quick succession.
        if (this._opened) {
          this._opened = false;
          this.closedStream.emit();
        }
      };
      if (this._componentRef) {
        const {
          instance,
          location
        } = this._componentRef;
        instance._startExitAnimation();
        instance._animationDone.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_15__.take)(1)).subscribe(() => {
          const activeElement = this._document.activeElement;
          // Since we restore focus after the exit animation, we have to check that
          // the user didn't move focus themselves inside the `close` handler.
          if (canRestoreFocus && (!activeElement || activeElement === this._document.activeElement || location.nativeElement.contains(activeElement))) {
            this._focusedElementBeforeOpen.focus();
          }
          this._focusedElementBeforeOpen = null;
          this._destroyOverlay();
        });
      }
      if (canRestoreFocus) {
        // Because IE moves focus asynchronously, we can't count on it being restored before we've
        // marked the datepicker as closed. If the event fires out of sequence and the element that
        // we're refocusing opens the datepicker on focus, the user could be stuck with not being
        // able to close the calendar at all. We work around it by making the logic, that marks
        // the datepicker as closed, async as well.
        setTimeout(completeClose);
      } else {
        completeClose();
      }
    }
    /** Applies the current pending selection on the overlay to the model. */
    _applyPendingSelection() {
      this._componentRef?.instance?._applyPendingSelection();
    }
    /** Forwards relevant values from the datepicker to the datepicker content inside the overlay. */
    _forwardContentValues(instance) {
      instance.datepicker = this;
      instance.color = this.color;
      instance._dialogLabelId = this.datepickerInput.getOverlayLabelId();
      instance._assignActions(this._actionsPortal, false);
    }
    /** Opens the overlay with the calendar. */
    _openOverlay() {
      this._destroyOverlay();
      const isDialog = this.touchUi;
      const portal = new _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_10__.ComponentPortal(MatDatepickerContent, this._viewContainerRef);
      const overlayRef = this._overlayRef = this._overlay.create(new _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_13__.OverlayConfig({
        positionStrategy: isDialog ? this._getDialogStrategy() : this._getDropdownStrategy(),
        hasBackdrop: true,
        backdropClass: [isDialog ? 'cdk-overlay-dark-backdrop' : 'mat-overlay-transparent-backdrop', this._backdropHarnessClass],
        direction: this._dir,
        scrollStrategy: isDialog ? this._overlay.scrollStrategies.block() : this._scrollStrategy(),
        panelClass: `mat-datepicker-${isDialog ? 'dialog' : 'popup'}`
      }));
      this._getCloseStream(overlayRef).subscribe(event => {
        if (event) {
          event.preventDefault();
        }
        this.close();
      });
      // The `preventDefault` call happens inside the calendar as well, however focus moves into
      // it inside a timeout which can give browsers a chance to fire off a keyboard event in-between
      // that can scroll the page (see #24969). Always block default actions of arrow keys for the
      // entire overlay so the page doesn't get scrolled by accident.
      overlayRef.keydownEvents().subscribe(event => {
        const keyCode = event.keyCode;
        if (keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_7__.UP_ARROW || keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_7__.DOWN_ARROW || keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_7__.LEFT_ARROW || keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_7__.RIGHT_ARROW || keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_7__.PAGE_UP || keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_7__.PAGE_DOWN) {
          event.preventDefault();
        }
      });
      this._componentRef = overlayRef.attach(portal);
      this._forwardContentValues(this._componentRef.instance);
      // Update the position once the calendar has rendered. Only relevant in dropdown mode.
      if (!isDialog) {
        (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.afterNextRender)(() => {
          overlayRef.updatePosition();
        }, {
          injector: this._injector
        });
      }
    }
    /** Destroys the current overlay. */
    _destroyOverlay() {
      if (this._overlayRef) {
        this._overlayRef.dispose();
        this._overlayRef = this._componentRef = null;
      }
    }
    /** Gets a position strategy that will open the calendar as a dropdown. */
    _getDialogStrategy() {
      return this._overlay.position().global().centerHorizontally().centerVertically();
    }
    /** Gets a position strategy that will open the calendar as a dropdown. */
    _getDropdownStrategy() {
      const strategy = this._overlay.position().flexibleConnectedTo(this.datepickerInput.getConnectedOverlayOrigin()).withTransformOriginOn('.mat-datepicker-content').withFlexibleDimensions(false).withViewportMargin(8).withLockedPosition();
      return this._setConnectedPositions(strategy);
    }
    /** Sets the positions of the datepicker in dropdown mode based on the current configuration. */
    _setConnectedPositions(strategy) {
      const primaryX = this.xPosition === 'end' ? 'end' : 'start';
      const secondaryX = primaryX === 'start' ? 'end' : 'start';
      const primaryY = this.yPosition === 'above' ? 'bottom' : 'top';
      const secondaryY = primaryY === 'top' ? 'bottom' : 'top';
      return strategy.withPositions([{
        originX: primaryX,
        originY: secondaryY,
        overlayX: primaryX,
        overlayY: primaryY
      }, {
        originX: primaryX,
        originY: primaryY,
        overlayX: primaryX,
        overlayY: secondaryY
      }, {
        originX: secondaryX,
        originY: secondaryY,
        overlayX: secondaryX,
        overlayY: primaryY
      }, {
        originX: secondaryX,
        originY: primaryY,
        overlayX: secondaryX,
        overlayY: secondaryY
      }]);
    }
    /** Gets an observable that will emit when the overlay is supposed to be closed. */
    _getCloseStream(overlayRef) {
      const ctrlShiftMetaModifiers = ['ctrlKey', 'shiftKey', 'metaKey'];
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_16__.merge)(overlayRef.backdropClick(), overlayRef.detachments(), overlayRef.keydownEvents().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_17__.filter)(event => {
        // Closing on alt + up is only valid when there's an input associated with the datepicker.
        return event.keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_7__.ESCAPE && !(0,_angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_7__.hasModifierKey)(event) || this.datepickerInput && (0,_angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_7__.hasModifierKey)(event, 'altKey') && event.keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_7__.UP_ARROW && ctrlShiftMetaModifiers.every(modifier => !(0,_angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_7__.hasModifierKey)(event, modifier));
      })));
    }
    static {
      this.ɵfac = function MatDatepickerBase_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || MatDatepickerBase)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_13__.Overlay), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewContainerRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](MAT_DATEPICKER_SCROLL_STRATEGY), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_core__WEBPACK_IMPORTED_MODULE_4__.DateAdapter, 8), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_8__.Directionality, 8), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](MatDateSelectionModel));
      };
    }
    static {
      this.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
        type: MatDatepickerBase,
        inputs: {
          calendarHeaderComponent: "calendarHeaderComponent",
          startAt: "startAt",
          startView: "startView",
          color: "color",
          touchUi: [2, "touchUi", "touchUi", _angular_core__WEBPACK_IMPORTED_MODULE_0__.booleanAttribute],
          disabled: [2, "disabled", "disabled", _angular_core__WEBPACK_IMPORTED_MODULE_0__.booleanAttribute],
          xPosition: "xPosition",
          yPosition: "yPosition",
          restoreFocus: [2, "restoreFocus", "restoreFocus", _angular_core__WEBPACK_IMPORTED_MODULE_0__.booleanAttribute],
          dateClass: "dateClass",
          panelClass: "panelClass",
          opened: [2, "opened", "opened", _angular_core__WEBPACK_IMPORTED_MODULE_0__.booleanAttribute]
        },
        outputs: {
          yearSelected: "yearSelected",
          monthSelected: "monthSelected",
          viewChanged: "viewChanged",
          openedStream: "opened",
          closedStream: "closed"
        },
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInputTransformsFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]]
      });
    }
  }
  return MatDatepickerBase;
})();
/*#__PURE__*/(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();

// TODO(mmalerba): We use a component instead of a directive here so the user can use implicit
// template reference variables (e.g. #d vs #d="matDatepicker"). We can change this to a directive
// if angular adds support for `exportAs: '$implicit'` on directives.
/** Component responsible for managing the datepicker popup/dialog. */
let MatDatepicker = /*#__PURE__*/(() => {
  class MatDatepicker extends MatDatepickerBase {
    static {
      this.ɵfac = /* @__PURE__ */(() => {
        let ɵMatDatepicker_BaseFactory;
        return function MatDatepicker_Factory(__ngFactoryType__) {
          return (ɵMatDatepicker_BaseFactory || (ɵMatDatepicker_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetInheritedFactory"](MatDatepicker)))(__ngFactoryType__ || MatDatepicker);
        };
      })();
    }
    static {
      this.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: MatDatepicker,
        selectors: [["mat-datepicker"]],
        exportAs: ["matDatepicker"],
        standalone: true,
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([MAT_SINGLE_DATE_SELECTION_MODEL_PROVIDER, {
          provide: MatDatepickerBase,
          useExisting: MatDatepicker
        }]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵStandaloneFeature"]],
        decls: 0,
        vars: 0,
        template: function MatDatepicker_Template(rf, ctx) {},
        encapsulation: 2,
        changeDetection: 0
      });
    }
  }
  return MatDatepicker;
})();
/*#__PURE__*/(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();

/**
 * An event used for datepicker input and change events. We don't always have access to a native
 * input or change event because the event may have been triggered by the user clicking on the
 * calendar popup. For consistency, we always use MatDatepickerInputEvent instead.
 */
class MatDatepickerInputEvent {
  constructor(/** Reference to the datepicker input component that emitted the event. */
  target, /** Reference to the native input element associated with the datepicker input. */
  targetElement) {
    this.target = target;
    this.targetElement = targetElement;
    this.value = this.target.value;
  }
}
/** Base class for datepicker inputs. */
let MatDatepickerInputBase = /*#__PURE__*/(() => {
  class MatDatepickerInputBase {
    /** The value of the input. */
    get value() {
      return this._model ? this._getValueFromModel(this._model.selection) : this._pendingValue;
    }
    set value(value) {
      this._assignValueProgrammatically(value);
    }
    /** Whether the datepicker-input is disabled. */
    get disabled() {
      return !!this._disabled || this._parentDisabled();
    }
    set disabled(value) {
      const newValue = value;
      const element = this._elementRef.nativeElement;
      if (this._disabled !== newValue) {
        this._disabled = newValue;
        this.stateChanges.next(undefined);
      }
      // We need to null check the `blur` method, because it's undefined during SSR.
      // In Ivy static bindings are invoked earlier, before the element is attached to the DOM.
      // This can cause an error to be thrown in some browsers (IE/Edge) which assert that the
      // element has been inserted.
      if (newValue && this._isInitialized && element.blur) {
        // Normally, native input elements automatically blur if they turn disabled. This behavior
        // is problematic, because it would mean that it triggers another change detection cycle,
        // which then causes a changed after checked error if the input element was focused before.
        element.blur();
      }
    }
    /** Gets the base validator functions. */
    _getValidators() {
      return [this._parseValidator, this._minValidator, this._maxValidator, this._filterValidator];
    }
    /** Registers a date selection model with the input. */
    _registerModel(model) {
      this._model = model;
      this._valueChangesSubscription.unsubscribe();
      if (this._pendingValue) {
        this._assignValue(this._pendingValue);
      }
      this._valueChangesSubscription = this._model.selectionChanged.subscribe(event => {
        if (this._shouldHandleChangeEvent(event)) {
          const value = this._getValueFromModel(event.selection);
          this._lastValueValid = this._isValidValue(value);
          this._cvaOnChange(value);
          this._onTouched();
          this._formatValue(value);
          this.dateInput.emit(new MatDatepickerInputEvent(this, this._elementRef.nativeElement));
          this.dateChange.emit(new MatDatepickerInputEvent(this, this._elementRef.nativeElement));
        }
      });
    }
    constructor(_elementRef, _dateAdapter, _dateFormats) {
      this._elementRef = _elementRef;
      this._dateAdapter = _dateAdapter;
      this._dateFormats = _dateFormats;
      /** Emits when a `change` event is fired on this `<input>`. */
      this.dateChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
      /** Emits when an `input` event is fired on this `<input>`. */
      this.dateInput = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
      /** Emits when the internal state has changed */
      this.stateChanges = new rxjs__WEBPACK_IMPORTED_MODULE_1__.Subject();
      this._onTouched = () => {};
      this._validatorOnChange = () => {};
      this._cvaOnChange = () => {};
      this._valueChangesSubscription = rxjs__WEBPACK_IMPORTED_MODULE_5__.Subscription.EMPTY;
      this._localeSubscription = rxjs__WEBPACK_IMPORTED_MODULE_5__.Subscription.EMPTY;
      /** The form control validator for whether the input parses. */
      this._parseValidator = () => {
        return this._lastValueValid ? null : {
          'matDatepickerParse': {
            'text': this._elementRef.nativeElement.value
          }
        };
      };
      /** The form control validator for the date filter. */
      this._filterValidator = control => {
        const controlValue = this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(control.value));
        return !controlValue || this._matchesFilter(controlValue) ? null : {
          'matDatepickerFilter': true
        };
      };
      /** The form control validator for the min date. */
      this._minValidator = control => {
        const controlValue = this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(control.value));
        const min = this._getMinDate();
        return !min || !controlValue || this._dateAdapter.compareDate(min, controlValue) <= 0 ? null : {
          'matDatepickerMin': {
            'min': min,
            'actual': controlValue
          }
        };
      };
      /** The form control validator for the max date. */
      this._maxValidator = control => {
        const controlValue = this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(control.value));
        const max = this._getMaxDate();
        return !max || !controlValue || this._dateAdapter.compareDate(max, controlValue) >= 0 ? null : {
          'matDatepickerMax': {
            'max': max,
            'actual': controlValue
          }
        };
      };
      /** Whether the last value set on the input was valid. */
      this._lastValueValid = false;
      if (typeof ngDevMode === 'undefined' || ngDevMode) {
        if (!this._dateAdapter) {
          throw createMissingDateImplError('DateAdapter');
        }
        if (!this._dateFormats) {
          throw createMissingDateImplError('MAT_DATE_FORMATS');
        }
      }
      // Update the displayed date when the locale changes.
      this._localeSubscription = _dateAdapter.localeChanges.subscribe(() => {
        this._assignValueProgrammatically(this.value);
      });
    }
    ngAfterViewInit() {
      this._isInitialized = true;
    }
    ngOnChanges(changes) {
      if (dateInputsHaveChanged(changes, this._dateAdapter)) {
        this.stateChanges.next(undefined);
      }
    }
    ngOnDestroy() {
      this._valueChangesSubscription.unsubscribe();
      this._localeSubscription.unsubscribe();
      this.stateChanges.complete();
    }
    /** @docs-private */
    registerOnValidatorChange(fn) {
      this._validatorOnChange = fn;
    }
    /** @docs-private */
    validate(c) {
      return this._validator ? this._validator(c) : null;
    }
    // Implemented as part of ControlValueAccessor.
    writeValue(value) {
      this._assignValueProgrammatically(value);
    }
    // Implemented as part of ControlValueAccessor.
    registerOnChange(fn) {
      this._cvaOnChange = fn;
    }
    // Implemented as part of ControlValueAccessor.
    registerOnTouched(fn) {
      this._onTouched = fn;
    }
    // Implemented as part of ControlValueAccessor.
    setDisabledState(isDisabled) {
      this.disabled = isDisabled;
    }
    _onKeydown(event) {
      const ctrlShiftMetaModifiers = ['ctrlKey', 'shiftKey', 'metaKey'];
      const isAltDownArrow = (0,_angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_7__.hasModifierKey)(event, 'altKey') && event.keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_7__.DOWN_ARROW && ctrlShiftMetaModifiers.every(modifier => !(0,_angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_7__.hasModifierKey)(event, modifier));
      if (isAltDownArrow && !this._elementRef.nativeElement.readOnly) {
        this._openPopup();
        event.preventDefault();
      }
    }
    _onInput(value) {
      const lastValueWasValid = this._lastValueValid;
      let date = this._dateAdapter.parse(value, this._dateFormats.parse.dateInput);
      this._lastValueValid = this._isValidValue(date);
      date = this._dateAdapter.getValidDateOrNull(date);
      const hasChanged = !this._dateAdapter.sameDate(date, this.value);
      // We need to fire the CVA change event for all
      // nulls, otherwise the validators won't run.
      if (!date || hasChanged) {
        this._cvaOnChange(date);
      } else {
        // Call the CVA change handler for invalid values
        // since this is what marks the control as dirty.
        if (value && !this.value) {
          this._cvaOnChange(date);
        }
        if (lastValueWasValid !== this._lastValueValid) {
          this._validatorOnChange();
        }
      }
      if (hasChanged) {
        this._assignValue(date);
        this.dateInput.emit(new MatDatepickerInputEvent(this, this._elementRef.nativeElement));
      }
    }
    _onChange() {
      this.dateChange.emit(new MatDatepickerInputEvent(this, this._elementRef.nativeElement));
    }
    /** Handles blur events on the input. */
    _onBlur() {
      // Reformat the input only if we have a valid value.
      if (this.value) {
        this._formatValue(this.value);
      }
      this._onTouched();
    }
    /** Formats a value and sets it on the input element. */
    _formatValue(value) {
      this._elementRef.nativeElement.value = value != null ? this._dateAdapter.format(value, this._dateFormats.display.dateInput) : '';
    }
    /** Assigns a value to the model. */
    _assignValue(value) {
      // We may get some incoming values before the model was
      // assigned. Save the value so that we can assign it later.
      if (this._model) {
        this._assignValueToModel(value);
        this._pendingValue = null;
      } else {
        this._pendingValue = value;
      }
    }
    /** Whether a value is considered valid. */
    _isValidValue(value) {
      return !value || this._dateAdapter.isValid(value);
    }
    /**
     * Checks whether a parent control is disabled. This is in place so that it can be overridden
     * by inputs extending this one which can be placed inside of a group that can be disabled.
     */
    _parentDisabled() {
      return false;
    }
    /** Programmatically assigns a value to the input. */
    _assignValueProgrammatically(value) {
      value = this._dateAdapter.deserialize(value);
      this._lastValueValid = this._isValidValue(value);
      value = this._dateAdapter.getValidDateOrNull(value);
      this._assignValue(value);
      this._formatValue(value);
    }
    /** Gets whether a value matches the current date filter. */
    _matchesFilter(value) {
      const filter = this._getDateFilter();
      return !filter || filter(value);
    }
    static {
      this.ɵfac = function MatDatepickerInputBase_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || MatDatepickerInputBase)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_core__WEBPACK_IMPORTED_MODULE_4__.DateAdapter, 8), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_core__WEBPACK_IMPORTED_MODULE_4__.MAT_DATE_FORMATS, 8));
      };
    }
    static {
      this.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
        type: MatDatepickerInputBase,
        inputs: {
          value: "value",
          disabled: [2, "disabled", "disabled", _angular_core__WEBPACK_IMPORTED_MODULE_0__.booleanAttribute]
        },
        outputs: {
          dateChange: "dateChange",
          dateInput: "dateInput"
        },
        standalone: true,
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInputTransformsFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]]
      });
    }
  }
  return MatDatepickerInputBase;
})();
/*#__PURE__*/(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
/**
 * Checks whether the `SimpleChanges` object from an `ngOnChanges`
 * callback has any changes, accounting for date objects.
 */
function dateInputsHaveChanged(changes, adapter) {
  const keys = Object.keys(changes);
  for (let key of keys) {
    const {
      previousValue,
      currentValue
    } = changes[key];
    if (adapter.isDateInstance(previousValue) && adapter.isDateInstance(currentValue)) {
      if (!adapter.sameDate(previousValue, currentValue)) {
        return true;
      }
    } else {
      return true;
    }
  }
  return false;
}

/** @docs-private */
const MAT_DATEPICKER_VALUE_ACCESSOR = {
  provide: _angular_forms__WEBPACK_IMPORTED_MODULE_18__.NG_VALUE_ACCESSOR,
  useExisting: /*#__PURE__*/(0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(() => MatDatepickerInput),
  multi: true
};
/** @docs-private */
const MAT_DATEPICKER_VALIDATORS = {
  provide: _angular_forms__WEBPACK_IMPORTED_MODULE_18__.NG_VALIDATORS,
  useExisting: /*#__PURE__*/(0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(() => MatDatepickerInput),
  multi: true
};
/** Directive used to connect an input to a MatDatepicker. */
let MatDatepickerInput = /*#__PURE__*/(() => {
  class MatDatepickerInput extends MatDatepickerInputBase {
    /** The datepicker that this input is associated with. */
    set matDatepicker(datepicker) {
      if (datepicker) {
        this._datepicker = datepicker;
        this._ariaOwns.set(datepicker.opened ? datepicker.id : null);
        this._closedSubscription = datepicker.closedStream.subscribe(() => {
          this._onTouched();
          this._ariaOwns.set(null);
        });
        this._openedSubscription = datepicker.openedStream.subscribe(() => {
          this._ariaOwns.set(datepicker.id);
        });
        this._registerModel(datepicker.registerInput(this));
      }
    }
    /** The minimum valid date. */
    get min() {
      return this._min;
    }
    set min(value) {
      const validValue = this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(value));
      if (!this._dateAdapter.sameDate(validValue, this._min)) {
        this._min = validValue;
        this._validatorOnChange();
      }
    }
    /** The maximum valid date. */
    get max() {
      return this._max;
    }
    set max(value) {
      const validValue = this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(value));
      if (!this._dateAdapter.sameDate(validValue, this._max)) {
        this._max = validValue;
        this._validatorOnChange();
      }
    }
    /** Function that can be used to filter out dates within the datepicker. */
    get dateFilter() {
      return this._dateFilter;
    }
    set dateFilter(value) {
      const wasMatchingValue = this._matchesFilter(this.value);
      this._dateFilter = value;
      if (this._matchesFilter(this.value) !== wasMatchingValue) {
        this._validatorOnChange();
      }
    }
    constructor(elementRef, dateAdapter, dateFormats, _formField) {
      super(elementRef, dateAdapter, dateFormats);
      this._formField = _formField;
      this._closedSubscription = rxjs__WEBPACK_IMPORTED_MODULE_5__.Subscription.EMPTY;
      this._openedSubscription = rxjs__WEBPACK_IMPORTED_MODULE_5__.Subscription.EMPTY;
      /** The id of the panel owned by this input. */
      this._ariaOwns = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.signal)(null);
      this._validator = _angular_forms__WEBPACK_IMPORTED_MODULE_18__.Validators.compose(super._getValidators());
    }
    /**
     * Gets the element that the datepicker popup should be connected to.
     * @return The element to connect the popup to.
     */
    getConnectedOverlayOrigin() {
      return this._formField ? this._formField.getConnectedOverlayOrigin() : this._elementRef;
    }
    /** Gets the ID of an element that should be used a description for the calendar overlay. */
    getOverlayLabelId() {
      if (this._formField) {
        return this._formField.getLabelId();
      }
      return this._elementRef.nativeElement.getAttribute('aria-labelledby');
    }
    /** Returns the palette used by the input's form field, if any. */
    getThemePalette() {
      return this._formField ? this._formField.color : undefined;
    }
    /** Gets the value at which the calendar should start. */
    getStartValue() {
      return this.value;
    }
    ngOnDestroy() {
      super.ngOnDestroy();
      this._closedSubscription.unsubscribe();
      this._openedSubscription.unsubscribe();
    }
    /** Opens the associated datepicker. */
    _openPopup() {
      if (this._datepicker) {
        this._datepicker.open();
      }
    }
    _getValueFromModel(modelValue) {
      return modelValue;
    }
    _assignValueToModel(value) {
      if (this._model) {
        this._model.updateSelection(value, this);
      }
    }
    /** Gets the input's minimum date. */
    _getMinDate() {
      return this._min;
    }
    /** Gets the input's maximum date. */
    _getMaxDate() {
      return this._max;
    }
    /** Gets the input's date filtering function. */
    _getDateFilter() {
      return this._dateFilter;
    }
    _shouldHandleChangeEvent(event) {
      return event.source !== this;
    }
    static {
      this.ɵfac = function MatDatepickerInput_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || MatDatepickerInput)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_core__WEBPACK_IMPORTED_MODULE_4__.DateAdapter, 8), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_core__WEBPACK_IMPORTED_MODULE_4__.MAT_DATE_FORMATS, 8), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_form_field__WEBPACK_IMPORTED_MODULE_19__.MAT_FORM_FIELD, 8));
      };
    }
    static {
      this.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
        type: MatDatepickerInput,
        selectors: [["input", "matDatepicker", ""]],
        hostAttrs: [1, "mat-datepicker-input"],
        hostVars: 6,
        hostBindings: function MatDatepickerInput_HostBindings(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("input", function MatDatepickerInput_input_HostBindingHandler($event) {
              return ctx._onInput($event.target.value);
            })("change", function MatDatepickerInput_change_HostBindingHandler() {
              return ctx._onChange();
            })("blur", function MatDatepickerInput_blur_HostBindingHandler() {
              return ctx._onBlur();
            })("keydown", function MatDatepickerInput_keydown_HostBindingHandler($event) {
              return ctx._onKeydown($event);
            });
          }
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵhostProperty"]("disabled", ctx.disabled);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-haspopup", ctx._datepicker ? "dialog" : null)("aria-owns", ctx._ariaOwns())("min", ctx.min ? ctx._dateAdapter.toIso8601(ctx.min) : null)("max", ctx.max ? ctx._dateAdapter.toIso8601(ctx.max) : null)("data-mat-calendar", ctx._datepicker ? ctx._datepicker.id : null);
          }
        },
        inputs: {
          matDatepicker: "matDatepicker",
          min: "min",
          max: "max",
          dateFilter: [0, "matDatepickerFilter", "dateFilter"]
        },
        exportAs: ["matDatepickerInput"],
        standalone: true,
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([MAT_DATEPICKER_VALUE_ACCESSOR, MAT_DATEPICKER_VALIDATORS, {
          provide: _angular_material_input__WEBPACK_IMPORTED_MODULE_20__.MAT_INPUT_VALUE_ACCESSOR,
          useExisting: MatDatepickerInput
        }]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]]
      });
    }
  }
  return MatDatepickerInput;
})();
/*#__PURE__*/(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();

/** Can be used to override the icon of a `matDatepickerToggle`. */
let MatDatepickerToggleIcon = /*#__PURE__*/(() => {
  class MatDatepickerToggleIcon {
    static {
      this.ɵfac = function MatDatepickerToggleIcon_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || MatDatepickerToggleIcon)();
      };
    }
    static {
      this.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
        type: MatDatepickerToggleIcon,
        selectors: [["", "matDatepickerToggleIcon", ""]],
        standalone: true
      });
    }
  }
  return MatDatepickerToggleIcon;
})();
/*#__PURE__*/(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
let MatDatepickerToggle = /*#__PURE__*/(() => {
  class MatDatepickerToggle {
    /** Whether the toggle button is disabled. */
    get disabled() {
      if (this._disabled === undefined && this.datepicker) {
        return this.datepicker.disabled;
      }
      return !!this._disabled;
    }
    set disabled(value) {
      this._disabled = value;
    }
    constructor(_intl, _changeDetectorRef, defaultTabIndex) {
      this._intl = _intl;
      this._changeDetectorRef = _changeDetectorRef;
      this._stateChanges = rxjs__WEBPACK_IMPORTED_MODULE_5__.Subscription.EMPTY;
      const parsedTabIndex = Number(defaultTabIndex);
      this.tabIndex = parsedTabIndex || parsedTabIndex === 0 ? parsedTabIndex : null;
    }
    ngOnChanges(changes) {
      if (changes['datepicker']) {
        this._watchStateChanges();
      }
    }
    ngOnDestroy() {
      this._stateChanges.unsubscribe();
    }
    ngAfterContentInit() {
      this._watchStateChanges();
    }
    _open(event) {
      if (this.datepicker && !this.disabled) {
        this.datepicker.open();
        event.stopPropagation();
      }
    }
    _watchStateChanges() {
      const datepickerStateChanged = this.datepicker ? this.datepicker.stateChanges : (0,rxjs__WEBPACK_IMPORTED_MODULE_21__.of)();
      const inputStateChanged = this.datepicker && this.datepicker.datepickerInput ? this.datepicker.datepickerInput.stateChanges : (0,rxjs__WEBPACK_IMPORTED_MODULE_21__.of)();
      const datepickerToggled = this.datepicker ? (0,rxjs__WEBPACK_IMPORTED_MODULE_16__.merge)(this.datepicker.openedStream, this.datepicker.closedStream) : (0,rxjs__WEBPACK_IMPORTED_MODULE_21__.of)();
      this._stateChanges.unsubscribe();
      this._stateChanges = (0,rxjs__WEBPACK_IMPORTED_MODULE_16__.merge)(this._intl.changes, datepickerStateChanged, inputStateChanged, datepickerToggled).subscribe(() => this._changeDetectorRef.markForCheck());
    }
    static {
      this.ɵfac = function MatDatepickerToggle_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || MatDatepickerToggle)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](MatDatepickerIntl), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinjectAttribute"]('tabindex'));
      };
    }
    static {
      this.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: MatDatepickerToggle,
        selectors: [["mat-datepicker-toggle"]],
        contentQueries: function MatDatepickerToggle_ContentQueries(rf, ctx, dirIndex) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, MatDatepickerToggleIcon, 5);
          }
          if (rf & 2) {
            let _t;
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx._customIcon = _t.first);
          }
        },
        viewQuery: function MatDatepickerToggle_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c2, 5);
          }
          if (rf & 2) {
            let _t;
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx._button = _t.first);
          }
        },
        hostAttrs: [1, "mat-datepicker-toggle"],
        hostVars: 8,
        hostBindings: function MatDatepickerToggle_HostBindings(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MatDatepickerToggle_click_HostBindingHandler($event) {
              return ctx._open($event);
            });
          }
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("tabindex", null)("data-mat-calendar", ctx.datepicker ? ctx.datepicker.id : null);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("mat-datepicker-toggle-active", ctx.datepicker && ctx.datepicker.opened)("mat-accent", ctx.datepicker && ctx.datepicker.color === "accent")("mat-warn", ctx.datepicker && ctx.datepicker.color === "warn");
          }
        },
        inputs: {
          datepicker: [0, "for", "datepicker"],
          tabIndex: "tabIndex",
          ariaLabel: [0, "aria-label", "ariaLabel"],
          disabled: [2, "disabled", "disabled", _angular_core__WEBPACK_IMPORTED_MODULE_0__.booleanAttribute],
          disableRipple: "disableRipple"
        },
        exportAs: ["matDatepickerToggle"],
        standalone: true,
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInputTransformsFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵStandaloneFeature"]],
        ngContentSelectors: _c4,
        decls: 4,
        vars: 6,
        consts: [["button", ""], ["mat-icon-button", "", "type", "button", 3, "disabled", "disableRipple"], ["viewBox", "0 0 24 24", "width", "24px", "height", "24px", "fill", "currentColor", "focusable", "false", "aria-hidden", "true", 1, "mat-datepicker-toggle-default-icon"], ["d", "M19 3h-1V1h-2v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V8h14v11zM7 10h5v5H7z"]],
        template: function MatDatepickerToggle_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"](_c3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 1, 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, MatDatepickerToggle_Conditional_2_Template, 2, 0, ":svg:svg", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.disabled)("disableRipple", ctx.disableRipple);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-haspopup", ctx.datepicker ? "dialog" : null)("aria-label", ctx.ariaLabel || ctx._intl.openCalendarLabel)("tabindex", ctx.disabled ? -1 : ctx.tabIndex);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵconditional"](!ctx._customIcon ? 2 : -1);
          }
        },
        dependencies: [_angular_material_button__WEBPACK_IMPORTED_MODULE_9__.MatIconButton],
        styles: [".mat-datepicker-toggle{pointer-events:auto;color:var(--mat-datepicker-toggle-icon-color, var(--mat-app-on-surface-variant))}.mat-datepicker-toggle-active{color:var(--mat-datepicker-toggle-active-state-icon-color, var(--mat-app-on-surface-variant))}.cdk-high-contrast-active .mat-datepicker-toggle-default-icon{color:CanvasText}"],
        encapsulation: 2,
        changeDetection: 0
      });
    }
  }
  return MatDatepickerToggle;
})();
/*#__PURE__*/(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();

// This file contains the `_computeAriaAccessibleName` function, which computes what the *expected*
// ARIA accessible name would be for a given element. Implements a subset of ARIA specification
// [Accessible Name and Description Computation 1.2](https://www.w3.org/TR/accname-1.2/).
//
// Specification accname-1.2 can be summarized by returning the result of the first method
// available.
//
//  1. `aria-labelledby` attribute
//     ```
//       <!-- example using aria-labelledby-->
//       <label id='label-id'>Start Date</label>
//       <input aria-labelledby='label-id'/>
//     ```
//  2. `aria-label` attribute (e.g. `<input aria-label="Departure"/>`)
//  3. Label with `for`/`id`
//     ```
//       <!-- example using for/id -->
//       <label for="current-node">Label</label>
//       <input id="current-node"/>
//     ```
//  4. `placeholder` attribute (e.g. `<input placeholder="06/03/1990"/>`)
//  5. `title` attribute (e.g. `<input title="Check-In"/>`)
//  6. text content
//     ```
//       <!-- example using text content -->
//       <label for="current-node"><span>Departure</span> Date</label>
//       <input id="current-node"/>
//     ```
/**
 * Computes the *expected* ARIA accessible name for argument element based on [accname-1.2
 * specification](https://www.w3.org/TR/accname-1.2/). Implements a subset of accname-1.2,
 * and should only be used for the Datepicker's specific use case.
 *
 * Intended use:
 * This is not a general use implementation. Only implements the parts of accname-1.2 that are
 * required for the Datepicker's specific use case. This function is not intended for any other
 * use.
 *
 * Limitations:
 *  - Only covers the needs of `matStartDate` and `matEndDate`. Does not support other use cases.
 *  - See NOTES's in implementation for specific details on what parts of the accname-1.2
 *  specification are not implemented.
 *
 *  @param element {HTMLInputElement} native &lt;input/&gt; element of `matStartDate` or
 *  `matEndDate` component. Corresponds to the 'Root Element' from accname-1.2
 *
 *  @return expected ARIA accessible name of argument &lt;input/&gt;
 */
function _computeAriaAccessibleName(element) {
  return _computeAriaAccessibleNameInternal(element, true);
}
/**
 * Determine if argument node is an Element based on `nodeType` property. This function is safe to
 * use with server-side rendering.
 */
function ssrSafeIsElement(node) {
  return node.nodeType === Node.ELEMENT_NODE;
}
/**
 * Determine if argument node is an HTMLInputElement based on `nodeName` property. This funciton is
 * safe to use with server-side rendering.
 */
function ssrSafeIsHTMLInputElement(node) {
  return node.nodeName === 'INPUT';
}
/**
 * Determine if argument node is an HTMLTextAreaElement based on `nodeName` property. This
 * funciton is safe to use with server-side rendering.
 */
function ssrSafeIsHTMLTextAreaElement(node) {
  return node.nodeName === 'TEXTAREA';
}
/**
 * Calculate the expected ARIA accessible name for given DOM Node. Given DOM Node may be either the
 * "Root node" passed to `_computeAriaAccessibleName` or "Current node" as result of recursion.
 *
 * @return the accessible name of argument DOM Node
 *
 * @param currentNode node to determine accessible name of
 * @param isDirectlyReferenced true if `currentNode` is the root node to calculate ARIA accessible
 * name of. False if it is a result of recursion.
 */
function _computeAriaAccessibleNameInternal(currentNode, isDirectlyReferenced) {
  // NOTE: this differs from accname-1.2 specification.
  //  - Does not implement Step 1. of accname-1.2: '''If `currentNode`'s role prohibits naming,
  //    return the empty string ("")'''.
  //  - Does not implement Step 2.A. of accname-1.2: '''if current node is hidden and not directly
  //    referenced by aria-labelledby... return the empty string.'''
  // acc-name-1.2 Step 2.B.: aria-labelledby
  if (ssrSafeIsElement(currentNode) && isDirectlyReferenced) {
    const labelledbyIds = currentNode.getAttribute?.('aria-labelledby')?.split(/\s+/g) || [];
    const validIdRefs = labelledbyIds.reduce((validIds, id) => {
      const elem = document.getElementById(id);
      if (elem) {
        validIds.push(elem);
      }
      return validIds;
    }, []);
    if (validIdRefs.length) {
      return validIdRefs.map(idRef => {
        return _computeAriaAccessibleNameInternal(idRef, false);
      }).join(' ');
    }
  }
  // acc-name-1.2 Step 2.C.: aria-label
  if (ssrSafeIsElement(currentNode)) {
    const ariaLabel = currentNode.getAttribute('aria-label')?.trim();
    if (ariaLabel) {
      return ariaLabel;
    }
  }
  // acc-name-1.2 Step 2.D. attribute or element that defines a text alternative
  //
  // NOTE: this differs from accname-1.2 specification.
  // Only implements Step 2.D. for `<label>`,`<input/>`, and `<textarea/>` element. Does not
  // implement other elements that have an attribute or element that defines a text alternative.
  if (ssrSafeIsHTMLInputElement(currentNode) || ssrSafeIsHTMLTextAreaElement(currentNode)) {
    // use label with a `for` attribute referencing the current node
    if (currentNode.labels?.length) {
      return Array.from(currentNode.labels).map(x => _computeAriaAccessibleNameInternal(x, false)).join(' ');
    }
    // use placeholder if available
    const placeholder = currentNode.getAttribute('placeholder')?.trim();
    if (placeholder) {
      return placeholder;
    }
    // use title if available
    const title = currentNode.getAttribute('title')?.trim();
    if (title) {
      return title;
    }
  }
  // NOTE: this differs from accname-1.2 specification.
  //  - does not implement acc-name-1.2 Step 2.E.: '''if the current node is a control embedded
  //     within the label... then include the embedded control as part of the text alternative in
  //     the following manner...'''. Step 2E applies to embedded controls such as textbox, listbox,
  //     range, etc.
  //  - does not implement acc-name-1.2 step 2.F.: check that '''role allows name from content''',
  //    which applies to `currentNode` and its children.
  //  - does not implement acc-name-1.2 Step 2.F.ii.: '''Check for CSS generated textual content'''
  //    (e.g. :before and :after).
  //  - does not implement acc-name-1.2 Step 2.I.: '''if the current node has a Tooltip attribute,
  //    return its value'''
  // Return text content with whitespace collapsed into a single space character. Accomplish
  // acc-name-1.2 steps 2F, 2G, and 2H.
  return (currentNode.textContent || '').replace(/\s+/g, ' ').trim();
}

/**
 * Used to provide the date range input wrapper component
 * to the parts without circular dependencies.
 */
const MAT_DATE_RANGE_INPUT_PARENT = /*#__PURE__*/new _angular_core__WEBPACK_IMPORTED_MODULE_0__.InjectionToken('MAT_DATE_RANGE_INPUT_PARENT');
/**
 * Base class for the individual inputs that can be projected inside a `mat-date-range-input`.
 */
let MatDateRangeInputPartBase = /*#__PURE__*/(() => {
  class MatDateRangeInputPartBase extends MatDatepickerInputBase {
    /** Object used to control when error messages are shown. */
    get errorStateMatcher() {
      return this._errorStateTracker.matcher;
    }
    set errorStateMatcher(value) {
      this._errorStateTracker.matcher = value;
    }
    /** Whether the input is in an error state. */
    get errorState() {
      return this._errorStateTracker.errorState;
    }
    set errorState(value) {
      this._errorStateTracker.errorState = value;
    }
    constructor(_rangeInput, _elementRef, _defaultErrorStateMatcher, _injector, _parentForm, _parentFormGroup, dateAdapter, dateFormats) {
      super(_elementRef, dateAdapter, dateFormats);
      this._rangeInput = _rangeInput;
      this._elementRef = _elementRef;
      this._defaultErrorStateMatcher = _defaultErrorStateMatcher;
      this._injector = _injector;
      this._parentForm = _parentForm;
      this._parentFormGroup = _parentFormGroup;
      this._dir = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_8__.Directionality, {
        optional: true
      });
      this._errorStateTracker = new _angular_material_core__WEBPACK_IMPORTED_MODULE_4__._ErrorStateTracker(this._defaultErrorStateMatcher, null, this._parentFormGroup, this._parentForm, this.stateChanges);
    }
    ngOnInit() {
      // We need the date input to provide itself as a `ControlValueAccessor` and a `Validator`, while
      // injecting its `NgControl` so that the error state is handled correctly. This introduces a
      // circular dependency, because both `ControlValueAccessor` and `Validator` depend on the input
      // itself. Usually we can work around it for the CVA, but there's no API to do it for the
      // validator. We work around it here by injecting the `NgControl` in `ngOnInit`, after
      // everything has been resolved.
      const ngControl = this._injector.get(_angular_forms__WEBPACK_IMPORTED_MODULE_18__.NgControl, null, {
        optional: true,
        self: true
      });
      if (ngControl) {
        this.ngControl = ngControl;
        this._errorStateTracker.ngControl = ngControl;
      }
    }
    ngDoCheck() {
      if (this.ngControl) {
        // We need to re-evaluate this on every change detection cycle, because there are some
        // error triggers that we can't subscribe to (e.g. parent form submissions). This means
        // that whatever logic is in here has to be super lean or we risk destroying the performance.
        this.updateErrorState();
      }
    }
    /** Gets whether the input is empty. */
    isEmpty() {
      return this._elementRef.nativeElement.value.length === 0;
    }
    /** Gets the placeholder of the input. */
    _getPlaceholder() {
      return this._elementRef.nativeElement.placeholder;
    }
    /** Focuses the input. */
    focus() {
      this._elementRef.nativeElement.focus();
    }
    /** Gets the value that should be used when mirroring the input's size. */
    getMirrorValue() {
      const element = this._elementRef.nativeElement;
      const value = element.value;
      return value.length > 0 ? value : element.placeholder;
    }
    /** Refreshes the error state of the input. */
    updateErrorState() {
      this._errorStateTracker.updateErrorState();
    }
    /** Handles `input` events on the input element. */
    _onInput(value) {
      super._onInput(value);
      this._rangeInput._handleChildValueChange();
    }
    /** Opens the datepicker associated with the input. */
    _openPopup() {
      this._rangeInput._openDatepicker();
    }
    /** Gets the minimum date from the range input. */
    _getMinDate() {
      return this._rangeInput.min;
    }
    /** Gets the maximum date from the range input. */
    _getMaxDate() {
      return this._rangeInput.max;
    }
    /** Gets the date filter function from the range input. */
    _getDateFilter() {
      return this._rangeInput.dateFilter;
    }
    _parentDisabled() {
      return this._rangeInput._groupDisabled;
    }
    _shouldHandleChangeEvent({
      source
    }) {
      return source !== this._rangeInput._startInput && source !== this._rangeInput._endInput;
    }
    _assignValueProgrammatically(value) {
      super._assignValueProgrammatically(value);
      const opposite = this === this._rangeInput._startInput ? this._rangeInput._endInput : this._rangeInput._startInput;
      opposite?._validatorOnChange();
    }
    /** return the ARIA accessible name of the input element */
    _getAccessibleName() {
      return _computeAriaAccessibleName(this._elementRef.nativeElement);
    }
    static {
      this.ɵfac = function MatDateRangeInputPartBase_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || MatDateRangeInputPartBase)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](MAT_DATE_RANGE_INPUT_PARENT), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_core__WEBPACK_IMPORTED_MODULE_4__.ErrorStateMatcher), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.Injector), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_18__.NgForm, 8), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_18__.FormGroupDirective, 8), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_core__WEBPACK_IMPORTED_MODULE_4__.DateAdapter, 8), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_core__WEBPACK_IMPORTED_MODULE_4__.MAT_DATE_FORMATS, 8));
      };
    }
    static {
      this.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
        type: MatDateRangeInputPartBase,
        inputs: {
          errorStateMatcher: "errorStateMatcher"
        },
        standalone: true,
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]]
      });
    }
  }
  return MatDateRangeInputPartBase;
})();
/*#__PURE__*/(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
/** Input for entering the start date in a `mat-date-range-input`. */
let MatStartDate = /*#__PURE__*/(() => {
  class MatStartDate extends MatDateRangeInputPartBase {
    constructor(rangeInput, elementRef, defaultErrorStateMatcher, injector, parentForm, parentFormGroup, dateAdapter, dateFormats) {
      super(rangeInput, elementRef, defaultErrorStateMatcher, injector, parentForm, parentFormGroup, dateAdapter, dateFormats);
      /** Validator that checks that the start date isn't after the end date. */
      this._startValidator = control => {
        const start = this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(control.value));
        const end = this._model ? this._model.selection.end : null;
        return !start || !end || this._dateAdapter.compareDate(start, end) <= 0 ? null : {
          'matStartDateInvalid': {
            'end': end,
            'actual': start
          }
        };
      };
      this._validator = _angular_forms__WEBPACK_IMPORTED_MODULE_18__.Validators.compose([...super._getValidators(), this._startValidator]);
    }
    _getValueFromModel(modelValue) {
      return modelValue.start;
    }
    _shouldHandleChangeEvent(change) {
      if (!super._shouldHandleChangeEvent(change)) {
        return false;
      } else {
        return !change.oldValue?.start ? !!change.selection.start : !change.selection.start || !!this._dateAdapter.compareDate(change.oldValue.start, change.selection.start);
      }
    }
    _assignValueToModel(value) {
      if (this._model) {
        const range = new DateRange(value, this._model.selection.end);
        this._model.updateSelection(range, this);
      }
    }
    _formatValue(value) {
      super._formatValue(value);
      // Any time the input value is reformatted we need to tell the parent.
      this._rangeInput._handleChildValueChange();
    }
    _onKeydown(event) {
      const endInput = this._rangeInput._endInput;
      const element = this._elementRef.nativeElement;
      const isLtr = this._dir?.value !== 'rtl';
      // If the user hits RIGHT (LTR) when at the end of the input (and no
      // selection), move the cursor to the start of the end input.
      if ((event.keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_7__.RIGHT_ARROW && isLtr || event.keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_7__.LEFT_ARROW && !isLtr) && element.selectionStart === element.value.length && element.selectionEnd === element.value.length) {
        event.preventDefault();
        endInput._elementRef.nativeElement.setSelectionRange(0, 0);
        endInput.focus();
      } else {
        super._onKeydown(event);
      }
    }
    static {
      this.ɵfac = function MatStartDate_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || MatStartDate)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](MAT_DATE_RANGE_INPUT_PARENT), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_core__WEBPACK_IMPORTED_MODULE_4__.ErrorStateMatcher), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.Injector), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_18__.NgForm, 8), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_18__.FormGroupDirective, 8), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_core__WEBPACK_IMPORTED_MODULE_4__.DateAdapter, 8), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_core__WEBPACK_IMPORTED_MODULE_4__.MAT_DATE_FORMATS, 8));
      };
    }
    static {
      this.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
        type: MatStartDate,
        selectors: [["input", "matStartDate", ""]],
        hostAttrs: ["type", "text", 1, "mat-start-date", "mat-date-range-input-inner"],
        hostVars: 5,
        hostBindings: function MatStartDate_HostBindings(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("input", function MatStartDate_input_HostBindingHandler($event) {
              return ctx._onInput($event.target.value);
            })("change", function MatStartDate_change_HostBindingHandler() {
              return ctx._onChange();
            })("keydown", function MatStartDate_keydown_HostBindingHandler($event) {
              return ctx._onKeydown($event);
            })("blur", function MatStartDate_blur_HostBindingHandler() {
              return ctx._onBlur();
            });
          }
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵhostProperty"]("disabled", ctx.disabled);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-haspopup", ctx._rangeInput.rangePicker ? "dialog" : null)("aria-owns", ctx._rangeInput._ariaOwns ? ctx._rangeInput._ariaOwns() : (ctx._rangeInput.rangePicker == null ? null : ctx._rangeInput.rangePicker.opened) && ctx._rangeInput.rangePicker.id || null)("min", ctx._getMinDate() ? ctx._dateAdapter.toIso8601(ctx._getMinDate()) : null)("max", ctx._getMaxDate() ? ctx._dateAdapter.toIso8601(ctx._getMaxDate()) : null);
          }
        },
        outputs: {
          dateChange: "dateChange",
          dateInput: "dateInput"
        },
        standalone: true,
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([{
          provide: _angular_forms__WEBPACK_IMPORTED_MODULE_18__.NG_VALUE_ACCESSOR,
          useExisting: MatStartDate,
          multi: true
        }, {
          provide: _angular_forms__WEBPACK_IMPORTED_MODULE_18__.NG_VALIDATORS,
          useExisting: MatStartDate,
          multi: true
        }]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]]
      });
    }
  }
  return MatStartDate;
})();
/*#__PURE__*/(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
/** Input for entering the end date in a `mat-date-range-input`. */
let MatEndDate = /*#__PURE__*/(() => {
  class MatEndDate extends MatDateRangeInputPartBase {
    constructor(rangeInput, elementRef, defaultErrorStateMatcher, injector, parentForm, parentFormGroup, dateAdapter, dateFormats) {
      super(rangeInput, elementRef, defaultErrorStateMatcher, injector, parentForm, parentFormGroup, dateAdapter, dateFormats);
      /** Validator that checks that the end date isn't before the start date. */
      this._endValidator = control => {
        const end = this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(control.value));
        const start = this._model ? this._model.selection.start : null;
        return !end || !start || this._dateAdapter.compareDate(end, start) >= 0 ? null : {
          'matEndDateInvalid': {
            'start': start,
            'actual': end
          }
        };
      };
      this._validator = _angular_forms__WEBPACK_IMPORTED_MODULE_18__.Validators.compose([...super._getValidators(), this._endValidator]);
    }
    _getValueFromModel(modelValue) {
      return modelValue.end;
    }
    _shouldHandleChangeEvent(change) {
      if (!super._shouldHandleChangeEvent(change)) {
        return false;
      } else {
        return !change.oldValue?.end ? !!change.selection.end : !change.selection.end || !!this._dateAdapter.compareDate(change.oldValue.end, change.selection.end);
      }
    }
    _assignValueToModel(value) {
      if (this._model) {
        const range = new DateRange(this._model.selection.start, value);
        this._model.updateSelection(range, this);
      }
    }
    _moveCaretToEndOfStartInput() {
      const startInput = this._rangeInput._startInput._elementRef.nativeElement;
      const value = startInput.value;
      if (value.length > 0) {
        startInput.setSelectionRange(value.length, value.length);
      }
      startInput.focus();
    }
    _onKeydown(event) {
      const element = this._elementRef.nativeElement;
      const isLtr = this._dir?.value !== 'rtl';
      // If the user is pressing backspace on an empty end input, move focus back to the start.
      if (event.keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_7__.BACKSPACE && !element.value) {
        this._moveCaretToEndOfStartInput();
      }
      // If the user hits LEFT (LTR) when at the start of the input (and no
      // selection), move the cursor to the end of the start input.
      else if ((event.keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_7__.LEFT_ARROW && isLtr || event.keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_7__.RIGHT_ARROW && !isLtr) && element.selectionStart === 0 && element.selectionEnd === 0) {
        event.preventDefault();
        this._moveCaretToEndOfStartInput();
      } else {
        super._onKeydown(event);
      }
    }
    static {
      this.ɵfac = function MatEndDate_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || MatEndDate)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](MAT_DATE_RANGE_INPUT_PARENT), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_core__WEBPACK_IMPORTED_MODULE_4__.ErrorStateMatcher), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.Injector), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_18__.NgForm, 8), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_18__.FormGroupDirective, 8), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_core__WEBPACK_IMPORTED_MODULE_4__.DateAdapter, 8), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_core__WEBPACK_IMPORTED_MODULE_4__.MAT_DATE_FORMATS, 8));
      };
    }
    static {
      this.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
        type: MatEndDate,
        selectors: [["input", "matEndDate", ""]],
        hostAttrs: ["type", "text", 1, "mat-end-date", "mat-date-range-input-inner"],
        hostVars: 5,
        hostBindings: function MatEndDate_HostBindings(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("input", function MatEndDate_input_HostBindingHandler($event) {
              return ctx._onInput($event.target.value);
            })("change", function MatEndDate_change_HostBindingHandler() {
              return ctx._onChange();
            })("keydown", function MatEndDate_keydown_HostBindingHandler($event) {
              return ctx._onKeydown($event);
            })("blur", function MatEndDate_blur_HostBindingHandler() {
              return ctx._onBlur();
            });
          }
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵhostProperty"]("disabled", ctx.disabled);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-haspopup", ctx._rangeInput.rangePicker ? "dialog" : null)("aria-owns", ctx._rangeInput._ariaOwns ? ctx._rangeInput._ariaOwns() : (ctx._rangeInput.rangePicker == null ? null : ctx._rangeInput.rangePicker.opened) && ctx._rangeInput.rangePicker.id || null)("min", ctx._getMinDate() ? ctx._dateAdapter.toIso8601(ctx._getMinDate()) : null)("max", ctx._getMaxDate() ? ctx._dateAdapter.toIso8601(ctx._getMaxDate()) : null);
          }
        },
        outputs: {
          dateChange: "dateChange",
          dateInput: "dateInput"
        },
        standalone: true,
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([{
          provide: _angular_forms__WEBPACK_IMPORTED_MODULE_18__.NG_VALUE_ACCESSOR,
          useExisting: MatEndDate,
          multi: true
        }, {
          provide: _angular_forms__WEBPACK_IMPORTED_MODULE_18__.NG_VALIDATORS,
          useExisting: MatEndDate,
          multi: true
        }]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]]
      });
    }
  }
  return MatEndDate;
})();
/*#__PURE__*/(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
let nextUniqueId = 0;
let MatDateRangeInput = /*#__PURE__*/(() => {
  class MatDateRangeInput {
    /** Current value of the range input. */
    get value() {
      return this._model ? this._model.selection : null;
    }
    /** Whether the control's label should float. */
    get shouldLabelFloat() {
      return this.focused || !this.empty;
    }
    /**
     * Implemented as a part of `MatFormFieldControl`.
     * Set the placeholder attribute on `matStartDate` and `matEndDate`.
     * @docs-private
     */
    get placeholder() {
      const start = this._startInput?._getPlaceholder() || '';
      const end = this._endInput?._getPlaceholder() || '';
      return start || end ? `${start} ${this.separator} ${end}` : '';
    }
    /** The range picker that this input is associated with. */
    get rangePicker() {
      return this._rangePicker;
    }
    set rangePicker(rangePicker) {
      if (rangePicker) {
        this._model = rangePicker.registerInput(this);
        this._rangePicker = rangePicker;
        this._closedSubscription.unsubscribe();
        this._openedSubscription.unsubscribe();
        this._ariaOwns.set(this.rangePicker.opened ? rangePicker.id : null);
        this._closedSubscription = rangePicker.closedStream.subscribe(() => {
          this._startInput?._onTouched();
          this._endInput?._onTouched();
          this._ariaOwns.set(null);
        });
        this._openedSubscription = rangePicker.openedStream.subscribe(() => {
          this._ariaOwns.set(rangePicker.id);
        });
        this._registerModel(this._model);
      }
    }
    /** Whether the input is required. */
    get required() {
      return this._required ?? (this._isTargetRequired(this) || this._isTargetRequired(this._startInput) || this._isTargetRequired(this._endInput)) ?? false;
    }
    set required(value) {
      this._required = value;
    }
    /** Function that can be used to filter out dates within the date range picker. */
    get dateFilter() {
      return this._dateFilter;
    }
    set dateFilter(value) {
      const start = this._startInput;
      const end = this._endInput;
      const wasMatchingStart = start && start._matchesFilter(start.value);
      const wasMatchingEnd = end && end._matchesFilter(start.value);
      this._dateFilter = value;
      if (start && start._matchesFilter(start.value) !== wasMatchingStart) {
        start._validatorOnChange();
      }
      if (end && end._matchesFilter(end.value) !== wasMatchingEnd) {
        end._validatorOnChange();
      }
    }
    /** The minimum valid date. */
    get min() {
      return this._min;
    }
    set min(value) {
      const validValue = this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(value));
      if (!this._dateAdapter.sameDate(validValue, this._min)) {
        this._min = validValue;
        this._revalidate();
      }
    }
    /** The maximum valid date. */
    get max() {
      return this._max;
    }
    set max(value) {
      const validValue = this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(value));
      if (!this._dateAdapter.sameDate(validValue, this._max)) {
        this._max = validValue;
        this._revalidate();
      }
    }
    /** Whether the input is disabled. */
    get disabled() {
      return this._startInput && this._endInput ? this._startInput.disabled && this._endInput.disabled : this._groupDisabled;
    }
    set disabled(value) {
      if (value !== this._groupDisabled) {
        this._groupDisabled = value;
        this.stateChanges.next(undefined);
      }
    }
    /** Whether the input is in an error state. */
    get errorState() {
      if (this._startInput && this._endInput) {
        return this._startInput.errorState || this._endInput.errorState;
      }
      return false;
    }
    /** Whether the datepicker input is empty. */
    get empty() {
      const startEmpty = this._startInput ? this._startInput.isEmpty() : false;
      const endEmpty = this._endInput ? this._endInput.isEmpty() : false;
      return startEmpty && endEmpty;
    }
    constructor(_changeDetectorRef, _elementRef, control, _dateAdapter, _formField) {
      this._changeDetectorRef = _changeDetectorRef;
      this._elementRef = _elementRef;
      this._dateAdapter = _dateAdapter;
      this._formField = _formField;
      this._closedSubscription = rxjs__WEBPACK_IMPORTED_MODULE_5__.Subscription.EMPTY;
      this._openedSubscription = rxjs__WEBPACK_IMPORTED_MODULE_5__.Subscription.EMPTY;
      /** Unique ID for the group. */
      this.id = `mat-date-range-input-${nextUniqueId++}`;
      /** Whether the control is focused. */
      this.focused = false;
      /** Name of the form control. */
      this.controlType = 'mat-date-range-input';
      /** The id of the panel owned by this input. */
      this._ariaOwns = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.signal)(null);
      this._groupDisabled = false;
      /** Value for the `aria-describedby` attribute of the inputs. */
      this._ariaDescribedBy = null;
      /** Separator text to be shown between the inputs. */
      this.separator = '–';
      /** Start of the comparison range that should be shown in the calendar. */
      this.comparisonStart = null;
      /** End of the comparison range that should be shown in the calendar. */
      this.comparisonEnd = null;
      /** Emits when the input's state has changed. */
      this.stateChanges = new rxjs__WEBPACK_IMPORTED_MODULE_1__.Subject();
      /**
       * Disable the automatic labeling to avoid issues like #27241.
       * @docs-private
       */
      this.disableAutomaticLabeling = true;
      if (!_dateAdapter && (typeof ngDevMode === 'undefined' || ngDevMode)) {
        throw createMissingDateImplError('DateAdapter');
      }
      // The datepicker module can be used both with MDC and non-MDC form fields. We have
      // to conditionally add the MDC input class so that the range picker looks correctly.
      if (_formField?._elementRef.nativeElement.classList.contains('mat-mdc-form-field')) {
        _elementRef.nativeElement.classList.add('mat-mdc-input-element', 'mat-mdc-form-field-input-control', 'mdc-text-field__input');
      }
      // TODO(crisbeto): remove `as any` after #18206 lands.
      this.ngControl = control;
    }
    /**
     * Implemented as a part of `MatFormFieldControl`.
     * @docs-private
     */
    setDescribedByIds(ids) {
      this._ariaDescribedBy = ids.length ? ids.join(' ') : null;
    }
    /**
     * Implemented as a part of `MatFormFieldControl`.
     * @docs-private
     */
    onContainerClick() {
      if (!this.focused && !this.disabled) {
        if (!this._model || !this._model.selection.start) {
          this._startInput.focus();
        } else {
          this._endInput.focus();
        }
      }
    }
    ngAfterContentInit() {
      if (typeof ngDevMode === 'undefined' || ngDevMode) {
        if (!this._startInput) {
          throw Error('mat-date-range-input must contain a matStartDate input');
        }
        if (!this._endInput) {
          throw Error('mat-date-range-input must contain a matEndDate input');
        }
      }
      if (this._model) {
        this._registerModel(this._model);
      }
      // We don't need to unsubscribe from this, because we
      // know that the input streams will be completed on destroy.
      (0,rxjs__WEBPACK_IMPORTED_MODULE_16__.merge)(this._startInput.stateChanges, this._endInput.stateChanges).subscribe(() => {
        this.stateChanges.next(undefined);
      });
    }
    ngOnChanges(changes) {
      if (dateInputsHaveChanged(changes, this._dateAdapter)) {
        this.stateChanges.next(undefined);
      }
    }
    ngOnDestroy() {
      this._closedSubscription.unsubscribe();
      this._openedSubscription.unsubscribe();
      this.stateChanges.complete();
    }
    /** Gets the date at which the calendar should start. */
    getStartValue() {
      return this.value ? this.value.start : null;
    }
    /** Gets the input's theme palette. */
    getThemePalette() {
      return this._formField ? this._formField.color : undefined;
    }
    /** Gets the element to which the calendar overlay should be attached. */
    getConnectedOverlayOrigin() {
      return this._formField ? this._formField.getConnectedOverlayOrigin() : this._elementRef;
    }
    /** Gets the ID of an element that should be used a description for the calendar overlay. */
    getOverlayLabelId() {
      return this._formField ? this._formField.getLabelId() : null;
    }
    /** Gets the value that is used to mirror the state input. */
    _getInputMirrorValue(part) {
      const input = part === 'start' ? this._startInput : this._endInput;
      return input ? input.getMirrorValue() : '';
    }
    /** Whether the input placeholders should be hidden. */
    _shouldHidePlaceholders() {
      return this._startInput ? !this._startInput.isEmpty() : false;
    }
    /** Handles the value in one of the child inputs changing. */
    _handleChildValueChange() {
      this.stateChanges.next(undefined);
      this._changeDetectorRef.markForCheck();
    }
    /** Opens the date range picker associated with the input. */
    _openDatepicker() {
      if (this._rangePicker) {
        this._rangePicker.open();
      }
    }
    /** Whether the separate text should be hidden. */
    _shouldHideSeparator() {
      return (!this._formField || this._formField.getLabelId() && !this._formField._shouldLabelFloat()) && this.empty;
    }
    /** Gets the value for the `aria-labelledby` attribute of the inputs. */
    _getAriaLabelledby() {
      const formField = this._formField;
      return formField && formField._hasFloatingLabel() ? formField._labelId : null;
    }
    _getStartDateAccessibleName() {
      return this._startInput._getAccessibleName();
    }
    _getEndDateAccessibleName() {
      return this._endInput._getAccessibleName();
    }
    /** Updates the focused state of the range input. */
    _updateFocus(origin) {
      this.focused = origin !== null;
      this.stateChanges.next();
    }
    /** Re-runs the validators on the start/end inputs. */
    _revalidate() {
      if (this._startInput) {
        this._startInput._validatorOnChange();
      }
      if (this._endInput) {
        this._endInput._validatorOnChange();
      }
    }
    /** Registers the current date selection model with the start/end inputs. */
    _registerModel(model) {
      if (this._startInput) {
        this._startInput._registerModel(model);
      }
      if (this._endInput) {
        this._endInput._registerModel(model);
      }
    }
    /** Checks whether a specific range input directive is required. */
    _isTargetRequired(target) {
      return target?.ngControl?.control?.hasValidator(_angular_forms__WEBPACK_IMPORTED_MODULE_18__.Validators.required);
    }
    static {
      this.ɵfac = function MatDateRangeInput_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || MatDateRangeInput)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_18__.ControlContainer, 10), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_core__WEBPACK_IMPORTED_MODULE_4__.DateAdapter, 8), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_form_field__WEBPACK_IMPORTED_MODULE_19__.MAT_FORM_FIELD, 8));
      };
    }
    static {
      this.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: MatDateRangeInput,
        selectors: [["mat-date-range-input"]],
        contentQueries: function MatDateRangeInput_ContentQueries(rf, ctx, dirIndex) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, MatStartDate, 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, MatEndDate, 5);
          }
          if (rf & 2) {
            let _t;
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx._startInput = _t.first);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx._endInput = _t.first);
          }
        },
        hostAttrs: ["role", "group", 1, "mat-date-range-input"],
        hostVars: 8,
        hostBindings: function MatDateRangeInput_HostBindings(rf, ctx) {
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("id", ctx.id)("aria-labelledby", ctx._getAriaLabelledby())("aria-describedby", ctx._ariaDescribedBy)("data-mat-calendar", ctx.rangePicker ? ctx.rangePicker.id : null);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("mat-date-range-input-hide-placeholders", ctx._shouldHidePlaceholders())("mat-date-range-input-required", ctx.required);
          }
        },
        inputs: {
          rangePicker: "rangePicker",
          required: [2, "required", "required", _angular_core__WEBPACK_IMPORTED_MODULE_0__.booleanAttribute],
          dateFilter: "dateFilter",
          min: "min",
          max: "max",
          disabled: [2, "disabled", "disabled", _angular_core__WEBPACK_IMPORTED_MODULE_0__.booleanAttribute],
          separator: "separator",
          comparisonStart: "comparisonStart",
          comparisonEnd: "comparisonEnd"
        },
        exportAs: ["matDateRangeInput"],
        standalone: true,
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([{
          provide: _angular_material_form_field__WEBPACK_IMPORTED_MODULE_19__.MatFormFieldControl,
          useExisting: MatDateRangeInput
        }, {
          provide: MAT_DATE_RANGE_INPUT_PARENT,
          useExisting: MatDateRangeInput
        }]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInputTransformsFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵStandaloneFeature"]],
        ngContentSelectors: _c6,
        decls: 11,
        vars: 5,
        consts: [["cdkMonitorSubtreeFocus", "", 1, "mat-date-range-input-container", 3, "cdkFocusChange"], [1, "mat-date-range-input-wrapper"], ["aria-hidden", "true", 1, "mat-date-range-input-mirror"], [1, "mat-date-range-input-separator"], [1, "mat-date-range-input-wrapper", "mat-date-range-input-end-wrapper"]],
        template: function MatDateRangeInput_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"](_c5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("cdkFocusChange", function MatDateRangeInput_Template_div_cdkFocusChange_0_listener($event) {
              return ctx._updateFocus($event);
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](8, 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "span", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
          }
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx._getInputMirrorValue("start"));
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("mat-date-range-input-separator-hidden", ctx._shouldHideSeparator());
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.separator);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx._getInputMirrorValue("end"));
          }
        },
        dependencies: [_angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_11__.CdkMonitorFocus],
        styles: [".mat-date-range-input{display:block;width:100%}.mat-date-range-input-container{display:flex;align-items:center}.mat-date-range-input-separator{transition:opacity 400ms 133.3333333333ms cubic-bezier(0.25, 0.8, 0.25, 1);margin:0 4px;color:var(--mat-datepicker-range-input-separator-color, var(--mat-app-on-surface))}.mat-form-field-disabled .mat-date-range-input-separator{color:var(--mat-datepicker-range-input-disabled-state-separator-color)}._mat-animation-noopable .mat-date-range-input-separator{transition:none}.mat-date-range-input-separator-hidden{-webkit-user-select:none;user-select:none;opacity:0;transition:none}.mat-date-range-input-wrapper{position:relative;overflow:hidden;max-width:calc(50% - 4px)}.mat-date-range-input-end-wrapper{flex-grow:1}.mat-date-range-input-inner{position:absolute;top:0;left:0;font:inherit;background:rgba(0,0,0,0);color:currentColor;border:none;outline:none;padding:0;margin:0;vertical-align:bottom;text-align:inherit;-webkit-appearance:none;width:100%;height:100%}.mat-date-range-input-inner:-moz-ui-invalid{box-shadow:none}.mat-date-range-input-inner::placeholder{transition:color 400ms 133.3333333333ms cubic-bezier(0.25, 0.8, 0.25, 1)}.mat-date-range-input-inner::-moz-placeholder{transition:color 400ms 133.3333333333ms cubic-bezier(0.25, 0.8, 0.25, 1)}.mat-date-range-input-inner::-webkit-input-placeholder{transition:color 400ms 133.3333333333ms cubic-bezier(0.25, 0.8, 0.25, 1)}.mat-date-range-input-inner:-ms-input-placeholder{transition:color 400ms 133.3333333333ms cubic-bezier(0.25, 0.8, 0.25, 1)}.mat-date-range-input-inner[disabled]{color:var(--mat-datepicker-range-input-disabled-state-text-color)}.mat-form-field-hide-placeholder .mat-date-range-input-inner::placeholder,.mat-date-range-input-hide-placeholders .mat-date-range-input-inner::placeholder{-webkit-user-select:none;user-select:none;color:rgba(0,0,0,0) !important;-webkit-text-fill-color:rgba(0,0,0,0);transition:none}.cdk-high-contrast-active .mat-form-field-hide-placeholder .mat-date-range-input-inner::placeholder,.cdk-high-contrast-active .mat-date-range-input-hide-placeholders .mat-date-range-input-inner::placeholder{opacity:0}.mat-form-field-hide-placeholder .mat-date-range-input-inner::-moz-placeholder,.mat-date-range-input-hide-placeholders .mat-date-range-input-inner::-moz-placeholder{-webkit-user-select:none;user-select:none;color:rgba(0,0,0,0) !important;-webkit-text-fill-color:rgba(0,0,0,0);transition:none}.cdk-high-contrast-active .mat-form-field-hide-placeholder .mat-date-range-input-inner::-moz-placeholder,.cdk-high-contrast-active .mat-date-range-input-hide-placeholders .mat-date-range-input-inner::-moz-placeholder{opacity:0}.mat-form-field-hide-placeholder .mat-date-range-input-inner::-webkit-input-placeholder,.mat-date-range-input-hide-placeholders .mat-date-range-input-inner::-webkit-input-placeholder{-webkit-user-select:none;user-select:none;color:rgba(0,0,0,0) !important;-webkit-text-fill-color:rgba(0,0,0,0);transition:none}.cdk-high-contrast-active .mat-form-field-hide-placeholder .mat-date-range-input-inner::-webkit-input-placeholder,.cdk-high-contrast-active .mat-date-range-input-hide-placeholders .mat-date-range-input-inner::-webkit-input-placeholder{opacity:0}.mat-form-field-hide-placeholder .mat-date-range-input-inner:-ms-input-placeholder,.mat-date-range-input-hide-placeholders .mat-date-range-input-inner:-ms-input-placeholder{-webkit-user-select:none;user-select:none;color:rgba(0,0,0,0) !important;-webkit-text-fill-color:rgba(0,0,0,0);transition:none}.cdk-high-contrast-active .mat-form-field-hide-placeholder .mat-date-range-input-inner:-ms-input-placeholder,.cdk-high-contrast-active .mat-date-range-input-hide-placeholders .mat-date-range-input-inner:-ms-input-placeholder{opacity:0}._mat-animation-noopable .mat-date-range-input-inner::placeholder{transition:none}._mat-animation-noopable .mat-date-range-input-inner::-moz-placeholder{transition:none}._mat-animation-noopable .mat-date-range-input-inner::-webkit-input-placeholder{transition:none}._mat-animation-noopable .mat-date-range-input-inner:-ms-input-placeholder{transition:none}.mat-date-range-input-mirror{-webkit-user-select:none;user-select:none;visibility:hidden;white-space:nowrap;display:inline-block;min-width:2px}.mat-mdc-form-field-type-mat-date-range-input .mat-mdc-form-field-infix{width:200px}"],
        encapsulation: 2,
        changeDetection: 0
      });
    }
  }
  return MatDateRangeInput;
})();
/*#__PURE__*/(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();

// TODO(mmalerba): We use a component instead of a directive here so the user can use implicit
// template reference variables (e.g. #d vs #d="matDateRangePicker"). We can change this to a
// directive if angular adds support for `exportAs: '$implicit'` on directives.
/** Component responsible for managing the date range picker popup/dialog. */
let MatDateRangePicker = /*#__PURE__*/(() => {
  class MatDateRangePicker extends MatDatepickerBase {
    _forwardContentValues(instance) {
      super._forwardContentValues(instance);
      const input = this.datepickerInput;
      if (input) {
        instance.comparisonStart = input.comparisonStart;
        instance.comparisonEnd = input.comparisonEnd;
        instance.startDateAccessibleName = input._getStartDateAccessibleName();
        instance.endDateAccessibleName = input._getEndDateAccessibleName();
      }
    }
    static {
      this.ɵfac = /* @__PURE__ */(() => {
        let ɵMatDateRangePicker_BaseFactory;
        return function MatDateRangePicker_Factory(__ngFactoryType__) {
          return (ɵMatDateRangePicker_BaseFactory || (ɵMatDateRangePicker_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetInheritedFactory"](MatDateRangePicker)))(__ngFactoryType__ || MatDateRangePicker);
        };
      })();
    }
    static {
      this.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: MatDateRangePicker,
        selectors: [["mat-date-range-picker"]],
        exportAs: ["matDateRangePicker"],
        standalone: true,
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([MAT_RANGE_DATE_SELECTION_MODEL_PROVIDER, MAT_CALENDAR_RANGE_STRATEGY_PROVIDER, {
          provide: MatDatepickerBase,
          useExisting: MatDateRangePicker
        }]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵStandaloneFeature"]],
        decls: 0,
        vars: 0,
        template: function MatDateRangePicker_Template(rf, ctx) {},
        encapsulation: 2,
        changeDetection: 0
      });
    }
  }
  return MatDateRangePicker;
})();
/*#__PURE__*/(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();

/** Button that will close the datepicker and assign the current selection to the data model. */
let MatDatepickerApply = /*#__PURE__*/(() => {
  class MatDatepickerApply {
    constructor(_datepicker) {
      this._datepicker = _datepicker;
    }
    _applySelection() {
      this._datepicker._applyPendingSelection();
      this._datepicker.close();
    }
    static {
      this.ɵfac = function MatDatepickerApply_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || MatDatepickerApply)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](MatDatepickerBase));
      };
    }
    static {
      this.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
        type: MatDatepickerApply,
        selectors: [["", "matDatepickerApply", ""], ["", "matDateRangePickerApply", ""]],
        hostBindings: function MatDatepickerApply_HostBindings(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MatDatepickerApply_click_HostBindingHandler() {
              return ctx._applySelection();
            });
          }
        },
        standalone: true
      });
    }
  }
  return MatDatepickerApply;
})();
/*#__PURE__*/(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
/** Button that will close the datepicker and discard the current selection. */
let MatDatepickerCancel = /*#__PURE__*/(() => {
  class MatDatepickerCancel {
    constructor(_datepicker) {
      this._datepicker = _datepicker;
    }
    static {
      this.ɵfac = function MatDatepickerCancel_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || MatDatepickerCancel)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](MatDatepickerBase));
      };
    }
    static {
      this.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
        type: MatDatepickerCancel,
        selectors: [["", "matDatepickerCancel", ""], ["", "matDateRangePickerCancel", ""]],
        hostBindings: function MatDatepickerCancel_HostBindings(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MatDatepickerCancel_click_HostBindingHandler() {
              return ctx._datepicker.close();
            });
          }
        },
        standalone: true
      });
    }
  }
  return MatDatepickerCancel;
})();
/*#__PURE__*/(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
/**
 * Container that can be used to project a row of action buttons
 * to the bottom of a datepicker or date range picker.
 */
let MatDatepickerActions = /*#__PURE__*/(() => {
  class MatDatepickerActions {
    constructor(_datepicker, _viewContainerRef) {
      this._datepicker = _datepicker;
      this._viewContainerRef = _viewContainerRef;
    }
    ngAfterViewInit() {
      this._portal = new _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_10__.TemplatePortal(this._template, this._viewContainerRef);
      this._datepicker.registerActions(this._portal);
    }
    ngOnDestroy() {
      this._datepicker.removeActions(this._portal);
      // Needs to be null checked since we initialize it in `ngAfterViewInit`.
      if (this._portal && this._portal.isAttached) {
        this._portal?.detach();
      }
    }
    static {
      this.ɵfac = function MatDatepickerActions_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || MatDatepickerActions)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](MatDatepickerBase), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewContainerRef));
      };
    }
    static {
      this.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: MatDatepickerActions,
        selectors: [["mat-datepicker-actions"], ["mat-date-range-picker-actions"]],
        viewQuery: function MatDatepickerActions_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.TemplateRef, 5);
          }
          if (rf & 2) {
            let _t;
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx._template = _t.first);
          }
        },
        standalone: true,
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵStandaloneFeature"]],
        ngContentSelectors: _c1,
        decls: 1,
        vars: 0,
        consts: [[1, "mat-datepicker-actions"]],
        template: function MatDatepickerActions_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, MatDatepickerActions_ng_template_0_Template, 2, 0, "ng-template");
          }
        },
        styles: [".mat-datepicker-actions{display:flex;justify-content:flex-end;align-items:center;padding:0 8px 8px 8px}.mat-datepicker-actions .mat-mdc-button-base+.mat-mdc-button-base{margin-left:8px}[dir=rtl] .mat-datepicker-actions .mat-mdc-button-base+.mat-mdc-button-base{margin-left:0;margin-right:8px}"],
        encapsulation: 2,
        changeDetection: 0
      });
    }
  }
  return MatDatepickerActions;
})();
/*#__PURE__*/(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
let MatDatepickerModule = /*#__PURE__*/(() => {
  class MatDatepickerModule {
    static {
      this.ɵfac = function MatDatepickerModule_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || MatDatepickerModule)();
      };
    }
    static {
      this.ɵmod = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: MatDatepickerModule
      });
    }
    static {
      this.ɵinj = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        providers: [MatDatepickerIntl, MAT_DATEPICKER_SCROLL_STRATEGY_FACTORY_PROVIDER],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_9__.MatButtonModule, _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_13__.OverlayModule, _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_11__.A11yModule, _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_10__.PortalModule, _angular_material_core__WEBPACK_IMPORTED_MODULE_4__.MatCommonModule, MatDatepickerContent, MatDatepickerToggle, MatCalendarHeader, _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_22__.CdkScrollableModule]
      });
    }
  }
  return MatDatepickerModule;
})();
/*#__PURE__*/(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();

/**
 * Generated bundle index. Do not edit.
 */



/***/ })

}]);
//# sourceMappingURL=953.js.map