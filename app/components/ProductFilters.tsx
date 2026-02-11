"use client";

import { Label } from "@/app/ui/label";
//import { Slider } from "@/app/ui/slider";
import * as Slider from "@radix-ui/react-slider";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/app/ui/select";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/app/ui/card";
import { useLanguage } from "@/app/lib/i18n";
import { Filter, RotateCcw } from "lucide-react";
import { Button } from "@/app/ui/button";
import { useState } from "react";

export default function ProductFilters() {
  const { language } = useLanguage();
  const [priceRange, setPriceRange] = useState([200000, 1000000]);
  const [roomSize, setRoomSize] = useState([8, 100]);

  const t = {
    filters: language === "hu" ? "Szűrők" : "Filters",
    brand: language === "hu" ? "Márka" : "Brand",
    price: language === "hu" ? "Ár" : "Price",
    roomSize: language === "hu" ? "Helyiségméret" : "Room size",
    capacity: language === "hu" ? "Teljesítmény" : "Capacity",
    all: language === "hu" ? "Összes" : "All",
    apply: language === "hu" ? "Szűrés alkalmazása" : "Apply Filters",
    clear: language === "hu" ? "Szűrők törlése" : "Clear All",
  };

  return (
    <Card className="h-fit sticky top-24">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-4">
        <CardTitle className="text-lg font-bold flex items-center gap-2">
          <Filter className="w-4 h-4" />
          {t.filters}
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* Brand Filter */}
        <div className="space-y-2">
          <Label className="flex items-center gap-2">
            {/* <Tag className="w-3.5 h-3.5 text-muted-foreground" /> */}
            {t.brand}
          </Label>
          <Select defaultValue="all">
            <SelectTrigger>
              <SelectValue placeholder={t.all} />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">{t.all}</SelectItem>
              <SelectItem value="syen">Syen</SelectItem>
              <SelectItem value="gree">Gree</SelectItem>
              <SelectItem value="daikin">Daikin</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Price Filter */}
        <div className="space-y-4">
          <div className="flex justify-between">
            <Label className="flex items-center gap-2">
              {/* <Zap className="w-3.5 h-3.5 text-muted-foreground" /> */}
              {t.price}
            </Label>
            <span className="text-[10px] text-muted-foreground whitespace-nowrap">
              {priceRange[0].toLocaleString()} - {priceRange[1].toLocaleString()} Ft
            </span>
          </div>
          {/* <Slider 
            value={priceRange} 
            onValueChange={setPriceRange}
            max={1000000} 
            step={10000} 
            minStepsBetweenThumbs={1}
          /> */}
          <Slider.Root
            className="relative flex items-center select-none touch-none w-full h-5"
            value={priceRange}
            onValueChange={(val) => setPriceRange(val as [number, number])}
            min={200000}
            max={1000000}
            step={10000}
            minStepsBetweenThumbs={1} 
          >
            {/* Track */}
            <Slider.Track className="bg-gray-200 relative grow rounded-full h-2">
              {/* Range (kijelölt rész) */}
              <Slider.Range className="absolute bg-primary rounded-full h-full" />
            </Slider.Track>

            {/* Bal thumb */}
            <Slider.Thumb className="block w-4 h-4 bg-white border border-gray-400 rounded-full shadow hover:bg-gray-50 focus:outline-none" />

            {/* Jobb thumb */}
            <Slider.Thumb className="block w-4 h-4 bg-white border border-gray-400 rounded-full shadow hover:bg-gray-50 focus:outline-none" />
          </Slider.Root>
        </div>

        {/* Room Size Filter */}
        <div className="space-y-4">
          <div className="flex justify-between">
            <Label className="flex items-center gap-2">
              {/* <Maximize className="w-3.5 h-3.5 text-muted-foreground" /> */}
              {t.roomSize}
            </Label>
            <span className="text-[10px] text-muted-foreground whitespace-nowrap">
              {roomSize[0]} - {roomSize[1]} m²
            </span>
          </div>
          {/* <Slider 
            value={roomSize} 
            onValueChange={setRoomSize}
            max={100} 
            step={1} 
            minStepsBetweenThumbs={1}
          /> */}
          <Slider.Root
            className="relative flex items-center select-none touch-none w-full h-5"
            value={roomSize}
            onValueChange={(val) => setRoomSize(val as [number, number])}
            min={8}
            max={100}
            step={1}
            minStepsBetweenThumbs={1} 
          >
            {/* Track */}
            <Slider.Track className="bg-gray-200 relative grow rounded-full h-2">
              {/* Range (kijelölt rész) */}
              <Slider.Range className="absolute bg-primary rounded-full h-full" />
            </Slider.Track>

            {/* Bal thumb */}
            <Slider.Thumb className="block w-4 h-4 bg-white border border-gray-400 rounded-full shadow hover:bg-gray-50 focus:outline-none" />

            {/* Jobb thumb */}
            <Slider.Thumb className="block w-4 h-4 bg-white border border-gray-400 rounded-full shadow hover:bg-gray-50 focus:outline-none" />
          </Slider.Root>
        </div>

        {/* Capacity Filter */}
        <div className="space-y-2">
          <Label className="flex items-center gap-2">
            {/* <Zap className="w-3.5 h-3.5 text-muted-foreground" /> */}
            {t.capacity}
          </Label>
          <Select defaultValue="all">
            <SelectTrigger>
              <SelectValue placeholder={t.all} />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">{t.all}</SelectItem>
              <SelectItem value="2.7">2.7 kW</SelectItem>
              <SelectItem value="3.2">3.2 kW</SelectItem>
              <SelectItem value="4.6">4.6 kW</SelectItem>
              <SelectItem value="6.2">6.2 kW</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </CardContent>
      <CardFooter className="flex flex-col gap-2 pt-0">
        <Button className="w-full bg-primary hover:bg-primary/90">
          {t.apply}
        </Button>
        <Button variant="ghost" className="w-full text-muted-foreground text-xs h-8">
          <RotateCcw className="w-3.5 h-3.5 mr-2" />
          {t.clear}
        </Button>
      </CardFooter>
    </Card>
  );
}
