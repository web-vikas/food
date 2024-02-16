"use client"
import React, { useState } from "react";

import {
  Card
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const ingrediant = () => {
    const [searchQuery, setSearchQuery] = useState("");
    const IngrediantItems = [
        { id: 1, name: "Pizza", imageUrl: "/istockphoto-1457433817-612x612.jpg" },
        { id: 2, name: "Burger", imageUrl: "/istockphoto-1457433817-612x612.jpg" },
        { id: 3, name: "Pasta", imageUrl: "/istockphoto-1457433817-612x612.jpg" },
        { id: 4, name: "Burger", imageUrl: "/istockphoto-1457433817-612x612.jpg" },
        { id: 5, name: "Pasta", imageUrl: "/istockphoto-1457433817-612x612.jpg" },
        { id: 6, name: "Burger", imageUrl: "/istockphoto-1457433817-612x612.jpg" },
        { id: 7, name: "Pasta", imageUrl: "/istockphoto-1457433817-612x612.jpg" },
        { id: 8, name: "Burger", imageUrl: "/istockphoto-1457433817-612x612.jpg" },
        { id: 9, name: "Pasta", imageUrl: "/istockphoto-1457433817-612x612.jpg" },
        { id: 10, name: "Pasta", imageUrl: "/istockphoto-1457433817-612x612.jpg" },
        { id: 11, name: "Pasta", imageUrl: "/istockphoto-1457433817-612x612.jpg" },
        { id: 12, name: "Pasta", imageUrl: "/istockphoto-1457433817-612x612.jpg" },
      ];

      const filteredIngrediantItemsItems = IngrediantItems.filter((item) =>
      item.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
  return (
    <TabsContent value="password">
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-5 justify-items-center p-5">
      {filteredIngrediantItemsItems.map((IngrediantItemsItem) => (
        <Card key={IngrediantItemsItem.id} className="p-5 w-full text-center">
          <div className="border-2 rounded-xl p-4 cursor-pointer">
            <img src={IngrediantItemsItem.imageUrl} alt={IngrediantItemsItem.name} />
            <p>{IngrediantItemsItem.name}</p>
          </div>
        </Card>
      ))}
    </div>
  </TabsContent>
  )
}

export default ingrediant