import { Component } from '@angular/core';
import User from '../../../models/user.type';
import { AuthService } from '../auth.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { catchError, of } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.scss'] // Sửa thành 'styleUrls'
})
export class RegisterPageComponent {
  isProcessing = false; // Kiểm soát trạng thái của form

  constructor(
    private authService: AuthService,
    private snackBar: MatSnackBar,
    private route:Router
  ) {}

  onRegisterFormOutput(user: User) {
    console.log(user);
    // Ngăn không cho gửi nhiều request khi đang xử lý
    if (this.isProcessing) return;

    // Bắt đầu quá trình xử lý đăng ký
    this.isProcessing = true;

    // Gọi hàm register từ AuthService
    this.authService.register(user).pipe(
      catchError(err => {
        this.snackBar.open('Đăng ký thất bại. Vui lòng thử lại.', 'Đóng', {
          duration: 3000,
          verticalPosition: 'top'
        });
        console.error('Registration error:', err);
        this.isProcessing = false; // Reset trạng thái khi có lỗi
        return of(null); // Trả về giá trị null nếu có lỗi
      })
    ).subscribe(res => {
      if (res) {
        // Đăng ký thành công, hiển thị thông báo
        this.snackBar.open('Đăng ký thành công!', 'Đóng', {
          duration: 3000,
          verticalPosition: 'top'
        });
        // Thực hiện các hành động khác như điều hướng tới trang đăng nhập
        this.route.navigate(['/']);
      }

      // Reset trạng thái sau khi request hoàn tất
      this.isProcessing = false;
    });
  }
}
