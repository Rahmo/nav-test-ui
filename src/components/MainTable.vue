<template>
	<mds-section container>
		<mds-data-table
				pagination="below"
				:pagination-config="{
                                  totalItems: 5,
                                  showItemsInfo: true,
                                  showItemsSelect: true,
                                    }"
				:header-configs="headers"
				:row-data="rows"
		></mds-data-table>
	</mds-section>
</template>
<script>
	import MdsSection from '@mds/section'
	import { MdsDataTable } from '@mds/data-table';

	export default {
		name: 'MainTable',
		components: {MdsSection, MdsDataTable},
		data() {
			return {
				rows: [
					{
						title: 'Mr',
						firstName: 'Joe',
						bio: 'Bloggs',
						age: 4,
						class: 'mds_test__row-class',
						id: 0,
					},
					{
						title: 'Ms',
						firstName: 'Jane',
						bio: 'Doe',
						age: 10,
						id: 1,
					},
					{
						title: 'Sir',
						firstName: 'Leon',
						bio: 'Tate',
						age: 5,
						id: 2,
					},
				],
				headers: [
					{
						text: 'title',
						fieldName: 'title',
						class: 'mds_test__column-class',
					},
					{
						fieldName: 'firstName',
						text: 'First Name',
					},
					{
						fieldName: 'bio',
						text: 'Bio',
					},
					{
						fieldName: 'age',
						text: 'Age',
					},
				],
			};
		},
	}
</script>