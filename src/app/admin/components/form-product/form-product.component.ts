import { Component, OnInit } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/storage';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { finalize } from 'rxjs/operators';
import { ProductsService } from 'src/app/core/services/products/products.service';
import { Product } from '../../../product.model';
import { MyValidators } from '../../../utils/validators';
import { Observable } from 'rxjs';
// TRAEMOS FORM BUILDER Y FORMGROUP PARA TENER VARIOS CONTROLADORES

@Component({
  selector: 'app-form-product',
  templateUrl: './form-product.component.html',
  styleUrls: ['./form-product.component.scss']
})
export class FormProductComponent implements OnInit {

  form: FormGroup;
  // asi declaramos un obsejvable par utilziar un asyn
  image$: Observable<any>;
  constructor(
    // forma builder es una inyección asi como un servicio
    private formBuilder: FormBuilder,
    private productsService: ProductsService,
    private router: Router,
    private storage: AngularFireStorage
  ) {
    // ya que estamos contruyendo nuestro formulari, lo llamamos en el constructor
    this.buildForm();
  }

  ngOnInit(): void {
  }

  saveProduct(event: Event): void{
    event.preventDefault();
    if (this.form.valid) {
      const product: Product = this.form.value;
      this.productsService.createProduct(product)
      .subscribe((newProduct) => {
        console.log(newProduct);
        this.router.navigate(['/admin/products']);
      });
    }
  }

  uploadFile(event): any{
    const file = event.target.files[0];
    // console.log(file);
    // const name = `/ruta/${file.name}`;
    const name = `${file.name}`;
    const fileRef = this.storage.ref(name);
    const task = this.storage.upload(name, file);
    task.snapshotChanges()
    .pipe(
      finalize(() => {
        this.image$ = fileRef.getDownloadURL();
        // tslint:disable-next-line: deprecation
        this.image$.subscribe(url => {
          console.log(url);
          this.form.get('image').setValue(url);
        });
      })
    )
    // tslint:disable-next-line: deprecation
    .subscribe();
  }

  private buildForm(): void{
    this.form = this.formBuilder.group({
      id: ['', [Validators.required]],
      title: ['', [Validators.required]],
      price: ['', [Validators.required, MyValidators.isPriceValid]],
      image: ['', [Validators.required]],
      description: ['', [Validators.required]],
    });
  }

  get priceField(): any{
    return this.form.get('price');
  }

}
