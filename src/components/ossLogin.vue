<template>
	<div class="login-box">
		<a-form
			id="components-form-demo-normal-login"
			:form="form"
			class="login-form"
			@submit="handleSubmit"
		>    
		    <div style="text-align:center;padding-bottom:10px">
		      <img src="@/assets/LogoVBlack.svg" style="width:80px;color:red;" />
			</div>
			<a-form-item>
				<a-input
					size="large"
					v-decorator="[
						'mobile',
						{
							initialValue: userInfo ? userInfo.mobile : '',
							rules: [
								{
									required: true,
									message: 'Please input your mobile!',
								},
							],
						},
					]"
				></a-input>
			</a-form-item>
			<a-form-item>
				<a-input
					size="large"
					v-decorator="[
						'password',
						{
							initialValue: userInfo ? userInfo.password : '',
							rules: [
								{
									required: true,
									message: 'Please input your Password!',
								},
							],
						},
					]"
					type="password"
				></a-input>
			</a-form-item>
			<a-form-item>
				<a-button
					:loading="loading"
					size="large"
					type="primary"
					html-type="submit"
					style="width: 100%"
					>登录</a-button
				>
			</a-form-item>
		</a-form>
	</div>
</template>

<script>
import Vue from 'vue'
import { Button, Form, Input } from 'ant-design-vue'
;[Button, Form, Input].forEach((item) => {
	Vue.use(item)
})
import CryptoJS from 'crypto-js'
import axios from '../utils/request'
export default {
	name: 'OssLogin',
	data() {
		return {
			formLayout: 'horizontal',
			form: this.$form.createForm(this),
			percent: 0,
			timer: null,
			loading: false,
			keyHex: CryptoJS.enc.Utf8.parse('Zenlayer20180319'),
			userInfo: localStorage.getItem('user')
				? JSON.parse(localStorage.getItem('user'))
				: null,
		}
	},
	computed: {
		// mobile() {
		// 	return 'gavin.ye@zenlayer.com'
		// }
	},
	methods: {
		handleSubmit(e) {
			e.preventDefault()
			this.form.validateFields((err, values) => {
				if (this.loading) {
					return
				}
				const user = {
					mobile: values.mobile,
					password: values.password,
				}
				var encrypted = CryptoJS.DES.encrypt(
					values.password,
					this.keyHex,
					{
						mode: CryptoJS.mode.ECB,
						padding: CryptoJS.pad.Pkcs7,
					}
				)
				// values.password = encrypted.toString()
				if (!err) {
					this.loading = true
					axios
						.post('/api/login/local', {
							...values,
							sessionType: 'MERCHANT',
						})
						.then((res) => {
							localStorage.setItem('jwt', res.token)
							this.$router.push('/employee/list')
							localStorage.setItem('user', JSON.stringify(user))
							localStorage.setItem(
								'roles',
								JSON.stringify(res.userMerchantAgg)
							)
							this.loading = false
						})
						.finally(() => {
							this.loading = false
						})
				}
			})
		},
		closeProgress() {
			clearTimeout(this.timer)
		},
	},
	mounted() {},
}
</script>

<style>
.login-box {
	width: 496px;
	padding: 48px 48px 24px;
	background: #fff;
	margin-top: 100px;
	border-radius: 16px;
	margin-left: auto;
	margin-right: auto;
}
.progress-box {
	margin-top: 10px;
	padding: 12px;
	border: 1px solid #bbbec7;
	border-radius: 4px;
}
.progress-box .bottom {
	margin-top: 10px;
}
.progress-box .top {
	display: flex;
	justify-content: space-between;
}
.progress-box .top .information-circled {
	color: #e6f7ff;
	margin-right: 10px;
}
.login-box .ant-btn-primary {
	border-color: #03c666;
	background: #03c666;
}
.login-box .ant-form-item {
	margin-bottom: 24px;
}
.login-box .t-center {
	text-align: center;
}
</style>
