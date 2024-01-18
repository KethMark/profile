import Link from "next/link";
import { AvatarImage, Avatar, AvatarFallback } from "@/components/ui/avatar";
import { FacebookIcon } from "lucide-react";

export default function Component() {
  return (
    <div className="col-span-3 space-y-6">
      <h1 className="text-4xl font-bold">Keth Mark Berou</h1>
      <p className="text-gray-400">
        Hey, I'm Keth Mark. I'm developer of nextjs, it's so much fun building
        an stuff and looking forward become professional nextjs dev.
      </p>
      <div className="flex items-center space-x-6">
        <Avatar>
          <AvatarImage alt="Keth Mark" src="" />
          <AvatarFallback>K</AvatarFallback>
        </Avatar>
        <div className="space-y-2"></div>
      </div>
      <p className="text-gray-400">
        I started learning nextjs when I was on my 2nd year of college vacation.
        A lot happens when I learn nextjs, including struggles, quitting, etc.
        But my determination is always in me, and having a lot of realizations
        about my future so he gives me motivation to continue to learn. and I
        study only 2-4 hours in a week;
      </p>
      <div>
        <Link
          className="text-gray-400 hover:text-white"
          href="https://www.facebook.com/kethmark.pj"
        >
          <FacebookIcon className="inline mr-2" />
          follow me on facebook
        </Link>
      </div>
    </div>
  );
}
