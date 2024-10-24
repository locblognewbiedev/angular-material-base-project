import { AfterViewInit, Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import Product from '../../../models/product.type';
import { ProductService } from '../product.service';
import Category from '../../../models/category.type';
import Brand from '../../../models/brand.type';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-product-update',
  templateUrl: './product-update.component.html',
  styleUrl: './product-update.component.scss'
})
export class ProductUpdateComponent implements OnInit,AfterViewInit,OnChanges {
  product: Product | undefined;
  categories: Category[] = [];
  brands: Brand[] = [];
  productId: number = 0;
  constructor(
    private productService: ProductService,
    private route: ActivatedRoute,
    private snackBar: MatSnackBar,
    private router: Router,
  ) {
    
  }


  ngOnInit(): void {
  
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['product'] && changes['product'].currentValue) {
      this.product = changes['product'].currentValue;
    }
  }
  ngAfterViewInit(): void {
    const productId = this.route.snapshot.paramMap.get('id');
    this.productService.getAllCategory().subscribe((categories) => {
      this.categories = categories;
    });
    this.productService.getAllBrand().subscribe((brands) => {
      this.brands = brands
    })
    if (productId) {
      this.productService.getProductById(+productId).subscribe(
        (product) => {
          this.product = product;
        },
        (error) => {
          console.error('Có lỗi xảy ra khi lấy sản phẩm:', error);
        }
      );
    }
  }
  onProductOutput(product: Product) {
    const productId = this.route.snapshot.paramMap.get('id');
    if (productId) {
      console.log('update form',product)
      this.productService.updateProduct(+productId, product).subscribe(
        () => {
          // Xử lý khi cập nhật thành công
          this.snackBar.open('Cập nhật sản phẩm thành công!', 'Đóng', {
            duration: 3000,  // Thời gian hiển thị snackbar
            verticalPosition: 'top'  // Vị trí hiển thị snackbar
          });
          // Điều hướng về trang danh sách sản phẩm
          this.router.navigate(['/admin/products']);
        },
        (error) => {
          // Xử lý khi cập nhật thất bại
          console.error('Có lỗi xảy ra khi cập nhật sản phẩm:', error);
          this.snackBar.open('Cập nhật sản phẩm thất bại!', 'Đóng', {
            duration: 3000,
            verticalPosition: 'top'
          });
        }
      );
    }
  }
}
