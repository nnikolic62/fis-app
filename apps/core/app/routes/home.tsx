import { Button } from "@repo/ui/button";
import { TextField } from "@repo/ui/text-field";
import { PersonIcon } from "@repo/ui/icons";
import { Link } from "react-router";

export default function Home() {

  return (
    <div className="flex flex-col gap-4">
      <div className="flex justify-between items-center">
        <Button variant="danger" size="lg">Home</Button>
        <Link to="/kadrovi">Kadrovi</Link>
        <Button variant="secondary" size="lg">Home</Button>
      </div>
      <TextField leftIcon={<PersonIcon />} label="Name" placeholder="Enter  your name" variant="default" />
    </div>
  );
}