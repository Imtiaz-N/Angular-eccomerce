import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeEssentialComponent } from './home-essential.component';

describe('HomeEssentialComponent', () => {
  let component: HomeEssentialComponent;
  let fixture: ComponentFixture<HomeEssentialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomeEssentialComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeEssentialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
