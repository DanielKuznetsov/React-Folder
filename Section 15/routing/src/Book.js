import { useParams } from "react-router-dom"

function Book() {
    const { id } = useParams()

    return (
        <div>
            <h1>Book Component {id}</h1>
        </div>
    )
}

export default Book;