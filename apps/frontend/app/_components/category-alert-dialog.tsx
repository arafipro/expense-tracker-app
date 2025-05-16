import {
  AlertDialog,
  AlertDialogBackdrop,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import { Heading } from "@/components/ui/heading";
import React from "react";
import { Text } from "react-native";

export default function CategoryAlertDialog({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) {
  return (
    <>
      <AlertDialog isOpen={isOpen} onClose={onClose}>
        <AlertDialogBackdrop />
        <AlertDialogContent>
          <AlertDialogHeader className="mb-4">
            <Heading size="lg">カテゴリーを削除しますか？</Heading>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <Button action="secondary" onPress={onClose}>
              <Text>キャンセル</Text>
            </Button>
            <Button action="negative" onPress={() => console.log("delete")}>
              <Text className="text-white font-bold">削除</Text>
            </Button>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  );
};