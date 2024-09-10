"use client";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

const FormSchema = z.object({
  fullName: z.string().min(2, {
    message: "Fullname must be at least 2 characters.",
  }),
  mobileNumber: z
    .string()
    .min(10, {
      message: "Invalid mobile number, Min: 10",
    })
    .regex(/^\+?[1-9]\d{1,14}$/, {
      message: "Invalid mobile number format.",
    }),
  email: z.string().email(),
});

export default function ContactUsForm() {
  const { toast } = useToast();

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      fullName: "",
      mobileNumber: "",
      email: "",
    },
  });

  function onSubmit() {
    toast({
      title: "Form has been Submitted!",
      description: <p>We will connect with you shortly.</p>,
    });
    form.reset();
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="w-full sm:max-w-[50%] lg:max-w-[60%] mx-auto space-y-4 mt-[18px]"
      >
        <FormField
          control={form.control}
          name="fullName"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-white">Full Name</FormLabel>
              <FormControl>
                <Input
                  className="rounded-[10px] text-white h-[40px]"
                  placeholder="Rahul Sharma"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="mobileNumber"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-white">Mobile Number</FormLabel>
              <FormControl>
                <Input
                  className="rounded-[10px] text-white h-[40px]"
                  placeholder="+91 1234567890"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-white">Email Address</FormLabel>
              <FormControl>
                <Input
                  className="rounded-[10px] text-white h-[40px]"
                  placeholder="rahul@gmail.com"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="my-[18px] w-full">
          <Button
            type="submit"
            size="lg"
            className="bg-pixelgo-brand hover:bg-pixelgo-brand/80 my-[18px] w-full rounded-[10px]"
          >
            Get Free Consultation
          </Button>
        </div>
      </form>
    </Form>
  );
}
