import React from "react";
import Image from "next/image";
import { siteConfig } from "@/config/site";
import { Button } from "../ui/button";
import { DialogWithForm } from "../dialog-with-form/dialog-with-form";

export default function Header() {
  return (
    <header className="flex flex-col md:flex-row md:justify-between md:items-center space-y-4 md:space-y-0 w-full md:px-6 max-w-3xl">
      <div className="flex flex-row items-center space-x-3">
        <Image
          src="/images/photo_rose.png"
          alt=""
          width={100}
          height={100}
          className="rounded-full h-[48px] w-[48px]"
        />
        <div className="flex flex-col">
          <span className="font-semibold"> {siteConfig.name} </span>
          <span className="text-muted-foreground ">{siteConfig.title}</span>
        </div>
      </div>
      <div className="flex flex-row space-x-2">
        <DialogWithForm
          dialogTitle="Réserver une séance gratuite"
          dialogDescription="Profitez d'une séance gratuite d'une heure pour découvrir comment ça marche. "
        >
          <Button>Réserver une séance gratuite</Button>
        </DialogWithForm>
      </div>
    </header>
  );
}
