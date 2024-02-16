"use client";
import React, { useState } from "react";

import {
  Card
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Hero = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const foodItems = [
    { id: 1, name: "Pizza", imageUrl: "/download.jpeg" },
    { id: 2, name: "Burger", imageUrl: "/download.jpeg" },
    { id: 3, name: "Pasta", imageUrl: "/download.jpeg" },
    { id: 4, name: "Burger", imageUrl: "/download.jpeg" },
    { id: 5, name: "Pasta", imageUrl: "/download.jpeg" },
    { id: 6, name: "Burger", imageUrl: "/download.jpeg" },
    { id: 7, name: "Pasta", imageUrl: "/download.jpeg" },
    { id: 8, name: "Burger", imageUrl: "/download.jpeg" },
    { id: 9, name: "Pasta", imageUrl: "/download.jpeg" },
    { id: 10, name: "Pasta", imageUrl: "/download.jpeg" },
    { id: 11, name: "Pasta", imageUrl: "/download.jpeg" },
    { id: 12, name: "Pasta", imageUrl: "/download.jpeg" },
  ];
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

  const filteredFoodItems = foodItems.filter((item) =>
    item.name.toLowerCase().includes(searchQuery.toLowerCase())
  );
  const filteredIngrediantItemsItems = IngrediantItems.filter((item) =>
    item.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <Tabs defaultValue="account" className="p-5">
      <h1 className="text-center text-orange-600 text-3xl font-extrabold font-sans mb-8">Yummy Mummy Kitchen</h1>
      <TabsList className="grid m-auto grid-cols-2 mb-5 bg-orange-300 w-5/6">
        <TabsTrigger value="account">Food</TabsTrigger>
        <TabsTrigger value="password">Ingredients</TabsTrigger>
      </TabsList>
      <div className="flex justify-center  m-auto text-center mb-6">
        <Input
          type="text"
          className="w-2/4 h-10 rounded pl-5 bg-white"
          placeholder="Search food..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>
      <TabsContent value="account">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-5 justify-items-center p-5">
          {filteredFoodItems.map((foodItem) => (
            <Card key={foodItem.id} className="p-5 w-full text-center">
              <div className="border-2 rounded-xl p-4 cursor-pointer">
                <img src={foodItem.imageUrl} alt={foodItem.name} />
                <p>{foodItem.name}</p>
              </div>
            </Card>
          ))}
        </div>
      </TabsContent>
      {/* Add TabsContent for password if needed */}

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
    </Tabs>
  );
};

export default Hero;





