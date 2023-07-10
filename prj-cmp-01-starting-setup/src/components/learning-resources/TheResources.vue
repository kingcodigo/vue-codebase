<template>
  <base-card>
    <base-button @click="setSelectedTab('stored-resources')" :mode="storedResButtonMode">Stored Resources</base-button>
    <base-button @click="setSelectedTab('add-resource')"  :mode="addResButtonMode">Add Resource</base-button>
  </base-card>
  <component :is="selectedTab"></component>
</template>

<script>
import StoredResources from './StoredResources.vue'
import AddResource from './AddResource.vue'


 export default{
    components: {StoredResources,AddResource},
    data() {
        return {
            selectedTab: 'stored-resources',
            storedResources: [{
                id: 'official-guide',
                title: 'Official Guide',
                description: 'the official vue js documentation',
                link: 'https://vuejs.org'
            },
            {
                id: 'google',
                title: 'Google Guide',
                description: 'the official google documentation',
                link: 'https://goggle.com'
            },
        ]
        };
    },
    methods: {
        setSelectedTab(tab) {
            this.selectedTab = tab;
        }
    },
    computed: {
        storedResButtonMode() {
            return this.selectedTab==='stored-resources' ? null: 'flat'
        },
        addResButtonMode() {
            return this.selectedTab==='add-resource' ? null: 'flat'
        },
    },
    provide() {
        return {
            resources: this.storedResources
        };
    }
 }
</script>
