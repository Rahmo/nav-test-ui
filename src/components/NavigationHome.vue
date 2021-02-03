<template>
<!--	<mds-layout-grid>-->
<!--		<mds-row >-->
	<div class="page">
		<div class="side-bar__container">
			<div class="side-bar__content">
			<LeftNavigation @marketNavChanged="handNavChange"/>
			</div>
		</div>
		<div class="content__container">
			<div class="content">
				<ToolBar @handleSearchInputEvent="handleSearchData"/>
				<MainTable :searchData="searchField" :navData="navData" />
			</div>
		</div>
	</div>
</template>

<script>
	import LeftNavigation from "./LeftNavigation";
	import ToolBar from "./ToolBar";
	import MainTable from "./MainTable";

	export default {
		name: 'NavigationHome',
		components: {
			MainTable,
			ToolBar,
			LeftNavigation,
		},
		data() {
			return {
				searchField:"",
				modelSearchField1:"",
				navData:""
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
				this.navData = value
			}
		},
	};
</script>
<style lang="scss">

	body {
		overflow: hidden;
		margin: 0;
	}

	.page {
		display: flex;
	}


	.side-bar__content {
	 height: 100%;
	}

	.side-bar__container {
		box-sizing: border-box;
		padding: 16px;
		flex-shrink: 0;
		height: calc(100vh);
		background-color: lightgrey;
		width: 300px;
		overflow-y: scroll;

		.mds-section:not(:last-child) {
			margin-bottom: 32px;
		}
	}

	.side-bar__content {
		 height: 100%;
	}
	.content__container {
		flex-grow: 1;
		height: calc(100vh);
		overflow-y: scroll;
	}


	.content {
		max-width: 1000px;
		margin: 0 auto;
		background-color: ghostwhite;
	}
</style>