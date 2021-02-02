<template>
	<mds-col align-vertical="flex-end" :cols="2">
		<mds-section class="dashboard-navigation-item" border="none" :size="8" :bold="true" >
			<mds-form>
				<mds-fieldset
						variation="checkbox-group"
						legend="Markets"
				>
					<mds-checkbox @change="handleMarketSelection($event)" :value="marketItem" :key="marketItem" v-for="marketItem in markets">{{marketItem}}</mds-checkbox>
				</mds-fieldset>
			</mds-form>
		</mds-section>
		<mds-section @change="handleRegionSelection" class="dashboard-navigation-item" border="none" :size="8" :bold="true" >
			<mds-form>
				<mds-fieldset
						variation="checkbox-group"
						legend="Regions"
				>
					<mds-checkbox @change="handleRegionSelection($event)" :key="regionItem" v-for="regionItem in regions">{{regionItem}}</mds-checkbox>
				</mds-fieldset>
			</mds-form>

		</mds-section>
		<mds-section @change="handleCountrySelection" class="dashboard-navigation-item" border="none" :size="8" :bold="true" >
			<mds-form>
				<mds-fieldset
						variation="checkbox-group"
						legend="Countries"
				>
					<mds-checkbox @change="handleCountrySelection($event)" :key="countryItem" v-for="countryItem in countries">{{countryItem}}</mds-checkbox>
				</mds-fieldset>
			</mds-form>

		</mds-section>
	</mds-col>
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
			},
			handleRegionSelection(value) {
				this.selectedRegion= event.target.value
			},
			handleCountrySelection(value) {
				this.selectedCountry= event.target.value
			}
		}
	}
</script>