---
name: 'component'
root: './src'
output: '**/*'
ignore: []
questions:
  name: 'Please enter component name.'
  category: 'Please enter category name.'
---

# `{{inputs.name}}/index.ts`

```ts
export * from './{{inputs.name}}';
```

# `{{inputs.name}}/{{inputs.name}}.tsx`

```tsx
import { ReactNode } from "react";

export type {{ pascal(inputs.name) }}Props = {
  children: ReactNode;
};

export const {{ pascal(inputs.name) }} = ({ children }: {{ pascal(inputs.name) }}Props) => {
  return (
    <span>
      {children}
    </span>
  );
};
```

# `{{inputs.name}}/{{inputs.name}}.stories.tsx`

```tsx
import { Meta, StoryObj } from "@storybook/react";

import { {{ pascal(inputs.name) }} } from "./{{ inputs.name }}";

const meta: Meta<typeof {{ pascal(inputs.name) }}> = {
  title: "Components / {{ pascal(inputs.category) }} / {{ pascal(inputs.name) }}",
  component: {{ pascal(inputs.name) }},
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof {{ pascal(inputs.name) }}>;

export const Primary: Story = {
  args: {
    children: "sample text",
  },
};
```
