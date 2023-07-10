<template>
  <base-card>
    <base-button @click="setSelectedTab('stored-resources')">Stored Resources</base-button>
    <base-button @click="setSelectedTab('add-resource')">Add Resource</base-button>
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
    provide() {
        return {
            resources: this.storedResources
        };
    }
 }
</script>
