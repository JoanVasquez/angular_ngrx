import { Action } from '@ngrx/store';

export enum TestActionTypes {
  LOAD_TESTS = '[TEST] Load Test',
  GET_TESTS = '[TEST] Get Tests',
}

export class LoadTest implements Action {
  readonly type = TestActionTypes.LOAD_TESTS;
  constructor() {}
}

export class GetTests implements Action {
  readonly type = TestActionTypes.GET_TESTS;
  constructor(public payload: any) {}
}

export type Actions = LoadTest | GetTests;
