"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { formSchema } from "./form-example-schema";

import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import { useForm } from "react-hook-form";
import TextInput from "./form-inputs/text-input";

export function FormExample() {
  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {},
  });

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {
    // TODO: Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-8 max-w-[350px] sm:max-w-none"
      >
        <TextInput
          name="firstName"
          label="Nom"
          form={form}
          placeholder="Ex: Samatar Moussa Barkadleh"
        />
        <TextInput
          name="email"
          label="Email"
          form={form}
          placeholder="Ex: Samatar@gmail.com"
        />
        <Button type="submit" className="mb-2">
          Réserver la séance
        </Button>
      </form>
    </Form>
  );
}
