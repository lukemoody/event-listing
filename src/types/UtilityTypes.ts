/**
 * Read-only Prop Type
 */
export type ReadonlyProps<T> = {
    readonly [P in keyof T]: T[P];
};
