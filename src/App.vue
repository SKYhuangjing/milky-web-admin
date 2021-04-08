<!--
 * @Author: Yin Xiang Zheng
 * @LastEditors: Yin Xiang Zheng
 * @LastEditTime: 2020-11-25 10:54:04
-->
<template>
	<a-locale-provider :locale="antLocale">
		<div id="app">
			<router-view style="height: 100%" />
		</div>
	</a-locale-provider>
</template>

<script>
import zh_CN from 'ant-design-vue/lib/locale-provider/zh_CN'
import en_US from 'ant-design-vue/lib/locale-provider/en_US'
export default {
	name: 'App',
	data() {
		return {
			zh_CN,
			en_US,
		}
	},
	computed: {
		antLocale() {
			return this[this.$store.state.lang]
		},
	},
}
</script>

<style>
#app {
	height: 100%;
}
.ant-form-explain,
.ant-form-extra {
	margin-top: 0px;
}

.ant-drawer.ant-drawer-open .ant-drawer-mask {
	opacity: 0.8;
}
</style>
