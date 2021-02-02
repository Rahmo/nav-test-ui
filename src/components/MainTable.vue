<template>
	<mds-section container>
		<mds-data-table
				multiselection
				pagination="below"
				:pagination-config="paginationOpts"
				:header-configs="headers"
				:row-data="feedsFiltered.navigations? feedsFiltered.navigations : []"
				@mds-data-table-page-change="paginateTable"
		></mds-data-table>
<!--				:row-data="rows"-->
	</mds-section>
</template>
<script>
	import MdsSection from '@mds/section'
	import { MdsDataTable } from '@mds/data-table';
	import gql from 'graphql-tag'

	export default {
		name: 'MainTable',
		components: {MdsSection, MdsDataTable},
		// created() {
		// 	this.$apollo.watchQuery({
		// 		/* options */
		// 	}).then(data => {
		// 		console.log(data);
		// 	});
		// },
		props: {
			searchData: {
				type: String,
				default: '',
			},
		},
		data() {
			return {
				searchField:"",
				feedsFiltered: [],
				loading: 0,
				page: 0,
				currentPage:1,
				currentPageSize:10,
				showMoreEnabled: true,
				pageSize: 20,
				selectedPage: 0,
				showRows:10,
				lastItemInCursor:1,
				paginationOpts: {
					pageSizes: [10, 50, 100, 150],
					pageSize: 20,
					page: 1,
					totalItems: 100,
					showItemsInfo: true,
					showItemsSelect: true,
				},
				rows: [
					{
						id: 'Mr',
						source: 'Joe',
						feed: 'Bloggs',
						country: 4,
						region: 'mds_test__row-class',
						market: 0,
					},
					{
						id: 'Mr',
						source: 'Joe',
						feed: 'Bloggs',
						country: 4,
						region: 'mds_test__row-class',
						market: 0,
					},
					{
						id: 'Mr',
						source: 'Joe',
						feed: 'Bloggs',
						country: 4,
						region: 'mds_test__row-class',
						market: 0,
					},
					{
						id: 'Mr',
						source: 'Joe',
						feed: 'Bloggs',
						country: 4,
						region: 'mds_test__row-class',
						market: 0,
					},
					{
						id: 'Mr',
						source: 'Joe',
						feed: 'Bloggs',
						country: 4,
						region: 'mds_test__row-class',
						market: 0,
					},
					{
						id: 'Mr',
						source: 'Joe',
						feed: 'Bloggs',
						country: 4,
						region: 'mds_test__row-class',
						market: 0,
					},
					{
						id: 'Mr',
						source: 'Joe',
						feed: 'Bloggs',
						country: 4,
						region: 'mds_test__row-class',
						market: 0,
					},
					{
						id: 'Mr',
						source: 'Joe',
						feed: 'Bloggs',
						country: 4,
						region: 'mds_test__row-class',
						market: 0,
					},
					{
						id: 'Mr',
						source: 'Joe',
						feed: 'Bloggs',
						country: 4,
						region: 'mds_test__row-class',
						market: 0,
					},
					{
						id: 'Mr',
						source: 'Joe',
						feed: 'Bloggs',
						country: 4,
						region: 'mds_test__row-class',
						market: 0,
					},
					{
						id: 'Mr',
						source: 'Joe',
						feed: 'Bloggs',
						country: 4,
						region: 'mds_test__row-class',
						market: 0,
					},
					{
						id: 'Mr',
						source: 'Joe',
						feed: 'Bloggs',
						country: 4,
						region: 'mds_test__row-class',
						market: 0,
					},
					{
						id: 'Mr',
						source: 'Joe',
						feed: 'Bloggs',
						country: 4,
						region: 'mds_test__row-class',
						market: 0,
					},
					{
						id: 'Mr',
						source: 'Joe',
						feed: 'Bloggs',
						country: 4,
						region: 'mds_test__row-class',
						market: 0,
					},
					{
						id: 'Mr',
						source: 'Joe',
						feed: 'Bloggs',
						country: 4,
						region: 'mds_test__row-class',
						market: 0,
					},
					{
						id: 'Mr',
						source: 'Joe',
						feed: 'Bloggs',
						country: 4,
						region: 'mds_test__row-class',
						market: 0,
					},
					{
						id: 'Mr',
						source: 'Joe',
						feed: 'Bloggs',
						country: 4,
						region: 'mds_test__row-class',
						market: 0,
					},
					{
						id: 'Mr',
						source: 'Joe',
						feed: 'Bloggs',
						country: 4,
						region: 'mds_test__row-class',
						market: 0,
					},
					{
						id: 'Mr',
						source: 'Joe',
						feed: 'Bloggs',
						country: 4,
						region: 'mds_test__row-class',
						market: 0,
					},
					{
						id: 'Mr',
						source: 'Joe',
						feed: 'Bloggs',
						country: 4,
						region: 'mds_test__row-class',
						market: 0,
					},
					{
						id: 'Mr',
						source: 'Joe',
						feed: 'Bloggs',
						country: 4,
						region: 'mds_test__row-class',
						market: 0,
					},
					{
						id: 'Mr',
						source: 'Joe',
						feed: 'Bloggs',
						country: 4,
						region: 'mds_test__row-class',
						market: 0,
					},
					{
						id: 'Mr',
						source: 'Joe',
						feed: 'Bloggs',
						country: 4,
						region: 'mds_test__row-class',
						market: 0,
					},
					{
						id: 'Mr',
						source: 'Joe',
						feed: 'Bloggs',
						country: 4,
						region: 'mds_test__row-class',
						market: 0,
					},
					{
						id: 'Mr',
						source: 'Joe',
						feed: 'Bloggs',
						country: 4,
						region: 'mds_test__row-class',
						market: 0,
					},
					{
						id: 'Mr',
						source: 'Joe',
						feed: 'Bloggs',
						country: 4,
						region: 'mds_test__row-class',
						market: 0,
					},
					{
						id: 'Mr',
						source: 'Joe',
						feed: 'Bloggs',
						country: 4,
						region: 'mds_test__row-class',
						market: 0,
					},
					{
						id: 'Mr',
						source: 'Joe',
						feed: 'Bloggs',
						country: 4,
						region: 'mds_test__row-class',
						market: 0,
					},
					{
						id: 'Mr',
						source: 'Joe',
						feed: 'Bloggs',
						country: 4,
						region: 'mds_test__row-class',
						market: 0,
					},
					{
						id: 'Mr',
						source: 'Joe',
						feed: 'Bloggs',
						country: 4,
						region: 'mds_test__row-class',
						market: 0,
					},
					{
						id: 'Mr',
						source: 'Joe',
						feed: 'Bloggs',
						country: 4,
						region: 'mds_test__row-class',
						market: 0,
					},
					{
						id: 'Mr',
						source: 'Joe',
						feed: 'Bloggs',
						country: 4,
						region: 'mds_test__row-class',
						market: 0,
					},

				],
				headers: [
					{
						fieldName: 'id',
						text: 'Id',
						class: 'mds_test__column-class',
					},{
						fieldName: 'source',
						text: 'Source',
						class: 'mds_test__column-class',
					},
					{
						fieldName: 'feeds',
						text: 'Feed',
					},
					{
						fieldName: 'keys',
						text: 'Key',
					},
					{
						fieldName: 'region',
						text: 'Region',
					},
					{
						fieldName: 'country',
						text: 'Country',
					},
					{
						fieldName: 'state',
						text: 'State',
					},
					{
						fieldName: 'market',
						text: 'Market',
					},
				],
			};
		},
		computed: {
			// a computed getter
			searchItem: function () {
				// `this` points to the vm instance
				return this.searchData
			},
			totalCountsPerSearch: function () {
				return this.feedsFiltered.count
			}
		},
		//https://v4.apollo.vuejs.org/guide-option/queries.html#reactive-query-example
		apollo: {
			//https://v4.apollo.vuejs.org/api/smart-query.html#options
			feedsFiltered: {
				query: gql`query feedsFiltered($filter:String!, $page: Int!, $pageSize: Int!) {
		 			feedsFiltered(filter: $filter, skip:$page , take:$pageSize ){
		 			count
		    		navigations{
		    		id
				     source
				     feeds
				     keys
				     region
				     country
				     state
				     market
		   		 }
  			}
    }`,
				// Reactive parameters
				variables () {
					// Use vue reactive properties here
					return {
						filter: this.searchItem,
						page: this.currentPage,
						pageSize:this.currentPageSize,
						// cursor: this.lastItemInCursor
					}
				},
				//https://medium.com/@galen.corey/understanding-apollo-fetch-policies-705b5ad71980
				fetchPolicy: 'cache-first',
				result ({ data, loading, networkStatus }) {
					if (data){
					this.paginationOpts["totalItems"]= data.feedsFiltered.count
					}
				},
			},
		},
		methods: {
			paginateTable(arg) {
				// this.firstItem = arg.firstItem;
				// this.lastItem = arg.lastItem;
				this.currentPage = arg.page;
				this.currentPageSize = arg.pageSize;
				this.paginationOpts["totalItems"]=this.feedsFiltered.count
				// this.showRows = this.feedsFiltered.slice(arg.firstItem - 1, arg.lastItem);
			// },
			// paginateTable(args) {
			// 	this.currentPage++
				// Fetch more data and transform the original result
				//https://github.com/apollographql/apollo-client/issues/7496
				// this.$apollo.queries.feedsFiltered.fetchMore({
				// 	// Reactive parameters
				// 	variables () {
				// 		// Use vue reactive properties here
				// 		return {
				// 			filter: this.searchItem,
				// 			page: this.currentPage,
				// 			pageSize:this.currentPageSize
				// 		}
				// 	},
				// 	// Transform the previous result with new data
				// 	updateQuery: (previousResult, {fetchMoreResult}) => {
				// 		const newNavs = fetchMoreResult.feedsFiltered.navigations
				// 		// const hasMore = fetchMoreResult.feedsFiltered.hasMore
				//
				// 		// this.showMoreEnabled = hasMore
				//
				// 		return {
				// 			feedsFiltered: {
				// 				__typename: previousResult.feedsFiltered.__typename,
				// 				// Merging the tag list
				// 				feedsFiltered: [...previousResult.feedsFiltered.navigations, ...newNavs],
				// 			},
				// 		}
				// 	},
				// })
			},
		}
	}
</script>