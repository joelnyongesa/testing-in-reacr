import '@testing-library/jest-dom'
import { screen, render } from '@testing-library/react'

import Test from '../components/Test'

test("displays the test 'Welcome to testing in React, Buddy!'", ()=>{
    render(<Test />);

    expect(screen.getByText('Welcome to testing in React, buddy!')).toBeInTheDocument();
})