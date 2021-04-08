<template>
	<div>
		<div class="zen-table-content">
			<div class="OptionItem">
                <a-button type="primary" class="addItem" @click="addHandle">
				  创建商家
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
				title="创建剧本"
				:visible="visibleAddModal"
				@handleOk="zmodalHandleOk"
				@handleCancel="zmodalHandleCancel"
				:destroyOnClose="true"
				size="middle"
				:formConfig="zmodalFormConfig"
		      >  
			  <template>
				   <a-form  :label-col="{ span: 4 }" :wrapper-col="{ span: 18 }">
				   <a-form-item label="地址">
                        <v-distpicker  @selected="onSelected" :province="select.province" :city="select.city" :area="select.area"></v-distpicker>
                    </a-form-item>
					 <a-form-item label="具体地址" :label-col="{ span: 4 }"  >
						 <a-input placeholder="请输入具体地址" v-model="address"/>
                    </a-form-item>
					 </a-form>
			  </template>
			</zmodal>

			
		
		</div>
	</div>
</template>
<script>
import { tableConfigMixin } from '@/mixins/tableConfig/index.js'
import { listTableMixin } from '@/mixins/tableConfig/merchant.list.js'
import { addFormMixin } from '@/mixins/formConfig/merchant.add.js'
import axios from '@/axios'
export default {
	mixins: [tableConfigMixin, listTableMixin, addFormMixin],
	data() {
		return {
			dataSource: [],
			visibleAddModal: false,
			saveLoading: false,
			mixinsConfig: {
				addPageUrl: '',
				queryApi: '/api/merchant/page',
			},
			select: { province: '广东省', city: '广州市', area: '海珠区' },
			address:""
			
		}
	},
	beforeCreate() {
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
		 zmodalHandleCancel(e) {
				this.visibleAddModal = false;
		},
		// 创建商家
	    zmodalHandleOk(e, values) {
			console.log(values,this.address)
			 if(!(/^1[3456789]\d{9}$/.test(values.mobile))){ 
				return this.$message.error(
					'请输入正确的电话号码'
				)
			} 
			axios
				.post(`/api/merchant/create`, {
					merchantUid:localStorage.getItem("uid"),
					customerUid:localStorage.getItem("customerUid"),
					name:values.name,
					description:values.description,
					mobile:values.mobile,
					status:values.status,
					source:values.source,
					country:"中国",
					state:this.select.province,
					city:this.select.city,
					area:this.select.area,
					address:this.address,
				})
				.then((res) => {
					this.$message.success('Successful')
					this.ipInfo = values
					this.visibleAddModal=false
				})
				.finally((res) => {
					this.okLoading = false
					this.visibleAddModal=false
					this.getTableDatas()
				})
		},
		onSelected(data){
			console.log("333",data)
			this.select.province=data.province.value
			this.select.city=data.city.value
			this.select.area=data.area.value
		},
		handleSubmit(value){
			console.log("submit",value)
			return
		}
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
.distpicker-address-wrapper select{
	padding: 0;
	font-size: 12px;
	height: 30px;
	border: 1px solid #b7becb;
}
.ant-col-4 {
    display: block;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    width: 14.666667%;
}
</style>
