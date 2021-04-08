import Admin from '@/views/Admin/index'
export default {
    path: '/Merchant',
    name: 'Merchant',
    children: [
        {
            path: "/user/list",
            name: "userList",
            component: () => import("@/views/Admin/user.vue")
        },
       
       
        {
            path: "/customer/list",
            name: "customerList",
            component: () => import("@/views/Admin/customer.vue")
        },
       
        {
            path: "/merchant/list",
            name: "merchantList",
            component: () => import("@/views/Admin/merchant.vue")
        },
        {
            path: "/employee/list",
            name: "employeeList",
            component: () => import("@/views/Admin/employee.vue")
        },
       
        {
            path: "/contact/list",
            name: "contactList",
            component: () => import("@/views/Admin/contact.vue")
        },
    ],
    component: Admin,
}
