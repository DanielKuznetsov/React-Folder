import { useEffect } from "react";
import { Navigate, useNavigate } from "react-router-dom";

function NotFoundPage() {
    const navigate = useNavigate();

    useEffect(() => {
        setTimeout(() => {
            navigate("/") // -1 to go 1 page back
        }, 1000);
    }, []);

    return (
        // <Navigate to="/" />
        <h1>Not Found!</h1>
    )
}

export default NotFoundPage;