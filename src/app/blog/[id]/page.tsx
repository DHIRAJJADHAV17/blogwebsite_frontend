"use client";
import { addcomment, getcomment, getSingleBlog } from "@/apis/MyBlogApi";
import CommentCard from "@/components/CommentCard";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { useParams, useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";
import withAuth from "@/lib/hof/withauth";

const formSchema = z.object({
  content: z.string().min(5, "content is required"),
  blogid: z.string(),
});

export type commentData = z.infer<typeof formSchema>;

const Page = () => {
  const { id } = useParams();
  const [blog, setBlogs] = useState<any>(null);
  const [commented, setComment] = useState<any>(null);
  const router = useRouter();

  useEffect(() => {
    if (typeof id === "string") {
      const fetchBlogData = async () => {
        try {
          const blogs = await getSingleBlog(id.toString());
          setBlogs(blogs);
        } catch (error) {
          console.error("Error fetching blog data:", error);
        }
      };

      fetchBlogData();
      const fetchCommentData = async () => {
        try {
          const res = await getcomment(id.toString());
          const respo = await res.comments;

          setComment(respo);
        } catch (error) {
          console.error("Error fetching comments data:", error);
        }
      };
      fetchCommentData();
    }
  }, []);

  const form = useForm<commentData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      blogid: id.toString(),
    },
  });

  const OnSubmit = async (data: commentData) => {
    try {
      const response = await addcomment(data);
      if (response) {
        form.reset();

        const res = await getcomment(id.toString());
        const respo = await res.comments;

        setComment(respo);
      }
    } catch (error) {
      console.error("Error adding comment:", error);
    }
  };

  if (!blog && !commented) {
    return <p>Loading...</p>;
  }

  return (
    <div className="flex flex-col px-20 pt-2 scre">
      <div className="grid md:grid-cols-2 gap-5">
        <div className="relative flex flex-col gap-4">
          <h1 className="text-3xl font-bold ">{blog[0].title}</h1>
          <div className="flex justify-between pr-8">
            <h1 className="font-light ">{blog[0].author}</h1>
            <h1 className="font-light ">{blog[0].createdOn.split("T")[0]}</h1>
          </div>

          <p className="text-justify pr-8">{blog[0].content}</p>
        </div>
        <div className="flex flex-col gap-4">
          <h1 className="text-3xl font-bold ">Comments</h1>
          <ScrollArea className=" h-80 rounded-md border ">
            <div className="p-4 ">
              <h4 className="mb-4 text-sm font-medium leading-none">Tags</h4>
              {commented &&
                commented.map((max: any, index: number) => (
                  <CommentCard key={index} data={max} />
                ))}
            </div>
          </ScrollArea>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(OnSubmit)}>
              <FormField
                control={form.control}
                name="content"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Review</FormLabel>
                    <FormControl>
                      <Input {...field} className="bg-white" type="text" />
                    </FormControl>
                    {form.formState.errors.content && (
                      <span className="text-red-500">
                        {form.formState.errors.content.message}
                      </span>
                    )}
                  </FormItem>
                )}
              />
              <div className="py-4">
                <Button type="submit" className="btn-primary">
                  ADD Comment
                </Button>
              </div>
            </form>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default withAuth(Page);
