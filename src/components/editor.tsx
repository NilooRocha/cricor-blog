'use client'
import { Button } from '@/components/ui/button'
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { cn } from '@/lib/utils'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { MinimalTiptapEditor } from './minimal-tiptap'

export const Editor = () => {
  const formSchema = z.object({
    description: z
      .string({
        required_error: 'Description is required'
      })
      .min(1, 'Description is required')
  })

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      description: ''
    },
    mode: 'all'
  })

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values)
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="w-full space-y-6">
        <FormField
          control={form.control}
          name="description"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="sr-only">Description</FormLabel>
              <FormControl>
                <MinimalTiptapEditor
                  value={field.value} // Atribui o valor atual do campo ao editor
                  onValueChange={field.onChange} // Sincroniza mudanças com react-hook-form
                  throttleDelay={2000}
                  className={cn('w-full', {
                    'border-destructive focus-within:border-destructive': form.formState.errors.description
                  })}
                  editorContentClassName="p-5"
                  initialContent={field.value || ''} // Inicializa o editor com o valor atual
                  output="html"
                  placeholder="Type your description here..."
                  editorClassName="focus:outline-none"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" className="w-full">
          Submit
        </Button>
      </form>
    </Form>
  )
}
