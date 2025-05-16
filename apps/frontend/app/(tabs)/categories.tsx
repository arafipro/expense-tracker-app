import { Box } from "@/components/ui/box";
import React from "react";
import CategoryCard from "../_components/category-card";
import CategoryHeader from "../_components/category-header";

export default function Tabs() {
  return (
    <Box className="flex-1 bg-white">
      <CategoryHeader />
      <Box className="flex-1 bg-gray-100 gap-4 pt-4">
        <CategoryCard className="w-11/12 mx-auto" />
      </Box>
    </Box>
  );
}
