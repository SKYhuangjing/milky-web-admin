const install = function(Vue){
    Vue.prototype.$menus = [
        {
          children:[
             {
                children: [],
                component: "AuthorityManagement/permissionsSet",
                hidden: false,
                hiddenNum: 0,
                icon: "",
                iconCls: "",
                id: 11,
                index: 0,
                leaf: false,
                name: "权限设置",
                parentId: 3,
                path: "/permissionsSet",
                sortId: 1,
                url: ""
             },
             {
                children: [],
                component: "AuthorityManagement/roleSet",
                hidden: false,
                hiddenNum: 0,
                icon: "",
                iconCls: "",
                id: 6,
                index: 0,
                leaf: false,
                name: "角色设置",
                parentId: 3,
                path: "/roleSet",
                sortId: 2,
                url: ""
             }
          ],
          component: "Home",
          hidden: false,
          hiddenNum: 0,
          icon: "",
          iconCls: "el-icon-news",
          id: 3,
          index: 1,
          leaf: false,
          name: "权限管理",
          parentId: 0,
          path: "/home",
          sortId: 1,
          url: ""
        },
        {
          children:[
             {
                children: [],
                component: "billApplicationKf/tablebill",
                hidden: false,
                hiddenNum: 0,
                icon: "",
                iconCls: "",
                id: 43,
                index: 0,
                leaf: false,
                name: "申请",
                parentId: 42,
                path: "/tablebill",
                sortId: 1,
                url: ""
             },
             {
                children: [],
                component: "billApplicationKf/billAudit",
                hidden: true,
                hiddenNum: 0,
                icon: "",
                iconCls: "",
                id: 44,
                index: 0,
                leaf: false,
                name: "开票审核",
                parentId: 42,
                path: "/billAudit",
                sortId: 2,
                url: ""
             }
          ],
          component: "Home",
          hidden: true,
          hiddenNum: 0,
          icon: "",
          iconCls: "el-icon-message",
          id: 42,
          index: 1,
          leaf: false,
          name: "开票",
          parentId: 0,
          path: "/home",
          sortId: 1,
          url: ""
        }
     ]
}
export default install