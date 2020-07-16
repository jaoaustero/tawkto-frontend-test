### Usage
Use the ***t-fieldset*** component to define a fieldset inside of the form.

&nbsp;
&nbsp;
&nbsp;

```vue
<template>
    <t-form>
        <t-fieldset>
            <t-input
                :label="'Input'"/>
        </t-fieldset>
    </t-form>
</template>
```

&nbsp;
&nbsp;
&nbsp;

### Legend
Add ***:legend*** prop to have legend element inside of the fieldset to define
a title of the fieldset.


```vue
<template>
    <t-form>
        <t-fieldset
            :legend="'Legend'">
            <t-input
                :label="'Input'"/>
        </t-fieldset>
    </t-form>
</template>
```
