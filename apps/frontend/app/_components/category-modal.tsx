import { Button } from "@/components/ui/button";
import { Heading } from "@/components/ui/heading";
import { Input, InputField } from "@/components/ui/input";
import {
  Modal,
  ModalBackdrop,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
} from "@/components/ui/modal";
import React from "react";
import { Text } from "react-native";

export default function CategoryModal({
  isOpen,
  isEdit,
  onClose,
}: {
  isOpen: boolean;
  isEdit: boolean;
  onClose: () => void;
}) {
  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalBackdrop />
        <ModalContent>
          <ModalHeader>
            <Heading size="lg">カテゴリーの{isEdit ? "編集" : "登録"}</Heading>
          </ModalHeader>
          <ModalBody>
            <Input>
              <InputField
                placeholder="カテゴリー名を入力してください"
                className="bg-gray-100"
              />
            </Input>
          </ModalBody>
          <ModalFooter className="w-full">
            <Button action="secondary" onPress={onClose}>
              <Text>キャンセル</Text>
            </Button>
            <Button action="positive" onPress={() => console.log("save")}>
              <Text className="text-white font-bold">
                {isEdit ? "更新" : "登録"}
              </Text>
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
