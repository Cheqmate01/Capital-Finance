<template>
  <div class="flex flex-col gap-y-5 text-lg">
    <slot name="heading"></slot>
    <slot></slot>
  </div>
</template>

<style>
a {
  color: white;
}

a:hover {
  color: #00bfff;
}

li p {
  margin-bottom: calc(var(--spacing) * 2);
}
</style>