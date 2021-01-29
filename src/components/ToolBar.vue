<template>
	<mds-section border="none" container>
		<mds-row align-horizontal="flex-end">
			<mds-col :cols="11">breadCrumb</mds-col>
		</mds-row>
	</mds-section>
</template>
<script>
	import MdsSection from '@mds/section'
	import {MdsCol, MdsRow} from '@mds/layout-grid';
	export default {
		name: 'ToolBar',
		components: {MdsSection, MdsCol, MdsRow}
	}
</script>