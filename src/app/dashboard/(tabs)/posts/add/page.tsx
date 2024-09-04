"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { useAutosizeTextArea } from "@/components/ui/autosize-textarea";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Editor } from "@/components/editor";
import { MinimalTiptapEditor } from "@/components/minimal-tiptap";
import { cn } from "@/lib/utils";

const formSchema = z.object({
    title: z.string().min(2, {
        message: "Title must be at least 2 characters.",
    }),
    description: z.string(),
    content: z.string().min(1, "Content is required"),
    metaTitle: z.string().optional(),
    metaDescription: z.string().optional(),
    slug: z.string().optional(),
    keywords: z.string().optional(),
    ogImage: z.string().optional(),
    ogTitle: z.string().optional(),
    ogDescription: z.string().optional(),
    robots: z.string().optional(),
});

export default function Add() {
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            title: ``,
            description: ``,
            content: ``,
            metaTitle: ``,
            metaDescription: ``,
            slug: ``,
            keywords: ``,
            ogImage: ``,
            ogTitle: ``,
            ogDescription: ``,
            robots: ``
        },
    });
    const { handleSubmit } = form;

    function onSubmit(values: z.infer<typeof formSchema>) {
        console.log(values);
    }

    const textAreaRef = useRef<HTMLTextAreaElement>(null);
    const [triggerAutoSize, setTriggerAutoSize] = useState('');
    useAutosizeTextArea({
        textAreaRef: textAreaRef?.current,
        triggerAutoSize: triggerAutoSize,
        minHeight: 25,
        maxHeight: 200,
    });

    const description = form.watch('description');
    useEffect(() => {
        if (textAreaRef.current) {
            setTriggerAutoSize(description);
        }
    }, [description]);


    return (
        <Form {...form}>
            <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col h-full space-y-8">

                <Tabs defaultValue="content" className="flex-1">
                    <div className="flex justify-between">
                        <TabsList className="mb-4">
                            <TabsTrigger value="content">Content</TabsTrigger>
                            <TabsTrigger disabled value="seo">SEO</TabsTrigger>
                        </TabsList>
                        <Button type="submit">
                            Submit
                        </Button>
                    </div>

                    <TabsContent value="content" className="flex flex-col space-y-8">
                        <FormField
                            control={form.control}
                            name="title"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel className="text-lg font-semibold">Title</FormLabel>
                                    <FormControl>
                                        <Input
                                            type="text"
                                            placeholder="Enter your blog title"
                                            autoFocus
                                            className="border rounded-md p-2 text-xl placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-indigo-500"
                                            {...field}
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="description"
                            render={({ field }) => (
                                <FormItem className="flex flex-col">
                                    <FormLabel className="text-lg font-semibold">Description</FormLabel>
                                    <FormControl>
                                        <Textarea
                                            placeholder="Write a brief description"
                                            className="w-full border rounded-md p-2 placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-indigo-500 resize-none"
                                            {...field}
                                            ref={textAreaRef}
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="content"
                            render={({ field }) => (
                                <FormItem className="flex flex-col flex-1">
                                    <FormLabel className="text-lg font-semibold">Content</FormLabel>
                                    <FormControl className="flex-1">
                                        <MinimalTiptapEditor
                                            value={field.value}
                                            onValueChange={field.onChange}
                                            throttleDelay={2000}
                                            className={cn('w-full', {
                                                'border-destructive focus-within:border-destructive': form.formState.errors.content,
                                            })}
                                            editorContentClassName="p-5"
                                            initialContent={field.value || ''}
                                            output="text"
                                            placeholder="Type your content here..."
                                            editorClassName="focus:outline-none"
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                    </TabsContent>

                    <TabsContent value="seo" className="space-y-6">
                        <FormField
                            control={form.control}
                            name="metaTitle"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel className="text-lg font-semibold">Meta Title</FormLabel>
                                    <FormControl>
                                        <Input
                                            type="text"
                                            placeholder="SEO Title"
                                            className="border rounded-md p-2 text-xl placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-indigo-500"
                                            {...field}
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="metaDescription"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel className="text-lg font-semibold">Meta Description</FormLabel>
                                    <FormControl>
                                        <Textarea
                                            placeholder="SEO Description"
                                            className="w-full border rounded-md p-2 placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-indigo-500 resize-none"
                                            {...field}
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="slug"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel className="text-lg font-semibold">Slug</FormLabel>
                                    <FormControl>
                                        <Input
                                            type="text"
                                            placeholder="post-url-slug"
                                            className="border rounded-md p-2 text-xl placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-indigo-500"
                                            {...field}
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="keywords"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel className="text-lg font-semibold">Keywords</FormLabel>
                                    <FormControl>
                                        <Input
                                            type="text"
                                            placeholder="keyword1, keyword2, keyword3"
                                            className="border rounded-md p-2 text-xl placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-indigo-500"
                                            {...field}
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="ogImage"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel className="text-lg font-semibold">Open Graph Image URL</FormLabel>
                                    <FormControl>
                                        <Input
                                            type="text"
                                            placeholder="https://example.com/image.jpg"
                                            className="border rounded-md p-2 text-xl placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-indigo-500"
                                            {...field}
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="ogTitle"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel className="text-lg font-semibold">Open Graph Title</FormLabel>
                                    <FormControl>
                                        <Input
                                            type="text"
                                            placeholder="Title for social media"
                                            className="border rounded-md p-2 text-xl placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-indigo-500"
                                            {...field}
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="ogDescription"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel className="text-lg font-semibold">Open Graph Description</FormLabel>
                                    <FormControl>
                                        <Textarea
                                            placeholder="Description for social media"
                                            className="w-full border rounded-md p-2 placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-indigo-500 resize-none"
                                            {...field}
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="robots"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel className="text-lg font-semibold">Robots Meta Tag</FormLabel>
                                    <FormControl>
                                        <Input
                                            type="text"
                                            placeholder="index, follow"
                                            className="border rounded-md p-2 text-xl placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-indigo-500"
                                            {...field}
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                    </TabsContent>
                </Tabs>
            </form>
        </Form>


    );
}

