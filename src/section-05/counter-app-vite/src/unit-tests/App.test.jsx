import { render } from "@testing-library/react";
import App from "../App";

describe('Component: App',()=>{

    test('should match snapshot',()=>{

        render(<App/>);

    })

});