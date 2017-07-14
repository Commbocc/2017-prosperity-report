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
				path: "/economic-development"
			},
			{
				index: 2,
				title: "Enhanced Public Safety",
				colorHex: "#dbad4d",
				colorRGB: "219,173,77",
				icon: icon2,
				path: "/fire-rescue"
			},
			{
				index: 3,
				title: "Life Enrichment & Recreational Opportunities",
				colorHex: "#0cb3a0",
				colorRGB: "12,179,160",
				icon: icon3,
				path: "/conservation-environmental-land-management"
			},
			{
				index: 4,
				title: "Self-Sufficient Individuals & Families",
				colorHex: "#09a9c6",
				colorRGB: "9,169,198",
				icon: icon4,
				path: "/social-services"
			},
			{
				index: 5,
				title: "High-Quality Community Assets",
				colorHex: "#ff5900",
				colorRGB: "255,89,0",
				icon: icon5,
				path: "/public-works"
			}
		]
	}
}
