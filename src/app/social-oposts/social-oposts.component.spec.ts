import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SocialOpostsComponent } from './social-oposts.component';

describe('SocialOpostsComponent', () => {
  let component: SocialOpostsComponent;
  let fixture: ComponentFixture<SocialOpostsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SocialOpostsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SocialOpostsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
