/** Mark all properties of an object as `Original | Requested` */
export type OrType<T, U> = {
  [K in keyof T]: T[K] | U;
};
