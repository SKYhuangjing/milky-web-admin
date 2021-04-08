<template>
  <div>
    <zlayout
      :configData="configData"
      @change-route="getRouteInfo"
      v-if="!hiddenMenu"
    >
      <template slot="logo">
        <img
          src="@/assets/LogoHBlack.svg"
        />
      </template>
       <template slot="menuHeader" >
            <a-dropdown>
            <a-menu slot="overlay">
              <a-menu-item key="1" @click="logoutHandle"> <a-icon type="logout" />退出登陆 </a-menu-item>
              <a-menu-item key="2"> <a-icon type="user" />预留1 </a-menu-item>
              <a-menu-item key="3"> <a-icon type="user" />预留1 </a-menu-item>
            </a-menu>
            <a-button style="margin-left: 8px"> 用户名 <a-icon type="down" /> </a-button>
          </a-dropdown>
        </template>

      <router-view slot="content" />
    </zlayout>
    <div v-if="hiddenMenu">
      <router-view slot="content" />
    </div>
  </div>
</template>

<script>
import axios from '@/axios'
export default {
  
  name: "",
  components: {},
  data() {
    return {
      hiddenMenu: !this.$postMessage.isMaster(),
      configData: {
        // layout: ['sider', 'header'],
        fixed: ["sider", "header"],
        header: {
          theme: "light", // light/dark
          list: [
                   {
                      key: 'user',
                      title: '用户名',
                      img: 'User.svg'
                  }
              ],
         
        },
        sider: {
          mode: "inline", // vertical vertical-right horizontal inline
          theme: "light", // light/dark
          collapsible: true,
          collapsed: false,
          showCollapsed: true,
          menu: [
            {
              key: "1",
              title: "用户",
              iconUrl: "home",
              url: "/user/list",
            },
             {
              key: "2",
              title: "客户",
              iconUrl: "home",
              url: "/customer/list",
            },
            {
              key: "4",
              title: "管理员",
              iconUrl: "database",
              children: [
                {
                  key: "/list",
                  title: "员工",
                  iconUrl: "team",
                  url: "/employee/list",
                },
              ],
            },
            {
              key: "5",
              title: "超级管理员",
              iconUrl: "solution",
              disabled: false,
              children: [
                {
                  key: "/contact",
                  title: "联系人",
                  url: "/contact/list",
                },
                {
                  key: "/merchant",
                  title: "商家",
                  url: "/merchant/list",
                },
              ],
            },
          ],
        },
      },
    };
  },
  computed: {},
  mounted() {
    console.log(
      "sdasdasd",
      this.$store.state.debuggerStatus,
      sessionStorage.getItem("debuggerStatus")
    );
  },
  methods: {
    onSearch() {},
    getRouteInfo(key, path) {
      console.log(key, path, 999);
    },
    targetElement(e) {},
    submitUTT() {},
    logoutHandle(){
      console.log("退出登陆")
        axios
				.post(`/api/logout`)
				.then((res) => {
              localStorage.removeItem('customerUid')
              localStorage.removeItem('user')
              localStorage.removeItem('roles')
              localStorage.removeItem('uid')
              this.$router.replace({
                path: '/login',
              })
        })
    }
  },
  created() {},
};
</script>

<style lang=less>
.v-uitest-content {
  height: 32px;
  user-select: none;
  position: fixed;
  bottom: 24px;
  right: 14px;
  line-height: 1.5;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #0c85ee;
  color: white;
  padding: 0px 8px;
  border-radius: 5px;
  div {
    line-height: 1;
  }
}
</style>
