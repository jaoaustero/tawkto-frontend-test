### Usage
The Card component consiste of the card itself, the card body and an optional card title. Typically
cards are arranged in grid columns from the Grid component.

&nbsp;
&nbsp;
&nbsp;

```vue
<template>
    <div class="t-width-2-5">
        <t-card>
            <t-card-body>
                <h3 class="t-card-title">Default</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                ut labore et dolore magna aliqua</p>
            </t-card-body>
        </t-card>
    </div>
</template>
```

&nbsp;
&nbsp;
&nbsp;

### Style modifiers
Istilo includes a number of modifiers can be used to add specific style to cards.
```vue
<template>
    <section class="t-grid">
        <div class="t-width-1-3">
            <t-card>
                <t-card-body>
                    <h3 class="t-card-title">Default</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                    ut labore et dolore magna aliqua</p>
                </t-card-body>
            </t-card>
        </div>

        <div class="t-width-1-3">
            <t-card
                :color="'primary'">
                <t-card-body>
                    <h3 class="t-card-title">Primary</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                    ut labore et dolore magna aliqua</p>
                </t-card-body>
            </t-card>
        </div>

        <div class="t-width-1-3">
            <t-card
                :color="'secondary'">
                <t-card-body>
                    <h3 class="t-card-title">Secondary</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                    ut labore et dolore magna aliqua</p>
                </t-card-body>
            </t-card>
        </div>
    </section>
</template>
```

&nbsp;
&nbsp;
&nbsp;

### Size modifiers
You can apply different size modifiers to cards that will decrease or increase their padding.
```vue
<template>
    <section class="t-grid">
        <div class="t-width-1-2">
            <t-card
                :size="'small'">
                <t-card-body>
                    <h3 class="t-card-title">Small</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                    ut labore et dolore magna aliqua</p>
                </t-card-body>
            </t-card>
        </div>

        <div class="t-width-1-2">
            <t-card
                :size="'large'">
                <t-card-body>
                    <h3 class="t-card-title">Lare</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                    ut labore et dolore magna aliqua</p>
                </t-card-body>
            </t-card>
        </div>
    </section>
</template>
```


### Header & Footer
You can also divider a card into header and footer by using the ***t-card-header*** and ***t-card-footer*** component inside of ***t-card***
```vue
<template>
    <div class="t-width-1-3">
        <t-card>
            <t-card-header>
                <h3 class="t-card-title">Title</h3>
            </t-card-header>
            <t-card-body>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
            </t-card-body>
            <t-card-footer>
                <a>Read more</a>
            </t-card-footer>
        </t-card>
    </div>
</template>
```
