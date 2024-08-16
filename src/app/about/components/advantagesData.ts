import { CalendarDays, ChevronsUp, LucideIcon, Smile, ThumbsUp } from 'lucide-react'

interface IAdvantagesData {
	id: string
	IconComponent: LucideIcon
	text: string
}

export const advantagesData: IAdvantagesData[] = [
	{
		id: '1',
		IconComponent: CalendarDays,
		text: 'Долгосрочные партнерские отношения с клиентами',
	},
	{
		id: '2',
		IconComponent: ChevronsUp,
		text: 'Ориентация на непрерывное развитие и рост',
	},
	{
		id: '3',
		IconComponent: ThumbsUp,
		text: 'Лучшие качество предоставляемых услуг',
	},
	{
		id: '4',
		IconComponent: Smile,
		text: 'Индивидуальный подход к каждому клиенту',
	},
]
