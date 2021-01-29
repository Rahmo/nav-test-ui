<template>
	<mds-col align-vertical="flex-end" :cols="2">
		<div class="nav-contianer-spec">
			<mds-switch
					class="theme-switcher"
					@change="handleChangeThem"
			>
				Region Navigation
			</mds-switch>
		</div>
		<mds-section class="dashboard-navigation-item" border="none" :size="8" :bold="true" title="Visual Style">
			<mds-list-group>
				<mds-list-group-item text="Color" href="#"></mds-list-group-item>
				<mds-list-group-item text="Typography" href="#"></mds-list-group-item>
				<mds-list-group-item text="Space" href="#"></mds-list-group-item>
			</mds-list-group>
		</mds-section>
		<mds-section class="dashboard-navigation-item" border="none" :size="8" :bold="true" title="Components">
			<mds-list-group>
				<mds-list-group-item text="Buttons" href="#"></mds-list-group-item>
				<mds-list-group-item text="Forms" href="#"></mds-list-group-item>
				<mds-list-group-item text="List Groups" href="#"></mds-list-group-item>
			</mds-list-group>
		</mds-section>
	</mds-col>
</template>
<script>
	import MdsSection from '@mds/section'
	import MdsSwitch from '@mds/switch'
	import {MdsCol} from '@mds/layout-grid';
	import { MdsListGroup, MdsListGroupItem } from '@mds/list-group'

	export default {
		name: 'LeftNavigation',
		components: {MdsSection, MdsSwitch, MdsCol, MdsListGroup, MdsListGroupItem}
	}
</script>