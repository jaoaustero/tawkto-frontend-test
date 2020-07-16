### Usage
Add the ***v-margin*** attribute on the element to enable the margin.

&nbsp;
&nbsp;
&nbsp;

```vue
<template>
    <div>
        <span v-margin>Foo</span>
        <span v-margin>Bar</span>
    </div>
</template>
```

&nbsp;
&nbsp;
&nbsp;

### Size modifier
Pass the size as value of the directive.

```vue
<template>
    <div>
        <span v-margin="large">Foo</span>
    </div>
</template>
```

&nbsp;
&nbsp;
&nbsp;

### Position modifier
Just add the ***top***, ***bottom***, ***left*** or ***right*** modifiers after
the ***v-margin***.

```vue
<template>
    <div>
        <span v-margin.top>Foo</span>
        <span v-margin.bottom="large">Bar</span>
    </div>
</template>
```

&nbsp;
&nbsp;
&nbsp;

### Remove modifier
Just add the ***top***, ***bottom***, ***left*** or ***right*** modifiers after
the ***v-margin***.

```vue
<template>
    <div>
        <span v-margin.remove.top>Foo</span>
        <span v-margin.remove.bottom>Bar</span>
    </div>
</template>
```
