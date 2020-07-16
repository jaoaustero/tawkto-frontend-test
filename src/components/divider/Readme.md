### Usage
Use the ***t-divider*** component to add horizontal line for dividing a
section.

```vue
<template>
    <div>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
        eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>

        <t-divider />

        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
        eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
    </div>
</template>
```

&nbsp;
&nbsp;
&nbsp;

### Title modifier
Turn horizontal line to block element with light gray background with title,
use the ***:title*** and pass a string for label.

```vue
<template>
    <div>
        <h3 class="t-text-headline
                t-margin-remove">
            Headline
        </h3>

        <t-divider
            :title="'Title modifier'"/>

        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
        eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
    </div>
</template>
```
