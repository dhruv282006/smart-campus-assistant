import React from 'react';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, info) {
    console.error('ErrorBoundary caught an error', error, info);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div style={{ padding: 24 }}>
          <h2 style={{ color: '#ff6b6b' }}>Something went wrong</h2>
          <pre style={{ whiteSpace: 'pre-wrap', color: '#ffdede' }}>{String(this.state.error)}</pre>
          <p style={{ color: '#ccc' }}>Open the browser console for more details.</p>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
