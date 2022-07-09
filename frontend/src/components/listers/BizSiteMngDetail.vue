<template>
    <v-card outlined>
        <v-card-title>
            BizSiteMng # {{item._links.self.href.split("/")[item._links.self.href.split("/").length - 1]}}
        </v-card-title>

        <v-card-text>
            <div>
                <String label="BizSiteName" v-model="item.bizSiteName" :editMode="editMode" @change="change" />
            </div>
            <div>
                <String label="BizSiteId" v-model="item.bizSiteId" :editMode="editMode" @change="change" />
            </div>
            <div>
                <String label="BizSitePassword" v-model="item.bizSitePassword" :editMode="editMode" @change="change" />
            </div>
            <div>
                <String label="BizSiteLocation" v-model="item.bizSiteLocation" :editMode="editMode" @change="change" />
            </div>
            <div>
                <String label="BizSitePhoneNum" v-model="item.bizSitePhoneNum" :editMode="editMode" @change="change" />
            </div>
            <div>
                <String label="SettleAccountNo" v-model="item.settleAccountNo" :editMode="editMode" @change="change" />
            </div>
            <div>
                <String label="BizSitePhoneNum" v-model="item.bizSitePhoneNum" :editMode="editMode" @change="change" />
            </div>
            <div>
                <String label="SettleAccountNo" v-model="item.settleAccountNo" :editMode="editMode" @change="change" />
            </div>
            <div>
                <String label="Status" v-model="item.status" :editMode="editMode" @change="change" />
            </div>
            <div>
                <String label="StateChngDttm" v-model="item.stateChngDttm" :editMode="editMode" @change="change" />
            </div>
            <div>
                <Boolean label="DelFlag" v-model="item.delFlag" :editMode="editMode" @change="change" />
            </div>
            <div>
                <String label="AuthProcId" v-model="item.authProcId" :editMode="editMode" @change="change" />
            </div>
            <div>
                <String label="AuthProcNm" v-model="item.authProcNm" :editMode="editMode" @change="change" />
            </div>
            <div>
                <String label="AuthProcDttm" v-model="item.authProcDttm" :editMode="editMode" @change="change" />
            </div>
        </v-card-text>
    </v-card>
</template>


<script>
    const axios = require('axios').default;

    export default {
        name: 'BizSiteMngDetail',
        components:{},
        props: {
        },
        data: () => ({
            item: null,
        }),
        async created() {
            var me = this;
            var params = this.$route.params;
            var temp = await axios.get(axios.fixUrl('/bizSiteMngs/' + params.id))
            if(temp.data) {
                me.item = temp.data
            }
        },
        methods: {
        },
    };
</script>
