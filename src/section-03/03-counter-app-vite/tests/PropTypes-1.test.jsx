import { render } from "@testing-library/react";
import { Title1 } from "../src/PropTypes";

describe('PropTypes.jsx', () => {

    // test('Title1_MustMatchWithSnapshot',()=>{

    //     const title = 'Test title';

    //     const container = render( <Title1 title={title}/> )

    //     expect(container).toMatchSnapshot();

    // });

    test('Title1_MustShowTitle', () => {

        const title = 'Test title';

        const { container, getByText } = render(<Title1 title={title} />)

        expect(getByText(title)).toBeTruthy();

        //No es recomendado usar lo siguiente, pero se puede hacer así:
        const h1 = container.querySelector('h1');
        expect(h1.innerHTML).toContain(title);
        expect(h1.innerHTML).toBe(title);
    });

    test('Title1_MustShowOneSubtitle', () => {

        const title = 'Test title',
            subtitle = 'Subtitle';

        const { container, getByText, getAllByText } = render(
            <Title1 title={title} subtitle={subtitle} />
        )

        const h2 = container.querySelector('h2');
        expect(h2).toBeTruthy();
        expect(h2.innerHTML).not.toBe('');

        // getByText -> Solo evalúa por un elemento
        // expect(getByText(subtitle)).toBeTruthy();

        expect(getAllByText(subtitle)).toHaveLength(2);

    });

});