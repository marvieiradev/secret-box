export default function UserPage({ params }: { params: { username: string } }) {
    return (
        <>
            <h1>o que você quer dizer</h1>
            <p>{params.username}</p>
        </>
    )
}