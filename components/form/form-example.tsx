"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { formSchema } from "./form-example-schema";

import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import { useForm } from "react-hook-form";
import TextInput from "./form-inputs/text-input";
import { dialogClose } from "../ui/dialog";
import { toast } from "sonner";

export function FormExample() {
  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: "",
      email: "",
    },
  });

  // 2. Define a submit handler.
  async function onSubmit(values: z.infer<typeof formSchema>) {
    // TODO: Do something with the form values.
    // ✅ This will be type-safe and validated.
    const request = await fetch("/api", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(values),
    });

    const response = await request.json();
    if (response.message !== "ok") {
      toast.error(response.message);
      return;
    }

    toast.success(
      "Nous vous avons envoyé un email. Merci d'avoir réservé la séance.",
      {
        className: "bg-green-500 text-white px-4 py-2 rounded-md border-none ",
      }
    );
    form.reset({
      firstName: "",
      email: "",
    });
    dialogClose();
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
