import { Link } from "react-router-dom";

export default function Root() {
    return (
        <>
            <div id="sidebar">
                <h1>React Router Contacts</h1>
                <div>
                    <form id="search-form" role="search">
                        <input
                            id="q"
                            aria-label="Search contacts"
                            placeholder="Search"
                            type="search"
                            name="q"
                        />
                        <div
                            id="search-spinner"
                            aria-hidden
                            hidden={true}
                        />
                        <div
                            className="sr-only"
                            aria-live="polite"
                        ></div>
                    </form>
                    <form method="post">
                        <button type="submit">New</button>
                    </form>
                </div>
                <nav>
                    <ul>
                        <li>
                            <Link to={`/sign-in`}>Sign In</Link>
                        </li>
                        <li>
                            <Link to={`/sign-up`}>Sign Up</Link>
                        </li>
                        <li>
                            <Link to={`/organiza/dashboard`}>Dashboard</Link>
                        </li>
                        <li>
                            <Link to={`/organiza/income-and-expense`}>Income Expense</Link>
                        </li>
                        <li>
                            <Link to={`/organiza/investment`}>Investment</Link>
                        </li>
                        <li>
                            <Link to={`/organiza/budget`}>Budget</Link>
                        </li>
                        <li>
                            <Link to={`/organiza/notification`}>Notification</Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </>
    );
}
