import {Show, UserButton } from '@clerk/nextjs';

const Dashboard = () => {

    return (
        <div>
            <div>Dashboard</div>
            <Show when="signed-in">
                <UserButton />
            </Show>
        </div>
    )
}
export default Dashboard
