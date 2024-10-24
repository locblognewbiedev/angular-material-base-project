import { AfterViewInit, Component } from '@angular/core';
import Product from '../../../models/product.type';
import Category from '../../../models/category.type';
import Brand from '../../../models/brand.type';
import { ProductService } from '../product.service';
import { ActivatedRoute, Router} from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrl: './product-create.component.scss'
})
export class ProductCreateComponent implements AfterViewInit {
  product: Product | undefined;
  categories: Category[] = [];
  brands: Brand[] = [];
  constructor(
    private productService: ProductService,
    private snackBar: MatSnackBar,
    private router: Router) { }
  ngAfterViewInit(): void {
    this.productService.getAllCategory().subscribe((categories) => {
      this.categories = categories;
    });
    this.productService.getAllBrand().subscribe((brands) => {
      this.brands = brands
    })
  }
  onProductOutput(product: Product) {
    this.productService.createProduct(product).subscribe(() => {
      // Xử lý khi cập nhật thành công
      this.snackBar.open('tạo sản phẩm thành công!', 'Đóng', {
        duration: 3000,  // Thời gian hiển thị snackbar
        verticalPosition: 'top'  // Vị trí hiển thị snackbar
      });
      // Điều hướng về trang danh sách sản phẩm
      this.router.navigate(['/admin/products']);
    },
    (error) => {
      this.snackBar.open('Cập nhật sản phẩm thất bại!', 'Đóng', {
        duration: 3000,
        verticalPosition: 'top'
      });
    })
    console.log(product)
  }
}
