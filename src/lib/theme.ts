
export const theme = {
  colors: {
    eco: {
      blue: '#2C4698',
      lightblue: '#4169E1',
      red: '#E45858',
      green: '#4CAF50',
      yellow: '#FFB74D',
      teal: '#009688'
    },
    status: {
      normal: {
        bg: '#E9F7EF',
        border: '#4CAF50',
        text: '#2E7D32'
      },
      alert: {
        bg: '#FEF0F0',
        border: '#E45858',
        text: '#C62828'
      },
      warning: {
        bg: '#FFFAEB',
        border: '#FFB74D',
        text: '#F57F17'
      }
    }
  },
  fonts: {
    body: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif",
    heading: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif",
    mono: "SFMono-Regular, Menlo, Monaco, Consolas, 'Liberation Mono', 'Courier New', monospace"
  },
  shadows: {
    sm: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
    md: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
    lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
    xl: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)'
  },
  transitions: {
    fast: 'all 0.1s ease-in-out',
    normal: 'all 0.2s ease-in-out',
    slow: 'all 0.3s ease-in-out'
  }
};
