import { useRef, useState, type ReactElement, type KeyboardEvent, type FocusEvent } from 'react';
import type { Path, FieldValues, Noop, RefCallBack } from 'react-hook-form';
import { useKeyboardNavigation } from '@client-hooks/useKeyboardNavigation';
import { convertNameToId } from '@client-utils/string';
import { clsx } from '@client-utils/clsx';
import { isEmpty } from '@client-utils/value';
import ArrowDownIcon from '@client-components/icons/ArrowDownIcon';
import type { ItemListType } from '@client-form/types/form';
import './base-select.scss';

type BaseSelectProps<T extends FieldValues, V = string> = {
    name: Path<T>,
    onBlur: Noop;
    onSelect: (item: ItemListType<V>) => void;
    value: V;
    list: ItemListType<V>[];
    fieldRef: RefCallBack;
    defaultLabel: string;
    icon: ReactElement;
};

function BaseSelect<T extends FieldValues, V = string>(props: BaseSelectProps<T, V>): ReactElement {
    const {
        name,
        onBlur,
        onSelect,
        value,
        list,
        fieldRef,
        defaultLabel,
        icon
    } = props;

    const [open, setOpen] = useState<boolean>(false);
    const [preSelectedItem, setPreSelectedItem] = useState<ItemListType<V>>();
    const itemsRef = useRef<(HTMLLIElement | null)[]>([]);
    const selectRef = useRef<HTMLInputElement|null>(null);
    const keyboardNav = useKeyboardNavigation();

    const displayValue = list.find(item => item.value === value)?.display ?? defaultLabel;

    const toggleSelect = () => {
        setPreSelectedItem(undefined);
        selectRef.current?.focus();
        setOpen((prevState) => !prevState);
    };

    const selectedItemEvent = (item: ItemListType<V>) => {
        setPreSelectedItem(undefined);
        onSelect(item);
        setOpen(false);
    };

    const handleClickItem = (item: ItemListType<V>) => {
        selectedItemEvent(item);
    };

    const handleKeyDown = (event: KeyboardEvent) => {
        keyboardNav(event, {
            up: () => {
                if (preSelectedItem === undefined) setPreSelectedItem(list[0]);
                else {
                    const currentIndex = list.indexOf(preSelectedItem);
                    const index = currentIndex - 1;
                    itemsRef.current[index]?.scrollIntoView({ block: 'center', behavior: 'smooth' });
                    if (index >= 0) setPreSelectedItem(list[index]);
                }
            },
            down: () => {
                if (preSelectedItem === undefined) setPreSelectedItem(list[0]);
                else {
                    const currentIndex = list.indexOf(preSelectedItem);
                    const index = currentIndex + 1;
                    itemsRef.current[index]?.scrollIntoView({ block: 'center', behavior: 'smooth' });
                    if (index < list.length) setPreSelectedItem(list[index]);
                }
            },
            select: () => {
                if (preSelectedItem) {
                    selectedItemEvent(preSelectedItem);
                }
            },
        });
    };

    return (
        <div className='base-select'>
            <button
                type='button'
                className={clsx('base-select__button', open && 'base-select__button--open')}
                onClick={toggleSelect}
                onKeyDown={handleKeyDown}
            >
                {icon}
                <input
                    type="text"
                    id={convertNameToId(name)}
                    name={name}
                    value={String(value ?? '')}
                    readOnly
                    ref={(e) => {
                        fieldRef(e);
                        selectRef.current = e;
                    }}
                    onBlur={(event: FocusEvent<HTMLInputElement>) => {
                        const eventRelatedTarget = event.relatedTarget;
                        if (
                            !eventRelatedTarget?.classList.contains('base-select__button')
                            || eventRelatedTarget?.closest('.select-field')?.getAttribute('data-id') !== name
                        ) setOpen(false);
                        onBlur();
                    }}
                />
                {!isEmpty(displayValue) && <span className="current-value">{displayValue}</span>}
                <span className='base-select__arrow'><ArrowDownIcon /></span>
            </button>
            {open && (
                <ul className='base-select__items'>
                    {list.map((item, index) => (
                        <li
                            key={`${index}-${item.display}`}
                            className={clsx('base-select__item', item.display === preSelectedItem?.display && 'base-select__item--pre-select')}
                            ref={(refReact) => { itemsRef.current[index] = refReact; }}
                        >
                            <button
                                className="base-select__item-button"
                                type='button'
                                onMouseDown={() => handleClickItem(item)}
                            >
                                {item.display}
                            </button>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}

export default BaseSelect;