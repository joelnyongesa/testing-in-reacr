import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'

import Name from '../components/Name'

test("displays the test 'Hi, my name is Joel Nyongesa.", ()=>{
    render(<Name />);


    expect(screen.getByText("Hi, my name is Joel Nyongesa.")).toBeInTheDocument();
})