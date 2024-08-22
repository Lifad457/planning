import { IconContext } from 'react-icons';
import { useEffect, useState } from 'react';

import {
	DayCard,
	IconWrapper,
	PlanningContainer,
	PlanningHeader,
	PlanningContent,
	DayCardHeader,
} from './Planning.css';

import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { GrFormAdd } from 'react-icons/gr';

import useCalendar from '../../hooks/useCalendar';
import { PETS } from '../../utils/db.ts';

import PetPill from '../../components/common/PetPill/PetPill';
import Modal from '../../components/common/Modal/Modal.tsx';
import PetCard from '../../components/common/PetCard/PetCard.tsx';

interface OWNER {
	_id: string;
	ownerName: string;
	fullName: string;
	ownerAdress1: string;
	ownerAdress2: string;
	ownerAdress3: string;
	ownerAdress4: string;
	ownerZip: string;
	ownerCity: string;
}

interface PET {
	_id: string;
	petName: string;
	petType: string;
	pricePerDay: number;
	dates: string[];
	owner: OWNER;
}

function Planning() {
	const _YEAR: number = new Date().getFullYear();
	const [month, setMonth] = useState<number>(new Date().getMonth());
	const [isOpen, setIsOpen] = useState<boolean>(false);
	const [pet, setPet] = useState<PET | null>(null);
	const [total, setTotal] = useState<number>(0);

	const onOpen = (pillPet: PET | null) => {
		setPet(pillPet);
		setIsOpen(true);
	};
	const onClose = () => setIsOpen(false);

	const { calendar } = useCalendar({ year: _YEAR, month: month });

	const toTitleCase = (str: string) => {
		return str.charAt(0).toUpperCase() + str.slice(1);
	};

	const getPetsByDate = (date: Date) => {
		const pets = PETS.filter((filteredPet: PET) => {
			const dateString = date.toLocaleDateString('fr-FR');
			return filteredPet.dates.includes(dateString);
		});
		return pets;
	};

	useEffect(() => {
		let monthlyTotal = 0;
		calendar.map((date) =>
			getPetsByDate(date).map((currentPet: PET) => {
				monthlyTotal += currentPet.pricePerDay;
			})
		);
		setTotal(monthlyTotal);
	}, [calendar]);

	return (
		<>
			<PlanningContainer>
				<Modal isOpen={isOpen} onClose={onClose}>
					<PetCard pet={pet} onClose={onClose} />
				</Modal>

				<PlanningHeader>
					<div>
						<h1>
							{`Planning ${calendar[0]?.toLocaleDateString(
								'fr-FR',
								{ month: 'long' }
							)} ${calendar[0]?.getFullYear()}`}
						</h1>
						<h1>{`Total : ${total} €`}</h1>
					</div>
					<IconWrapper>
						<IconContext.Provider
							value={{ className: 'react-icons' }}
						>
							<FaChevronLeft
								onClick={() => setMonth(month - 1)}
							/>
							<FaChevronRight
								onClick={() => setMonth(month + 1)}
							/>
						</IconContext.Provider>
					</IconWrapper>
				</PlanningHeader>

				<PlanningContent>
					{calendar.map((date, index) => (
						<DayCard key={index}>
							<DayCardHeader>
								{toTitleCase(
									date.toLocaleDateString('fr-FR', {
										day: 'numeric',
										weekday: 'long',
									})
								)}
								<IconContext.Provider
									value={{ className: 'add-icon' }}
								>
									<GrFormAdd onClick={() => onOpen(null)} />
								</IconContext.Provider>
							</DayCardHeader>
							{getPetsByDate(date).map((currentPet: PET) => (
								<PetPill
									key={currentPet._id}
									currentPet={currentPet}
									onOpen={() => onOpen(currentPet)}
								/>
							))}
						</DayCard>
					))}
				</PlanningContent>
			</PlanningContainer>
		</>
	);
}

export default Planning;
