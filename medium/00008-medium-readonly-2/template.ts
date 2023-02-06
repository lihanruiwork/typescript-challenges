type MyReadonly2<T, K extends keyof T = keyof T> = Omit<T, K> & {
    readonly [H in K]: T[H]
}
