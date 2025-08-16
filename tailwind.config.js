module.exports = {
    content: [
        "./**/*.html",
        "./**/*.js",
        "./**/*.jsx",
        "./**/*.ts",
        "./**/*.tsx",
        "./**/*.vue",
        "./**/*.svelte",
        './index.html',
        './src/**/*.{js,ts,jsx,tsx}',
    ],

    // Forzar generación de clases específicas
    safelist: [
        // Padding classes
        'px-menuH', 'py-menuH', 'p-menuH',
        'px-containerX', 'py-containerX', 'p-containerX',
        'px-sectionY', 'py-sectionY', 'p-sectionY',

        // Margin classes  
        'mx-menuH', 'my-menuH', 'm-menuH',
        'mx-containerX', 'my-containerX', 'm-containerX',
        'mx-sectionY', 'my-sectionY', 'm-sectionY',

        // Specific directional classes
        'ml-containerX', 'mr-containerX', 'mt-sectionY', 'mb-sectionY',
        'pl-menuH', 'pr-menuH', 'pt-containerX', 'pb-containerX',

        // Gap classes for flexbox/grid
        'gap-containerX', 'gap-menuH',

        // Width/Height classes
        'w-menuH', 'h-menuH',
        'w-containerX', 'h-containerX',
        'bookmark-lg',
    ],

    theme: {
        extend: {
            /*      // Typography responsive */
            fontSize: {
                'display': 'clamp(3rem, 8vw, 6rem)',
                'heading': 'clamp(2rem, 5vw, 3rem)',
                'subheading': 'clamp(1.5rem, 4vw, 2.25rem)',
                'title': 'clamp(1.25rem, 3vw, 1.875rem)',
                'body': 'clamp(1rem, 2vw, 1.125rem)',
                'small': 'clamp(0.875rem, 1.5vw, 1rem)',
                'caption': 'clamp(0.75rem, 1vw, 0.875rem)',
            },

            spacing: {
                'menuH': 'clamp(2rem, 6vw, 5rem)',
                sm: 'clamp(2rem, 6vw, 5rem)',
                'containerX': 'clamp(1rem, 5vw, 3rem)',
                'sectionY': 'clamp(3rem, 8vw, 6rem)',
                'cardGap': 'clamp(1rem, 3vw, 2rem)',
                'buttonX': 'clamp(1.5rem, 4vw, 3rem)',
                'buttonY': 'clamp(0.75rem, 2vw, 1rem)',
            },

            width: {
                'custom311': '311px',
            },

            lineHeight: {
                'tight': '1.2',
                'normal': '1.5',
                'relaxed': '1.6',
                'loose': '1.8',
            },

            maxWidth: {
                'content': '65ch',
                'container': '1200px',
                'card': '400px',
            },

            borderRadius: {
                'responsive': 'clamp(0.5rem, 2vw, 1.5rem)',
                'card': 'clamp(0.75rem, 2vw, 1rem)',
                'button': 'clamp(0.375rem, 1vw, 0.75rem)',
            },

            gridTemplateColumns: {
                'bookmark-lg': 'minmax(540px, 1fr) minmax(735px, 1fr)',
            },

            colors: {
                primary: {
                    50: '#eff6ff',
                    500: '#3b82f6',
                    600: '#2563eb',
                    700: '#1d4ed8',
                },
                gray: {
                    50: '#f9fafb',
                    100: '#f3f4f6',
                    500: '#6b7280',
                    800: '#1f2937',
                    900: '#111827',
                }
            },
        },
    },

    plugins: [
    ],
}

