<template>
		<div>
			<mds-section class="dashboard-navigation-item" border="none" :bold="true" >
					<mds-form>
						<mds-fieldset
								variation="checkbox-group"
								legend="Markets"
						>

							<mds-checkbox @change="handleMarketSelection($event)" :id="marketItem" :value="marketItem" :key="marketItem" v-for="marketItem in markets">{{marketItem}}</mds-checkbox>
						</mds-fieldset>
					</mds-form>
				</mds-section>
				<mds-section class="dashboard-navigation-item" border="none" :bold="true" >
					<mds-form>
						<mds-fieldset
								variation="checkbox-group"
								legend="Regions"
						>
							<mds-checkbox @change="handleRegionSelection($event)" :key="regionItem" v-for="regionItem in regions">{{regionItem}}</mds-checkbox>
						</mds-fieldset>
					</mds-form>

				</mds-section>
				<mds-section class="dashboard-navigation-item" border="none" :bold="true" >
					<mds-form>
						<mds-fieldset
								variation="checkbox-group"
								legend="Countries"
						>
							<mds-checkbox @change="handleCountrySelection($event)" :key="countryItem" v-for="countryItem in countries">{{countryItem}}</mds-checkbox>
						</mds-fieldset>
					</mds-form>
				</mds-section>
			</div>
</template>
<script>
	import MdsSection from '@mds/section'
	import {MdsCol} from '@mds/layout-grid';
	import MdsFieldset from '@mds/fieldset'
	import MdsCheckbox from '@mds/checkbox'
	import MdsForm from '@mds/form'
	import gql from 'graphql-tag'

	export default {
		name: 'LeftNavigation',
		components: {MdsSection, MdsCol, MdsFieldset, MdsCheckbox, MdsForm},
		data() {
			return {
				countryNav:[],
				regionNav:[],
				marketNav:[],
				selectedCountry:"",
				selectedRegion:"",
				selectedMarket:""
			}
			}
			,
		apollo: {
			countryNav: {
				query: gql`query {
		 			countryNav{
		 			country
  					}
    		}`,},
				marketNav: {
					query: gql`query {
		 			marketNav{
		 			market
  			}
    	}`},
				regionNav: {
						query: gql`query {
		 			regionNav{
		 			region
  			}
    	}`,
					},
			},
		computed: {
			countries: function () {
				return this.countryNav.reduce((acc, item) => {
					if (item.country) {
						acc.push(item.country);
					}
					return acc;
				}, [])
			},
			markets: function () {
				return this.marketNav.reduce((acc, item) => {
					if (item.market) {
						acc.push(item.market);
					}
					return acc;
				}, [])
			},
			regions: function () {
				return this.regionNav.reduce((acc, item) => {
					if (item.region) {
						acc.push(item.region);
					}
					return acc;
				}, [])
			},
		},
		methods: {
			handleMarketSelection(value) {
				this.selectedMarket= event.target.value
				this.$emit("marketNavChanged",this.selectedMarket)
			},
			handleRegionSelection(value) {
				this.selectedRegion= event.target.value
				this.$emit("marketNavChanged",this.selectedRegion)
			},
			handleCountrySelection(value) {
				this.selectedCountry= event.target.value
				this.$emit("marketNavChanged",this.selectedCountry)
			}
		}
	}
</script>
<style lang="scss">
	.side-bar__container {
		height: 100vh;
		padding: 16px;
		/*background-color: pink;*/
		/*<!--padding: $mds-space-2-x;-->*/
		/*<!--background-color: $mds-background-color-light-gray;-->*/
	}
	.side-bar__content {
		height: 100%;
		overflow-y: scroll;
	}
</style>