export default {
	content: ["./src/**/*.{html,js,jsx}"],
	theme: {
		extend: {
			fontFamily: {
				orbitron: ["Orbitron", "sans-serif"],
				raleway: ["Raleway", "sans-serif"]
			},
			screens: {
				max_2xl: { max: "1535px" }, //max-width: 1535px
				max_xl: { max: "1279px" }, //max-width: 1279px (1280보다 브라우저 폭이 적어질떄 적용할 스타일)
				max_lg: { max: "1023px" },
				max_md: { max: "767px" },
				max_sm: { max: "639px" }
			}
		}
	},
	plugins: []
};
