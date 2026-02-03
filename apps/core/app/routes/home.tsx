import { Button } from "@repo/ui/button";
import { TextField } from "@repo/ui/text-field";
import { PersonIcon } from "@repo/ui/icons";
import { Test } from "@kadrovi/app/test";

export default function Home() {

  return (
    <div className="flex flex-col gap-4">
      <div className="flex justify-between items-center">
        <Button variant="danger" size="lg">Home</Button>
        <Button variant="secondary" size="lg">Home</Button>
      </div>
      <Test />
      <TextField leftIcon={<PersonIcon />} label="Name" placeholder="Enter  your name" variant="default" />
    </div>
  );
}