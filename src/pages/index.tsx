import * as React from "react";
import type { HeadFC } from "gatsby";
import { Alert, Button, Checkbox, Range } from "react-daisyui";

const IndexPage = () => {
  return (
    <main className="pd-4">
      <Button animation>Good</Button>
      <Alert status="success">This is good.</Alert>
      <Checkbox></Checkbox>
      <Range></Range>
    </main>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>Home Page</title>;
