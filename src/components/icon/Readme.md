### Usage
Use the ***t-icon*** component to define icon, the default icon is font-awesome.

&nbsp;
&nbsp;
&nbsp;

```vue
<template>
    <t-icon
        :type="'camera-retro'"/>
</template>
```

&nbsp;
&nbsp;
&nbsp;

### Side Modifier
Add the ***:size*** prop to modify the font size of props.

```vue
<template>
    <div>
        <t-icon
            :type="'camera-retro'"/>

        <t-icon
            :type="'camera-retro'"
            :size="'2x'"/>

        <t-icon
            :type="'camera-retro'"
            :size="'3x'"/>

        <t-icon
            :type="'camera-retro'"
            :size="'4x'"/>

        <t-icon
            :type="'camera-retro'"
            :size="'5x'"/>
    </div>
</template>
```

### Margin Right Modifier
Add the ***:marginRight*** prop to modify the font size of props, the margin
value will be based on the margin scss.

```vue
<template>
    <div>
        <t-icon
            :type="'camera-retro'"
            :marginRight="'small'"/>
        <span>Camera Retro</span>
    </div>
</template>
```
