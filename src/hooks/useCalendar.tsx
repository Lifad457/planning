import { useEffect, useState } from 'react';

function useCalendar({ year, month }: { year: number; month: number }) {
	const [calendar, setCalendar] = useState<Date[]>([]);

	const getDates = (startDate: Date, endDate: Date) => {
		const dateArray: Date[] = [];
		let loop = new Date(startDate);
		while (loop < endDate) {
			dateArray.push(loop);
			const newDate = loop.setDate(loop.getDate() + 1);
			loop = new Date(newDate);
		}
		setCalendar(dateArray);
	}

	useEffect(() => {
		const startDate: Date = new Date(year, month, 0);
		const endDate: Date = new Date(year, month + 1, 0);
		getDates(startDate, endDate);
	}, [year, month]);

	return {
		calendar,
	};
}
export default useCalendar;
