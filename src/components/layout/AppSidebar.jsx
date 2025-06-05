"use client"

import { useState } from "react"
import {
    Aperture,
    ChevronDown,
    ChevronUp,
    Home,
    Inbox,
    Plus,
    PlusIcon,
    Projector,
    User2,
} from "lucide-react"
import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarGroup,
    SidebarGroupAction,
    SidebarGroupContent,
    SidebarGroupLabel,
    SidebarHeader,
    SidebarMenu,
    SidebarMenuBadge,
    SidebarMenuButton,
    SidebarMenuItem,
    SidebarSeparator,
} from "../ui/sidebar"
import {
    DropdownMenu,
    DropdownMenuTrigger,
    DropdownMenuContent,
    DropdownMenuItem,
} from "@/components/ui/dropdown-menu"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "../ui/collapsible"
import Link from "next/link"

// Menu items.
const items = [
    {
        title: "Home",
        url: "/",
        icon: Home,
    },
    {
        title: "User",
        url: "/user",
        icon: User2,
    },
    {
        title: "Inbox",
        url: "/inbox",
        icon: Inbox,
    },
]

const AppSidebar = () => {

    const [isOpen, setIsOpen] = useState(false)

    return (
        <Sidebar collapsible="icon">
            <SidebarHeader className="py-4">
                <SidebarMenu>
                    <SidebarMenuItem>
                        <SidebarMenuButton asChild>
                            <Link href="/" className="flex items-center gap-2">
                                <Aperture />
                                <span className="font-semibold">NEXT JS</span>
                            </Link>
                        </SidebarMenuButton>
                    </SidebarMenuItem>
                </SidebarMenu>
            </SidebarHeader>

            <SidebarSeparator />

            <SidebarContent>
                {/* regular item */}
                <SidebarGroup>
                    <SidebarGroupLabel>Application</SidebarGroupLabel>
                    <SidebarGroupContent>
                        <SidebarMenu>
                            {items.map((item) => (
                                <SidebarMenuItem key={item.title}>
                                    <SidebarMenuButton asChild>
                                        <Link
                                            href={item.url}
                                            className="flex items-center justify-between gap-2 w-full"
                                        >
                                            <div className="flex items-center gap-2">
                                                <item.icon size={18} />
                                                <span>{item.title}</span>
                                            </div>
                                            {item.title === "Inbox" && (
                                                <SidebarMenuBadge>777</SidebarMenuBadge>
                                            )}
                                        </Link>
                                    </SidebarMenuButton>
                                </SidebarMenuItem>
                            ))}
                        </SidebarMenu>
                    </SidebarGroupContent>
                </SidebarGroup>

                {/* action item */}
                <SidebarGroup>
                    <SidebarGroupLabel>Project</SidebarGroupLabel>
                    <SidebarGroupAction>
                        <Plus className="cursor-pointer" /> <span className="sr-only">Add Project</span>
                    </SidebarGroupAction>
                    <SidebarGroupContent>
                        <SidebarMenu>
                            <SidebarMenuItem>
                                <SidebarMenuButton asChild>
                                    <Link href="/">
                                        <Projector />
                                        Show All Project's
                                    </Link>
                                </SidebarMenuButton>
                            </SidebarMenuItem>
                            <SidebarMenuItem>
                                <SidebarMenuButton asChild>
                                    <Link href="/">
                                        <PlusIcon />
                                        Add Project
                                    </Link>
                                </SidebarMenuButton>
                            </SidebarMenuItem>
                        </SidebarMenu>
                    </SidebarGroupContent>
                </SidebarGroup>

                {/* collapsible item */}
                <Collapsible open={isOpen} onOpenChange={setIsOpen}>
                    <SidebarGroup>
                        <SidebarGroupLabel asChild>
                            <CollapsibleTrigger>
                                Collaps
                                <ChevronDown className={`ml-auto transition-transform cursor-pointer 
                                    ${isOpen ? "rotate-180" : ""}`}
                                />
                            </CollapsibleTrigger>
                        </SidebarGroupLabel>
                        <CollapsibleContent>
                            <SidebarGroupContent>
                                <SidebarMenu>
                                    <SidebarMenuItem>
                                        <SidebarMenuButton asChild>
                                            <Link href="/">
                                                <Projector />
                                                Show All Project's
                                            </Link>
                                        </SidebarMenuButton>
                                    </SidebarMenuItem>
                                    <SidebarMenuItem>
                                        <SidebarMenuButton asChild>
                                            <Link href="/">
                                                <PlusIcon />
                                                Add Project
                                            </Link>
                                        </SidebarMenuButton>
                                    </SidebarMenuItem>
                                </SidebarMenu>
                            </SidebarGroupContent>
                        </CollapsibleContent>
                    </SidebarGroup>
                </Collapsible>

                {/* nested item */}
                <SidebarGroup>
                    <SidebarGroupLabel>Nested</SidebarGroupLabel>
                    <SidebarGroupContent>
                        <SidebarMenu>
                            {/* Parent item */}
                            <SidebarMenuItem>
                                <SidebarMenuButton asChild>
                                    <Link href="/" className="flex items-center gap-2">
                                        <Projector size={18} />
                                        <span>All Projects</span>
                                    </Link>
                                </SidebarMenuButton>
                            </SidebarMenuItem>

                            {/* Submenu section */}
                            <div className="ml-6 mt-1">
                                <SidebarMenu>
                                    <SidebarMenuItem>
                                        <SidebarMenuButton asChild>
                                            <Link href="/" className="flex items-center gap-2 text-muted-foreground text-sm">
                                                <Plus size={16} />
                                                <span>Add</span>
                                            </Link>
                                        </SidebarMenuButton>
                                    </SidebarMenuItem>
                                </SidebarMenu>
                            </div>
                        </SidebarMenu>
                    </SidebarGroupContent>
                </SidebarGroup>
            </SidebarContent>

            <SidebarFooter>
                <SidebarMenu>
                    <SidebarMenuItem>
                        <DropdownMenu>
                            <DropdownMenuTrigger asChild className="cursor-pointer">
                                <SidebarMenuButton className="flex items-center gap-2">
                                    <User2 />
                                    <span>Sajib Das</span>
                                    <ChevronUp className="ml-auto" />
                                </SidebarMenuButton>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align="end">
                                <DropdownMenuItem className="cursor-pointer">Profile</DropdownMenuItem>
                                <DropdownMenuItem className="cursor-pointer">Settings</DropdownMenuItem>
                                <DropdownMenuItem className="cursor-pointer">Logout</DropdownMenuItem>
                            </DropdownMenuContent>
                        </DropdownMenu>
                    </SidebarMenuItem>
                </SidebarMenu>
            </SidebarFooter>
        </Sidebar>
    )
}

export default AppSidebar
