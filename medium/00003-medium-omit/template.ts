type MyOmit<T, K extends keyof T> = {
    [H in keyof T as H extends K ? never : H]: T[H]
}
