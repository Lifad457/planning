import styled from 'styled-components';

export const PlanningContainer = styled.div`
	display: flex;
	flex-direction: column;
	gap: 1rem;
	padding: 1rem;

	-moz-user-select: none;
	-webkit-user-select: none;
	-ms-user-select: none;
	user-select: none;
`;
export const PlanningHeader = styled.header`
	display: flex;
	justify-content: space-between;
	width: 100%;
	color: var(--clr-primary);
	font-size: var(--fs-extra-small);

	.react-icons {
		font-size: var(--fs-medium);
		cursor: pointer;
	}
`;
export const PlanningContent = styled.div`
	display: grid;
	grid-template-columns: repeat(auto-fit, minmax(15rem, 1fr));
	gap: 1rem;
`;
export const IconWrapper = styled.div`
	display: flex;
	gap: 0.7rem;
	align-items: center;
	justify-content: center;
`;
export const DayCard = styled.div`
	display: flex;
	flex-direction: column;
	padding: 1rem;
	width: 100%;
	height: 100%;
	aspect-ratio: auto 1 / 1;
	background-color: var(--clr-primary);
	color: var(--clr-secondary);
	font-size: var(--fs-normal);
`;
export const DayCardHeader = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	width: 100%;
	padding-block: 0 0.8rem;

	.add-icon {
		font-size: var(--fs-medium);
		cursor: pointer;
	}
`;
