import styled from 'styled-components'
import { DefaultTheme } from 'styled-components'

interface RowProps {
    theme: DefaultTheme
}

const Row = styled.div<RowProps>`
    display: flex;
    justify-content: center;
    align-item: center;
    flex-direction: row;
    border-bottom: 3px solid purple;

`;

export default Row