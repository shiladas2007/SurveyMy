import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KeyCountLComponent } from './key-count-l.component';

describe('KeyCountLComponent', () => {
  let component: KeyCountLComponent;
  let fixture: ComponentFixture<KeyCountLComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KeyCountLComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KeyCountLComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
