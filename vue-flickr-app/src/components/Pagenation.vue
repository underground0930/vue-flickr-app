<template>
  <div class="flickerapp-Pagenation">
    <a href='#' class="flickerapp-Pagenation_prev">&lt; 前へ</a>
    <ul class="flickerapp-Pagenation_List">
      <li class="flickerapp-Pagenation_ListChild">
        <a class="flickerapp-Pagenation_ListLink" href='#'>1</a>
      </li>
      <li class="flickerapp-Pagenation_ListChild">
        <a class="flickerapp-Pagenation_ListLink" href='#'>2</a>
      </li>
      <li class="flickerapp-Pagenation_ListChild">
        <a class="flickerapp-Pagenation_ListLink" href='#'>3</a>
      </li>
      <li class="flickerapp-Pagenation_ListChild">
        <a class="flickerapp-Pagenation_ListLink" href='#'>4</a>
      </li>
      <li class="flickerapp-Pagenation_ListChild">
        <a class="flickerapp-Pagenation_ListLink" href='#'>...</a>
      </li>
    </ul>
    <a href='#' class="flickerapp-Pagenation_next">次へ &gt;</a>
  </div>
</template>

<script>
export default {

}
</script>

<style scope="scoped" lang="scss">
  .flickerapp-Pagenation{
    display:flex;
    justify-content: center;
    &_List{
      display:flex;
      margin: 0 10px 0;
    }
    &_ListChild{
      margin: 0 10px 0;
    }
    &_ListLink{

    }
  }
</style>

