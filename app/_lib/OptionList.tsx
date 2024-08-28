export type GetLabel<T> = (t: T) => string;
export type GetValue<T> = (t: T) => string;
export interface OptionListProps<T> {
    list: T[];
    getLabel: GetLabel<T>;
    getValue: GetValue<T>;
}
export default function OptionList<T>({ list, getLabel, getValue }: OptionListProps<T>) {
    return list.map(x => <option key={getValue(x)} value={getValue(x)}>{getLabel(x)}</option>)
}