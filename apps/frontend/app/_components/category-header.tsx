import { Box } from "@/components/ui/box";
import { Fab, FabIcon } from "@/components/ui/fab";
import { Heading } from "@/components/ui/heading";
import { AddIcon } from "@/components/ui/icon";
import React, { useState } from "react";
import CategoryModal from "./category-modal";

export default function CategoryHeader() {
  const [showModal, setShowModal] = useState(false);
  return (
    <Box className="h-16 flex-row items-center justify-between mx-8 my-4">
      <Heading size="2xl">カテゴリー</Heading>
      <Fab
        size="sm"
        onPress={() => {
          setShowModal(true);
        }}
      >
        <FabIcon as={AddIcon} />
      </Fab>
      <CategoryModal
        isOpen={showModal}
        isEdit={false}
        onClose={() => setShowModal(false)}
      />
    </Box>
  );
}
