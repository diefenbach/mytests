import { WsModule } from './ws.module';

describe('WsModule', () => {
  let wsModule: WsModule;

  beforeEach(() => {
    wsModule = new WsModule();
  });

  it('should create an instance', () => {
    expect(wsModule).toBeTruthy();
  });
});
