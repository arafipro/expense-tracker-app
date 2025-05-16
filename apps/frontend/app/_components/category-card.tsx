import { Button, ButtonIcon } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Heading } from "@/components/ui/heading";
import { EditIcon, TrashIcon } from "@/components/ui/icon";
import React, { useState } from "react";
import CategoryAlertDialog from "./category-alert-dialog";
import CategoryModal from "./category-modal";

export default function CategoryCard({ className }: { className?: string }) {
  const [showModal, setShowModal] = useState(false);
  const [showAlertDialog, setShowAlertDialog] = useState(false);
  return (
    <Card
      className={`bg-white p-4 flex-row items-center rounded-lg shadow-md ${className}`}
    >
      <Heading size="lg" className="mr-auto">
        カテゴリー
      </Heading>
      <Button
        variant="link"
        onPress={() => {
          setShowModal(true);
        }}
      >
        <ButtonIcon as={EditIcon} className="m-2 w-6 h-6 text-blue-500 " />
      </Button>
      <CategoryModal
        isOpen={showModal}
        isEdit={true}
        onClose={() => setShowModal(false)}
      />
      <Button
        variant="link"
        onPress={() => {
          setShowAlertDialog(true);
        }}
      >
        <ButtonIcon as={TrashIcon} className="m-2 w-6 h-6 text-red-500 " />
      </Button>
      <CategoryAlertDialog
        isOpen={showAlertDialog}
        onClose={() => setShowAlertDialog(false)}
      />
    </Card>
  );
}
