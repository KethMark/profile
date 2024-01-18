import React from "react";
import Link from "next/link";
import { FacebookIcon } from "lucide-react";
const page = () => {
  return (
    <div className="col-span-3 space-y-6">
      <h1 className="text-4xl font-bold">Keth Mark Berou</h1>
      <span className="text-muted-foreground">
        I'm building more stuffs to become a better developer
      </span>
      <br />
      <h1>Github Profile</h1>
      <Link href={"https://github.com/KethMark"}>
        https://github.com/KethMark
      </Link>
      <div className="flex space-x-4">
        <Link className="text-gray-400 hover:text-white" href="https://www.facebook.com/kethmark.pj">
          <FacebookIcon className="inline mr-2" />
          follow me on facebook
        </Link>
      </div>
    </div>
  );
};

export default page;
