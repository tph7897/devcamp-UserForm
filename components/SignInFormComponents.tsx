import { FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import React from "react";
import { Control } from "react-hook-form";

interface FormFieldProps {
  control: Control<{ email: string; password: string }, any>;
  name: "email" | "password";
  label: string;
  placeholder?: string;
  type?: string;
  A?: boolean;
}

const SingInFormComponents: React.FC<FormFieldProps> = ({ control, name, label, placeholder, type }) => {
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem>
          <FormLabel>{label}</FormLabel>
          <FormControl>
            <Input placeholder={placeholder} type={type} {...field} />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
};

export default SingInFormComponents;
