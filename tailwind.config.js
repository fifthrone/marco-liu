// /** @type {import('tailwindcss').Config} */
const plugin = require("tailwindcss/plugin");

module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    groups: ["add", "button"],
    extend: {
      poppins: ['var(--font-poppins)'],

    },
  },
  plugins: [
		plugin(({ addVariant, theme }) => {
			const groups = theme("groups") || [];

			groups.forEach((group) => {
				addVariant(`group-${group}-hover`, () => {
					return `:merge(.group-${group}):hover &`;
				});
			});
		}),
  ],
}
