export type Path<T> = {
  [K in keyof T]-?: T[K] extends object
    ? `${K & string}` | `${K & string}.${Path<T[K]>}`
    : `${K & string}`;
}[keyof T];