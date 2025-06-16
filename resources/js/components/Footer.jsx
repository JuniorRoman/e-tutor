import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Facebook, GraduationCap, Instagram, Linkedin, Youtube } from "lucide-react";

export default function Footer() {
    return (
        <>
            <section className="bg-gray-900">
                <div className="container mx-auto">
                    <div className="flex justify-between py-20">
                        <div className="Eduguard flex max-w-80 flex-col">
                            <div className="flex flex-col">
                                <div className="flex gap-2">
                                    <GraduationCap className="text-orange-500" />
                                    <span className="text-semibold text-2xl text-white">E-tutor</span>
                                </div>
                                <p className="text-md text-gray-500">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque non veritatis maxime molestias.
                                </p>
                            </div>
                            <div className="mt-6 flex gap-3 text-white">
                                <span className="bg-gray-800 p-3.5">
                                    <Facebook />
                                </span>
                                <span className="bg-gray-800 p-3.5">
                                    <Instagram />
                                </span>
                                <span className="bg-gray-800 p-3.5">
                                    <Linkedin />
                                </span>
                                <span className="bg-gray-800 p-3.5">
                                    <Youtube />
                                </span>
                            </div>
                        </div>
                        <div className="Explore flex flex-col gap-5 text-gray-500">
                            <h3 className="text-white uppercase">TOP 4 CATEGORY</h3>
                            <ul className="">
                                <li className="py-1.5">Development</li>
                                <li className="py-1.5">Finance & Accounting</li>
                                <li className="py-1.5">Design</li>
                                <li className="py-1.5">Business</li>
                            </ul>
                        </div>
                        <div className="Quick flex flex-col gap-5 text-gray-500">
                            <h3 className="text-white uppercase">Quick Links</h3>
                            <ul className="">
                                <li className="py-1.5">About</li>
                                <li className="py-1.5">Become Instructor</li>
                                <li className="py-1.5">Contact</li>
                                <li className="py-1.5">Career</li>
                            </ul>
                        </div>
                        <div className="Support flex flex-col gap-5 text-gray-500">
                            <h3 className="text-white uppercase">Support</h3>
                            <ul className="">
                                <li className="py-1.5">Help Center</li>
                                <li className="py-1.5">FAQs</li>
                                <li className="py-1.5">Terms & Condition</li>
                                <li className="py-1.5">Privacy Policy</li>
                            </ul>
                        </div>
                        <div className="Download flex flex-col gap-5">
                            <h3 className="text-white uppercase">Downlaod our app</h3>
                            <div className="flex flex-col gap-y-1.5">
                                <span>
                                    <img src="./images/down/app.png" alt="" width="150px" height="30px" />
                                </span>
                                <span>
                                    <img src="./images/down/app.png" alt="" width="150px" height="30px" />
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
                <hr className="text-gray-500" />
                <div className="container mx-auto">
                    <div className="flex items-center justify-between py-7 text-gray-500">
                        <p className="text-sm">© 2021 - Eduflex. Designed by Templatecookie. All rights reserved</p>
                        <div>
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
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
