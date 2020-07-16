### Usage
To init the grid container, use the ***t-grid*** component. Add child ***div***
elements to create the cells. By default, all grid are stacked. To place them
side by side, add one of the classes from the **Width component**.

```vue
<template>
    <t-grid>
        <div>
            <t-button>
                Item
            </t-button>
        </div>

        <div>
            <t-button>
                Item
            </t-button>
        </div>

        <div>
            <t-button>
                Item
            </t-button>
        </div>
    </t-grid>
</template>
```

&nbsp;
&nbsp;
&nbsp;

### Gutter modifiers
The grid component comes with a default gutter, that is decreased automatically
from a certain breakpoint, usually on a small dekstop viewport width. To apply a
different gutter, use the ***:gutter*** prop.

```vue
<template>
    <div>
        <div class="t-margin">
            <p>Small Gutter</p>
            <t-grid
                class="t-child-width-expand
                    t-text-center"
                :gutter="'small'">
                <div>
                    <div
                        class="t-card
                            t-card-body
                            t-card-default">
                        Item
                    </div>
                </div>

                <div>
                    <div
                        class="t-card
                            t-card-body
                            t-card-default">
                        Item
                    </div>
                </div>

                <div>
                    <div
                        class="t-card
                            t-card-body
                            t-card-default">
                        Item
                    </div>
                </div>
            </t-grid>
        </div>

        <div class="t-margin">
            <p>Medium Gutter</p>
            <t-grid
                class="t-child-width-expand
                    t-text-center"
                :gutter="'medium'">
                <div>
                    <div
                        class="t-card
                            t-card-body
                            t-card-default">
                        Item
                    </div>
                </div>

                <div>
                    <div
                        class="t-card
                            t-card-body
                            t-card-default">
                        Item
                    </div>
                </div>

                <div>
                    <div
                        class="t-card
                            t-card-body
                            t-card-default">
                        Item
                    </div>
                </div>
            </t-grid>
        </div>

        <div class="t-margin">
            <p>Large Gutter</p>
            <t-grid
                class="t-child-width-expand
                    t-text-center"
                :gutter="'large'">
                <div>
                    <div
                        class="t-card
                            t-card-body
                            t-card-default">
                        Item
                    </div>
                </div>

                <div>
                    <div
                        class="t-card
                            t-card-body
                            t-card-default">
                        Item
                    </div>
                </div>

                <div>
                    <div
                        class="t-card
                            t-card-body
                            t-card-default">
                        Item
                    </div>
                </div>
            </t-grid>
        </div>

        <div class="t-margin">
            <p>Collapse Gutter</p>
            <t-grid
                class="t-child-width-expand
                    t-text-center"
                :gutter="'collapse'">
                <div>
                    <div
                        class="t-card
                            t-card-body
                            t-card-default">
                        Item
                    </div>
                </div>

                <div>
                    <div
                        class="t-card
                            t-card-body
                            t-card-default">
                        Item
                    </div>
                </div>

                <div>
                    <div
                        class="t-card
                            t-card-body
                            t-card-default">
                        Item
                    </div>
                </div>
            </t-grid>
        </div>
    </div>
</template>
```

&nbsp;
&nbsp;
&nbsp;

### Divider modifier
Set the ***:divider*** prop to true to seperate the grid cells with lines. This
option can combined with the ***:gutter*** prop. As soon as the grid stackes,
the divider lines will become horizontal.

```vue
<template>
    <t-grid
        :divider="true"
        class="t-child-width-expand">
        <div class="t-first-column">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </div>

        <div>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </div>

        <div>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </div>
    </t-grid>
</template>
```
