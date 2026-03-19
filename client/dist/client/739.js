"use strict";
(self["webpackChunkclient"] = self["webpackChunkclient"] || []).push([[739],{

/***/ 2739:
/*!******************************************************!*\
  !*** ./src/app/pages/register/register.component.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   RegisterComponent: () => (/* binding */ RegisterComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ 4456);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/card */ 3777);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/button */ 4175);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/icon */ 3840);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/form-field */ 4950);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/input */ 5541);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/select */ 5175);
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/progress-spinner */ 1134);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _services_users_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../services/users.service */ 3221);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/core */ 4646);























const _forTrack0 = ($index, $item) => $item.value;
function RegisterComponent_mat_error_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "El correo es obligatorio");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
function RegisterComponent_mat_error_14_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Correo no v\u00E1lido");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
function RegisterComponent_mat_error_19_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "La contrase\u00F1a es obligatoria");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
function RegisterComponent_mat_error_20_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "M\u00EDnimo 4 caracteres");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
function RegisterComponent_mat_error_25_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "El nombre es obligatorio");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
function RegisterComponent_mat_error_26_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "M\u00EDnimo 2 caracteres");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
function RegisterComponent_For_32_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-option", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const r_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", r_r1.value);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](r_r1.label);
  }
}
function RegisterComponent_For_42_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-option", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const e_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", e_r2.value);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](e_r2.label);
  }
}
function RegisterComponent_p_43_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r2.errorMessage);
  }
}
function RegisterComponent_mat_spinner_45_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "mat-spinner", 20);
  }
}
function RegisterComponent_mat_icon_46_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-icon", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "person_add");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
function RegisterComponent_span_47_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Registrar");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
let RegisterComponent = /*#__PURE__*/(() => {
  class RegisterComponent {
    constructor(fb, router, usersService) {
      this.fb = fb;
      this.router = router;
      this.usersService = usersService;
      this.loading = false;
      this.errorMessage = '';
      this.roles = [{
        value: 0,
        label: 'Manager'
      }, {
        value: 1,
        label: 'Invitado'
      }];
      this.estados = [{
        value: true,
        label: 'Activo'
      }, {
        value: false,
        label: 'Inactivo'
      }];
      this.form = this.fb.group({
        correo: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.email]],
        contraseña: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.minLength(4)]],
        nombreCompleto: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.minLength(2)]],
        rol: [1, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required]],
        // Invitado por defecto
        telefono: [''],
        activo: [true, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required]]
      });
    }
    onSubmit() {
      this.errorMessage = '';
      if (this.form.invalid) {
        this.form.markAllAsTouched();
        return;
      }
      const raw = this.form.value;
      const payload = {
        correo: raw.correo.trim(),
        contraseña: raw.contraseña,
        nombreCompleto: raw.nombreCompleto.trim(),
        rol: Number(raw.rol),
        telefono: raw.telefono?.trim() || undefined,
        activo: Boolean(raw.activo)
      };
      this.loading = true;
      this.usersService.createUser(payload).subscribe({
        next: () => {
          this.loading = false;
          this.router.navigate(['/login']);
        },
        error: err => {
          this.loading = false;
          this.errorMessage = err?.error?.message ?? err?.message ?? 'No se pudo crear el usuario.';
        }
      });
    }
    static {
      this.ɵfac = function RegisterComponent_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || RegisterComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_users_service__WEBPACK_IMPORTED_MODULE_0__.UsersService));
      };
    }
    static {
      this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: RegisterComponent,
        selectors: [["app-register"]],
        standalone: true,
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵStandaloneFeature"]],
        decls: 53,
        vars: 12,
        consts: [[1, "register-page"], [1, "register-card"], [3, "ngSubmit", "formGroup"], ["appearance", "outline", 1, "full-width"], ["matInput", "", "type", "email", "formControlName", "correo", "placeholder", "usuario@ejemplo.com"], [4, "ngIf"], ["matInput", "", "type", "password", "formControlName", "contrase\u00F1a", "placeholder", "\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022"], ["matInput", "", "formControlName", "nombreCompleto", "placeholder", "Ej. Roberto Carlos"], ["formControlName", "rol"], [3, "value"], ["matInput", "", "formControlName", "telefono", "placeholder", "Ej. 95847521"], ["formControlName", "activo"], ["class", "error-msg", 4, "ngIf"], ["mat-flat-button", "", "color", "primary", "type", "submit", 1, "full-width", "submit-btn", 3, "disabled"], ["diameter", "24", "class", "btn-spinner", 4, "ngIf"], ["aria-hidden", "true", 4, "ngIf"], [1, "card-footer"], ["mat-button", "", "routerLink", "/login"], ["aria-hidden", "true"], [1, "error-msg"], ["diameter", "24", 1, "btn-spinner"]],
        template: function RegisterComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "mat-card", 1)(2, "mat-card-header")(3, "mat-card-title");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "ProBook");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "mat-card-subtitle");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "Crear cuenta");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "mat-card-content")(8, "form", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngSubmit", function RegisterComponent_Template_form_ngSubmit_8_listener() {
              return ctx.onSubmit();
            });
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "mat-form-field", 3)(10, "mat-label");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "Correo electr\u00F3nico");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](12, "input", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](13, RegisterComponent_mat_error_13_Template, 2, 0, "mat-error", 5)(14, RegisterComponent_mat_error_14_Template, 2, 0, "mat-error", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "mat-form-field", 3)(16, "mat-label");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17, "Contrase\u00F1a");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](18, "input", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](19, RegisterComponent_mat_error_19_Template, 2, 0, "mat-error", 5)(20, RegisterComponent_mat_error_20_Template, 2, 0, "mat-error", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "mat-form-field", 3)(22, "mat-label");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](23, "Nombre completo");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](24, "input", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](25, RegisterComponent_mat_error_25_Template, 2, 0, "mat-error", 5)(26, RegisterComponent_mat_error_26_Template, 2, 0, "mat-error", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "mat-form-field", 3)(28, "mat-label");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](29, "Rol");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "mat-select", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrepeaterCreate"](31, RegisterComponent_For_32_Template, 2, 2, "mat-option", 9, _forTrack0);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "mat-form-field", 3)(34, "mat-label");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](35, "Tel\u00E9fono");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](36, "input", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](37, "mat-form-field", 3)(38, "mat-label");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](39, "Estado");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](40, "mat-select", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrepeaterCreate"](41, RegisterComponent_For_42_Template, 2, 2, "mat-option", 9, _forTrack0);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](43, RegisterComponent_p_43_Template, 2, 1, "p", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](44, "button", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](45, RegisterComponent_mat_spinner_45_Template, 1, 0, "mat-spinner", 14)(46, RegisterComponent_mat_icon_46_Template, 2, 0, "mat-icon", 15)(47, RegisterComponent_span_47_Template, 2, 0, "span", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](48, "mat-card-actions", 16)(49, "a", 17)(50, "mat-icon", 18);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](51, "login");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](52, " Volver al login ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
          }
          if (rf & 2) {
            let tmp_1_0;
            let tmp_2_0;
            let tmp_3_0;
            let tmp_4_0;
            let tmp_5_0;
            let tmp_6_0;
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.form);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", (tmp_1_0 = ctx.form.get("correo")) == null ? null : tmp_1_0.hasError("required"));
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", (tmp_2_0 = ctx.form.get("correo")) == null ? null : tmp_2_0.hasError("email"));
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", (tmp_3_0 = ctx.form.get("contrase\u00F1a")) == null ? null : tmp_3_0.hasError("required"));
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", (tmp_4_0 = ctx.form.get("contrase\u00F1a")) == null ? null : tmp_4_0.hasError("minlength"));
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", (tmp_5_0 = ctx.form.get("nombreCompleto")) == null ? null : tmp_5_0.hasError("required"));
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", (tmp_6_0 = ctx.form.get("nombreCompleto")) == null ? null : tmp_6_0.hasError("minlength"));
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrepeater"](ctx.roles);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](10);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrepeater"](ctx.estados);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.errorMessage);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", ctx.loading);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.loading);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.loading);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.loading);
          }
        },
        dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterLink, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.ReactiveFormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControlName, _angular_material_card__WEBPACK_IMPORTED_MODULE_5__.MatCardModule, _angular_material_card__WEBPACK_IMPORTED_MODULE_5__.MatCard, _angular_material_card__WEBPACK_IMPORTED_MODULE_5__.MatCardActions, _angular_material_card__WEBPACK_IMPORTED_MODULE_5__.MatCardContent, _angular_material_card__WEBPACK_IMPORTED_MODULE_5__.MatCardHeader, _angular_material_card__WEBPACK_IMPORTED_MODULE_5__.MatCardSubtitle, _angular_material_card__WEBPACK_IMPORTED_MODULE_5__.MatCardTitle, _angular_material_button__WEBPACK_IMPORTED_MODULE_6__.MatButtonModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_6__.MatAnchor, _angular_material_button__WEBPACK_IMPORTED_MODULE_6__.MatButton, _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__.MatIconModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__.MatIcon, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__.MatFormFieldModule, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__.MatLabel, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__.MatError, _angular_material_input__WEBPACK_IMPORTED_MODULE_9__.MatInputModule, _angular_material_input__WEBPACK_IMPORTED_MODULE_9__.MatInput, _angular_material_select__WEBPACK_IMPORTED_MODULE_10__.MatSelectModule, _angular_material_select__WEBPACK_IMPORTED_MODULE_10__.MatSelect, _angular_material_core__WEBPACK_IMPORTED_MODULE_11__.MatOption, _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_12__.MatProgressSpinnerModule, _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_12__.MatProgressSpinner],
        styles: [".register-page[_ngcontent-%COMP%] {\n  min-height: 100vh;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background: linear-gradient(135deg, #1a237e 0%, #3949ab 50%, #5c6bc0 100%);\n  padding: 1rem;\n}\n\n.register-card[_ngcontent-%COMP%] {\n  max-width: 420px;\n  width: 100%;\n}\n.register-card[_ngcontent-%COMP%]   mat-card-header[_ngcontent-%COMP%] {\n  flex-direction: column;\n  align-items: center;\n  text-align: center;\n  margin-bottom: 1.5rem;\n}\n.register-card[_ngcontent-%COMP%]   mat-card-title[_ngcontent-%COMP%] {\n  font-size: 1.75rem;\n  font-weight: 700;\n}\n.register-card[_ngcontent-%COMP%]   mat-card-subtitle[_ngcontent-%COMP%] {\n  font-size: 0.95rem;\n  margin-top: 0.25rem;\n}\n.register-card[_ngcontent-%COMP%]   .full-width[_ngcontent-%COMP%] {\n  width: 100%;\n  display: block;\n  margin-bottom: 0.5rem;\n}\n.register-card[_ngcontent-%COMP%]   .submit-btn[_ngcontent-%COMP%] {\n  margin-top: 1rem;\n  height: 44px;\n  position: relative;\n}\n.register-card[_ngcontent-%COMP%]   .submit-btn[_ngcontent-%COMP%]   .btn-spinner[_ngcontent-%COMP%] {\n  margin: 0 auto;\n}\n.register-card[_ngcontent-%COMP%]   .error-msg[_ngcontent-%COMP%] {\n  color: var(--mat-warn-color, #f44336);\n  font-size: 0.875rem;\n  margin: 0.5rem 0 0;\n}\n.register-card[_ngcontent-%COMP%]   .card-footer[_ngcontent-%COMP%] {\n  padding: 1rem;\n  text-align: center;\n}\n\n[_nghost-%COMP%]     .mat-mdc-form-field {\n  color: #ffffff;\n}\n\n[_nghost-%COMP%]     .mat-mdc-form-field .mat-mdc-text-field-wrapper {\n  background-color: #1f1f1f !important;\n}\n\n[_nghost-%COMP%]     .mat-mdc-form-field .mat-mdc-input-element {\n  color: #ffffff !important;\n}\n\n[_nghost-%COMP%]     .mat-mdc-form-field .mat-mdc-input-element::placeholder {\n  color: rgba(255, 255, 255, 0.65) !important;\n}\n\n[_nghost-%COMP%]     .mat-mdc-form-field label.mat-mdc-floating-label {\n  color: rgba(255, 255, 255, 0.9) !important;\n}\n\n[_nghost-%COMP%]     .mat-mdc-form-field .mdc-notched-outline {\n  border-color: rgba(255, 255, 255, 0.35) !important;\n}\n\n[_nghost-%COMP%]     .mat-mdc-select-value, \n[_nghost-%COMP%]     .mat-mdc-select-placeholder {\n  color: rgba(255, 255, 255, 0.9) !important;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvcGFnZXMvcmVnaXN0ZXIvcmVnaXN0ZXIuY29tcG9uZW50LnNjc3MiLCJ3ZWJwYWNrOi8vLi8uLi8uLi8uLi8uLi9Qcm9ncmElMjBXZWIvUHJveWVjdG8lMjBmaW5hbC90ZXN0LUFjdGl2aWRhZC1zNC9jbGllbnQvc3JjL2FwcC9wYWdlcy9yZWdpc3Rlci9yZWdpc3Rlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGlCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSwwRUFBQTtFQUNBLGFBQUE7QUNDRjs7QURFQTtFQUNFLGdCQUFBO0VBQ0EsV0FBQTtBQ0NGO0FEQ0U7RUFDRSxzQkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxxQkFBQTtBQ0NKO0FERUU7RUFDRSxrQkFBQTtFQUNBLGdCQUFBO0FDQUo7QURHRTtFQUNFLGtCQUFBO0VBQ0EsbUJBQUE7QUNESjtBRElFO0VBQ0UsV0FBQTtFQUNBLGNBQUE7RUFDQSxxQkFBQTtBQ0ZKO0FES0U7RUFDRSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtBQ0hKO0FES0k7RUFDRSxjQUFBO0FDSE47QURPRTtFQUNFLHFDQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtBQ0xKO0FEUUU7RUFDRSxhQUFBO0VBQ0Esa0JBQUE7QUNOSjs7QURXQTtFQUNFLGNBQUE7QUNSRjs7QURXQTtFQUNFLG9DQUFBO0FDUkY7O0FEV0E7RUFDRSx5QkFBQTtBQ1JGOztBRFdBO0VBQ0UsMkNBQUE7QUNSRjs7QURXQTtFQUNFLDBDQUFBO0FDUkY7O0FEV0E7RUFDRSxrREFBQTtBQ1JGOztBRFdBOztFQUVFLDBDQUFBO0FDUkYiLCJzb3VyY2VzQ29udGVudCI6WyIucmVnaXN0ZXItcGFnZSB7XHJcbiAgbWluLWhlaWdodDogMTAwdmg7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsICMxYTIzN2UgMCUsICMzOTQ5YWIgNTAlLCAjNWM2YmMwIDEwMCUpO1xyXG4gIHBhZGRpbmc6IDFyZW07XHJcbn1cclxuXHJcbi5yZWdpc3Rlci1jYXJkIHtcclxuICBtYXgtd2lkdGg6IDQyMHB4O1xyXG4gIHdpZHRoOiAxMDAlO1xyXG5cclxuICBtYXQtY2FyZC1oZWFkZXIge1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxLjVyZW07XHJcbiAgfVxyXG5cclxuICBtYXQtY2FyZC10aXRsZSB7XHJcbiAgICBmb250LXNpemU6IDEuNzVyZW07XHJcbiAgICBmb250LXdlaWdodDogNzAwO1xyXG4gIH1cclxuXHJcbiAgbWF0LWNhcmQtc3VidGl0bGUge1xyXG4gICAgZm9udC1zaXplOiAwLjk1cmVtO1xyXG4gICAgbWFyZ2luLXRvcDogMC4yNXJlbTtcclxuICB9XHJcblxyXG4gIC5mdWxsLXdpZHRoIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAwLjVyZW07XHJcbiAgfVxyXG5cclxuICAuc3VibWl0LWJ0biB7XHJcbiAgICBtYXJnaW4tdG9wOiAxcmVtO1xyXG4gICAgaGVpZ2h0OiA0NHB4O1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG5cclxuICAgIC5idG4tc3Bpbm5lciB7XHJcbiAgICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLmVycm9yLW1zZyB7XHJcbiAgICBjb2xvcjogdmFyKC0tbWF0LXdhcm4tY29sb3IsICNmNDQzMzYpO1xyXG4gICAgZm9udC1zaXplOiAwLjg3NXJlbTtcclxuICAgIG1hcmdpbjogMC41cmVtIDAgMDtcclxuICB9XHJcblxyXG4gIC5jYXJkLWZvb3RlciB7XHJcbiAgICBwYWRkaW5nOiAxcmVtO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIH1cclxufVxyXG5cclxuLy8gTWlzbW8gZXN0aWxvIG9zY3VybyBxdWUgbG9naW46IGlucHV0cyBjb24gZm9uZG8gb3NjdXJvIHkgdGV4dG8gYmxhbmNvXHJcbjpob3N0IDo6bmctZGVlcCAubWF0LW1kYy1mb3JtLWZpZWxkIHtcclxuICBjb2xvcjogI2ZmZmZmZjtcclxufVxyXG5cclxuOmhvc3QgOjpuZy1kZWVwIC5tYXQtbWRjLWZvcm0tZmllbGQgLm1hdC1tZGMtdGV4dC1maWVsZC13cmFwcGVyIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMWYxZjFmICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbjpob3N0IDo6bmctZGVlcCAubWF0LW1kYy1mb3JtLWZpZWxkIC5tYXQtbWRjLWlucHV0LWVsZW1lbnQge1xyXG4gIGNvbG9yOiAjZmZmZmZmICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbjpob3N0IDo6bmctZGVlcCAubWF0LW1kYy1mb3JtLWZpZWxkIC5tYXQtbWRjLWlucHV0LWVsZW1lbnQ6OnBsYWNlaG9sZGVyIHtcclxuICBjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjY1KSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG46aG9zdCA6Om5nLWRlZXAgLm1hdC1tZGMtZm9ybS1maWVsZCBsYWJlbC5tYXQtbWRjLWZsb2F0aW5nLWxhYmVsIHtcclxuICBjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjkpICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbjpob3N0IDo6bmctZGVlcCAubWF0LW1kYy1mb3JtLWZpZWxkIC5tZGMtbm90Y2hlZC1vdXRsaW5lIHtcclxuICBib3JkZXItY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4zNSkgIWltcG9ydGFudDtcclxufVxyXG5cclxuOmhvc3QgOjpuZy1kZWVwIC5tYXQtbWRjLXNlbGVjdC12YWx1ZSxcclxuOmhvc3QgOjpuZy1kZWVwIC5tYXQtbWRjLXNlbGVjdC1wbGFjZWhvbGRlciB7XHJcbiAgY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC45KSAhaW1wb3J0YW50O1xyXG59XHJcbiIsIi5yZWdpc3Rlci1wYWdlIHtcbiAgbWluLWhlaWdodDogMTAwdmg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCAjMWEyMzdlIDAlLCAjMzk0OWFiIDUwJSwgIzVjNmJjMCAxMDAlKTtcbiAgcGFkZGluZzogMXJlbTtcbn1cblxuLnJlZ2lzdGVyLWNhcmQge1xuICBtYXgtd2lkdGg6IDQyMHB4O1xuICB3aWR0aDogMTAwJTtcbn1cbi5yZWdpc3Rlci1jYXJkIG1hdC1jYXJkLWhlYWRlciB7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWFyZ2luLWJvdHRvbTogMS41cmVtO1xufVxuLnJlZ2lzdGVyLWNhcmQgbWF0LWNhcmQtdGl0bGUge1xuICBmb250LXNpemU6IDEuNzVyZW07XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG59XG4ucmVnaXN0ZXItY2FyZCBtYXQtY2FyZC1zdWJ0aXRsZSB7XG4gIGZvbnQtc2l6ZTogMC45NXJlbTtcbiAgbWFyZ2luLXRvcDogMC4yNXJlbTtcbn1cbi5yZWdpc3Rlci1jYXJkIC5mdWxsLXdpZHRoIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBtYXJnaW4tYm90dG9tOiAwLjVyZW07XG59XG4ucmVnaXN0ZXItY2FyZCAuc3VibWl0LWJ0biB7XG4gIG1hcmdpbi10b3A6IDFyZW07XG4gIGhlaWdodDogNDRweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuLnJlZ2lzdGVyLWNhcmQgLnN1Ym1pdC1idG4gLmJ0bi1zcGlubmVyIHtcbiAgbWFyZ2luOiAwIGF1dG87XG59XG4ucmVnaXN0ZXItY2FyZCAuZXJyb3ItbXNnIHtcbiAgY29sb3I6IHZhcigtLW1hdC13YXJuLWNvbG9yLCAjZjQ0MzM2KTtcbiAgZm9udC1zaXplOiAwLjg3NXJlbTtcbiAgbWFyZ2luOiAwLjVyZW0gMCAwO1xufVxuLnJlZ2lzdGVyLWNhcmQgLmNhcmQtZm9vdGVyIHtcbiAgcGFkZGluZzogMXJlbTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG46aG9zdCA6Om5nLWRlZXAgLm1hdC1tZGMtZm9ybS1maWVsZCB7XG4gIGNvbG9yOiAjZmZmZmZmO1xufVxuXG46aG9zdCA6Om5nLWRlZXAgLm1hdC1tZGMtZm9ybS1maWVsZCAubWF0LW1kYy10ZXh0LWZpZWxkLXdyYXBwZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMWYxZjFmICFpbXBvcnRhbnQ7XG59XG5cbjpob3N0IDo6bmctZGVlcCAubWF0LW1kYy1mb3JtLWZpZWxkIC5tYXQtbWRjLWlucHV0LWVsZW1lbnQge1xuICBjb2xvcjogI2ZmZmZmZiAhaW1wb3J0YW50O1xufVxuXG46aG9zdCA6Om5nLWRlZXAgLm1hdC1tZGMtZm9ybS1maWVsZCAubWF0LW1kYy1pbnB1dC1lbGVtZW50OjpwbGFjZWhvbGRlciB7XG4gIGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNjUpICFpbXBvcnRhbnQ7XG59XG5cbjpob3N0IDo6bmctZGVlcCAubWF0LW1kYy1mb3JtLWZpZWxkIGxhYmVsLm1hdC1tZGMtZmxvYXRpbmctbGFiZWwge1xuICBjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjkpICFpbXBvcnRhbnQ7XG59XG5cbjpob3N0IDo6bmctZGVlcCAubWF0LW1kYy1mb3JtLWZpZWxkIC5tZGMtbm90Y2hlZC1vdXRsaW5lIHtcbiAgYm9yZGVyLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMzUpICFpbXBvcnRhbnQ7XG59XG5cbjpob3N0IDo6bmctZGVlcCAubWF0LW1kYy1zZWxlY3QtdmFsdWUsXG46aG9zdCA6Om5nLWRlZXAgLm1hdC1tZGMtc2VsZWN0LXBsYWNlaG9sZGVyIHtcbiAgY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC45KSAhaW1wb3J0YW50O1xufSJdLCJzb3VyY2VSb290IjoiIn0= */"]
      });
    }
  }
  return RegisterComponent;
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
//# sourceMappingURL=739.js.map