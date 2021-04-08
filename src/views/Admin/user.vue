<template>
	<div>
		<div class="zen-table-content">
			 <div class="OptionItem">
                <a-button type="primary" class="addItem" @click="addHandle">
				  创建用户
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
				title="创建用户"
				:visible="addEmplpyeeModal"
				@handleOk="zmodalHandleOk"
				@handleCancel="zmodalHandleCancel"
				:destroyOnClose="true"
				size="small"
				ref="zmodalForm"
				:formConfig="zmodalFormConfig"
		  >
			</zmodal>
		</div>
	</div>
</template>
<script>
import { tableConfigMixin } from '@/mixins/tableConfig/index.js'
import { listTableMixin } from '@/mixins/tableConfig/user.list.js'
import { addFormMixin } from '@/mixins/formConfig/user.add.js'
import axios from '@/axios'
import { getUid } from '@/utils'
export default {
	mixins: [tableConfigMixin, listTableMixin,addFormMixin],
	data() {
		return {
			dataSource: [],
			addEmplpyeeModal: false,
			saveLoading: false,
			mixinsConfig: {
				addPageUrl: '',
				queryApi: '/api/user/page',
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
            this.addEmplpyeeModal=true
		},
		zmodalHandleCancel(){
            this.addEmplpyeeModal=false
		},
		// 创建员工
		zmodalHandleOk(e, values) {
			console.log(values)
			axios
				.post(`/api/employee/create`, {
					contactUid:values.name.key,
					imgUrl:'',
					merchantUid:localStorage.getItem("uid"),
					name:values.name.label,
					role:values.role,
					sex:values.sex,
					status:values.status,
					type:values.type
				})
				.then((res) => {
					this.$message.success('Successful')
					this.ipInfo = values
					this.addEmplpyeeModal=false
					this.getTableDatas()
				})
				.finally((res) => {
					this.okLoading = false
					this.addEmplpyeeModal=false
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
<style lang="less" scoped>
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
