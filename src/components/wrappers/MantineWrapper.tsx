import { createTheme, MantineProvider } from "@mantine/core";
import { PropsWithChildren } from "react";

import "@mantine/core/styles.css";

type Props = {} & PropsWithChildren;

export default function MantineWrapper({ children }: Props) {
  const theme = createTheme({
    /** Put your mantine theme override here */
  });

  return <MantineProvider theme={theme}>{children}</MantineProvider>;
}
