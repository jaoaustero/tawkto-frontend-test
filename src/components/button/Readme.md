### Usage
To create a button, use the ***t-button*** component.

&nbsp;
&nbsp;
&nbsp;

```vue
<template>
    <t-button>Default</t-button>
</template>
```

&nbsp;
&nbsp;
&nbsp;

### Color modifiers
There are several style modifiers applied with the ***:color*** prop.
```vue
<template>
    <div>
        <t-button
            :color="'primary'">
            Primary
        </t-button>

        <t-button
            :color="'secondary'">
            Secondary
        </t-button>

        <t-button
            :color="'success'">
            Success
        </t-button>

        <t-button
            :color="'warning'">
            Warning
        </t-button>

        <t-button
            :color="'danger'">
            Danger
        </t-button>
    </div>
</template>
```

&nbsp;
&nbsp;
&nbsp;

### Full Width modifiers
Setting the ***:fillWidth*** prop as true it will apply a full width class.

```vue
<template>
    <t-button
        :fullWidth="true">
        Full Width
    </t-button>
</template>
```

&nbsp;
&nbsp;
&nbsp;

### Link modifiers
If you want anchor with a button style, create ***:href*** and pass a URL it will automatically convert anchor tag with a button style.

```vue
<template>
    <t-button
        :href="'https://www.google.com'">
        Link Button
    </t-button>
</template>
```

&nbsp;
&nbsp;
&nbsp;

### Loading modifiers
Make the ***:loading*** prop as true it will automatically disabled and change the label into loading icon.

```vue
<template>
    <t-button
        :loading="true">
        Loading Button
    </t-button>
</template>
```

&nbsp;
&nbsp;
&nbsp;

### Outline modifiers
If you want outline button style, just pass true boolean on ***:outline*** prop it will remove the background and change preserve the border. The color of border will be dependent on ***:color*** prop.

```vue
<template>
    <t-button
        :color="'primary'"
        :outline="true">
        Outline Primary
    </t-button>
</template>
```

&nbsp;
&nbsp;
&nbsp;

### Size modifiers
There are several size modifiers applied with the ***:size*** prop.

```vue
<template>
    <t-button
        :size="'large'">
        Large Size
    </t-button>
</template>
```

&nbsp;
&nbsp;
&nbsp;

### Text modifiers
These will remove the background and padding. The color will be dependent on ***:color*** prop.

```vue
<template>
    <t-button
        :color="'primary'"
        :text="true">
        Text Button
    </t-button>
</template>
```
