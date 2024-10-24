import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import User from '../../../models/user.type';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrl: './register-form.component.scss'
})
export class RegisterFormComponent {
  registerForm: FormGroup;
  @Output() registerFormOutput = new EventEmitter<User>();
  constructor(private fb: FormBuilder) {
    this.registerForm = this.fb.group({
      name: ['dương phước lộc', [Validators.required, Validators.minLength(4)]],
      email: ['locdung1011@gmail.com', [Validators.required, Validators.email]],
      password: ['password', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['password', Validators.required]
    }, {
      validator: this.passwordMatchValidator
    });
  }

  // Custom validator để kiểm tra mật khẩu có khớp không
  passwordMatchValidator(form: FormGroup) {
    const password = form.get('password');
    const confirmPassword = form.get('confirmPassword');
    return password && confirmPassword && password.value === confirmPassword.value
      ? null : { 'mismatch': true };
  }

  onSubmit() {
    if (this.registerForm.valid) {
      const user: User = {
        name: this.registerForm.get('name')?.value,
        email: this.registerForm.get('email')?.value,
        password: this.registerForm.get('password')?.value
      };
      this.registerFormOutput.emit(user);
    }
  }
}
