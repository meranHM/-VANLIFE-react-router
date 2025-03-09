import { requireAuth } from "../../utils"

export async function loader({ request }: {request: Request}) {
    return await requireAuth({request})
}

export default function Income() {
    const transactionsData = [
        { amount: 720, date: "Jan 3, '23", id: "1" },
        { amount: 560, date: "Dec 12, '22", id: "2" },
        { amount: 980, date: "Dec 3, '22", id: "3" },
    ]
    return (
        <main>
            <section className="host-income">
                <h2 className="title">Income</h2>
                <p className="time-filter">
                    Last <span className="days">30 days</span>
                </p>
                <h2 className="income-number">$2,260</h2>
                <img
                    className="graph"
                    src="/assets/images/income-graph.png"
                    alt="Income graph"
                />
                <div className="info-header">
                    <h3>Your transactions (3)</h3>
                    <p className="time-filter">
                        Last <span className="days">30 days</span>
                    </p>
                </div>
                <div className="transactions">
                    {transactionsData.map((item) => (
                        <div key={item.id} className="transaction">
                            <h3>${item.amount}</h3>
                            <p>{item.date}</p>
                        </div>
                    ))}
                </div>
            </section>
        </main>
    )
}
