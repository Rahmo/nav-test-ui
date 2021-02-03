<template>
	<mds-section border="none" container>
		<mds-search-field placeholder="Search for Security" @input="handleInput" label="Search" v-model="modelSearchField1"></mds-search-field>
	</mds-section>
</template>
<script>
	import MdsSection from '@mds/section'
	import MdsSearchField from '@mds/search-field'
	export default {
		name: 'ToolBar',
		data() {
			return {
				modelSearchField1: ""
			}
		},
		components: {MdsSection, MdsSearchField},
		methods: {
			handleInput(){
				this.$emit('handleSearchInputEvent',this.modelSearchField1)
			}
		}
	}
</script>