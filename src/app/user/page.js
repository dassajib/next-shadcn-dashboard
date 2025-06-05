import { columns } from "./columns"
import { DataTable } from "./data-table"

const getData = async () => {
    return [
        { id: "728ed52f", user: "User 1", amount: 100, status: "pending", email: "user1@example.com" },
        { id: "728ed530", user: "User 2", amount: 150, status: "completed", email: "user2@example.com" },
        { id: "728ed531", user: "User 3", amount: 200, status: "failed", email: "user3@example.com" },
        { id: "728ed532", user: "User 4", amount: 250, status: "pending", email: "user4@example.com" },
        { id: "728ed533", user: "User 5", amount: 300, status: "completed", email: "user5@example.com" },
        { id: "728ed534", user: "User 6", amount: 350, status: "failed", email: "user6@example.com" },
        { id: "728ed535", user: "User 7", amount: 400, status: "pending", email: "user7@example.com" },
        { id: "728ed536", user: "User 8", amount: 450, status: "completed", email: "user8@example.com" },
        { id: "728ed537", user: "User 9", amount: 500, status: "failed", email: "user9@example.com" },
        { id: "728ed538", user: "User 10", amount: 550, status: "pending", email: "user10@example.com" },
        { id: "728ed539", user: "User 11", amount: 600, status: "completed", email: "user11@example.com" },
        { id: "728ed540", user: "User 12", amount: 650, status: "failed", email: "user12@example.com" },
        { id: "728ed541", user: "User 13", amount: 700, status: "pending", email: "user13@example.com" },
        { id: "728ed542", user: "User 14", amount: 750, status: "completed", email: "user14@example.com" },
        { id: "728ed543", user: "User 15", amount: 800, status: "failed", email: "user15@example.com" },
        { id: "728ed544", user: "User 16", amount: 850, status: "pending", email: "user16@example.com" },
        { id: "728ed545", user: "User 17", amount: 900, status: "completed", email: "user17@example.com" },
        { id: "728ed546", user: "User 18", amount: 950, status: "failed", email: "user18@example.com" },
        { id: "728ed547", user: "User 19", amount: 1000, status: "pending", email: "user19@example.com" },
        { id: "728ed548", user: "User 20", amount: 1050, status: "completed", email: "user20@example.com" },
        { id: "728ed549", user: "User 21", amount: 1100, status: "failed", email: "user21@example.com" },
        { id: "728ed550", user: "User 22", amount: 1150, status: "pending", email: "user22@example.com" },
        { id: "728ed551", user: "User 23", amount: 1200, status: "completed", email: "user23@example.com" },
        { id: "728ed552", user: "User 24", amount: 1250, status: "failed", email: "user24@example.com" },
        { id: "728ed553", user: "User 25", amount: 1300, status: "pending", email: "user25@example.com" },
        { id: "728ed554", user: "User 26", amount: 1350, status: "completed", email: "user26@example.com" },
        { id: "728ed555", user: "User 27", amount: 1400, status: "failed", email: "user27@example.com" },
        { id: "728ed556", user: "User 28", amount: 1450, status: "pending", email: "user28@example.com" },
        { id: "728ed557", user: "User 29", amount: 1500, status: "completed", email: "user29@example.com" },
        { id: "728ed558", user: "User 30", amount: 1550, status: "failed", email: "user30@example.com" },
        { id: "728ed559", user: "User 31", amount: 1600, status: "pending", email: "user31@example.com" },
        { id: "728ed560", user: "User 32", amount: 1650, status: "completed", email: "user32@example.com" },
        { id: "728ed561", user: "User 33", amount: 1700, status: "failed", email: "user33@example.com" },
        { id: "728ed562", user: "User 34", amount: 1750, status: "pending", email: "user34@example.com" },
        { id: "728ed563", user: "User 35", amount: 1800, status: "completed", email: "user35@example.com" },
        { id: "728ed564", user: "User 36", amount: 1850, status: "failed", email: "user36@example.com" },
        { id: "728ed565", user: "User 37", amount: 1900, status: "pending", email: "user37@example.com" },
        { id: "728ed566", user: "User 38", amount: 1950, status: "completed", email: "user38@example.com" },
        { id: "728ed567", user: "User 39", amount: 2000, status: "failed", email: "user39@example.com" },
        { id: "728ed568", user: "User 40", amount: 2050, status: "pending", email: "user40@example.com" },
    ];
};

export default async function PaymentPage() {
    const data = await getData()

    return (
        <div className="container mx-auto px-6 py-10">
            <DataTable columns={columns} data={data} />
        </div>
    )
}