<template>
  <div class="display">
    {{ value }}
  </div>
</template>

<script>
export default {
    name: "Display-Calculator",
    props:['value']
}
</script>

<style>
.display{
  grid-column: span 4;
  background-color: #0004;
  border-radius: 1px;

  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: 20px;
  font-size: 2.2em;
  overflow: hidden;
}

</style>