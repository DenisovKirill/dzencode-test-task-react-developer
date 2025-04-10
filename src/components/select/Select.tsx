'use client';

import { useEffect, useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import {
  Field,
  Label,
  Listbox,
  ListboxButton,
  ListboxOption,
  ListboxOptions,
} from '@headlessui/react';

interface IProps {
  options: string[];
  label?: string;
  selected?: string;
}

export const Select = ({ options, label, selected }: IProps) => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [selectedValue, setSelectedValue] = useState<string | null>(selected ?? null);

  useEffect(() => {
    setSelectedValue(selected ?? null);
  }, [selected]);

  const handleChange = (value: string) => {
    setSelectedValue(value);

    const params = new URLSearchParams(searchParams.toString());

    if (value) {
      params.set('type', value);
    } else {
      params.delete('type');
    }

    router.push(`?${params.toString()}`);
  };

  return (
    <Field className="flex items-center">
      {label && <Label className="opacity-50">{label}</Label>}
      <Listbox value={selectedValue} onChange={handleChange}>
        <div className="relative w-80 ml-4">
          <ListboxButton className="w-full h-8 bg-white px-2 rounded-sm border border-gray-300 shadow text-left custom-select">
            {selectedValue || 'Select type'}
          </ListboxButton>
          <ListboxOptions className="absolute mt-1 w-full rounded bg-white shadow z-10">
            <ListboxOption value="" className="cursor-pointer px-4 py-2 hover:bg-gray-100">
              All
            </ListboxOption>
            {options.map((option, idx) => (
              <ListboxOption
                key={idx}
                value={option}
                className="cursor-pointer px-4 py-2 hover:bg-gray-100"
              >
                {option}
              </ListboxOption>
            ))}
          </ListboxOptions>
        </div>
      </Listbox>
    </Field>
  );
};
