type MyReturnType<T> = 
    T extends (...args: any) => infer P 
        ? P
        : never


// type MyReturnType<T> =  T extends (...args: any[]) => infer R ? R : never