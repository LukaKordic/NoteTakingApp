
export function NoteComponent({ title, content }: { title: string, content: string }) {
    return (
        <div>
            <p>{title}</p>
            <p>{content}</p>
        </div>
    )
}