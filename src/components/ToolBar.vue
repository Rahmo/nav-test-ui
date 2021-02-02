<template>
	<mds-section border="none" container>
		<mds-row>
			<mds-col :cols="4">
				<mds-search-field placeholder="Search for Security" @input="handleInput" label="Search" v-model="modelSearchField1"></mds-search-field>
			</mds-col>
		</mds-row>
	</mds-section>
</template>
<script>
	import MdsSection from '@mds/section'
	import {MdsCol, MdsRow} from '@mds/layout-grid';
	import MdsSearchField from '@mds/search-field'
	export default {
		name: 'ToolBar',
		data() {
			return {
				modelSearchField1: ""
			}
		},
		components: {MdsSection, MdsCol, MdsRow, MdsSearchField},
		methods: {
			handleInput(){
				this.$emit('handleSearchInputEvent',this.modelSearchField1)
			}
		}
	}
</script>