<template>
	<mds-layout-grid>
		<mds-row >
			<LeftNavigation @marketNavChanged="handNavChange"/>
			<mds-col :cols="10">
				<ToolBar @handleSearchInputEvent="handleSearchData"/>
				<mds-row >
					<mds-col :cols="12">
						<MainTable :searchData="searchField" />
					</mds-col>
				</mds-row>
			</mds-col>
		</mds-row>
	</mds-layout-grid>
</template>

<script>
	import {MdsCol, MdsLayoutGrid, MdsRow} from '@mds/layout-grid';
	import LeftNavigation from "./LeftNavigation";
	import ToolBar from "./ToolBar";
	import MainTable from "./MainTable";

	export default {
		name: 'NavigationHome',
		components: {
			MainTable,
			ToolBar,
			LeftNavigation,
			MdsLayoutGrid,
			MdsCol,
			MdsRow
		},
		data() {
			return {
				searchField:"",
				modelSearchField1:"",
				navChanged:""
			}
		},
		created() {
		},
		computed: {

		},
		methods: {
			handleCancel() {
			},
			handleSearchData(value){
				this.searchField = value
			},
			handNavChange(value){
				this.navChanged = value
			}
		},
	};
</script>
