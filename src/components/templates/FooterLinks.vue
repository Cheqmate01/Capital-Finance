<template>
  <div class="flex flex-col gap-y-5">
    <slot name="heading"></slot>
    <slot></slot>
  </div>
</template>

<style>
li p {
  margin-bottom: calc(var(--spacing) * 2);
}
</style>