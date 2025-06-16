import SiteLayout from '../layouts/site-layout';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Bell, ChevronDown, GraduationCap, Heart, ShoppingCart } from "lucide-react";

function Header() {
    return (
        <>
                <section className="w-full">
                    <div className="flex w-full items-center justify-between bg-gray-900 px-8">
                        <ul className="flex gap-2">
                            <li className="text-md p-4 text-gray-500">Home</li>
                            <li className="text-md p-4 text-gray-500">Courses</li>
                            <li className="text-md p-4 text-gray-500">About</li>
                            <li className="text-md p-4 text-gray-500">Contact</li>
                        </ul>
                        <div className="flex text-gray-500">
                            <div className="flex gap-6">
                                <span className="flex gap-1.5">
                                    USD <ChevronDown />
                                </span>
                                <span className="flex">
                                    English <ChevronDown />
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className="flex items-center justify-between border px-8 py-6">
                        <div className="flex gap-8">
                            <div className="flex items-center gap-2">
                                <GraduationCap className="text-orange-500" />
                                <span className="text-semibold text-2xl text-gray-900">E-tutor</span>
                            </div>
                            <div className="flex gap-4">
                                <Select>
                                    <SelectTrigger className="w-[180px]">
                                        <SelectValue placeholder="Theme" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="light">Light</SelectItem>
                                        <SelectItem value="dark">Dark</SelectItem>
                                        <SelectItem value="system">System</SelectItem>
                                    </SelectContent>
                                </Select>
                                <Input id="search" placeholder="Search the docs..." className="pl-8" />
                            </div>
                        </div>
                        <div className="flex gap-x-3">
                            <div className="flex gap-6">
                                <Bell />
                                <Heart />
                                <ShoppingCart />
                            </div>
                            <div className="flex">
                                <Button variant="secondary" size="10" className="bg-orange-100 px-6 py-2 text-orange-500">
                                    Create Account
                                </Button>
                            </div>
                            <div className="flex">
                                <Button variant="default" size="10" className="bg-orange-500 px-6 py-2 text-white">
                                    Sign In
                                </Button>
                            </div>
                        </div>
                    </div>
                </section>
        </>
    );
}

Header.SiteLayout = page => <SiteLayout children={page} />

export default Header;