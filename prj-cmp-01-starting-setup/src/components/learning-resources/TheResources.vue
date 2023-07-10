<template>
  <base-card>
    <base-button @click="setSelectedTab('stored-resources')" :mode="storedResButtonMode">Stored Resources</base-button>
    <base-button @click="setSelectedTab('add-resource')"  :mode="addResButtonMode">Add Resource</base-button>
  </base-card>
  <keep-alive>
  <component :is="selectedTab"></component>
  </keep-alive>
</template>

<script>
import AddResource from './AddResource.vue'
import StoredResources from './StoredResources.vue';

 export default{
    components: {AddResource, StoredResources },
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
        },
        addResource(title,description,link) {
            const newResource = {
                id: new Date().toISOString(),
                title: title,
                description: description,
                link: link
            }
            this.storedResources.unshift(newResource);
            this.selectedTab = 'stored-resources';
        },
        removeResource(id) {
            const resIndex = this.storedResources.findIndex(res => res.id === id)
            this.storedResources.splice(resIndex,1);
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
            resources: this.storedResources,
            addResource: this.addResource,
            deleteResource: this.removeResource
        };
    }
 }
</script>
