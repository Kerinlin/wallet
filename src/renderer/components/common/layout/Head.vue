<template>
  <div class="head-container">
    <Row class="head-wrapper">
      <Col span="5" class-name="head-logo-wrapper">
        <img src="../../../assets/img/logo.png" class="head-logo" alt="lambda">
      </Col>

      <Col span="16" offset="2" class-name="head-menu-wrapper">
        <div class="head-menu">
          <div class="head-menu-item">
            <router-link to="/home" class="item">Home</router-link>
          </div>
          <div class="head-menu-item">
            <router-link to="/miner" class="item">Miner</router-link>
          </div>
          <div class="head-menu-item">
            <router-link to="/customer" class="item">Customer</router-link>
          </div>
          <div class="head-menu-item">
            <router-link to="/validator" class="item">Validator</router-link>
          </div>

          <div class="head-menu-item">
            <router-link to="/settings" class="item"><Icon type="md-settings" size="30"/></router-link>
          </div>
        </div>
      </Col>
    </Row>
  </div>
</template>

<script>
export default {};
</script>

<style lang="less" scoped>
.head-container {
  width: 100%;
  height: 100px;
  background: url(../../../assets/img/bgs_01.jpg);
  background-size: cover;
  .head-wrapper {
    width: 100%;
    height: 100px;
    .head-logo-wrapper {
      margin-left: 20px;
      padding-top: 20px;
    }
    .head-menu-wrapper {
      height: 100px;
      .head-menu {
        display: flex;
        height: 100%;
        justify-content: space-around;
        align-items: center;
        .head-menu-item {
          width: 100%;
          text-align: center;
          &:hover:not(:last-child) {
            border-bottom: 2px solid transparent;
            border-image: linear-gradient(to right, #339cae, #9167d3);
            border-image-slice: 10;
          }
          .item {
            display: inline-block;
            width: 100%;
            color: #fff;
            font-size: 18px;
            text-align: center;
          }
        }
      }
    }
  }
}
</style>
