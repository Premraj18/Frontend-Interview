import { useState } from 'react'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { createBlog } from '../api/blogs'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'


export default function CreateBlog() {
    const qc = useQueryClient()
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [content, setContent] = useState('')


    const mutation = useMutation({
        mutationFn: createBlog,
        onSuccess: () => qc.invalidateQueries({ queryKey: ['blogs'] })
    })


    const submit = () => {
        mutation.mutate({
            title,
            description,
            content,
            category: ['GENERAL'],
            coverImage: 'https://images.pexels.com/photos/6801648/pexels-photo-6801648.jpeg',
            date: new Date().toISOString()
        })
    }


    return (
        <div className="space-y-3">
            <Input placeholder="Title" onChange={e => setTitle(e.target.value)} />
            <Input placeholder="Description" onChange={e => setDescription(e.target.value)} />
            <Textarea placeholder="Content" onChange={e => setContent(e.target.value)} />
            <Button onClick={submit}>Create Blog</Button>
        </div>
    )
}