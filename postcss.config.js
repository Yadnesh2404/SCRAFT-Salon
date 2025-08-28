export default {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
    // Ensure CSS animations are preserved
    'postcss-preset-env': {
      features: {
        'custom-properties': false,
        'custom-media-queries': false,
        'nesting-rules': false,
      },
      // Preserve animations and keyframes
      preserve: true,
    },
  },
};
