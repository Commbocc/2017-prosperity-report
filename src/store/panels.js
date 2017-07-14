import icon1 from '@/assets/prosperity-report-icon-1.png'
import icon2 from '@/assets/prosperity-report-icon-2.png'
import icon3 from '@/assets/prosperity-report-icon-3.png'
import icon4 from '@/assets/prosperity-report-icon-4.png'
import icon5 from '@/assets/prosperity-report-icon-5.png'

export default {
	state: {
		index: [
			{
				index: 1,
				title: "Strong & Sustainable Local Economy",
				colorHex: "#bfbfbf",
				colorRGB: "191,191,191",
				icon: icon1,
				path: "/economic-development",
				heading: "Economic Development",
				subheading: "Small and Minority Business Development",
				serviceHeading: "Small Businesses participate in Entrepreneur Collaborative Center activities and receive consulting services",
				services: [
					"Mandated by <strong>Resolution</strong>"
				],
				serviceStats: [
					{
						title: "Actual Units of service provided in FY16",
						value: "$2,095,635.20"
					},
					{
						title: "Actual Clients Served in FY16",
						value: "62,956",
						note: "Small Businesses in Hillsborough County"
					},
					{
						title: "Projected Units of Service provided in FY18",
						value: "11,600*"
					},
					{
						title: "Clients Served (Projected for FY18)",
						value: "65,499*",
						note: "Small Businesses in Hillsborough County"
					}
				],
				serviceNotes: [
					"* 2% annual growth in small businesses based on past trendline"
				],
				serviceCosts: [
					{
						title: "Total Cost of Service",
						note: "excludes Indirects",
						value: "$2,095,635.20"
					},
					{
						title: "Total Salaries for Providing Services",
						value: "$1,241,085.20"
					},
					{
						title: "Total Operating Costs",
						value: "$854,550.00"
					},
					{
						title: "Cost of service for Participating Small Businesses",
						value: "$180.66"
					},
					{
						title: "Cost per Total Number of Hillsborough County Small Business",
						value: "$31.99"
					}
				],
				totalBudget: "$9,311,272.00",
				totalBudgetPercent: 23,
				totalBudgetNote: "",
				footer: "Utilization of MBE and SBE Firms in County Contracts (FY16: 17.1%; FY17: 17.5%; FY18: 18%)"
			},
			{
				index: 2,
				title: "Enhanced Public Safety",
				colorHex: "#dbad4d",
				colorRGB: "219,173,77",
				icon: icon2,
				path: "/fire-rescue",
				heading: "Fire Rescue",
				subheading: "Emergency Service Delivery",
				serviceHeading: "Emergency Call Responses",
				services: [
					"Service is <strong>Mandated</strong>"
				],
				serviceStats: [
					{
						title: "Actual Units of service provided in FY16",
						value: "103,433"
					},
					{
						title: "Actual Clients Served in FY16",
						value: "924,013",
						note: "Citizens residing in unincorporated Hillsborough County"
					},
					{
						title: "Projected Units of Service provided in FY18",
						value: "114,035*"
					},
					{
						title: "Clients Served (Projected for FY18)",
						value: "963,373**",
						note: "Citizens residing in unincorporated Hillsborough County"
					}
				],
				serviceNotes: [
					"* 5% annual increase in Emergency Call Responses",
					"** Approx. 2% annual population increase for unincorporated citizens.",
					"Source: University of Florida Bureau of Economic and Business Research"
				],
				serviceCosts: [
					{
						title: "Total Cost of Service",
						note: "excludes Indirects",
						value: "$134,775,754.00"
					},
					{
						title: "Total Salaries for Providing Services",
						value: "$113,239,816.00"
					},
					{
						title: "Total Operating Costs",
						value: "$21,457,938.00"
					},
					{
						title: "Total Grants and Aid",
						value: "$78,000.00"
					},
					{
						title: "Cost per Emergency Call Response",
						note: "excludes pass thru costs \"Grants & Aids\"",
						value: "$1,181.20"
					},
					{
						title: "Cost per Citizen",
						note: "includes pass thru costs \"Grants & Aids\"",
						value: "$139.90",
					}
				],
				totalBudget: "$148,307,104.00",
				totalBudgetPercent: 91,
				totalBudgetNote: "Indirects as Reflected in the FY18 Budget: <strong>$6,997,053.00</strong>",
				footer: "1) 1st on scene, Urban, Fire 90% of the time in under 6 minutes (FY16: 53.61%; FY17: 52.12%) / 2) 1st on scene, Suburban, Fire 90% of the time in under 7 minutes (FY16: 52.82%; FY17: 51.48%) / 3) 1st on scene, Rural, Fire 90% of the time in under 10 minutes FY16: 66.38%; FY17: 62.58%) / 4) 1 st ALS unit on scene within 7 minutes 90% of the time (FY16: 60.29%; FY17: 58.0%) / 5) 1 st ALS transport on scene within 9 minutes 90% of the time (FY16: 78.37%; FY17: 78.28%)"

			},
			{
				index: 3,
				title: "Life Enrichment & Recreational Opportunities",
				colorHex: "#0cb3a0",
				colorRGB: "12,179,160",
				icon: icon3,
				path: "/conservation-environmental-land-management",
				heading: "Conservation & Environmental Land Management",
				subheading: "Conservation Parks Access Recreation",
				serviceHeading: "Acres Managed",
				services: [
					"<strong>ROI</strong>"
				],
				serviceStats: [
					{
						title: "Actual Units of service provided in FY16",
						value: "80,336"
					},
					{
						title: "Actual Clients Served in FY16",
						value: "2,830,784",
						note: "Visitors"
					},
					{
						title: "Projected Units of Service provided in FY18",
						value: "80,969"
					},
					{
						title: "Clients Served (Projected for FY18)",
						value: "2,950,000*",
						note: "Visitors"
					}
				],
				serviceNotes: [
					"* Follows projected annual 4% increase in park attendance"
				],
				serviceCosts: [
					{
						title: "Total Cost of Service",
						note: "excludes Indirects",
						value: "$8,349,972.00"
					},
					{
						title: "Total Salaries for Providing Services",
						value: "$6,569,338.00"
					},
					{
						title: "Total Operating Costs",
						value: "$1,780,634.00"
					},
					{
						title: "Cost per Acre Managed",
						value: "$103.13"
					},
					{
						title: "Cost per visit",
						note: "excludes pass thru costs \"Grants & Aids\"",
						value: "$2.83"
					}
				],
				totalBudget: "$13,574,297.00",
				totalBudgetPercent: 62,
				totalBudgetNote: "Indirects as Reflected in the FY18 Budget: <strong>$96,341.00</strong>",
				footer: "Cost recovery of 25% through revenue generation. FY16 Actual 28.8%, FY17 Planned 29%, FY18 Projected 25%"

			},
			{
				index: 4,
				title: "Self-Sufficient Individuals & Families",
				colorHex: "#09a9c6",
				colorRGB: "9,169,198",
				icon: icon4,
				path: "/social-services",
				heading: "Social Services",
				subheading: "Comprehensive Case Management",
				serviceHeading: "Low income eligible families will receive financial assistance along with comprehensive case management increasing the probability that they will achieve identified short-term and long-term self sufficiency goals",
				services: [
					"Service is <strong>Grant/Contract</strong>"
				],
				serviceStats: [
					{
						title: "Actual Units of service provided in FY16",
						value: "5,873"
					},
					{
						title: "Actual Clients Served in FY16",
						value: "5,873"
					},
					{
						title: "Projected Units of Service provided in FY18",
						value: "5,286*"
					},
					{
						title: "Clients Served (Projected for FY18)",
						value: "5,286*"
					}
				],
				serviceNotes: [
					"* Anticipate 10% reduction in grant funding"
				],
				serviceCosts: [
					{
						title: "Total Cost of Service",
						note: "excludes Indirects",
						value: "$2,555,933.00"
					},
					{
						title: "Total Salaries for Providing Services",
						value: "$1,396,041.00"
					},
					{
						title: "Total Operating Costs",
						value: "$173,085.00"
					},
					{
						title: "Total Grants and Aid",
						value: "$986,807.00"
					},
					{
						title: "Service Cost per Client",
						note: "excludes pass thru costs \"Grants & Aids\"",
						value: "$296.85"
					},
					{
						title: "Cost per Client",
						note: "includes pass thru costs \"Grants & Aids\"",
						value: "$483.53"
					}
				],
				totalBudget: "$11,748,528.00",
				totalBudgetPercent: 22,
				totalBudgetNote: null,
				footer: null

			},
			{
				index: 5,
				title: "High-Quality Community Assets",
				colorHex: "#ff5900",
				colorRGB: "255,89,0",
				icon: icon5,
				path: "/public-works",
				heading: "Public Works",
				subheading: "Transportation Maintenance",
				serviceHeading: "130 Lane Miles of Roadway resurfaced, 3,329 linear feet of sidewalk repair",
				services: [
					"Service is <strong>Mandated/Local Ordinance/ROI</strong>"
				],
				serviceStats: [
					{
						title: "Actual Units of service provided in FY16",
						value: "144",
						note: "Lane Miles of Road"
					},
					{
						title: "Actual Clients Served in FY16",
						value: "924,013"
					},
					{
						title: "Projected Units of Service provided in FY18",
						value: "137*",
						note: "Lane Miles of Road"
					},
					{
						title: "Clients Served (Projected for FY18)",
						value: "963,373"
					}
				],
				serviceNotes: [
					"* Based on current year trends and on the average of 2009 - 2017"
				],
				serviceCosts: [
					{
						title: "Total Cost of Service",
						note: "excludes Indirects",
						value: "$25,950,000.00"
					},
					{
						title: "Cost per Lane Mile of Road",
						value: "$189,002.18"
					},
					{
						title: "Cost per Citizen",
						value: "$26.94"
					}
				],
				totalBudget: "$123,988,909.20",
				totalBudgetPercent: 16,
				totalBudgetNote: null,
				footer: null

			}
		]
	}
}
