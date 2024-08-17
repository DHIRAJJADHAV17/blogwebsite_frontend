"use client";

import React from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
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
import { Button } from "@/components/ui/button";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { createBlog, updateBlog } from "@/apis/MyBlogApi";

const formSchema = z.object({
  title: z.string().nonempty({ message: "Title is required" }),
  content: z.string().nonempty({ message: "Content is required" }),
});

export type BlogFormData = z.infer<typeof formSchema>;

type Props = {
  children: React.ReactNode;
  blogData?: any; // Optional prop for editing
  onSuccess?: () => void; // Callback for refresh
};

const EditAddBlog = ({ children, blogData, onSuccess }: Props) => {
  const [dialogOpen, setDialogOpen] = React.useState(false);

  const form = useForm<BlogFormData>({
    resolver: zodResolver(formSchema),
    defaultValues: blogData || { title: "", content: "" }, // Populate form if editing
  });

  const onSubmit = async (data: BlogFormData) => {
    try {
      if (blogData) {
        // Update existing blog
        const result = await updateBlog(blogData._id, data);
        if (result) {
          form.reset();
          setDialogOpen(false);
          if (onSuccess) onSuccess(); // Trigger refresh
        }
      } else {
        // Create new blog
        const result = await createBlog(data);
        if (result) {
          form.reset();
          setDialogOpen(false);
          if (onSuccess) onSuccess(); // Trigger refresh
        }
      }
    } catch (error) {
      console.error("Error saving blog post:", error);
    }
  };

  return (
    <div>
      <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
        <DialogTrigger asChild>{children}</DialogTrigger>

        <DialogContent className="md:max-w-screen">
          <DialogHeader>
            <DialogTitle>{blogData ? "Edit Blog" : "New Blog"}</DialogTitle>
            <DialogDescription>
              Make changes to your blog post. Click save when you're done.
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)}>
                <div className="space-y-2">
                  <FormField
                    control={form.control}
                    name="title"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Title</FormLabel>
                        <FormControl>
                          <Input {...field} className="bg-white" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="content"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Content</FormLabel>
                        <FormControl>
                          <Textarea {...field} className="bg-white" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <Button type="submit">
                    {blogData ? "Update" : "Create"} Blog
                  </Button>
                </div>
              </form>
            </Form>
          </div>
          
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default EditAddBlog;
