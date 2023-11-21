import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'

import Header from '../components/Header'

test("displays the text 'Welcome to this page, from header'", ()=>{
    render(<Header  />);

    expect(screen.getByText("Welcome to this page, from header")).toBeInTheDocument();
})