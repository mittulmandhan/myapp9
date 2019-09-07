import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styles: []
})
export class ProductComponent implements OnInit {
  id: number;
  constructor(private router: ActivatedRoute) { }

  ngOnInit() {
    this.router.params.subscribe((p) => {
      this.id = p.id;
    });
  }

}
