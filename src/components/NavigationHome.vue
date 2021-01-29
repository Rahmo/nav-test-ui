<template>
	<mds-layout-grid>
		<mds-row align-horizontal="flex-end">
			<LeftNavigation/>
			<mds-col :cols="10">
				<ToolBar/>
				<mds-row align-horizontal="space-around">
					<mds-col :cols="4">
						<MainTable/>
					</mds-col>
					<mds-col :cols="8">
						<DetailsPage/>
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
	import DetailsPage from "./DetailsPage";

	export default {
		name: 'NavigationHome',
		components: {
			DetailsPage,
			MainTable,
			ToolBar,
			LeftNavigation,
			MdsLayoutGrid,
			MdsCol,
			MdsRow
		},
		created() {
		},
		computed: {

		},
		methods: {
			handleCancel() {
			},
		},
	};
</script>
