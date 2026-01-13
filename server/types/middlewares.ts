import type { Express } from 'express';

export type ExpressSetupFunction = (app: Express) => void;