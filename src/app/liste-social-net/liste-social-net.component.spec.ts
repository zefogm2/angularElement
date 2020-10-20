import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeSocialNetComponent } from './liste-social-net.component';

describe('ListeSocialNetComponent', () => {
  let component: ListeSocialNetComponent;
  let fixture: ComponentFixture<ListeSocialNetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListeSocialNetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListeSocialNetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
