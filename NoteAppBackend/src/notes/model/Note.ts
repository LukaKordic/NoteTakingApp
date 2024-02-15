export class Note {
    id: string
    title: string
    content: string
    createdAt: number
    updatedAt: number

    constructor(id: string, title: string, content: string, createdAt: number, updateAt: number) {
        this.id = id
        this.title = title
        this.content = content
        this.createdAt = createdAt
        this.updatedAt = updateAt
    }
}