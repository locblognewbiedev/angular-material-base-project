import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import Product from '../../../models/product.type';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ConfirmDialogComponent } from '../../../shared/confirm-dialog/confirm-dialog.component';
import { ConfirmDialogService } from '../../../shared/confirm-dialog.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.scss'
})
export class ProductListComponent implements OnInit {
  products: Product[] = [];
  displayedColumns: string[] = ['id','name', 'image', 'price', 'sold', 'remaining_quantity', 'active', 'brand_id', 'category_id','update','delete']; // Các cột hiển thị

  constructor(
    private productService: ProductService,
    private snackBar: MatSnackBar,
    private dialog: MatDialog,
    private router: Router,
    private confirmDialogService:ConfirmDialogService
  ) { }
  
  ngOnInit(): void {
    this.productService.getAllProduct().subscribe((data: Product[]) => {
      this.products = data;
    });
  }
  deleteProduct(id: number): void {
    const dialogRef = this.confirmDialogService.confirm('do you want delete product').subscribe((result) => {
      if (result) {
        this.productService.deleteProduct(id).subscribe(
                () => {
                  this.loadProducts();
                  this.snackBar.open('Xóa sản phẩm thành công!', 'Đóng', {
                    duration: 3000,
                    verticalPosition: 'top'
                  });
                  this.router.navigate(['/products']);
                },
                (error) => {
                  console.error('Có lỗi xảy ra khi xóa sản phẩm:', error);
                  this.snackBar.open('Xóa sản phẩm thất bại!', 'Đóng', {
                    duration: 3000,
                    verticalPosition: 'top'
                  });
                }
              );
      }
    })
  }
  private loadProducts() {
    this.productService.getAllProduct().subscribe(
      (products) => {
        // Cập nhật lại danh sách sản phẩm trong component
        this.products = products; // Giả sử bạn có biến 'products' để lưu danh sách sản phẩm
      },
      (error) => {
        console.error('Có lỗi xảy ra khi lấy danh sách sản phẩm:', error);
      }
    );
  }
}
