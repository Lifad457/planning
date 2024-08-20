import styled from 'styled-components';

export const PillContainer = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;
	background-color: var(--clr-secondary);
	border-radius: 0.5rem;
	margin-block: 0.3rem;

	&:hover {
		cursor: pointer;
	}
`;
export const ImageWrapper = styled.img`
	display: flex;
	width: 2.5rem;
	margin: 0.2rem;
	border-radius: 50%;
	aspect-ratio: 1/1;
	background-color: var(--clr-secondary);
`;
export const TextWrapper = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	width: 100%;
	height: fit-content;
	padding: 0.6rem;
	color: var(--clr-primary);
`;
