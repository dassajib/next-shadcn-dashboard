"use client"

import { useState } from "react"
import { ScrollArea } from "./ui/scroll-area"
import { Card } from "./ui/card"
import { Checkbox } from "./ui/checkbox"
import {
    Popover,
    PopoverTrigger,
    PopoverContent
} from "./ui/popover"
import { Calendar } from "./ui/calendar"
import { Button } from "./ui/button"
import { Calendar1 } from "lucide-react"
import { format } from "date-fns"

const ToDoList = () => {
    const [date, setDate] = useState(new Date());

    return (
        <div>
            <h1 className="text-md font-medium mb-6">To Do List</h1>
            <div className="flex flex-col gap-4">
                <Popover>
                    <PopoverTrigger asChild>
                        <Button
                            variant="outline"
                            className="w-full justify-start text-left font-normal cursor-pointer"
                        >
                            <Calendar1 className="mr-2 h-4 w-4" />
                            {date ? format(date, "PPP") : <span>Pick a date</span>}
                        </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0" align="start">
                        <Calendar
                            mode="single"
                            selected={date}
                            onSelect={setDate}
                            className="rounded-md border"
                        />
                    </PopoverContent>
                </Popover>

                <ScrollArea className="h-[300px] mt-4 overflow-y-auto">
                    <Card className="p-4 space-y-4">
                        {Array.from({ length: 14 }).map((_, i) => (
                            <div key={i} className="flex items-center gap-3">
                                <Checkbox id={`task-${i}`} defaultChecked={i % 2 === 0} />
                                <label
                                    htmlFor={`task-${i}`}
                                    className="text-sm text-muted-foreground"
                                >
                                    Task {i + 1}: Accept terms and conditions
                                </label>
                            </div>
                        ))}
                    </Card>
                </ScrollArea>
            </div>
        </div>
    )
}

export default ToDoList
