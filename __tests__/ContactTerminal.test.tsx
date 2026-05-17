import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { expect, test, describe } from 'vitest';
import Contact from '../components/Contact';

describe('Contact Terminal', () => {
  test('renders initial terminal history', () => {
    render(<Contact />);
    expect(screen.getByText(/Meiske Terminal v2.6.0/i)).toBeInTheDocument();
  });

  test('handles "whoami" command correctly', () => {
    render(<Contact />);
    const input = screen.getByRole('textbox');
    
    fireEvent.change(input, { target: { value: 'whoami' } });
    fireEvent.submit(input);
    
    expect(screen.getByText(/Informatics Student at Batam State Polytechnic/i)).toBeInTheDocument();
  });

  test('handles "clear" command correctly', () => {
    render(<Contact />);
    const input = screen.getByRole('textbox');
    
    // Ensure initial text is there
    expect(screen.getByText(/Meiske Terminal v2.6.0/i)).toBeInTheDocument();
    
    fireEvent.change(input, { target: { value: 'clear' } });
    fireEvent.submit(input);
    
    // History should be cleared
    expect(screen.queryByText(/Meiske Terminal v2.6.0/i)).not.toBeInTheDocument();
  });

  test('handles unknown commands gracefully', () => {
    render(<Contact />);
    const input = screen.getByRole('textbox');
    
    fireEvent.change(input, { target: { value: 'hack_the_mainframe' } });
    fireEvent.submit(input);
    
    expect(screen.getByText(/Command not found: hack_the_mainframe/i)).toBeInTheDocument();
  });
});
