export type Mapper <T, P> = (_data: T) => P;
export type ListMapper <T, P> = (_data: T[] | undefined) => P[] | undefined;
