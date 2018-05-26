import { ObsModule } from './obs.module';

describe('ObsModule', () => {
  let obsModule: ObsModule;

  beforeEach(() => {
    obsModule = new ObsModule();
  });

  it('should create an instance', () => {
    expect(obsModule).toBeTruthy();
  });
});
