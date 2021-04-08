import axios from "@/axios"
import { getUid } from '@/utils'
export const addFormMixin = {
    data() {
        return {
            zmodalFormConfig: {
                formLayout: "horizontal",
                validateFirst: true,
                columns: [
                {
                        props: "type",
                        type: "select",
                        label: "类型",
                        options: [
                            { value: 'ROOM', text: 'ROOM' },
                            { value: 'GAME', text: 'GAME' },
                        ],
                        rules: [{
                            required: true,
                            message: this.$t('common.verify.required')
                        }]
                       
                },
                {
                    props: "value",
                    type: "input",
                    label: "名称",
                   
            },

                ],
            }
        }
    }
}
