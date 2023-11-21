export default function UserProfile({params}: any) {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen py-2">
            <h1>
                Profile Page
            </h1>
            <hr />
            <p className="text-2xl mt-2"> id: <span className="p-2 ml-2 rounded bg-orange-500"> {params.id}</span></p>
        </div>
    )
}