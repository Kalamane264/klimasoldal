"use client";

import { Label } from "@/app/ui/label";
import * as Slider from "@radix-ui/react-slider";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/app/ui/select";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/app/ui/card";
import { useLanguage } from "@/app/lib/i18n";
import { Filter, RotateCcw } from "lucide-react";
import { Button } from "@/app/ui/button";
import { Checkbox } from "@/app/ui/checkbox";
import { useState, useMemo } from "react";
import { Product } from "../lib/products";

type Props = {
  products: Product[];
};

export default function ProductFilters({ products }: Props) {
  const { language } = useLanguage();

  type Filters = {
    brand: string | null;
    priceRange: [number, number] | null;
    power: number | null;
    roomSizes: string[] | null;
  };

  const [filters, setFilters] = useState<Filters>({
    brand: null,
    priceRange: null,
    power: null,
    roomSizes: null,
  });

  const filteredProducts = useMemo(() => {
    return products.filter((p) => {
      if (filters.brand && p.brand !== filters.brand) return false;
      if (filters.power && p.powerCooling !== filters.power) return false;
      if (
        filters.roomSizes &&
        (p.roomSize === null || !filters.roomSizes.includes(p.roomSize))
      ) {
        return false;
      }

      if (filters.priceRange) {
        const [min, max] = filters.priceRange;
        if (p.priceNum < min || p.priceNum > max) return false;
      }

      return true;
    });
  }, [products, filters]);

  const brands = useMemo(() => {
    return [...new Set(filteredProducts.map((p) => p.brand))];
  }, [filteredProducts]);

  const priceRange = useMemo(() => {
    if (filteredProducts.length === 0) return [0, 0];

    const prices = filteredProducts.map((p) => p.priceNum);
    return [Math.min(...prices), Math.max(...prices)];
  }, [filteredProducts]);

  const powers = useMemo(() => {
    return [...new Set(filteredProducts.map((p) => p.powerCooling))];
  }, [filteredProducts]);

  const roomSizes = useMemo(() => {
    return [...new Set(filteredProducts.map((p) => p.roomSize + ""))];
  }, [filteredProducts]);

  // const [selectedRoomSizes, setSelectedRoomSizes] = useState<string[]>([]);

  const t = {
    filters: language === "hu" ? "Szűrők" : "Filters",
    brand: language === "hu" ? "Márka" : "Brand",
    price: language === "hu" ? "Ár" : "Price",
    roomSize: language === "hu" ? "Helyiségméret" : "Room size",
    capacity: language === "hu" ? "Teljesítmény" : "Capacity",
    all: language === "hu" ? "Összes" : "All",
    apply: language === "hu" ? "Szűrés alkalmazása" : "Apply Filters",
    clear: language === "hu" ? "Szűrők törlése" : "Clear All",
    decimalDelimiter: language === "hu" ? "," : ".",
  };

  const toggleRoomSize = (id: string) => {
    setFilters((prev) => {
      const current = prev.roomSizes ?? []; // null esetén üres tömb
      const newRoomSizes = current.includes(id)
        ? current.filter((i) => i !== id) // toggle off
        : [...current, id]; // toggle on

      return { ...prev, roomSizes: newRoomSizes };
    });
  };

  function selectBrand(val: string) {
    setFilters((prev) => ({ ...prev, brand: val }));
  }

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
          <Select defaultValue="all" onValueChange={selectBrand}>
            <SelectTrigger>
              <SelectValue placeholder={t.all} />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">{t.all}</SelectItem>
              {brands.map((brand) => (
                <SelectItem key={brand} value={brand}>
                  {brand}
                </SelectItem>
              ))}
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
              {priceRange[0].toLocaleString()} -{" "}
              {priceRange[1].toLocaleString()} Ft
            </span>
          </div>
          <Slider.Root
            className="relative flex items-center select-none touch-none w-full h-5"
            value={priceRange}
            onValueChange={(val) =>
              setFilters((prev) => ({
                ...prev,
                priceRange: val as [number, number],
              }))
            }
            min={priceRange[0]}
            max={priceRange[1]}
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
              {powers.map((power) => (
                <SelectItem key={power} value={power + ""}>
                  {(power + "").replace(".", t.decimalDelimiter)} kW
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        {/* Room Size Filter */}
        <div className="space-y-3">
          <Label className="flex items-center gap-2">
            {/* <Maximize className="w-3.5 h-3.5 text-muted-foreground" /> */}
            {t.roomSize}
          </Label>
          <div className="grid gap-2">
            {roomSizes.map((roomSize) => (
              <div key={roomSize} className="flex items-center space-x-2">
                <Checkbox
                  id={roomSize}
                  checked={filters.roomSizes?.includes(roomSize)}
                  onCheckedChange={() => toggleRoomSize(roomSize)}
                />
                <label
                  htmlFor={roomSize}
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 cursor-pointer"
                >
                  {roomSize} m²
                </label>
              </div>
            ))}
          </div>
        </div>
        {/*  <div className="space-y-4">
          <div className="flex justify-between">
            <Label className="flex items-center gap-2">
              {t.roomSize}
            </Label>
            <span className="text-[10px] text-muted-foreground whitespace-nowrap">
              {roomSize[0]} - {roomSize[1]} m²
            </span>
          </div>
          <Slider.Root
            className="relative flex items-center select-none touch-none w-full h-5"
            value={roomSize}
            onValueChange={(val) => setRoomSize(val as [number, number])}
            min={8}
            max={100}
            step={1}
            minStepsBetweenThumbs={1} 
          >
            <Slider.Track className="bg-gray-200 relative grow rounded-full h-2">
              <Slider.Range className="absolute bg-primary rounded-full h-full" />
            </Slider.Track>
            <Slider.Thumb className="block w-4 h-4 bg-white border border-gray-400 rounded-full shadow hover:bg-gray-50 focus:outline-none" />
            <Slider.Thumb className="block w-4 h-4 bg-white border border-gray-400 rounded-full shadow hover:bg-gray-50 focus:outline-none" />
          </Slider.Root>
        </div> */}
      </CardContent>
      <CardFooter className="flex flex-col gap-2 pt-0">
        {/*  <Button className="w-full bg-primary hover:bg-primary/90">
          {t.apply}
        </Button> */}
        <Button
          variant="ghost"
          className="w-full text-muted-foreground text-xs h-8 cursor-pointer"
        >
          <RotateCcw className="w-3.5 h-3.5 mr-2" />
          {t.clear}
        </Button>
      </CardFooter>
    </Card>
  );
}
