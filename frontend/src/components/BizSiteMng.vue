<template>

    <v-card style="width:450px;" outlined>
        <template slot="progress">
            <v-progress-linear
                    color="deep-purple"
                    height="10"
                    indeterminate
            ></v-progress-linear>
        </template>

        <v-card-title v-if="value._links">
            BizSiteMng # {{value._links.self.href.split("/")[value._links.self.href.split("/").length - 1]}}
        </v-card-title >
        <v-card-title v-else>
            BizSiteMng
        </v-card-title >

        <v-card-text>
            <div>
                <String label="BizSiteName" v-model="value.bizSiteName" :editMode="editMode"/>
            </div>
            <div>
                <String label="BizSiteId" v-model="value.bizSiteId" :editMode="editMode"/>
            </div>
            <div>
                <String label="BizSitePassword" v-model="value.bizSitePassword" :editMode="editMode"/>
            </div>
            <div>
                <String label="BizSiteLocation" v-model="value.bizSiteLocation" :editMode="editMode"/>
            </div>
            <div>
                <String label="BizSitePhoneNum" v-model="value.bizSitePhoneNum" :editMode="editMode"/>
            </div>
            <div>
                <String label="SettleAccountNo" v-model="value.settleAccountNo" :editMode="editMode"/>
            </div>
            <div>
                <String label="BizSitePhoneNum" v-model="value.bizSitePhoneNum" :editMode="editMode"/>
            </div>
            <div>
                <String label="SettleAccountNo" v-model="value.settleAccountNo" :editMode="editMode"/>
            </div>
            <div>
                <String label="Status" v-model="value.status" :editMode="editMode"/>
            </div>
            <div>
                <String label="StateChngDttm" v-model="value.stateChngDttm" :editMode="editMode"/>
            </div>
            <div>
                <Boolean label="DelFlag" v-model="value.delFlag" :editMode="editMode"/>
            </div>
            <div>
                <String label="AuthProcId" v-model="value.authProcId" :editMode="editMode"/>
            </div>
            <div>
                <String label="AuthProcNm" v-model="value.authProcNm" :editMode="editMode"/>
            </div>
            <div>
                <String label="AuthProcDttm" v-model="value.authProcDttm" :editMode="editMode"/>
            </div>
        </v-card-text>

        <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn
                    color="deep-purple lighten-2"
                    text
                    @click="edit"
                    v-if="!editMode"
            >
                Edit
            </v-btn>
            <v-btn
                    color="deep-purple lighten-2"
                    text
                    @click="save"
                    v-else
            >
                Save
            </v-btn>
            <v-btn
                    color="deep-purple lighten-2"
                    text
                    @click="remove"
                    v-if="!editMode"
            >
                Delete
            </v-btn>
            <v-btn
                    color="deep-purple lighten-2"
                    text
                    @click="editMode = false"
                    v-if="editMode && !isNew"
            >
                Cancel
            </v-btn>
        </v-card-actions>
        <v-card-actions>
            <v-spacer></v-spacer>                        
        </v-card-actions>
    </v-card>

</template>

<script>
    const axios = require('axios').default;
    
    export default {
        name: 'BizSiteMng',
        components:{},
        props: {
            value: [Object, String, Number, Boolean, Array],
            editMode: Boolean,
            isNew: Boolean,
            offline: Boolean
        },
        data: () => ({
        }),
        created(){
            if(!this.value) {
                this.value = {};
            }

            if(typeof this.value === 'object') {
                if(!('bizSiteName' in this.value)) {
                    this.value.bizSiteName = null;
                }
                if(!('bizSiteId' in this.value)) {
                    this.value.bizSiteId = null;
                }
                if(!('bizSitePassword' in this.value)) {
                    this.value.bizSitePassword = null;
                }
                if(!('bizSiteLocation' in this.value)) {
                    this.value.bizSiteLocation = null;
                }
                if(!('bizSitePhoneNum' in this.value)) {
                    this.value.bizSitePhoneNum = null;
                }
                if(!('settleAccountNo' in this.value)) {
                    this.value.settleAccountNo = null;
                }
                if(!('bizSitePhoneNum' in this.value)) {
                    this.value.bizSitePhoneNum = null;
                }
                if(!('settleAccountNo' in this.value)) {
                    this.value.settleAccountNo = null;
                }
                if(!('status' in this.value)) {
                    this.value.status = null;
                }
                if(!('stateChngDttm' in this.value)) {
                    this.value.stateChngDttm = null;
                }
                if(!('delFlag' in this.value)) {
                    this.value.delFlag = null;
                }
                if(!('authProcId' in this.value)) {
                    this.value.authProcId = null;
                }
                if(!('authProcNm' in this.value)) {
                    this.value.authProcNm = null;
                }
                if(!('authProcDttm' in this.value)) {
                    this.value.authProcDttm = null;
                }
            }            
        },

        methods: {
            selectFile(){
            if(this.editMode == false) {
                return false;
            }
                var me = this
                var input = document.createElement("input");
                input.type = "file";
                input.accept = "image/*";
                input.id = "uploadInput";
                
                input.click();
                input.onchange = function (event) {
                    var file = event.target.files[0]
                    var reader = new FileReader();

                    reader.onload = function () {
                        var result = reader.result;
                        me.imageUrl = result;
                        me.value.photo = result;
                        
                    };
                    reader.readAsDataURL( file );
                };
            },
            edit() {
                this.editMode = true;
            },
            async save(){
                try {
                    var temp = null;

                    if(!this.offline) {
                        if(this.isNew) {
                            temp = await axios.post(axios.fixUrl('/bizSiteMngs'), this.value)
                        } else {
                            temp = await axios.put(axios.fixUrl(this.value._links.self.href), this.value)
                        }
                    }

                    if(this.value!=null) {
                        for(var k in temp.data) this.value[k]=temp.data[k];
                    } else {
                        this.value = temp.data;
                    }

                    this.editMode = false;
                    this.$emit('input', this.value);

                    if (this.isNew) {
                        this.$emit('add', this.value);
                    } else {
                        this.$emit('edit', this.value);
                    }

                } catch(e) {
                    alert(e.message)
                }
                location.reload()
            },
            async remove(){
                try {
                    if (!this.offline) {
                        await axios.delete(axios.fixUrl(this.value._links.self.href))
                    }

                    this.editMode = false;
                    this.isDeleted = true;

                    this.$emit('input', this.value);
                    this.$emit('delete', this.value);

                } catch(e) {
                    alert(e.message)
                }
            },
            change(){
                this.$emit('input', this.value);
            },
        },
    }
</script>

