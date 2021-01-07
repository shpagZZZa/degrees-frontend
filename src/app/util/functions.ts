export function distinct<T>(array: Array<T>, inArrayResolver: (el: T, arr: Array<T>) => boolean): Array<T> {
    const res = Array<T>();
    array.forEach(
        el => {
            if (!inArrayResolver(el, res)) {
                res.push(el);
            }
        }
    );
    return res;
}
