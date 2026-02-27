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
import { useState, useMemo, useEffect } from "react";
import { Product } from "../lib/products";
import { number } from "framer-motion";

type Props = {
  products: Product[];
};

export default function ProductFilters({ products }: Props) {
  const { language } = useLanguage();

  type Filters = {
    brand: string | null;
    priceRange: number[];
    power: number | null;
    roomSizes: string[];
  };

  const prices = products.map((p) => p.priceNum);

  const [filters, setFilters] = useState<Filters>({
    brand: "all",
    priceRange: [Math.min(...prices), Math.max(...prices)],
    power: 0,
    roomSizes: [],
  });

  const filteredProducts = useMemo(() => {
    return products.filter((p) => {
      if (filters.brand !== "all" && p.brand !== filters.brand) return false;
      if (filters.power !== 0 && p.powerCooling !== filters.power) return false;
      if (
        filters.roomSizes.length > 0 &&
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
    const tempFilteredProducts = products.filter((p) => {
      if (filters.power && p.powerCooling !== filters.power) return false;
      if (
        filters.roomSizes.length > 0 &&
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

    return [...new Set(tempFilteredProducts.map((p) => p.brand))];
  }, [products, filters.power, filters.roomSizes, filters.priceRange]);

  const priceRange = useMemo(() => {
    const tempFilteredProducts = products.filter((p) => {
      if (filters.brand !== "all" && p.brand !== filters.brand) return false;
      if (filters.power !== 0 && p.powerCooling !== filters.power) return false;
      if (
        filters.roomSizes.length > 0 &&
        (p.roomSize === null || !filters.roomSizes.includes(p.roomSize))
      ) {
        return false;
      }

      return true;
    });

    const prices = tempFilteredProducts.map((p) => p.priceNum);
    const pr = [Math.min(...prices), Math.max(...prices)];

    console.log("pr", pr);

    return pr;
  }, [products, filters.power, filters.roomSizes, filters.brand]);

  const powers = useMemo(() => {
    const tempFilteredProducts = products.filter((p) => {
      if (filters.brand !== "all" && p.brand !== filters.brand) return false;
      if (
        filters.roomSizes.length > 0 &&
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

    console.log("powers tempFilteredProducts", tempFilteredProducts);

    const tempPowers = [
      ...new Set(tempFilteredProducts.map((p) => p.powerCooling)),
    ];
    const sortedPowers = tempPowers.sort();

    return sortedPowers;
  }, [products, filters.priceRange, filters.roomSizes, filters.brand]);

  const roomSizes = useMemo(() => {
    const tempFilteredProducts = products.filter((p) => {
      if (filters.brand !== "all" && p.brand !== filters.brand) return false;
      if (filters.power !== 0 && p.powerCooling !== filters.power) return false;

      if (filters.priceRange) {
        const [min, max] = filters.priceRange;
        if (p.priceNum < min || p.priceNum > max) return false;
      }

      return true;
    });

    const tempRoomSizes = [
      ...new Set(tempFilteredProducts.map((p) => p.roomSize + "")),
    ];
    console.log(tempRoomSizes);

    const sortedRommSizes = [...tempRoomSizes].sort((a, b) => {
      const startA = Number(a.split("-")[0]);
      const startB = Number(b.split("-")[0]);
      return startA - startB;
    });

    return sortedRommSizes;
  }, [products, filters.power, filters.brand, filters.priceRange]);

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

    const current = filters.roomSizes ?? []; // null esetén üres tömb
    const newRoomSizes = current.includes(id)
      ? current.filter((i) => i !== id) // toggle off
      : [...current, id];

    setFilters((prev) => {
      return { ...prev, roomSizes: newRoomSizes };
    });

    const tempFilteredProducts = products.filter((p) => {
      if (filters.brand !== "all" && p.brand !== filters.brand) return false;
      if (filters.power && p.powerCooling !== filters.power) return false;
      if (
        newRoomSizes.length > 0 &&
        (p.roomSize === null || !newRoomSizes.includes(p.roomSize))
      ) {
        return false;
      }

      return true;
    });

    const prices = tempFilteredProducts.map((p) => p.priceNum);

    const newPriceRange = [Math.min(...prices), Math.max(...prices)];

    if (newPriceRange[0] > filters.priceRange[0]) {
      setFilters((prev) => ({
        ...prev,
        priceRange: [newPriceRange[0], prev.priceRange[1]],
      }));
    }
    if (newPriceRange[1] < filters.priceRange[1]) {
      setFilters((prev) => ({
        ...prev,
        priceRange: [prev.priceRange[0], newPriceRange[1]],
      }));
    }

    console.log("newRoomSizes", newRoomSizes);
  };

  function selectBrand(val: string) {
    setFilters((prev) => ({ ...prev, brand: val }));

    const tempFilteredProducts = products.filter((p) => {
      if (val !== "all" && p.brand !== val) return false;
      if (filters.power && p.powerCooling !== filters.power) return false;
      if (
        filters.roomSizes.length > 0 &&
        (p.roomSize === null || !filters.roomSizes.includes(p.roomSize))
      ) {
        return false;
      }

      return true;
    });

    const prices = tempFilteredProducts.map((p) => p.priceNum);

    const newPriceRange = [Math.min(...prices), Math.max(...prices)];

    if (newPriceRange[0] > filters.priceRange[0]) {
      setFilters((prev) => ({
        ...prev,
        priceRange: [newPriceRange[0], prev.priceRange[1]],
      }));
    }
    if (newPriceRange[1] < filters.priceRange[1]) {
      setFilters((prev) => ({
        ...prev,
        priceRange: [prev.priceRange[0], newPriceRange[1]],
      }));
    }
  }

  function selectPower(val: string) {
    setFilters((prev) => ({ ...prev, power: Number(val) }));

    const tempFilteredProducts = products.filter((p) => {
      if (filters.brand !== "all" && p.brand !== filters.brand) return false;
      if (Number(val) !== 0 && p.powerCooling !== Number(val)) return false;
      if (
        filters.roomSizes.length > 0 &&
        (p.roomSize === null || !filters.roomSizes.includes(p.roomSize))
      ) {
        return false;
      }

      return true;
    });

    const prices = tempFilteredProducts.map((p) => p.priceNum);

    const newPriceRange = [Math.min(...prices), Math.max(...prices)];

    if (newPriceRange[0] > filters.priceRange[0]) {
      setFilters((prev) => ({
        ...prev,
        priceRange: [newPriceRange[0], prev.priceRange[1]],
      }));
    }
    if (newPriceRange[1] < filters.priceRange[1]) {
      setFilters((prev) => ({
        ...prev,
        priceRange: [prev.priceRange[0], newPriceRange[1]],
      }));
    }
  }

  function resetFilters() {

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
              {filters.priceRange[0].toLocaleString()} -{" "}
              {filters.priceRange[1].toLocaleString()} Ft
            </span>
          </div>
          <Slider.Root
            className="relative flex items-center select-none touch-none w-full h-5"
            value={filters.priceRange}
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
          <Select defaultValue="0" onValueChange={selectPower}>
            <SelectTrigger>
              <SelectValue placeholder={t.all} />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="0">{t.all}</SelectItem>
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
                  checked={filters.roomSizes.includes(roomSize)}
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
