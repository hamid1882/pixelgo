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
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

const FormSchema = z.object({
  Name_First: z.string().min(2, {
    message: "Fullname must be at least 2 characters.",
  }),
  PhoneNumber_countrycode: z
    .string()
    .min(10, {
      message: "Invalid mobile number, Min: 10",
    })
    .regex(/^\+?[1-9]\d{1,14}$/, {
      message: "Invalid mobile number format.",
    }),
  Email: z.string().email(),
});

export default function ContactUsForm() {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      Name_First: "",
      PhoneNumber_countrycode: "",
      Email: "",
    },
  });

  return (
    <Form {...form}>
      <form
        action="https://forms.zohopublic.in/touheedbusinessgm1/form/ContactUs/formperma/bIy9hYSCOCq7NUI7c7eNgD5JQLgsXa-V6Se8OV4JJ98/htmlRecords/submit"
        name="form"
        id="form"
        method="POST"
        accept-charset="UTF-8"
        className="w-full sm:max-w-[50%] lg:max-w-[60%] mx-auto space-y-4 mt-[18px]"
      >
        <input type="hidden" name="zf_referrer_name" value="" />
        <input type="hidden" name="zf_redirect_url" value="" />
        <input type="hidden" name="zc_gad" value="" />
        <input type="hidden" name="Name_Last" placeholder="" value={" "} />
        <input type="hidden" name="SingleLine" value=" " placeholder="" />
        <FormField
          control={form.control}
          name="Name_First"
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
          name="PhoneNumber_countrycode"
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
          name="Email"
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
            className="bg-pixelgo-brand hover:bg-pixelgo-brand/80 my-[18px] w-full rounded-[10px] text-black"
          >
            Get Free Consultation
          </Button>
        </div>
      </form>
    </Form>
  );
}
