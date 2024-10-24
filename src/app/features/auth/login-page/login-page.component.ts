import { Component } from '@angular/core';
import User from '../../../models/user.type';
import { AuthService } from '../auth.service';
import { catchError, map } from 'rxjs/operators';
import { of } from 'rxjs';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.scss'
})
export class LoginPageComponent {
  isProcess = false;
  constructor(
    private authService: AuthService,
    private snackBar: MatSnackBar,
    private router: Router
  ){}
  onLoginFormOutput(user: User) {
    if (this.isProcess) return;
    this.isProcess = true;

    this.authService.login(user).pipe(
      catchError(err => {
        this.snackBar.open('Sai tên đăng nhập hoặc mật khẩu.', 'Đóng', {
          duration: 3000,
          verticalPosition: 'top'
        });
        this.isProcess = false;
        console.error('Login error:', err);
        return of(null); // Trả về giá trị null nếu có lỗi
      })
    ).subscribe(res => {
      if (res) {
        // Đăng nhập thành công, hiển thị thông báo
        this.snackBar.open('Đăng nhập thành công!', 'Đóng', {
          duration: 3000,
          verticalPosition: 'top'
        });
        this.isProcess = false
        if (res?.role.includes('admin')) {
          this.router.navigate(['/admin']);
        } else {
          this.router.navigate(['/']);
        }
      }
    });
  }
}
