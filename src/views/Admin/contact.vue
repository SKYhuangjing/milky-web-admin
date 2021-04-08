<template>
	<div>
		<div class="zen-table-content">
			<div class="OptionItem">
                <a-button type="primary" class="addItem" @click="addHandle">
				  创建联系人
			   </a-button>
			 
			 </div>
				<ztable
				:tableConfig="tableConfig"
				:dataSource="dataSource"
				:loading="loading"
				:pagination="pagination"
				@change="tableChangeHandle"
			></ztable>
			  <zmodal
				title="创建房间"
				:visible="visibleAddModal"
				@handleOk="zmodalHandleOk"
				@handleCancel="zmodalHandleCancel"
				:destroyOnClose="true"
				size="small"
				:formConfig="zmodalFormConfig"
		  >
			</zmodal>
		</div>
	</div>
</template>
<script>
import { tableConfigMixin } from '@/mixins/tableConfig/index.js'
import { listTableMixin } from '@/mixins/tableConfig/contact.list.js'
import { addFormMixin } from '@/mixins/formConfig/contact.add.js'
import axios from '@/axios'
export default {
	mixins: [tableConfigMixin, listTableMixin,addFormMixin],
	data() {
		return {
			dataSource: [],
			deleteVisible: false,
			visibleAddModal: false,
			saveLoading: false,
			mixinsConfig: {
				addPageUrl: '',
				queryApi: '/api/contact/page',
			},
		}
	},
	methods: {
		operationsHandle(record, type) {
			if (type === 'details') {
			    this.$router.push('/detail')
			} 
		},
		
		init() {
			this.getTableDatas()
		},
		addHandle(){
            this.visibleAddModal=true
		},
		zmodalHandleCancel(){
            this.visibleAddModal=false
		},
		// 创建员工
		zmodalHandleOk(e, values) {
			console.log(values)
			 if(!(/^1[3456789]\d{9}$/.test(values.mobile))){ 
				return this.$message.error(
					'请输入正确的电话号码'
				)
			} 
			axios
				.post(`/api/contact/create`, {
					customerUid: localStorage.getItem("customerUid"),
					mobile:values.mobile,
					name:values.name,
					role:values.role,
					sex:values.sex,
					status:values.status,
					type:values.type,
				})
				.then((res) => {
					this.$message.success('Successful')
					this.visibleAddModal=false
					this.getTableDatas()
				})
				.finally((res) => {
					this.visibleAddModal=false
				})
		},
	},
	mounted() {
		this.init()
	},
	components: {
	},
}
</script>
<style lang="less">
.operationsListActive li {
	color: @brand1-6;
	padding: @space*1px;
}
.operationsListActive li:hover {
	cursor: pointer;
	background-color: color(~`colorPalette('@{brand1-6}', 1) `);
}
.OptionItem{
	 display: flex;
	 justify-content:flex-end;
	 padding: 10px 0px;
}
.addItem{

}
</style>
