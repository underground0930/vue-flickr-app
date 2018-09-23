<template>
    <ul class="flickerapp-PhotoList">
      <li class="flickerapp-PhotoList_child" v-for="i in 10" :key="i">
        <a href='#'>
          <dl>
            <dt><img src='https://c1.staticflickr.com/8/7195/6806520776_28cf126530_m.jpg' alt=''></dt>
            <dd>aaaaaaaa</dd>
          </dl>
        </a>
      </li>
    </ul>
</template>

<script>
export default {
  name: 'PhotoList',
  data () {
    return {
    }
  },
  created () {
  }
}
</script>

<style scoped lang="scss">
  .flickerapp-PhotoList{
    display:flex;
    flex-wrap:wrap;
    justify-content:space-between;
    width:860px;
    margin: 0 auto 0;
    &:before{
      content:"";
      display: block;
      width: 200px;
      order:1;
    }
    &::after{
      content:"";
      display: block;
      width: 200px;
    }
    &_child{
      width: 200px;
      margin-bottom:20px;
      a{
        display:block;
      }
      dl{}
      dt{
        img{
          width:100%;
        }
      }
      dd{}
    }
  }
</style>
