import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { faImage } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.scss']
})
export class ProductFormComponent implements OnInit {
  faImage = faImage;

  productForm!: FormGroup;
  files: File[] = [];

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.productForm = this.formBuilder.group({
      categoria: [null, [Validators.required, Validators.maxLength(20)]],
      name: [null, [Validators.required, Validators.maxLength(20)]],
      description: [null, [Validators.required, Validators.maxLength(150)]],
      price: [null, Validators.required]
    });
  }

  upload() {
    console.log('upload');
  }

  onSelect(event: { addedFiles: any; }) {
    console.log(event);
    this.files.push(...event.addedFiles);
  }
  
  onRemove(event: File) {
    console.log(event);
    this.files.splice(this.files.indexOf(event), 1);
  }

}
