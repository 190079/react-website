import React from 'react';
import './accessibility.css'
function AccessibilityContainer({children}) {
    const container = <nav className="container">{children}</nav>;
    return container;
}

export default AccessibilityContainer;