import { render } from "@testing-library/react";
import Timer from './Timer';

describe('Basic Timer functionalities', () => {
    it('Should render Timer component in DOM', () => {
        render(<Timer/>)
    });
})