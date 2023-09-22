import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App/App';


describe('The main page', () => {
    it('should show title', () => {
        render(<App />);
        const headerText = screen.getByText(/Chez vous, partout et ailleurs/i);
        expect(headerText).toBeInTheDocument();
    })
    it('should show footer', () => {
        render(<App />);
        const footerText = screen.getByText(/© 2020 Kasa\. All rights reserved/i);
        expect(footerText).toBeInTheDocument();
    })
})
