import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { AuthService } from '../features/auth/auth.service';


@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate {

  constructor(private authService: AuthService, private router: Router) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {
    // Kiểm tra xem người dùng có vai trò admin không
    const role = this.authService.getRole(); // Hàm lấy thông tin người dùng
    if (role?.includes('admin')) {
      return true; // Cho phép truy cập
    } else {
      this.router.navigate(['/']); // Chuyển hướng đến trang chính nếu không có quyền
      return false; // Không cho phép truy cập
    }
  }
}
