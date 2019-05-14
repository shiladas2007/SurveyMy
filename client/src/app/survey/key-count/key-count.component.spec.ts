import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KeyCountComponent } from './key-count.component';

describe('KeyCountComponent', () => {
  let component: KeyCountComponent;
  let fixture: ComponentFixture<KeyCountComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KeyCountComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KeyCountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
