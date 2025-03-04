import { ComponentFixture, TestBed } from '@angular/core/testing';
import { InfoUsComponent } from './info-us.component';

describe('IndoUsComponent', () => {
  let component: InfoUsComponent;
  let fixture: ComponentFixture<InfoUsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InfoUsComponent],
    });
    fixture = TestBed.createComponent(InfoUsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
