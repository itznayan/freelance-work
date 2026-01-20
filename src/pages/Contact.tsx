import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  insertContactMessageSchema,
  type InsertContactMessage,
} from "@shared/schema";
import { useSubmitContact } from "@/hooks/use-contact";
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
import { Mail, Phone, MapPin, Loader2 } from "lucide-react";
import StickyFooter from "../components/Footer/StickyFooter";
import Eyes from "../components/Eyes";
import TextAni from "../components/TextAni";
export default function Contact() {
  const mutation = useSubmitContact();

  const form = useForm<InsertContactMessage>({
    resolver: zodResolver(insertContactMessageSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      businessName: "",
      message: "",
    },
  });

  const onSubmit = (data: InsertContactMessage) => {
    mutation.mutate(data, {
      onSuccess: () => form.reset(),
    });
  };

  return (
    <div className="min-h-screen bg-zinc-950 font-body">
      <section className="pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <TextAni delay={0.75} blockColor="#94A3B8">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-6xl text-zinc-200 font-mono font-bold mb-6"
            >
              Let's Talk Coffee & Growth
            </motion.h1>
          </TextAni>

          <TextAni delay={0.75} blockColor="#94A3B8">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-xl text-muted-foreground max-w-2xl text-zinc-300 mx-auto"
            >
              Ready to elevate your online presence? Fill out the form below or
              book a call directly.
            </motion.p>
          </TextAni>
        </div>
      </section>

      <Eyes />
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
            >
              <TextAni blockColor="#94A3B8">
                <h2 className="text-3xl font-display text-zinc-100 font-bold mb-8">
                  Get in Touch
                </h2>
              </TextAni>

              <TextAni blockColor="#94A3B8">
                <p className="text-lg text-zinc-200 mb-12">
                  We're based in the city but work with cafés globally. Whether
                  you have a question About our services or want a custom quote,
                  we're here to help.
                </p>
              </TextAni>

              <div className="space-y-8">
                {/* EMAIL */}
                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-secondary rounded-xl text-accent">
                    <Mail className="h-6 w-6" />
                  </div>
                  <div>
                    <TextAni blockColor="#94A3B8">
                      <h3 className="font-bold text-lg mb-1 font-mono text-zinc-200">
                        Email Us
                      </h3>
                    </TextAni>

                    <TextAni blockColor="#94A3B8">
                      <p className="font-mono text-zinc-300">
                        hello@espressomedia.com
                      </p>
                    </TextAni>

                    <TextAni blockColor="#94A3B8">
                      <p className="font-mono text-zinc-300">
                        support@espressomedia.com
                      </p>
                    </TextAni>
                  </div>
                </div>

                {/* PHONE */}
                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-secondary rounded-xl text-accent">
                    <Phone className="h-6 w-6" />
                  </div>
                  <div>
                    <TextAni blockColor="#94A3B8">
                      <h3 className="font-bold text-lg mb-1 font-mono text-zinc-100">
                        Call Us
                      </h3>
                    </TextAni>

                    <TextAni blockColor="#94A3B8">
                      <p className="text-zinc-300">+1 (555) 000-0000</p>
                    </TextAni>

                    <TextAni blockColor="#94A3B8">
                      <p className="text-sm text-zinc-300 mt-1">
                        Mon-Fri from 9am to 6pm
                      </p>
                    </TextAni>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Form */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="bg-stone-300 p-8 md:p-10 rounded-3xl shadow-xl shadow-black/5 border border-border/50"
            >
              <h3 className="text-2xl font-bold mb-6">Send a Message</h3>
              <Form {...form}>
                <form
                  onSubmit={form.handleSubmit(onSubmit)}
                  className="space-y-6"
                >
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Name</FormLabel>
                          <FormControl>
                            <Input
                              placeholder="John Doe"
                              className="bg-secondary/30 border-transparent focus:bg-white transition-colors h-12"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="businessName"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Business Name</FormLabel>
                          <FormControl>
                            <Input
                              placeholder="Cool Beans Café"
                              className="bg-secondary/30 border-transparent focus:bg-white transition-colors h-12"
                              value={field.value || ""}
                              onChange={field.onChange}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Email</FormLabel>
                          <FormControl>
                            <Input
                              placeholder="john@example.com"
                              type="email"
                              className="bg-secondary/30 border-transparent focus:bg-white transition-colors h-12"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="phone"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Phone (Optional)</FormLabel>
                          <FormControl>
                            <Input
                              placeholder="+1 (555) ..."
                              className="bg-secondary/30 border-transparent focus:bg-white transition-colors h-12"
                              value={field.value || ""}
                              onChange={field.onChange}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Message</FormLabel>
                        <FormControl>
                          <Textarea
                            placeholder="Tell us About  your café and what you're looking for..."
                            className="bg-secondary/30 border-transparent focus:bg-white transition-colors min-h-[150px] resize-none"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <button
                    type="submit"
                    disabled={mutation.isPending}
                    className="w-full py-4 rounded-xl bg-primary text-primary-foreground font-bold text-lg shadow-lg shadow-primary/20 hover:shadow-xl hover:-translate-y-0.5 disabled:opacity-70 disabled:translate-y-0 disabled:shadow-none transition-all duration-300"
                  >
                    {mutation.isPending ? (
                      <span className="flex items-center justify-center space-x-2">
                        <Loader2 className="h-5 w-5 animate-spin" />
                        <span>Sending...</span>
                      </span>
                    ) : (
                      "Send Message"
                    )}
                  </button>
                </form>
              </Form>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
