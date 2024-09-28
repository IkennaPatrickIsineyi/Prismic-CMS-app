import MantineWrapper from "@/components/wrappers/MantineWrapper";
import { Box } from "@mantine/core";
import { PropsWithChildren } from "react";
import { Toaster } from "sonner";

type Props = {} & PropsWithChildren;
export default function RootLayout({ children }: Props) {
  return (
    <MantineWrapper>
      <Toaster richColors position="top-right" />
      <Box>{children}</Box>
    </MantineWrapper>
  );
}
