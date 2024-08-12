'use client';

import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTrigger,
} from "@/components/ui/dialog"
import Link from "next/link";
import { useState } from "react";

const Menu = () => {
    const [isDialogOpen, setIsDialogOpen] = useState<boolean>(false);
    const handleClose = () => {
        setIsDialogOpen(false);
    }

    return ( 
        <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
            <DialogTrigger className="border p-2 rounded-md bg-white md:hidden">メニュー</DialogTrigger>
            <DialogContent>
                <DialogHeader>
                <DialogDescription className="flex flex-col">
                    <Link href="#about" passHref onClick={handleClose}>
                        About
                    </Link>
                    <Link href="#skill" passHref onClick={handleClose}>
                        Skill
                    </Link>
                    <Link href="#experience" passHref onClick={handleClose}>
                        Experience
                    </Link>
                    <Link href="#products" passHref onClick={handleClose}>
                        Products
                    </Link>
                    <Link href="#social" passHref onClick={handleClose}>
                        SNS
                    </Link>
                </DialogDescription>
                </DialogHeader>
            </DialogContent>
        </Dialog>
     );
}
 
export default Menu;