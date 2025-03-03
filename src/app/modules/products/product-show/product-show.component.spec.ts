import { TestBed } from '@angular/core/testing'
import type { ComponentFixture } from '@angular/core/testing'

import { ProductShowComponent } from './product-show.component'

describe('ProductShowComponent', () => {
  let component: ProductShowComponent
  let fixture: ComponentFixture<ProductShowComponent>

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProductShowComponent]
    })
    fixture = TestBed.createComponent(ProductShowComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
