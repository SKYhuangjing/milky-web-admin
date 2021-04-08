<template>
	<div class="login-page">
		<oss-login></oss-login>
	</div>
</template>

<script>
import OssLogin from '../components/ossLogin'
export default {
	name: 'login',
	data() {
		return {}
	},
	methods: {},
	components: {
		OssLogin
	}
}
</script>

<style>
.login-page {
	position: absolute;
	top: 0;
	bottom: 0;
	width: 100%;
	min-height: 600px;
	background: #1890ff;
}
</style>
