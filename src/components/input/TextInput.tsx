import { Input } from '@headlessui/react';

interface IProps {
  name: string;
  id: string;
  placeholder: string;
}

export const TextInput = ({ name, id, placeholder }: IProps) => {
  return (
    <Input
      type="text"
      name={name}
      id={id}
      placeholder={placeholder}
      className="w-80 h-8 outline-none bg-indigo-50 px-2 rounded-sm focus:bg-indigo-100 inset-shadow-default"
    />
  );
};
