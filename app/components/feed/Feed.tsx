"use client";

import { JSX, useEffect, useState } from "react";
import { SidesDTO } from "@/app/types/sides";
import Image from "next/image";

const Feed = (): JSX.Element => {
  const [recipes, setRecipes] = useState<SidesDTO[]>([]);

  const fetchImages = async () => {
    const response = await fetch("http://localhost:8080/sides");
    const sideDishes: SidesDTO[] = await response.json();
    console.log("Fetched sides:", sideDishes);

    setRecipes(sideDishes);
  };

  useEffect(() => {
    fetchImages();
  }, []);

  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-zinc-950 py-16 px-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold text-center mb-12 text-zinc-900 dark:text-white">
          Våra 4 populäraste Sides!
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {recipes.length > 0 &&
            recipes.slice(0, 4).map((side: SidesDTO) => (
              // console.log("Side:", side.dish);
              //console.log("Bildsökväg:", '/images/${side.name.toLowerCase()}.jpg');

              <div
                key={side.dish}
                className="bg-white dark:bg-zinc-900 p-6 rounded-2xl shadow-sm border border-zinc-200 dark:border-zinc-800 flex flex-col items-center text-center"
              >
                {/* ✅ Bilden behövde src titel "alt" och className */}
                <div className="relative w-full h-48 bg-zinc-100 dark:bg-zinc-800 rounded-xl mb-4 overflow-hidden">
                  <Image
                    src={`/images/${side.dish}.jpg`}
                    alt={`Bild på ${side.dish}`}
                    fill //Använd 'fill' för att bilden ska fylla hela utrymmet i den relativa containern
                    className="w-full h-full object-cover"
                  />
                </div>

                <h3 className="text-xl font-semibold text-orange-500 mb-2">
                  {side.dish}
                </h3>
                <p className="text-zinc-600 dark:text-zinc-400 text-sm">
                  {side.components}
                </p>
                <button className="mt-6 px-6 py-2 bg-zinc-900 dark:bg-white dark:text-black text-white rounded-full text-sm font-medium hover:scale-105 transition-transform">
                  Läs mer
                </button>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Feed;
