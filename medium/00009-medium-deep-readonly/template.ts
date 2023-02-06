type DeepReadonly<T> = {
    readonly [H in keyof T]: 
        keyof T[H] extends never 
        ? T[H]
        : DeepReadonly<T[H]>
}
