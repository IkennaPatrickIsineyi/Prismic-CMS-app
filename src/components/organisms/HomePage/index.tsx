"use client";

import { Flex, Text } from "@mantine/core";

type Props = {
  title: string;
  slogan: string;
};

export default function HomePage({ title, slogan }: Props) {
  return (
    <Flex direction={"column"}>
      {/* Title */}
      <Text fz={"h4"}>{title}</Text>

      {/* Slogan */}
      <Text fz={"sm"}>{slogan}</Text>
    </Flex>
  );
}
