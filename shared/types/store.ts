import type { Store, UnknownAction } from '@reduxjs/toolkit';

export type SSRStore<State = unknown, Action extends UnknownAction = UnknownAction> = Store<State, Action>;