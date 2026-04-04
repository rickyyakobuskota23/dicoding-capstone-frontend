import {Show, UserButton } from '@clerk/nextjs';
import {ModeToggle} from "@/components/web/theme-toggle";

const Dashboard = () => {

    return (
        <div>
            <div>Dashboard</div>
            <Show when="signed-in">
                <UserButton />
            </Show>
            <ModeToggle />
        </div>
    )
}
export default Dashboard
