import { render, screen } from "@testing-library/react";
import { Title1 } from "../src/PropTypes";

describe('PropTypes.jsx', () => {
    
    const title = 'Test title';

    test('Title1_MustShowTitle', () => {

        render(<Title1 title={title} />)

        var h1 = screen.getByText(title);
        expect(h1).toBeTruthy();
        expect(h1.innerHTML).toContain(title);
        expect(h1.innerHTML).toBe(title);
        expect(screen.getByRole('heading', {level: 1}));
        expect(screen.getByRole('heading', {level: 1}).innerHTML).toContain(title);
    });

    test('Title1_MustShowOneSubtitle', () => {

        const subtitle = 'Subtitle';

        render(
            <Title1 title={title} subtitle={subtitle} />
        );

        expect(screen.getAllByText(subtitle)).toHaveLength(2);

    });

});