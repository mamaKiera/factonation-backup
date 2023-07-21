"use client";
import { FC, useEffect, useState } from "react";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";
import { Button } from "./ui/Button";
import { Check, PersonStanding } from "lucide-react";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
} from "./ui/command";
import { cn } from "@/lib/utils";
import { getInstructors } from "@/lib";

interface SelectInstructorProps {}

const SelectInstructor: FC<SelectInstructorProps> = ({}) => {
  const [instructor, setInstructor] =
    useState<{ id: string; name: string }[]>();
  const [value, setValue] = useState("");
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const fetchInstructor = async () => {
      const response = await getInstructors();
      setInstructor(response);
    };
    fetchInstructor();
  }, []);

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild className="text-black mb-3">
        <Button
          variant={"outline"}
          role="combobox"
          aria-expanded={open}
          className="w-[200px] justify-between text-black"
        >
          {value
            ? instructor && instructor.find((ins) => ins.id == value)?.name
            : "Select instructor..."}
          <PersonStanding />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[400px] p-0">
        <Command>
          <CommandInput placeholder="select instructor..." className="h-9" />{" "}
          <CommandEmpty>No Instructor found.</CommandEmpty>
          <CommandGroup className="bg-white">
            {instructor &&
              instructor.map((ins, i) => {
                return (
                  <CommandItem
                    key={ins.id}
                    onSelect={(currVal) => {
                      setValue(currVal == value ? "" : currVal);
                      setOpen(false);
                    }}
                  >
                    {ins.name}
                    <Check
                      className={cn(
                        "ml-auto h-4 w-4 bg-slate-700",
                        value === ins.name ? "opacity-100" : "opacity-0"
                      )}
                    />
                  </CommandItem>
                );
              })}
          </CommandGroup>
        </Command>
      </PopoverContent>
    </Popover>
  );
};

export default SelectInstructor;
