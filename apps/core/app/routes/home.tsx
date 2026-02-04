import { Button } from "@repo/ui/button";
import { Input } from "@repo/ui/input";
import { Link } from "react-router";
import { UserIcon } from "@phosphor-icons/react";

export default function Home() {

  return (
    <div className="flex flex-col gap-4">
      <div className="flex justify-between items-center">
        <Button variant="danger" size="lg">Home</Button>
        <Link to="/kadrovi">Kadrovi</Link>
        <Button variant="secondary" size="lg">Home</Button>
      </div>
      <TextField leftIcon={<UserIcon size={16} />} label="Name" placeholder="Enter  your name" variant="default" />
    </div>
  );
}