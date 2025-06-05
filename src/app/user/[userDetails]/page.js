import CardList from "@/components/card/CardList"
import { Badge } from "@/components/ui/badge"
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import {
    HoverCard,
    HoverCardContent,
    HoverCardTrigger,
} from "@/components/ui/hover-card"
import { Progress } from "@/components/ui/progress"
import { BadgeCheck, Candy, Citrus, Shield } from "lucide-react"
import {
    Sheet,
    SheetTrigger,
} from "@/components/ui/sheet"
import { Button } from "@/components/ui/button"
import EditUser from "@/components/ui/EditUser"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import AppLineChart from "@/components/charts/AppLineChart"

export default function UserDetails() {
    return (
        <div className="p-2">
            <Breadcrumb>
                <BreadcrumbList>
                    <BreadcrumbItem>
                        <BreadcrumbLink href="/">Dashboard</BreadcrumbLink>
                    </BreadcrumbItem>
                    <BreadcrumbSeparator />
                    <BreadcrumbItem>
                        <BreadcrumbLink href="/user">User</BreadcrumbLink>
                    </BreadcrumbItem>
                    <BreadcrumbSeparator />
                    <BreadcrumbItem>
                        <BreadcrumbPage>Sajib Das</BreadcrumbPage>
                    </BreadcrumbItem>
                </BreadcrumbList>
            </Breadcrumb>

            <div className="mt-5 flex flex-col md:flex-row gap-8">
                <div className="w-full md:w-1/3 space-y-6">
                    <div className="bg-primary-foreground rounded-lg p-4">
                        <h1 className="text-xl font-semibold">User Badge</h1>
                        <div className="flex gap-2 mt-2">
                            <HoverCard>
                                <HoverCardTrigger>
                                    <BadgeCheck size={36} className="bg-blue-500/30 rounded-full border-1 border-blue-500/50 p-2" />
                                </HoverCardTrigger>
                                <HoverCardContent>
                                    <h1 className="font-bold mb-2">Verified User</h1>
                                    <p className="text-sm text-muted-foreground">This User is Verified by Admin</p>
                                </HoverCardContent>
                            </HoverCard>
                            <HoverCard>
                                <HoverCardTrigger>
                                    <Shield size={36} className="bg-green-500/30 rounded-full border-1 border-green-500/50 p-2" />
                                </HoverCardTrigger>
                                <HoverCardContent>
                                    <h1 className="font-bold mb-2">Awarded</h1>
                                    <p className="text-sm text-muted-foreground">This User is awarded for his contribution's</p>
                                </HoverCardContent>
                            </HoverCard>
                            <HoverCard>
                                <HoverCardTrigger>
                                    <Candy size={36} className="bg-red-500/30 rounded-full border-1 border-red-500/50 p-2" />
                                </HoverCardTrigger>
                                <HoverCardContent>
                                    <h1 className="font-bold mb-2">Admin</h1>
                                    <p className="text-sm text-muted-foreground">Admin User has all the access of the feature's</p>
                                </HoverCardContent>
                            </HoverCard>
                            <HoverCard>
                                <HoverCardTrigger>
                                    <Citrus size={36} className="bg-yellow-500/30 rounded-full border-1 border-yellow-500/50 p-2" />
                                </HoverCardTrigger>
                                <HoverCardContent>
                                    <h1 className="font-bold mb-2">Popular</h1>
                                    <p className="text-sm text-muted-foreground">This User has been popular in the community</p>
                                </HoverCardContent>
                            </HoverCard>
                        </div>
                    </div>

                    <div className="bg-primary-foreground rounded-lg p-4">
                        <div className="flex items-center justify-between">
                            <h1 className="text-xl font-semibold">User Information</h1>
                            <Sheet>
                                <SheetTrigger asChild>
                                    <Button className="cursor-pointer">Edit User</Button>
                                </SheetTrigger>
                                <EditUser />
                            </Sheet>
                        </div>
                        <div className="space-y-d mt-4">
                            <div className="flex flex-col gap-2 mb-8">
                                <p className="text-sm text-muted-foreground">Profile Completion</p>
                                <Progress value={77} />
                            </div>
                            <div className="flex items-center gap-2">
                                <span className="font-bold">Username :</span>
                                <span className="">Sajib Das</span>
                            </div>
                            <div className="flex items-center gap-2 mt-2">
                                <span className="font-bold">Email :</span>
                                <span className="">sajibdas.sd@gmail.com</span>
                            </div>
                            <div className="flex items-center gap-2 mt-2">
                                <span className="font-bold">Phone :</span>
                                <span className="">01742623585</span>
                            </div>
                            <div className="flex items-center gap-2 mt-2">
                                <span className="font-bold">Location :</span>
                                <span className="">Dhaka,Bangladesh</span>
                            </div>
                            <div className="flex items-center gap-2 mt-2">
                                <span className="font-bold">Role :</span>
                                <Badge>Admin</Badge>
                            </div>
                        </div>
                        <p className="text-sm text-muted-foreground mt-4">Joined on 05-05-2025</p>
                    </div>

                    <div className="bg-primary-foreground rounded-lg p-4">
                        <CardList title="Recent Transactions" />
                    </div>
                </div>

                <div className="w-full md:w-2/3 space-y-6">
                    <div className="bg-primary-foreground rounded-lg p-4">
                        <div className="flex items-center gap-2">
                            <Avatar size="12">
                                <AvatarImage src="https://github.com/shadcn.png" />
                                <AvatarFallback>SD</AvatarFallback>
                            </Avatar>
                            <h1 className="text-xl font-semibold">Sajib Das</h1>
                        </div>
                        <p className="text-sm text-muted-foreground mt-2">ncwuibfqiUBCQIBUcibciubcwiryfgvbse;iorhgbtnbanevuaiegte;anv;aenvaenvs</p>
                    </div>
                    <div className="bg-primary-foreground rounded-lg p-4">
                        <h1 className="text-xl font-semibold">User Activity</h1>
                        <AppLineChart />
                    </div>
                </div>
            </div>
        </div>
    )
}