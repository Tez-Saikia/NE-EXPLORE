"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "../../components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

// Zod schema for validation
const formSchema = z.object({
  name: z
    .string()
    .min(2, { message: "Name is required and must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  phone: z.string().optional(),
  subject: z.string().min(2, {
    message: "Subject is required and must be at least 2 characters.",
  }),
  message: z
    .string()
    .min(10, { message: "Message must be at least 10 characters." }),
});

function ContactForm() {
  // Initialize the form
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      subject: "", // Add this
      message: "",
    },
  });

  // Function to submit data to Firebase
  const onSubmit = async (data) => {
    try {
      console.log("Submitting data:", data); // Log form data
      const response = await fetch(
        "https://explore-northeast-default-rtdb.firebaseio.com/contacts.json",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        }
      );

      console.log("Response status:", response.status); // Log response status
      if (!response.ok) {
        const errorDetails = await response.text(); // Log error details
        console.error("Error response details:", errorDetails);
        throw new Error("Failed to send data to Firebase");
      }

      const responseData = await response.json();
      console.log("Data stored in Firebase:", responseData); // Log stored data
      alert("Message sent successfully!");

      // Clear form fields
      form.reset(); // Reset to default values
    } catch (error) {
      console.error("Error submitting form data: ", error);
      alert("Failed to send message. Please try again.");
    }
  };

  return (
    <div className="w-[63rem] h-auto p-8 bg-white ml-[16rem] rounded-lg shadow-md">
      <div className="max-w-lg mx-auto p-6 ml-[12rem]">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-14">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-[20rem] mt-28 ml-[-9rem]">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>
                      <h1 className="text-blue-700">
                        Name<span className="text-red-600">*</span>
                      </h1>
                    </FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        value={field.value || ""}
                        required
                        className="h-16 bg-gray-100 w-80 rounded-2xl"
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
                    <FormLabel>
                      <h1 className="text-blue-700">
                        Email<span className="text-red-600">*</span>
                      </h1>
                    </FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        required
                        type="email"
                        className="h-16 bg-gray-100 w-80 rounded-2xl"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-80 ml-[-9rem]">
              <FormField
                control={form.control}
                name="phone"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>
                      <h1 className="text-blue-700">Phone</h1>
                    </FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        type="tel"
                        className="h-16 bg-gray-100 w-80 rounded-2xl"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="subject"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>
                      <h1 className="text-blue-700">
                        Subject<span className="text-red-600">*</span>
                      </h1>
                    </FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        required
                        className="h-16 bg-gray-100 w-80 rounded-2xl"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <div className="-ml-36">
              <FormField
                control={form.control}
                name="message"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>
                      <h1 className="text-blue-700">
                        Message<span className="text-red-600">*</span>
                      </h1>
                    </FormLabel>
                    <FormControl>
                      <Textarea
                        {...field}
                        required
                        rows={6}
                        className="h-52 bg-gray-100 w-[50rem] rounded-2xl"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <Button
              type="submit"
              className="w-full bg-blue-600 text-white hover:bg-blue-700"
            >
              Submit
            </Button>
          </form>
        </Form>
      </div>
    </div>
  );
}

export default ContactForm;
