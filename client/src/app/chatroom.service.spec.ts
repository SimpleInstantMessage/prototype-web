import {
  beforeEachProviders,
  it,
  describe,
  expect,
  inject
} from '@angular/core/testing';
import { ChatroomService } from './chatroom.service';

describe('Chatroom Service', () => {
  beforeEachProviders(() => [ChatroomService]);

  it('should ...',
      inject([ChatroomService], (service: ChatroomService) => {
    expect(service).toBeTruthy();
  }));
});
