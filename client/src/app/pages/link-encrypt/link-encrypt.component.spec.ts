import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LinkEncryptComponent } from './link-encrypt.component';

describe('LinkEncryptComponent', () => {
  let component: LinkEncryptComponent;
  let fixture: ComponentFixture<LinkEncryptComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LinkEncryptComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LinkEncryptComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
