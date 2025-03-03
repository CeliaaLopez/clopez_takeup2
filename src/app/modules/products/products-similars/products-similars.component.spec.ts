import { TestBed } from '@angular/core/testing'
import type { ComponentFixture } from '@angular/core/testing'

import { ProductsSimilarsComponent } from './products-similars.component'

describe('ProductsSimilarsComponent', () => {
  let component: ProductsSimilarsComponent
  let fixture: ComponentFixture<ProductsSimilarsComponent>

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProductsSimilarsComponent]
    })
    fixture = TestBed.createComponent(ProductsSimilarsComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
