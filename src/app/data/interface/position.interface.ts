export interface PositionInterface {
    id: number;
    title: string;
}

export function inArrayPosition(pos: PositionInterface, arr: Array<PositionInterface>): boolean {
    for (const el of arr) {
        if (el.id === pos.id) {
            return true;
        }
    }
    return false;
}
