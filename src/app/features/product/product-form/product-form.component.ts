import {  Component, EventEmitter, Input, Output, SimpleChanges } from '@angular/core';
import Product from '../../../models/product.type';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProductStatus } from '../../../enums/productStatus.enum';
import Category from '../../../models/category.type';
import Brand from '../../../models/brand.type';
import { Action } from 'rxjs/internal/scheduler/Action';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrl: './product-form.component.scss'
})
export class ProductFormComponent {
  productForm: FormGroup;
  @Input() product?: Product;
  @Input() categories: Category[] = [];
  @Input() brands: Brand[] = [];

  @Input() brandSelected ?: number;
  @Input() categorySelected?: number;

  @Output() productOutput = new EventEmitter<Product>;
  ProductStatus = ProductStatus;
  constructor(
    private fb: FormBuilder
  ) {
    this.productForm = this.fb.group({
      name: ['', Validators.required],
      image: [''],
      price: [0, [Validators.required, Validators.min(0)]],
      sold: [0, [Validators.required, Validators.min(0)]],
      remaining_quantity: [0, [Validators.required, Validators.min(0)]],
      active: [ProductStatus.Active, Validators.required],
      description: [''],
      brand_id: [0, Validators.required],
      category_id: [0, Validators.required],
    });
    this.productForm.valueChanges.subscribe((formValues) => {
      this.product = formValues
    });
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['product'] && this.product) {
      this.productForm.patchValue(this.product); // Cập nhật form
      
    }
  }
  onToggleChange() {
    if (this.product) {
      this.productForm.patchValue({
        active: this.product.active ? 1 : 0
      })
    }
  }
  ngOnInit(): void {
  }

  onSubmit() {
    this.productOutput.emit(this.product);
  }
}
