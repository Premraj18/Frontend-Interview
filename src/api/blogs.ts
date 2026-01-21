import axios from 'axios'


export const api = axios.create({
    baseURL: 'http://localhost:3001'
})


export type Blog = {
    id: number
    title: string
    category: string[]
    description: string
    date: string
    coverImage: string
    content: string
}


export const getBlogs = async (): Promise<Blog[]> => {
    const { data } = await api.get('/blogs')
    return data
}


export const getBlogById = async (id: number): Promise<Blog> => {
    const { data } = await api.get(`/blogs/${id}`)
    return data
}


export const createBlog = async (blog: Omit<Blog, 'id'>) => {
    const { data } = await api.post('/blogs', blog)
    return data
}