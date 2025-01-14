import { Button, Rows, Text } from "@canva/app-ui-kit";
import { addNativeElement } from "@canva/design";
import * as React from "react";
import styles from "styles/components.css";
import { auth } from "@canva/user";

export const App = () => {
  const onClick = async() => {
    const result = await auth.requestAuthentication();
    addNativeElement({
      type: "TEXT",
      children: ["Hello world!"],
    });
  };

  return (
    <div className={styles.scrollContainer}>
      <Rows spacing="2u">
        <Text>
          To make changes to this app, edit the{" "}
          <code className={styles.code}>src/app.tsx</code> file, then close and
          reopen the app in the editor to preview the changes.
        </Text>
        <Button variant="primary" onClick={onClick} stretch>
          Let's Auth!
        </Button>
      </Rows>
    </div>
  );
};
