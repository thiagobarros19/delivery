import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Product } from 'src/app/model/application';
import { CartService } from 'src/app/services/cart.service';
import { phoneMask } from '../../masks';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent implements OnInit {

  public form!: FormGroup;

  constructor(
    private readonly _dialogRef: MatDialogRef<OrderComponent>,
    private readonly _fb: FormBuilder
  ) { }

  ngOnInit(): void {
    this.form = this._fb.group({
      products: [[]],
      name: [null, [Validators.required]],
      phone: [null, [Validators.required]],
      cep: [null, [Validators.required]],
      address: [null, [Validators.required]],
      complement: [null],
      neighborhood: [null, [Validators.required]],
      city: [null, [Validators.required]],
      state: [null, [Validators.required]],
    })
  }

  get products(): Product[] {
    return this.form.get('products')?.value;
  }

  onCancelClick(): void {
    this._dialogRef.close();
  }

  onConfirmClick(): void {
    if(!this.form.valid) {
      this.form.markAllAsTouched();
      return;
    }

    this._dialogRef.close(this.form.getRawValue());
  }
}
