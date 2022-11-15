import { useState } from "react";
import { Link, Outlet, useSearchParams } from "react-router-dom"

function BookLayout() {
    const [searchParams, setSearchParams] = useSearchParams({n: 3});
    const number = searchParams.get("n")

    return (
        <>
            <ul>
                <li><Link to="/books/1">Book 1</Link></li>
                <li><Link to="/books/2">Book 2</Link></li>
                <li><Link to="/books/3">Book 3</Link></li>
                <li><Link to={`/books/${number}`}>Book {number}</Link></li>

                <Outlet context={{hello: "World"}} />
            </ul>
            <input type="number" value={number} onChange={e => setSearchParams({n: e.target.value})} />
        </>
    )
}

export default BookLayout;