import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Transactions from "./pages/Transactions.jsx";
import Customer from "./pages/Customer.jsx";
import Subscriptions from "./pages/Subscriptions.jsx";
import Plans from "./pages/Plans.jsx";
import TransactionSplits from "./pages/TransactionSplits.jsx";
import Subaccounts from "./pages/Subaccounts.jsx";

export const App = () => (
    <Router>
        <nav>
            <ul style={{ display: "flex", gap: "4rem" }}>
                <li>
                    PAYMENTS
                    <ul>
                        <li>
                            <Link to="/transactions">Transactions</Link>
                        </li>
                        <li>
                            <Link to="/transaction-splits">
                                Transaction Splits
                            </Link>
                        </li>
                        <li>
                            <Link to="/customer">Customers</Link>
                        </li>
                        <li>
                            <Link to="/subaccounts">
                                Subaccounts
                            </Link>
                        </li>
                    </ul>
                </li>
                <li>
                    RECURRING
                    <ul>
                        <li>
                            <Link to="/plans">Plans</Link>
                        </li>
                        <li>
                            <Link to="/subscriptions">Subscriptions</Link>
                        </li>
                    </ul>
                </li>
            </ul>
        </nav>
        <Routes>
            <Route path="/transactions" element={<Transactions />} />
            <Route path="/transaction-splits" element={<TransactionSplits />} />
            <Route path="/customer" element={<Customer />} />
            <Route path="/subaccounts" element={<Subaccounts />} />

            <Route path="/plans" element={<Plans />} />
            <Route path="/subscriptions" element={<Subscriptions />} />
        </Routes>
    </Router>
);
