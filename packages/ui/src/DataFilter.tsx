import { ReactNode } from 'react';
import { FormSelect } from './formComponents/formSelect';
import { FormCombobox } from './formComponents/FormCombobox';

export interface FilterOption {
    label: string;
    value: string | number | null;
    keywords?: string[];
}

export interface SelectFilterOption {
    label: ReactNode;
    value: string;
}

export interface ComboboxFilterConfig {
    type: 'combobox';
    placeholder: string;
    emptyLabel: string;
    value: string | number | null;
    onChange: (value: string | number | null) => void;
    options: FilterOption[];
}

export interface SelectFilterConfig {
    type: 'select';
    placeholder: string;
    value: string;
    onChange: (value: string) => void;
    selectOptions: SelectFilterOption[];
}

export type FilterConfig =
    | ComboboxFilterConfig
    | SelectFilterConfig

interface DataFiltersProps {
    filters: FilterConfig[];
    className?: string;
}

export function DataFilters({ filters, className = '' }: DataFiltersProps) {
    // Generate responsive grid classes based on filter count
    const getGridClasses = (count: number) => {
        const baseClasses = 'grid grid-cols-1 gap-4';

        if (count <= 1) return `${baseClasses} md:grid-cols-1`;
        if (count <= 2) return `${baseClasses} md:grid-cols-2`;
        if (count <= 3) return `${baseClasses} md:grid-cols-2 lg:grid-cols-3`;
        if (count <= 4) return `${baseClasses} md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4`;
        if (count <= 5) return `${baseClasses} md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5`;
        if (count <= 6) return `${baseClasses} md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6`;

        // For more than 6 filters, use a more conservative approach
        return `${baseClasses} md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-6`;
    };

    return (
        <div className="shrink-0 px-6 pb-4">
            <div className={`bg-card rounded-lg p-4 border ${className}`}>
                <div className={getGridClasses(filters.length)}>
                    {filters.map((filter, index) => {
                        switch (filter.type) {
                            // case 'combobox':
                            //     return (
                            //         <FormCombobox
                            //             key={index}
                            //             emptyLabel={filter.emptyLabel}
                            //             options={filter.options || []}
                            //             placeholder={filter.placeholder}
                            //             value={filter.value}
                            //             onChange={filter.onChange}
                            //         />
                            //     );
                            case 'select':
                                return (
                                    <FormSelect
                                        key={index}
                                        value={filter.value}
                                        onValueChange={filter.onChange}
                                        options={[]}
                                        placeholder={filter.placeholder}
                                    />
                                );
                            default:
                                return null;
                        }
                    })}
                </div>
            </div>
        </div>
    );
}
