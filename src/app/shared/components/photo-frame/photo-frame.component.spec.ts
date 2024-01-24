import {PhotoFrameComponent} from './photo-frame.component';
import {ComponentFixture, TestBed} from '@angular/core/testing';
import {PhotoFrameModule} from './photo-frame.module';

describe(PhotoFrameComponent.name, () => {

  // precisamos da fixture porque queremos testar o component
  let fixture: ComponentFixture<PhotoFrameComponent> = null;
  let component: PhotoFrameComponent;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PhotoFrameModule]
    }).compileComponents();

    fixture = TestBed.createComponent(PhotoFrameComponent);
    component = fixture.componentInstance;
  });

  it('Should create component', () => {
    expect(component).toBeTruthy();
  });
});
